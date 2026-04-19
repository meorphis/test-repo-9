// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { IncidentIo13 } from '../client';

export abstract class APIResource {
  protected _client: IncidentIo13;

  constructor(client: IncidentIo13) {
    this._client = client;
  }
}
