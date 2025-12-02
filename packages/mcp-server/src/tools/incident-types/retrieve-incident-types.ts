// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incident_types',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/incident_types/{id}',
  operationId: 'Incident Types V1#Show',
};

export const tool: Tool = {
  name: 'retrieve_incident_types',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a single incident type.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/incident_type_retrieve_response',\n  $defs: {\n    incident_type_retrieve_response: {\n      type: 'object',\n      properties: {\n        incident_type: {\n          $ref: '#/$defs/incident_type'\n        }\n      },\n      required: [        'incident_type'\n      ]\n    },\n    incident_type: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for this Incident Type'\n        },\n        create_in_triage: {\n          type: 'string',\n          description: 'Whether incidents of this must always, or can optionally, be created in triage',\n          enum: [            'always',\n            'optional'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'When this resource was created',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'What is this incident type for?'\n        },\n        is_default: {\n          type: 'boolean',\n          description: 'The default Incident Type is used when no other type is explicitly specified'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of this Incident Type'\n        },\n        private_incidents_only: {\n          type: 'boolean',\n          description: 'Should all incidents created with this Incident Type be private?'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When this resource was last updated',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'create_in_triage',\n        'created_at',\n        'description',\n        'is_default',\n        'name',\n        'private_incidents_only',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for this Incident Type',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.incidentTypes.retrieve(id)));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
