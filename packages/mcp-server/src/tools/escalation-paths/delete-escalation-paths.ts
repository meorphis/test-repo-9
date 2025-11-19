// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'escalation_paths',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/escalation_paths/{id}',
  operationId: 'Escalations V2#DestroyPath',
};

export const tool: Tool = {
  name: 'delete_escalation_paths',
  description:
    'Archives an escalation path.\n\nWe recommend you create escalation paths in the incident.io dashboard where our path\nbuilder makes it easy to use conditions and visualise the path.\n',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for this escalation path.',
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
  const response = await client.escalationPaths.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
