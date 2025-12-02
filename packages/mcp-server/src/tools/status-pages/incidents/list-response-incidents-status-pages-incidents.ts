// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'status_pages.incidents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/status-pages/{id}/incidents/{incident_id}/response-incidents',
  operationId: 'Status Pages V1#ListResponseIncidents',
};

export const tool: Tool = {
  name: 'list_response_incidents_status_pages_incidents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList the linked Response incidents for a status page incident.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/incident_list_response_incidents_response',\n  $defs: {\n    incident_list_response_incidents_response: {\n      type: 'object',\n      properties: {\n        incidents: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'ID of the Response incident'\n              },\n              linked_at: {\n                type: 'string',\n                description: 'When the Response incident was linked to the status page incident',\n                format: 'date-time'\n              }\n            },\n            required: [              'id',\n              'linked_at'\n            ]\n          }\n        }\n      },\n      required: [        'incidents'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the status page',
      },
      incident_id: {
        type: 'string',
        description: 'ID of the status page incident',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'incident_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { incident_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.statusPages.incidents.listResponseIncidents(incident_id, body),
      ),
    );
  } catch (error) {
    if (error instanceof IncidentIo2.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
