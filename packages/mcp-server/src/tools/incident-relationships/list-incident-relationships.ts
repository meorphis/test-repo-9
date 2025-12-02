// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'incident_relationships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/incident_relationships',
  operationId: 'Incident Relationships V1#List',
};

export const tool: Tool = {
  name: 'list_incident_relationships',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList related incidents for a specific incident.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/incident_relationship_list_response',\n  $defs: {\n    incident_relationship_list_response: {\n      type: 'object',\n      properties: {\n        incident_relationships: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier of this incident relationship'\n              },\n              incident: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'Unique identifier of this incident'\n                  },\n                  external_id: {\n                    type: 'integer',\n                    description: 'External ID of this incident often prepended with \\'INC-\\''\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'Name of this incident'\n                  }\n                },\n                required: [                  'id',\n                  'external_id',\n                  'name'\n                ]\n              }\n            },\n            required: [              'id',\n              'incident'\n            ]\n          }\n        },\n        pagination_meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      },\n      required: [        'incident_relationships'\n      ]\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_size: {\n          type: 'integer',\n          description: 'What was the maximum number of results requested'\n        },\n        after: {\n          type: 'string',\n          description: 'If provided, pass this as the \\'after\\' param to load the next page'\n        }\n      },\n      required: [        'page_size'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      incident_id: {
        type: 'string',
        description: 'ID of the incident to find relationships for',
      },
      after: {
        type: 'string',
        description:
          "An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.",
      },
      page_size: {
        type: 'integer',
        description: 'Integer number of records to return',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['incident_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.incidentRelationships.list(body)));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
