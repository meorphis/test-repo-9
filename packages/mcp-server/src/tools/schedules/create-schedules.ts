// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'schedules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/schedules',
  operationId: 'Schedules V2#Create',
};

export const tool: Tool = {
  name: 'create_schedules',
  description: 'Create a new schedule.',
  inputSchema: {
    type: 'object',
    properties: {
      schedule: {
        type: 'object',
        properties: {
          annotations: {
            type: 'object',
            description: 'Annotations that can track metadata about the schedule',
            additionalProperties: true,
          },
          config: {
            type: 'object',
            properties: {
              rotations: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'Name of the rotation',
                    },
                    id: {
                      type: 'string',
                      description: 'Unique identifier of the rotation',
                    },
                    effective_from: {
                      type: 'string',
                      format: 'date-time',
                    },
                    handover_start_at: {
                      type: 'string',
                      format: 'date-time',
                    },
                    handovers: {
                      type: 'array',
                      items: {
                        $ref: '#/$defs/schedule_rotation_handover',
                      },
                    },
                    layers: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          name: {
                            type: 'string',
                            description: 'Name of the layer',
                          },
                          id: {
                            type: 'string',
                            description: 'Unique identifier of the layer',
                          },
                        },
                        required: ['name'],
                      },
                    },
                    scheduling_mode: {
                      type: 'string',
                      description:
                        "Scheduling algorithm to use for this rotation. 'fair' balances workload by considering handover duration, while 'sequential' uses simple round-robin rotation through users. Only applies when you have asymmetric handovers (e.g., 2 days then 5 days).",
                      enum: ['fair', 'sequential'],
                    },
                    users: {
                      type: 'array',
                      items: {
                        $ref: '#/$defs/user_reference_payload_v2',
                      },
                    },
                    working_interval: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          end_time: {
                            type: 'string',
                            description: 'End time of the interval, in 24hr format',
                          },
                          start_time: {
                            type: 'string',
                            description: 'Start time of the interval, in 24hr format',
                          },
                          weekday: {
                            type: 'string',
                            description: 'Weekdays for use with a schedule',
                            enum: [
                              'monday',
                              'tuesday',
                              'wednesday',
                              'thursday',
                              'friday',
                              'saturday',
                              'sunday',
                            ],
                          },
                        },
                        required: ['end_time', 'start_time', 'weekday'],
                      },
                    },
                  },
                  required: ['name'],
                },
              },
            },
          },
          holidays_public_config: {
            $ref: '#/$defs/schedule_holidays_public_config_payload',
          },
          name: {
            type: 'string',
            description: 'Name of the schedule',
          },
          team_ids: {
            type: 'array',
            description: 'IDs of teams that own this schedule',
            items: {
              type: 'string',
            },
          },
          timezone: {
            type: 'string',
            description: 'Timezone of the schedule',
          },
        },
      },
    },
    required: ['schedule'],
    $defs: {
      schedule_rotation_handover: {
        type: 'object',
        properties: {
          interval: {
            type: 'integer',
          },
          interval_type: {
            type: 'string',
            description: 'How often a handover occurs',
            enum: ['hourly', 'daily', 'weekly'],
          },
        },
      },
      user_reference_payload_v2: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The incident.io ID of a user',
          },
          email: {
            type: 'string',
            description: "The user's email address, matching the email on their Slack account",
          },
          slack_user_id: {
            type: 'string',
            description: "The ID of the user's Slack account.",
          },
        },
      },
      schedule_holidays_public_config_payload: {
        type: 'object',
        properties: {
          country_codes: {
            type: 'array',
            description:
              'ISO 3166-1 alpha-2 country codes for the countries that this schedule is configured to view holidays for',
            items: {
              type: 'string',
            },
          },
        },
        required: ['country_codes'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.schedules.create(body));
};

export default { metadata, tool, handler };
