// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Miscelaneous utility endpoints.
 *
 * Collection of utility functions that can help build integrations against this API.
 */
export class Identity extends APIResource {
  /**
   * Test if your API key is valid, and which roles it has.
   *
   * @example
   * ```ts
   * const identity = await client.identity.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<IdentityRetrieveResponse> {
    return this._client.get('/v1/identity', options);
  }
}

export interface IdentityRetrieveResponse {
  identity: IdentityRetrieveResponse.Identity;
}

export namespace IdentityRetrieveResponse {
  export interface Identity {
    /**
     * The dashboard URL for this organisation
     */
    dashboard_url: string;

    /**
     * The name assigned to the current API Key
     */
    name: string;

    /**
     * Which roles have been enabled for this key
     */
    roles: Array<
      | 'viewer'
      | 'incident_creator'
      | 'incident_editor'
      | 'manage_settings'
      | 'global_access'
      | 'catalog_viewer'
      | 'catalog_editor'
      | 'incident_memberships_editor'
      | 'schedules_editor'
      | 'schedules_reader'
      | 'schedule_overrides_editor'
      | 'workflows_editor'
      | 'private_workflows_editor'
      | 'on_call_editor'
      | 'escalation_creator'
      | 'post_incident_flow_opt_out'
      | 'security_settings_editor'
      | 'investigation_download'
    >;
  }
}

export declare namespace Identity {
  export { type IdentityRetrieveResponse as IdentityRetrieveResponse };
}
