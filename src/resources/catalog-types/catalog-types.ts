// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CatalogEntriesAPI from '../catalog-entries';
import * as ActionsAPI from './actions';
import { ActionUpdateSchemaParams, ActionUpdateSchemaResponse, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage and browse catalog resources.
 *
 * Use the incident.io catalog to track services, teams, product features and anything
 * else that helps build a map of your organisation. These different categories of thing
 * become catalog types, and each instance (like a particular service or team) is a
 * catalog entry.
 *
 * Each type is made up of a series of attributes, and each attribute has a type. Types
 * can even have attributes that refer to other catalog types.
 *
 * We automatically create catalog types when you connect an integration, such as GitHub
 * repositories or PagerDuty services and teams. You can use this API to create custom
 * types, that are specifically tailored to your organisation.
 *
 * Examples might be a 'Service' type with an 'Alert channel' which you can point at a
 * Slack channel, or 'Team' which specifies its 'Manager' and 'Technical Lead' as Slack
 * users. You can then use these types to create powerful new workflows.
 *
 * Consider using our official [catalog importer](https://github.com/incident-io/catalog-importer).
 * It can be used to sync catalog data from sources like local files or GitHub and push
 * them into the incident.io catalog without having to directly interact with our public API.
 */
export class CatalogTypes extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

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
