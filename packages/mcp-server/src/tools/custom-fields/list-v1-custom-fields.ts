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
  httpPath: '/v1/custom_fields',
  operationId: 'Custom Fields V1#List',
};

export const tool: Tool = {
  name: 'list_v1_custom_fields',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all custom fields for an organisation.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/custom_field_list_v1_response',\n  $defs: {\n    custom_field_list_v1_response: {\n      type: 'object',\n      properties: {\n        custom_fields: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/custom_field_v1'\n          }\n        }\n      },\n      required: [        'custom_fields'\n      ]\n    },\n    custom_field_v1: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the custom field'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the action was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the custom field'\n        },\n        field_type: {\n          type: 'string',\n          description: 'Type of custom field',\n          enum: [            'single_select',\n            'multi_select',\n            'text',\n            'link',\n            'numeric'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'Human readable name for the custom field'\n        },\n        options: {\n          type: 'array',\n          description: 'What options are available for this custom field, if this field has options',\n          items: {\n            $ref: '#/$defs/custom_field_option_v1'\n          }\n        },\n        show_before_closure: {\n          type: 'boolean',\n          description: 'Whether a custom field should be shown in the incident resolve modal. If this custom field is required before resolution, but no value has been set for it, the field will be shown in the resolve modal whatever the value of this setting.'\n        },\n        show_before_creation: {\n          type: 'boolean',\n          description: 'Whether a custom field should be shown in the incident creation modal. This must be true if the field is always required.'\n        },\n        show_before_update: {\n          type: 'boolean',\n          description: 'Whether a custom field should be shown in the incident update modal.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the action was last updated',\n          format: 'date-time'\n        },\n        catalog_type_id: {\n          type: 'string',\n          description: 'For catalog fields, the ID of the associated catalog type'\n        },\n        required: {\n          type: 'string',\n          description: 'When this custom field must be set during the incident lifecycle. [DEPRECATED: please use required_v2 instead].',\n          enum: [            'never',\n            'before_closure',\n            'always'\n          ]\n        },\n        required_v2: {\n          type: 'string',\n          description: 'When this custom field must be set during the incident lifecycle.',\n          enum: [            'never',\n            'before_resolution',\n            'always'\n          ]\n        },\n        show_in_announcement_post: {\n          type: 'boolean',\n          description: 'Whether a custom field should be shown in the list of fields as part of the announcement post when set.'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'description',\n        'field_type',\n        'name',\n        'options',\n        'show_before_closure',\n        'show_before_creation',\n        'show_before_update',\n        'updated_at'\n      ]\n    },\n    custom_field_option_v1: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the custom field option'\n        },\n        custom_field_id: {\n          type: 'string',\n          description: 'ID of the custom field this option belongs to'\n        },\n        sort_key: {\n          type: 'integer',\n          description: 'Sort key used to order the custom field options correctly'\n        },\n        value: {\n          type: 'string',\n          description: 'Human readable name for the custom field option'\n        }\n      },\n      required: [        'id',\n        'custom_field_id',\n        'sort_key',\n        'value'\n      ]\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.customFields.listV1()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
