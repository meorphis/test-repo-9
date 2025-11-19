// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { IncidentIo2 } from '../client';

export abstract class APIResource {
  protected _client: IncidentIo2;

  constructor(client: IncidentIo2) {
    this._client = client;
  }
}
