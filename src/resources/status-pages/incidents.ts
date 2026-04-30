// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * This API currently only allows linked Response incidents for a status page incident to be listed.
 */
export class Incidents extends APIResource {
  /**
   * List the linked Response incidents for a status page incident.
   *
   * @example
   * ```ts
   * const response =
   *   await client.statusPages.incidents.listResponseIncidents(
   *     'abc123',
   *     { id: 'abc123' },
   *   );
   * ```
   */
  listResponseIncidents(
    incidentID: string,
    params: IncidentListResponseIncidentsParams,
    options?: RequestOptions,
  ): APIPromise<IncidentListResponseIncidentsResponse> {
    const { id } = params;
    return this._client.get(path`/v1/status-pages/${id}/incidents/${incidentID}/response-incidents`, options);
  }
}

export interface IncidentListResponseIncidentsResponse {
  incidents: Array<IncidentListResponseIncidentsResponse.Incident>;
}

export namespace IncidentListResponseIncidentsResponse {
  export interface Incident {
    /**
     * ID of the Response incident
     */
    id: string;

    /**
     * When the Response incident was linked to the status page incident
     */
    linked_at: string;
  }
}

export interface IncidentListResponseIncidentsParams {
  /**
   * ID of the status page
   */
  id: string;
}

export declare namespace Incidents {
  export {
    type IncidentListResponseIncidentsResponse as IncidentListResponseIncidentsResponse,
    type IncidentListResponseIncidentsParams as IncidentListResponseIncidentsParams,
  };
}
