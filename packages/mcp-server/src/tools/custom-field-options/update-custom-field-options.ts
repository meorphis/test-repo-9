// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'custom_field_options',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/custom_field_options/{id}',
  operationId: 'Custom Field Options V1#Update',
};

export const tool: Tool = {
  name: 'update_custom_field_options',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a custom field option\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/custom_field_option_update_response',\n  $defs: {\n    custom_field_option_update_response: {\n      type: 'object',\n      properties: {\n        custom_field_option: {\n          $ref: '#/$defs/custom_field_option_v1'\n        }\n      },\n      required: [        'custom_field_option'\n      ]\n    },\n    custom_field_option_v1: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the custom field option'\n        },\n        custom_field_id: {\n          type: 'string',\n          description: 'ID of the custom field this option belongs to'\n        },\n        sort_key: {\n          type: 'integer',\n          description: 'Sort key used to order the custom field options correctly'\n        },\n        value: {\n          type: 'string',\n          description: 'Human readable name for the custom field option'\n        }\n      },\n      required: [        'id',\n        'custom_field_id',\n        'sort_key',\n        'value'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for the custom field option',
      },
      sort_key: {
        type: 'integer',
        description: 'Sort key used to order the custom field options correctly',
      },
      value: {
        type: 'string',
        description: 'Human readable name for the custom field option',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'sort_key', 'value'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.customFieldOptions.update(id, body)),
    );
  } catch (error) {
    if (error instanceof IncidentIo2.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
