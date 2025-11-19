// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CatalogEntriesAPI from '../catalog-entries';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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
