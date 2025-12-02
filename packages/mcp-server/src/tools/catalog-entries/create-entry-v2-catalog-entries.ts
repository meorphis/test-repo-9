// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'catalog_entries',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/catalog_entries',
  operationId: 'Catalog V2#CreateEntry',
};

export const tool: Tool = {
  name: 'create_entry_v2_catalog_entries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an entry within the catalog. We support a maximum of 50,000 entries per type.\n\nIf you call this API with a payload where the external_id and catalog_type_id match an existing entry, the existing entry will be updated.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/catalog_entry_create_entry_v2_response',\n  $defs: {\n    catalog_entry_create_entry_v2_response: {\n      type: 'object',\n      properties: {\n        catalog_entry: {\n          $ref: '#/$defs/catalog_entry_v2'\n        }\n      },\n      required: [        'catalog_entry'\n      ]\n    },\n    catalog_entry_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'ID of this catalog entry'\n        },\n        aliases: {\n          type: 'array',\n          description: 'Optional aliases that can be used to reference this entry',\n          items: {\n            type: 'string'\n          }\n        },\n        attribute_values: {\n          type: 'object',\n          description: 'Values of this entry',\n          additionalProperties: true\n        },\n        catalog_type_id: {\n          type: 'string',\n          description: 'ID of this catalog type'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When this entry was created',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Name is the human readable name of this entry'\n        },\n        rank: {\n          type: 'integer',\n          description: 'When catalog type is ranked, this is used to help order things'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When this entry was last updated',\n          format: 'date-time'\n        },\n        archived_at: {\n          type: 'string',\n          description: 'When this entry was archived',\n          format: 'date-time'\n        },\n        external_id: {\n          type: 'string',\n          description: 'An optional alternative ID for this entry, which is ensured to be unique for the type'\n        }\n      },\n      required: [        'id',\n        'aliases',\n        'attribute_values',\n        'catalog_type_id',\n        'created_at',\n        'name',\n        'rank',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      attribute_values: {
        type: 'object',
        description: 'Values of this entry',
        additionalProperties: true,
      },
      catalog_type_id: {
        type: 'string',
        description: 'ID of this catalog type',
      },
      name: {
        type: 'string',
        description: 'Name is the human readable name of this entry',
      },
      aliases: {
        type: 'array',
        description: 'Optional aliases that can be used to reference this entry',
        items: {
          type: 'string',
        },
      },
      external_id: {
        type: 'string',
        description: 'An optional alternative ID for this entry, which is ensured to be unique for the type',
      },
      rank: {
        type: 'integer',
        description: 'When catalog type is ranked, this is used to help order things',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['attribute_values', 'catalog_type_id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.catalogEntries.createEntryV2(body)));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
