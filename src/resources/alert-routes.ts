// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AlertRoutesAPI from './alert-routes';
import * as WorkflowsAPI from './workflows';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Configure your alert routes in incident.io.
 *
 * Alert routes define how alerts from different sources are processed, grouped, and routed to the right teams and people.
 */
export class AlertRoutes extends APIResource {
  /**
   * Create a new alert route in your account.
   *
   * @example
   * ```ts
   * const alertRoute = await client.alertRoutes.create({
   *   alert_sources: [
   *     {
   *       alert_source_id: '01FCNDV6P870EA6S7TK1DSYDG0',
   *       condition_groups: [
   *         { ... },
   *       ],
   *     },
   *   ],
   *   channel_config: [
   *     {
   *       condition_groups: [
   *         { ... },
   *       ],
   *       ms_teams_targets: { ... },
   *       slack_targets: { ... },
   *     },
   *   ],
   *   condition_groups: [
   *     {
   *       conditions: [
   *         { ... },
   *       ],
   *     },
   *   ],
   *   enabled: false,
   *   escalation_config: {
   *     auto_cancel_escalations: false,
   *     escalation_targets: [
   *       { ... },
   *     ],
   *   },
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
   *   incident_config: {
   *     auto_decline_enabled: false,
   *     condition_groups: [
   *       { ... },
   *     ],
   *     defer_time_seconds: 1,
   *     enabled: false,
   *     grouping_keys: [
   *       { ... },
   *     ],
   *     grouping_window_seconds: 1,
   *   },
   *   incident_template: {
   *     custom_fields: [
   *       { ... },
   *     ],
   *     incident_mode: { ... },
   *     incident_type: { ... },
   *     name: { ... },
   *     severity: { ... },
   *     start_in_triage: { ... },
   *     summary: { ... },
   *     workspace: { ... },
   *   },
   *   is_private: false,
   *   name: 'Production incidents',
   *   version: 1,
   *   created_at: '2021-08-17T13:28:57.801578Z',
   *   updated_at: '2021-08-17T13:28:57.801578Z',
   * });
   * ```
   */
  create(body: AlertRouteCreateParams, options?: RequestOptions): APIPromise<AlertRouteCreateResponse> {
    return this._client.post('/v2/alert_routes', { body, ...options });
  }

  /**
   * Load details about a specific alert route in your account.
   *
   * @example
   * ```ts
   * const alertRoute = await client.alertRoutes.retrieve(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AlertRouteRetrieveResponse> {
    return this._client.get(path`/v2/alert_routes/${id}`, options);
  }

  /**
   * Update an existing alert route in your account.
   *
   * @example
   * ```ts
   * const alertRoute = await client.alertRoutes.update('01FCNDV6P870EA6S7TK1DSYDG0', {
   *   alert_sources: [
   *     {
   *       alert_source_id: '01FCNDV6P870EA6S7TK1DSYDG0',
   *       condition_groups: [
   *         { ... },
   *       ],
   *     },
   *   ],
   *   channel_config: [
   *     {
   *       condition_groups: [
   *         { ... },
   *       ],
   *       ms_teams_targets: { ... },
   *       slack_targets: { ... },
   *     },
   *   ],
   *   condition_groups: [
   *     {
   *       conditions: [
   *         { ... },
   *       ],
   *     },
   *   ],
   *   enabled: false,
   *   escalation_config: {
   *     auto_cancel_escalations: false,
   *     escalation_targets: [
   *       { ... },
   *     ],
   *   },
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
   *   incident_config: {
   *     auto_decline_enabled: false,
   *     condition_groups: [
   *       { ... },
   *     ],
   *     defer_time_seconds: 1,
   *     enabled: false,
   *     grouping_keys: [
   *       { ... },
   *     ],
   *     grouping_window_seconds: 1,
   *   },
   *   incident_template: {
   *     custom_fields: [
   *       { ... },
   *     ],
   *     incident_mode: { ... },
   *     incident_type: { ... },
   *     name: { ... },
   *     severity: { ... },
   *     start_in_triage: { ... },
   *     summary: { ... },
   *     workspace: { ... },
   *   },
   *   is_private: false,
   *   name: 'Production incidents',
   *   version: 1,
   *   created_at: '2021-08-17T13:28:57.801578Z',
   *   updated_at: '2021-08-17T13:28:57.801578Z',
   * });
   * ```
   */
  update(
    id: string,
    body: AlertRouteUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AlertRouteUpdateResponse> {
    return this._client.put(path`/v2/alert_routes/${id}`, { body, ...options });
  }

  /**
   * List all alert routes in your account.
   *
   * @example
   * ```ts
   * const alertRoutes = await client.alertRoutes.list({
   *   page_size: 25,
   * });
   * ```
   */
  list(query: AlertRouteListParams, options?: RequestOptions): APIPromise<AlertRouteListResponse> {
    return this._client.get('/v2/alert_routes', { query, ...options });
  }

  /**
   * Delete an existing alert route in your account.
   *
   * @example
   * ```ts
   * await client.alertRoutes.delete(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/alert_routes/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AlertRoute {
  /**
   * Unique identifier for this alert route config
   */
  id: string;

  /**
   * Which alert sources should this alert route match?
   */
  alert_sources: Array<AlertRoute.AlertSource>;

  /**
   * The channel configuration for this alert route
   */
  channel_config: Array<AlertRoute.ChannelConfig>;

  /**
   * What condition groups must be true for this alert route to fire?
   */
  condition_groups: Array<ConditionGroup>;

  /**
   * Whether this alert route is enabled or not
   */
  enabled: boolean;

  escalation_config: AlertRoute.EscalationConfig;

  /**
   * The expressions used in this template
   */
  expressions: Array<Expression>;

  incident_config: AlertRoute.IncidentConfig;

  incident_template: AlertRoute.IncidentTemplate;

  /**
   * Whether this alert route is private. Private alert routes will only create
   * private incidents from alerts.
   */
  is_private: boolean;

  /**
   * The name of this alert route config, for the user's reference
   */
  name: string;

  /**
   * The version of this alert route config
   */
  version: number;

  /**
   * The time of creation of this alert route
   */
  created_at?: string;

  /**
   * The time of last update of this alert route
   */
  updated_at?: string;
}

export namespace AlertRoute {
  export interface AlertSource {
    /**
     * The alert source ID that will match for the route
     */
    alert_source_id: string;

    /**
     * What conditions should alerts from this source meet to be included in this alert
     * route?
     */
    condition_groups: Array<AlertRoutesAPI.ConditionGroup>;
  }

  export interface ChannelConfig {
    /**
     * The conditions that must be met for this channel config to be used
     */
    condition_groups: Array<AlertRoutesAPI.ConditionGroup>;

    ms_teams_targets?: AlertRoutesAPI.ChannelTarget;

    slack_targets?: AlertRoutesAPI.ChannelTarget;
  }

  export interface EscalationConfig {
    /**
     * Should we auto cancel escalations when all alerts are resolved?
     */
    auto_cancel_escalations: boolean;

    /**
     * Targets for escalation
     */
    escalation_targets: Array<EscalationConfig.EscalationTarget>;
  }

  export namespace EscalationConfig {
    export interface EscalationTarget {
      escalation_paths?: WorkflowsAPI.EngineParamBinding;

      users?: WorkflowsAPI.EngineParamBinding;
    }
  }

  export interface IncidentConfig {
    /**
     * Should triage incidents be declined when alerts are resolved?
     */
    auto_decline_enabled: boolean;

    /**
     * What condition groups must be true for this alert route to create an incident?
     */
    condition_groups: Array<AlertRoutesAPI.ConditionGroup>;

    /**
     * How long should the escalation defer time be?
     */
    defer_time_seconds: number;

    /**
     * Whether incident creation is enabled for this alert route
     */
    enabled: boolean;

    /**
     * Which attributes should this alert route use to group alerts?
     */
    grouping_keys: Array<AlertRoutesAPI.GroupingKey>;

    /**
     * How large should the grouping window be?
     */
    grouping_window_seconds: number;
  }

  export interface IncidentTemplate {
    name: AlertRoutesAPI.AutoGeneratedTemplateBinding;

    /**
     * Custom fields configuration
     */
    custom_fields?: Array<IncidentTemplate.CustomField>;

    incident_mode?: AlertRoutesAPI.TemplateBinding;

    incident_type?: AlertRoutesAPI.TemplateBinding;

    severity?: IncidentTemplate.Severity;

    start_in_triage?: AlertRoutesAPI.TemplateBinding;

    summary?: AlertRoutesAPI.AutoGeneratedTemplateBinding;

    workspace?: AlertRoutesAPI.TemplateBinding;
  }

  export namespace IncidentTemplate {
    export interface CustomField {
      binding: WorkflowsAPI.EngineParamBinding;

      /**
       * ID of the custom field
       */
      custom_field_id: string;

      /**
       * The strategy to use when multiple alerts match this route
       */
      merge_strategy: 'first-wins' | 'last-wins' | 'append';
    }

    export interface Severity {
      /**
       * Strategy for merging severity when multiple alerts create/update the same
       * incident
       */
      merge_strategy: 'first-wins' | 'max';

      binding?: WorkflowsAPI.EngineParamBinding;
    }
  }
}

export interface AlertSourcePayload {
  /**
   * The alert source ID that will match for the route
   */
  alert_source_id: string;

  /**
   * What conditions should alerts from this source meet to be included in this alert
   * route?
   */
  condition_groups: Array<ConditionGroupPayload>;
}

export interface AutoGeneratedTemplateBinding {
  /**
   * Whether this attribute is autogenerated using AI or not
   */
  autogenerated: boolean;

  binding?: WorkflowsAPI.EngineParamBinding;
}

export interface AutoGeneratedTemplateBindingPayload {
  /**
   * Whether this attribute is autogenerated using AI or not
   */
  autogenerated?: boolean;

  binding?: WorkflowsAPI.EngineParamBindingPayload;
}

export interface ChannelConfigPayload {
  /**
   * The conditions that must be met for this channel config to be used
   */
  condition_groups: Array<ConditionGroupPayload>;

  ms_teams_targets?: ChannelTargetPayload;

  slack_targets?: ChannelTargetPayload;
}

export interface ChannelTarget {
  binding: WorkflowsAPI.EngineParamBinding;

  /**
   * The visibility of the channel
   */
  channel_visibility: string;
}

export interface ChannelTargetPayload {
  binding: WorkflowsAPI.EngineParamBindingPayload;

  /**
   * The visibility of the channel
   */
  channel_visibility: string;
}

export interface ConditionGroup {
  /**
   * All conditions in this list must be satisfied for the group to be satisfied
   */
  conditions: Array<ConditionGroup.Condition>;
}

export namespace ConditionGroup {
  export interface Condition {
    operation: Condition.Operation;

    /**
     * Bindings for the operation parameters
     */
    param_bindings: Array<WorkflowsAPI.EngineParamBinding>;

    subject: Condition.Subject;
  }

  export namespace Condition {
    export interface Operation {
      /**
       * Human readable label to be displayed for user to select
       */
      label: string;

      /**
       * Unique identifier for this option
       */
      value: string;
    }

    export interface Subject {
      /**
       * Human readable identifier for the subject
       */
      label: string;

      /**
       * Reference into the scope for the value of the subject
       */
      reference: string;
    }
  }
}

export interface ConditionGroupPayload {
  /**
   * All conditions in this list must be satisfied for the group to be satisfied
   */
  conditions: Array<ConditionGroupPayload.Condition>;
}

export namespace ConditionGroupPayload {
  export interface Condition {
    /**
     * The name of the operation on the subject
     */
    operation: string;

    /**
     * List of parameter bindings
     */
    param_bindings: Array<WorkflowsAPI.EngineParamBindingPayload>;

    /**
     * The reference of the subject in the trigger scope
     */
    subject: string;
  }
}

export interface EscalationConfigPayload {
  /**
   * Should we auto cancel escalations when all alerts are resolved?
   */
  auto_cancel_escalations: boolean;

  /**
   * Targets for escalation
   */
  escalation_targets: Array<EscalationConfigPayload.EscalationTarget>;
}

export namespace EscalationConfigPayload {
  export interface EscalationTarget {
    escalation_paths?: WorkflowsAPI.EngineParamBindingPayload;

    users?: WorkflowsAPI.EngineParamBindingPayload;
  }
}

export interface Expression {
  /**
   * The human readable label of the expression
   */
  label: string;

  operations: Array<Expression.Operation>;

  /**
   * A short ID that can be used to reference the expression
   */
  reference: string;

  returns: ReturnsMeta;

  /**
   * The root reference for this expression (i.e. where the expression starts)
   */
  root_reference: string;

  else_branch?: Expression.ElseBranch;
}

export namespace Expression {
  export interface Operation {
    /**
     * The type of the operation
     */
    operation_type:
      | 'navigate'
      | 'filter'
      | 'concatenate'
      | 'count'
      | 'min'
      | 'max'
      | 'sum'
      | 'random'
      | 'first'
      | 'parse'
      | 'branches';

    returns: AlertRoutesAPI.ReturnsMeta;

    branches?: Operation.Branches;

    filter?: Operation.Filter;

    navigate?: Operation.Navigate;

    parse?: Operation.Parse;
  }

  export namespace Operation {
    export interface Branches {
      /**
       * The branches to apply for this operation
       */
      branches: Array<Branches.Branch>;

      returns: AlertRoutesAPI.ReturnsMeta;
    }

    export namespace Branches {
      export interface Branch {
        /**
         * When one of these condition groups are satisfied, this branch will be evaluated
         */
        condition_groups: Array<AlertRoutesAPI.ConditionGroup>;

        result: WorkflowsAPI.EngineParamBinding;
      }
    }

    export interface Filter {
      /**
       * The condition groups to apply in this filter. Only one group needs to be
       * satisfied for the filter to pass.
       */
      condition_groups: Array<AlertRoutesAPI.ConditionGroup>;
    }

    export interface Navigate {
      /**
       * The reference within the scope to navigate to
       */
      reference: string;

      /**
       * The name of the reference to navigate to
       */
      reference_label: string;
    }

    export interface Parse {
      returns: AlertRoutesAPI.ReturnsMeta;

      /**
       * Source expression that is evaluated to a result
       */
      source: string;
    }
  }

  export interface ElseBranch {
    result: WorkflowsAPI.EngineParamBinding;
  }
}

export interface ExpressionPayload {
  /**
   * The human readable label of the expression
   */
  label: string;

  operations: Array<ExpressionPayload.Operation>;

  /**
   * A short ID that can be used to reference the expression
   */
  reference: string;

  /**
   * The root reference for this expression (i.e. where the expression starts)
   */
  root_reference: string;

  else_branch?: ExpressionPayload.ElseBranch;
}

export namespace ExpressionPayload {
  export interface Operation {
    /**
     * The type of the operation
     */
    operation_type:
      | 'navigate'
      | 'filter'
      | 'concatenate'
      | 'count'
      | 'min'
      | 'max'
      | 'sum'
      | 'random'
      | 'first'
      | 'parse'
      | 'branches';

    branches?: Operation.Branches;

    concatenate?: Operation.Concatenate;

    filter?: Operation.Filter;

    navigate?: Operation.Navigate;

    parse?: Operation.Parse;
  }

  export namespace Operation {
    export interface Branches {
      /**
       * The branches to apply for this operation
       */
      branches: Array<Branches.Branch>;

      returns: AlertRoutesAPI.ReturnsMeta;
    }

    export namespace Branches {
      export interface Branch {
        /**
         * When one of these condition groups are satisfied, this branch will be evaluated
         */
        condition_groups: Array<AlertRoutesAPI.ConditionGroupPayload>;

        result: WorkflowsAPI.EngineParamBindingPayload;
      }
    }

    export interface Concatenate {
      /**
       * The reference that you want to concatenate with
       */
      reference: string;
    }

    export interface Filter {
      /**
       * The condition groups to apply in this filter. Only one group needs to be
       * satisfied for the filter to pass.
       */
      condition_groups: Array<AlertRoutesAPI.ConditionGroupPayload>;
    }

    export interface Navigate {
      /**
       * The reference that you want to navigate to
       */
      reference: string;
    }

    export interface Parse {
      returns: AlertRoutesAPI.ReturnsMeta;

      /**
       * Source expression that is evaluated to a result
       */
      source: string;
    }
  }

  export interface ElseBranch {
    result: WorkflowsAPI.EngineParamBindingPayload;
  }
}

export interface GroupingKey {
  /**
   * A reference to a property of the alert to group on
   */
  reference: string;
}

export interface IncidentConfigPayload {
  /**
   * Should triage incidents be declined when alerts are resolved?
   */
  auto_decline_enabled: boolean;

  /**
   * What condition groups must be true for this alert route to create an incident?
   */
  condition_groups: Array<ConditionGroupPayload>;

  /**
   * How long should the escalation defer time be?
   */
  defer_time_seconds: number;

  /**
   * Whether incident creation is enabled for this alert route
   */
  enabled: boolean;

  /**
   * Which attributes should this alert route use to group alerts?
   */
  grouping_keys: Array<GroupingKey>;

  /**
   * How large should the grouping window be?
   */
  grouping_window_seconds: number;
}

export interface IncidentTemplatePayload {
  name: AutoGeneratedTemplateBindingPayload;

  /**
   * Custom fields configuration
   */
  custom_fields?: Array<IncidentTemplatePayload.CustomField>;

  incident_mode?: TemplateBindingPayload;

  incident_type?: TemplateBindingPayload;

  severity?: IncidentTemplatePayload.Severity;

  start_in_triage?: TemplateBindingPayload;

  summary?: AutoGeneratedTemplateBindingPayload;

  workspace?: TemplateBindingPayload;
}

export namespace IncidentTemplatePayload {
  export interface CustomField {
    binding: WorkflowsAPI.EngineParamBindingPayload;

    /**
     * ID of the custom field
     */
    custom_field_id: string;

    /**
     * The strategy to use when multiple alerts match this route
     */
    merge_strategy: 'first-wins' | 'last-wins' | 'append';
  }

  export interface Severity {
    /**
     * Strategy for merging severity when multiple alerts create/update the same
     * incident
     */
    merge_strategy: 'first-wins' | 'max';

    binding?: WorkflowsAPI.EngineParamBindingPayload;
  }
}

export interface PaginationMetaResult {
  /**
   * What was the maximum number of results requested
   */
  page_size: number;

  /**
   * If provided, pass this as the 'after' param to load the next page
   */
  after?: string;
}

export interface ReturnsMeta {
  /**
   * Whether the return value should be single or multi-value
   */
  array: boolean;

  /**
   * Expected return type of this expression (what to try casting the result to)
   */
  type: string;
}

export interface TemplateBinding {
  binding?: WorkflowsAPI.EngineParamBinding;
}

export interface TemplateBindingPayload {
  binding?: WorkflowsAPI.EngineParamBindingPayload;
}

export interface AlertRouteCreateResponse {
  alert_route: AlertRoute;
}

export interface AlertRouteRetrieveResponse {
  alert_route: AlertRoute;
}

export interface AlertRouteUpdateResponse {
  alert_route: AlertRoute;
}

export interface AlertRouteListResponse {
  alert_routes: Array<AlertRouteListResponse.AlertRoute>;

  pagination_meta: PaginationMetaResult;
}

export namespace AlertRouteListResponse {
  export interface AlertRoute {
    /**
     * Unique identifier for this alert route config
     */
    id: string;

    /**
     * Whether this alert route is enabled or not
     */
    enabled: boolean;

    /**
     * The name of this alert route config, for the user's reference
     */
    name: string;
  }
}

export interface AlertRouteCreateParams {
  /**
   * Which alert sources should this alert route match?
   */
  alert_sources: Array<AlertSourcePayload>;

  /**
   * The channel configuration for this alert route
   */
  channel_config: Array<ChannelConfigPayload>;

  /**
   * What condition groups must be true for this alert route to fire?
   */
  condition_groups: Array<ConditionGroupPayload>;

  /**
   * Whether this alert route is enabled or not
   */
  enabled: boolean;

  escalation_config: EscalationConfigPayload;

  /**
   * The expressions used in this template
   */
  expressions: Array<ExpressionPayload>;

  incident_config: IncidentConfigPayload;

  incident_template: IncidentTemplatePayload;

  /**
   * Whether this alert route is private. Private alert routes will only create
   * private incidents from alerts.
   */
  is_private: boolean;

  /**
   * The name of this alert route config, for the user's reference
   */
  name: string;

  /**
   * The version of this alert route config
   */
  version: number;

  /**
   * The time of creation of this alert route
   */
  created_at?: string;

  /**
   * The time of last update of this alert route
   */
  updated_at?: string;
}

export interface AlertRouteUpdateParams {
  /**
   * Which alert sources should this alert route match?
   */
  alert_sources: Array<AlertSourcePayload>;

  /**
   * The channel configuration for this alert route
   */
  channel_config: Array<ChannelConfigPayload>;

  /**
   * What condition groups must be true for this alert route to fire?
   */
  condition_groups: Array<ConditionGroupPayload>;

  /**
   * Whether this alert route is enabled or not
   */
  enabled: boolean;

  escalation_config: EscalationConfigPayload;

  /**
   * The expressions used in this template
   */
  expressions: Array<ExpressionPayload>;

  incident_config: IncidentConfigPayload;

  incident_template: IncidentTemplatePayload;

  /**
   * Whether this alert route is private. Private alert routes will only create
   * private incidents from alerts.
   */
  is_private: boolean;

  /**
   * The name of this alert route config, for the user's reference
   */
  name: string;

  /**
   * The version of this alert route config
   */
  version: number;

  /**
   * The time of creation of this alert route
   */
  created_at?: string;

  /**
   * The time of last update of this alert route
   */
  updated_at?: string;
}

export interface AlertRouteListParams {
  /**
   * Number of alert routes to return per page
   */
  page_size: number;

  /**
   * The ID of the last alert route on the previous page
   */
  after?: string;
}

export declare namespace AlertRoutes {
  export {
    type AlertRoute as AlertRoute,
    type AlertSourcePayload as AlertSourcePayload,
    type AutoGeneratedTemplateBinding as AutoGeneratedTemplateBinding,
    type AutoGeneratedTemplateBindingPayload as AutoGeneratedTemplateBindingPayload,
    type ChannelConfigPayload as ChannelConfigPayload,
    type ChannelTarget as ChannelTarget,
    type ChannelTargetPayload as ChannelTargetPayload,
    type ConditionGroup as ConditionGroup,
    type ConditionGroupPayload as ConditionGroupPayload,
    type EscalationConfigPayload as EscalationConfigPayload,
    type Expression as Expression,
    type ExpressionPayload as ExpressionPayload,
    type GroupingKey as GroupingKey,
    type IncidentConfigPayload as IncidentConfigPayload,
    type IncidentTemplatePayload as IncidentTemplatePayload,
    type PaginationMetaResult as PaginationMetaResult,
    type ReturnsMeta as ReturnsMeta,
    type TemplateBinding as TemplateBinding,
    type TemplateBindingPayload as TemplateBindingPayload,
    type AlertRouteCreateResponse as AlertRouteCreateResponse,
    type AlertRouteRetrieveResponse as AlertRouteRetrieveResponse,
    type AlertRouteUpdateResponse as AlertRouteUpdateResponse,
    type AlertRouteListResponse as AlertRouteListResponse,
    type AlertRouteCreateParams as AlertRouteCreateParams,
    type AlertRouteUpdateParams as AlertRouteUpdateParams,
    type AlertRouteListParams as AlertRouteListParams,
  };
}
