// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IncidentsAPI from './incidents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Create and read incidents.
 *
 * Incidents are a core resource, on which many other resources (actions, etc) are created.
 *
 * Care should be taken around these endpoints, as automation that creates duplicate
 * incidents can be distracting, and impact reporting.
 */
export class Actions extends APIResource {
  /**
   * Edit an existing incident.
   *
   * This endpoint allows you to edit the properties of an existing incident: e.g.
   * set the severity or update custom fields.
   *
   * When using this endpoint, only fields that are provided will be edited (omitted
   * fields will be ignored).
   *
   * @example
   * ```ts
   * const response = await client.incidents.actions.edit('01G18REBY9AYH6CMWCJ2CVCYCH', {
   *   incident: {
   *     call_url: 'https://zoom.us/foo',
   *     custom_field_entries: [
   *       { ... },
   *     ],
   *     incident_role_assignments: [
   *       { ... },
   *     ],
   *     incident_status_id: 'abc123',
   *     incident_timestamp_values: [
   *       { ... },
   *     ],
   *     name: 'Our database is sad',
   *     severity_id: '01G0J1EXE7AXZ2C93K61WBPYEH',
   *     slack_channel_name_override: 'inc-123-database-down',
   *     summary: "Our database is really really sad, and we don't know why yet.",
   *   },
   *   notify_incident_channel: true,
   * });
   * ```
   */
  edit(id: string, body: ActionEditParams, options?: RequestOptions): APIPromise<ActionEditResponse> {
    return this._client.post(path`/v2/incidents/${id}/actions/edit`, { body, ...options });
  }
}

export interface ActionEditResponse {
  incident: IncidentsAPI.IncidentV2;
}

export interface ActionEditParams {
  incident: ActionEditParams.Incident;

  /**
   * Should we send Slack channel notifications to inform responders of this update?
   * Note that this won't work if the Slack channel has already been archived.
   */
  notify_incident_channel: boolean;
}

export namespace ActionEditParams {
  export interface Incident {
    /**
     * The call URL attached to this incident
     */
    call_url?: string;

    /**
     * Set the incident's custom fields to these values
     */
    custom_field_entries?: Array<IncidentsAPI.CustomFieldEntryPayload>;

    /**
     * Assign incident roles to these people
     */
    incident_role_assignments?: Array<IncidentsAPI.IncidentRoleAssignmentPayload>;

    /**
     * Incident status to change incident to (you can only change an incident from one
     * active status to another, any other lifecycle changes must be taken via the
     * app.)
     */
    incident_status_id?: string;

    /**
     * Assign the incident's timestamps to these values
     */
    incident_timestamp_values?: Array<IncidentsAPI.IncidentTimestampValuePayload>;

    /**
     * Explanation of the incident
     */
    name?: string;

    /**
     * The ID of the current severity of this incident
     */
    severity_id?: string;

    /**
     * Override the name of the incident Slack channel
     */
    slack_channel_name_override?: string;

    /**
     * Detailed description of the incident
     */
    summary?: string;
  }
}

export declare namespace Actions {
  export { type ActionEditResponse as ActionEditResponse, type ActionEditParams as ActionEditParams };
}
