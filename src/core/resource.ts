// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { IncidentIo14 } from '../client';

export abstract class APIResource {
  protected _client: IncidentIo14;

  constructor(client: IncidentIo14) {
    this._client = client;
  }
}
