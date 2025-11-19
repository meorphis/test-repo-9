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
  httpPath: '/v2/alerts',
  operationId: 'Alerts V2#List',
};

export const tool: Tool = {
  name: 'list_alerts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all alerts for your account.\n\t\t\nThis endpoint supports a number of filters, which can help find alerts matching certain\ncriteria. These filters work similarly to the filters on the incidents endpoint, where \na field is specified alongside a comparison operator in the query string.\n\nNote that:\n- Filters may be used together, and the result will be alerts that match all filters.\n- All query parameters must be URI encoded.\n\n### By deduplication_key\n\nFind all alerts with deduplication_key ABC:\n\n\t\tcurl --get 'https://api.incident.io/v2/alerts' \\\n\t\t\t--data 'deduplication_key[is]=ABC'\n\n### By status\n\nFind all alerts in a firing state:\n\n\t\tcurl --get 'https://api.incident.io/v2/alerts' \\\n\t\t\t--data 'status[one_of]=firing'\n\n### By created_at\nFind all alerts that follow specified date parameters for created_at field.\nPossible values are \"gte\" (greater than or equal to), \"lte\" (less than or equal to), and \n\"date_range\" (between two dates). The following example finds all alerts created after \n2025-01-01:\n\n\t\tcurl --get 'https://api.incident.io/v2/alerts' \\\n\t\t\t--data 'created_at[gte]=2025-01-01'\n\nTo find alerts created within a specific date range, use the date_range option with \ntilde-separated dates:\n\n\t\tcurl --get 'https://api.incident.io/v2/alerts' \\\n\t\t\t--data 'created_at[date_range]=2024-12-02~2024-12-08'\n\t\t\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/alert_list_response',\n  $defs: {\n    alert_list_response: {\n      type: 'object',\n      properties: {\n        alerts: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/alert_v2'\n          }\n        },\n        pagination_meta: {\n          $ref: '#/$defs/pagination_meta_result'\n        }\n      },\n      required: [        'alerts',\n        'pagination_meta'\n      ]\n    },\n    alert_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of this alert'\n        },\n        alert_source_id: {\n          type: 'string',\n          description: 'The ID of the alert source this alert fired on'\n        },\n        attributes: {\n          type: 'array',\n          description: 'Attribute values parsed from the alerts payload',\n          items: {\n            type: 'object',\n            properties: {\n              attribute: {\n                $ref: '#/$defs/alert_attribute_v2'\n              },\n              array_value: {\n                type: 'array',\n                description: 'The value of the attribute if it is an array',\n                items: {\n                  $ref: '#/$defs/alert_attribute_value_v2'\n                }\n              },\n              value: {\n                $ref: '#/$defs/alert_attribute_value_v2'\n              }\n            },\n            required: [              'attribute'\n            ]\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'When this entry was created',\n          format: 'date-time'\n        },\n        deduplication_key: {\n          type: 'string',\n          description: 'A deduplication key which uniquely references this alert from your alert source. For newly created HTTP sources, this field is required.\\nIf you send an event with the same deduplication_key multiple times, only one alert will be created in incident.io for this alert source config.\\nYou can filter on this field to find the alert created by an event you\\'ve sent us.'\n        },\n        status: {\n          type: 'string',\n          description: 'Statuses of an alert',\n          enum: [            'firing',\n            'resolved'\n          ]\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the alert, parsed from the alert payload according to the alert source configuration'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When this alert was last updated',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the alert'\n        },\n        resolved_at: {\n          type: 'string',\n          description: 'When this alert was resolved',\n          format: 'date-time'\n        },\n        source_url: {\n          type: 'string',\n          description: 'If applicable, a link to the alert in the upstream system'\n        }\n      },\n      required: [        'id',\n        'alert_source_id',\n        'attributes',\n        'created_at',\n        'deduplication_key',\n        'status',\n        'title',\n        'updated_at'\n      ]\n    },\n    alert_attribute_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of this attribute'\n        },\n        array: {\n          type: 'boolean',\n          description: 'Whether this attribute is an array'\n        },\n        name: {\n          type: 'string',\n          description: 'Unique name of this attribute'\n        },\n        required: {\n          type: 'boolean',\n          description: 'Whether this attribute is required. If this field is not set, the existing setting will be preserved.'\n        },\n        type: {\n          type: 'string',\n          description: 'Engine resource name for this attribute'\n        }\n      },\n      required: [        'id',\n        'array',\n        'name',\n        'required',\n        'type'\n      ]\n    },\n    alert_attribute_value_v2: {\n      type: 'object',\n      properties: {\n        catalog_entry: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'ID of this catalog entry'\n            },\n            catalog_type_id: {\n              type: 'string',\n              description: 'ID of this catalog type'\n            },\n            name: {\n              type: 'string',\n              description: 'Name is the human readable name of this entry'\n            }\n          },\n          required: [            'id',\n            'catalog_type_id',\n            'name'\n          ]\n        },\n        label: {\n          type: 'string',\n          description: 'The human readable label of this value for convenience. Will match the literal if this is a primitive type, or be the name of the catalog entry if this is a catalog entry'\n        },\n        literal: {\n          type: 'string',\n          description: 'If set, this is the literal value of the step parameter'\n        }\n      }\n    },\n    pagination_meta_result: {\n      type: 'object',\n      properties: {\n        page_size: {\n          type: 'integer',\n          description: 'What was the maximum number of results requested'\n        },\n        after: {\n          type: 'string',\n          description: 'If provided, pass this as the \\'after\\' param to load the next page'\n        }\n      },\n      required: [        'page_size'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page_size: {
        type: 'integer',
        description: 'Number of alerts to return per page',
      },
      after: {
        type: 'string',
        description: "If provided, pass this as the 'after' param to load the next page",
      },
      created_at: {
        type: 'object',
        description:
          "Filter on alert created at timestamp. Accepted operators are 'gte', 'lte' and 'date_range'.",
        additionalProperties: true,
      },
      deduplication_key: {
        type: 'object',
        description: "Filter on alert deduplication key. The accepted operator is 'is'.",
        additionalProperties: true,
      },
      status: {
        type: 'object',
        description: "Filter on alert status. The accepted operators are 'one_of', or 'not_in'.",
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['page_size'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.alerts.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
