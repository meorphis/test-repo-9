// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Actions extends APIResource {
  /**
   * Revoke a user's membership of a private incident
   *
   * @example
   * ```ts
   * await client.incidentMemberships.actions.revoke({
   *   incident_id: '01FCNDV6P870EA6S7TK1DSYD5H',
   *   user_id: '01FCQSP07Z74QMMYPDDGQB9FTG',
   * });
   * ```
   */
  revoke(body: ActionRevokeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/incident_memberships/actions/revoke', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ActionRevokeParams {
  /**
   * Revoke memberships to incident
   */
  incident_id: string;

  user_id: string;
}

export declare namespace Actions {
  export { type ActionRevokeParams as ActionRevokeParams };
}
