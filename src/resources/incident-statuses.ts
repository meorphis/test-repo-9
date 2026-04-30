// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage incident statuses.
 *
 * Each incident has a status, picked from one of the statuses configured in your
 * organisations settings.
 *
 * Statuses help communicate where an incident is in its lifecycle. You can use
 * statuses when filtering incidents in the dashboard, and in workflows and announcement
 * rules.
 */
export class IncidentStatuses extends APIResource {
  /**
   * List all incident statuses for an organisation.
   *
   * @example
   * ```ts
   * const incidentStatuses =
   *   await client.incidentStatuses.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<IncidentStatusListResponse> {
    return this._client.get('/v1/incident_statuses', options);
  }

  /**
   * Create a new incident status
   *
   * @example
   * ```ts
   * const incidentStatus = await client.incidentStatuses.create(
   *   {
   *     category: 'live',
   *     description:
   *       "Impact has been **fully mitigated**, and we're ready to learn from this incident.",
   *     name: 'Closed',
   *   },
   * );
   * ```
   */
  create(
    body: IncidentStatusCreateParams,
    options?: RequestOptions,
  ): APIPromise<IncidentStatusCreateResponse> {
    return this._client.post('/v1/incident_statuses', { body, ...options });
  }

  /**
   * Delete an incident status
   *
   * @example
   * ```ts
   * await client.incidentStatuses.delete(
   *   '01FCNDV6P870EA6S7TK1DSYD5H',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/incident_statuses/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a single incident status.
   *
   * @example
   * ```ts
   * const incidentStatus =
   *   await client.incidentStatuses.retrieve(
   *     '01FCNDV6P870EA6S7TK1DSYD5H',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<IncidentStatusRetrieveResponse> {
    return this._client.get(path`/v1/incident_statuses/${id}`, options);
  }

  /**
   * Update an existing incident status
   *
   * @example
   * ```ts
   * const incidentStatus = await client.incidentStatuses.update(
   *   '01FCNDV6P870EA6S7TK1DSYD5H',
   *   {
   *     description:
   *       "Impact has been **fully mitigated**, and we're ready to learn from this incident.",
   *     name: 'Closed',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    body: IncidentStatusUpdateParams,
    options?: RequestOptions,
  ): APIPromise<IncidentStatusUpdateResponse> {
    return this._client.put(path`/v1/incident_statuses/${id}`, { body, ...options });
  }
}

export interface IncidentStatusV1 {
  /**
   * Unique ID of this incident status
   */
  id: string;

  /**
   * What category of status it is. All statuses apart from live (renamed in the app
   * to Active) and learning (renamed in the app to Post-incident) are managed by
   * incident.io and cannot be configured
   */
  category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused';

  created_at: string;

  /**
   * Rich text description of the incident status
   */
  description: string;

  /**
   * Unique name of this status
   */
  name: string;

  /**
   * Order of this incident status
   */
  rank: number;

  updated_at: string;
}

export interface IncidentStatusCreateResponse {
  incident_status: IncidentStatusV1;
}

export interface IncidentStatusRetrieveResponse {
  incident_status: IncidentStatusV1;
}

export interface IncidentStatusUpdateResponse {
  incident_status: IncidentStatusV1;
}

export interface IncidentStatusListResponse {
  incident_statuses: Array<IncidentStatusV1>;
}

export interface IncidentStatusCreateParams {
  /**
   * Whether the status should be considered 'live' (now renamed to active),
   * 'learning' (now renamed to post-incident) or 'closed'. The triage and declined
   * statuses cannot be created or modified.
   */
  category: 'live' | 'learning' | 'closed';

  /**
   * Rich text description of the incident status
   */
  description: string;

  /**
   * Unique name of this status
   */
  name: string;
}

export interface IncidentStatusUpdateParams {
  /**
   * Rich text description of the incident status
   */
  description: string;

  /**
   * Unique name of this status
   */
  name: string;
}

export declare namespace IncidentStatuses {
  export {
    type IncidentStatusV1 as IncidentStatusV1,
    type IncidentStatusCreateResponse as IncidentStatusCreateResponse,
    type IncidentStatusRetrieveResponse as IncidentStatusRetrieveResponse,
    type IncidentStatusUpdateResponse as IncidentStatusUpdateResponse,
    type IncidentStatusListResponse as IncidentStatusListResponse,
    type IncidentStatusCreateParams as IncidentStatusCreateParams,
    type IncidentStatusUpdateParams as IncidentStatusUpdateParams,
  };
}
