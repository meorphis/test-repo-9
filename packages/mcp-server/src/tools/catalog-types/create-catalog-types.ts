// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'catalog_types',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v3/catalog_types',
  operationId: 'Catalog V3#CreateType',
};

export const tool: Tool = {
  name: 'create_catalog_types',
  description: 'Create a catalog type. The schema must be updated using the UpdateTypeSchema endpoint.',
  inputSchema: {
    type: 'object',
    properties: {
      description: {
        type: 'string',
        description: 'Human readble description of this type',
      },
      name: {
        type: 'string',
        description: 'Name is the human readable name of this type',
      },
      annotations: {
        type: 'object',
        description: 'Annotations that can track metadata about this type',
        additionalProperties: true,
      },
      categories: {
        type: 'array',
        description: 'What categories is this type considered part of',
        items: {
          type: 'string',
          enum: ['customer', 'issue-tracker', 'product-feature', 'service', 'on-call', 'team', 'user'],
        },
      },
      color: {
        type: 'string',
        description: 'Sets the display color of this type in the dashboard',
        enum: ['yellow', 'green', 'blue', 'violet', 'pink', 'cyan', 'orange'],
      },
      icon: {
        type: 'string',
        description: 'Sets the display icon of this type in the dashboard',
        enum: [
          'alert',
          'bolt',
          'box',
          'briefcase',
          'browser',
          'bulb',
          'calendar',
          'clock',
          'cog',
          'components',
          'database',
          'doc',
          'email',
          'escalation-path',
          'files',
          'flag',
          'folder',
          'globe',
          'money',
          'server',
          'severity',
          'status-page',
          'store',
          'star',
          'tag',
          'user',
          'users',
        ],
      },
      ranked: {
        type: 'boolean',
        description: 'If this type should be ranked',
      },
      source_repo_url: {
        type: 'string',
        description: 'The url of the external repository where this type is managed',
      },
      type_name: {
        type: 'string',
        description:
          'The type name of this catalog type, to be used when defining attributes. This is immutable once a CatalogType has been created. For non-externally sync types, it must follow the pattern Custom["SomeName"]',
      },
      use_name_as_identifier: {
        type: 'boolean',
        description:
          'If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases.',
      },
    },
    required: ['description', 'name'],
  },
  annotations: {},
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.catalogTypes.create(body));
};

export default { metadata, tool, handler };
