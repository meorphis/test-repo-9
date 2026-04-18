// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { IncidentIo7 } from '../client';

export abstract class APIResource {
  protected _client: IncidentIo7;

  constructor(client: IncidentIo7) {
    this._client = client;
  }
}
