// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import retrieve_actions from './actions/retrieve-actions';
import list_actions from './actions/list-actions';
import list_v2_actions from './actions/list-v2-actions';
import retrieve_v2_actions from './actions/retrieve-v2-actions';
import create_custom_field_options from './custom-field-options/create-custom-field-options';
import retrieve_custom_field_options from './custom-field-options/retrieve-custom-field-options';
import update_custom_field_options from './custom-field-options/update-custom-field-options';
import list_custom_field_options from './custom-field-options/list-custom-field-options';
import delete_custom_field_options from './custom-field-options/delete-custom-field-options';
import create_v1_custom_fields from './custom-fields/create-v1-custom-fields';
import create_v2_custom_fields from './custom-fields/create-v2-custom-fields';
import delete_v1_custom_fields from './custom-fields/delete-v1-custom-fields';
import delete_v2_custom_fields from './custom-fields/delete-v2-custom-fields';
import list_v1_custom_fields from './custom-fields/list-v1-custom-fields';
import list_v2_custom_fields from './custom-fields/list-v2-custom-fields';
import retrieve_v1_custom_fields from './custom-fields/retrieve-v1-custom-fields';
import retrieve_v2_custom_fields from './custom-fields/retrieve-v2-custom-fields';
import update_v1_custom_fields from './custom-fields/update-v1-custom-fields';
import update_v2_custom_fields from './custom-fields/update-v2-custom-fields';
import retrieve_identity from './identity/retrieve-identity';
import create_incident_attachments from './incident-attachments/create-incident-attachments';
import list_incident_attachments from './incident-attachments/list-incident-attachments';
import delete_incident_attachments from './incident-attachments/delete-incident-attachments';
import create_incident_memberships from './incident-memberships/create-incident-memberships';
import revoke_incident_memberships_actions from './incident-memberships/actions/revoke-incident-memberships-actions';
import list_incident_relationships from './incident-relationships/list-incident-relationships';
import create_incident_roles from './incident-roles/create-incident-roles';
import retrieve_incident_roles from './incident-roles/retrieve-incident-roles';
import update_incident_roles from './incident-roles/update-incident-roles';
import list_incident_roles from './incident-roles/list-incident-roles';
import delete_incident_roles from './incident-roles/delete-incident-roles';
import create_v2_incident_roles from './incident-roles/create-v2-incident-roles';
import delete_v2_incident_roles from './incident-roles/delete-v2-incident-roles';
import list_v2_incident_roles from './incident-roles/list-v2-incident-roles';
import retrieve_v2_incident_roles from './incident-roles/retrieve-v2-incident-roles';
import update_v2_incident_roles from './incident-roles/update-v2-incident-roles';
import create_incident_statuses from './incident-statuses/create-incident-statuses';
import retrieve_incident_statuses from './incident-statuses/retrieve-incident-statuses';
import update_incident_statuses from './incident-statuses/update-incident-statuses';
import list_incident_statuses from './incident-statuses/list-incident-statuses';
import delete_incident_statuses from './incident-statuses/delete-incident-statuses';
import retrieve_incident_types from './incident-types/retrieve-incident-types';
import list_incident_types from './incident-types/list-incident-types';
import create_incidents from './incidents/create-incidents';
import retrieve_incidents from './incidents/retrieve-incidents';
import list_incidents from './incidents/list-incidents';
import create_v2_incidents from './incidents/create-v2-incidents';
import list_v2_incidents from './incidents/list-v2-incidents';
import retrieve_v2_incidents from './incidents/retrieve-v2-incidents';
import edit_incidents_actions from './incidents/actions/edit-incidents-actions';
import retrieve_ip_allowlists from './ip-allowlists/retrieve-ip-allowlists';
import update_ip_allowlists from './ip-allowlists/update-ip-allowlists';
import retrieve_openapi_json from './openapi-json/retrieve-openapi-json';
import retrieve_openapi_v3_json from './openapi-v3-json/retrieve-openapi-v3-json';
import create_severities from './severities/create-severities';
import retrieve_severities from './severities/retrieve-severities';
import update_severities from './severities/update-severities';
import list_severities from './severities/list-severities';
import delete_severities from './severities/delete-severities';
import list_response_incidents_status_pages_incidents from './status-pages/incidents/list-response-incidents-status-pages-incidents';
import create_alert_attributes from './alert-attributes/create-alert-attributes';
import retrieve_alert_attributes from './alert-attributes/retrieve-alert-attributes';
import update_alert_attributes from './alert-attributes/update-alert-attributes';
import list_alert_attributes from './alert-attributes/list-alert-attributes';
import delete_alert_attributes from './alert-attributes/delete-alert-attributes';
import create_http_alert_events from './alert-events/create-http-alert-events';
import create_alert_routes from './alert-routes/create-alert-routes';
import retrieve_alert_routes from './alert-routes/retrieve-alert-routes';
import update_alert_routes from './alert-routes/update-alert-routes';
import list_alert_routes from './alert-routes/list-alert-routes';
import delete_alert_routes from './alert-routes/delete-alert-routes';
import create_alert_sources from './alert-sources/create-alert-sources';
import retrieve_alert_sources from './alert-sources/retrieve-alert-sources';
import update_alert_sources from './alert-sources/update-alert-sources';
import list_alert_sources from './alert-sources/list-alert-sources';
import delete_alert_sources from './alert-sources/delete-alert-sources';
import retrieve_alerts from './alerts/retrieve-alerts';
import list_alerts from './alerts/list-alerts';
import create_entry_v2_catalog_entries from './catalog-entries/create-entry-v2-catalog-entries';
import create_entry_v3_catalog_entries from './catalog-entries/create-entry-v3-catalog-entries';
import destroy_entry_v2_catalog_entries from './catalog-entries/destroy-entry-v2-catalog-entries';
import destroy_entry_v3_catalog_entries from './catalog-entries/destroy-entry-v3-catalog-entries';
import list_entries_v2_catalog_entries from './catalog-entries/list-entries-v2-catalog-entries';
import list_entries_v3_catalog_entries from './catalog-entries/list-entries-v3-catalog-entries';
import show_entry_v2_catalog_entries from './catalog-entries/show-entry-v2-catalog-entries';
import show_entry_v3_catalog_entries from './catalog-entries/show-entry-v3-catalog-entries';
import update_entry_v2_catalog_entries from './catalog-entries/update-entry-v2-catalog-entries';
import update_entry_v3_catalog_entries from './catalog-entries/update-entry-v3-catalog-entries';
import list_v2_catalog_resources from './catalog-resources/list-v2-catalog-resources';
import list_v3_catalog_resources from './catalog-resources/list-v3-catalog-resources';
import create_catalog_types from './catalog-types/create-catalog-types';
import retrieve_catalog_types from './catalog-types/retrieve-catalog-types';
import update_catalog_types from './catalog-types/update-catalog-types';
import list_catalog_types from './catalog-types/list-catalog-types';
import destroy_catalog_types from './catalog-types/destroy-catalog-types';
import update_schema_catalog_types_actions from './catalog-types/actions/update-schema-catalog-types-actions';
import create_escalation_paths from './escalation-paths/create-escalation-paths';
import retrieve_escalation_paths from './escalation-paths/retrieve-escalation-paths';
import update_escalation_paths from './escalation-paths/update-escalation-paths';
import delete_escalation_paths from './escalation-paths/delete-escalation-paths';
import create_escalations from './escalations/create-escalations';
import retrieve_escalations from './escalations/retrieve-escalations';
import list_escalations from './escalations/list-escalations';
import retrieve_follow_ups from './follow-ups/retrieve-follow-ups';
import list_follow_ups from './follow-ups/list-follow-ups';
import list_incident_alerts from './incident-alerts/list-incident-alerts';
import retrieve_incident_timestamps from './incident-timestamps/retrieve-incident-timestamps';
import list_incident_timestamps from './incident-timestamps/list-incident-timestamps';
import list_incident_updates from './incident-updates/list-incident-updates';
import list_schedule_entries from './schedule-entries/list-schedule-entries';
import create_schedule_overrides from './schedule-overrides/create-schedule-overrides';
import create_schedules from './schedules/create-schedules';
import retrieve_schedules from './schedules/retrieve-schedules';
import update_schedules from './schedules/update-schedules';
import list_schedules from './schedules/list-schedules';
import delete_schedules from './schedules/delete-schedules';
import retrieve_users from './users/retrieve-users';
import list_users from './users/list-users';
import create_workflows from './workflows/create-workflows';
import retrieve_workflows from './workflows/retrieve-workflows';
import update_workflows from './workflows/update-workflows';
import list_workflows from './workflows/list-workflows';
import destroy_workflows from './workflows/destroy-workflows';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(retrieve_actions);
addEndpoint(list_actions);
addEndpoint(list_v2_actions);
addEndpoint(retrieve_v2_actions);
addEndpoint(create_custom_field_options);
addEndpoint(retrieve_custom_field_options);
addEndpoint(update_custom_field_options);
addEndpoint(list_custom_field_options);
addEndpoint(delete_custom_field_options);
addEndpoint(create_v1_custom_fields);
addEndpoint(create_v2_custom_fields);
addEndpoint(delete_v1_custom_fields);
addEndpoint(delete_v2_custom_fields);
addEndpoint(list_v1_custom_fields);
addEndpoint(list_v2_custom_fields);
addEndpoint(retrieve_v1_custom_fields);
addEndpoint(retrieve_v2_custom_fields);
addEndpoint(update_v1_custom_fields);
addEndpoint(update_v2_custom_fields);
addEndpoint(retrieve_identity);
addEndpoint(create_incident_attachments);
addEndpoint(list_incident_attachments);
addEndpoint(delete_incident_attachments);
addEndpoint(create_incident_memberships);
addEndpoint(revoke_incident_memberships_actions);
addEndpoint(list_incident_relationships);
addEndpoint(create_incident_roles);
addEndpoint(retrieve_incident_roles);
addEndpoint(update_incident_roles);
addEndpoint(list_incident_roles);
addEndpoint(delete_incident_roles);
addEndpoint(create_v2_incident_roles);
addEndpoint(delete_v2_incident_roles);
addEndpoint(list_v2_incident_roles);
addEndpoint(retrieve_v2_incident_roles);
addEndpoint(update_v2_incident_roles);
addEndpoint(create_incident_statuses);
addEndpoint(retrieve_incident_statuses);
addEndpoint(update_incident_statuses);
addEndpoint(list_incident_statuses);
addEndpoint(delete_incident_statuses);
addEndpoint(retrieve_incident_types);
addEndpoint(list_incident_types);
addEndpoint(create_incidents);
addEndpoint(retrieve_incidents);
addEndpoint(list_incidents);
addEndpoint(create_v2_incidents);
addEndpoint(list_v2_incidents);
addEndpoint(retrieve_v2_incidents);
addEndpoint(edit_incidents_actions);
addEndpoint(retrieve_ip_allowlists);
addEndpoint(update_ip_allowlists);
addEndpoint(retrieve_openapi_json);
addEndpoint(retrieve_openapi_v3_json);
addEndpoint(create_severities);
addEndpoint(retrieve_severities);
addEndpoint(update_severities);
addEndpoint(list_severities);
addEndpoint(delete_severities);
addEndpoint(list_response_incidents_status_pages_incidents);
addEndpoint(create_alert_attributes);
addEndpoint(retrieve_alert_attributes);
addEndpoint(update_alert_attributes);
addEndpoint(list_alert_attributes);
addEndpoint(delete_alert_attributes);
addEndpoint(create_http_alert_events);
addEndpoint(create_alert_routes);
addEndpoint(retrieve_alert_routes);
addEndpoint(update_alert_routes);
addEndpoint(list_alert_routes);
addEndpoint(delete_alert_routes);
addEndpoint(create_alert_sources);
addEndpoint(retrieve_alert_sources);
addEndpoint(update_alert_sources);
addEndpoint(list_alert_sources);
addEndpoint(delete_alert_sources);
addEndpoint(retrieve_alerts);
addEndpoint(list_alerts);
addEndpoint(create_entry_v2_catalog_entries);
addEndpoint(create_entry_v3_catalog_entries);
addEndpoint(destroy_entry_v2_catalog_entries);
addEndpoint(destroy_entry_v3_catalog_entries);
addEndpoint(list_entries_v2_catalog_entries);
addEndpoint(list_entries_v3_catalog_entries);
addEndpoint(show_entry_v2_catalog_entries);
addEndpoint(show_entry_v3_catalog_entries);
addEndpoint(update_entry_v2_catalog_entries);
addEndpoint(update_entry_v3_catalog_entries);
addEndpoint(list_v2_catalog_resources);
addEndpoint(list_v3_catalog_resources);
addEndpoint(create_catalog_types);
addEndpoint(retrieve_catalog_types);
addEndpoint(update_catalog_types);
addEndpoint(list_catalog_types);
addEndpoint(destroy_catalog_types);
addEndpoint(update_schema_catalog_types_actions);
addEndpoint(create_escalation_paths);
addEndpoint(retrieve_escalation_paths);
addEndpoint(update_escalation_paths);
addEndpoint(delete_escalation_paths);
addEndpoint(create_escalations);
addEndpoint(retrieve_escalations);
addEndpoint(list_escalations);
addEndpoint(retrieve_follow_ups);
addEndpoint(list_follow_ups);
addEndpoint(list_incident_alerts);
addEndpoint(retrieve_incident_timestamps);
addEndpoint(list_incident_timestamps);
addEndpoint(list_incident_updates);
addEndpoint(list_schedule_entries);
addEndpoint(create_schedule_overrides);
addEndpoint(create_schedules);
addEndpoint(retrieve_schedules);
addEndpoint(update_schedules);
addEndpoint(list_schedules);
addEndpoint(delete_schedules);
addEndpoint(retrieve_users);
addEndpoint(list_users);
addEndpoint(create_workflows);
addEndpoint(retrieve_workflows);
addEndpoint(update_workflows);
addEndpoint(list_workflows);
addEndpoint(destroy_workflows);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
