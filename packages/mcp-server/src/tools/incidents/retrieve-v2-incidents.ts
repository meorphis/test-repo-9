// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incidents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/incidents/{id}',
  operationId: 'Incidents V2#Show',
};

export const tool: Tool = {
  name: 'retrieve_v2_incidents',
  description:
    "Get a single incident.\n\nThe ID supplied can be either the incident's full ID, or the numeric part of its\nreference. For example, to get INC-123, you could use either its full ID or:\n\n\t\tcurl \\\n\t\t\t--get 'https://api.incident.io/v2/incidents/123\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for the incident',
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
    return asTextContentResult(await client.incidents.retrieveV2(id));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
