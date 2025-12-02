// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incidents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/incidents',
  operationId: 'Incidents V2#Create',
};

export const tool: Tool = {
  name: 'create_v2_incidents',
  description:
    'Create a new incident.\n\nNote that if the incident mode is set to "retrospective" then the new incident\nwill not be announced in Slack.\n',
  inputSchema: {
    type: 'object',
    properties: {
      idempotency_key: {
        type: 'string',
        description: 'Unique string used to de-duplicate incident create requests',
      },
      visibility: {
        type: 'string',
        description:
          'Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). For more information on Private Incidents see our [help centre](https://help.incident.io/articles/5905558102-can-we-mark-incidents-as-sensitive-and-restrict-access).',
        enum: ['public', 'private'],
      },
      custom_field_entries: {
        type: 'array',
        description: "Set the incident's custom fields to these values",
        items: {
          $ref: '#/$defs/custom_field_entry_payload',
        },
      },
      incident_role_assignments: {
        type: 'array',
        description: 'Assign incident roles to these people',
        items: {
          $ref: '#/$defs/incident_role_assignment_payload',
        },
      },
      incident_status_id: {
        type: 'string',
        description: 'Incident status to assign to the incident',
      },
      incident_timestamp_values: {
        type: 'array',
        description: "Assign the incident's timestamps to these values",
        items: {
          $ref: '#/$defs/incident_timestamp_value_payload',
        },
      },
      incident_type_id: {
        type: 'string',
        description: 'Incident type to create this incident as',
      },
      mode: {
        type: 'string',
        description:
          'Whether the incident is real, a test, a tutorial, or importing as a retrospective incident',
        enum: ['standard', 'retrospective', 'test', 'tutorial'],
      },
      name: {
        type: 'string',
        description: 'Explanation of the incident',
      },
      retrospective_incident_options: {
        type: 'object',
        properties: {
          external_id: {
            type: 'integer',
            description:
              "The external ID (e.g. the 123 in INC-123) to assign to the incident. This can be useful when importing incidents. If you want to use this field, you'll need to talk to us first.",
          },
          postmortem_document_url: {
            type: 'string',
            description: 'The URL of the postmortem, if there is one',
          },
          slack_channel_id: {
            type: 'string',
            description:
              'Pass the ID of a Slack channel to attach the incident to an existing channel, rather than creating a new one',
          },
        },
      },
      severity_id: {
        type: 'string',
        description: 'Severity to create incident as',
      },
      slack_channel_name_override: {
        type: 'string',
        description: 'Name of the Slack channel to create for this incident',
      },
      slack_team_id: {
        type: 'string',
        description: 'Slack Team to create the incident in',
      },
      summary: {
        type: 'string',
        description: 'Detailed description of the incident',
      },
    },
    required: ['idempotency_key', 'visibility'],
    $defs: {
      custom_field_entry_payload: {
        type: 'object',
        properties: {
          custom_field_id: {
            type: 'string',
            description: 'ID of the custom field this entry is linked against',
          },
          values: {
            type: 'array',
            description:
              'List of values to associate with this entry. Use an empty array to unset the value of the custom field.',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'Unique identifier for the custom field value',
                },
                value_catalog_entry_id: {
                  type: 'string',
                  description:
                    'ID of the catalog entry. You can also use an ExternalID or an Alias of the catalog entry.',
                },
                value_link: {
                  type: 'string',
                  description: "If the custom field type is 'link', this will contain the value assigned.",
                },
                value_numeric: {
                  type: 'string',
                  description: "If the custom field type is 'numeric', this will contain the value assigned.",
                },
                value_option_id: {
                  type: 'string',
                  description: 'ID of the custom field option',
                },
                value_text: {
                  type: 'string',
                  description: "If the custom field type is 'text', this will contain the value assigned.",
                },
                value_timestamp: {
                  type: 'string',
                  description: 'Deprecated: please use incident timestamp values instead',
                },
              },
            },
          },
        },
        required: ['custom_field_id', 'values'],
      },
      incident_role_assignment_payload: {
        type: 'object',
        properties: {
          incident_role_id: {
            type: 'string',
            description:
              "Unique ID of an incident role. Note that the 'reporter' role can only be assigned when creating an incident.",
          },
          assignee: {
            $ref: '#/$defs/user_reference_payload_v2',
          },
        },
        required: ['incident_role_id'],
      },
      user_reference_payload_v2: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The incident.io ID of a user',
          },
          email: {
            type: 'string',
            description: "The user's email address, matching the email on their Slack account",
          },
          slack_user_id: {
            type: 'string',
            description: "The ID of the user's Slack account.",
          },
        },
      },
      incident_timestamp_value_payload: {
        type: 'object',
        properties: {
          incident_timestamp_id: {
            type: 'string',
            description:
              'The id of the incident timestamp that this incident timestamp value is associated with.',
          },
          value: {
            type: 'string',
            description: 'The current value of this timestamp, for this incident',
            format: 'date-time',
          },
        },
        required: ['incident_timestamp_id'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.incidents.createV2(body));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
