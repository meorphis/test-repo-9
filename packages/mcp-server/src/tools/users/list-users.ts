// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'incident-io-2-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/users',
  operationId: 'Users V2#List',
};

export const tool: Tool = {
  name: 'list_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList users in your account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_list_response',\n  $defs: {\n    user_list_response: {\n      type: 'object',\n      properties: {\n        pagination_meta: {\n          $ref: '#/$defs/pagination_meta_result'\n        },\n        users: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/user_with_roles'\n          }\n        }\n      },\n      required: [        'pagination_meta',\n        'users'\n      ]\n    },\n    pagination_meta_result: {\n      type: 'object',\n      properties: {\n        page_size: {\n          type: 'integer',\n          description: 'What was the maximum number of results requested'\n        },\n        after: {\n          type: 'string',\n          description: 'If provided, pass this as the \\'after\\' param to load the next page'\n        }\n      },\n      required: [        'page_size'\n      ]\n    },\n    user_with_roles: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of the user'\n        },\n        base_role: {\n          $ref: '#/$defs/rbac_role'\n        },\n        custom_roles: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/rbac_role'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the user'\n        },\n        role: {\n          type: 'string',\n          description: 'DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated.',\n          enum: [            'viewer',\n            'responder',\n            'administrator',\n            'owner',\n            'unset'\n          ]\n        },\n        email: {\n          type: 'string',\n          description: 'Email address of the user.'\n        },\n        slack_user_id: {\n          type: 'string',\n          description: 'Slack ID of the user'\n        }\n      },\n      required: [        'id',\n        'base_role',\n        'custom_roles',\n        'name',\n        'role'\n      ]\n    },\n    rbac_role: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier of the RBAC role'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the RBAC role'\n        },\n        slug: {\n          type: 'string',\n          description: 'Unique human-readable slug for the RBAC role'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the purpose for the RBAC role'\n        }\n      },\n      required: [        'id',\n        'name',\n        'slug'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      after: {
        type: 'string',
        description:
          "An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.",
      },
      email: {
        type: 'string',
        description: 'Filter by email address',
      },
      page_size: {
        type: 'integer',
        description: 'Integer number of records to return',
      },
      slack_user_id: {
        type: 'string',
        description: 'Filter by Slack user ID',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.users.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
