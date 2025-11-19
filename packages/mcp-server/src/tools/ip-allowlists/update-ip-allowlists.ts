// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'ip_allowlists',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/ip_allowlists',
  operationId: 'IPAllowlists V1#UpdateIPAllowlist',
};

export const tool: Tool = {
  name: 'update_ip_allowlists',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate the IP allowlist for your organisation\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ip_allowlist_update_response',\n  $defs: {\n    ip_allowlist_update_response: {\n      type: 'object',\n      properties: {\n        ip_allowlist: {\n          $ref: '#/$defs/ip_allowlist'\n        }\n      },\n      required: [        'ip_allowlist'\n      ]\n    },\n    ip_allowlist: {\n      type: 'object',\n      properties: {\n        allowlist: {\n          type: 'array',\n          description: 'A list of IP addresses or CIDR prefixes to allow',\n          items: {\n            $ref: '#/$defs/ip_allowlist_item'\n          }\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Whether this IP allowlist is enabled or not'\n        },\n        version: {\n          type: 'integer',\n          description: 'The version of this IP allowlist'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The time this allowlist was last updated',\n          format: 'date-time'\n        }\n      },\n      required: [        'allowlist',\n        'enabled',\n        'version'\n      ]\n    },\n    ip_allowlist_item: {\n      type: 'object',\n      properties: {\n        value: {\n          type: 'string',\n          description: 'An IP address or a CIDR IP prefix to allow'\n        },\n        label: {\n          type: 'string',\n          description: 'A label to help identify this IP or prefix'\n        }\n      },\n      required: [        'value'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      allowlist: {
        type: 'array',
        description: 'A list of IP addresses or CIDR prefixes to allow',
        items: {
          $ref: '#/$defs/ip_allowlist_item',
        },
      },
      enabled: {
        type: 'boolean',
        description: 'Whether this IP allowlist is enabled or not',
      },
      version: {
        type: 'integer',
        description: 'The version of this IP allowlist',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['allowlist', 'enabled', 'version'],
    $defs: {
      ip_allowlist_item: {
        type: 'object',
        properties: {
          value: {
            type: 'string',
            description: 'An IP address or a CIDR IP prefix to allow',
          },
          label: {
            type: 'string',
            description: 'A label to help identify this IP or prefix',
          },
        },
        required: ['value'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.ipAllowlists.update(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
