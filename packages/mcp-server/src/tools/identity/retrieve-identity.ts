// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'identity',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/identity',
  operationId: 'Utilities V1#Identity',
};

export const tool: Tool = {
  name: 'retrieve_identity',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTest if your API key is valid, and which roles it has.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/identity_retrieve_response',\n  $defs: {\n    identity_retrieve_response: {\n      type: 'object',\n      properties: {\n        identity: {\n          type: 'object',\n          properties: {\n            dashboard_url: {\n              type: 'string',\n              description: 'The dashboard URL for this organisation'\n            },\n            name: {\n              type: 'string',\n              description: 'The name assigned to the current API Key'\n            },\n            roles: {\n              type: 'array',\n              description: 'Which roles have been enabled for this key',\n              items: {\n                type: 'string',\n                description: 'API key roles',\n                enum: [                  'viewer',\n                  'incident_creator',\n                  'incident_editor',\n                  'manage_settings',\n                  'global_access',\n                  'catalog_viewer',\n                  'catalog_editor',\n                  'incident_memberships_editor',\n                  'schedules_editor',\n                  'schedules_reader',\n                  'schedule_overrides_editor',\n                  'workflows_editor',\n                  'private_workflows_editor',\n                  'on_call_editor',\n                  'escalation_creator',\n                  'post_incident_flow_opt_out',\n                  'security_settings_editor',\n                  'investigation_download'\n                ]\n              }\n            }\n          },\n          required: [            'dashboard_url',\n            'name',\n            'roles'\n          ]\n        }\n      },\n      required: [        'identity'\n      ]\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.identity.retrieve()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
