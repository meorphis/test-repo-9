// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'workflows',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/workflows',
  operationId: 'Workflows V2#ListWorkflows',
};

export const tool: Tool = {
  name: 'list_workflows',
  description: 'List all workflows',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.workflows.list());
};

export default { metadata, tool, handler };
