// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'custom_field_options',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/custom_field_options',
  operationId: 'Custom Field Options V1#List',
};

export const tool: Tool = {
  name: 'list_custom_field_options',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nShow custom field options for a custom field\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/custom_field_option_list_response',\n  $defs: {\n    custom_field_option_list_response: {\n      type: 'object',\n      properties: {\n        custom_field_options: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/custom_field_option_v1'\n          }\n        },\n        pagination_meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      },\n      required: [        'custom_field_options',\n        'pagination_meta'\n      ]\n    },\n    custom_field_option_v1: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the custom field option'\n        },\n        custom_field_id: {\n          type: 'string',\n          description: 'ID of the custom field this option belongs to'\n        },\n        sort_key: {\n          type: 'integer',\n          description: 'Sort key used to order the custom field options correctly'\n        },\n        value: {\n          type: 'string',\n          description: 'Human readable name for the custom field option'\n        }\n      },\n      required: [        'id',\n        'custom_field_id',\n        'sort_key',\n        'value'\n      ]\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_size: {\n          type: 'integer',\n          description: 'What was the maximum number of results requested'\n        },\n        after: {\n          type: 'string',\n          description: 'If provided, pass this as the \\'after\\' param to load the next page'\n        }\n      },\n      required: [        'page_size'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      custom_field_id: {
        type: 'string',
        description: 'The custom field to list options for.',
      },
      after: {
        type: 'string',
        description:
          "A custom field option's ID. This endpoint will return a list of custom field options created after this option.",
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
    required: ['custom_field_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.customFieldOptions.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
