// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incidents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/incidents',
  operationId: 'Incidents V2#List',
};

export const tool: Tool = {
  name: 'list_v2_incidents',
  description:
    "List all incidents for an organisation.\n\nThis endpoint supports a number of filters, which can help find incidents matching certain\ncriteria.\n\nFilters are provided as query parameters, but due to the dynamic nature of what you can\nquery by (different accounts have different custom fields, statuses, etc) they are more\ncomplex than most.\n\nThe maximum page size that can be requested is 250.\n\nTo help, here are some exemplar curl requests with a human description of what they search\nfor.\n\nNote that:\n- Filters may be used together, and the result will be incidents that match all filters.\n- IDs are normally in UUID format, but have been replaced with shorter strings to improve\nreadability.\n- All query parameters must be URI encoded.\n\n### By status\n\nWith status of id=ABC, find all incidents that are set to that status:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'status[one_of]=ABC'\n\nOr all incidents that are not set to status with id=ABC:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'status[not_in]=ABC'\n\n### By created_at or updated_at\n\nFind all incidents that follow specified date parameters for created_at and updated_at fields.\nPossible values are \"gte\" (greater than or equal to), \"lte\" (less than or equal to), and\n\"date_range\" (between two dates). The following example finds all incidents created before\nor on 2021-01-02T00:00:00Z:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'created_at[lte]=2021-01-02'\n\nTo find incidents created within a specific date range, use the date_range option with\ntilde-separated dates:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'created_at[date_range]=2024-12-02~2024-12-08'\n\n### By status category\n\nFind all incidents that are in a status category. Possible values are \"triage\",\n\"declined\", \"merged\", \"canceled\", \"live\", \"learning\" and \"closed\":\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'status_category[one_of]=live'\n\nOr all incidents that are not in a status category:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'status_category[not_in]=live'\n\n\n### By severity\n\nWith severity of id=ABC, find all incidents that are set to that severity:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'severity[one_of]=ABC'\n\nOr all incidents where severity rank is greater-than-or-equal-to the rank of severity\nid=ABC:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'severity[gte]=ABC'\n\nOr all incidents where severity rank is less-than-or-equal-to the rank of severity id=ABC:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'severity[lte]=ABC'\n\n### By incident type\n\nWith incident type of id=ABC, find all incidents that are of that type:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'incident_type[one_of]=ABC'\n\nOr all incidents not of that type:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'incident_type[not_in]=ABC'\n\n### By incident mode\n\nBy default, we return standard and retrospective incidents. This means that test and\ntutorial incidents are filtered out. To override this behaviour, you can use the\nmode filter to specify which modes you want to get.\n\nTo find incidents of all modes:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'mode[one_of]=standard&mode[one_of]=retrospective&mode[one_of]=test&mode[one_of]=tutorial'\n\nTo find just test incidents:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'mode[one_of]=test'\n\n\n### By incident role\n\nRoles and custom fields have another nested layer in the query parameter, to account for\noperations against any of the roles or custom fields created in the account.\n\nWith incident role id=ABC, find all incidents where that role is unset:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'incident_role[ABC][is_set]=true'\n\nOr where the role has been set:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'incident_role[ABC][is_set]=false'\n\n### By option custom fields\n\nWith an option custom field id=ABC, all incidents that have field ABC set to the custom\nfield option of id=XYZ:\n\n\t\tcurl \\\n\t\t\t--get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'custom_field[ABC][one_of]=XYZ'\n\nOr all incidents that do not have custom field id=ABC set to option id=XYZ:\n\n\t\tcurl \\\n\t\t\t--get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'custom_field[ABC][not_in]=XYZ'\n",
  inputSchema: {
    type: 'object',
    properties: {
      after: {
        type: 'string',
        description:
          "An incident's ID. This endpoint will return a list of incidents after this ID in relation to the API response order.",
      },
      created_at: {
        type: 'object',
        description:
          "Filter on incident created at timestamp. The accepted operators are 'gte', 'lte' and 'date_range'.",
        additionalProperties: true,
      },
      custom_field: {
        type: 'object',
        description:
          'Filter on an incident custom field. Custom field ID should be sent, followed by the operator and values. Accepted operator will depend on the custom field type.',
        additionalProperties: true,
      },
      incident_role: {
        type: 'object',
        description:
          "Filter on an incident role. Role ID should be sent, followed by the operator and values. The accepted operators are 'one_of', 'is_blank'.",
        additionalProperties: true,
      },
      incident_type: {
        type: 'object',
        description: "Filter on incident type. The accepted operators are 'one_of, or 'not_in'.",
        additionalProperties: true,
      },
      mode: {
        type: 'object',
        description:
          'Filter on incident mode. The accepted operator is \'one_of\'.  If this is not provided, this value defaults to `{"one_of": ["standard", "retrospective"] }`, meaning that test and tutorial incidents are not included.',
        additionalProperties: true,
      },
      page_size: {
        type: 'integer',
        description: 'Integer number of records to return',
      },
      severity: {
        type: 'object',
        description:
          "Filter on incident severity. The accepted operators are 'one_of', 'not_in', 'gte', 'lte'.",
        additionalProperties: true,
      },
      status: {
        type: 'object',
        description: "Filter on incident status. The accepted operators are 'one_of', or 'not_in'.",
        additionalProperties: true,
      },
      status_category: {
        type: 'object',
        description:
          "Filter on the category of the incidents status. The accepted operators are 'one_of', or 'not_in'.",
        additionalProperties: true,
      },
      updated_at: {
        type: 'object',
        description:
          "Filter on incident updated at timestamp. The accepted operators are 'gte', 'lte' and 'date_range'.",
        additionalProperties: true,
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.incidents.listV2(body));
};

export default { metadata, tool, handler };
