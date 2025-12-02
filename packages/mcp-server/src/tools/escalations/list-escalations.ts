// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'escalations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/escalations',
  operationId: 'Escalations V2#List',
};

export const tool: Tool = {
  name: 'list_escalations',
  description:
    'List all escalations for your account.\n\nThis endpoint supports a number of filters, which can help find escalations matching certain\ncriteria.\n\nNote that:\n- Filters may be used together, and the result will be escalations that match all filters.\n- All query parameters must be URI encoded.\n\nTo use this API, you will need an API key with the "View data" or "Create and manage on-call resources" permission.\n\n### By escalation_path\n\nFind all escalations that escalated to escalation path with id=ABC:\n\n\t\tcurl --get \'https://api.incident.io/v2/escalations\' \\\n\t\t\t--data \'escalation_path[one_of]=ABC\'\n\n### By status\n\nFind all escalations with a current status of "triggered":\n\n\t\tcurl --get \'https://api.incident.io/v2/escalations\' \\\n\t\t\t--data \'status[one_of]=triggered\'\n\nPossible values are "pending", "triggered", "acked", "resolved", "expired" and "cancelled".\nEscalations are in "pending" when they are in a grace period when the related alert has\nbeen grouped in an incident.\n\n### By alert\n\nFind all escalations that were created by alert with id=ABC:\n\n\t\tcurl --get \'https://api.incident.io/v2/escalations\' \\\n\t\t\t--data \'alert[one_of]=ABC\'\n\n### By created_at and updated_at\nFind all escalations that follow specified date parameters for created_at and updated_at fields.\nPossible values are "gte" (greater than or equal to), "lte" (less than or equal to), and\n"date_range" (between two dates).\nFor example, to find all escalations updated after 2025-01-01:\n\n\t\tcurl --get \'https://api.incident.io/v2/escalations\' \\\n\t\t\t--data \'updated_at[gte]=2025-01-01\'\n\nTo find all escalations created between 2025-01-01 and 2025-01-31:\n\n\t\tcurl --get \'https://api.incident.io/v2/escalations\' \\\n            --data \'created_at[date_range]=2025-01-01~2025-01-31\'\n',
  inputSchema: {
    type: 'object',
    properties: {
      after: {
        type: 'string',
        description:
          "An escalation's ID. This endpoint will return a list of escalations after this ID in relation to the API response order.",
      },
      alert: {
        type: 'object',
        description:
          "Filter on the alert that created an escalation. Accepted operators are 'one_of' and 'not_in'.",
        additionalProperties: true,
      },
      created_at: {
        type: 'object',
        description:
          "Filter on the created_at timestamp of the escalation. Accepted operators are 'gte', 'lte' and 'date_range'.",
        additionalProperties: true,
      },
      escalation_path: {
        type: 'object',
        description:
          "Filter on the escalation path for which the escalation was triggered. Accepted operators are 'one_of' and 'not_in'.",
        additionalProperties: true,
      },
      page_size: {
        type: 'integer',
        description: 'Number of escalations to return per page',
      },
      status: {
        type: 'object',
        description: "Filter on the status of the escalation. Accepted operators are 'one_of' and 'not_in'.",
        additionalProperties: true,
      },
      updated_at: {
        type: 'object',
        description:
          "Filter on the updated_at timestamp of the escalation. Accepted operators are 'gte', 'lte' and 'date_range'.",
        additionalProperties: true,
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.escalations.list(body));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
