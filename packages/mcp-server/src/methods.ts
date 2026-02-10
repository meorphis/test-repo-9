import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.actions.retrieve',
    fullyQualifiedName: 'actions.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/actions/{id}',
  },
  {
    clientCallName: 'client.actions.list',
    fullyQualifiedName: 'actions.list',
    httpMethod: 'get',
    httpPath: '/v1/actions',
  },
  {
    clientCallName: 'client.actions.listV2',
    fullyQualifiedName: 'actions.listV2',
    httpMethod: 'get',
    httpPath: '/v2/actions',
  },
  {
    clientCallName: 'client.actions.retrieveV2',
    fullyQualifiedName: 'actions.retrieveV2',
    httpMethod: 'get',
    httpPath: '/v2/actions/{id}',
  },
  {
    clientCallName: 'client.customFieldOptions.create',
    fullyQualifiedName: 'customFieldOptions.create',
    httpMethod: 'post',
    httpPath: '/v1/custom_field_options',
  },
  {
    clientCallName: 'client.customFieldOptions.retrieve',
    fullyQualifiedName: 'customFieldOptions.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/custom_field_options/{id}',
  },
  {
    clientCallName: 'client.customFieldOptions.update',
    fullyQualifiedName: 'customFieldOptions.update',
    httpMethod: 'put',
    httpPath: '/v1/custom_field_options/{id}',
  },
  {
    clientCallName: 'client.customFieldOptions.list',
    fullyQualifiedName: 'customFieldOptions.list',
    httpMethod: 'get',
    httpPath: '/v1/custom_field_options',
  },
  {
    clientCallName: 'client.customFieldOptions.delete',
    fullyQualifiedName: 'customFieldOptions.delete',
    httpMethod: 'delete',
    httpPath: '/v1/custom_field_options/{id}',
  },
  {
    clientCallName: 'client.customFields.createV1',
    fullyQualifiedName: 'customFields.createV1',
    httpMethod: 'post',
    httpPath: '/v1/custom_fields',
  },
  {
    clientCallName: 'client.customFields.createV2',
    fullyQualifiedName: 'customFields.createV2',
    httpMethod: 'post',
    httpPath: '/v2/custom_fields',
  },
  {
    clientCallName: 'client.customFields.deleteV1',
    fullyQualifiedName: 'customFields.deleteV1',
    httpMethod: 'delete',
    httpPath: '/v1/custom_fields/{id}',
  },
  {
    clientCallName: 'client.customFields.deleteV2',
    fullyQualifiedName: 'customFields.deleteV2',
    httpMethod: 'delete',
    httpPath: '/v2/custom_fields/{id}',
  },
  {
    clientCallName: 'client.customFields.listV1',
    fullyQualifiedName: 'customFields.listV1',
    httpMethod: 'get',
    httpPath: '/v1/custom_fields',
  },
  {
    clientCallName: 'client.customFields.listV2',
    fullyQualifiedName: 'customFields.listV2',
    httpMethod: 'get',
    httpPath: '/v2/custom_fields',
  },
  {
    clientCallName: 'client.customFields.retrieveV1',
    fullyQualifiedName: 'customFields.retrieveV1',
    httpMethod: 'get',
    httpPath: '/v1/custom_fields/{id}',
  },
  {
    clientCallName: 'client.customFields.retrieveV2',
    fullyQualifiedName: 'customFields.retrieveV2',
    httpMethod: 'get',
    httpPath: '/v2/custom_fields/{id}',
  },
  {
    clientCallName: 'client.customFields.updateV1',
    fullyQualifiedName: 'customFields.updateV1',
    httpMethod: 'put',
    httpPath: '/v1/custom_fields/{id}',
  },
  {
    clientCallName: 'client.customFields.updateV2',
    fullyQualifiedName: 'customFields.updateV2',
    httpMethod: 'put',
    httpPath: '/v2/custom_fields/{id}',
  },
  {
    clientCallName: 'client.identity.retrieve',
    fullyQualifiedName: 'identity.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/identity',
  },
  {
    clientCallName: 'client.incidentAttachments.create',
    fullyQualifiedName: 'incidentAttachments.create',
    httpMethod: 'post',
    httpPath: '/v1/incident_attachments',
  },
  {
    clientCallName: 'client.incidentAttachments.list',
    fullyQualifiedName: 'incidentAttachments.list',
    httpMethod: 'get',
    httpPath: '/v1/incident_attachments',
  },
  {
    clientCallName: 'client.incidentAttachments.delete',
    fullyQualifiedName: 'incidentAttachments.delete',
    httpMethod: 'delete',
    httpPath: '/v1/incident_attachments/{id}',
  },
  {
    clientCallName: 'client.incidentMemberships.create',
    fullyQualifiedName: 'incidentMemberships.create',
    httpMethod: 'post',
    httpPath: '/v1/incident_memberships',
  },
  {
    clientCallName: 'client.incidentMemberships.actions.revoke',
    fullyQualifiedName: 'incidentMemberships.actions.revoke',
    httpMethod: 'post',
    httpPath: '/v1/incident_memberships/actions/revoke',
  },
  {
    clientCallName: 'client.incidentRelationships.list',
    fullyQualifiedName: 'incidentRelationships.list',
    httpMethod: 'get',
    httpPath: '/v1/incident_relationships',
  },
  {
    clientCallName: 'client.incidentRoles.create',
    fullyQualifiedName: 'incidentRoles.create',
    httpMethod: 'post',
    httpPath: '/v1/incident_roles',
  },
  {
    clientCallName: 'client.incidentRoles.retrieve',
    fullyQualifiedName: 'incidentRoles.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/incident_roles/{id}',
  },
  {
    clientCallName: 'client.incidentRoles.update',
    fullyQualifiedName: 'incidentRoles.update',
    httpMethod: 'put',
    httpPath: '/v1/incident_roles/{id}',
  },
  {
    clientCallName: 'client.incidentRoles.list',
    fullyQualifiedName: 'incidentRoles.list',
    httpMethod: 'get',
    httpPath: '/v1/incident_roles',
  },
  {
    clientCallName: 'client.incidentRoles.delete',
    fullyQualifiedName: 'incidentRoles.delete',
    httpMethod: 'delete',
    httpPath: '/v1/incident_roles/{id}',
  },
  {
    clientCallName: 'client.incidentRoles.createV2',
    fullyQualifiedName: 'incidentRoles.createV2',
    httpMethod: 'post',
    httpPath: '/v2/incident_roles',
  },
  {
    clientCallName: 'client.incidentRoles.deleteV2',
    fullyQualifiedName: 'incidentRoles.deleteV2',
    httpMethod: 'delete',
    httpPath: '/v2/incident_roles/{id}',
  },
  {
    clientCallName: 'client.incidentRoles.listV2',
    fullyQualifiedName: 'incidentRoles.listV2',
    httpMethod: 'get',
    httpPath: '/v2/incident_roles',
  },
  {
    clientCallName: 'client.incidentRoles.retrieveV2',
    fullyQualifiedName: 'incidentRoles.retrieveV2',
    httpMethod: 'get',
    httpPath: '/v2/incident_roles/{id}',
  },
  {
    clientCallName: 'client.incidentRoles.updateV2',
    fullyQualifiedName: 'incidentRoles.updateV2',
    httpMethod: 'put',
    httpPath: '/v2/incident_roles/{id}',
  },
  {
    clientCallName: 'client.incidentStatuses.create',
    fullyQualifiedName: 'incidentStatuses.create',
    httpMethod: 'post',
    httpPath: '/v1/incident_statuses',
  },
  {
    clientCallName: 'client.incidentStatuses.retrieve',
    fullyQualifiedName: 'incidentStatuses.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/incident_statuses/{id}',
  },
  {
    clientCallName: 'client.incidentStatuses.update',
    fullyQualifiedName: 'incidentStatuses.update',
    httpMethod: 'put',
    httpPath: '/v1/incident_statuses/{id}',
  },
  {
    clientCallName: 'client.incidentStatuses.list',
    fullyQualifiedName: 'incidentStatuses.list',
    httpMethod: 'get',
    httpPath: '/v1/incident_statuses',
  },
  {
    clientCallName: 'client.incidentStatuses.delete',
    fullyQualifiedName: 'incidentStatuses.delete',
    httpMethod: 'delete',
    httpPath: '/v1/incident_statuses/{id}',
  },
  {
    clientCallName: 'client.incidentTypes.retrieve',
    fullyQualifiedName: 'incidentTypes.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/incident_types/{id}',
  },
  {
    clientCallName: 'client.incidentTypes.list',
    fullyQualifiedName: 'incidentTypes.list',
    httpMethod: 'get',
    httpPath: '/v1/incident_types',
  },
  {
    clientCallName: 'client.incidents.create',
    fullyQualifiedName: 'incidents.create',
    httpMethod: 'post',
    httpPath: '/v1/incidents',
  },
  {
    clientCallName: 'client.incidents.retrieve',
    fullyQualifiedName: 'incidents.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/incidents/{id}',
  },
  {
    clientCallName: 'client.incidents.list',
    fullyQualifiedName: 'incidents.list',
    httpMethod: 'get',
    httpPath: '/v1/incidents',
  },
  {
    clientCallName: 'client.incidents.createV2',
    fullyQualifiedName: 'incidents.createV2',
    httpMethod: 'post',
    httpPath: '/v2/incidents',
  },
  {
    clientCallName: 'client.incidents.listV2',
    fullyQualifiedName: 'incidents.listV2',
    httpMethod: 'get',
    httpPath: '/v2/incidents',
  },
  {
    clientCallName: 'client.incidents.retrieveV2',
    fullyQualifiedName: 'incidents.retrieveV2',
    httpMethod: 'get',
    httpPath: '/v2/incidents/{id}',
  },
  {
    clientCallName: 'client.incidents.actions.edit',
    fullyQualifiedName: 'incidents.actions.edit',
    httpMethod: 'post',
    httpPath: '/v2/incidents/{id}/actions/edit',
  },
  {
    clientCallName: 'client.ipAllowlists.retrieve',
    fullyQualifiedName: 'ipAllowlists.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/ip_allowlists',
  },
  {
    clientCallName: 'client.ipAllowlists.update',
    fullyQualifiedName: 'ipAllowlists.update',
    httpMethod: 'put',
    httpPath: '/v1/ip_allowlists',
  },
  {
    clientCallName: 'client.openAPIJson.retrieve',
    fullyQualifiedName: 'openAPIJson.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/openapi.json',
  },
  {
    clientCallName: 'client.openAPIV3Json.retrieve',
    fullyQualifiedName: 'openAPIV3Json.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/openapiV3.json',
  },
  {
    clientCallName: 'client.severities.create',
    fullyQualifiedName: 'severities.create',
    httpMethod: 'post',
    httpPath: '/v1/severities',
  },
  {
    clientCallName: 'client.severities.retrieve',
    fullyQualifiedName: 'severities.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/severities/{id}',
  },
  {
    clientCallName: 'client.severities.update',
    fullyQualifiedName: 'severities.update',
    httpMethod: 'put',
    httpPath: '/v1/severities/{id}',
  },
  {
    clientCallName: 'client.severities.list',
    fullyQualifiedName: 'severities.list',
    httpMethod: 'get',
    httpPath: '/v1/severities',
  },
  {
    clientCallName: 'client.severities.delete',
    fullyQualifiedName: 'severities.delete',
    httpMethod: 'delete',
    httpPath: '/v1/severities/{id}',
  },
  {
    clientCallName: 'client.statusPages.incidents.listResponseIncidents',
    fullyQualifiedName: 'statusPages.incidents.listResponseIncidents',
    httpMethod: 'get',
    httpPath: '/v1/status-pages/{id}/incidents/{incident_id}/response-incidents',
  },
  {
    clientCallName: 'client.alertAttributes.create',
    fullyQualifiedName: 'alertAttributes.create',
    httpMethod: 'post',
    httpPath: '/v2/alert_attributes',
  },
  {
    clientCallName: 'client.alertAttributes.retrieve',
    fullyQualifiedName: 'alertAttributes.retrieve',
    httpMethod: 'get',
    httpPath: '/v2/alert_attributes/{id}',
  },
  {
    clientCallName: 'client.alertAttributes.update',
    fullyQualifiedName: 'alertAttributes.update',
    httpMethod: 'put',
    httpPath: '/v2/alert_attributes/{id}',
  },
  {
    clientCallName: 'client.alertAttributes.list',
    fullyQualifiedName: 'alertAttributes.list',
    httpMethod: 'get',
    httpPath: '/v2/alert_attributes',
  },
  {
    clientCallName: 'client.alertAttributes.delete',
    fullyQualifiedName: 'alertAttributes.delete',
    httpMethod: 'delete',
    httpPath: '/v2/alert_attributes/{id}',
  },
  {
    clientCallName: 'client.alertEvents.createHTTP',
    fullyQualifiedName: 'alertEvents.createHTTP',
    httpMethod: 'post',
    httpPath: '/v2/alert_events/http/{alert_source_config_id}',
  },
  {
    clientCallName: 'client.alertRoutes.create',
    fullyQualifiedName: 'alertRoutes.create',
    httpMethod: 'post',
    httpPath: '/v2/alert_routes',
  },
  {
    clientCallName: 'client.alertRoutes.retrieve',
    fullyQualifiedName: 'alertRoutes.retrieve',
    httpMethod: 'get',
    httpPath: '/v2/alert_routes/{id}',
  },
  {
    clientCallName: 'client.alertRoutes.update',
    fullyQualifiedName: 'alertRoutes.update',
    httpMethod: 'put',
    httpPath: '/v2/alert_routes/{id}',
  },
  {
    clientCallName: 'client.alertRoutes.list',
    fullyQualifiedName: 'alertRoutes.list',
    httpMethod: 'get',
    httpPath: '/v2/alert_routes',
  },
  {
    clientCallName: 'client.alertRoutes.delete',
    fullyQualifiedName: 'alertRoutes.delete',
    httpMethod: 'delete',
    httpPath: '/v2/alert_routes/{id}',
  },
  {
    clientCallName: 'client.alertSources.create',
    fullyQualifiedName: 'alertSources.create',
    httpMethod: 'post',
    httpPath: '/v2/alert_sources',
  },
  {
    clientCallName: 'client.alertSources.retrieve',
    fullyQualifiedName: 'alertSources.retrieve',
    httpMethod: 'get',
    httpPath: '/v2/alert_sources/{id}',
  },
  {
    clientCallName: 'client.alertSources.update',
    fullyQualifiedName: 'alertSources.update',
    httpMethod: 'put',
    httpPath: '/v2/alert_sources/{id}',
  },
  {
    clientCallName: 'client.alertSources.list',
    fullyQualifiedName: 'alertSources.list',
    httpMethod: 'get',
    httpPath: '/v2/alert_sources',
  },
  {
    clientCallName: 'client.alertSources.delete',
    fullyQualifiedName: 'alertSources.delete',
    httpMethod: 'delete',
    httpPath: '/v2/alert_sources/{id}',
  },
  {
    clientCallName: 'client.alerts.retrieve',
    fullyQualifiedName: 'alerts.retrieve',
    httpMethod: 'get',
    httpPath: '/v2/alerts/{id}',
  },
  {
    clientCallName: 'client.alerts.list',
    fullyQualifiedName: 'alerts.list',
    httpMethod: 'get',
    httpPath: '/v2/alerts',
  },
  {
    clientCallName: 'client.catalogEntries.createEntryV2',
    fullyQualifiedName: 'catalogEntries.createEntryV2',
    httpMethod: 'post',
    httpPath: '/v2/catalog_entries',
  },
  {
    clientCallName: 'client.catalogEntries.createEntryV3',
    fullyQualifiedName: 'catalogEntries.createEntryV3',
    httpMethod: 'post',
    httpPath: '/v3/catalog_entries',
  },
  {
    clientCallName: 'client.catalogEntries.destroyEntryV2',
    fullyQualifiedName: 'catalogEntries.destroyEntryV2',
    httpMethod: 'delete',
    httpPath: '/v2/catalog_entries/{id}',
  },
  {
    clientCallName: 'client.catalogEntries.destroyEntryV3',
    fullyQualifiedName: 'catalogEntries.destroyEntryV3',
    httpMethod: 'delete',
    httpPath: '/v3/catalog_entries/{id}',
  },
  {
    clientCallName: 'client.catalogEntries.listEntriesV2',
    fullyQualifiedName: 'catalogEntries.listEntriesV2',
    httpMethod: 'get',
    httpPath: '/v2/catalog_entries',
  },
  {
    clientCallName: 'client.catalogEntries.listEntriesV3',
    fullyQualifiedName: 'catalogEntries.listEntriesV3',
    httpMethod: 'get',
    httpPath: '/v3/catalog_entries',
  },
  {
    clientCallName: 'client.catalogEntries.showEntryV2',
    fullyQualifiedName: 'catalogEntries.showEntryV2',
    httpMethod: 'get',
    httpPath: '/v2/catalog_entries/{id}',
  },
  {
    clientCallName: 'client.catalogEntries.showEntryV3',
    fullyQualifiedName: 'catalogEntries.showEntryV3',
    httpMethod: 'get',
    httpPath: '/v3/catalog_entries/{id}',
  },
  {
    clientCallName: 'client.catalogEntries.updateEntryV2',
    fullyQualifiedName: 'catalogEntries.updateEntryV2',
    httpMethod: 'put',
    httpPath: '/v2/catalog_entries/{id}',
  },
  {
    clientCallName: 'client.catalogEntries.updateEntryV3',
    fullyQualifiedName: 'catalogEntries.updateEntryV3',
    httpMethod: 'put',
    httpPath: '/v3/catalog_entries/{id}',
  },
  {
    clientCallName: 'client.catalogResources.listV2',
    fullyQualifiedName: 'catalogResources.listV2',
    httpMethod: 'get',
    httpPath: '/v2/catalog_resources',
  },
  {
    clientCallName: 'client.catalogResources.listV3',
    fullyQualifiedName: 'catalogResources.listV3',
    httpMethod: 'get',
    httpPath: '/v3/catalog_resources',
  },
  {
    clientCallName: 'client.catalogTypes.create',
    fullyQualifiedName: 'catalogTypes.create',
    httpMethod: 'post',
    httpPath: '/v3/catalog_types',
  },
  {
    clientCallName: 'client.catalogTypes.retrieve',
    fullyQualifiedName: 'catalogTypes.retrieve',
    httpMethod: 'get',
    httpPath: '/v3/catalog_types/{id}',
  },
  {
    clientCallName: 'client.catalogTypes.update',
    fullyQualifiedName: 'catalogTypes.update',
    httpMethod: 'put',
    httpPath: '/v3/catalog_types/{id}',
  },
  {
    clientCallName: 'client.catalogTypes.list',
    fullyQualifiedName: 'catalogTypes.list',
    httpMethod: 'get',
    httpPath: '/v3/catalog_types',
  },
  {
    clientCallName: 'client.catalogTypes.destroy',
    fullyQualifiedName: 'catalogTypes.destroy',
    httpMethod: 'delete',
    httpPath: '/v3/catalog_types/{id}',
  },
  {
    clientCallName: 'client.catalogTypes.actions.updateSchema',
    fullyQualifiedName: 'catalogTypes.actions.updateSchema',
    httpMethod: 'post',
    httpPath: '/v3/catalog_types/{id}/actions/update_schema',
  },
  {
    clientCallName: 'client.escalationPaths.create',
    fullyQualifiedName: 'escalationPaths.create',
    httpMethod: 'post',
    httpPath: '/v2/escalation_paths',
  },
  {
    clientCallName: 'client.escalationPaths.retrieve',
    fullyQualifiedName: 'escalationPaths.retrieve',
    httpMethod: 'get',
    httpPath: '/v2/escalation_paths/{id}',
  },
  {
    clientCallName: 'client.escalationPaths.update',
    fullyQualifiedName: 'escalationPaths.update',
    httpMethod: 'put',
    httpPath: '/v2/escalation_paths/{id}',
  },
  {
    clientCallName: 'client.escalationPaths.delete',
    fullyQualifiedName: 'escalationPaths.delete',
    httpMethod: 'delete',
    httpPath: '/v2/escalation_paths/{id}',
  },
  {
    clientCallName: 'client.escalations.create',
    fullyQualifiedName: 'escalations.create',
    httpMethod: 'post',
    httpPath: '/v2/escalations',
  },
  {
    clientCallName: 'client.escalations.retrieve',
    fullyQualifiedName: 'escalations.retrieve',
    httpMethod: 'get',
    httpPath: '/v2/escalations/{id}',
  },
  {
    clientCallName: 'client.escalations.list',
    fullyQualifiedName: 'escalations.list',
    httpMethod: 'get',
    httpPath: '/v2/escalations',
  },
  {
    clientCallName: 'client.followUps.retrieve',
    fullyQualifiedName: 'followUps.retrieve',
    httpMethod: 'get',
    httpPath: '/v2/follow_ups/{id}',
  },
  {
    clientCallName: 'client.followUps.list',
    fullyQualifiedName: 'followUps.list',
    httpMethod: 'get',
    httpPath: '/v2/follow_ups',
  },
  {
    clientCallName: 'client.incidentAlerts.list',
    fullyQualifiedName: 'incidentAlerts.list',
    httpMethod: 'get',
    httpPath: '/v2/incident_alerts',
  },
  {
    clientCallName: 'client.incidentTimestamps.retrieve',
    fullyQualifiedName: 'incidentTimestamps.retrieve',
    httpMethod: 'get',
    httpPath: '/v2/incident_timestamps/{id}',
  },
  {
    clientCallName: 'client.incidentTimestamps.list',
    fullyQualifiedName: 'incidentTimestamps.list',
    httpMethod: 'get',
    httpPath: '/v2/incident_timestamps',
  },
  {
    clientCallName: 'client.incidentUpdates.list',
    fullyQualifiedName: 'incidentUpdates.list',
    httpMethod: 'get',
    httpPath: '/v2/incident_updates',
  },
  {
    clientCallName: 'client.scheduleEntries.list',
    fullyQualifiedName: 'scheduleEntries.list',
    httpMethod: 'get',
    httpPath: '/v2/schedule_entries',
  },
  {
    clientCallName: 'client.scheduleOverrides.create',
    fullyQualifiedName: 'scheduleOverrides.create',
    httpMethod: 'post',
    httpPath: '/v2/schedule_overrides',
  },
  {
    clientCallName: 'client.schedules.create',
    fullyQualifiedName: 'schedules.create',
    httpMethod: 'post',
    httpPath: '/v2/schedules',
  },
  {
    clientCallName: 'client.schedules.retrieve',
    fullyQualifiedName: 'schedules.retrieve',
    httpMethod: 'get',
    httpPath: '/v2/schedules/{id}',
  },
  {
    clientCallName: 'client.schedules.update',
    fullyQualifiedName: 'schedules.update',
    httpMethod: 'put',
    httpPath: '/v2/schedules/{id}',
  },
  {
    clientCallName: 'client.schedules.list',
    fullyQualifiedName: 'schedules.list',
    httpMethod: 'get',
    httpPath: '/v2/schedules',
  },
  {
    clientCallName: 'client.schedules.delete',
    fullyQualifiedName: 'schedules.delete',
    httpMethod: 'delete',
    httpPath: '/v2/schedules/{id}',
  },
  {
    clientCallName: 'client.users.retrieve',
    fullyQualifiedName: 'users.retrieve',
    httpMethod: 'get',
    httpPath: '/v2/users/{id}',
  },
  {
    clientCallName: 'client.users.list',
    fullyQualifiedName: 'users.list',
    httpMethod: 'get',
    httpPath: '/v2/users',
  },
  {
    clientCallName: 'client.workflows.create',
    fullyQualifiedName: 'workflows.create',
    httpMethod: 'post',
    httpPath: '/v2/workflows',
  },
  {
    clientCallName: 'client.workflows.retrieve',
    fullyQualifiedName: 'workflows.retrieve',
    httpMethod: 'get',
    httpPath: '/v2/workflows/{id}',
  },
  {
    clientCallName: 'client.workflows.update',
    fullyQualifiedName: 'workflows.update',
    httpMethod: 'put',
    httpPath: '/v2/workflows/{id}',
  },
  {
    clientCallName: 'client.workflows.list',
    fullyQualifiedName: 'workflows.list',
    httpMethod: 'get',
    httpPath: '/v2/workflows',
  },
  {
    clientCallName: 'client.workflows.destroy',
    fullyQualifiedName: 'workflows.destroy',
    httpMethod: 'delete',
    httpPath: '/v2/workflows/{id}',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
