// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as WorkflowsAPI from './workflows';
import * as AlertRoutesAPI from './alert-routes';
import * as AlertSourcesAPI from './alert-sources';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Workflows extends APIResource {
  /**
   * Create a new workflow
   *
   * @example
   * ```ts
   * const workflow = await client.workflows.create({
   *   condition_groups: [
   *     {
   *       conditions: [
   *         { ... },
   *       ],
   *     },
   *   ],
   *   continue_on_step_error: true,
   *   expressions: [
   *     {
   *       else_branch: { ... },
   *       label: 'Team Slack channel',
   *       operations: [
   *         { ... },
   *       ],
   *       reference: 'abc123',
   *       root_reference: 'incident.status',
   *     },
   *   ],
   *   include_private_incidents: true,
   *   name: 'My little workflow',
   *   once_for: ['incident.url'],
   *   runs_on_incident_modes: ['standard', 'test', 'retrospective'],
   *   runs_on_incidents: 'newly_created',
   *   steps: [
   *     {
   *       for_each: 'abc123',
   *       id: 'abc123',
   *       name: 'pagerduty.escalate',
   *       param_bindings: [
   *         { ... },
   *       ],
   *     },
   *   ],
   *   trigger: 'incident.updated',
   *   annotations: { 'incident.io/terraform/version': '3.0.0' },
   *   delay: { conditions_apply_over_delay: false, for_seconds: 60 },
   *   folder: 'My folder 01',
   *   shortform: 'page-the-ceo',
   *   state: 'active',
   * });
   * ```
   */
  create(body: WorkflowCreateParams, options?: RequestOptions): APIPromise<WorkflowCreateResponse> {
    return this._client.post('/v2/workflows', { body, ...options });
  }

  /**
   * Show a workflow by ID
   *
   * @example
   * ```ts
   * const workflow = await client.workflows.retrieve(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: WorkflowRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkflowRetrieveResponse> {
    return this._client.get(path`/v2/workflows/${id}`, { query, ...options });
  }

  /**
   * Updates a workflow
   *
   * @example
   * ```ts
   * const workflow = await client.workflows.update('01FCNDV6P870EA6S7TK1DSYDG0', {
   *   condition_groups: [
   *     {
   *       conditions: [
   *         { ... },
   *       ],
   *     },
   *   ],
   *   continue_on_step_error: true,
   *   expressions: [
   *     {
   *       else_branch: { ... },
   *       label: 'Team Slack channel',
   *       operations: [
   *         { ... },
   *       ],
   *       reference: 'abc123',
   *       root_reference: 'incident.status',
   *     },
   *   ],
   *   include_private_incidents: true,
   *   name: 'My little workflow',
   *   once_for: ['incident.url'],
   *   runs_on_incident_modes: ['standard', 'test', 'retrospective'],
   *   runs_on_incidents: 'newly_created',
   *   steps: [
   *     {
   *       for_each: 'abc123',
   *       id: 'abc123',
   *       name: 'pagerduty.escalate',
   *       param_bindings: [
   *         { ... },
   *       ],
   *     },
   *   ],
   *   annotations: { 'incident.io/terraform/version': '3.0.0' },
   *   delay: { conditions_apply_over_delay: false, for_seconds: 60 },
   *   folder: 'My folder 01',
   *   shortform: 'page-the-ceo',
   *   state: 'active',
   * });
   * ```
   */
  update(
    id: string,
    body: WorkflowUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowUpdateResponse> {
    return this._client.put(path`/v2/workflows/${id}`, { body, ...options });
  }

  /**
   * List all workflows
   *
   * @example
   * ```ts
   * const workflows = await client.workflows.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WorkflowListResponse> {
    return this._client.get('/v2/workflows', options);
  }

  /**
   * Archives a workflow
   *
   * @example
   * ```ts
   * await client.workflows.destroy(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  destroy(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/workflows/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EngineParamBinding {
  /**
   * If array_value is set, this helps render the values
   */
  array_value?: Array<AlertSourcesAPI.ParamBindingValue>;

  value?: AlertSourcesAPI.ParamBindingValue;
}

export interface EngineParamBindingPayload {
  /**
   * If set, this is the array value of the step parameter
   */
  array_value?: Array<AlertSourcesAPI.ParamBindingValuePayload>;

  value?: AlertSourcesAPI.ParamBindingValuePayload;
}

export interface EngineReference {
  /**
   * If true, the reference can refer to 0 to many items
   */
  array: boolean;

  /**
   * Unique identifier of field will set
   */
  key: string;

  /**
   * Human readable label for the field (with context)
   */
  label: string;

  /**
   * The type of this resource in the engine
   */
  type: string;
}

export interface ManagementMeta {
  /**
   * Annotations that track metadata about this resource
   */
  annotations: { [key: string]: string };

  /**
   * How is this resource managed
   */
  managed_by: 'dashboard' | 'terraform' | 'external';

  /**
   * The url of the external repository where this resource is managed (if there is
   * one)
   */
  source_url?: string;
}

export interface StepConfigPayload {
  /**
   * Unique ID of this step in a workflow
   */
  id: string;

  /**
   * Unique name of the step in the engine
   */
  name: string;

  /**
   * List of parameter bindings
   */
  param_bindings: Array<EngineParamBindingPayload>;

  /**
   * Reference to an expression that returns resources to run this step over
   */
  for_each?: string;
}

export interface TriggerSlim {
  /**
   * Human readable identifier for this trigger
   */
  label: string;

  /**
   * Unique name of the trigger
   */
  name: string;
}

export interface Workflow {
  /**
   * Unique identifier for the workflow
   */
  id: string;

  /**
   * Conditions that apply to the workflow trigger
   */
  condition_groups: Array<AlertRoutesAPI.ConditionGroup>;

  /**
   * Whether to continue executing the workflow if a step fails
   */
  continue_on_step_error: boolean;

  /**
   * Expressions that make variables available in the scope
   */
  expressions: Array<AlertRoutesAPI.Expression>;

  /**
   * Whether to include private incidents
   */
  include_private_incidents: boolean;

  /**
   * Name provided by the user when creating the workflow
   */
  name: string;

  /**
   * This workflow will run 'once for' a list of references
   */
  once_for: Array<EngineReference>;

  /**
   * Which incident modes should this workflow run on? By default, workflows only run
   * on standard incidents, but can also be configured to run on test and
   * retrospective incidents.
   */
  runs_on_incident_modes: Array<'standard' | 'test' | 'retrospective'>;

  /**
   * Which incidents should the workflow be applied to?
   */
  runs_on_incidents: 'newly_created' | 'newly_created_and_active';

  /**
   * What state this workflow is in
   */
  state: 'active' | 'disabled' | 'draft' | 'error';

  /**
   * Steps that are executed as part of the workflow
   */
  steps: Array<Workflow.Step>;

  trigger: TriggerSlim;

  /**
   * Revision of the workflow, uniquely identifying it's version
   */
  version: number;

  delay?: WorkflowDelay;

  /**
   * Folder to display the workflow in
   */
  folder?: string;

  /**
   * The time from which this workflow will run on incidents
   */
  runs_from?: string;

  /**
   * The shortform used to trigger this workflow (only applicable for manual
   * triggers)
   */
  shortform?: string;
}

export namespace Workflow {
  export interface Step {
    /**
     * Unique ID of this step in a workflow
     */
    id: string;

    /**
     * Human readable identifier for this step
     */
    label: string;

    /**
     * Unique name of the step in the engine
     */
    name: string;

    /**
     * Bindings for the step parameters
     */
    param_bindings: Array<WorkflowsAPI.EngineParamBinding>;

    /**
     * Reference to an expression that returns resources to run this step over
     */
    for_each?: string;
  }
}

export interface WorkflowDelay {
  /**
   * If this workflow is delayed, whether the conditions should be rechecked between
   * trigger firing and execution
   */
  conditions_apply_over_delay: boolean;

  /**
   * Delay in seconds between trigger firing and running the workflow
   */
  for_seconds: number;
}

export interface WorkflowCreateResponse {
  management_meta: ManagementMeta;

  workflow: Workflow;
}

export interface WorkflowRetrieveResponse {
  management_meta: ManagementMeta;

  workflow: Workflow;
}

export interface WorkflowUpdateResponse {
  management_meta: ManagementMeta;

  workflow: Workflow;
}

export interface WorkflowListResponse {
  workflows: Array<WorkflowListResponse.Workflow>;
}

export namespace WorkflowListResponse {
  export interface Workflow {
    /**
     * Unique identifier for the workflow
     */
    id: string;

    /**
     * Conditions that apply to the workflow trigger
     */
    condition_groups: Array<AlertRoutesAPI.ConditionGroup>;

    /**
     * Whether to continue executing the workflow if a step fails
     */
    continue_on_step_error: boolean;

    /**
     * Expressions that make variables available in the scope
     */
    expressions: Array<AlertRoutesAPI.Expression>;

    /**
     * Whether to include private incidents
     */
    include_private_incidents: boolean;

    /**
     * Name provided by the user when creating the workflow
     */
    name: string;

    /**
     * This workflow will run 'once for' a list of references
     */
    once_for: Array<WorkflowsAPI.EngineReference>;

    /**
     * Which incident modes should this workflow run on? By default, workflows only run
     * on standard incidents, but can also be configured to run on test and
     * retrospective incidents.
     */
    runs_on_incident_modes: Array<'standard' | 'test' | 'retrospective'>;

    /**
     * Which incidents should the workflow be applied to?
     */
    runs_on_incidents: 'newly_created' | 'newly_created_and_active';

    /**
     * What state this workflow is in
     */
    state: 'active' | 'disabled' | 'draft' | 'error';

    /**
     * Steps that are executed as part of the workflow
     */
    steps: Array<Workflow.Step>;

    trigger: WorkflowsAPI.TriggerSlim;

    /**
     * Revision of the workflow, uniquely identifying it's version
     */
    version: number;

    delay?: WorkflowsAPI.WorkflowDelay;

    /**
     * Folder to display the workflow in
     */
    folder?: string;

    /**
     * The time from which this workflow will run on incidents
     */
    runs_from?: string;

    /**
     * The shortform used to trigger this workflow (only applicable for manual
     * triggers)
     */
    shortform?: string;
  }

  export namespace Workflow {
    export interface Step {
      /**
       * Human readable identifier for this step
       */
      label: string;

      /**
       * Unique name of the step in the engine
       */
      name: string;
    }
  }
}

export interface WorkflowCreateParams {
  /**
   * Conditions that apply to the workflow trigger
   */
  condition_groups: Array<AlertRoutesAPI.ConditionGroupPayload>;

  /**
   * Whether to continue executing the workflow if a step fails
   */
  continue_on_step_error: boolean;

  /**
   * The expressions to use in the workflow
   */
  expressions: Array<AlertRoutesAPI.ExpressionPayload>;

  /**
   * Whether to include private incidents
   */
  include_private_incidents: boolean;

  /**
   * Name provided by the user when creating the workflow
   */
  name: string;

  /**
   * This workflow will run 'once for' a list of references
   */
  once_for: Array<string>;

  /**
   * Which incident modes should this workflow run on? By default, workflows only run
   * on standard incidents, but can also be configured to run on test and
   * retrospective incidents.
   */
  runs_on_incident_modes: Array<'standard' | 'test' | 'retrospective'>;

  /**
   * Which incidents should the workflow be applied to?
   */
  runs_on_incidents: 'newly_created' | 'newly_created_and_active';

  /**
   * Steps that are executed as part of the workflow
   */
  steps: Array<StepConfigPayload>;

  /**
   * Trigger to set on the workflow
   */
  trigger: string;

  /**
   * Annotations that track metadata about this resource
   */
  annotations?: { [key: string]: string };

  delay?: WorkflowDelay;

  /**
   * Folder to display the workflow in
   */
  folder?: string;

  /**
   * The shortform used to trigger this workflow (only applicable for manual
   * triggers)
   */
  shortform?: string;

  /**
   * What state this workflow is in
   */
  state?: 'active' | 'disabled' | 'draft' | 'error';
}

export interface WorkflowRetrieveParams {
  /**
   * Skips workflow step upgrades, when the parameters for an existing workflow step
   * change
   */
  skip_step_upgrades?: boolean;
}

export interface WorkflowUpdateParams {
  /**
   * Conditions that apply to the workflow trigger
   */
  condition_groups: Array<AlertRoutesAPI.ConditionGroupPayload>;

  /**
   * Whether to continue executing the workflow if a step fails
   */
  continue_on_step_error: boolean;

  /**
   * The expressions to use in the workflow
   */
  expressions: Array<AlertRoutesAPI.ExpressionPayload>;

  /**
   * Whether to include private incidents
   */
  include_private_incidents: boolean;

  /**
   * Name provided by the user when creating the workflow
   */
  name: string;

  /**
   * This workflow will run 'once for' a list of references
   */
  once_for: Array<string>;

  /**
   * Which incident modes should this workflow run on? By default, workflows only run
   * on standard incidents, but can also be configured to run on test and
   * retrospective incidents.
   */
  runs_on_incident_modes: Array<'standard' | 'test' | 'retrospective'>;

  /**
   * Which incidents should the workflow be applied to?
   */
  runs_on_incidents: 'newly_created' | 'newly_created_and_active';

  /**
   * Steps that are executed as part of the workflow
   */
  steps: Array<StepConfigPayload>;

  /**
   * Annotations that track metadata about this resource
   */
  annotations?: { [key: string]: string };

  delay?: WorkflowDelay;

  /**
   * Folder to display the workflow in
   */
  folder?: string;

  /**
   * The shortform used to trigger this workflow (only applicable for manual
   * triggers)
   */
  shortform?: string;

  /**
   * What state this workflow is in
   */
  state?: 'active' | 'disabled' | 'draft' | 'error';
}

export declare namespace Workflows {
  export {
    type EngineParamBinding as EngineParamBinding,
    type EngineParamBindingPayload as EngineParamBindingPayload,
    type EngineReference as EngineReference,
    type ManagementMeta as ManagementMeta,
    type StepConfigPayload as StepConfigPayload,
    type TriggerSlim as TriggerSlim,
    type Workflow as Workflow,
    type WorkflowDelay as WorkflowDelay,
    type WorkflowCreateResponse as WorkflowCreateResponse,
    type WorkflowRetrieveResponse as WorkflowRetrieveResponse,
    type WorkflowUpdateResponse as WorkflowUpdateResponse,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowCreateParams as WorkflowCreateParams,
    type WorkflowRetrieveParams as WorkflowRetrieveParams,
    type WorkflowUpdateParams as WorkflowUpdateParams,
  };
}
