// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { IncidentIo5 } from '../client';

export abstract class APIResource {
  protected _client: IncidentIo5;

  constructor(client: IncidentIo5) {
    this._client = client;
  }
}
