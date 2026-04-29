// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CatalogEntriesAPI from '../catalog-entries';
import { APIPromise } from '../../core/api-promise';
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
export class Actions extends APIResource {
  /**
   * Update an existing catalog types schema, adding or removing attributes.
   *
   * Updating the schema is handled separately from creating and updating types, so
   * that you don't have to worry about dependencies between types. For example, if
   * type A has an attribute that relies on type B, you would have to create type B
   * first.
   *
   * By allowing the creation of types without a schema, they can be created in any
   * order, but it means that you need to make a separate call to this endpoint to
   * update the schema.
   *
   * @example
   * ```ts
   * const response =
   *   await client.catalogTypes.actions.updateSchema(
   *     '01FCNDV6P870EA6S7TK1DSYDG0',
   *     {
   *       attributes: [
   *         {
   *           array: false,
   *           backlink_attribute: 'abc123',
   *           id: '01GW2G3V0S59R238FAHPDS1R66',
   *           mode: '',
   *           name: 'tier',
   *           path: [{ attribute_id: 'abc123' }],
   *           type: 'Custom["Service"]',
   *         },
   *       ],
   *       version: 1,
   *     },
   *   );
   * ```
   */
  updateSchema(
    id: string,
    body: ActionUpdateSchemaParams,
    options?: RequestOptions,
  ): APIPromise<ActionUpdateSchemaResponse> {
    return this._client.post(path`/v3/catalog_types/${id}/actions/update_schema`, { body, ...options });
  }
}

export interface ActionUpdateSchemaResponse {
  catalog_type: CatalogEntriesAPI.CatalogTypeV3;
}

export interface ActionUpdateSchemaParams {
  attributes: Array<ActionUpdateSchemaParams.Attribute>;

  version: number;
}

export namespace ActionUpdateSchemaParams {
  export interface Attribute {
    /**
     * Whether this attribute is an array
     */
    array: boolean;

    /**
     * Unique name of this attribute
     */
    name: string;

    /**
     * Catalog type name for this attribute
     */
    type: string;

    /**
     * The ID of this attribute
     */
    id?: string;

    /**
     * The attribute to use (if this is a backlink)
     */
    backlink_attribute?: string;

    /**
     * Controls how this attribute is modified
     */
    mode?: '' | 'api' | 'dashboard' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path';

    /**
     * The path to use (if this is an path)
     */
    path?: Array<Attribute.Path>;
  }

  export namespace Attribute {
    export interface Path {
      /**
       * the ID of the attribute to use
       */
      attribute_id: string;
    }
  }
}

export declare namespace Actions {
  export {
    type ActionUpdateSchemaResponse as ActionUpdateSchemaResponse,
    type ActionUpdateSchemaParams as ActionUpdateSchemaParams,
  };
}
