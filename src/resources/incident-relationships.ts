// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CustomFieldOptionsAPI from './custom-field-options';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class IncidentRelationships extends APIResource {
  /**
   * List related incidents for a specific incident.
   *
   * @example
   * ```ts
   * const incidentRelationships =
   *   await client.incidentRelationships.list({
   *     incident_id: '01FCNDV6P870EA6S7TK1DSYD5H',
   *   });
   * ```
   */
  list(
    query: IncidentRelationshipListParams,
    options?: RequestOptions,
  ): APIPromise<IncidentRelationshipListResponse> {
    return this._client.get('/v1/incident_relationships', { query, ...options });
  }
}

export interface IncidentRelationshipListResponse {
  incident_relationships: Array<IncidentRelationshipListResponse.IncidentRelationship>;

  pagination_meta?: CustomFieldOptionsAPI.PaginationMeta;
}

export namespace IncidentRelationshipListResponse {
  export interface IncidentRelationship {
    /**
     * Unique identifier of this incident relationship
     */
    id: string;

    incident: IncidentRelationship.Incident;
  }

  export namespace IncidentRelationship {
    export interface Incident {
      /**
       * Unique identifier of this incident
       */
      id: string;

      /**
       * External ID of this incident often prepended with 'INC-'
       */
      external_id: number;

      /**
       * Name of this incident
       */
      name: string;
    }
  }
}

export interface IncidentRelationshipListParams {
  /**
   * ID of the incident to find relationships for
   */
  incident_id: string;

  /**
   * An record's ID. This endpoint will return a list of records after this ID in
   * relation to the API response order.
   */
  after?: string;

  /**
   * Integer number of records to return
   */
  page_size?: number;
}

export declare namespace IncidentRelationships {
  export {
    type IncidentRelationshipListResponse as IncidentRelationshipListResponse,
    type IncidentRelationshipListParams as IncidentRelationshipListParams,
  };
}
