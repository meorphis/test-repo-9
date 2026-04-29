// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Create, list and delete incident attachments.
 *
 * Incident Attachments allows you to connect resources from external systems into incidents.
 * Examples include: PagerDuty incidents and GitHub pull requests.
 */
export class IncidentAttachments extends APIResource {
  /**
   * Attaches an external resource to an incident
   *
   * @example
   * ```ts
   * const incidentAttachment =
   *   await client.incidentAttachments.create({
   *     incident_id: '01FDAG4SAP5TYPT98WGR2N7W91',
   *     resource: {
   *       external_id: '123',
   *       resource_type: 'pager_duty_incident',
   *     },
   *   });
   * ```
   */
  create(
    body: IncidentAttachmentCreateParams,
    options?: RequestOptions,
  ): APIPromise<IncidentAttachmentCreateResponse> {
    return this._client.post('/v1/incident_attachments', { body, ...options });
  }

  /**
   * List all incident attachments for a given external resource or incident. You
   * must provide either a specific incident ID or a specific external resource type
   * and external ID.
   *
   * @example
   * ```ts
   * const incidentAttachments =
   *   await client.incidentAttachments.list();
   * ```
   */
  list(
    query: IncidentAttachmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IncidentAttachmentListResponse> {
    return this._client.get('/v1/incident_attachments', { query, ...options });
  }

  /**
   * Unattaches an external resource from an incident
   *
   * @example
   * ```ts
   * await client.incidentAttachments.delete(
   *   '01FCNDV6P870EA6S7TK1DSYD5H',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/incident_attachments/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface IncidentAttachment {
  /**
   * Unique identifier of this incident membership
   */
  id: string;

  /**
   * Unique identifier of the incident
   */
  incident_id: string;

  resource: IncidentAttachment.Resource;
}

export namespace IncidentAttachment {
  export interface Resource {
    /**
     * ID of the resource in the external system
     */
    external_id: string;

    /**
     * URL of the resource
     */
    permalink: string;

    /**
     * E.g. PagerDuty: the external system that holds the resource
     */
    resource_type:
      | 'pager_duty_incident'
      | 'opsgenie_alert'
      | 'datadog_monitor_alert'
      | 'github_pull_request'
      | 'gitlab_merge_request'
      | 'sentry_issue'
      | 'jira_issue'
      | 'jsm_alert'
      | 'atlassian_statuspage_incident'
      | 'zendesk_ticket'
      | 'google_calendar_event'
      | 'outlook_calendar_event'
      | 'slack_file'
      | 'scrubbed'
      | 'statuspage_incident';

    /**
     * Title of resource
     */
    title: string;
  }
}

export interface IncidentAttachmentCreateResponse {
  incident_attachment: IncidentAttachment;
}

export interface IncidentAttachmentListResponse {
  incident_attachments: Array<IncidentAttachment>;
}

export interface IncidentAttachmentCreateParams {
  /**
   * ID of the incident to add an attachment to
   */
  incident_id: string;

  resource: IncidentAttachmentCreateParams.Resource;
}

export namespace IncidentAttachmentCreateParams {
  export interface Resource {
    /**
     * ID of the resource in the external system
     */
    external_id: string;

    /**
     * E.g. PagerDuty: the external system that holds the resource
     */
    resource_type:
      | 'pager_duty_incident'
      | 'opsgenie_alert'
      | 'datadog_monitor_alert'
      | 'github_pull_request'
      | 'gitlab_merge_request'
      | 'sentry_issue'
      | 'jira_issue'
      | 'jsm_alert'
      | 'atlassian_statuspage_incident'
      | 'zendesk_ticket'
      | 'google_calendar_event'
      | 'outlook_calendar_event'
      | 'slack_file'
      | 'scrubbed'
      | 'statuspage_incident';
  }
}

export interface IncidentAttachmentListParams {
  /**
   * ID of the resource in the external system
   */
  external_id?: string;

  /**
   * Incident that this attachment is against
   */
  incident_id?: string;

  /**
   * E.g. PagerDuty: the external system that holds the resource
   */
  resource_type?:
    | 'pager_duty_incident'
    | 'opsgenie_alert'
    | 'datadog_monitor_alert'
    | 'github_pull_request'
    | 'gitlab_merge_request'
    | 'sentry_issue'
    | 'jira_issue'
    | 'jsm_alert'
    | 'atlassian_statuspage_incident'
    | 'zendesk_ticket'
    | 'google_calendar_event'
    | 'outlook_calendar_event'
    | 'slack_file'
    | 'scrubbed'
    | 'statuspage_incident';
}

export declare namespace IncidentAttachments {
  export {
    type IncidentAttachment as IncidentAttachment,
    type IncidentAttachmentCreateResponse as IncidentAttachmentCreateResponse,
    type IncidentAttachmentListResponse as IncidentAttachmentListResponse,
    type IncidentAttachmentCreateParams as IncidentAttachmentCreateParams,
    type IncidentAttachmentListParams as IncidentAttachmentListParams,
  };
}
