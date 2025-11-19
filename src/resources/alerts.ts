// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AlertsAPI from './alerts';
import * as AlertAttributesAPI from './alert-attributes';
import * as AlertRoutesAPI from './alert-routes';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Alerts extends APIResource {
  /**
   * Show a single alert for your account
   *
   * @example
   * ```ts
   * const alert = await client.alerts.retrieve(
   *   '01FDAG4SAP5TYPT98WGR2N7W91',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AlertRetrieveResponse> {
    return this._client.get(path`/v2/alerts/${id}`, options);
  }

  /**
   * List all alerts for your account. This endpoint supports a number of filters,
   * which can help find alerts matching certain criteria. These filters work
   * similarly to the filters on the incidents endpoint, where a field is specified
   * alongside a comparison operator in the query string.
   *
   * Note that:
   *
   * - Filters may be used together, and the result will be alerts that match all
   *   filters.
   * - All query parameters must be URI encoded.
   *
   * ### By deduplication_key
   *
   * Find all alerts with deduplication_key ABC:
   *
   *     	curl --get 'https://api.incident.io/v2/alerts' \
   *     		--data 'deduplication_key[is]=ABC'
   *
   * ### By status
   *
   * Find all alerts in a firing state:
   *
   *     	curl --get 'https://api.incident.io/v2/alerts' \
   *     		--data 'status[one_of]=firing'
   *
   * ### By created_at
   *
   * Find all alerts that follow specified date parameters for created_at field.
   * Possible values are "gte" (greater than or equal to), "lte" (less than or equal
   * to), and "date_range" (between two dates). The following example finds all
   * alerts created after 2025-01-01:
   *
   *     	curl --get 'https://api.incident.io/v2/alerts' \
   *     		--data 'created_at[gte]=2025-01-01'
   *
   * To find alerts created within a specific date range, use the date_range option
   * with tilde-separated dates:
   *
   *     	curl --get 'https://api.incident.io/v2/alerts' \
   *     		--data 'created_at[date_range]=2024-12-02~2024-12-08'
   *
   * @example
   * ```ts
   * const alerts = await client.alerts.list({ page_size: 25 });
   * ```
   */
  list(query: AlertListParams, options?: RequestOptions): APIPromise<AlertListResponse> {
    return this._client.get('/v2/alerts', { query, ...options });
  }
}

export interface AlertAttributeValueV2 {
  catalog_entry?: AlertAttributeValueV2.CatalogEntry;

  /**
   * The human readable label of this value for convenience. Will match the literal
   * if this is a primitive type, or be the name of the catalog entry if this is a
   * catalog entry
   */
  label?: string;

  /**
   * If set, this is the literal value of the step parameter
   */
  literal?: string;
}

export namespace AlertAttributeValueV2 {
  export interface CatalogEntry {
    /**
     * ID of this catalog entry
     */
    id: string;

    /**
     * ID of this catalog type
     */
    catalog_type_id: string;

    /**
     * Name is the human readable name of this entry
     */
    name: string;
  }
}

export interface AlertV2 {
  /**
   * The ID of this alert
   */
  id: string;

  /**
   * The ID of the alert source this alert fired on
   */
  alert_source_id: string;

  /**
   * Attribute values parsed from the alerts payload
   */
  attributes: Array<AlertV2.Attribute>;

  /**
   * When this entry was created
   */
  created_at: string;

  /**
   * A deduplication key which uniquely references this alert from your alert source.
   * For newly created HTTP sources, this field is required. If you send an event
   * with the same deduplication_key multiple times, only one alert will be created
   * in incident.io for this alert source config. You can filter on this field to
   * find the alert created by an event you've sent us.
   */
  deduplication_key: string;

  /**
   * Statuses of an alert
   */
  status: 'firing' | 'resolved';

  /**
   * The title of the alert, parsed from the alert payload according to the alert
   * source configuration
   */
  title: string;

  /**
   * When this alert was last updated
   */
  updated_at: string;

  /**
   * The description of the alert
   */
  description?: string;

  /**
   * When this alert was resolved
   */
  resolved_at?: string;

  /**
   * If applicable, a link to the alert in the upstream system
   */
  source_url?: string;
}

export namespace AlertV2 {
  export interface Attribute {
    attribute: AlertAttributesAPI.AlertAttributeV2;

    /**
     * The value of the attribute if it is an array
     */
    array_value?: Array<AlertsAPI.AlertAttributeValueV2>;

    value?: AlertsAPI.AlertAttributeValueV2;
  }
}

export interface AlertRetrieveResponse {
  alert: AlertV2;
}

export interface AlertListResponse {
  alerts: Array<AlertV2>;

  pagination_meta: AlertRoutesAPI.PaginationMetaResult;
}

export interface AlertListParams {
  /**
   * Number of alerts to return per page
   */
  page_size: number;

  /**
   * If provided, pass this as the 'after' param to load the next page
   */
  after?: string;

  /**
   * Filter on alert created at timestamp. Accepted operators are 'gte', 'lte' and
   * 'date_range'.
   */
  created_at?: { [key: string]: Array<string> };

  /**
   * Filter on alert deduplication key. The accepted operator is 'is'.
   */
  deduplication_key?: { [key: string]: Array<string> };

  /**
   * Filter on alert status. The accepted operators are 'one_of', or 'not_in'.
   */
  status?: { [key: string]: Array<string> };
}

export declare namespace Alerts {
  export {
    type AlertAttributeValueV2 as AlertAttributeValueV2,
    type AlertV2 as AlertV2,
    type AlertRetrieveResponse as AlertRetrieveResponse,
    type AlertListResponse as AlertListResponse,
    type AlertListParams as AlertListParams,
  };
}
