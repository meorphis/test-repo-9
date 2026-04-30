// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ScheduleEntriesAPI from './schedule-entries';
import * as ActionsAPI from './actions';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * View and manage schedules.
 * Manage your full schedule of on-call rotations, including the users and rotation configuration.
 */
export class ScheduleEntries extends APIResource {
  /**
   * Get a list of schedule entries. The endpoint will return all entries that
   * overlap with the given window, if one is provided.
   *
   * @example
   * ```ts
   * const scheduleEntries = await client.scheduleEntries.list({
   *   schedule_id: '01FDAG4SAP5TYPT98WGR2N7W91',
   * });
   * ```
   */
  list(query: ScheduleEntryListParams, options?: RequestOptions): APIPromise<ScheduleEntryListResponse> {
    return this._client.get('/v2/schedule_entries', { query, ...options });
  }
}

export interface ScheduleEntry {
  end_at: string;

  start_at: string;

  /**
   * Unique identifier of the schedule entry
   */
  entry_id?: string;

  /**
   * A unique identifier for this entry, used to determine a unique shift
   */
  fingerprint?: string;

  /**
   * If present, the layer this entry applies to on the rota
   */
  layer_id?: string;

  /**
   * If present, the rotation this entry applies to on the schedule
   */
  rotation_id?: string;

  user?: ActionsAPI.UserV2;
}

export interface ScheduleEntryListResponse {
  schedule_entries: ScheduleEntryListResponse.ScheduleEntries;

  pagination_meta?: ScheduleEntryListResponse.PaginationMeta;
}

export namespace ScheduleEntryListResponse {
  export interface ScheduleEntries {
    final: Array<ScheduleEntriesAPI.ScheduleEntry>;

    overrides: Array<ScheduleEntriesAPI.ScheduleEntry>;

    scheduled: Array<ScheduleEntriesAPI.ScheduleEntry>;
  }

  export interface PaginationMeta {
    /**
     * The time, if it exists, of the last entry's end time
     */
    after: string;

    /**
     * The URL to fetch the next page of entries
     */
    after_url: string;
  }
}

export interface ScheduleEntryListParams {
  /**
   * The ID of the schedule to get entries for.
   */
  schedule_id: string;

  /**
   * The end of the window to get entries for.
   */
  entry_window_end?: string;

  /**
   * The start of the window to get entries for.
   */
  entry_window_start?: string;
}

export declare namespace ScheduleEntries {
  export {
    type ScheduleEntry as ScheduleEntry,
    type ScheduleEntryListResponse as ScheduleEntryListResponse,
    type ScheduleEntryListParams as ScheduleEntryListParams,
  };
}
