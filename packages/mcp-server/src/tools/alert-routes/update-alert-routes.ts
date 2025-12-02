// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'alert_routes',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/alert_routes/{id}',
  operationId: 'Alert Routes V2#Update',
};

export const tool: Tool = {
  name: 'update_alert_routes',
  description: 'Update an existing alert route in your account.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier of the alert route',
      },
      alert_sources: {
        type: 'array',
        description: 'Which alert sources should this alert route match?',
        items: {
          $ref: '#/$defs/alert_source_payload',
        },
      },
      channel_config: {
        type: 'array',
        description: 'The channel configuration for this alert route',
        items: {
          $ref: '#/$defs/channel_config_payload',
        },
      },
      condition_groups: {
        type: 'array',
        description: 'What condition groups must be true for this alert route to fire?',
        items: {
          $ref: '#/$defs/condition_group_payload',
        },
      },
      enabled: {
        type: 'boolean',
        description: 'Whether this alert route is enabled or not',
      },
      escalation_config: {
        $ref: '#/$defs/escalation_config_payload',
      },
      expressions: {
        type: 'array',
        description: 'The expressions used in this template',
        items: {
          $ref: '#/$defs/expression_payload',
        },
      },
      incident_config: {
        $ref: '#/$defs/incident_config_payload',
      },
      incident_template: {
        $ref: '#/$defs/incident_template_payload',
      },
      is_private: {
        type: 'boolean',
        description:
          'Whether this alert route is private. Private alert routes will only create private incidents from alerts.',
      },
      name: {
        type: 'string',
        description: "The name of this alert route config, for the user's reference",
      },
      version: {
        type: 'integer',
        description: 'The version of this alert route config',
      },
      created_at: {
        type: 'string',
        description: 'The time of creation of this alert route',
        format: 'date-time',
      },
      updated_at: {
        type: 'string',
        description: 'The time of last update of this alert route',
        format: 'date-time',
      },
    },
    required: [
      'id',
      'alert_sources',
      'channel_config',
      'condition_groups',
      'enabled',
      'escalation_config',
      'expressions',
      'incident_config',
      'incident_template',
      'is_private',
      'name',
      'version',
    ],
    $defs: {
      alert_source_payload: {
        type: 'object',
        properties: {
          alert_source_id: {
            type: 'string',
            description: 'The alert source ID that will match for the route',
          },
          condition_groups: {
            type: 'array',
            description:
              'What conditions should alerts from this source meet to be included in this alert route?',
            items: {
              $ref: '#/$defs/condition_group_payload',
            },
          },
        },
        required: ['alert_source_id', 'condition_groups'],
      },
      condition_group_payload: {
        type: 'object',
        properties: {
          conditions: {
            type: 'array',
            description: 'All conditions in this list must be satisfied for the group to be satisfied',
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
        required: ['conditions'],
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
      channel_config_payload: {
        type: 'object',
        properties: {
          condition_groups: {
            type: 'array',
            description: 'The conditions that must be met for this channel config to be used',
            items: {
              $ref: '#/$defs/condition_group_payload',
            },
          },
          ms_teams_targets: {
            $ref: '#/$defs/channel_target_payload',
          },
          slack_targets: {
            $ref: '#/$defs/channel_target_payload',
          },
        },
        required: ['condition_groups'],
      },
      channel_target_payload: {
        type: 'object',
        properties: {
          binding: {
            $ref: '#/$defs/engine_param_binding_payload',
          },
          channel_visibility: {
            type: 'string',
            description: 'The visibility of the channel',
          },
        },
        required: ['binding', 'channel_visibility'],
      },
      escalation_config_payload: {
        type: 'object',
        properties: {
          auto_cancel_escalations: {
            type: 'boolean',
            description: 'Should we auto cancel escalations when all alerts are resolved?',
          },
          escalation_targets: {
            type: 'array',
            description: 'Targets for escalation',
            items: {
              type: 'object',
              properties: {
                escalation_paths: {
                  $ref: '#/$defs/engine_param_binding_payload',
                },
                users: {
                  $ref: '#/$defs/engine_param_binding_payload',
                },
              },
            },
          },
        },
        required: ['auto_cancel_escalations', 'escalation_targets'],
      },
      expression_payload: {
        type: 'object',
        properties: {
          label: {
            type: 'string',
            description: 'The human readable label of the expression',
          },
          operations: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                operation_type: {
                  type: 'string',
                  description: 'The type of the operation',
                  enum: [
                    'navigate',
                    'filter',
                    'concatenate',
                    'count',
                    'min',
                    'max',
                    'sum',
                    'random',
                    'first',
                    'parse',
                    'branches',
                  ],
                },
                branches: {
                  type: 'object',
                  properties: {
                    branches: {
                      type: 'array',
                      description: 'The branches to apply for this operation',
                      items: {
                        type: 'object',
                        properties: {
                          condition_groups: {
                            type: 'array',
                            description:
                              'When one of these condition groups are satisfied, this branch will be evaluated',
                            items: {
                              $ref: '#/$defs/condition_group_payload',
                            },
                          },
                          result: {
                            $ref: '#/$defs/engine_param_binding_payload',
                          },
                        },
                        required: ['condition_groups', 'result'],
                      },
                    },
                    returns: {
                      $ref: '#/$defs/returns_meta',
                    },
                  },
                  required: ['branches', 'returns'],
                },
                concatenate: {
                  type: 'object',
                  properties: {
                    reference: {
                      type: 'string',
                      description: 'The reference that you want to concatenate with',
                    },
                  },
                  required: ['reference'],
                },
                filter: {
                  type: 'object',
                  properties: {
                    condition_groups: {
                      type: 'array',
                      description:
                        'The condition groups to apply in this filter. Only one group needs to be satisfied for the filter to pass.',
                      items: {
                        $ref: '#/$defs/condition_group_payload',
                      },
                    },
                  },
                  required: ['condition_groups'],
                },
                navigate: {
                  type: 'object',
                  properties: {
                    reference: {
                      type: 'string',
                      description: 'The reference that you want to navigate to',
                    },
                  },
                  required: ['reference'],
                },
                parse: {
                  type: 'object',
                  properties: {
                    returns: {
                      $ref: '#/$defs/returns_meta',
                    },
                    source: {
                      type: 'string',
                      description: 'Source expression that is evaluated to a result',
                    },
                  },
                  required: ['returns', 'source'],
                },
              },
              required: ['operation_type'],
            },
          },
          reference: {
            type: 'string',
            description: 'A short ID that can be used to reference the expression',
          },
          root_reference: {
            type: 'string',
            description: 'The root reference for this expression (i.e. where the expression starts)',
          },
          else_branch: {
            type: 'object',
            properties: {
              result: {
                $ref: '#/$defs/engine_param_binding_payload',
              },
            },
            required: ['result'],
          },
        },
        required: ['label', 'operations', 'reference', 'root_reference'],
      },
      returns_meta: {
        type: 'object',
        properties: {
          array: {
            type: 'boolean',
            description: 'Whether the return value should be single or multi-value',
          },
          type: {
            type: 'string',
            description: 'Expected return type of this expression (what to try casting the result to)',
          },
        },
        required: ['array', 'type'],
      },
      incident_config_payload: {
        type: 'object',
        properties: {
          auto_decline_enabled: {
            type: 'boolean',
            description: 'Should triage incidents be declined when alerts are resolved?',
          },
          condition_groups: {
            type: 'array',
            description: 'What condition groups must be true for this alert route to create an incident?',
            items: {
              $ref: '#/$defs/condition_group_payload',
            },
          },
          defer_time_seconds: {
            type: 'integer',
            description: 'How long should the escalation defer time be?',
          },
          enabled: {
            type: 'boolean',
            description: 'Whether incident creation is enabled for this alert route',
          },
          grouping_keys: {
            type: 'array',
            description: 'Which attributes should this alert route use to group alerts?',
            items: {
              $ref: '#/$defs/grouping_key',
            },
          },
          grouping_window_seconds: {
            type: 'integer',
            description: 'How large should the grouping window be?',
          },
        },
        required: [
          'auto_decline_enabled',
          'condition_groups',
          'defer_time_seconds',
          'enabled',
          'grouping_keys',
          'grouping_window_seconds',
        ],
      },
      grouping_key: {
        type: 'object',
        properties: {
          reference: {
            type: 'string',
            description: 'A reference to a property of the alert to group on',
          },
        },
        required: ['reference'],
      },
      incident_template_payload: {
        type: 'object',
        properties: {
          name: {
            $ref: '#/$defs/auto_generated_template_binding_payload',
          },
          custom_fields: {
            type: 'array',
            description: 'Custom fields configuration',
            items: {
              type: 'object',
              properties: {
                binding: {
                  $ref: '#/$defs/engine_param_binding_payload',
                },
                custom_field_id: {
                  type: 'string',
                  description: 'ID of the custom field',
                },
                merge_strategy: {
                  type: 'string',
                  description: 'The strategy to use when multiple alerts match this route',
                  enum: ['first-wins', 'last-wins', 'append'],
                },
              },
              required: ['binding', 'custom_field_id', 'merge_strategy'],
            },
          },
          incident_mode: {
            $ref: '#/$defs/template_binding_payload',
          },
          incident_type: {
            $ref: '#/$defs/template_binding_payload',
          },
          severity: {
            type: 'object',
            properties: {
              merge_strategy: {
                type: 'string',
                description:
                  'Strategy for merging severity when multiple alerts create/update the same incident',
                enum: ['first-wins', 'max'],
              },
              binding: {
                $ref: '#/$defs/engine_param_binding_payload',
              },
            },
            required: ['merge_strategy'],
          },
          start_in_triage: {
            $ref: '#/$defs/template_binding_payload',
          },
          summary: {
            $ref: '#/$defs/auto_generated_template_binding_payload',
          },
          workspace: {
            $ref: '#/$defs/template_binding_payload',
          },
        },
        required: ['name'],
      },
      auto_generated_template_binding_payload: {
        type: 'object',
        properties: {
          autogenerated: {
            type: 'boolean',
            description: 'Whether this attribute is autogenerated using AI or not',
          },
          binding: {
            $ref: '#/$defs/engine_param_binding_payload',
          },
        },
      },
      template_binding_payload: {
        type: 'object',
        properties: {
          binding: {
            $ref: '#/$defs/engine_param_binding_payload',
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.alertRoutes.update(id, body));
  } catch (error) {
    if (error instanceof IncidentIo2.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
