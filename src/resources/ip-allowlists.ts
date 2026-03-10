// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Manage the IP allowlist.
 *
 * When enabled, the IP allowlist restricts authenticated traffic from the dashboard, public API and mobile app.
 */
export class IPAllowlists extends APIResource {
  /**
   * Show the IP allowlist for your organisation
   *
   * @example
   * ```ts
   * const ipAllowlist = await client.ipAllowlists.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<IPAllowlistRetrieveResponse> {
    return this._client.get('/v1/ip_allowlists', options);
  }

  /**
   * Update the IP allowlist for your organisation
   *
   * @example
   * ```ts
   * const ipAllowlist = await client.ipAllowlists.update({
   *   allowlist: [{ label: 'London HQ', value: '192.0.2.0' }],
   *   enabled: true,
   *   version: 1,
   * });
   * ```
   */
  update(body: IPAllowlistUpdateParams, options?: RequestOptions): APIPromise<IPAllowlistUpdateResponse> {
    return this._client.put('/v1/ip_allowlists', { body, ...options });
  }
}

export interface IPAllowlist {
  /**
   * A list of IP addresses or CIDR prefixes to allow
   */
  allowlist: Array<IPAllowlistItem>;

  /**
   * Whether this IP allowlist is enabled or not
   */
  enabled: boolean;

  /**
   * The version of this IP allowlist
   */
  version: number;

  /**
   * The time this allowlist was last updated
   */
  updated_at?: string;
}

export interface IPAllowlistItem {
  /**
   * An IP address or a CIDR IP prefix to allow
   */
  value: string;

  /**
   * A label to help identify this IP or prefix
   */
  label?: string;
}

export interface IPAllowlistRetrieveResponse {
  ip_allowlist: IPAllowlist;
}

export interface IPAllowlistUpdateResponse {
  ip_allowlist: IPAllowlist;
}

export interface IPAllowlistUpdateParams {
  /**
   * A list of IP addresses or CIDR prefixes to allow
   */
  allowlist: Array<IPAllowlistItem>;

  /**
   * Whether this IP allowlist is enabled or not
   */
  enabled: boolean;

  /**
   * The version of this IP allowlist
   */
  version: number;
}

export declare namespace IPAllowlists {
  export {
    type IPAllowlist as IPAllowlist,
    type IPAllowlistItem as IPAllowlistItem,
    type IPAllowlistRetrieveResponse as IPAllowlistRetrieveResponse,
    type IPAllowlistUpdateResponse as IPAllowlistUpdateResponse,
    type IPAllowlistUpdateParams as IPAllowlistUpdateParams,
  };
}
