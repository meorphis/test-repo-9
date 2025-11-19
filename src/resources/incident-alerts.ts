// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as IncidentAlertsAPI from './incident-alerts';
import * as AlertRoutesAPI from './alert-routes';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class IncidentAlerts extends APIResource {
  /**
   * List the connections between incidents and alerts
   *
   * @example
   * ```ts
   * const incidentAlerts = await client.incidentAlerts.list({
   *   page_size: 25,
   * });
   * ```
   */
  list(query: IncidentAlertListParams, options?: RequestOptions): APIPromise<IncidentAlertListResponse> {
    return this._client.get('/v2/incident_alerts', { query, ...options });
  }
}

export interface AlertSlim {
  /**
   * The ID of this alert
   */
  id: string;

  /**
   * The ID of the alert source this alert fired on
   */
  alert_source_id: string;

  /**
   * When this entry was created
   */
  created_at: string;

  /**
   * A deduplication key which uniquely references this alert from your alert source.
   * For newly created HTTP sources, this field is required. If you send an event
   * with the same deduplication_key multiple times, only one alert will be created
   * in incident.io for this alert source config. You can filter on this field to
   * find the alert created by an event you've sent us.
   */
  deduplication_key: string;

  /**
   * Statuses of an alert
   */
  status: 'firing' | 'resolved';

  /**
   * The title of the alert, parsed from the alert payload according to the alert
   * source configuration
   */
  title: string;

  /**
   * When this alert was last updated
   */
  updated_at: string;

  /**
   * The description of the alert
   */
  description?: string;

  /**
   * When this alert was resolved
   */
  resolved_at?: string;

  /**
   * If applicable, a link to the alert in the upstream system
   */
  source_url?: string;
}

/**
 * Incident slim is a subset of the full incident object, listing key fields.
 */
export interface IncidentSlim {
  /**
   * Unique identifier for the incident
   */
  id: string;

  /**
   * External identifier for the incident - often displayed with an INC- prefix
   */
  external_id: number;

  /**
   * Explanation of the incident
   */
  name: string;

  /**
   * Reference to this incident, as displayed across the product
   */
  reference: string;

  /**
   * The category of the incidents status
   */
  status_category:
    | 'triage'
    | 'declined'
    | 'merged'
    | 'canceled'
    | 'active'
    | 'post-incident'
    | 'closed'
    | 'paused';

  /**
   * Whether the incident should be open to anyone in your Slack workspace (public),
   * or invite-only (private). For more information on Private Incidents see our
   * [help centre](https://help.incident.io/articles/5905558102-can-we-mark-incidents-as-sensitive-and-restrict-access).
   */
  visibility: 'public' | 'private';

  /**
   * Detailed description of the incident
   */
  summary?: string;
}

export interface IncidentAlertListResponse {
  incident_alerts: Array<IncidentAlertListResponse.IncidentAlert>;

  pagination_meta: AlertRoutesAPI.PaginationMetaResult;
}

export namespace IncidentAlertListResponse {
  export interface IncidentAlert {
    /**
     * The ID of this alert
     */
    id: string;

    alert: IncidentAlertsAPI.AlertSlim;

    /**
     * Incident slim is a subset of the full incident object, listing key fields.
     */
    incident: IncidentAlertsAPI.IncidentSlim;

    /**
     * The ID of the alert route that created this incident alert
     */
    alert_route_id?: string;
  }
}

export interface IncidentAlertListParams {
  /**
   * Number of incident alerts to return per page
   */
  page_size: number;

  /**
   * If provided, pass this as the 'after' param to load the next page
   */
  after?: string;

  /**
   * Alert that this incident alert refers to
   */
  alert_id?: string;

  /**
   * Incident that this incident alert is attached to
   */
  incident_id?: string;
}

export declare namespace IncidentAlerts {
  export {
    type AlertSlim as AlertSlim,
    type IncidentSlim as IncidentSlim,
    type IncidentAlertListResponse as IncidentAlertListResponse,
    type IncidentAlertListParams as IncidentAlertListParams,
  };
}
