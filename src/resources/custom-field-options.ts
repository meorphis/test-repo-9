// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage custom field options.
 *
 * Single- and multi-select custom fields have a list of all available options,
 * which have a value, and a sort key. The value must be unique to the custom
 * field. For example, you might have an Incident Type custom field, with options
 * "Data breach", "Performance degradation", "API downtime", etc.
 */
export class CustomFieldOptions extends APIResource {
  /**
   * Show custom field options for a custom field
   *
   * @example
   * ```ts
   * const customFieldOptions =
   *   await client.customFieldOptions.list({
   *     custom_field_id: '01FCNDV6P870EA6S7TK1DSYD5H',
   *   });
   * ```
   */
  list(
    query: CustomFieldOptionListParams,
    options?: RequestOptions,
  ): APIPromise<CustomFieldOptionListResponse> {
    return this._client.get('/v1/custom_field_options', { query, ...options });
  }

  /**
   * Create a custom field option. If the sort key is not supplied, it'll default to
   * 1000, so the option appears near the end of the list.
   *
   * @example
   * ```ts
   * const customFieldOption =
   *   await client.customFieldOptions.create({
   *     custom_field_id: '01FCNDV6P870EA6S7TK1DSYDG0',
   *     value: 'Product',
   *     sort_key: 10,
   *   });
   * ```
   */
  create(
    body: CustomFieldOptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<CustomFieldOptionCreateResponse> {
    return this._client.post('/v1/custom_field_options', { body, ...options });
  }

  /**
   * Delete a custom field option
   *
   * @example
   * ```ts
   * await client.customFieldOptions.delete(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/custom_field_options/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a single custom field option
   *
   * @example
   * ```ts
   * const customFieldOption =
   *   await client.customFieldOptions.retrieve(
   *     '01FCNDV6P870EA6S7TK1DSYDG0',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CustomFieldOptionRetrieveResponse> {
    return this._client.get(path`/v1/custom_field_options/${id}`, options);
  }

  /**
   * Update a custom field option
   *
   * @example
   * ```ts
   * const customFieldOption =
   *   await client.customFieldOptions.update(
   *     '01FCNDV6P870EA6S7TK1DSYDG0',
   *     { sort_key: 10, value: 'Product' },
   *   );
   * ```
   */
  update(
    id: string,
    body: CustomFieldOptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomFieldOptionUpdateResponse> {
    return this._client.put(path`/v1/custom_field_options/${id}`, { body, ...options });
  }
}

export interface CustomFieldOptionV1 {
  /**
   * Unique identifier for the custom field option
   */
  id: string;

  /**
   * ID of the custom field this option belongs to
   */
  custom_field_id: string;

  /**
   * Sort key used to order the custom field options correctly
   */
  sort_key: number;

  /**
   * Human readable name for the custom field option
   */
  value: string;
}

export interface PaginationMeta {
  /**
   * What was the maximum number of results requested
   */
  page_size: number;

  /**
   * If provided, pass this as the 'after' param to load the next page
   */
  after?: string;
}

export interface CustomFieldOptionCreateResponse {
  custom_field_option: CustomFieldOptionV1;
}

export interface CustomFieldOptionRetrieveResponse {
  custom_field_option: CustomFieldOptionV1;
}

export interface CustomFieldOptionUpdateResponse {
  custom_field_option: CustomFieldOptionV1;
}

export interface CustomFieldOptionListResponse {
  custom_field_options: Array<CustomFieldOptionV1>;

  pagination_meta: PaginationMeta;
}

export interface CustomFieldOptionListParams {
  /**
   * The custom field to list options for.
   */
  custom_field_id: string;

  /**
   * A custom field option's ID. This endpoint will return a list of custom field
   * options created after this option.
   */
  after?: string;

  /**
   * Integer number of records to return
   */
  page_size?: number;
}

export interface CustomFieldOptionCreateParams {
  /**
   * ID of the custom field this option belongs to
   */
  custom_field_id: string;

  /**
   * Human readable name for the custom field option
   */
  value: string;

  /**
   * Sort key used to order the custom field options correctly
   */
  sort_key?: number;
}

export interface CustomFieldOptionUpdateParams {
  /**
   * Sort key used to order the custom field options correctly
   */
  sort_key: number;

  /**
   * Human readable name for the custom field option
   */
  value: string;
}

export declare namespace CustomFieldOptions {
  export {
    type CustomFieldOptionV1 as CustomFieldOptionV1,
    type PaginationMeta as PaginationMeta,
    type CustomFieldOptionCreateResponse as CustomFieldOptionCreateResponse,
    type CustomFieldOptionRetrieveResponse as CustomFieldOptionRetrieveResponse,
    type CustomFieldOptionUpdateResponse as CustomFieldOptionUpdateResponse,
    type CustomFieldOptionListResponse as CustomFieldOptionListResponse,
    type CustomFieldOptionListParams as CustomFieldOptionListParams,
    type CustomFieldOptionCreateParams as CustomFieldOptionCreateParams,
    type CustomFieldOptionUpdateParams as CustomFieldOptionUpdateParams,
  };
}
