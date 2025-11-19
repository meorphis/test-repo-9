// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incident_timestamps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/incident_timestamps/{id}',
  operationId: 'Incident Timestamps V2#Show',
};

export const tool: Tool = {
  name: 'retrieve_incident_timestamps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a single incident timestamp.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/incident_timestamp_retrieve_response',\n  $defs: {\n    incident_timestamp_retrieve_response: {\n      type: 'object',\n      properties: {\n        incident_timestamp: {\n          $ref: '#/$defs/incident_timestamp'\n        }\n      },\n      required: [        'incident_timestamp'\n      ]\n    },\n    incident_timestamp: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique ID of this incident timestamp'\n        },\n        name: {\n          type: 'string',\n          description: 'Unique name of this timestamp'\n        },\n        rank: {\n          type: 'integer',\n          description: 'Order in which this timestamp should be shown'\n        }\n      },\n      required: [        'id',\n        'name',\n        'rank'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique ID of this incident timestamp',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.incidentTimestamps.retrieve(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
