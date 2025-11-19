// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class IncidentTimestamps extends APIResource {
  /**
   * Get a single incident timestamp.
   *
   * @example
   * ```ts
   * const incidentTimestamp =
   *   await client.incidentTimestamps.retrieve(
   *     '01FCNDV6P870EA6S7TK1DSYD5H',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<IncidentTimestampRetrieveResponse> {
    return this._client.get(path`/v2/incident_timestamps/${id}`, options);
  }

  /**
   * List all incident timestamps for an organisation.
   *
   * @example
   * ```ts
   * const incidentTimestamps =
   *   await client.incidentTimestamps.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<IncidentTimestampListResponse> {
    return this._client.get('/v2/incident_timestamps', options);
  }
}

export interface IncidentTimestamp {
  /**
   * Unique ID of this incident timestamp
   */
  id: string;

  /**
   * Unique name of this timestamp
   */
  name: string;

  /**
   * Order in which this timestamp should be shown
   */
  rank: number;
}

export interface IncidentTimestampRetrieveResponse {
  incident_timestamp: IncidentTimestamp;
}

export interface IncidentTimestampListResponse {
  incident_timestamps: Array<IncidentTimestamp>;
}

export declare namespace IncidentTimestamps {
  export {
    type IncidentTimestamp as IncidentTimestamp,
    type IncidentTimestampRetrieveResponse as IncidentTimestampRetrieveResponse,
    type IncidentTimestampListResponse as IncidentTimestampListResponse,
  };
}
