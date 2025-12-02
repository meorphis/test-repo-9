// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'alert_sources',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/alert_sources/{id}',
  operationId: 'Alert Sources V2#Show',
};

export const tool: Tool = {
  name: 'retrieve_alert_sources',
  description: 'Load details about a specific alert source in your account.',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.alertSources.retrieve(id));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
