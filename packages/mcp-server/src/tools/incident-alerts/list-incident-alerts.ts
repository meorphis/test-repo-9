// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incident_alerts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/incident_alerts',
  operationId: 'Alerts V2#ListIncidentAlerts',
};

export const tool: Tool = {
  name: 'list_incident_alerts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList the connections between incidents and alerts\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/incident_alert_list_response',\n  $defs: {\n    incident_alert_list_response: {\n      type: 'object',\n      properties: {\n        incident_alerts: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The ID of this alert'\n              },\n              alert: {\n                $ref: '#/$defs/alert_slim'\n              },\n              incident: {\n                $ref: '#/$defs/incident_slim'\n              },\n              alert_route_id: {\n                type: 'string',\n                description: 'The ID of the alert route that created this incident alert'\n              }\n            },\n            required: [              'id',\n              'alert',\n              'incident'\n            ]\n          }\n        },\n        pagination_meta: {\n          $ref: '#/$defs/pagination_meta_result'\n        }\n      },\n      required: [        'incident_alerts',\n        'pagination_meta'\n      ]\n    },\n    alert_slim: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of this alert'\n        },\n        alert_source_id: {\n          type: 'string',\n          description: 'The ID of the alert source this alert fired on'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When this entry was created',\n          format: 'date-time'\n        },\n        deduplication_key: {\n          type: 'string',\n          description: 'A deduplication key which uniquely references this alert from your alert source. For newly created HTTP sources, this field is required.\\nIf you send an event with the same deduplication_key multiple times, only one alert will be created in incident.io for this alert source config.\\nYou can filter on this field to find the alert created by an event you\\'ve sent us.'\n        },\n        status: {\n          type: 'string',\n          description: 'Statuses of an alert',\n          enum: [            'firing',\n            'resolved'\n          ]\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the alert, parsed from the alert payload according to the alert source configuration'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When this alert was last updated',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the alert'\n        },\n        resolved_at: {\n          type: 'string',\n          description: 'When this alert was resolved',\n          format: 'date-time'\n        },\n        source_url: {\n          type: 'string',\n          description: 'If applicable, a link to the alert in the upstream system'\n        }\n      },\n      required: [        'id',\n        'alert_source_id',\n        'created_at',\n        'deduplication_key',\n        'status',\n        'title',\n        'updated_at'\n      ]\n    },\n    incident_slim: {\n      type: 'object',\n      description: 'Incident slim is a subset of the full incident object, listing key fields.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the incident'\n        },\n        external_id: {\n          type: 'integer',\n          description: 'External identifier for the incident - often displayed with an INC- prefix'\n        },\n        name: {\n          type: 'string',\n          description: 'Explanation of the incident'\n        },\n        reference: {\n          type: 'string',\n          description: 'Reference to this incident, as displayed across the product'\n        },\n        status_category: {\n          type: 'string',\n          description: 'The category of the incidents status',\n          enum: [            'triage',\n            'declined',\n            'merged',\n            'canceled',\n            'active',\n            'post-incident',\n            'closed',\n            'paused'\n          ]\n        },\n        visibility: {\n          type: 'string',\n          description: 'Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). For more information on Private Incidents see our [help centre](https://help.incident.io/articles/5905558102-can-we-mark-incidents-as-sensitive-and-restrict-access).',\n          enum: [            'public',\n            'private'\n          ]\n        },\n        summary: {\n          type: 'string',\n          description: 'Detailed description of the incident'\n        }\n      },\n      required: [        'id',\n        'external_id',\n        'name',\n        'reference',\n        'status_category',\n        'visibility'\n      ]\n    },\n    pagination_meta_result: {\n      type: 'object',\n      properties: {\n        page_size: {\n          type: 'integer',\n          description: 'What was the maximum number of results requested'\n        },\n        after: {\n          type: 'string',\n          description: 'If provided, pass this as the \\'after\\' param to load the next page'\n        }\n      },\n      required: [        'page_size'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page_size: {
        type: 'integer',
        description: 'Number of incident alerts to return per page',
      },
      after: {
        type: 'string',
        description: "If provided, pass this as the 'after' param to load the next page",
      },
      alert_id: {
        type: 'string',
        description: 'Alert that this incident alert refers to',
      },
      incident_id: {
        type: 'string',
        description: 'Incident that this incident alert is attached to',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['page_size'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.incidentAlerts.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
