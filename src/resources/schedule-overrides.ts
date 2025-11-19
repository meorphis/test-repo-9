// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ActionsAPI from './actions';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ScheduleOverrides extends APIResource {
  /**
   * Create a new schedule override.
   *
   * @example
   * ```ts
   * const scheduleOverride =
   *   await client.scheduleOverrides.create({
   *     end_at: '2021-08-17T14:00:00.000000Z',
   *     layer_id: '01G0J1EXE7AXZ2C93K61WBPYNH',
   *     rotation_id: '01G0J1EXE7AXZ2C93K61WBPYEH',
   *     schedule_id: '01G0J1EXE7AXZ2C93K61WBPYEH',
   *     start_at: '2021-08-17T13:00:00.000000Z',
   *     user: {
   *       email: 'bob@example.com',
   *       id: '01G0J1EXE7AXZ2C93K61WBPYEH',
   *       slack_user_id: 'USER123',
   *     },
   *   });
   * ```
   */
  create(
    body: ScheduleOverrideCreateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleOverrideCreateResponse> {
    return this._client.post('/v2/schedule_overrides', { body, ...options });
  }
}

export interface UserReferencePayloadV2 {
  /**
   * The incident.io ID of a user
   */
  id?: string;

  /**
   * The user's email address, matching the email on their Slack account
   */
  email?: string;

  /**
   * The ID of the user's Slack account.
   */
  slack_user_id?: string;
}

export interface ScheduleOverrideCreateResponse {
  override: ScheduleOverrideCreateResponse.Override;
}

export namespace ScheduleOverrideCreateResponse {
  export interface Override {
    /**
     * Unique internal ID of the schedule override
     */
    id: string;

    created_at: string;

    /**
     * End of the override
     */
    end_at: string;

    /**
     * The layer on the rotation on the schedule that this override applies to
     */
    layer_id: string;

    /**
     * The rotation on the schedule that this override applies to
     */
    rotation_id: string;

    /**
     * The schedule that this override applies to
     */
    schedule_id: string;

    /**
     * Start of the override
     */
    start_at: string;

    updated_at: string;

    user?: ActionsAPI.UserV2;
  }
}

export interface ScheduleOverrideCreateParams {
  /**
   * End time of the override
   */
  end_at: string;

  /**
   * The layer this override applies to
   */
  layer_id: string;

  /**
   * The rotation this override applies to
   */
  rotation_id: string;

  /**
   * The schedule this override applies to
   */
  schedule_id: string;

  /**
   * Start time of the override
   */
  start_at: string;

  user: UserReferencePayloadV2;
}

export declare namespace ScheduleOverrides {
  export {
    type UserReferencePayloadV2 as UserReferencePayloadV2,
    type ScheduleOverrideCreateResponse as ScheduleOverrideCreateResponse,
    type ScheduleOverrideCreateParams as ScheduleOverrideCreateParams,
  };
}
