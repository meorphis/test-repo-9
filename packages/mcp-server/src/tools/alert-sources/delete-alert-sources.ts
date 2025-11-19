// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'alert_sources',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/alert_sources/{id}',
  operationId: 'Alert Sources V2#Delete',
};

export const tool: Tool = {
  name: 'delete_alert_sources',
  description: 'Delete an existing alert source in your account.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of this alert source',
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
  const response = await client.alertSources.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
