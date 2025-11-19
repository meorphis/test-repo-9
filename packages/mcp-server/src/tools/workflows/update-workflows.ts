// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'incident-io-2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import IncidentIo2 from 'incident-io-2';

export const metadata: Metadata = {
  resource: 'workflows',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/workflows/{id}',
  operationId: 'Workflows V2#UpdateWorkflow',
};

export const tool: Tool = {
  name: 'update_workflows',
  description: 'Updates a workflow',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the workflow to update',
      },
      condition_groups: {
        type: 'array',
        description: 'Conditions that apply to the workflow trigger',
        items: {
          $ref: '#/$defs/condition_group_payload',
        },
      },
      continue_on_step_error: {
        type: 'boolean',
        description: 'Whether to continue executing the workflow if a step fails',
      },
      expressions: {
        type: 'array',
        description: 'The expressions to use in the workflow',
        items: {
          $ref: '#/$defs/expression_payload',
        },
      },
      include_private_incidents: {
        type: 'boolean',
        description: 'Whether to include private incidents',
      },
      name: {
        type: 'string',
        description: 'Name provided by the user when creating the workflow',
      },
      once_for: {
        type: 'array',
        description: "This workflow will run 'once for' a list of references",
        items: {
          type: 'string',
        },
      },
      runs_on_incident_modes: {
        type: 'array',
        description:
          'Which incident modes should this workflow run on? By default, workflows only run on standard incidents, but can also be configured to run on test and retrospective incidents.',
        items: {
          type: 'string',
          enum: ['standard', 'test', 'retrospective'],
        },
      },
      runs_on_incidents: {
        type: 'string',
        description: 'Which incidents should the workflow be applied to?',
        enum: ['newly_created', 'newly_created_and_active'],
      },
      steps: {
        type: 'array',
        description: 'Steps that are executed as part of the workflow',
        items: {
          $ref: '#/$defs/step_config_payload',
        },
      },
      annotations: {
        type: 'object',
        description: 'Annotations that track metadata about this resource',
        additionalProperties: true,
      },
      delay: {
        $ref: '#/$defs/workflow_delay',
      },
      folder: {
        type: 'string',
        description: 'Folder to display the workflow in',
      },
      shortform: {
        type: 'string',
        description: 'The shortform used to trigger this workflow (only applicable for manual triggers)',
      },
      state: {
        type: 'string',
        description: 'What state this workflow is in',
        enum: ['active', 'disabled', 'draft', 'error'],
      },
    },
    required: [
      'id',
      'condition_groups',
      'continue_on_step_error',
      'expressions',
      'include_private_incidents',
      'name',
      'once_for',
      'runs_on_incident_modes',
      'runs_on_incidents',
      'steps',
    ],
    $defs: {
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
      step_config_payload: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Unique ID of this step in a workflow',
          },
          name: {
            type: 'string',
            description: 'Unique name of the step in the engine',
          },
          param_bindings: {
            type: 'array',
            description: 'List of parameter bindings',
            items: {
              $ref: '#/$defs/engine_param_binding_payload',
            },
          },
          for_each: {
            type: 'string',
            description: 'Reference to an expression that returns resources to run this step over',
          },
        },
        required: ['id', 'name', 'param_bindings'],
      },
      workflow_delay: {
        type: 'object',
        properties: {
          conditions_apply_over_delay: {
            type: 'boolean',
            description:
              'If this workflow is delayed, whether the conditions should be rechecked between trigger firing and execution',
          },
          for_seconds: {
            type: 'integer',
            description: 'Delay in seconds between trigger firing and running the workflow',
          },
        },
        required: ['conditions_apply_over_delay', 'for_seconds'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: IncidentIo2, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.workflows.update(id, body));
};

export default { metadata, tool, handler };
