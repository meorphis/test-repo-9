// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'catalog_entries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/catalog_entries',
  operationId: 'Catalog V2#ListEntries',
};

export const tool: Tool = {
  name: 'list_entries_v2_catalog_entries',
  description: 'List entries for a catalog type.',
  inputSchema: {
    type: 'object',
    properties: {
      catalog_type_id: {
        type: 'string',
        description: 'ID of this catalog type',
      },
      after: {
        type: 'string',
        description:
          "An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.",
      },
      page_size: {
        type: 'integer',
        description: 'Integer number of records to return',
      },
    },
    required: ['catalog_type_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.catalogEntries.listEntriesV2(body));
};

export default { metadata, tool, handler };
