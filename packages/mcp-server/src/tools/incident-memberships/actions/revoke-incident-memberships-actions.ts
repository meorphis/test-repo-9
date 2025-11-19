// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incident_memberships.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/incident_memberships/actions/revoke',
  operationId: 'Incident Memberships V1#Revoke',
};

export const tool: Tool = {
  name: 'revoke_incident_memberships_actions',
  description: "Revoke a user's membership of a private incident",
  inputSchema: {
    type: 'object',
    properties: {
      incident_id: {
        type: 'string',
        description: 'Revoke memberships to incident',
      },
      user_id: {
        type: 'string',
      },
    },
    required: ['incident_id', 'user_id'],
  },
  annotations: {},
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.incidentMemberships.actions.revoke(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
