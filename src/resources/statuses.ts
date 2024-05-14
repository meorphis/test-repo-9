// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as StatusesAPI from './statuses';

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
