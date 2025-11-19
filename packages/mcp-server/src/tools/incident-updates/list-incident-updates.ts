// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incident_updates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/incident_updates',
  operationId: 'Incident Updates V2#List',
};

export const tool: Tool = {
  name: 'list_incident_updates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all incident updates for an organisation, or for a specific incident.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/incident_update_list_response',\n  $defs: {\n    incident_update_list_response: {\n      type: 'object',\n      properties: {\n        incident_updates: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for this incident update'\n              },\n              created_at: {\n                type: 'string',\n                description: 'When the update was created',\n                format: 'date-time'\n              },\n              incident_id: {\n                type: 'string',\n                description: 'The incident this update relates to'\n              },\n              new_incident_status: {\n                $ref: '#/$defs/incident_status_v2'\n              },\n              updater: {\n                $ref: '#/$defs/actor_v2'\n              },\n              merged_into_incident_id: {\n                type: 'string',\n                description: 'The ID of the incident this incident was merged into, if the to state of this update is \\'merged\\'.'\n              },\n              message: {\n                type: 'string',\n                description: 'Message that explains the context behind the update'\n              },\n              new_severity: {\n                $ref: '#/$defs/severity'\n              }\n            },\n            required: [              'id',\n              'created_at',\n              'incident_id',\n              'new_incident_status',\n              'updater'\n            ]\n          }\n        },\n        pagination_meta: {\n          $ref: '#/$defs/pagination_meta_result'\n        }\n      },\n      required: [        'incident_updates'\n      ]\n    },\n    incident_status_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique ID of this incident status'\n        },\n        category: {\n          type: 'string',\n          description: 'What category of status it is. All statuses apart from live (renamed in the app to Active) and learning (renamed in the app to Post-incident) are managed by incident.io and cannot be configured',\n          enum: [            'triage',\n            'declined',\n            'merged',\n            'canceled',\n            'live',\n            'learning',\n            'closed',\n            'paused'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Rich text description of the incident status'\n        },\n        name: {\n          type: 'string',\n          description: 'Unique name of this status'\n        },\n        rank: {\n          type: 'integer',\n          description: 'Order of this incident status'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'category',\n        'created_at',\n        'description',\n        'name',\n        'rank',\n        'updated_at'\n      ]\n    },\n    actor_v2: {\n      type: 'object',\n      properties: {\n        alert: {\n          $ref: '#/$defs/alert_actor_v2'\n        },\n        api_key: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Unique identifier for this API key'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the API key, for the user\\'s reference'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        user: {\n          $ref: '#/$defs/user_v2'\n        },\n        workflow: {\n          $ref: '#/$defs/workflow_actor_v2'\n        }\n      }\n    },\n    alert_actor_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of this alert'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the alert, parsed from the alert payload according to the alert source configuration'\n        }\n      },\n      required: [        'id',\n        'title'\n      ]\n    },\n    user_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of the user'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the user'\n        },\n        role: {\n          type: 'string',\n          description: 'DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated.',\n          enum: [            'viewer',\n            'responder',\n            'administrator',\n            'owner',\n            'unset'\n          ]\n        },\n        email: {\n          type: 'string',\n          description: 'Email address of the user.'\n        },\n        slack_user_id: {\n          type: 'string',\n          description: 'Slack ID of the user'\n        }\n      },\n      required: [        'id',\n        'name',\n        'role'\n      ]\n    },\n    workflow_actor_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the workflow'\n        },\n        name: {\n          type: 'string',\n          description: 'Name provided by the user when creating the workflow'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    },\n    severity: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of the severity'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the action was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the severity'\n        },\n        name: {\n          type: 'string',\n          description: 'Human readable name of the severity'\n        },\n        rank: {\n          type: 'integer',\n          description: 'Rank to help sort severities (lower numbers are less severe)'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the action was last updated',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'description',\n        'name',\n        'rank',\n        'updated_at'\n      ]\n    },\n    pagination_meta_result: {\n      type: 'object',\n      properties: {\n        page_size: {\n          type: 'integer',\n          description: 'What was the maximum number of results requested'\n        },\n        after: {\n          type: 'string',\n          description: 'If provided, pass this as the \\'after\\' param to load the next page'\n        }\n      },\n      required: [        'page_size'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      after: {
        type: 'string',
        description:
          "An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.",
      },
      incident_id: {
        type: 'string',
        description: 'Incident whose updates you want to list',
      },
      page_size: {
        type: 'integer',
        description: 'Integer number of records to return',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.incidentUpdates.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
