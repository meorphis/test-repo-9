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
export class OpenAPIJson extends APIResource {
  /**
   * Get the OpenAPI (v2) definition.
   *
   * **DEPRECATED**: Please use the OpenAPIV3 endpoint instead. The schema returned
   * from this endpoint does not contain new options and endpoints added in 2025 and
   * later.
   *
   * @deprecated
   */
  retrieve(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/v1/openapi.json', options);
  }
}

export type OpenAPIJsonRetrieveResponse = Uploadable;

export declare namespace OpenAPIJson {
  export { type OpenAPIJsonRetrieveResponse as OpenAPIJsonRetrieveResponse };
}
