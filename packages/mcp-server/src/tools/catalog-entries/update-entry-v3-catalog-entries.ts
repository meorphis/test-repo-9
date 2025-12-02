// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'catalog_entries',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v3/catalog_entries/{id}',
  operationId: 'Catalog V3#UpdateEntry',
};

export const tool: Tool = {
  name: 'update_entry_v3_catalog_entries',
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
      update_attributes: {
        type: 'array',
        description:
          "If provided, only update these attribute_values keys. If not provided, update all attribute values.\nIf you specify an attribute key that's not in your payload, the associated attribute value will be cleared.",
        items: {
          type: 'string',
        },
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
  try {
    return asTextContentResult(await client.catalogEntries.updateEntryV3(id, body));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
