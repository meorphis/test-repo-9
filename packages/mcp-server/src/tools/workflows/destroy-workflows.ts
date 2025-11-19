// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'workflows',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/workflows/{id}',
  operationId: 'Workflows V2#DestroyWorkflow',
};

export const tool: Tool = {
  name: 'destroy_workflows',
  description: 'Archives a workflow',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for the workflow',
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
  const response = await client.workflows.destroy(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
