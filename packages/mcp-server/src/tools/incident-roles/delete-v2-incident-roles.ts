// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incident_roles',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/incident_roles/{id}',
  operationId: 'Incident Roles V2#Delete',
};

export const tool: Tool = {
  name: 'delete_v2_incident_roles',
  description: 'Removes an existing role',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for the role',
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
  const response = await client.incidentRoles.deleteV2(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
