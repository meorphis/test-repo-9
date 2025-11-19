# Incident Io 2 TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/incident-io-2-typescript.git
cd incident-io-2-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export INCIDENT_IO_2_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y incident-io-2-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "incident_io_2_api": {
      "command": "node",
      "args": [
        "/path/to/local/incident-io-2-typescript/packages/mcp-server",
        "--client=claude",
        "--tools=dynamic"
      ],
      "env": {
        "INCIDENT_IO_2_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are three ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API
3. Exposing a docs search tool and a code execution tool, allowing the client to write code to be executed against the TypeScript client

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Code execution

If you specify `--tools=code` to the MCP server, it will expose just two tools:

- `search_docs` - Searches the API documentation and returns a list of markdown results
- `execute` - Runs code against the TypeScript client

This allows the LLM to implement more complex logic by chaining together many API calls without loading
intermediary results into its context window.

The code execution itself happens in a Deno sandbox that has network access only to the base URL for the API.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ------------------------- | ------------------------ | --------------- |
| `x-incident-io-2-api-key` | `apiKey` | bearerAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "incident_io_2_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "incident-io-2-mcp/server";

// import a specific tool
import retrieveActions from "incident-io-2-mcp/tools/actions/retrieve-actions";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [retrieveActions, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `actions`:

- `retrieve_actions` (`read`): Get a single incident action.
- `list_actions` (`read`): List all actions for an organisation.
- `list_v2_actions` (`read`): List all actions for an organisation.
- `retrieve_v2_actions` (`read`): Get a single incident action.

### Resource `custom_field_options`:

- `create_custom_field_options` (`write`): Create a custom field option. If the sort key is not supplied, it'll default to 1000, so the option appears near the end of the list.
- `retrieve_custom_field_options` (`read`): Get a single custom field option
- `update_custom_field_options` (`write`): Update a custom field option
- `list_custom_field_options` (`read`): Show custom field options for a custom field
- `delete_custom_field_options` (`write`): Delete a custom field option

### Resource `custom_fields`:

- `create_v1_custom_fields` (`write`): Create a new custom field
- `create_v2_custom_fields` (`write`): Create a new custom field
- `delete_v1_custom_fields` (`write`): Delete a custom field
- `delete_v2_custom_fields` (`write`): Delete a custom field
- `list_v1_custom_fields` (`read`): List all custom fields for an organisation.
- `list_v2_custom_fields` (`read`): List all custom fields for an organisation.
- `retrieve_v1_custom_fields` (`read`): Get a single custom field.
- `retrieve_v2_custom_fields` (`read`): Get a single custom field.
- `update_v1_custom_fields` (`write`): Update the details of a custom field
- `update_v2_custom_fields` (`write`): Update the details of a custom field

### Resource `identity`:

- `retrieve_identity` (`read`): Test if your API key is valid, and which roles it has.

### Resource `incident_attachments`:

- `create_incident_attachments` (`write`): Attaches an external resource to an incident
- `list_incident_attachments` (`read`): List all incident attachments for a given external resource or incident. You must provide either a specific incident ID or a specific external resource type and external ID.
- `delete_incident_attachments` (`write`): Unattaches an external resource from an incident

### Resource `incident_memberships`:

- `create_incident_memberships` (`write`): Makes a user a member of a private incident

### Resource `incident_memberships.actions`:

- `revoke_incident_memberships_actions` (`write`): Revoke a user's membership of a private incident

### Resource `incident_relationships`:

- `list_incident_relationships` (`read`): List related incidents for a specific incident.

### Resource `incident_roles`:

- `create_incident_roles` (`write`): Create a new incident role
- `retrieve_incident_roles` (`read`): Get a single incident role.
- `update_incident_roles` (`write`): Update an existing incident role
- `list_incident_roles` (`read`): List all incident roles for an organisation.
- `delete_incident_roles` (`write`): Removes an existing role
- `create_v2_incident_roles` (`write`): Create a new incident role
- `delete_v2_incident_roles` (`write`): Removes an existing role
- `list_v2_incident_roles` (`read`): List all incident roles for an organisation.
- `retrieve_v2_incident_roles` (`read`): Get a single incident role.
- `update_v2_incident_roles` (`write`): Update an existing incident role

### Resource `incident_statuses`:

- `create_incident_statuses` (`write`): Create a new incident status
- `retrieve_incident_statuses` (`read`): Get a single incident status.
- `update_incident_statuses` (`write`): Update an existing incident status
- `list_incident_statuses` (`read`): List all incident statuses for an organisation.
- `delete_incident_statuses` (`write`): Delete an incident status

### Resource `incident_types`:

- `retrieve_incident_types` (`read`): Get a single incident type.
- `list_incident_types` (`read`): List all incident types for an organisation.

### Resource `incidents`:

- `create_incidents` (`write`): Create a new incident.
- `retrieve_incidents` (`read`): Get a single incident.
- `list_incidents` (`read`): List all incidents for an organisation.
- `create_v2_incidents` (`write`): Create a new incident.

  Note that if the incident mode is set to "retrospective" then the new incident
  will not be announced in Slack.

- `list_v2_incidents` (`read`): List all incidents for an organisation.

  This endpoint supports a number of filters, which can help find incidents matching certain
  criteria.

  Filters are provided as query parameters, but due to the dynamic nature of what you can
  query by (different accounts have different custom fields, statuses, etc) they are more
  complex than most.

  The maximum page size that can be requested is 250.

  To help, here are some exemplar curl requests with a human description of what they search
  for.

  Note that:

  - Filters may be used together, and the result will be incidents that match all filters.
  - IDs are normally in UUID format, but have been replaced with shorter strings to improve
    readability.
  - All query parameters must be URI encoded.

  ### By status

  With status of id=ABC, find all incidents that are set to that status:

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'status[one_of]=ABC'

  Or all incidents that are not set to status with id=ABC:

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'status[not_in]=ABC'

  ### By created_at or updated_at

  Find all incidents that follow specified date parameters for created_at and updated_at fields.
  Possible values are "gte" (greater than or equal to), "lte" (less than or equal to), and
  "date_range" (between two dates). The following example finds all incidents created before
  or on 2021-01-02T00:00:00Z:

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'created_at[lte]=2021-01-02'

  To find incidents created within a specific date range, use the date_range option with
  tilde-separated dates:

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'created_at[date_range]=2024-12-02~2024-12-08'

  ### By status category

  Find all incidents that are in a status category. Possible values are "triage",
  "declined", "merged", "canceled", "live", "learning" and "closed":

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'status_category[one_of]=live'

  Or all incidents that are not in a status category:

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'status_category[not_in]=live'

  ### By severity

  With severity of id=ABC, find all incidents that are set to that severity:

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'severity[one_of]=ABC'

  Or all incidents where severity rank is greater-than-or-equal-to the rank of severity
  id=ABC:

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'severity[gte]=ABC'

  Or all incidents where severity rank is less-than-or-equal-to the rank of severity id=ABC:

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'severity[lte]=ABC'

  ### By incident type

  With incident type of id=ABC, find all incidents that are of that type:

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'incident_type[one_of]=ABC'

  Or all incidents not of that type:

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'incident_type[not_in]=ABC'

  ### By incident mode

  By default, we return standard and retrospective incidents. This means that test and
  tutorial incidents are filtered out. To override this behaviour, you can use the
  mode filter to specify which modes you want to get.

  To find incidents of all modes:

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'mode[one_of]=standard&mode[one_of]=retrospective&mode[one_of]=test&mode[one_of]=tutorial'

  To find just test incidents:

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'mode[one_of]=test'

  ### By incident role

  Roles and custom fields have another nested layer in the query parameter, to account for
  operations against any of the roles or custom fields created in the account.

  With incident role id=ABC, find all incidents where that role is unset:

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'incident_role[ABC][is_set]=true'

  Or where the role has been set:

      	curl --get 'https://api.incident.io/v2/incidents' \
      		--data 'incident_role[ABC][is_set]=false'

  ### By option custom fields

  With an option custom field id=ABC, all incidents that have field ABC set to the custom
  field option of id=XYZ:

      	curl \
      		--get 'https://api.incident.io/v2/incidents' \
      		--data 'custom_field[ABC][one_of]=XYZ'

  Or all incidents that do not have custom field id=ABC set to option id=XYZ:

      	curl \
      		--get 'https://api.incident.io/v2/incidents' \
      		--data 'custom_field[ABC][not_in]=XYZ'

- `retrieve_v2_incidents` (`read`): Get a single incident.

  The ID supplied can be either the incident's full ID, or the numeric part of its
  reference. For example, to get INC-123, you could use either its full ID or:

      	curl \
      		--get 'https://api.incident.io/v2/incidents/123

### Resource `incidents.actions`:

- `edit_incidents_actions` (`write`): Edit an existing incident.

  This endpoint allows you to edit the properties of an existing incident: e.g. set the severity or update custom fields.

  When using this endpoint, only fields that are provided will be edited (omitted fields
  will be ignored).

### Resource `ip_allowlists`:

- `retrieve_ip_allowlists` (`read`): Show the IP allowlist for your organisation
- `update_ip_allowlists` (`write`): Update the IP allowlist for your organisation

### Resource `openapi_json`:

- `retrieve_openapi_json` (`read`): Get the OpenAPI (v2) definition.

  **DEPRECATED**: Please use the OpenAPIV3 endpoint instead. The schema returned from this endpoint does not contain new options and endpoints added in 2025 and later.

### Resource `openapi_v3_json`:

- `retrieve_openapi_v3_json` (`read`): Get the OpenAPI (v3) definition.

### Resource `severities`:

- `create_severities` (`write`): Create a new severity
- `retrieve_severities` (`read`): Get a single incident severity.
- `update_severities` (`write`): Update an existing severity
- `list_severities` (`read`): List all incident severities for an organisation.
- `delete_severities` (`write`): Delete a severity

### Resource `status_pages.incidents`:

- `list_response_incidents_status_pages_incidents` (`read`): List the linked Response incidents for a status page incident.

### Resource `alert_attributes`:

- `create_alert_attributes` (`write`): Create a new alert attribute.
- `retrieve_alert_attributes` (`read`): Show an alert attribute.
- `update_alert_attributes` (`write`): Update an alert attribute.
- `list_alert_attributes` (`read`): List alert attributes.
- `delete_alert_attributes` (`write`): Destroy an alert attribute.

### Resource `alert_events`:

- `create_http_alert_events` (`write`): Create an alert event using an HTTP source.

### Resource `alert_routes`:

- `create_alert_routes` (`write`): Create a new alert route in your account.
- `retrieve_alert_routes` (`read`): Load details about a specific alert route in your account.
- `update_alert_routes` (`write`): Update an existing alert route in your account.
- `list_alert_routes` (`read`): List all alert routes in your account.
- `delete_alert_routes` (`write`): Delete an existing alert route in your account.

### Resource `alert_sources`:

- `create_alert_sources` (`write`): Create a new alert source in your account.
- `retrieve_alert_sources` (`read`): Load details about a specific alert source in your account.
- `update_alert_sources` (`write`): Update an existing alert source in your account.
- `list_alert_sources` (`read`): List all alert sources in your account.
- `delete_alert_sources` (`write`): Delete an existing alert source in your account.

### Resource `alerts`:

- `retrieve_alerts` (`read`): Show a single alert for your account
- `list_alerts` (`read`): List all alerts for your account.
  This endpoint supports a number of filters, which can help find alerts matching certain
  criteria. These filters work similarly to the filters on the incidents endpoint, where
  a field is specified alongside a comparison operator in the query string.

  Note that:

  - Filters may be used together, and the result will be alerts that match all filters.
  - All query parameters must be URI encoded.

  ### By deduplication_key

  Find all alerts with deduplication_key ABC:

      	curl --get 'https://api.incident.io/v2/alerts' \
      		--data 'deduplication_key[is]=ABC'

  ### By status

  Find all alerts in a firing state:

      	curl --get 'https://api.incident.io/v2/alerts' \
      		--data 'status[one_of]=firing'

  ### By created_at

  Find all alerts that follow specified date parameters for created_at field.
  Possible values are "gte" (greater than or equal to), "lte" (less than or equal to), and
  "date_range" (between two dates). The following example finds all alerts created after
  2025-01-01:

      	curl --get 'https://api.incident.io/v2/alerts' \
      		--data 'created_at[gte]=2025-01-01'

  To find alerts created within a specific date range, use the date_range option with
  tilde-separated dates:

      	curl --get 'https://api.incident.io/v2/alerts' \
      		--data 'created_at[date_range]=2024-12-02~2024-12-08'

### Resource `catalog_entries`:

- `create_entry_v2_catalog_entries` (`write`): Create an entry within the catalog. We support a maximum of 50,000 entries per type.

  If you call this API with a payload where the external_id and catalog_type_id match an existing entry, the existing entry will be updated.

- `create_entry_v3_catalog_entries` (`write`): Create an entry within the catalog. We support a maximum of 50,000 entries per type.

  If you call this API with a payload where the external_id and catalog_type_id match an existing entry, the existing entry will be updated.

- `destroy_entry_v2_catalog_entries` (`write`): Archives a catalog entry.
- `destroy_entry_v3_catalog_entries` (`write`): Archives a catalog entry.
- `list_entries_v2_catalog_entries` (`read`): List entries for a catalog type.
- `list_entries_v3_catalog_entries` (`read`): List entries for a catalog type.
- `show_entry_v2_catalog_entries` (`read`): Show a single catalog entry.
- `show_entry_v3_catalog_entries` (`read`): Show a single catalog entry.
- `update_entry_v2_catalog_entries` (`write`): Updates an existing catalog entry.
- `update_entry_v3_catalog_entries` (`write`): Updates an existing catalog entry.

### Resource `catalog_resources`:

- `list_v2_catalog_resources` (`read`): List available engine resources for the catalog.

  A resource represents a type of data that can be held within the catalog, so this
  endpoint can be used to see what attribute types can be used when updating the
  schema of a catalog type.

- `list_v3_catalog_resources` (`read`): List available engine resources for the catalog.

  A resource represents a type of data that can be held within the catalog, so this
  endpoint can be used to see what attribute types can be used when updating the
  schema of a catalog type.

### Resource `catalog_types`:

- `create_catalog_types` (`write`): Create a catalog type. The schema must be updated using the UpdateTypeSchema endpoint.
- `retrieve_catalog_types` (`read`): Show a single catalog type.
- `update_catalog_types` (`write`): Updates an existing catalog type. The schema must be updated using the UpdateTypeSchema endpoint.
- `list_catalog_types` (`read`): List all catalog types for an organisation, including those synced from external resources.
- `destroy_catalog_types` (`write`): Archives a catalog type and associated entries.

### Resource `catalog_types.actions`:

- `update_schema_catalog_types_actions` (`write`): Update an existing catalog types schema, adding or removing attributes.

  Updating the schema is handled separately from creating and updating types, so that you don't
  have to worry about dependencies between types. For example, if type A has an attribute that
  relies on type B, you would have to create type B first.

  By allowing the creation of types without a schema, they can be created in any order, but it
  means that you need to make a separate call to this endpoint to update the schema.

### Resource `escalation_paths`:

- `create_escalation_paths` (`write`): Create an escalation path.

  An escalation path is a series of steps that describe how a page should be escalated,
  represented as graph, supporting conditional branches based on alert priority and working
  intervals.

  We recommend you create escalation paths in the incident.io dashboard where our path
  builder makes it easy to use conditions and visualise the path.

- `retrieve_escalation_paths` (`read`): Show an escalation path.

  We recommend you create escalation paths in the incident.io dashboard where our path
  builder makes it easy to use conditions and visualise the path.

- `update_escalation_paths` (`write`): Updates an escalation path.

  We recommend you create escalation paths in the incident.io dashboard where our path
  builder makes it easy to use conditions and visualise the path.

- `delete_escalation_paths` (`write`): Archives an escalation path.

  We recommend you create escalation paths in the incident.io dashboard where our path
  builder makes it easy to use conditions and visualise the path.

### Resource `escalations`:

- `create_escalations` (`write`): Create an escalation.

  An escalation pages people, either according to an escalation path, or directly to
  specific users. You must provide either an escalation_path_id OR user_ids, but not both.

  When escalating via an escalation path, the escalation will follow the configured path
  with its levels and timeouts, using your default [alert
  priority](https://app.incident.io/~/settings/alerts/configuration/priorities).

  When escalating directly to users, they will receive a high-urgency
  notification, based on their notification rules.

  This endpoint is rate-limited to 60 requests per minute, since it is intended for
  interactive use cases (for example someone clicking a "escalate to team" button
  in your internal developer platform). To escalate based on automated alerts, we
  recommend sending events to an alert source instead.

- `retrieve_escalations` (`read`): Show a specific escalation.
- `list_escalations` (`read`): List all escalations for your account.

  This endpoint supports a number of filters, which can help find escalations matching certain
  criteria.

  Note that:

  - Filters may be used together, and the result will be escalations that match all filters.
  - All query parameters must be URI encoded.

  To use this API, you will need an API key with the "View data" or "Create and manage on-call resources" permission.

  ### By escalation_path

  Find all escalations that escalated to escalation path with id=ABC:

      	curl --get 'https://api.incident.io/v2/escalations' \
      		--data 'escalation_path[one_of]=ABC'

  ### By status

  Find all escalations with a current status of "triggered":

      	curl --get 'https://api.incident.io/v2/escalations' \
      		--data 'status[one_of]=triggered'

  Possible values are "pending", "triggered", "acked", "resolved", "expired" and "cancelled".
  Escalations are in "pending" when they are in a grace period when the related alert has
  been grouped in an incident.

  ### By alert

  Find all escalations that were created by alert with id=ABC:

      	curl --get 'https://api.incident.io/v2/escalations' \
      		--data 'alert[one_of]=ABC'

  ### By created_at and updated_at

  Find all escalations that follow specified date parameters for created_at and updated_at fields.
  Possible values are "gte" (greater than or equal to), "lte" (less than or equal to), and
  "date_range" (between two dates).
  For example, to find all escalations updated after 2025-01-01:

      	curl --get 'https://api.incident.io/v2/escalations' \
      		--data 'updated_at[gte]=2025-01-01'

  To find all escalations created between 2025-01-01 and 2025-01-31:

      	curl --get 'https://api.incident.io/v2/escalations' \
              --data 'created_at[date_range]=2025-01-01~2025-01-31'

### Resource `follow_ups`:

- `retrieve_follow_ups` (`read`): Get a single incident follow-up.
- `list_follow_ups` (`read`): List all follow-ups for an organisation.

### Resource `incident_alerts`:

- `list_incident_alerts` (`read`): List the connections between incidents and alerts

### Resource `incident_timestamps`:

- `retrieve_incident_timestamps` (`read`): Get a single incident timestamp.
- `list_incident_timestamps` (`read`): List all incident timestamps for an organisation.

### Resource `incident_updates`:

- `list_incident_updates` (`read`): List all incident updates for an organisation, or for a specific incident.

### Resource `schedule_entries`:

- `list_schedule_entries` (`read`): Get a list of schedule entries. The endpoint will return all entries that overlap with the given window, if one is provided.

### Resource `schedule_overrides`:

- `create_schedule_overrides` (`write`): Create a new schedule override.

### Resource `schedules`:

- `create_schedules` (`write`): Create a new schedule.
- `retrieve_schedules` (`read`): Get a single schedule.
- `update_schedules` (`write`): Update a schedule.
- `list_schedules` (`read`): List configured schedules.
- `delete_schedules` (`write`): Archives a single schedule.

### Resource `users`:

- `retrieve_users` (`read`): Get a single user.
- `list_users` (`read`): List users in your account.

### Resource `workflows`:

- `create_workflows` (`write`): Create a new workflow
- `retrieve_workflows` (`read`): Show a workflow by ID
- `update_workflows` (`write`): Updates a workflow
- `list_workflows` (`read`): List all workflows
- `destroy_workflows` (`write`): Archives a workflow
