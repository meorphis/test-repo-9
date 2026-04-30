// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IncidentsAPI from './incidents';
import * as ActionsAPI from '../actions';
import * as CustomFieldOptionsAPI from '../custom-field-options';
import * as FollowUpsAPI from '../follow-ups';
import * as IncidentRolesAPI from '../incident-roles';
import * as IncidentTimestampsAPI from '../incident-timestamps';
import * as IncidentTypesAPI from '../incident-types';
import * as ScheduleOverridesAPI from '../schedule-overrides';
import * as SeveritiesAPI from '../severities';
import * as IncidentsActionsAPI from './actions';
import { ActionEditParams, ActionEditResponse, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Incidents extends APIResource {
  actions: IncidentsActionsAPI.Actions = new IncidentsActionsAPI.Actions(this._client);

  /**
   * List all incidents for an organisation.
   *
   * @deprecated
   */
  list(
    query: IncidentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IncidentListResponse> {
    return this._client.get('/v1/incidents', { query, ...options });
  }

  /**
   * Create a new incident.
   *
   * @deprecated
   */
  create(body: IncidentCreateParams, options?: RequestOptions): APIPromise<IncidentCreateResponse> {
    return this._client.post('/v1/incidents', { body, ...options });
  }

  /**
   * Get a single incident.
   *
   * @deprecated
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<IncidentRetrieveResponse> {
    return this._client.get(path`/v1/incidents/${id}`, options);
  }

  /**
   * List all incidents for an organisation.
   *
   * This endpoint supports a number of filters, which can help find incidents
   * matching certain criteria.
   *
   * Filters are provided as query parameters, but due to the dynamic nature of what
   * you can query by (different accounts have different custom fields, statuses,
   * etc) they are more complex than most.
   *
   * The maximum page size that can be requested is 250.
   *
   * To help, here are some exemplar curl requests with a human description of what
   * they search for.
   *
   * Note that:
   *
   * - Filters may be used together, and the result will be incidents that match all
   *   filters.
   * - IDs are normally in UUID format, but have been replaced with shorter strings
   *   to improve readability.
   * - All query parameters must be URI encoded.
   *
   * ### By status
   *
   * With status of id=ABC, find all incidents that are set to that status:
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'status[one_of]=ABC'
   *
   * Or all incidents that are not set to status with id=ABC:
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'status[not_in]=ABC'
   *
   * ### By created_at or updated_at
   *
   * Find all incidents that follow specified date parameters for created_at and
   * updated_at fields. Possible values are "gte" (greater than or equal to), "lte"
   * (less than or equal to), and "date_range" (between two dates). The following
   * example finds all incidents created before or on 2021-01-02T00:00:00Z:
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'created_at[lte]=2021-01-02'
   *
   * To find incidents created within a specific date range, use the date_range
   * option with tilde-separated dates:
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'created_at[date_range]=2024-12-02~2024-12-08'
   *
   * ### By status category
   *
   * Find all incidents that are in a status category. Possible values are "triage",
   * "declined", "merged", "canceled", "live", "learning" and "closed":
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'status_category[one_of]=live'
   *
   * Or all incidents that are not in a status category:
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'status_category[not_in]=live'
   *
   * ### By severity
   *
   * With severity of id=ABC, find all incidents that are set to that severity:
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'severity[one_of]=ABC'
   *
   * Or all incidents where severity rank is greater-than-or-equal-to the rank of
   * severity id=ABC:
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'severity[gte]=ABC'
   *
   * Or all incidents where severity rank is less-than-or-equal-to the rank of
   * severity id=ABC:
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'severity[lte]=ABC'
   *
   * ### By incident type
   *
   * With incident type of id=ABC, find all incidents that are of that type:
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'incident_type[one_of]=ABC'
   *
   * Or all incidents not of that type:
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'incident_type[not_in]=ABC'
   *
   * ### By incident mode
   *
   * By default, we return standard and retrospective incidents. This means that test
   * and tutorial incidents are filtered out. To override this behaviour, you can use
   * the mode filter to specify which modes you want to get.
   *
   * To find incidents of all modes:
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'mode[one_of]=standard&mode[one_of]=retrospective&mode[one_of]=test&mode[one_of]=tutorial'
   *
   * To find just test incidents:
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'mode[one_of]=test'
   *
   * ### By incident role
   *
   * Roles and custom fields have another nested layer in the query parameter, to
   * account for operations against any of the roles or custom fields created in the
   * account.
   *
   * With incident role id=ABC, find all incidents where that role is unset:
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'incident_role[ABC][is_set]=true'
   *
   * Or where the role has been set:
   *
   *     	curl --get 'https://api.incident.io/v2/incidents' \
   *     		--data 'incident_role[ABC][is_set]=false'
   *
   * ### By option custom fields
   *
   * With an option custom field id=ABC, all incidents that have field ABC set to the
   * custom field option of id=XYZ:
   *
   *     	curl \
   *     		--get 'https://api.incident.io/v2/incidents' \
   *     		--data 'custom_field[ABC][one_of]=XYZ'
   *
   * Or all incidents that do not have custom field id=ABC set to option id=XYZ:
   *
   *     	curl \
   *     		--get 'https://api.incident.io/v2/incidents' \
   *     		--data 'custom_field[ABC][not_in]=XYZ'
   *
   * @example
   * ```ts
   * const response = await client.incidents.listV2();
   * ```
   */
  listV2(
    query: IncidentListV2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IncidentListV2Response> {
    return this._client.get('/v2/incidents', { query, ...options });
  }

  /**
   * Create a new incident.
   *
   * Note that if the incident mode is set to "retrospective" then the new incident
   * will not be announced in Slack.
   *
   * @example
   * ```ts
   * const response = await client.incidents.createV2({
   *   idempotency_key: 'alert-uuid',
   *   visibility: 'public',
   *   custom_field_entries: [
   *     {
   *       custom_field_id: '01FCNDV6P870EA6S7TK1DSYDG0',
   *       values: [
   *         { ... },
   *       ],
   *     },
   *   ],
   *   incident_role_assignments: [
   *     {
   *       assignee: { ... },
   *       incident_role_id: '01FH5TZRWMNAFB0DZ23FD1TV96',
   *     },
   *   ],
   *   incident_status_id: '01G0J1EXE7AXZ2C93K61WBPYEH',
   *   incident_timestamp_values: [
   *     {
   *       incident_timestamp_id: '01FCNDV6P870EA6S7TK1DSYD5H',
   *       value: '2021-08-17T13:28:57.801578Z',
   *     },
   *   ],
   *   incident_type_id: '01FH5TZRWMNAFB0DZ23FD1TV96',
   *   mode: 'standard',
   *   name: 'Our database is sad',
   *   retrospective_incident_options: {
   *     external_id: 123,
   *     postmortem_document_url: 'https://docs.google.com/my_doc_id',
   *     slack_channel_id: 'abc123',
   *   },
   *   severity_id: '01FH5TZRWMNAFB0DZ23FD1TV96',
   *   slack_channel_name_override: 'inc-123-database-down',
   *   slack_team_id: 'T02A1FSLE8J',
   *   summary: "Our database is really really sad, and we don't know why yet.",
   * });
   * ```
   */
  createV2(body: IncidentCreateV2Params, options?: RequestOptions): APIPromise<IncidentCreateV2Response> {
    return this._client.post('/v2/incidents', { body, ...options });
  }

  /**
   * Get a single incident.
   *
   * The ID supplied can be either the incident's full ID, or the numeric part of its
   * reference. For example, to get INC-123, you could use either its full ID or:
   *
   *     	curl \
   *     		--get 'https://api.incident.io/v2/incidents/123
   *
   * @example
   * ```ts
   * const response = await client.incidents.retrieveV2(
   *   '01FDAG4SAP5TYPT98WGR2N7W91',
   * );
   * ```
   */
  retrieveV2(id: string, options?: RequestOptions): APIPromise<IncidentRetrieveV2Response> {
    return this._client.get(path`/v2/incidents/${id}`, options);
  }
}

export interface CustomFieldEntryPayload {
  /**
   * ID of the custom field this entry is linked against
   */
  custom_field_id: string;

  /**
   * List of values to associate with this entry. Use an empty array to unset the
   * value of the custom field.
   */
  values: Array<CustomFieldEntryPayload.Value>;
}

export namespace CustomFieldEntryPayload {
  export interface Value {
    /**
     * Unique identifier for the custom field value
     */
    id?: string;

    /**
     * ID of the catalog entry. You can also use an ExternalID or an Alias of the
     * catalog entry.
     */
    value_catalog_entry_id?: string;

    /**
     * If the custom field type is 'link', this will contain the value assigned.
     */
    value_link?: string;

    /**
     * If the custom field type is 'numeric', this will contain the value assigned.
     */
    value_numeric?: string;

    /**
     * ID of the custom field option
     */
    value_option_id?: string;

    /**
     * If the custom field type is 'text', this will contain the value assigned.
     */
    value_text?: string;

    /**
     * Deprecated: please use incident timestamp values instead
     */
    value_timestamp?: string;
  }
}

export interface CustomFieldOptionV2 {
  /**
   * Unique identifier for the custom field option
   */
  id: string;

  /**
   * ID of the custom field this option belongs to
   */
  custom_field_id: string;

  /**
   * Sort key used to order the custom field options correctly
   */
  sort_key: number;

  /**
   * Human readable name for the custom field option
   */
  value: string;
}

export interface IncidentRoleAssignmentPayload {
  /**
   * Unique ID of an incident role. Note that the 'reporter' role can only be
   * assigned when creating an incident.
   */
  incident_role_id: string;

  assignee?: ScheduleOverridesAPI.UserReferencePayloadV2;
}

export interface IncidentStatusV2 {
  /**
   * Unique ID of this incident status
   */
  id: string;

  /**
   * What category of status it is. All statuses apart from live (renamed in the app
   * to Active) and learning (renamed in the app to Post-incident) are managed by
   * incident.io and cannot be configured
   */
  category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused';

  created_at: string;

  /**
   * Rich text description of the incident status
   */
  description: string;

  /**
   * Unique name of this status
   */
  name: string;

  /**
   * Order of this incident status
   */
  rank: number;

  updated_at: string;
}

export interface IncidentTimestampValuePayload {
  /**
   * The id of the incident timestamp that this incident timestamp value is
   * associated with.
   */
  incident_timestamp_id: string;

  /**
   * The current value of this timestamp, for this incident
   */
  value?: string;
}

export interface IncidentV1 {
  /**
   * Unique identifier for the incident
   */
  id: string;

  /**
   * When the incident was created
   */
  created_at: string;

  creator: IncidentV1.Creator;

  /**
   * Custom field entries for this incident
   */
  custom_field_entries: Array<IncidentV1.CustomFieldEntry>;

  /**
   * A list of who is assigned to each role for this incident
   */
  incident_role_assignments: Array<IncidentV1.IncidentRoleAssignment>;

  /**
   * Whether the incident is real, a test, a tutorial, or importing as a
   * retrospective incident
   */
  mode: 'real' | 'test' | 'tutorial';

  /**
   * Explanation of the incident
   */
  name: string;

  /**
   * Reference to this incident, as displayed across the product
   */
  reference: string;

  /**
   * ID of the Slack channel in the organisation Slack workspace. Note that the
   * channel is sometimes created asynchronously, so may not be present when the
   * incident is just created.
   */
  slack_channel_id: string;

  /**
   * ID of the Slack team / workspace. This is only required if you are using a Slack
   * Enterprise Grid with multiple teams.
   */
  slack_team_id: string;

  /**
   * Current status of the incident
   */
  status: 'triage' | 'investigating' | 'fixing' | 'monitoring' | 'closed' | 'declined';

  /**
   * When the incident was last updated
   */
  updated_at: string;

  /**
   * Whether the incident should be open to anyone in your Slack workspace (public),
   * or invite-only (private). For more information on Private Incidents see our
   * [help centre](https://help.incident.io/articles/5905558102-can-we-mark-incidents-as-sensitive-and-restrict-access).
   */
  visibility: 'public' | 'private';

  /**
   * The call URL attached to this incident
   */
  call_url?: string;

  incident_type?: IncidentTypesAPI.IncidentType;

  /**
   * A permanent link to the homepage for this incident
   */
  permalink?: string;

  /**
   * Description of the incident
   */
  postmortem_document_url?: string;

  severity?: SeveritiesAPI.SeverityV1;

  /**
   * Name of the slack channel
   */
  slack_channel_name?: string;

  /**
   * Detailed description of the incident
   */
  summary?: string;

  /**
   * Incident lifecycle events and when they last occurred
   */
  timestamps?: Array<IncidentV1.Timestamp>;
}

export namespace IncidentV1 {
  export interface Creator {
    api_key?: Creator.APIKey;

    user?: ActionsAPI.UserV1;
  }

  export namespace Creator {
    export interface APIKey {
      /**
       * Unique identifier for this API key
       */
      id: string;

      /**
       * The name of the API key, for the user's reference
       */
      name: string;
    }
  }

  export interface CustomFieldEntry {
    custom_field: CustomFieldEntry.CustomField;

    /**
     * List of custom field values set on this entry
     */
    values: Array<CustomFieldEntry.Value>;
  }

  export namespace CustomFieldEntry {
    export interface CustomField {
      /**
       * Unique identifier for the custom field
       */
      id: string;

      /**
       * Description of the custom field
       */
      description: string;

      /**
       * Type of custom field
       */
      field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric';

      /**
       * Human readable name for the custom field
       */
      name: string;

      /**
       * What options are available for this custom field, if this field has options
       */
      options: Array<CustomFieldOptionsAPI.CustomFieldOptionV1>;
    }

    export interface Value {
      value_catalog_entry?: Value.ValueCatalogEntry;

      /**
       * If the custom field type is 'link', this will contain the value assigned.
       */
      value_link?: string;

      /**
       * If the custom field type is 'numeric', this will contain the value assigned.
       */
      value_numeric?: string;

      value_option?: CustomFieldOptionsAPI.CustomFieldOptionV1;

      /**
       * If the custom field type is 'text', this will contain the value assigned.
       */
      value_text?: string;
    }

    export namespace Value {
      export interface ValueCatalogEntry {
        /**
         * ID of this catalog entry
         */
        id: string;

        /**
         * Name is the human readable name of this entry
         */
        name: string;

        /**
         * Optional aliases that can be used to reference this entry
         */
        aliases?: Array<string>;

        /**
         * An optional alternative ID for this entry, which is ensured to be unique for the
         * type
         */
        external_id?: string;
      }
    }
  }

  export interface IncidentRoleAssignment {
    role: IncidentRolesAPI.IncidentRoleV1;

    assignee?: ActionsAPI.UserV1;
  }

  export interface Timestamp {
    /**
     * Name of the lifecycle event
     */
    name: string;

    /**
     * When this last occurred, if it did
     */
    last_occurred_at?: string;
  }
}

export interface IncidentV2 {
  /**
   * Unique identifier for the incident
   */
  id: string;

  /**
   * When the incident was created
   */
  created_at: string;

  creator: ActionsAPI.ActorV2;

  /**
   * Custom field entries for this incident
   */
  custom_field_entries: Array<IncidentV2.CustomFieldEntry>;

  /**
   * A list of who is assigned to each role for this incident
   */
  incident_role_assignments: Array<IncidentV2.IncidentRoleAssignment>;

  incident_status: IncidentStatusV2;

  /**
   * Whether the incident is real, a test, a tutorial, or importing as a
   * retrospective incident
   */
  mode: 'standard' | 'retrospective' | 'test' | 'tutorial';

  /**
   * Explanation of the incident
   */
  name: string;

  /**
   * Reference to this incident, as displayed across the product
   */
  reference: string;

  /**
   * ID of the Slack channel in the organisation Slack workspace. Note that the
   * channel is sometimes created asynchronously, so may not be present when the
   * incident is just created.
   */
  slack_channel_id: string;

  /**
   * ID of the Slack team / workspace. This is only required if you are using a Slack
   * Enterprise Grid with multiple teams.
   */
  slack_team_id: string;

  /**
   * When the incident was last updated
   */
  updated_at: string;

  /**
   * Whether the incident should be open to anyone in your Slack workspace (public),
   * or invite-only (private). For more information on Private Incidents see our
   * [help centre](https://help.incident.io/articles/5905558102-can-we-mark-incidents-as-sensitive-and-restrict-access).
   */
  visibility: 'public' | 'private';

  /**
   * The call URL attached to this incident
   */
  call_url?: string;

  /**
   * Incident duration metrics and their measurements for this incident
   */
  duration_metrics?: Array<IncidentV2.DurationMetric>;

  external_issue_reference?: FollowUpsAPI.ExternalIssueReference;

  /**
   * If this incident has a debrief attached
   */
  has_debrief?: boolean;

  /**
   * Incident lifecycle events and when they occurred
   */
  incident_timestamp_values?: Array<IncidentV2.IncidentTimestampValue>;

  incident_type?: IncidentV2.IncidentType;

  /**
   * A permanent link to the homepage for this incident
   */
  permalink?: string;

  /**
   * Description of the incident
   */
  postmortem_document_url?: string;

  severity?: Severity;

  /**
   * Name of the slack channel
   */
  slack_channel_name?: string;

  /**
   * Detailed description of the incident
   */
  summary?: string;

  /**
   * Amount of time spent on the incident in late hours
   */
  workload_minutes_late?: number;

  /**
   * Amount of time spent on the incident in sleeping hours
   */
  workload_minutes_sleeping?: number;

  /**
   * Amount of time spent on the incident in total
   */
  workload_minutes_total?: number;

  /**
   * Amount of time spent on the incident in working hours
   */
  workload_minutes_working?: number;
}

export namespace IncidentV2 {
  export interface CustomFieldEntry {
    custom_field: CustomFieldEntry.CustomField;

    /**
     * List of custom field values set on this entry
     */
    values: Array<CustomFieldEntry.Value>;
  }

  export namespace CustomFieldEntry {
    export interface CustomField {
      /**
       * Unique identifier for the custom field
       */
      id: string;

      /**
       * Description of the custom field
       */
      description: string;

      /**
       * Type of custom field
       */
      field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric';

      /**
       * Human readable name for the custom field
       */
      name: string;

      /**
       * What options are available for this custom field, if this field has options
       */
      options: Array<IncidentsAPI.CustomFieldOptionV2>;
    }

    export interface Value {
      value_catalog_entry?: Value.ValueCatalogEntry;

      /**
       * If the custom field type is 'link', this will contain the value assigned.
       */
      value_link?: string;

      /**
       * If the custom field type is 'numeric', this will contain the value assigned.
       */
      value_numeric?: string;

      value_option?: IncidentsAPI.CustomFieldOptionV2;

      /**
       * If the custom field type is 'text', this will contain the value assigned.
       */
      value_text?: string;
    }

    export namespace Value {
      export interface ValueCatalogEntry {
        /**
         * ID of this catalog entry
         */
        id: string;

        /**
         * Name is the human readable name of this entry
         */
        name: string;

        /**
         * Optional aliases that can be used to reference this entry
         */
        aliases?: Array<string>;

        /**
         * An optional alternative ID for this entry, which is ensured to be unique for the
         * type
         */
        external_id?: string;
      }
    }
  }

  export interface IncidentRoleAssignment {
    role: IncidentRoleAssignment.Role;

    assignee?: ActionsAPI.UserV2;
  }

  export namespace IncidentRoleAssignment {
    export interface Role {
      /**
       * Unique identifier for the role
       */
      id: string;

      /**
       * When the role was created
       */
      created_at: string;

      /**
       * Describes the purpose of the role
       */
      description: string;

      /**
       * Provided to whoever is nominated for the role. Note that this will be empty for
       * the 'reporter' role.
       */
      instructions: string;

      /**
       * Human readable name of the incident role
       */
      name: string;

      /**
       * Type of incident role
       */
      role_type: 'lead' | 'reporter' | 'custom';

      /**
       * Short human readable name for Slack. Note that this will be empty for the
       * 'reporter' role.
       */
      shortform: string;

      /**
       * When the role was last updated
       */
      updated_at: string;

      /**
       * This field is deprecated.
       */
      required?: boolean;
    }
  }

  export interface DurationMetric {
    duration_metric: DurationMetric.DurationMetric;

    /**
     * The calculated durations for this metric
     */
    value_seconds?: number;
  }

  export namespace DurationMetric {
    export interface DurationMetric {
      /**
       * Unique ID of this incident duration metric
       */
      id: string;

      /**
       * Unique name of this duration metric
       */
      name: string;
    }
  }

  export interface IncidentTimestampValue {
    incident_timestamp: IncidentTimestampsAPI.IncidentTimestamp;

    value?: IncidentTimestampValue.Value;
  }

  export namespace IncidentTimestampValue {
    export interface Value {
      /**
       * The current value of this timestamp, for this incident
       */
      value?: string;
    }
  }

  export interface IncidentType {
    /**
     * Unique identifier for this Incident Type
     */
    id: string;

    /**
     * Whether incidents of this must always, or can optionally, be created in triage
     */
    create_in_triage: 'always' | 'optional';

    /**
     * When this resource was created
     */
    created_at: string;

    /**
     * What is this incident type for?
     */
    description: string;

    /**
     * The default Incident Type is used when no other type is explicitly specified
     */
    is_default: boolean;

    /**
     * The name of this Incident Type
     */
    name: string;

    /**
     * Should all incidents created with this Incident Type be private?
     */
    private_incidents_only: boolean;

    /**
     * When this resource was last updated
     */
    updated_at: string;
  }
}

export interface PaginationMetaResultWithTotal {
  /**
   * What was the maximum number of results requested
   */
  page_size: number;

  /**
   * If provided, pass this as the 'after' param to load the next page
   */
  after?: string;

  /**
   * How many matching records were there in total, if known
   */
  total_record_count?: number;
}

export interface Severity {
  /**
   * Unique identifier of the severity
   */
  id: string;

  /**
   * When the action was created
   */
  created_at: string;

  /**
   * Description of the severity
   */
  description: string;

  /**
   * Human readable name of the severity
   */
  name: string;

  /**
   * Rank to help sort severities (lower numbers are less severe)
   */
  rank: number;

  /**
   * When the action was last updated
   */
  updated_at: string;
}

export interface IncidentCreateResponse {
  incident: IncidentV1;
}

export interface IncidentRetrieveResponse {
  incident: IncidentV1;
}

export interface IncidentListResponse {
  incidents: Array<IncidentV1>;

  pagination_meta?: IncidentListResponse.PaginationMeta;
}

export namespace IncidentListResponse {
  export interface PaginationMeta {
    /**
     * What was the maximum number of results requested
     */
    page_size: number;

    /**
     * If provided, pass this as the 'after' param to load the next page
     */
    after?: string;

    /**
     * How many matching records were there in total, if known
     */
    total_record_count?: number;
  }
}

export interface IncidentCreateV2Response {
  incident: IncidentV2;
}

export interface IncidentListV2Response {
  incidents: Array<IncidentV2>;

  pagination_meta?: PaginationMetaResultWithTotal;
}

export interface IncidentRetrieveV2Response {
  incident: IncidentV2;
}

export interface IncidentListParams {
  /**
   * An record's ID. This endpoint will return a list of records after this ID in
   * relation to the API response order.
   */
  after?: string;

  /**
   * Integer number of records to return
   */
  page_size?: number;

  /**
   * Filter for incidents in these statuses
   */
  status?: Array<string>;
}

export interface IncidentCreateParams {
  /**
   * Unique string used to de-duplicate incident create requests
   */
  idempotency_key: string;

  /**
   * Whether the incident should be open to anyone in your Slack workspace (public),
   * or invite-only (private). For more information on Private Incidents see our
   * [help centre](https://help.incident.io/articles/5905558102-can-we-mark-incidents-as-sensitive-and-restrict-access).
   */
  visibility: 'public' | 'private';

  /**
   * Set the incident's custom fields to these values
   */
  custom_field_entries?: Array<IncidentCreateParams.CustomFieldEntry>;

  /**
   * Assign incident roles to these people
   */
  incident_role_assignments?: Array<IncidentCreateParams.IncidentRoleAssignment>;

  /**
   * Incident type to create this incident as
   */
  incident_type_id?: string;

  /**
   * Whether the incident is real or test
   */
  mode?: 'real' | 'test';

  /**
   * Explanation of the incident
   */
  name?: string;

  /**
   * Severity to create incident as
   */
  severity_id?: string;

  /**
   * ID of the Slack team / workspace. This is only required if you are using a Slack
   * Enterprise Grid with multiple teams.
   */
  slack_team_id?: string;

  /**
   * Channel ID of the source message, if this incident was created from one
   */
  source_message_channel_id?: string;

  /**
   * Timestamp of the source message, if this incident was created from one
   */
  source_message_timestamp?: string;

  /**
   * Current status of the incident
   */
  status?: 'triage' | 'investigating' | 'fixing' | 'monitoring' | 'closed' | 'declined';

  /**
   * Detailed description of the incident
   */
  summary?: string;
}

export namespace IncidentCreateParams {
  export interface CustomFieldEntry {
    /**
     * ID of the custom field this entry is linked against
     */
    custom_field_id: string;

    /**
     * List of values to associate with this entry. Use an empty array to unset the
     * value of the custom field.
     */
    values: Array<CustomFieldEntry.Value>;
  }

  export namespace CustomFieldEntry {
    export interface Value {
      /**
       * Unique identifier for the custom field value
       */
      id?: string;

      /**
       * ID of the catalog entry. You can also use an ExternalID or an Alias of the
       * catalog entry.
       */
      value_catalog_entry_id?: string;

      /**
       * If the custom field type is 'link', this will contain the value assigned.
       */
      value_link?: string;

      /**
       * If the custom field type is 'numeric', this will contain the value assigned.
       */
      value_numeric?: string;

      /**
       * ID of the custom field option
       */
      value_option_id?: string;

      /**
       * If the custom field type is 'text', this will contain the value assigned.
       */
      value_text?: string;

      /**
       * Deprecated: please use incident timestamp values instead
       */
      value_timestamp?: string;
    }
  }

  export interface IncidentRoleAssignment {
    assignee: IncidentRoleAssignment.Assignee;

    /**
     * Unique ID of an incident role. Note that the 'reporter' role can only be
     * assigned when creating an incident.
     */
    incident_role_id: string;
  }

  export namespace IncidentRoleAssignment {
    export interface Assignee {
      /**
       * The incident.io ID of a user
       */
      id?: string;

      /**
       * The user's email address, matching the email on their Slack account
       */
      email?: string;

      /**
       * The ID of the user's Slack account.
       */
      slack_user_id?: string;
    }
  }
}

export interface IncidentListV2Params {
  /**
   * An incident's ID. This endpoint will return a list of incidents after this ID in
   * relation to the API response order.
   */
  after?: string;

  /**
   * Filter on incident created at timestamp. The accepted operators are 'gte', 'lte'
   * and 'date_range'.
   */
  created_at?: { [key: string]: Array<string> };

  /**
   * Filter on an incident custom field. Custom field ID should be sent, followed by
   * the operator and values. Accepted operator will depend on the custom field type.
   */
  custom_field?: { [key: string]: { [key: string]: Array<string> } };

  /**
   * Filter on an incident role. Role ID should be sent, followed by the operator and
   * values. The accepted operators are 'one_of', 'is_blank'.
   */
  incident_role?: { [key: string]: { [key: string]: Array<string> } };

  /**
   * Filter on incident type. The accepted operators are 'one_of, or 'not_in'.
   */
  incident_type?: { [key: string]: Array<string> };

  /**
   * Filter on incident mode. The accepted operator is 'one_of'. If this is not
   * provided, this value defaults to `{"one_of": ["standard", "retrospective"] }`,
   * meaning that test and tutorial incidents are not included.
   */
  mode?: { [key: string]: Array<string> };

  /**
   * Integer number of records to return
   */
  page_size?: number;

  /**
   * Filter on incident severity. The accepted operators are 'one_of', 'not_in',
   * 'gte', 'lte'.
   */
  severity?: { [key: string]: Array<string> };

  /**
   * Filter on incident status. The accepted operators are 'one_of', or 'not_in'.
   */
  status?: { [key: string]: Array<string> };

  /**
   * Filter on the category of the incidents status. The accepted operators are
   * 'one_of', or 'not_in'.
   */
  status_category?: { [key: string]: Array<string> };

  /**
   * Filter on incident updated at timestamp. The accepted operators are 'gte', 'lte'
   * and 'date_range'.
   */
  updated_at?: { [key: string]: Array<string> };
}

export interface IncidentCreateV2Params {
  /**
   * Unique string used to de-duplicate incident create requests
   */
  idempotency_key: string;

  /**
   * Whether the incident should be open to anyone in your Slack workspace (public),
   * or invite-only (private). For more information on Private Incidents see our
   * [help centre](https://help.incident.io/articles/5905558102-can-we-mark-incidents-as-sensitive-and-restrict-access).
   */
  visibility: 'public' | 'private';

  /**
   * Set the incident's custom fields to these values
   */
  custom_field_entries?: Array<CustomFieldEntryPayload>;

  /**
   * Assign incident roles to these people
   */
  incident_role_assignments?: Array<IncidentRoleAssignmentPayload>;

  /**
   * Incident status to assign to the incident
   */
  incident_status_id?: string;

  /**
   * Assign the incident's timestamps to these values
   */
  incident_timestamp_values?: Array<IncidentTimestampValuePayload>;

  /**
   * Incident type to create this incident as
   */
  incident_type_id?: string;

  /**
   * Whether the incident is real, a test, a tutorial, or importing as a
   * retrospective incident
   */
  mode?: 'standard' | 'retrospective' | 'test' | 'tutorial';

  /**
   * Explanation of the incident
   */
  name?: string;

  retrospective_incident_options?: IncidentCreateV2Params.RetrospectiveIncidentOptions;

  /**
   * Severity to create incident as
   */
  severity_id?: string;

  /**
   * Name of the Slack channel to create for this incident
   */
  slack_channel_name_override?: string;

  /**
   * Slack Team to create the incident in
   */
  slack_team_id?: string;

  /**
   * Detailed description of the incident
   */
  summary?: string;
}

export namespace IncidentCreateV2Params {
  export interface RetrospectiveIncidentOptions {
    /**
     * The external ID (e.g. the 123 in INC-123) to assign to the incident. This can be
     * useful when importing incidents. If you want to use this field, you'll need to
     * talk to us first.
     */
    external_id?: number;

    /**
     * The URL of the postmortem, if there is one
     */
    postmortem_document_url?: string;

    /**
     * Pass the ID of a Slack channel to attach the incident to an existing channel,
     * rather than creating a new one
     */
    slack_channel_id?: string;
  }
}

Incidents.Actions = Actions;

export declare namespace Incidents {
  export {
    type CustomFieldEntryPayload as CustomFieldEntryPayload,
    type CustomFieldOptionV2 as CustomFieldOptionV2,
    type IncidentRoleAssignmentPayload as IncidentRoleAssignmentPayload,
    type IncidentStatusV2 as IncidentStatusV2,
    type IncidentTimestampValuePayload as IncidentTimestampValuePayload,
    type IncidentV1 as IncidentV1,
    type IncidentV2 as IncidentV2,
    type PaginationMetaResultWithTotal as PaginationMetaResultWithTotal,
    type Severity as Severity,
    type IncidentCreateResponse as IncidentCreateResponse,
    type IncidentRetrieveResponse as IncidentRetrieveResponse,
    type IncidentListResponse as IncidentListResponse,
    type IncidentCreateV2Response as IncidentCreateV2Response,
    type IncidentListV2Response as IncidentListV2Response,
    type IncidentRetrieveV2Response as IncidentRetrieveV2Response,
    type IncidentListParams as IncidentListParams,
    type IncidentCreateParams as IncidentCreateParams,
    type IncidentListV2Params as IncidentListV2Params,
    type IncidentCreateV2Params as IncidentCreateV2Params,
  };

  export {
    Actions as Actions,
    type ActionEditResponse as ActionEditResponse,
    type ActionEditParams as ActionEditParams,
  };
}
