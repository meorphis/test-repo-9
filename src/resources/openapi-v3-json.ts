// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';

/**
 * Miscelaneous utility endpoints.
 *
 * Collection of utility functions that can help build integrations against this API.
 */
export class OpenAPIV3Json extends APIResource {
  /**
   * Get the OpenAPI (v3) definition.
   */
  retrieve(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/v1/openapiV3.json', options);
  }
}

export type OpenAPIV3JsonRetrieveResponse = Uploadable;

export declare namespace OpenAPIV3Json {
  export { type OpenAPIV3JsonRetrieveResponse as OpenAPIV3JsonRetrieveResponse };
}
