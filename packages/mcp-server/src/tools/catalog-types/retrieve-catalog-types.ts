// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'catalog_types',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v3/catalog_types/{id}',
  operationId: 'Catalog V3#ShowType',
};

export const tool: Tool = {
  name: 'retrieve_catalog_types',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nShow a single catalog type.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/catalog_type_retrieve_response',\n  $defs: {\n    catalog_type_retrieve_response: {\n      type: 'object',\n      properties: {\n        catalog_type: {\n          $ref: '#/$defs/catalog_type_v3'\n        }\n      },\n      required: [        'catalog_type'\n      ]\n    },\n    catalog_type_v3: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'ID of this catalog type'\n        },\n        annotations: {\n          type: 'object',\n          description: 'Annotations that can track metadata about this type',\n          additionalProperties: true\n        },\n        categories: {\n          type: 'array',\n          description: 'What categories is this type considered part of',\n          items: {\n            type: 'string',\n            enum: [              'customer',\n              'issue-tracker',\n              'product-feature',\n              'service',\n              'on-call',\n              'team',\n              'user'\n            ]\n          }\n        },\n        color: {\n          type: 'string',\n          description: 'Sets the display color of this type in the dashboard',\n          enum: [            'yellow',\n            'green',\n            'blue',\n            'violet',\n            'pink',\n            'cyan',\n            'orange'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'When this type was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Human readble description of this type'\n        },\n        icon: {\n          type: 'string',\n          description: 'Sets the display icon of this type in the dashboard',\n          enum: [            'alert',\n            'bolt',\n            'box',\n            'briefcase',\n            'browser',\n            'bulb',\n            'calendar',\n            'clock',\n            'cog',\n            'components',\n            'database',\n            'doc',\n            'email',\n            'escalation-path',\n            'files',\n            'flag',\n            'folder',\n            'globe',\n            'money',\n            'server',\n            'severity',\n            'status-page',\n            'store',\n            'star',\n            'tag',\n            'user',\n            'users'\n          ]\n        },\n        is_editable: {\n          type: 'boolean',\n          description: 'Catalog types that are synced with external resources can\\'t be edited'\n        },\n        name: {\n          type: 'string',\n          description: 'Name is the human readable name of this type'\n        },\n        ranked: {\n          type: 'boolean',\n          description: 'If this type should be ranked'\n        },\n        schema: {\n          type: 'object',\n          properties: {\n            attributes: {\n              type: 'array',\n              description: 'Attributes of this catalog type',\n              items: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'The ID of this attribute'\n                  },\n                  array: {\n                    type: 'boolean',\n                    description: 'Whether this attribute is an array'\n                  },\n                  mode: {\n                    type: 'string',\n                    description: 'Controls how this attribute is modified',\n                    enum: [                      '',\n                      'api',\n                      'dashboard',\n                      'external',\n                      'internal',\n                      'dynamic',\n                      'backlink',\n                      'path'\n                    ]\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'Unique name of this attribute'\n                  },\n                  type: {\n                    type: 'string',\n                    description: 'Catalog type name for this attribute'\n                  },\n                  backlink_attribute: {\n                    type: 'string',\n                    description: 'The attribute to use (if this is a backlink)'\n                  },\n                  path: {\n                    type: 'array',\n                    description: 'The path to use (if this is a path attribute)',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        attribute_id: {\n                          type: 'string',\n                          description: 'the ID of the attribute to use'\n                        },\n                        attribute_name: {\n                          type: 'string',\n                          description: 'the name of the attribute to use'\n                        }\n                      },\n                      required: [                        'attribute_id',\n                        'attribute_name'\n                      ]\n                    }\n                  }\n                },\n                required: [                  'id',\n                  'array',\n                  'mode',\n                  'name',\n                  'type'\n                ]\n              }\n            },\n            version: {\n              type: 'integer',\n              description: 'The version number of this schema'\n            }\n          },\n          required: [            'attributes',\n            'version'\n          ]\n        },\n        type_name: {\n          type: 'string',\n          description: 'The type name of this catalog type, to be used when defining attributes. This is immutable once a CatalogType has been created. For non-externally sync types, it must follow the pattern Custom[\"SomeName\"]'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When this type was last updated',\n          format: 'date-time'\n        },\n        use_name_as_identifier: {\n          type: 'boolean',\n          description: 'If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases.'\n        },\n        dynamic_resource_parameter: {\n          type: 'string',\n          description: 'If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally.'\n        },\n        estimated_count: {\n          type: 'integer',\n          description: 'If populated, gives an estimated count of entries for this type'\n        },\n        last_synced_at: {\n          type: 'string',\n          description: 'When this type was last synced (if it\\'s ever been sync\\'d)',\n          format: 'date-time'\n        },\n        registry_type: {\n          type: 'string',\n          description: 'The registry resource this type is synced from, if any'\n        },\n        required_integrations: {\n          type: 'array',\n          description: 'If populated, the integrations required for this type',\n          items: {\n            type: 'string'\n          }\n        },\n        source_repo_url: {\n          type: 'string',\n          description: 'The url of the external repository where this type is managed'\n        }\n      },\n      required: [        'id',\n        'annotations',\n        'categories',\n        'color',\n        'created_at',\n        'description',\n        'icon',\n        'is_editable',\n        'name',\n        'ranked',\n        'schema',\n        'type_name',\n        'updated_at',\n        'use_name_as_identifier'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of this catalog type',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.catalogTypes.retrieve(id)));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
