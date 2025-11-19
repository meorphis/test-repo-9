// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'catalog_entries',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/catalog_entries/{id}',
  operationId: 'Catalog V2#DestroyEntry',
};

export const tool: Tool = {
  name: 'destroy_entry_v2_catalog_entries',
  description: 'Archives a catalog entry.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of this catalog entry',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.catalogEntries.destroyEntryV2(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
