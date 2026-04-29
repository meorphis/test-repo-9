// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class CatalogResources extends APIResource {
  /**
   * List available engine resources for the catalog.
   *
   * A resource represents a type of data that can be held within the catalog, so
   * this endpoint can be used to see what attribute types can be used when updating
   * the schema of a catalog type.
   *
   * @deprecated
   */
  listV2(options?: RequestOptions): APIPromise<CatalogResourceListV2Response> {
    return this._client.get('/v2/catalog_resources', options);
  }

  /**
   * List available engine resources for the catalog.
   *
   * A resource represents a type of data that can be held within the catalog, so
   * this endpoint can be used to see what attribute types can be used when updating
   * the schema of a catalog type.
   *
   * @example
   * ```ts
   * const response = await client.catalogResources.listV3();
   * ```
   */
  listV3(options?: RequestOptions): APIPromise<CatalogResourceListV3Response> {
    return this._client.get('/v3/catalog_resources', options);
  }
}

export interface CatalogResourceListV2Response {
  resources: Array<CatalogResourceListV2Response.Resource>;
}

export namespace CatalogResourceListV2Response {
  export interface Resource {
    /**
     * Which category of resource
     */
    category: 'primitive' | 'custom' | 'external';

    /**
     * Human readable description for this resource
     */
    description: string;

    /**
     * Label for this catalog resource type
     */
    label: string;

    /**
     * Catalog type name for this resource
     */
    type: string;

    /**
     * Documentation for the literal string value of this resource
     */
    value_docstring: string;
  }
}

export interface CatalogResourceListV3Response {
  resources: Array<CatalogResourceListV3Response.Resource>;
}

export namespace CatalogResourceListV3Response {
  export interface Resource {
    /**
     * Which category of resource
     */
    category: 'primitive' | 'custom' | 'external';

    /**
     * Human readable description for this resource
     */
    description: string;

    /**
     * Label for this catalog resource type
     */
    label: string;

    /**
     * Catalog type name for this resource
     */
    type: string;

    /**
     * Documentation for the literal string value of this resource
     */
    value_docstring: string;
  }
}

export declare namespace CatalogResources {
  export {
    type CatalogResourceListV2Response as CatalogResourceListV2Response,
    type CatalogResourceListV3Response as CatalogResourceListV3Response,
  };
}
