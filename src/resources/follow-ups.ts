// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ActionsAPI from './actions';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage incident follow-ups.
 *
 * Incidents can have follow-ups associated with them, which track work that should be done
 * after an incident (e.g. improving some documentation, or upgrading a dependency). They can
 * also be exported to external issue trackers.
 *
 * You can manage follow-ups in the incident Slack channel with <code>/incident follow-ups</code>, or on
 * the incident homepage.
 */
export class FollowUps extends APIResource {
  /**
   * Get a single incident follow-up.
   *
   * @example
   * ```ts
   * const followUp = await client.followUps.retrieve(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FollowUpRetrieveResponse> {
    return this._client.get(path`/v2/follow_ups/${id}`, options);
  }

  /**
   * List all follow-ups for an organisation.
   *
   * @example
   * ```ts
   * const followUps = await client.followUps.list();
   * ```
   */
  list(
    query: FollowUpListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FollowUpListResponse> {
    return this._client.get('/v2/follow_ups', { query, ...options });
  }
}

export interface ExternalIssueReference {
  /**
   * Human readable ID for the issue
   */
  issue_name: string;

  /**
   * URL linking directly to the action in the issue tracker
   */
  issue_permalink: string;

  /**
   * ID of the issue tracker provider
   */
  provider:
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

export interface FollowUp {
  /**
   * Unique identifier for the follow-up
   */
  id: string;

  /**
   * When the follow-up was created
   */
  created_at: string;

  creator: ActionsAPI.ActorV2;

  /**
   * Unique identifier of the incident the follow-up belongs to
   */
  incident_id: string;

  /**
   * Labels associated with this follow-up
   */
  labels: Array<string>;

  /**
   * Status of the follow-up
   */
  status: 'outstanding' | 'completed' | 'deleted' | 'not_doing';

  /**
   * Title of the follow-up
   */
  title: string;

  /**
   * When the follow-up was last updated
   */
  updated_at: string;

  assignee?: ActionsAPI.UserV2;

  /**
   * When the follow-up was completed
   */
  completed_at?: string;

  /**
   * Description of the follow-up
   */
  description?: string;

  external_issue_reference?: ExternalIssueReference;

  priority?: FollowUp.Priority;
}

export namespace FollowUp {
  export interface Priority {
    /**
     * Unique identifier for the follow-up priority option
     */
    id: string;

    /**
     * Name of the follow-up priority option
     */
    name: string;

    /**
     * Rank is used to order the follow-up priority options correctly
     */
    rank: number;

    /**
     * Description of the follow-up priority option
     */
    description?: string;
  }
}

export interface FollowUpRetrieveResponse {
  follow_up: FollowUp;
}

export interface FollowUpListResponse {
  follow_ups: Array<FollowUp>;
}

export interface FollowUpListParams {
  /**
   * Find follow-ups related to this incident
   */
  incident_id?: string;

  /**
   * Filter to follow-ups from incidents of the given mode. If not set, only
   * follow-ups from `standard` and `retrospective` incidents are returned
   */
  incident_mode?: 'standard' | 'retrospective' | 'test' | 'tutorial' | 'stream';
}

export declare namespace FollowUps {
  export {
    type ExternalIssueReference as ExternalIssueReference,
    type FollowUp as FollowUp,
    type FollowUpRetrieveResponse as FollowUpRetrieveResponse,
    type FollowUpListResponse as FollowUpListResponse,
    type FollowUpListParams as FollowUpListParams,
  };
}
