// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incident_roles',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/incident_roles',
  operationId: 'Incident Roles V2#Create',
};

export const tool: Tool = {
  name: 'create_v2_incident_roles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new incident role\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/incident_role_create_v2_response',\n  $defs: {\n    incident_role_create_v2_response: {\n      type: 'object',\n      properties: {\n        incident_role: {\n          $ref: '#/$defs/incident_role_v2'\n        }\n      },\n      required: [        'incident_role'\n      ]\n    },\n    incident_role_v2: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the role'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the role was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Describes the purpose of the role'\n        },\n        instructions: {\n          type: 'string',\n          description: 'Provided to whoever is nominated for the role. Note that this will be empty for the \\'reporter\\' role.'\n        },\n        name: {\n          type: 'string',\n          description: 'Human readable name of the incident role'\n        },\n        role_type: {\n          type: 'string',\n          description: 'Type of incident role',\n          enum: [            'lead',\n            'reporter',\n            'custom'\n          ]\n        },\n        shortform: {\n          type: 'string',\n          description: 'Short human readable name for Slack. Note that this will be empty for the \\'reporter\\' role.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the role was last updated',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'description',\n        'instructions',\n        'name',\n        'role_type',\n        'shortform',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      description: {
        type: 'string',
        description: 'Describes the purpose of the role',
      },
      instructions: {
        type: 'string',
        description:
          "Provided to whoever is nominated for the role. Note that this will be empty for the 'reporter' role.",
      },
      name: {
        type: 'string',
        description: 'Human readable name of the incident role',
      },
      shortform: {
        type: 'string',
        description:
          "Short human readable name for Slack. Note that this will be empty for the 'reporter' role.",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['description', 'instructions', 'name', 'shortform'],
  },
  annotations: {},
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.incidentRoles.createV2(body)));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
