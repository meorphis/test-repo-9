// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'alert_attributes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/alert_attributes',
  operationId: 'Alert Attributes V2#Create',
};

export const tool: Tool = {
  name: 'create_alert_attributes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new alert attribute.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/alert_attribute_create_response',\n  $defs: {\n    alert_attribute_create_response: {\n      type: 'object',\n      properties: {\n        alert_attribute: {\n          $ref: '#/$defs/alert_attribute_v2'\n        }\n      },\n      required: [        'alert_attribute'\n      ]\n    },\n    alert_attribute_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of this attribute'\n        },\n        array: {\n          type: 'boolean',\n          description: 'Whether this attribute is an array'\n        },\n        name: {\n          type: 'string',\n          description: 'Unique name of this attribute'\n        },\n        required: {\n          type: 'boolean',\n          description: 'Whether this attribute is required. If this field is not set, the existing setting will be preserved.'\n        },\n        type: {\n          type: 'string',\n          description: 'Engine resource name for this attribute'\n        }\n      },\n      required: [        'id',\n        'array',\n        'name',\n        'required',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
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
        description: 'Engine resource name for this attribute',
      },
      required: {
        type: 'boolean',
        description:
          'Whether this attribute is required. If this field is not set, the existing setting will be preserved.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['array', 'name', 'type'],
  },
  annotations: {},
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.alertAttributes.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
