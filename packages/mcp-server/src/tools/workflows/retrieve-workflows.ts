// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'workflows',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/workflows/{id}',
  operationId: 'Workflows V2#ShowWorkflow',
};

export const tool: Tool = {
  name: 'retrieve_workflows',
  description: 'Show a workflow by ID',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for the workflow',
      },
      skip_step_upgrades: {
        type: 'boolean',
        description: 'Skips workflow step upgrades, when the parameters for an existing workflow step change',
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
    return asTextContentResult(await client.workflows.retrieve(id, body));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
