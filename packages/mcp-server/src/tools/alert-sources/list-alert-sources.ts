// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'alert_sources',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/alert_sources',
  operationId: 'Alert Sources V2#List',
};

export const tool: Tool = {
  name: 'list_alert_sources',
  description: 'List all alert sources in your account.',
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
  return asTextContentResult(await client.alertSources.list());
};

export default { metadata, tool, handler };
