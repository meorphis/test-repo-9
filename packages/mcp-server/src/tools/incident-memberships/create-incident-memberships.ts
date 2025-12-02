// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incident_memberships',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/incident_memberships',
  operationId: 'Incident Memberships V1#Create',
};

export const tool: Tool = {
  name: 'create_incident_memberships',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMakes a user a member of a private incident\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/incident_membership_create_response',\n  $defs: {\n    incident_membership_create_response: {\n      type: 'object',\n      properties: {\n        incident_membership: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Unique identifier of this incident membership'\n            },\n            created_at: {\n              type: 'string',\n              description: 'When the membership was created',\n              format: 'date-time'\n            },\n            incident_id: {\n              type: 'string',\n              description: 'Unique identifier of the incident'\n            },\n            updated_at: {\n              type: 'string',\n              description: 'When the membership was last updated',\n              format: 'date-time'\n            },\n            user: {\n              $ref: '#/$defs/user_v1'\n            }\n          },\n          required: [            'id',\n            'created_at',\n            'incident_id',\n            'updated_at',\n            'user'\n          ]\n        }\n      },\n      required: [        'incident_membership'\n      ]\n    },\n    user_v1: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of the user'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the user'\n        },\n        role: {\n          type: 'string',\n          description: 'DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated.',\n          enum: [            'viewer',\n            'responder',\n            'administrator',\n            'owner',\n            'unset'\n          ]\n        },\n        email: {\n          type: 'string',\n          description: 'Email address of the user.'\n        },\n        slack_user_id: {\n          type: 'string',\n          description: 'Slack ID of the user'\n        }\n      },\n      required: [        'id',\n        'name',\n        'role'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      incident_id: {
        type: 'string',
      },
      user_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['incident_id', 'user_id'],
  },
  annotations: {},
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.incidentMemberships.create(body)));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
