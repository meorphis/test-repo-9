// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'escalation_paths',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/escalation_paths',
  operationId: 'Escalations V2#CreatePath',
};

export const tool: Tool = {
  name: 'create_escalation_paths',
  description:
    'Create an escalation path.\n\nAn escalation path is a series of steps that describe how a page should be escalated,\nrepresented as graph, supporting conditional branches based on alert priority and working\nintervals.\n\nWe recommend you create escalation paths in the incident.io dashboard where our path\nbuilder makes it easy to use conditions and visualise the path.\n',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: "The name of this escalation path, for the user's reference.",
      },
      path: {
        type: 'array',
        description: 'The nodes that form the levels and branches of this escalation path.',
        items: {
          $ref: '#/$defs/escalation_path_node_payload',
        },
      },
      team_ids: {
        type: 'array',
        description:
          'IDs of the teams that own this escalation path. This will automatically sync escalation paths with the right teams in Catalog. If you have an escalation paths attribute on your Teams, this attribute is required.',
        items: {
          type: 'string',
        },
      },
      working_hours: {
        type: 'array',
        description: 'The working hours for this escalation path.',
        items: {
          $ref: '#/$defs/weekday_interval_config',
        },
      },
    },
    required: ['name', 'path'],
    $defs: {
      escalation_path_node_payload: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description:
              "An ID for this node, unique within the escalation path.\n\nThis allows you to reference the node in other nodes, such as when configuring a 'repeat' node.",
          },
          type: {
            type: 'string',
            description:
              'The type of this node. Available types are:\n* level: A set of targets (users or schedules) that should be paged, either all at once, or with a round-robin configuration.\n* notify_channel: Send the escalation to a Slack channel, where it can be acked by anyone in the channel.\n* if_else: Branch the escalation based on a set of conditions.\n* repeat: Go back to a previous node and repeat the logic from there.',
            enum: ['if_else', 'repeat', 'level', 'notify_channel'],
          },
          if_else: {
            $ref: '#/$defs/escalation_path_node_if_else_payload',
          },
          level: {
            type: 'object',
            properties: {
              targets: {
                type: 'array',
                description: 'The targets (users or schedules) for this level',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'Uniquely identifies an entity of this type',
                    },
                    type: {
                      type: 'string',
                      description:
                        'Controls what type of entity this target identifies, such as EscalationPolicy or User',
                      enum: ['schedule', 'user', 'slack_channel', 'msteams_channel'],
                    },
                    urgency: {
                      type: 'string',
                      description: 'The urgency of this escalation path target',
                      enum: ['high', 'low'],
                    },
                    schedule_mode: {
                      type: 'string',
                      description:
                        'Only set for schedule targets, and either currently_on_call, all_users or all_users_for_rota and specifies which users to fetch from the schedule',
                      enum: ['currently_on_call', 'all_users_for_rota', 'all_users', ''],
                    },
                  },
                  required: ['id', 'type', 'urgency'],
                },
              },
              ack_mode: {
                type: 'string',
                description:
                  "Controls the behaviour of acknowledgements for this level, with 'first' cancelling all other escalations on the same level when someone acks",
                enum: ['all', 'first'],
              },
              round_robin_config: {
                type: 'object',
                properties: {
                  enabled: {
                    type: 'boolean',
                    description: 'Whether round robin is enabled for this level',
                  },
                  rotate_after_seconds: {
                    type: 'integer',
                    description:
                      'How long should we wait before rotating to the next target in a round robin, if not set will stick with a single target per level.',
                  },
                },
                required: ['enabled'],
              },
              time_to_ack_interval_condition: {
                type: 'string',
                description:
                  'If the time to ack is relative to a time window, this defines whether we move when the window is active or inactive',
                enum: ['active', 'inactive'],
              },
              time_to_ack_seconds: {
                type: 'integer',
                description:
                  'How long should we wait for this level to acknowledge before proceeding to the next node in the path?',
              },
              time_to_ack_weekday_interval_config_id: {
                type: 'string',
                description:
                  'If the time to ack is relative to a time window, this identifies which window it is relative to',
              },
            },
            required: ['targets'],
          },
          notify_channel: {
            type: 'object',
            properties: {
              targets: {
                type: 'array',
                description: 'The targets (Slack channels) for this level',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      description: 'Uniquely identifies an entity of this type',
                    },
                    type: {
                      type: 'string',
                      description:
                        'Controls what type of entity this target identifies, such as EscalationPolicy or User',
                      enum: ['schedule', 'user', 'slack_channel', 'msteams_channel'],
                    },
                    urgency: {
                      type: 'string',
                      description: 'The urgency of this escalation path target',
                      enum: ['high', 'low'],
                    },
                    schedule_mode: {
                      type: 'string',
                      description:
                        'Only set for schedule targets, and either currently_on_call, all_users or all_users_for_rota and specifies which users to fetch from the schedule',
                      enum: ['currently_on_call', 'all_users_for_rota', 'all_users', ''],
                    },
                  },
                  required: ['id', 'type', 'urgency'],
                },
              },
              time_to_ack_interval_condition: {
                type: 'string',
                description:
                  'If the time to ack is relative to a time window, this defines whether we move when the window is active or inactive',
                enum: ['active', 'inactive'],
              },
              time_to_ack_seconds: {
                type: 'integer',
                description:
                  'How long should we wait for this level to acknowledge before moving on to the next node in the path?',
              },
              time_to_ack_weekday_interval_config_id: {
                type: 'string',
                description:
                  'If the time to ack is relative to a time window, this identifies which window it is relative to',
              },
            },
            required: ['targets'],
          },
          repeat: {
            type: 'object',
            properties: {
              repeat_times: {
                type: 'integer',
                description: 'How many times to repeat these nodes',
              },
              to_node: {
                type: 'string',
                description: 'Which node ID we begin repeating from.',
              },
            },
            required: ['repeat_times', 'to_node'],
          },
        },
        required: ['id', 'type'],
      },
      escalation_path_node_if_else_payload: {
        type: 'object',
        properties: {
          else_path: {
            type: 'array',
            description: 'The nodes that form the levels if our condition is not met',
            items: {
              $ref: '#/$defs/escalation_path_node_payload',
            },
          },
          then_path: {
            type: 'array',
            description: 'The nodes that form the levels if our condition is met',
            items: {
              $ref: '#/$defs/escalation_path_node_payload',
            },
          },
          conditions: {
            type: 'array',
            description: 'The condition that defines which branch to take',
            items: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  description: 'The name of the operation on the subject',
                },
                param_bindings: {
                  type: 'array',
                  description: 'List of parameter bindings',
                  items: {
                    $ref: '#/$defs/engine_param_binding_payload',
                  },
                },
                subject: {
                  type: 'string',
                  description: 'The reference of the subject in the trigger scope',
                },
              },
              required: ['operation', 'param_bindings', 'subject'],
            },
          },
        },
        required: ['else_path', 'then_path'],
      },
      engine_param_binding_payload: {
        type: 'object',
        properties: {
          array_value: {
            type: 'array',
            description: 'If set, this is the array value of the step parameter',
            items: {
              $ref: '#/$defs/param_binding_value_payload',
            },
          },
          value: {
            $ref: '#/$defs/param_binding_value_payload',
          },
        },
      },
      param_binding_value_payload: {
        type: 'object',
        properties: {
          literal: {
            type: 'string',
            description: 'If set, this is the literal value of the step parameter',
          },
          reference: {
            type: 'string',
            description:
              'If set, this is the reference into the trigger scope that is the value of this parameter',
          },
        },
      },
      weekday_interval_config: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The unique identifier for this set of working intervals',
          },
          name: {
            type: 'string',
            description: 'A human readable label for this set of working intervals',
          },
          timezone: {
            type: 'string',
            description: 'How to interpret all the intervals',
          },
          weekday_intervals: {
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
                  description: 'Weekdays for use within a schedule or escalation path',
                  enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
                },
              },
              required: ['end_time', 'start_time', 'weekday'],
            },
          },
        },
        required: ['id', 'name', 'timezone', 'weekday_intervals'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.escalationPaths.create(body));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
