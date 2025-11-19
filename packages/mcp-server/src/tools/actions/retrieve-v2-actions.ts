// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'actions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/actions/{id}',
  operationId: 'Actions V2#Show',
};

export const tool: Tool = {
  name: 'retrieve_v2_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a single incident action.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_retrieve_v2_response',\n  $defs: {\n    action_retrieve_v2_response: {\n      type: 'object',\n      properties: {\n        action: {\n          $ref: '#/$defs/action_v2'\n        }\n      },\n      required: [        'action'\n      ]\n    },\n    action_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the action'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the action was created',\n          format: 'date-time'\n        },\n        creator: {\n          $ref: '#/$defs/actor_v2'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the action'\n        },\n        incident_id: {\n          type: 'string',\n          description: 'Unique identifier of the incident the action belongs to'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the action',\n          enum: [            'outstanding',\n            'completed',\n            'deleted',\n            'not_doing'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the action was last updated',\n          format: 'date-time'\n        },\n        assignee: {\n          $ref: '#/$defs/user_v2'\n        },\n        completed_at: {\n          type: 'string',\n          description: 'When the action was completed',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'creator',\n        'description',\n        'incident_id',\n        'status',\n        'updated_at'\n      ]\n    },\n    actor_v2: {\n      type: 'object',\n      properties: {\n        alert: {\n          $ref: '#/$defs/alert_actor_v2'\n        },\n        api_key: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Unique identifier for this API key'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the API key, for the user\\'s reference'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        user: {\n          $ref: '#/$defs/user_v2'\n        },\n        workflow: {\n          $ref: '#/$defs/workflow_actor_v2'\n        }\n      }\n    },\n    alert_actor_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of this alert'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the alert, parsed from the alert payload according to the alert source configuration'\n        }\n      },\n      required: [        'id',\n        'title'\n      ]\n    },\n    user_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of the user'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the user'\n        },\n        role: {\n          type: 'string',\n          description: 'DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated.',\n          enum: [            'viewer',\n            'responder',\n            'administrator',\n            'owner',\n            'unset'\n          ]\n        },\n        email: {\n          type: 'string',\n          description: 'Email address of the user.'\n        },\n        slack_user_id: {\n          type: 'string',\n          description: 'Slack ID of the user'\n        }\n      },\n      required: [        'id',\n        'name',\n        'role'\n      ]\n    },\n    workflow_actor_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the workflow'\n        },\n        name: {\n          type: 'string',\n          description: 'Name provided by the user when creating the workflow'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for the action',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.actions.retrieveV2(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
