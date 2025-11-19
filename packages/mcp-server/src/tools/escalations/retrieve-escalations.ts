// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'escalations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/escalations/{id}',
  operationId: 'Escalations V2#Show',
};

export const tool: Tool = {
  name: 'retrieve_escalations',
  description: 'Show a specific escalation.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique ID of the escalation',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.escalations.retrieve(id));
};

export default { metadata, tool, handler };
