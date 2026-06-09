// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage incident severities.
 *
 * Each incident has a severity, picked from one of the severities configured in your
 * organisations settings.
 *
 * Severities help categorise incidents, and communicate urgency/impact. You can use
 * severities when filtering incidents in the dashboard, and in workflows and announcement
 * rules.
 */
export class Severities extends APIResource {
  /**
   * Create a new severity
   *
   * @example
   * ```ts
   * const severity = await client.severities.create({
   *   description: 'Issues with **low impact**.',
   *   name: 'Minor',
   *   rank: 1,
   * });
   * ```
   */
  create(body: SeverityCreateParams, options?: RequestOptions): APIPromise<SeverityCreateResponse> {
    return this._client.post('/v1/severities', { body, ...options });
  }

  /**
   * Get a single incident severity.
   *
   * @example
   * ```ts
   * const severity = await client.severities.retrieve(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SeverityRetrieveResponse> {
    return this._client.get(path`/v1/severities/${id}`, options);
  }

  /**
   * Update an existing severity
   *
   * @example
   * ```ts
   * const severity = await client.severities.update(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   *   {
   *     description: 'Issues with **low impact**.',
   *     name: 'Minor',
   *     rank: 1,
   *   },
   * );
   * ```
   */
  update(
    id: string,
    body: SeverityUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SeverityUpdateResponse> {
    return this._client.put(path`/v1/severities/${id}`, { body, ...options });
  }

  /**
   * List all incident severities for an organisation.
   *
   * @example
   * ```ts
   * const severities = await client.severities.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SeverityListResponse> {
    return this._client.get('/v1/severities', options);
  }

  /**
   * Delete a severity
   *
   * @example
   * ```ts
   * await client.severities.delete(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/severities/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SeverityV1 {
  /**
   * Unique identifier of the severity
   */
  id: string;

  /**
   * When the action was created
   */
  created_at: string;

  /**
   * Description of the severity
   */
  description: string;

  /**
   * Human readable name of the severity
   */
  name: string;

  /**
   * Rank to help sort severities (lower numbers are less severe)
   */
  rank: number;

  /**
   * When the action was last updated
   */
  updated_at: string;
}

export interface SeverityCreateResponse {
  severity: SeverityV1;
}

export interface SeverityRetrieveResponse {
  severity: SeverityV1;
}

export interface SeverityUpdateResponse {
  severity: SeverityV1;
}

export interface SeverityListResponse {
  severities: Array<SeverityV1>;
}

export interface SeverityCreateParams {
  /**
   * Description of the severity
   */
  description: string;

  /**
   * Human readable name of the severity
   */
  name: string;

  /**
   * Rank to help sort severities (lower numbers are less severe)
   */
  rank?: number;
}

export interface SeverityUpdateParams {
  /**
   * Description of the severity
   */
  description: string;

  /**
   * Human readable name of the severity
   */
  name: string;

  /**
   * Rank to help sort severities (lower numbers are less severe)
   */
  rank?: number;
}

export declare namespace Severities {
  export {
    type SeverityV1 as SeverityV1,
    type SeverityCreateResponse as SeverityCreateResponse,
    type SeverityRetrieveResponse as SeverityRetrieveResponse,
    type SeverityUpdateResponse as SeverityUpdateResponse,
    type SeverityListResponse as SeverityListResponse,
    type SeverityCreateParams as SeverityCreateParams,
    type SeverityUpdateParams as SeverityUpdateParams,
  };
}
