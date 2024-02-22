// File generated from our OpenAPI spec by Stainless.

import * as Core from 'meorphis-test/core';
import { APIResource } from 'meorphis-test/resource';
import * as StatusesAPI from 'meorphis-test/resources/statuses';

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
