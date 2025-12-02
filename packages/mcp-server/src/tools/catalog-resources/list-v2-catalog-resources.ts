// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'catalog_resources',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/catalog_resources',
  operationId: 'Catalog V2#ListResources',
};

export const tool: Tool = {
  name: 'list_v2_catalog_resources',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList available engine resources for the catalog.\n\nA resource represents a type of data that can be held within the catalog, so this\nendpoint can be used to see what attribute types can be used when updating the\nschema of a catalog type.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/catalog_resource_list_v2_response',\n  $defs: {\n    catalog_resource_list_v2_response: {\n      type: 'object',\n      properties: {\n        resources: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              category: {\n                type: 'string',\n                description: 'Which category of resource',\n                enum: [                  'primitive',\n                  'custom',\n                  'external'\n                ]\n              },\n              description: {\n                type: 'string',\n                description: 'Human readable description for this resource'\n              },\n              label: {\n                type: 'string',\n                description: 'Label for this catalog resource type'\n              },\n              type: {\n                type: 'string',\n                description: 'Catalog type name for this resource'\n              },\n              value_docstring: {\n                type: 'string',\n                description: 'Documentation for the literal string value of this resource'\n              }\n            },\n            required: [              'category',\n              'description',\n              'label',\n              'type',\n              'value_docstring'\n            ]\n          }\n        }\n      },\n      required: [        'resources'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.catalogResources.listV2()));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
