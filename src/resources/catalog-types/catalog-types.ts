// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CatalogEntriesAPI from '../catalog-entries';
import * as ActionsAPI from './actions';
import { ActionUpdateSchemaParams, ActionUpdateSchemaResponse, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CatalogTypes extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Create a catalog type. The schema must be updated using the UpdateTypeSchema
   * endpoint.
   *
   * @example
   * ```ts
   * const catalogType = await client.catalogTypes.create({
   *   description:
   *     'Represents Kubernetes clusters that we run inside of GKE.',
   *   name: 'Kubernetes Cluster',
   *   annotations: {
   *     'incident.io/catalog-importer/id': 'id-of-config',
   *   },
   *   categories: ['customer'],
   *   color: 'yellow',
   *   icon: 'alert',
   *   ranked: true,
   *   source_repo_url:
   *     'https://github.com/my-company/incident-io-catalog',
   *   type_name: 'Custom["BackstageGroup"]',
   *   use_name_as_identifier: true,
   * });
   * ```
   */
  create(body: CatalogTypeCreateParams, options?: RequestOptions): APIPromise<CatalogTypeCreateResponse> {
    return this._client.post('/v3/catalog_types', { body, ...options });
  }

  /**
   * Show a single catalog type.
   *
   * @example
   * ```ts
   * const catalogType = await client.catalogTypes.retrieve(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CatalogTypeRetrieveResponse> {
    return this._client.get(path`/v3/catalog_types/${id}`, options);
  }

  /**
   * Updates an existing catalog type. The schema must be updated using the
   * UpdateTypeSchema endpoint.
   *
   * @example
   * ```ts
   * const catalogType = await client.catalogTypes.update(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   *   {
   *     description:
   *       'Represents Kubernetes clusters that we run inside of GKE.',
   *     name: 'Kubernetes Cluster',
   *     annotations: {
   *       'incident.io/catalog-importer/id': 'id-of-config',
   *     },
   *     categories: ['customer'],
   *     color: 'yellow',
   *     icon: 'alert',
   *     ranked: true,
   *     source_repo_url:
   *       'https://github.com/my-company/incident-io-catalog',
   *     use_name_as_identifier: true,
   *   },
   * );
   * ```
   */
  update(
    id: string,
    body: CatalogTypeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CatalogTypeUpdateResponse> {
    return this._client.put(path`/v3/catalog_types/${id}`, { body, ...options });
  }

  /**
   * List all catalog types for an organisation, including those synced from external
   * resources.
   *
   * @example
   * ```ts
   * const catalogTypes = await client.catalogTypes.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<CatalogTypeListResponse> {
    return this._client.get('/v3/catalog_types', options);
  }

  /**
   * Archives a catalog type and associated entries.
   *
   * @example
   * ```ts
   * await client.catalogTypes.destroy(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  destroy(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v3/catalog_types/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CatalogTypeCreateResponse {
  catalog_type: CatalogEntriesAPI.CatalogTypeV3;
}

export interface CatalogTypeRetrieveResponse {
  catalog_type: CatalogEntriesAPI.CatalogTypeV3;
}

export interface CatalogTypeUpdateResponse {
  catalog_type: CatalogEntriesAPI.CatalogTypeV3;
}

export interface CatalogTypeListResponse {
  catalog_types: Array<CatalogEntriesAPI.CatalogTypeV3>;
}

export interface CatalogTypeCreateParams {
  /**
   * Human readble description of this type
   */
  description: string;

  /**
   * Name is the human readable name of this type
   */
  name: string;

  /**
   * Annotations that can track metadata about this type
   */
  annotations?: { [key: string]: string };

  /**
   * What categories is this type considered part of
   */
  categories?: Array<
    'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'
  >;

  /**
   * Sets the display color of this type in the dashboard
   */
  color?: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange';

  /**
   * Sets the display icon of this type in the dashboard
   */
  icon?:
    | 'alert'
    | 'bolt'
    | 'box'
    | 'briefcase'
    | 'browser'
    | 'bulb'
    | 'calendar'
    | 'clock'
    | 'cog'
    | 'components'
    | 'database'
    | 'doc'
    | 'email'
    | 'escalation-path'
    | 'files'
    | 'flag'
    | 'folder'
    | 'globe'
    | 'money'
    | 'server'
    | 'severity'
    | 'status-page'
    | 'store'
    | 'star'
    | 'tag'
    | 'user'
    | 'users';

  /**
   * If this type should be ranked
   */
  ranked?: boolean;

  /**
   * The url of the external repository where this type is managed
   */
  source_repo_url?: string;

  /**
   * The type name of this catalog type, to be used when defining attributes. This is
   * immutable once a CatalogType has been created. For non-externally sync types, it
   * must follow the pattern Custom["SomeName"]
   */
  type_name?: string;

  /**
   * If enabled, you can refer to entries of this type by their name, as well as
   * their external ID and any aliases.
   */
  use_name_as_identifier?: boolean;
}

export interface CatalogTypeUpdateParams {
  /**
   * Human readble description of this type
   */
  description: string;

  /**
   * Name is the human readable name of this type
   */
  name: string;

  /**
   * Annotations that can track metadata about this type
   */
  annotations?: { [key: string]: string };

  /**
   * What categories is this type considered part of
   */
  categories?: Array<
    'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'
  >;

  /**
   * Sets the display color of this type in the dashboard
   */
  color?: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange';

  /**
   * Sets the display icon of this type in the dashboard
   */
  icon?:
    | 'alert'
    | 'bolt'
    | 'box'
    | 'briefcase'
    | 'browser'
    | 'bulb'
    | 'calendar'
    | 'clock'
    | 'cog'
    | 'components'
    | 'database'
    | 'doc'
    | 'email'
    | 'escalation-path'
    | 'files'
    | 'flag'
    | 'folder'
    | 'globe'
    | 'money'
    | 'server'
    | 'severity'
    | 'status-page'
    | 'store'
    | 'star'
    | 'tag'
    | 'user'
    | 'users';

  /**
   * If this type should be ranked
   */
  ranked?: boolean;

  /**
   * The url of the external repository where this type is managed
   */
  source_repo_url?: string;

  /**
   * If enabled, you can refer to entries of this type by their name, as well as
   * their external ID and any aliases.
   */
  use_name_as_identifier?: boolean;
}

CatalogTypes.Actions = Actions;

export declare namespace CatalogTypes {
  export {
    type CatalogTypeCreateResponse as CatalogTypeCreateResponse,
    type CatalogTypeRetrieveResponse as CatalogTypeRetrieveResponse,
    type CatalogTypeUpdateResponse as CatalogTypeUpdateResponse,
    type CatalogTypeListResponse as CatalogTypeListResponse,
    type CatalogTypeCreateParams as CatalogTypeCreateParams,
    type CatalogTypeUpdateParams as CatalogTypeUpdateParams,
  };

  export {
    Actions as Actions,
    type ActionUpdateSchemaResponse as ActionUpdateSchemaResponse,
    type ActionUpdateSchemaParams as ActionUpdateSchemaParams,
  };
}
