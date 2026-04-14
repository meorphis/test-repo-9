// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { IncidentIo4 } from '../client';

export abstract class APIResource {
  protected _client: IncidentIo4;

  constructor(client: IncidentIo4) {
    this._client = client;
  }
}
