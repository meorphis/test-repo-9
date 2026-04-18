// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { IncidentIo6 } from '../client';

export abstract class APIResource {
  protected _client: IncidentIo6;

  constructor(client: IncidentIo6) {
    this._client = client;
  }
}
