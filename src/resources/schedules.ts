// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SchedulesAPI from './schedules';
import * as ActionsAPI from './actions';
import * as ScheduleEntriesAPI from './schedule-entries';
import * as ScheduleOverridesAPI from './schedule-overrides';
import * as IncidentsAPI from './incidents/incidents';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * View and manage schedules.
 * Manage your full schedule of on-call rotations, including the users and rotation configuration.
 */
export class Schedules extends APIResource {
  /**
   * List configured schedules.
   *
   * @example
   * ```ts
   * const schedules = await client.schedules.list();
   * ```
   */
  list(
    query: ScheduleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduleListResponse> {
    return this._client.get('/v2/schedules', { query, ...options });
  }

  /**
   * Create a new schedule.
   *
   * @example
   * ```ts
   * const schedule = await client.schedules.create({
   *   schedule: {
   *     annotations: { ... },
   *     config: { ... },
   *     holidays_public_config: { ... },
   *     name: 'Primary On-call Schedule',
   *     team_ids: ['01JPQA75EPNEES4479P16P4XAB'],
   *     timezone: 'America/Los_Angeles',
   *   },
   * });
   * ```
   */
  create(body: ScheduleCreateParams, options?: RequestOptions): APIPromise<ScheduleCreateResponse> {
    return this._client.post('/v2/schedules', { body, ...options });
  }

  /**
   * Archives a single schedule.
   *
   * @example
   * ```ts
   * await client.schedules.delete('01G0J1EXE7AXZ2C93K61WBPYEH');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/schedules/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a single schedule.
   *
   * @example
   * ```ts
   * const schedule = await client.schedules.retrieve(
   *   '01G0J1EXE7AXZ2C93K61WBPYEH',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ScheduleRetrieveResponse> {
    return this._client.get(path`/v2/schedules/${id}`, options);
  }

  /**
   * Update a schedule.
   *
   * @example
   * ```ts
   * const schedule = await client.schedules.update('01G0J1EXE7AXZ2C93K61WBPYEH', {
   *   schedule: {
   *     annotations: { ... },
   *     config: { ... },
   *     holidays_public_config: { ... },
   *     name: 'Primary On-call Schedule',
   *     team_ids: ['01JPQA75EPNEES4479P16P4XAB'],
   *     timezone: 'America/Los_Angeles',
   *   },
   * });
   * ```
   */
  update(
    id: string,
    body: ScheduleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleUpdateResponse> {
    return this._client.put(path`/v2/schedules/${id}`, { body, ...options });
  }
}

export interface Schedule {
  /**
   * Unique internal ID of the schedule
   */
  id: string;

  /**
   * Annotations that track metadata about this resource
   */
  annotations: { [key: string]: string };

  created_at: string;

  /**
   * Human readable name synced from external provider
   */
  name: string;

  /**
   * IDs of teams that own this schedule
   */
  team_ids: Array<string>;

  /**
   * Timezone of the schedule, as interpreted at the point of generating the report
   */
  timezone: string;

  updated_at: string;

  config?: Schedule.Config;

  /**
   * Shifts that are on-going for this schedule, if a native schedule
   */
  current_shifts?: Array<ScheduleEntriesAPI.ScheduleEntry>;

  holidays_public_config?: Schedule.HolidaysPublicConfig;
}

export namespace Schedule {
  export interface Config {
    /**
     * Rotas in this schedule
     */
    rotations: Array<Config.Rotation>;
  }

  export namespace Config {
    export interface Rotation {
      /**
       * Unique internal ID of the rotation
       */
      id: string;

      /**
       * Defines the next moment we'll trigger a handover
       */
      handover_start_at: string;

      /**
       * Defines the handover intervals for this rota, in order they should apply
       */
      handovers: Array<SchedulesAPI.ScheduleRotationHandover>;

      /**
       * Controls how many people are on-call concurrently
       */
      layers: Array<Rotation.Layer>;

      /**
       * Human readable name synced from external provider
       */
      name: string;

      /**
       * Users who are available to be scheduled on this rota
       */
      users: Array<ActionsAPI.UserV2>;

      /**
       * Optional restrictions that define when to schedule people for this rota
       */
      working_intervals: Array<SchedulesAPI.ScheduleRotationWorkingInterval>;

      /**
       * When this rotation config will be effective from
       */
      effective_from?: string;

      /**
       * Scheduling algorithm to use for this rotation. 'fair' balances workload by
       * considering handover duration, while 'sequential' uses simple round-robin
       * rotation through users. Only applies when you have asymmetric handovers (e.g., 2
       * days then 5 days).
       */
      scheduling_mode?: 'fair' | 'sequential';

      /**
       * DEPRECATED: Use working_intervals instead.
       */
      working_interval?: Array<SchedulesAPI.ScheduleRotationWorkingInterval>;
    }

    export namespace Rotation {
      export interface Layer {
        /**
         * Unique identifier of the layer
         */
        id?: string;

        /**
         * Name of the layer
         */
        name?: string;
      }
    }
  }

  export interface HolidaysPublicConfig {
    /**
     * ISO 3166-1 alpha-2 country codes for the countries that this schedule is
     * configured to view holidays for
     */
    country_codes: Array<string>;
  }
}

export interface ScheduleHolidaysPublicConfigPayload {
  /**
   * ISO 3166-1 alpha-2 country codes for the countries that this schedule is
   * configured to view holidays for
   */
  country_codes: Array<string>;
}

export interface ScheduleRotationHandover {
  interval?: number;

  /**
   * How often a handover occurs
   */
  interval_type?: 'hourly' | 'daily' | 'weekly';
}

export interface ScheduleRotationWorkingInterval {
  /**
   * End time of the interval, in 24hr format
   */
  end_time: string;

  /**
   * Start time of the interval, in 24hr format
   */
  start_time: string;

  /**
   * Weekdays for use with a schedule
   */
  weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
}

export interface ScheduleCreateResponse {
  schedule: Schedule;
}

export interface ScheduleRetrieveResponse {
  schedule: Schedule;
}

export interface ScheduleUpdateResponse {
  schedule: Schedule;
}

export interface ScheduleListResponse {
  schedules: Array<Schedule>;

  pagination_meta?: IncidentsAPI.PaginationMetaResultWithTotal;
}

export interface ScheduleListParams {
  /**
   * A schedule's ID. This endpoint will return a list of schedules after this ID in
   * relation to the API response order.
   */
  after?: string;

  /**
   * Integer number of records to return
   */
  page_size?: number;
}

export interface ScheduleCreateParams {
  schedule: ScheduleCreateParams.Schedule;
}

export namespace ScheduleCreateParams {
  export interface Schedule {
    /**
     * Annotations that can track metadata about the schedule
     */
    annotations?: { [key: string]: string };

    config?: Schedule.Config;

    holidays_public_config?: SchedulesAPI.ScheduleHolidaysPublicConfigPayload;

    /**
     * Name of the schedule
     */
    name?: string;

    /**
     * IDs of teams that own this schedule
     */
    team_ids?: Array<string>;

    /**
     * Timezone of the schedule
     */
    timezone?: string;
  }

  export namespace Schedule {
    export interface Config {
      rotations?: Array<Config.Rotation>;
    }

    export namespace Config {
      export interface Rotation {
        /**
         * Name of the rotation
         */
        name: string;

        /**
         * Unique identifier of the rotation
         */
        id?: string;

        effective_from?: string;

        handover_start_at?: string;

        handovers?: Array<SchedulesAPI.ScheduleRotationHandover>;

        layers?: Array<Rotation.Layer>;

        /**
         * Scheduling algorithm to use for this rotation. 'fair' balances workload by
         * considering handover duration, while 'sequential' uses simple round-robin
         * rotation through users. Only applies when you have asymmetric handovers (e.g., 2
         * days then 5 days).
         */
        scheduling_mode?: 'fair' | 'sequential';

        users?: Array<ScheduleOverridesAPI.UserReferencePayloadV2>;

        working_interval?: Array<Rotation.WorkingInterval>;
      }

      export namespace Rotation {
        export interface Layer {
          /**
           * Name of the layer
           */
          name: string;

          /**
           * Unique identifier of the layer
           */
          id?: string;
        }

        export interface WorkingInterval {
          /**
           * End time of the interval, in 24hr format
           */
          end_time: string;

          /**
           * Start time of the interval, in 24hr format
           */
          start_time: string;

          /**
           * Weekdays for use with a schedule
           */
          weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
        }
      }
    }
  }
}

export interface ScheduleUpdateParams {
  schedule: ScheduleUpdateParams.Schedule;
}

export namespace ScheduleUpdateParams {
  export interface Schedule {
    /**
     * Annotations that can track metadata about the schedule
     */
    annotations?: { [key: string]: string };

    config?: Schedule.Config;

    holidays_public_config?: SchedulesAPI.ScheduleHolidaysPublicConfigPayload;

    /**
     * Name of the schedule
     */
    name?: string;

    /**
     * IDs of teams that own this schedule
     */
    team_ids?: Array<string>;

    /**
     * Timezone of the schedule
     */
    timezone?: string;
  }

  export namespace Schedule {
    export interface Config {
      rotations?: Array<Config.Rotation>;
    }

    export namespace Config {
      export interface Rotation {
        /**
         * Unique identifier of the rotation
         */
        id?: string;

        effective_from?: string;

        handover_start_at?: string;

        handovers?: Array<SchedulesAPI.ScheduleRotationHandover>;

        layers?: Array<Rotation.Layer>;

        /**
         * Name of the rotation
         */
        name?: string;

        /**
         * Scheduling algorithm to use for this rotation. 'fair' balances workload by
         * considering handover duration, while 'sequential' uses simple round-robin
         * rotation through users. Only applies when you have asymmetric handovers (e.g., 2
         * days then 5 days).
         */
        scheduling_mode?: 'fair' | 'sequential';

        users?: Array<ScheduleOverridesAPI.UserReferencePayloadV2>;

        working_interval?: Array<SchedulesAPI.ScheduleRotationWorkingInterval>;
      }

      export namespace Rotation {
        export interface Layer {
          /**
           * Unique identifier of the layer
           */
          id?: string;

          /**
           * Name of the layer
           */
          name?: string;
        }
      }
    }
  }
}

export declare namespace Schedules {
  export {
    type Schedule as Schedule,
    type ScheduleHolidaysPublicConfigPayload as ScheduleHolidaysPublicConfigPayload,
    type ScheduleRotationHandover as ScheduleRotationHandover,
    type ScheduleRotationWorkingInterval as ScheduleRotationWorkingInterval,
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleRetrieveResponse as ScheduleRetrieveResponse,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleUpdateParams as ScheduleUpdateParams,
  };
}
