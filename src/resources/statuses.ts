// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '/core';
import { APIPromise } from '/core';
import { APIResource } from '/resource';
import { isRequestOptions } from '/core';
import { type Response } from '/_shims/index';
import * as StatusesAPI from '/resources/statuses';

export class Statuses extends APIResource {
  /**
   * API status check
   */
  getStatus(options?: Core.RequestOptions): Core.APIPromise<StatusGetStatusResponse> {
    return this._client.get('/status', options);
  }
}

export interface StatusGetStatusResponse {
  message?: string;
}

export namespace Statuses {
  export import StatusGetStatusResponse = StatusesAPI.StatusGetStatusResponse;
}
