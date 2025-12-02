// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'escalation_paths',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/escalation_paths/{id}',
  operationId: 'Escalations V2#ShowPath',
};

export const tool: Tool = {
  name: 'retrieve_escalation_paths',
  description:
    'Show an escalation path.\n\nWe recommend you create escalation paths in the incident.io dashboard where our path\nbuilder makes it easy to use conditions and visualise the path.\n',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.escalationPaths.retrieve(id));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
