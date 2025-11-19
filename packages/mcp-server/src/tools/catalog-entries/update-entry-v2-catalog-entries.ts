// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'catalog_entries',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/catalog_entries/{id}',
  operationId: 'Catalog V2#UpdateEntry',
};

export const tool: Tool = {
  name: 'update_entry_v2_catalog_entries',
  description: 'Updates an existing catalog entry.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of this catalog entry',
      },
      attribute_values: {
        type: 'object',
        description: 'Values of this entry',
        additionalProperties: true,
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
    },
    required: ['id', 'attribute_values', 'name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.catalogEntries.updateEntryV2(id, body));
};

export default { metadata, tool, handler };
