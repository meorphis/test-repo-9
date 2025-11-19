// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'escalations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/escalations',
  operationId: 'Escalations V2#Create',
};

export const tool: Tool = {
  name: 'create_escalations',
  description:
    'Create an escalation.\n\nAn escalation pages people, either according to an escalation path, or directly to\nspecific users. You must provide either an escalation_path_id OR user_ids, but not both.\n\nWhen escalating via an escalation path, the escalation will follow the configured path\nwith its levels and timeouts, using your default [alert\npriority](https://app.incident.io/~/settings/alerts/configuration/priorities).\n\nWhen escalating directly to users, they will receive a high-urgency\nnotification, based on their notification rules.\n\nThis endpoint is rate-limited to 60 requests per minute, since it is intended for\ninteractive use cases (for example someone clicking a "escalate to team" button\nin your internal developer platform). To escalate based on automated alerts, we\nrecommend sending events to an alert source instead.\n',
  inputSchema: {
    type: 'object',
    properties: {
      idempotency_key: {
        type: 'string',
        description:
          'Unique key to prevent duplicate escalations. If this key has already been used, the existing escalation will be returned.',
      },
      title: {
        type: 'string',
        description:
          'The title of the escalation. This message will be included in all notifications about this escalation.',
      },
      description: {
        type: 'string',
        description: 'Additional details about the escalation',
      },
      escalation_path_id: {
        type: 'string',
        description: 'ID of the escalation path to follow',
      },
      user_ids: {
        type: 'array',
        description: 'IDs of users to escalate directly to',
        items: {
          type: 'string',
        },
      },
    },
    required: ['idempotency_key', 'title'],
  },
  annotations: {},
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.escalations.create(body));
};

export default { metadata, tool, handler };
