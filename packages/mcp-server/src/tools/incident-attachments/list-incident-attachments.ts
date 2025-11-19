// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incident_attachments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/incident_attachments',
  operationId: 'Incident Attachments V1#List',
};

export const tool: Tool = {
  name: 'list_incident_attachments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all incident attachments for a given external resource or incident. You must provide either a specific incident ID or a specific external resource type and external ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/incident_attachment_list_response',\n  $defs: {\n    incident_attachment_list_response: {\n      type: 'object',\n      properties: {\n        incident_attachments: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/incident_attachment'\n          }\n        }\n      },\n      required: [        'incident_attachments'\n      ]\n    },\n    incident_attachment: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of this incident membership'\n        },\n        incident_id: {\n          type: 'string',\n          description: 'Unique identifier of the incident'\n        },\n        resource: {\n          type: 'object',\n          properties: {\n            external_id: {\n              type: 'string',\n              description: 'ID of the resource in the external system'\n            },\n            permalink: {\n              type: 'string',\n              description: 'URL of the resource'\n            },\n            resource_type: {\n              type: 'string',\n              description: 'E.g. PagerDuty: the external system that holds the resource',\n              enum: [                'pager_duty_incident',\n                'opsgenie_alert',\n                'datadog_monitor_alert',\n                'github_pull_request',\n                'gitlab_merge_request',\n                'sentry_issue',\n                'jira_issue',\n                'jsm_alert',\n                'atlassian_statuspage_incident',\n                'zendesk_ticket',\n                'google_calendar_event',\n                'outlook_calendar_event',\n                'slack_file',\n                'scrubbed',\n                'statuspage_incident'\n              ]\n            },\n            title: {\n              type: 'string',\n              description: 'Title of resource'\n            }\n          },\n          required: [            'external_id',\n            'permalink',\n            'resource_type',\n            'title'\n          ]\n        }\n      },\n      required: [        'id',\n        'incident_id',\n        'resource'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      external_id: {
        type: 'string',
        description: 'ID of the resource in the external system',
      },
      incident_id: {
        type: 'string',
        description: 'Incident that this attachment is against',
      },
      resource_type: {
        type: 'string',
        description: 'E.g. PagerDuty: the external system that holds the resource',
        enum: [
          'pager_duty_incident',
          'opsgenie_alert',
          'datadog_monitor_alert',
          'github_pull_request',
          'gitlab_merge_request',
          'sentry_issue',
          'jira_issue',
          'jsm_alert',
          'atlassian_statuspage_incident',
          'zendesk_ticket',
          'google_calendar_event',
          'outlook_calendar_event',
          'slack_file',
          'scrubbed',
          'statuspage_incident',
        ],
      },
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
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.incidentAttachments.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
