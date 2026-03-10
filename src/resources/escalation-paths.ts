// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as WorkflowsAPI from './workflows';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Create and manage escalation paths, and create, list and filter escalations.
 *
 * With incident.io On-call you can create escalation paths that describe how a page should
 * be escalated to people and schedules.
 */
export class EscalationPaths extends APIResource {
  /**
   * Create an escalation path.
   *
   * An escalation path is a series of steps that describe how a page should be
   * escalated, represented as graph, supporting conditional branches based on alert
   * priority and working intervals.
   *
   * We recommend you create escalation paths in the incident.io dashboard where our
   * path builder makes it easy to use conditions and visualise the path.
   *
   * @example
   * ```ts
   * const escalationPath = await client.escalationPaths.create({
   *   name: 'Urgent Support',
   *   path: [
   *     {
   *       id: '01FCNDV6P870EA6S7TK1DSYDG0',
   *       if_else: { ... },
   *       level: { ... },
   *       notify_channel: { ... },
   *       repeat: { ... },
   *       type: 'if_else',
   *     },
   *   ],
   *   team_ids: ['01JPQA75EPNEES4479P16P4XAB'],
   *   working_hours: [
   *     {
   *       id: 'abc123',
   *       name: 'abc123',
   *       timezone: 'abc123',
   *       weekday_intervals: [
   *         { ... },
   *       ],
   *     },
   *   ],
   * });
   * ```
   */
  create(
    body: EscalationPathCreateParams,
    options?: RequestOptions,
  ): APIPromise<EscalationPathCreateResponse> {
    return this._client.post('/v2/escalation_paths', { body, ...options });
  }

  /**
   * Show an escalation path.
   *
   * We recommend you create escalation paths in the incident.io dashboard where our
   * path builder makes it easy to use conditions and visualise the path.
   *
   * @example
   * ```ts
   * const escalationPath =
   *   await client.escalationPaths.retrieve(
   *     '01FCNDV6P870EA6S7TK1DSYDG0',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EscalationPathRetrieveResponse> {
    return this._client.get(path`/v2/escalation_paths/${id}`, options);
  }

  /**
   * Updates an escalation path.
   *
   * We recommend you create escalation paths in the incident.io dashboard where our
   * path builder makes it easy to use conditions and visualise the path.
   *
   * @example
   * ```ts
   * const escalationPath = await client.escalationPaths.update('01FCNDV6P870EA6S7TK1DSYDG0', {
   *   name: 'Urgent Support',
   *   path: [
   *     {
   *       id: '01FCNDV6P870EA6S7TK1DSYDG0',
   *       if_else: { ... },
   *       level: { ... },
   *       notify_channel: { ... },
   *       repeat: { ... },
   *       type: 'if_else',
   *     },
   *   ],
   *   team_ids: ['01JPQA75EPNEES4479P16P4XAB'],
   *   working_hours: [
   *     {
   *       id: 'abc123',
   *       name: 'abc123',
   *       timezone: 'abc123',
   *       weekday_intervals: [
   *         { ... },
   *       ],
   *     },
   *   ],
   * });
   * ```
   */
  update(
    id: string,
    body: EscalationPathUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EscalationPathUpdateResponse> {
    return this._client.put(path`/v2/escalation_paths/${id}`, { body, ...options });
  }

  /**
   * Archives an escalation path.
   *
   * We recommend you create escalation paths in the incident.io dashboard where our
   * path builder makes it easy to use conditions and visualise the path.
   *
   * @example
   * ```ts
   * await client.escalationPaths.delete(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/escalation_paths/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EscalationPath {
  /**
   * Unique identifier for this escalation path.
   */
  id: string;

  /**
   * The name of this escalation path, for the user's reference.
   */
  name: string;

  /**
   * The nodes that form the levels and branches of this escalation path.
   */
  path: Array<EscalationPathNode>;

  /**
   * IDs of the teams that own this escalation path. This will automatically sync
   * escalation paths with the right teams in Catalog. If you have an escalation
   * paths attribute on your Teams, this attribute is required.
   */
  team_ids: Array<string>;

  /**
   * The working hours for this escalation path.
   */
  working_hours?: Array<WeekdayIntervalConfig>;
}

export interface EscalationPathNode {
  /**
   * An ID for this node, unique within the escalation path.
   *
   * This allows you to reference the node in other nodes, such as when configuring a
   * 'repeat' node.
   */
  id: string;

  /**
   * The type of this node. Available types are:
   *
   * - level: A set of targets (users or schedules) that should be paged, either all
   *   at once, or with a round-robin configuration.
   * - notify_channel: Send the escalation to a Slack channel, where it can be acked
   *   by anyone in the channel.
   * - if_else: Branch the escalation based on a set of conditions.
   * - repeat: Go back to a previous node and repeat the logic from there.
   */
  type: 'if_else' | 'repeat' | 'level' | 'notify_channel';

  if_else?: EscalationPathNodeIfElse;

  level?: EscalationPathNode.Level;

  notify_channel?: EscalationPathNode.NotifyChannel;

  repeat?: EscalationPathNode.Repeat;
}

export namespace EscalationPathNode {
  export interface Level {
    /**
     * The targets (users or schedules) for this level
     */
    targets: Array<Level.Target>;

    /**
     * Controls the behaviour of acknowledgements for this level, with 'first'
     * cancelling all other escalations on the same level when someone acks
     */
    ack_mode?: 'all' | 'first';

    round_robin_config?: Level.RoundRobinConfig;

    /**
     * If the time to ack is relative to a time window, this defines whether we move
     * when the window is active or inactive
     */
    time_to_ack_interval_condition?: 'active' | 'inactive';

    /**
     * How long should we wait for this level to acknowledge before proceeding to the
     * next node in the path?
     */
    time_to_ack_seconds?: number;

    /**
     * If the time to ack is relative to a time window, this identifies which window it
     * is relative to
     */
    time_to_ack_weekday_interval_config_id?: string;
  }

  export namespace Level {
    export interface Target {
      /**
       * Uniquely identifies an entity of this type
       */
      id: string;

      /**
       * Controls what type of entity this target identifies, such as EscalationPolicy or
       * User
       */
      type: 'schedule' | 'user' | 'slack_channel' | 'msteams_channel';

      /**
       * The urgency of this escalation path target
       */
      urgency: 'high' | 'low';

      /**
       * Only set for schedule targets, and either currently_on_call, all_users or
       * all_users_for_rota and specifies which users to fetch from the schedule
       */
      schedule_mode?: 'currently_on_call' | 'all_users_for_rota' | 'all_users' | '';
    }

    export interface RoundRobinConfig {
      /**
       * Whether round robin is enabled for this level
       */
      enabled: boolean;

      /**
       * How long should we wait before rotating to the next target in a round robin, if
       * not set will stick with a single target per level.
       */
      rotate_after_seconds?: number;
    }
  }

  export interface NotifyChannel {
    /**
     * The targets (Slack channels) for this level
     */
    targets: Array<NotifyChannel.Target>;

    /**
     * If the time to ack is relative to a time window, this defines whether we move
     * when the window is active or inactive
     */
    time_to_ack_interval_condition?: 'active' | 'inactive';

    /**
     * How long should we wait for this level to acknowledge before moving on to the
     * next node in the path?
     */
    time_to_ack_seconds?: number;

    /**
     * If the time to ack is relative to a time window, this identifies which window it
     * is relative to
     */
    time_to_ack_weekday_interval_config_id?: string;
  }

  export namespace NotifyChannel {
    export interface Target {
      /**
       * Uniquely identifies an entity of this type
       */
      id: string;

      /**
       * Controls what type of entity this target identifies, such as EscalationPolicy or
       * User
       */
      type: 'schedule' | 'user' | 'slack_channel' | 'msteams_channel';

      /**
       * The urgency of this escalation path target
       */
      urgency: 'high' | 'low';

      /**
       * Only set for schedule targets, and either currently_on_call, all_users or
       * all_users_for_rota and specifies which users to fetch from the schedule
       */
      schedule_mode?: 'currently_on_call' | 'all_users_for_rota' | 'all_users' | '';
    }
  }

  export interface Repeat {
    /**
     * How many times to repeat these nodes
     */
    repeat_times: number;

    /**
     * Which node ID we begin repeating from.
     */
    to_node: string;
  }
}

export interface EscalationPathNodeIfElse {
  /**
   * The condition that defines which branch to take
   */
  conditions: Array<EscalationPathNodeIfElse.Condition>;

  /**
   * The nodes that form the levels if our condition is not met
   */
  else_path: Array<EscalationPathNode>;

  /**
   * The nodes that form the levels if our condition is met
   */
  then_path: Array<EscalationPathNode>;
}

export namespace EscalationPathNodeIfElse {
  export interface Condition {
    operation: Condition.Operation;

    /**
     * Bindings for the operation parameters
     */
    param_bindings: Array<WorkflowsAPI.EngineParamBinding>;

    subject: Condition.Subject;
  }

  export namespace Condition {
    export interface Operation {
      /**
       * Human readable label to be displayed for user to select
       */
      label: string;

      /**
       * Unique identifier for this option
       */
      value: string;
    }

    export interface Subject {
      /**
       * Human readable identifier for the subject
       */
      label: string;

      /**
       * Reference into the scope for the value of the subject
       */
      reference: string;
    }
  }
}

export interface EscalationPathNodeIfElsePayload {
  /**
   * The nodes that form the levels if our condition is not met
   */
  else_path: Array<EscalationPathNodePayload>;

  /**
   * The nodes that form the levels if our condition is met
   */
  then_path: Array<EscalationPathNodePayload>;

  /**
   * The condition that defines which branch to take
   */
  conditions?: Array<EscalationPathNodeIfElsePayload.Condition>;
}

export namespace EscalationPathNodeIfElsePayload {
  export interface Condition {
    /**
     * The name of the operation on the subject
     */
    operation: string;

    /**
     * List of parameter bindings
     */
    param_bindings: Array<WorkflowsAPI.EngineParamBindingPayload>;

    /**
     * The reference of the subject in the trigger scope
     */
    subject: string;
  }
}

export interface EscalationPathNodePayload {
  /**
   * An ID for this node, unique within the escalation path.
   *
   * This allows you to reference the node in other nodes, such as when configuring a
   * 'repeat' node.
   */
  id: string;

  /**
   * The type of this node. Available types are:
   *
   * - level: A set of targets (users or schedules) that should be paged, either all
   *   at once, or with a round-robin configuration.
   * - notify_channel: Send the escalation to a Slack channel, where it can be acked
   *   by anyone in the channel.
   * - if_else: Branch the escalation based on a set of conditions.
   * - repeat: Go back to a previous node and repeat the logic from there.
   */
  type: 'if_else' | 'repeat' | 'level' | 'notify_channel';

  if_else?: EscalationPathNodeIfElsePayload;

  level?: EscalationPathNodePayload.Level;

  notify_channel?: EscalationPathNodePayload.NotifyChannel;

  repeat?: EscalationPathNodePayload.Repeat;
}

export namespace EscalationPathNodePayload {
  export interface Level {
    /**
     * The targets (users or schedules) for this level
     */
    targets: Array<Level.Target>;

    /**
     * Controls the behaviour of acknowledgements for this level, with 'first'
     * cancelling all other escalations on the same level when someone acks
     */
    ack_mode?: 'all' | 'first';

    round_robin_config?: Level.RoundRobinConfig;

    /**
     * If the time to ack is relative to a time window, this defines whether we move
     * when the window is active or inactive
     */
    time_to_ack_interval_condition?: 'active' | 'inactive';

    /**
     * How long should we wait for this level to acknowledge before proceeding to the
     * next node in the path?
     */
    time_to_ack_seconds?: number;

    /**
     * If the time to ack is relative to a time window, this identifies which window it
     * is relative to
     */
    time_to_ack_weekday_interval_config_id?: string;
  }

  export namespace Level {
    export interface Target {
      /**
       * Uniquely identifies an entity of this type
       */
      id: string;

      /**
       * Controls what type of entity this target identifies, such as EscalationPolicy or
       * User
       */
      type: 'schedule' | 'user' | 'slack_channel' | 'msteams_channel';

      /**
       * The urgency of this escalation path target
       */
      urgency: 'high' | 'low';

      /**
       * Only set for schedule targets, and either currently_on_call, all_users or
       * all_users_for_rota and specifies which users to fetch from the schedule
       */
      schedule_mode?: 'currently_on_call' | 'all_users_for_rota' | 'all_users' | '';
    }

    export interface RoundRobinConfig {
      /**
       * Whether round robin is enabled for this level
       */
      enabled: boolean;

      /**
       * How long should we wait before rotating to the next target in a round robin, if
       * not set will stick with a single target per level.
       */
      rotate_after_seconds?: number;
    }
  }

  export interface NotifyChannel {
    /**
     * The targets (Slack channels) for this level
     */
    targets: Array<NotifyChannel.Target>;

    /**
     * If the time to ack is relative to a time window, this defines whether we move
     * when the window is active or inactive
     */
    time_to_ack_interval_condition?: 'active' | 'inactive';

    /**
     * How long should we wait for this level to acknowledge before moving on to the
     * next node in the path?
     */
    time_to_ack_seconds?: number;

    /**
     * If the time to ack is relative to a time window, this identifies which window it
     * is relative to
     */
    time_to_ack_weekday_interval_config_id?: string;
  }

  export namespace NotifyChannel {
    export interface Target {
      /**
       * Uniquely identifies an entity of this type
       */
      id: string;

      /**
       * Controls what type of entity this target identifies, such as EscalationPolicy or
       * User
       */
      type: 'schedule' | 'user' | 'slack_channel' | 'msteams_channel';

      /**
       * The urgency of this escalation path target
       */
      urgency: 'high' | 'low';

      /**
       * Only set for schedule targets, and either currently_on_call, all_users or
       * all_users_for_rota and specifies which users to fetch from the schedule
       */
      schedule_mode?: 'currently_on_call' | 'all_users_for_rota' | 'all_users' | '';
    }
  }

  export interface Repeat {
    /**
     * How many times to repeat these nodes
     */
    repeat_times: number;

    /**
     * Which node ID we begin repeating from.
     */
    to_node: string;
  }
}

export interface WeekdayIntervalConfig {
  /**
   * The unique identifier for this set of working intervals
   */
  id: string;

  /**
   * A human readable label for this set of working intervals
   */
  name: string;

  /**
   * How to interpret all the intervals
   */
  timezone: string;

  weekday_intervals: Array<WeekdayIntervalConfig.WeekdayInterval>;
}

export namespace WeekdayIntervalConfig {
  export interface WeekdayInterval {
    /**
     * End time of the interval, in 24hr format
     */
    end_time: string;

    /**
     * Start time of the interval, in 24hr format
     */
    start_time: string;

    /**
     * Weekdays for use within a schedule or escalation path
     */
    weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  }
}

export interface EscalationPathCreateResponse {
  escalation_path: EscalationPath;
}

export interface EscalationPathRetrieveResponse {
  escalation_path: EscalationPath;
}

export interface EscalationPathUpdateResponse {
  escalation_path: EscalationPath;
}

export interface EscalationPathCreateParams {
  /**
   * The name of this escalation path, for the user's reference.
   */
  name: string;

  /**
   * The nodes that form the levels and branches of this escalation path.
   */
  path: Array<EscalationPathNodePayload>;

  /**
   * IDs of the teams that own this escalation path. This will automatically sync
   * escalation paths with the right teams in Catalog. If you have an escalation
   * paths attribute on your Teams, this attribute is required.
   */
  team_ids?: Array<string>;

  /**
   * The working hours for this escalation path.
   */
  working_hours?: Array<WeekdayIntervalConfig>;
}

export interface EscalationPathUpdateParams {
  /**
   * The name of this escalation path, for the user's reference.
   */
  name: string;

  /**
   * The nodes that form the levels and branches of this escalation path.
   */
  path: Array<EscalationPathNodePayload>;

  /**
   * IDs of the teams that own this escalation path. This will automatically sync
   * escalation paths with the right teams in Catalog. If you have an escalation
   * paths attribute on your Teams, this attribute is required.
   */
  team_ids?: Array<string>;

  /**
   * The working hours for this escalation path.
   */
  working_hours?: Array<WeekdayIntervalConfig>;
}

export declare namespace EscalationPaths {
  export {
    type EscalationPath as EscalationPath,
    type EscalationPathNode as EscalationPathNode,
    type EscalationPathNodeIfElse as EscalationPathNodeIfElse,
    type EscalationPathNodeIfElsePayload as EscalationPathNodeIfElsePayload,
    type EscalationPathNodePayload as EscalationPathNodePayload,
    type WeekdayIntervalConfig as WeekdayIntervalConfig,
    type EscalationPathCreateResponse as EscalationPathCreateResponse,
    type EscalationPathRetrieveResponse as EscalationPathRetrieveResponse,
    type EscalationPathUpdateResponse as EscalationPathUpdateResponse,
    type EscalationPathCreateParams as EscalationPathCreateParams,
    type EscalationPathUpdateParams as EscalationPathUpdateParams,
  };
}
