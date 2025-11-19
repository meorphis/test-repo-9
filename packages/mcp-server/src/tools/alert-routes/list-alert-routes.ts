// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'alert_routes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/alert_routes',
  operationId: 'Alert Routes V2#List',
};

export const tool: Tool = {
  name: 'list_alert_routes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all alert routes in your account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/alert_route_list_response',\n  $defs: {\n    alert_route_list_response: {\n      type: 'object',\n      properties: {\n        alert_routes: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for this alert route config'\n              },\n              enabled: {\n                type: 'boolean',\n                description: 'Whether this alert route is enabled or not'\n              },\n              name: {\n                type: 'string',\n                description: 'The name of this alert route config, for the user\\'s reference'\n              }\n            },\n            required: [              'id',\n              'enabled',\n              'name'\n            ]\n          }\n        },\n        pagination_meta: {\n          $ref: '#/$defs/pagination_meta_result'\n        }\n      },\n      required: [        'alert_routes',\n        'pagination_meta'\n      ]\n    },\n    pagination_meta_result: {\n      type: 'object',\n      properties: {\n        page_size: {\n          type: 'integer',\n          description: 'What was the maximum number of results requested'\n        },\n        after: {\n          type: 'string',\n          description: 'If provided, pass this as the \\'after\\' param to load the next page'\n        }\n      },\n      required: [        'page_size'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page_size: {
        type: 'integer',
        description: 'Number of alert routes to return per page',
      },
      after: {
        type: 'string',
        description: 'The ID of the last alert route on the previous page',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['page_size'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.alertRoutes.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
