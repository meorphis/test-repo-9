// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from '../actions';
import * as IncidentMembershipsActionsAPI from './actions';
import { ActionRevokeParams, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class IncidentMemberships extends APIResource {
  actions: IncidentMembershipsActionsAPI.Actions = new IncidentMembershipsActionsAPI.Actions(this._client);

  /**
   * Makes a user a member of a private incident
   *
   * @example
   * ```ts
   * const incidentMembership =
   *   await client.incidentMemberships.create({
   *     incident_id: '01ET65M7ZADYFCKD4K1AE2QNMC',
   *     user_id: '01FCQSP07Z74QMMYPDDGQB9FTG',
   *   });
   * ```
   */
  create(
    body: IncidentMembershipCreateParams,
    options?: RequestOptions,
  ): APIPromise<IncidentMembershipCreateResponse> {
    return this._client.post('/v1/incident_memberships', { body, ...options });
  }
}

export interface IncidentMembershipCreateResponse {
  incident_membership: IncidentMembershipCreateResponse.IncidentMembership;
}

export namespace IncidentMembershipCreateResponse {
  export interface IncidentMembership {
    /**
     * Unique identifier of this incident membership
     */
    id: string;

    /**
     * When the membership was created
     */
    created_at: string;

    /**
     * Unique identifier of the incident
     */
    incident_id: string;

    /**
     * When the membership was last updated
     */
    updated_at: string;

    user: ActionsAPI.UserV1;
  }
}

export interface IncidentMembershipCreateParams {
  incident_id: string;

  user_id: string;
}

IncidentMemberships.Actions = Actions;

export declare namespace IncidentMemberships {
  export {
    type IncidentMembershipCreateResponse as IncidentMembershipCreateResponse,
    type IncidentMembershipCreateParams as IncidentMembershipCreateParams,
  };

  export { Actions as Actions, type ActionRevokeParams as ActionRevokeParams };
}
