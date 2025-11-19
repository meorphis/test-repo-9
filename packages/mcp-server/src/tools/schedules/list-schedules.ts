// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'schedules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/schedules',
  operationId: 'Schedules V2#List',
};

export const tool: Tool = {
  name: 'list_schedules',
  description: 'List configured schedules.',
  inputSchema: {
    type: 'object',
    properties: {
      after: {
        type: 'string',
        description:
          "A schedule's ID. This endpoint will return a list of schedules after this ID in relation to the API response order.",
      },
      page_size: {
        type: 'integer',
        description: 'Integer number of records to return',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.schedules.list(body));
};

export default { metadata, tool, handler };
