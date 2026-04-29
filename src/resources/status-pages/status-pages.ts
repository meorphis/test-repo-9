// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IncidentsAPI from './incidents';
import {
  IncidentListResponseIncidentsParams,
  IncidentListResponseIncidentsResponse,
  Incidents,
} from './incidents';

export class StatusPages extends APIResource {
  incidents: IncidentsAPI.Incidents = new IncidentsAPI.Incidents(this._client);
}

StatusPages.Incidents = Incidents;

export declare namespace StatusPages {
  export {
    Incidents as Incidents,
    type IncidentListResponseIncidentsResponse as IncidentListResponseIncidentsResponse,
    type IncidentListResponseIncidentsParams as IncidentListResponseIncidentsParams,
  };
}
