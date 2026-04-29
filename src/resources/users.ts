// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AlertRoutesAPI from './alert-routes';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * View users.
 *
 * Users all have a single base role, and can be assigned multiple custom roles. They can be managed via your Slack workspace or SAML provider.
 */
export class Users extends APIResource {
  /**
   * Get a single user.
   *
   * @example
   * ```ts
   * const user = await client.users.retrieve(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/v2/users/${id}`, options);
  }

  /**
   * List users in your account.
   *
   * @example
   * ```ts
   * const users = await client.users.list();
   * ```
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    return this._client.get('/v2/users', { query, ...options });
  }
}

export interface RbacRole {
  /**
   * Unique identifier of the RBAC role
   */
  id: string;

  /**
   * Name of the RBAC role
   */
  name: string;

  /**
   * Unique human-readable slug for the RBAC role
   */
  slug: string;

  /**
   * Description of the purpose for the RBAC role
   */
  description?: string;
}

export interface UserWithRoles {
  /**
   * Unique identifier of the user
   */
  id: string;

  base_role: RbacRole;

  custom_roles: Array<RbacRole>;

  /**
   * Name of the user
   */
  name: string;

  /**
   * DEPRECATED: Role of the user as of March 9th 2023, this value is no longer
   * updated.
   */
  role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset';

  /**
   * Email address of the user.
   */
  email?: string;

  /**
   * Slack ID of the user
   */
  slack_user_id?: string;
}

export interface UserRetrieveResponse {
  user: UserWithRoles;
}

export interface UserListResponse {
  pagination_meta: AlertRoutesAPI.PaginationMetaResult;

  users: Array<UserWithRoles>;
}

export interface UserListParams {
  /**
   * An record's ID. This endpoint will return a list of records after this ID in
   * relation to the API response order.
   */
  after?: string;

  /**
   * Filter by email address
   */
  email?: string;

  /**
   * Integer number of records to return
   */
  page_size?: number;

  /**
   * Filter by Slack user ID
   */
  slack_user_id?: string;
}

export declare namespace Users {
  export {
    type RbacRole as RbacRole,
    type UserWithRoles as UserWithRoles,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserListResponse as UserListResponse,
    type UserListParams as UserListParams,
  };
}
