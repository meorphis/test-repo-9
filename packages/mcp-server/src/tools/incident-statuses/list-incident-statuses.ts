// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incident_statuses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/incident_statuses',
  operationId: 'Incident Statuses V1#List',
};

export const tool: Tool = {
  name: 'list_incident_statuses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all incident statuses for an organisation.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/incident_status_list_response',\n  $defs: {\n    incident_status_list_response: {\n      type: 'object',\n      properties: {\n        incident_statuses: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/incident_status_v1'\n          }\n        }\n      },\n      required: [        'incident_statuses'\n      ]\n    },\n    incident_status_v1: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique ID of this incident status'\n        },\n        category: {\n          type: 'string',\n          description: 'What category of status it is. All statuses apart from live (renamed in the app to Active) and learning (renamed in the app to Post-incident) are managed by incident.io and cannot be configured',\n          enum: [            'triage',\n            'declined',\n            'merged',\n            'canceled',\n            'live',\n            'learning',\n            'closed',\n            'paused'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Rich text description of the incident status'\n        },\n        name: {\n          type: 'string',\n          description: 'Unique name of this status'\n        },\n        rank: {\n          type: 'integer',\n          description: 'Order of this incident status'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'category',\n        'created_at',\n        'description',\n        'name',\n        'rank',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.incidentStatuses.list()));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
