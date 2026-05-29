// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { IncidentIo16 } from '../client';

export abstract class APIResource {
  protected _client: IncidentIo16;

  constructor(client: IncidentIo16) {
    this._client = client;
  }
}
