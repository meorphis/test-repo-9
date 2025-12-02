// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'catalog_entries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v3/catalog_entries',
  operationId: 'Catalog V3#ListEntries',
};

export const tool: Tool = {
  name: 'list_entries_v3_catalog_entries',
  description: 'List entries for a catalog type.',
  inputSchema: {
    type: 'object',
    properties: {
      catalog_type_id: {
        type: 'string',
        description: 'ID of this catalog type',
      },
      page_size: {
        type: 'integer',
        description: 'The integer number of records to return',
      },
      after: {
        type: 'string',
        description:
          "An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.",
      },
      identifier: {
        type: 'string',
        description:
          "If specified, only entries with this identifier will be returned. This will search by ID, external ID, and aliases.\n\nIf 'use name as identifier' is enabled for the catalog type, this will also match on name.",
      },
    },
    required: ['catalog_type_id', 'page_size'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.catalogEntries.listEntriesV3(body));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
