// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'custom_fields',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/custom_fields',
  operationId: 'Custom Fields V2#List',
};

export const tool: Tool = {
  name: 'list_v2_custom_fields',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all custom fields for an organisation.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/custom_field_list_v2_response',\n  $defs: {\n    custom_field_list_v2_response: {\n      type: 'object',\n      properties: {\n        custom_fields: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/custom_field_v2'\n          }\n        }\n      },\n      required: [        'custom_fields'\n      ]\n    },\n    custom_field_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the custom field'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the action was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the custom field'\n        },\n        field_type: {\n          type: 'string',\n          description: 'Type of custom field',\n          enum: [            'single_select',\n            'multi_select',\n            'text',\n            'link',\n            'numeric'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'Human readable name for the custom field'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the action was last updated',\n          format: 'date-time'\n        },\n        catalog_type_id: {\n          type: 'string',\n          description: 'For catalog fields, the ID of the associated catalog type'\n        },\n        filter_by: {\n          $ref: '#/$defs/custom_field_filter_by_options_v2'\n        },\n        group_by_catalog_attribute_id: {\n          type: 'string',\n          description: 'For catalog fields, the ID of the attribute used to group catalog entries (if applicable)'\n        },\n        helptext_catalog_attribute_id: {\n          type: 'string',\n          description: 'Which catalog attribute provides helptext for the options'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'description',\n        'field_type',\n        'name',\n        'updated_at'\n      ]\n    },\n    custom_field_filter_by_options_v2: {\n      type: 'object',\n      properties: {\n        catalog_attribute_id: {\n          type: 'string',\n          description: 'This must be an attribute of the catalog type of this custom field. It must be an attribute that points to another catalog type (so not a plain string, number, or boolean attribute).'\n        },\n        custom_field_id: {\n          type: 'string',\n          description: 'This must be the ID of a custom field, which must have values of the same type as the attribute you are filtering by.\\n\\nWhen this filtering field is set on an incident, the options for this custom field will be filtered to only those with the attribute value that matches the value of the filtering field.'\n        }\n      },\n      required: [        'catalog_attribute_id',\n        'custom_field_id'\n      ]\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.customFields.listV2()));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
