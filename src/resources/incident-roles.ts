// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class IncidentRoles extends APIResource {
  /**
   * List all incident roles for an organisation.
   *
   * @deprecated
   */
  list(options?: RequestOptions): APIPromise<IncidentRoleListResponse> {
    return this._client.get('/v1/incident_roles', options);
  }

  /**
   * Create a new incident role
   *
   * @deprecated
   */
  create(body: IncidentRoleCreateParams, options?: RequestOptions): APIPromise<IncidentRoleCreateResponse> {
    return this._client.post('/v1/incident_roles', { body, ...options });
  }

  /**
   * Removes an existing role
   *
   * @deprecated
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/incident_roles/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a single incident role.
   *
   * @deprecated
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<IncidentRoleRetrieveResponse> {
    return this._client.get(path`/v1/incident_roles/${id}`, options);
  }

  /**
   * Update an existing incident role
   *
   * @deprecated
   */
  update(
    id: string,
    body: IncidentRoleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<IncidentRoleUpdateResponse> {
    return this._client.put(path`/v1/incident_roles/${id}`, { body, ...options });
  }

  /**
   * List all incident roles for an organisation.
   *
   * @example
   * ```ts
   * const response = await client.incidentRoles.listV2();
   * ```
   */
  listV2(options?: RequestOptions): APIPromise<IncidentRoleListV2Response> {
    return this._client.get('/v2/incident_roles', options);
  }

  /**
   * Create a new incident role
   *
   * @example
   * ```ts
   * const response = await client.incidentRoles.createV2({
   *   description:
   *     'The person currently coordinating the incident',
   *   instructions:
   *     'Take point on the incident; Make sure people are clear on responsibilities',
   *   name: 'Incident Lead',
   *   shortform: 'lead',
   * });
   * ```
   */
  createV2(
    body: IncidentRoleCreateV2Params,
    options?: RequestOptions,
  ): APIPromise<IncidentRoleCreateV2Response> {
    return this._client.post('/v2/incident_roles', { body, ...options });
  }

  /**
   * Removes an existing role
   *
   * @example
   * ```ts
   * await client.incidentRoles.deleteV2(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  deleteV2(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/incident_roles/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a single incident role.
   *
   * @example
   * ```ts
   * const response = await client.incidentRoles.retrieveV2(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  retrieveV2(id: string, options?: RequestOptions): APIPromise<IncidentRoleRetrieveV2Response> {
    return this._client.get(path`/v2/incident_roles/${id}`, options);
  }

  /**
   * Update an existing incident role
   *
   * @example
   * ```ts
   * const response = await client.incidentRoles.updateV2(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   *   {
   *     description:
   *       'The person currently coordinating the incident',
   *     instructions:
   *       'Take point on the incident; Make sure people are clear on responsibilities',
   *     name: 'Incident Lead',
   *     shortform: 'lead',
   *   },
   * );
   * ```
   */
  updateV2(
    id: string,
    body: IncidentRoleUpdateV2Params,
    options?: RequestOptions,
  ): APIPromise<IncidentRoleUpdateV2Response> {
    return this._client.put(path`/v2/incident_roles/${id}`, { body, ...options });
  }
}

export interface IncidentRoleV1 {
  /**
   * Unique identifier for the role
   */
  id: string;

  /**
   * When the role was created
   */
  created_at: string;

  /**
   * Describes the purpose of the role
   */
  description: string;

  /**
   * Provided to whoever is nominated for the role. Note that this will be empty for
   * the 'reporter' role.
   */
  instructions: string;

  /**
   * Human readable name of the incident role
   */
  name: string;

  /**
   * Type of incident role
   */
  role_type: 'lead' | 'reporter' | 'custom';

  /**
   * Short human readable name for Slack. Note that this will be empty for the
   * 'reporter' role.
   */
  shortform: string;

  /**
   * When the role was last updated
   */
  updated_at: string;

  /**
   * DEPRECATED: this will always be false.
   */
  required?: boolean;
}

export interface IncidentRoleV2 {
  /**
   * Unique identifier for the role
   */
  id: string;

  /**
   * When the role was created
   */
  created_at: string;

  /**
   * Describes the purpose of the role
   */
  description: string;

  /**
   * Provided to whoever is nominated for the role. Note that this will be empty for
   * the 'reporter' role.
   */
  instructions: string;

  /**
   * Human readable name of the incident role
   */
  name: string;

  /**
   * Type of incident role
   */
  role_type: 'lead' | 'reporter' | 'custom';

  /**
   * Short human readable name for Slack. Note that this will be empty for the
   * 'reporter' role.
   */
  shortform: string;

  /**
   * When the role was last updated
   */
  updated_at: string;
}

export interface IncidentRoleCreateResponse {
  incident_role: IncidentRoleV1;
}

export interface IncidentRoleRetrieveResponse {
  incident_role: IncidentRoleV1;
}

export interface IncidentRoleUpdateResponse {
  incident_role: IncidentRoleV1;
}

export interface IncidentRoleListResponse {
  incident_roles: Array<IncidentRoleV1>;
}

export interface IncidentRoleCreateV2Response {
  incident_role: IncidentRoleV2;
}

export interface IncidentRoleListV2Response {
  incident_roles: Array<IncidentRoleV2>;
}

export interface IncidentRoleRetrieveV2Response {
  incident_role: IncidentRoleV2;
}

export interface IncidentRoleUpdateV2Response {
  incident_role: IncidentRoleV2;
}

export interface IncidentRoleCreateParams {
  /**
   * Describes the purpose of the role
   */
  description: string;

  /**
   * Provided to whoever is nominated for the role. Note that this will be empty for
   * the 'reporter' role.
   */
  instructions: string;

  /**
   * Human readable name of the incident role
   */
  name: string;

  /**
   * DEPRECATED: this will always be false.
   */
  required: boolean;

  /**
   * Short human readable name for Slack. Note that this will be empty for the
   * 'reporter' role.
   */
  shortform: string;
}

export interface IncidentRoleUpdateParams {
  /**
   * Describes the purpose of the role
   */
  description: string;

  /**
   * Provided to whoever is nominated for the role. Note that this will be empty for
   * the 'reporter' role.
   */
  instructions: string;

  /**
   * Human readable name of the incident role
   */
  name: string;

  /**
   * Short human readable name for Slack. Note that this will be empty for the
   * 'reporter' role.
   */
  shortform: string;

  /**
   * DEPRECATED: this will always be false.
   */
  required?: boolean;
}

export interface IncidentRoleCreateV2Params {
  /**
   * Describes the purpose of the role
   */
  description: string;

  /**
   * Provided to whoever is nominated for the role. Note that this will be empty for
   * the 'reporter' role.
   */
  instructions: string;

  /**
   * Human readable name of the incident role
   */
  name: string;

  /**
   * Short human readable name for Slack. Note that this will be empty for the
   * 'reporter' role.
   */
  shortform: string;
}

export interface IncidentRoleUpdateV2Params {
  /**
   * Describes the purpose of the role
   */
  description: string;

  /**
   * Provided to whoever is nominated for the role. Note that this will be empty for
   * the 'reporter' role.
   */
  instructions: string;

  /**
   * Human readable name of the incident role
   */
  name: string;

  /**
   * Short human readable name for Slack. Note that this will be empty for the
   * 'reporter' role.
   */
  shortform: string;
}

export declare namespace IncidentRoles {
  export {
    type IncidentRoleV1 as IncidentRoleV1,
    type IncidentRoleV2 as IncidentRoleV2,
    type IncidentRoleCreateResponse as IncidentRoleCreateResponse,
    type IncidentRoleRetrieveResponse as IncidentRoleRetrieveResponse,
    type IncidentRoleUpdateResponse as IncidentRoleUpdateResponse,
    type IncidentRoleListResponse as IncidentRoleListResponse,
    type IncidentRoleCreateV2Response as IncidentRoleCreateV2Response,
    type IncidentRoleListV2Response as IncidentRoleListV2Response,
    type IncidentRoleRetrieveV2Response as IncidentRoleRetrieveV2Response,
    type IncidentRoleUpdateV2Response as IncidentRoleUpdateV2Response,
    type IncidentRoleCreateParams as IncidentRoleCreateParams,
    type IncidentRoleUpdateParams as IncidentRoleUpdateParams,
    type IncidentRoleCreateV2Params as IncidentRoleCreateV2Params,
    type IncidentRoleUpdateV2Params as IncidentRoleUpdateV2Params,
  };
}
