// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AlertAttributes extends APIResource {
  /**
   * Create a new alert attribute.
   *
   * @example
   * ```ts
   * const alertAttribute = await client.alertAttributes.create({
   *   array: false,
   *   name: 'service',
   *   type: 'CatalogEntry["01GW2G3V0S59R238FAHPDS1R67"]',
   * });
   * ```
   */
  create(
    body: AlertAttributeCreateParams,
    options?: RequestOptions,
  ): APIPromise<AlertAttributeCreateResponse> {
    return this._client.post('/v2/alert_attributes', { body, ...options });
  }

  /**
   * Show an alert attribute.
   *
   * @example
   * ```ts
   * const alertAttribute =
   *   await client.alertAttributes.retrieve(
   *     '01GW2G3V0S59R238FAHPDS1R66',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AlertAttributeRetrieveResponse> {
    return this._client.get(path`/v2/alert_attributes/${id}`, options);
  }

  /**
   * Update an alert attribute.
   *
   * @example
   * ```ts
   * const alertAttribute = await client.alertAttributes.update(
   *   '01GW2G3V0S59R238FAHPDS1R66',
   *   {
   *     array: false,
   *     name: 'service',
   *     type: 'CatalogEntry["01GW2G3V0S59R238FAHPDS1R67"]',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    body: AlertAttributeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AlertAttributeUpdateResponse> {
    return this._client.put(path`/v2/alert_attributes/${id}`, { body, ...options });
  }

  /**
   * List alert attributes.
   *
   * @example
   * ```ts
   * const alertAttributes = await client.alertAttributes.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<AlertAttributeListResponse> {
    return this._client.get('/v2/alert_attributes', options);
  }

  /**
   * Destroy an alert attribute.
   *
   * @example
   * ```ts
   * await client.alertAttributes.delete(
   *   '01GW2G3V0S59R238FAHPDS1R66',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/alert_attributes/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AlertAttributeV2 {
  /**
   * The ID of this attribute
   */
  id: string;

  /**
   * Whether this attribute is an array
   */
  array: boolean;

  /**
   * Unique name of this attribute
   */
  name: string;

  /**
   * Whether this attribute is required. If this field is not set, the existing
   * setting will be preserved.
   */
  required: boolean;

  /**
   * Engine resource name for this attribute
   */
  type: string;
}

export interface AlertAttributeCreateResponse {
  alert_attribute: AlertAttributeV2;
}

export interface AlertAttributeRetrieveResponse {
  alert_attribute: AlertAttributeV2;
}

export interface AlertAttributeUpdateResponse {
  alert_attribute: AlertAttributeV2;
}

export interface AlertAttributeListResponse {
  alert_attributes: Array<AlertAttributeV2>;
}

export interface AlertAttributeCreateParams {
  /**
   * Whether this attribute is an array
   */
  array: boolean;

  /**
   * Unique name of this attribute
   */
  name: string;

  /**
   * Engine resource name for this attribute
   */
  type: string;

  /**
   * Whether this attribute is required. If this field is not set, the existing
   * setting will be preserved.
   */
  required?: boolean;
}

export interface AlertAttributeUpdateParams {
  /**
   * Whether this attribute is an array
   */
  array: boolean;

  /**
   * Unique name of this attribute
   */
  name: string;

  /**
   * Engine resource name for this attribute
   */
  type: string;

  /**
   * Whether this attribute is required. If this field is not set, the existing
   * setting will be preserved.
   */
  required?: boolean;
}

export declare namespace AlertAttributes {
  export {
    type AlertAttributeV2 as AlertAttributeV2,
    type AlertAttributeCreateResponse as AlertAttributeCreateResponse,
    type AlertAttributeRetrieveResponse as AlertAttributeRetrieveResponse,
    type AlertAttributeUpdateResponse as AlertAttributeUpdateResponse,
    type AlertAttributeListResponse as AlertAttributeListResponse,
    type AlertAttributeCreateParams as AlertAttributeCreateParams,
    type AlertAttributeUpdateParams as AlertAttributeUpdateParams,
  };
}
