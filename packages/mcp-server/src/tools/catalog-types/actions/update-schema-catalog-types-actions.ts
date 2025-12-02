// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'catalog_types.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v3/catalog_types/{id}/actions/update_schema',
  operationId: 'Catalog V3#UpdateTypeSchema',
};

export const tool: Tool = {
  name: 'update_schema_catalog_types_actions',
  description:
    "Update an existing catalog types schema, adding or removing attributes.\n\nUpdating the schema is handled separately from creating and updating types, so that you don't\nhave to worry about dependencies between types. For example, if type A has an attribute that\nrelies on type B, you would have to create type B first.\n\nBy allowing the creation of types without a schema, they can be created in any order, but it\nmeans that you need to make a separate call to this endpoint to update the schema.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of this catalog type',
      },
      attributes: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            array: {
              type: 'boolean',
              description: 'Whether this attribute is an array',
            },
            name: {
              type: 'string',
              description: 'Unique name of this attribute',
            },
            type: {
              type: 'string',
              description: 'Catalog type name for this attribute',
            },
            id: {
              type: 'string',
              description: 'The ID of this attribute',
            },
            backlink_attribute: {
              type: 'string',
              description: 'The attribute to use (if this is a backlink)',
            },
            mode: {
              type: 'string',
              description: 'Controls how this attribute is modified',
              enum: ['', 'api', 'dashboard', 'external', 'internal', 'dynamic', 'backlink', 'path'],
            },
            path: {
              type: 'array',
              description: 'The path to use (if this is an path)',
              items: {
                type: 'object',
                properties: {
                  attribute_id: {
                    type: 'string',
                    description: 'the ID of the attribute to use',
                  },
                },
                required: ['attribute_id'],
              },
            },
          },
          required: ['array', 'name', 'type'],
        },
      },
      version: {
        type: 'integer',
      },
    },
    required: ['id', 'attributes', 'version'],
  },
  annotations: {},
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.catalogTypes.actions.updateSchema(id, body));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
