// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incidents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/incidents',
  operationId: 'Incidents V1#Create',
};

export const tool: Tool = {
  name: 'create_incidents',
  description: 'Create a new incident.',
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
                    description:
                      "If the custom field type is 'numeric', this will contain the value assigned.",
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
      },
      incident_role_assignments: {
        type: 'array',
        description: 'Assign incident roles to these people',
        items: {
          type: 'object',
          properties: {
            assignee: {
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
            incident_role_id: {
              type: 'string',
              description:
                "Unique ID of an incident role. Note that the 'reporter' role can only be assigned when creating an incident.",
            },
          },
          required: ['assignee', 'incident_role_id'],
        },
      },
      incident_type_id: {
        type: 'string',
        description: 'Incident type to create this incident as',
      },
      mode: {
        type: 'string',
        description: 'Whether the incident is real or test',
        enum: ['real', 'test'],
      },
      name: {
        type: 'string',
        description: 'Explanation of the incident',
      },
      severity_id: {
        type: 'string',
        description: 'Severity to create incident as',
      },
      slack_team_id: {
        type: 'string',
        description:
          'ID of the Slack team / workspace. This is only required if you are using a Slack Enterprise Grid with multiple teams.',
      },
      source_message_channel_id: {
        type: 'string',
        description: 'Channel ID of the source message, if this incident was created from one',
      },
      source_message_timestamp: {
        type: 'string',
        description: 'Timestamp of the source message, if this incident was created from one',
      },
      status: {
        type: 'string',
        description: 'Current status of the incident',
        enum: ['triage', 'investigating', 'fixing', 'monitoring', 'closed', 'declined'],
      },
      summary: {
        type: 'string',
        description: 'Detailed description of the incident',
      },
    },
    required: ['idempotency_key', 'visibility'],
  },
  annotations: {},
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.incidents.create(body));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
