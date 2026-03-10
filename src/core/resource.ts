// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { IncidentIo3 } from '../client';

export abstract class APIResource {
  protected _client: IncidentIo3;

  constructor(client: IncidentIo3) {
    this._client = client;
  }
}
