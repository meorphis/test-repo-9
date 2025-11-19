// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'severities',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/severities/{id}',
  operationId: 'Severities V1#Update',
};

export const tool: Tool = {
  name: 'update_severities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing severity\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/severity_update_response',\n  $defs: {\n    severity_update_response: {\n      type: 'object',\n      properties: {\n        severity: {\n          $ref: '#/$defs/severity_v1'\n        }\n      },\n      required: [        'severity'\n      ]\n    },\n    severity_v1: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of the severity'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the action was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the severity'\n        },\n        name: {\n          type: 'string',\n          description: 'Human readable name of the severity'\n        },\n        rank: {\n          type: 'integer',\n          description: 'Rank to help sort severities (lower numbers are less severe)'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the action was last updated',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'description',\n        'name',\n        'rank',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier of the severity',
      },
      description: {
        type: 'string',
        description: 'Description of the severity',
      },
      name: {
        type: 'string',
        description: 'Human readable name of the severity',
      },
      rank: {
        type: 'integer',
        description: 'Rank to help sort severities (lower numbers are less severe)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'description', 'name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.severities.update(id, body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
