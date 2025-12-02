// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'follow_ups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/follow_ups/{id}',
  operationId: 'Follow-ups V2#Show',
};

export const tool: Tool = {
  name: 'retrieve_follow_ups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a single incident follow-up.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/follow_up_retrieve_response',\n  $defs: {\n    follow_up_retrieve_response: {\n      type: 'object',\n      properties: {\n        follow_up: {\n          $ref: '#/$defs/follow_up'\n        }\n      },\n      required: [        'follow_up'\n      ]\n    },\n    follow_up: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the follow-up'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the follow-up was created',\n          format: 'date-time'\n        },\n        creator: {\n          $ref: '#/$defs/actor_v2'\n        },\n        incident_id: {\n          type: 'string',\n          description: 'Unique identifier of the incident the follow-up belongs to'\n        },\n        labels: {\n          type: 'array',\n          description: 'Labels associated with this follow-up',\n          items: {\n            type: 'string'\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the follow-up',\n          enum: [            'outstanding',\n            'completed',\n            'deleted',\n            'not_doing'\n          ]\n        },\n        title: {\n          type: 'string',\n          description: 'Title of the follow-up'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the follow-up was last updated',\n          format: 'date-time'\n        },\n        assignee: {\n          $ref: '#/$defs/user_v2'\n        },\n        completed_at: {\n          type: 'string',\n          description: 'When the follow-up was completed',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the follow-up'\n        },\n        external_issue_reference: {\n          $ref: '#/$defs/external_issue_reference'\n        },\n        priority: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Unique identifier for the follow-up priority option'\n            },\n            name: {\n              type: 'string',\n              description: 'Name of the follow-up priority option'\n            },\n            rank: {\n              type: 'integer',\n              description: 'Rank is used to order the follow-up priority options correctly'\n            },\n            description: {\n              type: 'string',\n              description: 'Description of the follow-up priority option'\n            }\n          },\n          required: [            'id',\n            'name',\n            'rank'\n          ]\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'creator',\n        'incident_id',\n        'labels',\n        'status',\n        'title',\n        'updated_at'\n      ]\n    },\n    actor_v2: {\n      type: 'object',\n      properties: {\n        alert: {\n          $ref: '#/$defs/alert_actor_v2'\n        },\n        api_key: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Unique identifier for this API key'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the API key, for the user\\'s reference'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        user: {\n          $ref: '#/$defs/user_v2'\n        },\n        workflow: {\n          $ref: '#/$defs/workflow_actor_v2'\n        }\n      }\n    },\n    alert_actor_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of this alert'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the alert, parsed from the alert payload according to the alert source configuration'\n        }\n      },\n      required: [        'id',\n        'title'\n      ]\n    },\n    user_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of the user'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the user'\n        },\n        role: {\n          type: 'string',\n          description: 'DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated.',\n          enum: [            'viewer',\n            'responder',\n            'administrator',\n            'owner',\n            'unset'\n          ]\n        },\n        email: {\n          type: 'string',\n          description: 'Email address of the user.'\n        },\n        slack_user_id: {\n          type: 'string',\n          description: 'Slack ID of the user'\n        }\n      },\n      required: [        'id',\n        'name',\n        'role'\n      ]\n    },\n    workflow_actor_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the workflow'\n        },\n        name: {\n          type: 'string',\n          description: 'Name provided by the user when creating the workflow'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    },\n    external_issue_reference: {\n      type: 'object',\n      properties: {\n        issue_name: {\n          type: 'string',\n          description: 'Human readable ID for the issue'\n        },\n        issue_permalink: {\n          type: 'string',\n          description: 'URL linking directly to the action in the issue tracker'\n        },\n        provider: {\n          type: 'string',\n          description: 'ID of the issue tracker provider',\n          enum: [            'asana',\n            'azure_devops',\n            'click_up',\n            'linear',\n            'jira',\n            'jira_server',\n            'github',\n            'gitlab',\n            'service_now',\n            'shortcut'\n          ]\n        }\n      },\n      required: [        'issue_name',\n        'issue_permalink',\n        'provider'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for the follow-up',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.followUps.retrieve(id)));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
