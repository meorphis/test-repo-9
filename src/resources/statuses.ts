// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'test3/core';
import { APIResource } from 'test3/resource';
import * as StatusesAPI from 'test3/resources/statuses';

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
