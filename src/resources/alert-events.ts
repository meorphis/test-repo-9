// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AlertEvents extends APIResource {
  /**
   * Create an alert event using an HTTP source.
   *
   * @example
   * ```ts
   * const response = await client.alertEvents.createHTTP(
   *   '01GW2G3V0S59R238FAHPDS1R66',
   *   {
   *     status: 'firing',
   *     title:
   *       '*errors.withMessage: PG::Error failed to connect',
   *     deduplication_key: '4293868629',
   *     description:
   *       "We've detected a number of timeouts on hello.world.com, the service may be down. To fix...",
   *     metadata: {
   *       service: 'hello.world.com',
   *       team: ['my-team'],
   *     },
   *     source_url:
   *       'https://www.my-alerting-platform.com/alerts/my-alert-123',
   *   },
   * );
   * ```
   */
  createHTTP(
    alertSourceConfigID: string,
    params: AlertEventCreateHTTPParams,
    options?: RequestOptions,
  ): APIPromise<AlertEventCreateHTTPResponse> {
    const { token, ...body } = params;
    return this._client.post(path`/v2/alert_events/http/${alertSourceConfigID}`, {
      query: { token },
      body,
      ...options,
    });
  }
}

export interface AlertEventCreateHTTPResponse {
  /**
   * The deduplication key that the event has been processed with
   */
  deduplication_key: string;

  /**
   * Human readable message giving detail about the event
   */
  message: string;

  /**
   * Status of the event
   */
  status: string;
}

export interface AlertEventCreateHTTPParams {
  /**
   * Body param: Current status of this alert
   */
  status: 'firing' | 'resolved';

  /**
   * Body param: The title of the alert, parsed from the alert payload according to
   * the alert source configuration
   */
  title: string;

  /**
   * Query param: Token used to authenticate the request, generated when configuring
   * the alert source. Will be consumed via a URL query string parameter
   */
  token?: string;

  /**
   * Body param: A deduplication key which uniquely references this alert from your
   * alert source. For newly created HTTP sources, this field is required. If you
   * send an event with the same deduplication_key multiple times, only one alert
   * will be created in incident.io for this alert source config. You can filter on
   * this field to find the alert created by an event you've sent us.
   */
  deduplication_key?: string;

  /**
   * Body param: Description that optionally adds more detail to title. Supports
   * markdown.
   */
  description?: string;

  /**
   * Body param: Any additional metadata that you've configured your alert source to
   * parse
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param: If applicable, a link to the alert in the upstream system
   */
  source_url?: string;
}

export declare namespace AlertEvents {
  export {
    type AlertEventCreateHTTPResponse as AlertEventCreateHTTPResponse,
    type AlertEventCreateHTTPParams as AlertEventCreateHTTPParams,
  };
}
