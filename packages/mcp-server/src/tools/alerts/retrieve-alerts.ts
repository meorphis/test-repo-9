// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'alerts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/alerts/{id}',
  operationId: 'Alerts V2#Show',
};

export const tool: Tool = {
  name: 'retrieve_alerts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nShow a single alert for your account\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/alert_retrieve_response',\n  $defs: {\n    alert_retrieve_response: {\n      type: 'object',\n      properties: {\n        alert: {\n          $ref: '#/$defs/alert_v2'\n        }\n      },\n      required: [        'alert'\n      ]\n    },\n    alert_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of this alert'\n        },\n        alert_source_id: {\n          type: 'string',\n          description: 'The ID of the alert source this alert fired on'\n        },\n        attributes: {\n          type: 'array',\n          description: 'Attribute values parsed from the alerts payload',\n          items: {\n            type: 'object',\n            properties: {\n              attribute: {\n                $ref: '#/$defs/alert_attribute_v2'\n              },\n              array_value: {\n                type: 'array',\n                description: 'The value of the attribute if it is an array',\n                items: {\n                  $ref: '#/$defs/alert_attribute_value_v2'\n                }\n              },\n              value: {\n                $ref: '#/$defs/alert_attribute_value_v2'\n              }\n            },\n            required: [              'attribute'\n            ]\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'When this entry was created',\n          format: 'date-time'\n        },\n        deduplication_key: {\n          type: 'string',\n          description: 'A deduplication key which uniquely references this alert from your alert source. For newly created HTTP sources, this field is required.\\nIf you send an event with the same deduplication_key multiple times, only one alert will be created in incident.io for this alert source config.\\nYou can filter on this field to find the alert created by an event you\\'ve sent us.'\n        },\n        status: {\n          type: 'string',\n          description: 'Statuses of an alert',\n          enum: [            'firing',\n            'resolved'\n          ]\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the alert, parsed from the alert payload according to the alert source configuration'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When this alert was last updated',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the alert'\n        },\n        resolved_at: {\n          type: 'string',\n          description: 'When this alert was resolved',\n          format: 'date-time'\n        },\n        source_url: {\n          type: 'string',\n          description: 'If applicable, a link to the alert in the upstream system'\n        }\n      },\n      required: [        'id',\n        'alert_source_id',\n        'attributes',\n        'created_at',\n        'deduplication_key',\n        'status',\n        'title',\n        'updated_at'\n      ]\n    },\n    alert_attribute_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of this attribute'\n        },\n        array: {\n          type: 'boolean',\n          description: 'Whether this attribute is an array'\n        },\n        name: {\n          type: 'string',\n          description: 'Unique name of this attribute'\n        },\n        required: {\n          type: 'boolean',\n          description: 'Whether this attribute is required. If this field is not set, the existing setting will be preserved.'\n        },\n        type: {\n          type: 'string',\n          description: 'Engine resource name for this attribute'\n        }\n      },\n      required: [        'id',\n        'array',\n        'name',\n        'required',\n        'type'\n      ]\n    },\n    alert_attribute_value_v2: {\n      type: 'object',\n      properties: {\n        catalog_entry: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'ID of this catalog entry'\n            },\n            catalog_type_id: {\n              type: 'string',\n              description: 'ID of this catalog type'\n            },\n            name: {\n              type: 'string',\n              description: 'Name is the human readable name of this entry'\n            }\n          },\n          required: [            'id',\n            'catalog_type_id',\n            'name'\n          ]\n        },\n        label: {\n          type: 'string',\n          description: 'The human readable label of this value for convenience. Will match the literal if this is a primitive type, or be the name of the catalog entry if this is a catalog entry'\n        },\n        literal: {\n          type: 'string',\n          description: 'If set, this is the literal value of the step parameter'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for the alert',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.alerts.retrieve(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
