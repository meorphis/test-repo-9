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
  httpPath: '/v1/actions',
  operationId: 'Actions V1#List',
};

export const tool: Tool = {
  name: 'list_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all actions for an organisation.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_list_response',\n  $defs: {\n    action_list_response: {\n      type: 'object',\n      properties: {\n        actions: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/action_v1'\n          }\n        }\n      },\n      required: [        'actions'\n      ]\n    },\n    action_v1: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the action'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the action was created',\n          format: 'date-time'\n        },\n        follow_up: {\n          type: 'boolean',\n          description: 'Whether an action is marked as follow-up'\n        },\n        incident_id: {\n          type: 'string',\n          description: 'Unique identifier of the incident the action belongs to'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the action',\n          enum: [            'outstanding',\n            'completed',\n            'deleted',\n            'not_doing'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the action was last updated',\n          format: 'date-time'\n        },\n        assignee: {\n          $ref: '#/$defs/user_v1'\n        },\n        completed_at: {\n          type: 'string',\n          description: 'When the action was completed',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the action'\n        },\n        external_issue_reference: {\n          type: 'object',\n          properties: {\n            issue_name: {\n              type: 'string',\n              description: 'Human readable ID for the issue'\n            },\n            issue_permalink: {\n              type: 'string',\n              description: 'URL linking directly to the action in the issue tracker'\n            },\n            provider: {\n              type: 'string',\n              description: 'ID of the issue tracker provider',\n              enum: [                'asana',\n                'azure_devops',\n                'click_up',\n                'linear',\n                'jira',\n                'jira_server',\n                'github',\n                'gitlab',\n                'service_now',\n                'shortcut'\n              ]\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'follow_up',\n        'incident_id',\n        'status',\n        'updated_at'\n      ]\n    },\n    user_v1: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of the user'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the user'\n        },\n        role: {\n          type: 'string',\n          description: 'DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated.',\n          enum: [            'viewer',\n            'responder',\n            'administrator',\n            'owner',\n            'unset'\n          ]\n        },\n        email: {\n          type: 'string',\n          description: 'Email address of the user.'\n        },\n        slack_user_id: {\n          type: 'string',\n          description: 'Slack ID of the user'\n        }\n      },\n      required: [        'id',\n        'name',\n        'role'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      incident_id: {
        type: 'string',
        description: 'Find actions related to this incident',
      },
      incident_mode: {
        type: 'string',
        description:
          'Filter to actions from incidents of the given mode. If not set, only actions from `real` incidents are returned',
        enum: ['real', 'test', 'tutorial'],
      },
      is_follow_up: {
        type: 'boolean',
        description: 'Filter to actions marked as being follow up actions',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.actions.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
