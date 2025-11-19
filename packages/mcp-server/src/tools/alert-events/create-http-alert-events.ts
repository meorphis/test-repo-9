// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'alert_events',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/alert_events/http/{alert_source_config_id}',
  operationId: 'Alert Events V2#CreateHTTP',
};

export const tool: Tool = {
  name: 'create_http_alert_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an alert event using an HTTP source.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/alert_event_create_http_response',\n  $defs: {\n    alert_event_create_http_response: {\n      type: 'object',\n      properties: {\n        deduplication_key: {\n          type: 'string',\n          description: 'The deduplication key that the event has been processed with'\n        },\n        message: {\n          type: 'string',\n          description: 'Human readable message giving detail about the event'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the event'\n        }\n      },\n      required: [        'deduplication_key',\n        'message',\n        'status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      alert_source_config_id: {
        type: 'string',
        description: 'Which alert source config produced this alert',
      },
      status: {
        type: 'string',
        description: 'Current status of this alert',
        enum: ['firing', 'resolved'],
      },
      title: {
        type: 'string',
        description:
          'The title of the alert, parsed from the alert payload according to the alert source configuration',
      },
      token: {
        type: 'string',
        description:
          'Token used to authenticate the request, generated when configuring the alert source. Will be consumed via a URL query string parameter',
      },
      deduplication_key: {
        type: 'string',
        description:
          "A deduplication key which uniquely references this alert from your alert source. For newly created HTTP sources, this field is required.\nIf you send an event with the same deduplication_key multiple times, only one alert will be created in incident.io for this alert source config.\nYou can filter on this field to find the alert created by an event you've sent us.",
      },
      description: {
        type: 'string',
        description: 'Description that optionally adds more detail to title. Supports markdown.',
      },
      metadata: {
        type: 'object',
        description: "Any additional metadata that you've configured your alert source to parse",
        additionalProperties: true,
      },
      source_url: {
        type: 'string',
        description: 'If applicable, a link to the alert in the upstream system',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['alert_source_config_id', 'status', 'title'],
  },
  annotations: {},
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { alert_source_config_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.alertEvents.createHTTP(alert_source_config_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
