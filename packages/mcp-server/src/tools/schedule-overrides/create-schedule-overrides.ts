// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'schedule_overrides',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/schedule_overrides',
  operationId: 'Schedules V2#CreateOverride',
};

export const tool: Tool = {
  name: 'create_schedule_overrides',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new schedule override.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/schedule_override_create_response',\n  $defs: {\n    schedule_override_create_response: {\n      type: 'object',\n      properties: {\n        override: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Unique internal ID of the schedule override'\n            },\n            created_at: {\n              type: 'string',\n              format: 'date-time'\n            },\n            end_at: {\n              type: 'string',\n              description: 'End of the override',\n              format: 'date-time'\n            },\n            layer_id: {\n              type: 'string',\n              description: 'The layer on the rotation on the schedule that this override applies to'\n            },\n            rotation_id: {\n              type: 'string',\n              description: 'The rotation on the schedule that this override applies to'\n            },\n            schedule_id: {\n              type: 'string',\n              description: 'The schedule that this override applies to'\n            },\n            start_at: {\n              type: 'string',\n              description: 'Start of the override',\n              format: 'date-time'\n            },\n            updated_at: {\n              type: 'string',\n              format: 'date-time'\n            },\n            user: {\n              $ref: '#/$defs/user_v2'\n            }\n          },\n          required: [            'id',\n            'created_at',\n            'end_at',\n            'layer_id',\n            'rotation_id',\n            'schedule_id',\n            'start_at',\n            'updated_at'\n          ]\n        }\n      },\n      required: [        'override'\n      ]\n    },\n    user_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of the user'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the user'\n        },\n        role: {\n          type: 'string',\n          description: 'DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated.',\n          enum: [            'viewer',\n            'responder',\n            'administrator',\n            'owner',\n            'unset'\n          ]\n        },\n        email: {\n          type: 'string',\n          description: 'Email address of the user.'\n        },\n        slack_user_id: {\n          type: 'string',\n          description: 'Slack ID of the user'\n        }\n      },\n      required: [        'id',\n        'name',\n        'role'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      end_at: {
        type: 'string',
        description: 'End time of the override',
        format: 'date-time',
      },
      layer_id: {
        type: 'string',
        description: 'The layer this override applies to',
      },
      rotation_id: {
        type: 'string',
        description: 'The rotation this override applies to',
      },
      schedule_id: {
        type: 'string',
        description: 'The schedule this override applies to',
      },
      start_at: {
        type: 'string',
        description: 'Start time of the override',
        format: 'date-time',
      },
      user: {
        $ref: '#/$defs/user_reference_payload_v2',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['end_at', 'layer_id', 'rotation_id', 'schedule_id', 'start_at', 'user'],
    $defs: {
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
    },
  },
  annotations: {},
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.scheduleOverrides.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
