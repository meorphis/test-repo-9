// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incidents.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/incidents/{id}/actions/edit',
  operationId: 'Incidents V2#Edit',
};

export const tool: Tool = {
  name: 'edit_incidents_actions',
  description:
    'Edit an existing incident.\n\nThis endpoint allows you to edit the properties of an existing incident: e.g. set the severity or update custom fields.\n\nWhen using this endpoint, only fields that are provided will be edited (omitted fields\nwill be ignored).\n',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The unique identifier of the incident that you want to edit',
      },
      incident: {
        type: 'object',
        properties: {
          call_url: {
            type: 'string',
            description: 'The call URL attached to this incident',
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
            description:
              'Incident status to change incident to (you can only change an incident from one active status to another, any other lifecycle changes must be taken via the app.)',
          },
          incident_timestamp_values: {
            type: 'array',
            description: "Assign the incident's timestamps to these values",
            items: {
              $ref: '#/$defs/incident_timestamp_value_payload',
            },
          },
          name: {
            type: 'string',
            description: 'Explanation of the incident',
          },
          severity_id: {
            type: 'string',
            description: 'The ID of the current severity of this incident',
          },
          slack_channel_name_override: {
            type: 'string',
            description: 'Override the name of the incident Slack channel',
          },
          summary: {
            type: 'string',
            description: 'Detailed description of the incident',
          },
        },
      },
      notify_incident_channel: {
        type: 'boolean',
        description:
          "Should we send Slack channel notifications to inform responders of this update? Note that this won't work if the Slack channel has already been archived.",
      },
    },
    required: ['id', 'incident', 'notify_incident_channel'],
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
  const { id, ...body } = args as any;
  return asTextContentResult(await client.incidents.actions.edit(id, body));
};

export default { metadata, tool, handler };
