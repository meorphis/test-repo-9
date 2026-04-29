// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AlertSourcesAPI from './alert-sources';
import * as AlertRoutesAPI from './alert-routes';
import * as WorkflowsAPI from './workflows';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Configure your alert sources in incident.io.
 *
 * Alert sources are the systems that send alerts to incident.io, which can then be routed to the right people and teams.
 */
export class AlertSources extends APIResource {
  /**
   * List all alert sources in your account.
   *
   * @example
   * ```ts
   * const alertSources = await client.alertSources.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<AlertSourceListResponse> {
    return this._client.get('/v2/alert_sources', options);
  }

  /**
   * Create a new alert source in your account.
   *
   * @example
   * ```ts
   * const alertSource = await client.alertSources.create({
   *   name: 'Production Web Dashboard Alerts',
   *   source_type: 'alertmanager',
   *   template: {
   *     attributes: [
   *       { ... },
   *     ],
   *     description: { ... },
   *     expressions: [
   *       { ... },
   *     ],
   *     title: { ... },
   *   },
   *   http_custom_options: {
   *     deduplication_key_path: '$.alert_id',
   *     transform_expression:
   *       "return {\n  title: $.title || $.name || 'Unknown Alert',\n  status: $.status === 'resolved' ? 'resolved' : 'firing',\n  description: $.description || $.message || '',\n  sourceURL: $.url || $.link || '',\n  metadata: { team: $.team, severity: $.severity }\n}",
   *   },
   *   jira_options: { project_ids: ['01GBSQF3FHF7FWZQNWGHAVQ804', '10043'] },
   * });
   * ```
   */
  create(body: AlertSourceCreateParams, options?: RequestOptions): APIPromise<AlertSourceCreateResponse> {
    return this._client.post('/v2/alert_sources', { body, ...options });
  }

  /**
   * Delete an existing alert source in your account.
   *
   * @example
   * ```ts
   * await client.alertSources.delete(
   *   '01GW2G3V0S59R238FAHPDS1R66',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/alert_sources/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Load details about a specific alert source in your account.
   *
   * @example
   * ```ts
   * const alertSource = await client.alertSources.retrieve(
   *   '01GW2G3V0S59R238FAHPDS1R66',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AlertSourceRetrieveResponse> {
    return this._client.get(path`/v2/alert_sources/${id}`, options);
  }

  /**
   * Update an existing alert source in your account.
   *
   * @example
   * ```ts
   * const alertSource = await client.alertSources.update('01GW2G3V0S59R238FAHPDS1R66', {
   *   name: 'Production Web Dashboard Alerts',
   *   template: {
   *     attributes: [
   *       { ... },
   *     ],
   *     description: { ... },
   *     expressions: [
   *       { ... },
   *     ],
   *     title: { ... },
   *   },
   *   http_custom_options: {
   *     deduplication_key_path: '$.alert_id',
   *     transform_expression:
   *       "return {\n  title: $.title || $.name || 'Unknown Alert',\n  status: $.status === 'resolved' ? 'resolved' : 'firing',\n  description: $.description || $.message || '',\n  sourceURL: $.url || $.link || '',\n  metadata: { team: $.team, severity: $.severity }\n}",
   *   },
   *   jira_options: { project_ids: ['01GBSQF3FHF7FWZQNWGHAVQ804', '10043'] },
   * });
   * ```
   */
  update(
    id: string,
    body: AlertSourceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AlertSourceUpdateResponse> {
    return this._client.put(path`/v2/alert_sources/${id}`, { body, ...options });
  }
}

export interface AlertSource {
  /**
   * The ID of this alert source
   */
  id: string;

  /**
   * Unique name of the alert source
   */
  name: string;

  /**
   * Type of alert source
   */
  source_type:
    | 'alertmanager'
    | 'app_optics'
    | 'azure_monitor'
    | 'bugsnag'
    | 'checkly'
    | 'chronosphere'
    | 'cloudwatch'
    | 'cloudflare'
    | 'coralogix'
    | 'cronitor'
    | 'crowdstrike_falcon'
    | 'datadog'
    | 'dynatrace'
    | 'elasticsearch'
    | 'email'
    | 'expel'
    | 'github_issue'
    | 'google_cloud'
    | 'grafana'
    | 'http'
    | 'http_custom'
    | 'honeycomb'
    | 'incoming_calls'
    | 'jira'
    | 'jsm'
    | 'monte_carlo'
    | 'nagios'
    | 'new_relic'
    | 'opsgenie'
    | 'prtg'
    | 'pager_duty'
    | 'panther'
    | 'pingdom'
    | 'runscope'
    | 'sns'
    | 'sentry'
    | 'sentry_metric'
    | 'splunk'
    | 'status_cake'
    | 'status_page_views'
    | 'sumo_logic'
    | 'uptime'
    | 'zendesk';

  template: AlertSource.Template;

  email_options?: AlertSource.EmailOptions;

  http_custom_options?: HTTPCustomOptions;

  jira_options?: JiraOptions;

  /**
   * Secret token used to authenticate this source, if applicable. If applicable,
   * this is the token that must be included in either the query string or the
   * 'Authorization' header when sending events to this alert source.
   */
  secret_token?: string;
}

export namespace AlertSource {
  export interface Template {
    /**
     * Attributes to set on alerts coming from this source, with a binding describing
     * how to set them.
     */
    attributes: Array<Template.Attribute>;

    description: AlertSourcesAPI.ParamBindingValue;

    /**
     * Expressions available for use in bindings within this template
     */
    expressions: Array<AlertRoutesAPI.Expression>;

    title: AlertSourcesAPI.ParamBindingValue;
  }

  export namespace Template {
    export interface Attribute {
      /**
       * ID of the alert attribute to set with this binding
       */
      alert_attribute_id: string;

      binding: WorkflowsAPI.EngineParamBinding;
    }
  }

  export interface EmailOptions {
    /**
     * Email address this alert source receives alerts to
     */
    email_address: string;
  }
}

export interface HTTPCustomOptions {
  /**
   * JSON path to extract the deduplication key from the payload
   */
  deduplication_key_path: string;

  /**
   * JavaScript expression that returns an object with all alert fields
   */
  transform_expression: string;
}

export interface JiraOptions {
  /**
   * Which projects in Jira should this alert source watch for new issues? IDs can
   * either be IDs of the projects in Jira, or ID of catalog entries in the 'Jira
   * Project' catalog type.
   */
  project_ids: Array<string>;
}

export interface ParamBindingValue {
  /**
   * Human readable label to be displayed for user to select
   */
  label: string;

  /**
   * If set, this is the literal value of the step parameter
   */
  literal?: string;

  /**
   * If set, this is the reference into the trigger scope that is the value of this
   * parameter
   */
  reference?: string;
}

export interface ParamBindingValuePayload {
  /**
   * If set, this is the literal value of the step parameter
   */
  literal?: string;

  /**
   * If set, this is the reference into the trigger scope that is the value of this
   * parameter
   */
  reference?: string;
}

export interface TemplatePayload {
  /**
   * Attributes to set on alerts coming from this source, with a binding describing
   * how to set them.
   */
  attributes: Array<TemplatePayload.Attribute>;

  description: ParamBindingValuePayload;

  /**
   * Expressions available for use in bindings within this template
   */
  expressions: Array<AlertRoutesAPI.ExpressionPayload>;

  title: ParamBindingValuePayload;
}

export namespace TemplatePayload {
  export interface Attribute {
    /**
     * ID of the alert attribute to set with this binding
     */
    alert_attribute_id: string;

    binding: WorkflowsAPI.EngineParamBindingPayload;
  }
}

export interface AlertSourceCreateResponse {
  alert_source: AlertSource;
}

export interface AlertSourceRetrieveResponse {
  alert_source: AlertSource;
}

export interface AlertSourceUpdateResponse {
  alert_source: AlertSource;
}

export interface AlertSourceListResponse {
  alert_sources: Array<AlertSource>;
}

export interface AlertSourceCreateParams {
  /**
   * Unique name of the alert source
   */
  name: string;

  /**
   * Type of alert source
   */
  source_type:
    | 'alertmanager'
    | 'app_optics'
    | 'azure_monitor'
    | 'bugsnag'
    | 'checkly'
    | 'chronosphere'
    | 'cloudwatch'
    | 'cloudflare'
    | 'coralogix'
    | 'cronitor'
    | 'crowdstrike_falcon'
    | 'datadog'
    | 'dynatrace'
    | 'elasticsearch'
    | 'email'
    | 'expel'
    | 'github_issue'
    | 'google_cloud'
    | 'grafana'
    | 'http'
    | 'http_custom'
    | 'honeycomb'
    | 'incoming_calls'
    | 'jira'
    | 'jsm'
    | 'monte_carlo'
    | 'nagios'
    | 'new_relic'
    | 'opsgenie'
    | 'prtg'
    | 'pager_duty'
    | 'panther'
    | 'pingdom'
    | 'runscope'
    | 'sns'
    | 'sentry'
    | 'sentry_metric'
    | 'splunk'
    | 'status_cake'
    | 'status_page_views'
    | 'sumo_logic'
    | 'uptime'
    | 'zendesk';

  template: TemplatePayload;

  http_custom_options?: HTTPCustomOptions;

  jira_options?: JiraOptions;
}

export interface AlertSourceUpdateParams {
  /**
   * Unique name of the alert source
   */
  name: string;

  template: TemplatePayload;

  http_custom_options?: HTTPCustomOptions;

  jira_options?: JiraOptions;
}

export declare namespace AlertSources {
  export {
    type AlertSource as AlertSource,
    type HTTPCustomOptions as HTTPCustomOptions,
    type JiraOptions as JiraOptions,
    type ParamBindingValue as ParamBindingValue,
    type ParamBindingValuePayload as ParamBindingValuePayload,
    type TemplatePayload as TemplatePayload,
    type AlertSourceCreateResponse as AlertSourceCreateResponse,
    type AlertSourceRetrieveResponse as AlertSourceRetrieveResponse,
    type AlertSourceUpdateResponse as AlertSourceUpdateResponse,
    type AlertSourceListResponse as AlertSourceListResponse,
    type AlertSourceCreateParams as AlertSourceCreateParams,
    type AlertSourceUpdateParams as AlertSourceUpdateParams,
  };
}
