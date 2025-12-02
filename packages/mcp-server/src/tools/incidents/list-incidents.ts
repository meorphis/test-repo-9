// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incidents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/incidents',
  operationId: 'Incidents V1#List',
};

export const tool: Tool = {
  name: 'list_incidents',
  description: 'List all incidents for an organisation.',
  inputSchema: {
    type: 'object',
    properties: {
      after: {
        type: 'string',
        description:
          "An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.",
      },
      page_size: {
        type: 'integer',
        description: 'Integer number of records to return',
      },
      status: {
        type: 'array',
        description: 'Filter for incidents in these statuses',
        items: {
          type: 'string',
        },
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
  try {
    return asTextContentResult(await client.incidents.list(body));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
