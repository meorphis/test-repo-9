// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Actions extends APIResource {
  /**
   * List all actions for an organisation.
   *
   * @deprecated
   */
  list(
    query: ActionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionListResponse> {
    return this._client.get('/v1/actions', { query, ...options });
  }

  /**
   * Get a single incident action.
   *
   * @deprecated
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ActionRetrieveResponse> {
    return this._client.get(path`/v1/actions/${id}`, options);
  }

  /**
   * List all actions for an organisation.
   *
   * @example
   * ```ts
   * const response = await client.actions.listV2();
   * ```
   */
  listV2(
    query: ActionListV2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionListV2Response> {
    return this._client.get('/v2/actions', { query, ...options });
  }

  /**
   * Get a single incident action.
   *
   * @example
   * ```ts
   * const response = await client.actions.retrieveV2(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  retrieveV2(id: string, options?: RequestOptions): APIPromise<ActionRetrieveV2Response> {
    return this._client.get(path`/v2/actions/${id}`, options);
  }
}

export interface ActionV1 {
  /**
   * Unique identifier for the action
   */
  id: string;

  /**
   * When the action was created
   */
  created_at: string;

  /**
   * Whether an action is marked as follow-up
   */
  follow_up: boolean;

  /**
   * Unique identifier of the incident the action belongs to
   */
  incident_id: string;

  /**
   * Status of the action
   */
  status: 'outstanding' | 'completed' | 'deleted' | 'not_doing';

  /**
   * When the action was last updated
   */
  updated_at: string;

  assignee?: UserV1;

  /**
   * When the action was completed
   */
  completed_at?: string;

  /**
   * Description of the action
   */
  description?: string;

  external_issue_reference?: ActionV1.ExternalIssueReference;
}

export namespace ActionV1 {
  export interface ExternalIssueReference {
    /**
     * Human readable ID for the issue
     */
    issue_name?: string;

    /**
     * URL linking directly to the action in the issue tracker
     */
    issue_permalink?: string;

    /**
     * ID of the issue tracker provider
     */
    provider?:
      | 'asana'
      | 'azure_devops'
      | 'click_up'
      | 'linear'
      | 'jira'
      | 'jira_server'
      | 'github'
      | 'gitlab'
      | 'service_now'
      | 'shortcut';
  }
}

export interface ActionV2 {
  /**
   * Unique identifier for the action
   */
  id: string;

  /**
   * When the action was created
   */
  created_at: string;

  creator: ActorV2;

  /**
   * Description of the action
   */
  description: string;

  /**
   * Unique identifier of the incident the action belongs to
   */
  incident_id: string;

  /**
   * Status of the action
   */
  status: 'outstanding' | 'completed' | 'deleted' | 'not_doing';

  /**
   * When the action was last updated
   */
  updated_at: string;

  assignee?: UserV2;

  /**
   * When the action was completed
   */
  completed_at?: string;
}

export interface ActorV2 {
  alert?: AlertActorV2;

  api_key?: ActorV2.APIKey;

  user?: UserV2;

  workflow?: WorkflowActorV2;
}

export namespace ActorV2 {
  export interface APIKey {
    /**
     * Unique identifier for this API key
     */
    id: string;

    /**
     * The name of the API key, for the user's reference
     */
    name: string;
  }
}

export interface AlertActorV2 {
  /**
   * The ID of this alert
   */
  id: string;

  /**
   * The title of the alert, parsed from the alert payload according to the alert
   * source configuration
   */
  title: string;
}

export interface UserV1 {
  /**
   * Unique identifier of the user
   */
  id: string;

  /**
   * Name of the user
   */
  name: string;

  /**
   * DEPRECATED: Role of the user as of March 9th 2023, this value is no longer
   * updated.
   */
  role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset';

  /**
   * Email address of the user.
   */
  email?: string;

  /**
   * Slack ID of the user
   */
  slack_user_id?: string;
}

export interface UserV2 {
  /**
   * Unique identifier of the user
   */
  id: string;

  /**
   * Name of the user
   */
  name: string;

  /**
   * DEPRECATED: Role of the user as of March 9th 2023, this value is no longer
   * updated.
   */
  role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset';

  /**
   * Email address of the user.
   */
  email?: string;

  /**
   * Slack ID of the user
   */
  slack_user_id?: string;
}

export interface WorkflowActorV2 {
  /**
   * Unique identifier for the workflow
   */
  id: string;

  /**
   * Name provided by the user when creating the workflow
   */
  name: string;
}

export interface ActionRetrieveResponse {
  action: ActionV1;
}

export interface ActionListResponse {
  actions: Array<ActionV1>;
}

export interface ActionListV2Response {
  actions: Array<ActionV2>;
}

export interface ActionRetrieveV2Response {
  action: ActionV2;
}

export interface ActionListParams {
  /**
   * Find actions related to this incident
   */
  incident_id?: string;

  /**
   * Filter to actions from incidents of the given mode. If not set, only actions
   * from `real` incidents are returned
   */
  incident_mode?: 'real' | 'test' | 'tutorial';

  /**
   * Filter to actions marked as being follow up actions
   */
  is_follow_up?: boolean;
}

export interface ActionListV2Params {
  /**
   * Find actions related to this incident
   */
  incident_id?: string;

  /**
   * Filter to actions from incidents of the given mode. If not set, only actions
   * from `standard` and `retrospective` incidents are returned
   */
  incident_mode?: 'standard' | 'retrospective' | 'test' | 'tutorial' | 'stream';
}

export declare namespace Actions {
  export {
    type ActionV1 as ActionV1,
    type ActionV2 as ActionV2,
    type ActorV2 as ActorV2,
    type AlertActorV2 as AlertActorV2,
    type UserV1 as UserV1,
    type UserV2 as UserV2,
    type WorkflowActorV2 as WorkflowActorV2,
    type ActionRetrieveResponse as ActionRetrieveResponse,
    type ActionListResponse as ActionListResponse,
    type ActionListV2Response as ActionListV2Response,
    type ActionRetrieveV2Response as ActionRetrieveV2Response,
    type ActionListParams as ActionListParams,
    type ActionListV2Params as ActionListV2Params,
  };
}
