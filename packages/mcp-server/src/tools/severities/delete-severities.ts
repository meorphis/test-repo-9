// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'severities',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/severities/{id}',
  operationId: 'Severities V1#Delete',
};

export const tool: Tool = {
  name: 'delete_severities',
  description: 'Delete a severity',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier of the severity',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.severities.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
