// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'alert_routes',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/alert_routes/{id}',
  operationId: 'Alert Routes V2#Delete',
};

export const tool: Tool = {
  name: 'delete_alert_routes',
  description: 'Delete an existing alert route in your account.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier of the alert route',
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
  const response = await client.alertRoutes.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
