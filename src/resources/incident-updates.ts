// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ActionsAPI from './actions';
import * as AlertRoutesAPI from './alert-routes';
import * as IncidentsAPI from './incidents/incidents';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * List incident updates.
 *
 * Incident Updates allows you to see all the updates that have been shared against a
 * particular incident. This will include any time that the Severity or Status of
 * an incident changed, alongside any additional updates that were provided.
 */
export class IncidentUpdates extends APIResource {
  /**
   * List all incident updates for an organisation, or for a specific incident.
   *
   * @example
   * ```ts
   * const incidentUpdates = await client.incidentUpdates.list();
   * ```
   */
  list(
    query: IncidentUpdateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IncidentUpdateListResponse> {
    return this._client.get('/v2/incident_updates', { query, ...options });
  }
}

export interface IncidentUpdateListResponse {
  incident_updates: Array<IncidentUpdateListResponse.IncidentUpdate>;

  pagination_meta?: AlertRoutesAPI.PaginationMetaResult;
}

export namespace IncidentUpdateListResponse {
  export interface IncidentUpdate {
    /**
     * Unique identifier for this incident update
     */
    id: string;

    /**
     * When the update was created
     */
    created_at: string;

    /**
     * The incident this update relates to
     */
    incident_id: string;

    new_incident_status: IncidentsAPI.IncidentStatusV2;

    updater: ActionsAPI.ActorV2;

    /**
     * The ID of the incident this incident was merged into, if the to state of this
     * update is 'merged'.
     */
    merged_into_incident_id?: string;

    /**
     * Message that explains the context behind the update
     */
    message?: string;

    new_severity?: IncidentsAPI.Severity;
  }
}

export interface IncidentUpdateListParams {
  /**
   * An record's ID. This endpoint will return a list of records after this ID in
   * relation to the API response order.
   */
  after?: string;

  /**
   * Incident whose updates you want to list
   */
  incident_id?: string;

  /**
   * Integer number of records to return
   */
  page_size?: number;
}

export declare namespace IncidentUpdates {
  export {
    type IncidentUpdateListResponse as IncidentUpdateListResponse,
    type IncidentUpdateListParams as IncidentUpdateListParams,
  };
}
