// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'alert_sources',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/alert_sources/{id}',
  operationId: 'Alert Sources V2#Update',
};

export const tool: Tool = {
  name: 'update_alert_sources',
  description: 'Update an existing alert source in your account.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of this alert source',
      },
      name: {
        type: 'string',
        description: 'Unique name of the alert source',
      },
      template: {
        $ref: '#/$defs/template_payload',
      },
      http_custom_options: {
        $ref: '#/$defs/http_custom_options',
      },
      jira_options: {
        $ref: '#/$defs/jira_options',
      },
    },
    required: ['id', 'name', 'template'],
    $defs: {
      template_payload: {
        type: 'object',
        properties: {
          attributes: {
            type: 'array',
            description:
              'Attributes to set on alerts coming from this source, with a binding describing how to set them.',
            items: {
              type: 'object',
              properties: {
                alert_attribute_id: {
                  type: 'string',
                  description: 'ID of the alert attribute to set with this binding',
                },
                binding: {
                  $ref: '#/$defs/engine_param_binding_payload',
                },
              },
              required: ['alert_attribute_id', 'binding'],
            },
          },
          description: {
            $ref: '#/$defs/param_binding_value_payload',
          },
          expressions: {
            type: 'array',
            description: 'Expressions available for use in bindings within this template',
            items: {
              $ref: '#/$defs/expression_payload',
            },
          },
          title: {
            $ref: '#/$defs/param_binding_value_payload',
          },
        },
        required: ['attributes', 'description', 'expressions', 'title'],
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
      http_custom_options: {
        type: 'object',
        properties: {
          deduplication_key_path: {
            type: 'string',
            description: 'JSON path to extract the deduplication key from the payload',
          },
          transform_expression: {
            type: 'string',
            description: 'JavaScript expression that returns an object with all alert fields',
          },
        },
        required: ['deduplication_key_path', 'transform_expression'],
      },
      jira_options: {
        type: 'object',
        properties: {
          project_ids: {
            type: 'array',
            description:
              "Which projects in Jira should this alert source watch for new issues? IDs can either be IDs of the projects in Jira, or ID of catalog entries in the 'Jira Project' catalog type.",
            items: {
              type: 'string',
            },
          },
        },
        required: ['project_ids'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.alertSources.update(id, body));
};

export default { metadata, tool, handler };
