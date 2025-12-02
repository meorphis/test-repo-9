// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'schedule_entries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/schedule_entries',
  operationId: 'Schedules V2#ListScheduleEntries',
};

export const tool: Tool = {
  name: 'list_schedule_entries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of schedule entries. The endpoint will return all entries that overlap with the given window, if one is provided.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/schedule_entry_list_response',\n  $defs: {\n    schedule_entry_list_response: {\n      type: 'object',\n      properties: {\n        schedule_entries: {\n          type: 'object',\n          properties: {\n            final: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/schedule_entry'\n              }\n            },\n            overrides: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/schedule_entry'\n              }\n            },\n            scheduled: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/schedule_entry'\n              }\n            }\n          },\n          required: [            'final',\n            'overrides',\n            'scheduled'\n          ]\n        },\n        pagination_meta: {\n          type: 'object',\n          properties: {\n            after: {\n              type: 'string',\n              description: 'The time, if it exists, of the last entry\\'s end time'\n            },\n            after_url: {\n              type: 'string',\n              description: 'The URL to fetch the next page of entries'\n            }\n          },\n          required: [            'after',\n            'after_url'\n          ]\n        }\n      },\n      required: [        'schedule_entries'\n      ]\n    },\n    schedule_entry: {\n      type: 'object',\n      properties: {\n        end_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        start_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        entry_id: {\n          type: 'string',\n          description: 'Unique identifier of the schedule entry'\n        },\n        fingerprint: {\n          type: 'string',\n          description: 'A unique identifier for this entry, used to determine a unique shift'\n        },\n        layer_id: {\n          type: 'string',\n          description: 'If present, the layer this entry applies to on the rota'\n        },\n        rotation_id: {\n          type: 'string',\n          description: 'If present, the rotation this entry applies to on the schedule'\n        },\n        user: {\n          $ref: '#/$defs/user_v2'\n        }\n      },\n      required: [        'end_at',\n        'start_at'\n      ]\n    },\n    user_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of the user'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the user'\n        },\n        role: {\n          type: 'string',\n          description: 'DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated.',\n          enum: [            'viewer',\n            'responder',\n            'administrator',\n            'owner',\n            'unset'\n          ]\n        },\n        email: {\n          type: 'string',\n          description: 'Email address of the user.'\n        },\n        slack_user_id: {\n          type: 'string',\n          description: 'Slack ID of the user'\n        }\n      },\n      required: [        'id',\n        'name',\n        'role'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      schedule_id: {
        type: 'string',
        description: 'The ID of the schedule to get entries for.',
      },
      entry_window_end: {
        type: 'string',
        description: 'The end of the window to get entries for.',
        format: 'date-time',
      },
      entry_window_start: {
        type: 'string',
        description: 'The start of the window to get entries for.',
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['schedule_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.scheduleEntries.list(body)));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
