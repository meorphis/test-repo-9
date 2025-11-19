// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ActionsAPI from './actions';
import * as AlertRoutesAPI from './alert-routes';
import * as IncidentAlertsAPI from './incident-alerts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Escalations extends APIResource {
  /**
   * Create an escalation.
   *
   * An escalation pages people, either according to an escalation path, or directly
   * to specific users. You must provide either an escalation_path_id OR user_ids,
   * but not both.
   *
   * When escalating via an escalation path, the escalation will follow the
   * configured path with its levels and timeouts, using your default
   * [alert priority](https://app.incident.io/~/settings/alerts/configuration/priorities).
   *
   * When escalating directly to users, they will receive a high-urgency
   * notification, based on their notification rules.
   *
   * This endpoint is rate-limited to 60 requests per minute, since it is intended
   * for interactive use cases (for example someone clicking a "escalate to team"
   * button in your internal developer platform). To escalate based on automated
   * alerts, we recommend sending events to an alert source instead.
   *
   * @example
   * ```ts
   * const escalation = await client.escalations.create({
   *   idempotency_key: '2024-01-15-abc123',
   *   title: 'Production database experiencing high CPU',
   *   description:
   *     'Database CPU has been above 90% for 5 minutes',
   *   escalation_path_id: '01H0J1EXE7AXZ2C93K61WBPYEH',
   *   user_ids: [
   *     '01H0J1EXE7AXZ2C93K61WBPYEH',
   *     '01H0J1EXE7AXZ2C93K61WBPYEI',
   *   ],
   * });
   * ```
   */
  create(body: EscalationCreateParams, options?: RequestOptions): APIPromise<EscalationCreateResponse> {
    return this._client.post('/v2/escalations', { body, ...options });
  }

  /**
   * Show a specific escalation.
   *
   * @example
   * ```ts
   * const escalation = await client.escalations.retrieve(
   *   '01G0J1EXE7AXZ2C93K61WBPYEH',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EscalationRetrieveResponse> {
    return this._client.get(path`/v2/escalations/${id}`, options);
  }

  /**
   * List all escalations for your account.
   *
   * This endpoint supports a number of filters, which can help find escalations
   * matching certain criteria.
   *
   * Note that:
   *
   * - Filters may be used together, and the result will be escalations that match
   *   all filters.
   * - All query parameters must be URI encoded.
   *
   * To use this API, you will need an API key with the "View data" or "Create and
   * manage on-call resources" permission.
   *
   * ### By escalation_path
   *
   * Find all escalations that escalated to escalation path with id=ABC:
   *
   *     	curl --get 'https://api.incident.io/v2/escalations' \
   *     		--data 'escalation_path[one_of]=ABC'
   *
   * ### By status
   *
   * Find all escalations with a current status of "triggered":
   *
   *     	curl --get 'https://api.incident.io/v2/escalations' \
   *     		--data 'status[one_of]=triggered'
   *
   * Possible values are "pending", "triggered", "acked", "resolved", "expired" and
   * "cancelled". Escalations are in "pending" when they are in a grace period when
   * the related alert has been grouped in an incident.
   *
   * ### By alert
   *
   * Find all escalations that were created by alert with id=ABC:
   *
   *     	curl --get 'https://api.incident.io/v2/escalations' \
   *     		--data 'alert[one_of]=ABC'
   *
   * ### By created_at and updated_at
   *
   * Find all escalations that follow specified date parameters for created_at and
   * updated_at fields. Possible values are "gte" (greater than or equal to), "lte"
   * (less than or equal to), and "date_range" (between two dates). For example, to
   * find all escalations updated after 2025-01-01:
   *
   *     	curl --get 'https://api.incident.io/v2/escalations' \
   *     		--data 'updated_at[gte]=2025-01-01'
   *
   * To find all escalations created between 2025-01-01 and 2025-01-31:
   *
   *     	curl --get 'https://api.incident.io/v2/escalations' \
   *             --data 'created_at[date_range]=2025-01-01~2025-01-31'
   *
   * @example
   * ```ts
   * const escalations = await client.escalations.list();
   * ```
   */
  list(
    query: EscalationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EscalationListResponse> {
    return this._client.get('/v2/escalations', { query, ...options });
  }
}

export interface EscalationV2 {
  /**
   * Unique ID of the escalation
   */
  id: string;

  /**
   * When this escalation was created
   */
  created_at: string;

  /**
   * The creator of this escalation. Can be a user, a workflow, or an alert. If the
   * escalation came from a call route, this will be empty.
   */
  creator: EscalationV2.Creator;

  /**
   * Events which describe the history of this escalation. Events include information
   * about what users or channels were notified and what users acked.
   */
  events: Array<EscalationV2.Event>;

  /**
   * The priority associated with this escalation.
   */
  priority: EscalationV2.Priority;

  /**
   * Alerts related to this escalation
   */
  related_alerts: Array<IncidentAlertsAPI.AlertSlim>;

  /**
   * Incidents related to this escalation
   */
  related_incidents: Array<IncidentAlertsAPI.IncidentSlim>;

  /**
   * Status of the escalation
   */
  status: 'pending' | 'triggered' | 'acked' | 'resolved' | 'expired' | 'cancelled';

  /**
   * The title of this escalation
   */
  title: string;

  /**
   * When this escalation was last updated
   */
  updated_at: string;

  /**
   * Unique identifier of the escalation path that the escalation was created from
   */
  escalation_path_id?: string;
}

export namespace EscalationV2 {
  /**
   * The creator of this escalation. Can be a user, a workflow, or an alert. If the
   * escalation came from a call route, this will be empty.
   */
  export interface Creator {
    alert?: ActionsAPI.AlertActorV2;

    user?: ActionsAPI.UserV2;

    workflow?: ActionsAPI.WorkflowActorV2;
  }

  export interface Event {
    /**
     * The unique ID for this escalation event
     */
    id: string;

    /**
     * The type of event that occured.
     */
    event:
      | 'entered_grace_period'
      | 'triggered'
      | 'notified_users'
      | 'notified_channels'
      | 'acked'
      | 'cancelled'
      | 'resolved'
      | 'expired';

    /**
     * The time when this escalation event was processed
     */
    occurred_at: string;

    /**
     * This field will be populated for notified_channels events.
     */
    channels?: Array<Event.Channel>;

    /**
     * The urgency at which we tried to notify users. This field will be populated for
     * notified_users events.
     */
    urgency?: 'high' | 'low';

    /**
     * This field will be populated for notified_users and acked events.
     */
    users?: Array<ActionsAPI.UserV2>;
  }

  export namespace Event {
    export interface Channel {
      /**
       * ID of the Microsoft Teams channel, if there is one
       */
      microsoft_teams_channel_id?: string;

      /**
       * ID of the Microsoft Teams team, if there is one
       */
      microsoft_teams_team_id?: string;

      /**
       * ID of the Slack channel, if there is one
       */
      slack_channel_id?: string;

      /**
       * ID of the Slack team, if there is one
       */
      slack_team_id?: string;
    }
  }

  /**
   * The priority associated with this escalation.
   */
  export interface Priority {
    /**
     * The human readable label for this priority
     */
    name: string;
  }
}

export interface EscalationCreateResponse {
  escalation: EscalationV2;
}

export interface EscalationRetrieveResponse {
  escalation: EscalationV2;
}

export interface EscalationListResponse {
  escalations: Array<EscalationV2>;

  pagination_meta: AlertRoutesAPI.PaginationMetaResult;
}

export interface EscalationCreateParams {
  /**
   * Unique key to prevent duplicate escalations. If this key has already been used,
   * the existing escalation will be returned.
   */
  idempotency_key: string;

  /**
   * The title of the escalation. This message will be included in all notifications
   * about this escalation.
   */
  title: string;

  /**
   * Additional details about the escalation
   */
  description?: string;

  /**
   * ID of the escalation path to follow
   */
  escalation_path_id?: string;

  /**
   * IDs of users to escalate directly to
   */
  user_ids?: Array<string>;
}

export interface EscalationListParams {
  /**
   * An escalation's ID. This endpoint will return a list of escalations after this
   * ID in relation to the API response order.
   */
  after?: string;

  /**
   * Filter on the alert that created an escalation. Accepted operators are 'one_of'
   * and 'not_in'.
   */
  alert?: { [key: string]: Array<string> };

  /**
   * Filter on the created_at timestamp of the escalation. Accepted operators are
   * 'gte', 'lte' and 'date_range'.
   */
  created_at?: { [key: string]: Array<string> };

  /**
   * Filter on the escalation path for which the escalation was triggered. Accepted
   * operators are 'one_of' and 'not_in'.
   */
  escalation_path?: { [key: string]: Array<string> };

  /**
   * Number of escalations to return per page
   */
  page_size?: number;

  /**
   * Filter on the status of the escalation. Accepted operators are 'one_of' and
   * 'not_in'.
   */
  status?: { [key: string]: Array<string> };

  /**
   * Filter on the updated_at timestamp of the escalation. Accepted operators are
   * 'gte', 'lte' and 'date_range'.
   */
  updated_at?: { [key: string]: Array<string> };
}

export declare namespace Escalations {
  export {
    type EscalationV2 as EscalationV2,
    type EscalationCreateResponse as EscalationCreateResponse,
    type EscalationRetrieveResponse as EscalationRetrieveResponse,
    type EscalationListResponse as EscalationListResponse,
    type EscalationCreateParams as EscalationCreateParams,
    type EscalationListParams as EscalationListParams,
  };
}
