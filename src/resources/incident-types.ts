// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * View incident types.
 *
 * With incident types enabled, you can tailor your process to the situation you're
 * responding to with different custom fields and roles for each incident type.
 */
export class IncidentTypes extends APIResource {
  /**
   * Get a single incident type.
   *
   * @example
   * ```ts
   * const incidentType = await client.incidentTypes.retrieve(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<IncidentTypeRetrieveResponse> {
    return this._client.get(path`/v1/incident_types/${id}`, options);
  }

  /**
   * List all incident types for an organisation.
   *
   * @example
   * ```ts
   * const incidentTypes = await client.incidentTypes.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<IncidentTypeListResponse> {
    return this._client.get('/v1/incident_types', options);
  }
}

export interface IncidentType {
  /**
   * Unique identifier for this Incident Type
   */
  id: string;

  /**
   * Whether incidents of this must always, or can optionally, be created in triage
   */
  create_in_triage: 'always' | 'optional';

  /**
   * When this resource was created
   */
  created_at: string;

  /**
   * What is this incident type for?
   */
  description: string;

  /**
   * The default Incident Type is used when no other type is explicitly specified
   */
  is_default: boolean;

  /**
   * The name of this Incident Type
   */
  name: string;

  /**
   * Should all incidents created with this Incident Type be private?
   */
  private_incidents_only: boolean;

  /**
   * When this resource was last updated
   */
  updated_at: string;
}

export interface IncidentTypeRetrieveResponse {
  incident_type: IncidentType;
}

export interface IncidentTypeListResponse {
  incident_types: Array<IncidentType>;
}

export declare namespace IncidentTypes {
  export {
    type IncidentType as IncidentType,
    type IncidentTypeRetrieveResponse as IncidentTypeRetrieveResponse,
    type IncidentTypeListResponse as IncidentTypeListResponse,
  };
}
