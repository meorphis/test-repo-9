# Actions

Types:

- <code><a href="./src/resources/actions.ts">ActionV1</a></code>
- <code><a href="./src/resources/actions.ts">ActionV2</a></code>
- <code><a href="./src/resources/actions.ts">ActorV2</a></code>
- <code><a href="./src/resources/actions.ts">AlertActorV2</a></code>
- <code><a href="./src/resources/actions.ts">UserV1</a></code>
- <code><a href="./src/resources/actions.ts">UserV2</a></code>
- <code><a href="./src/resources/actions.ts">WorkflowActorV2</a></code>
- <code><a href="./src/resources/actions.ts">ActionRetrieveResponse</a></code>
- <code><a href="./src/resources/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/actions.ts">ActionListV2Response</a></code>
- <code><a href="./src/resources/actions.ts">ActionRetrieveV2Response</a></code>

Methods:

- <code title="get /v1/actions">client.actions.<a href="./src/resources/actions.ts">list</a>({ ...params }) -> ActionListResponse</code>
- <code title="get /v1/actions/{id}">client.actions.<a href="./src/resources/actions.ts">retrieve</a>(id) -> ActionRetrieveResponse</code>
- <code title="get /v2/actions">client.actions.<a href="./src/resources/actions.ts">listV2</a>({ ...params }) -> ActionListV2Response</code>
- <code title="get /v2/actions/{id}">client.actions.<a href="./src/resources/actions.ts">retrieveV2</a>(id) -> ActionRetrieveV2Response</code>

# CustomFieldOptions

Types:

- <code><a href="./src/resources/custom-field-options.ts">CustomFieldOptionV1</a></code>
- <code><a href="./src/resources/custom-field-options.ts">PaginationMeta</a></code>
- <code><a href="./src/resources/custom-field-options.ts">CustomFieldOptionCreateResponse</a></code>
- <code><a href="./src/resources/custom-field-options.ts">CustomFieldOptionRetrieveResponse</a></code>
- <code><a href="./src/resources/custom-field-options.ts">CustomFieldOptionUpdateResponse</a></code>
- <code><a href="./src/resources/custom-field-options.ts">CustomFieldOptionListResponse</a></code>

Methods:

- <code title="get /v1/custom_field_options">client.customFieldOptions.<a href="./src/resources/custom-field-options.ts">list</a>({ ...params }) -> CustomFieldOptionListResponse</code>
- <code title="post /v1/custom_field_options">client.customFieldOptions.<a href="./src/resources/custom-field-options.ts">create</a>({ ...params }) -> CustomFieldOptionCreateResponse</code>
- <code title="delete /v1/custom_field_options/{id}">client.customFieldOptions.<a href="./src/resources/custom-field-options.ts">delete</a>(id) -> void</code>
- <code title="get /v1/custom_field_options/{id}">client.customFieldOptions.<a href="./src/resources/custom-field-options.ts">retrieve</a>(id) -> CustomFieldOptionRetrieveResponse</code>
- <code title="put /v1/custom_field_options/{id}">client.customFieldOptions.<a href="./src/resources/custom-field-options.ts">update</a>(id, { ...params }) -> CustomFieldOptionUpdateResponse</code>

# CustomFields

Types:

- <code><a href="./src/resources/custom-fields.ts">CustomFieldFilterByOptionsV2</a></code>
- <code><a href="./src/resources/custom-fields.ts">CustomFieldV1</a></code>
- <code><a href="./src/resources/custom-fields.ts">CustomFieldV2</a></code>
- <code><a href="./src/resources/custom-fields.ts">CustomFieldCreateV1Response</a></code>
- <code><a href="./src/resources/custom-fields.ts">CustomFieldCreateV2Response</a></code>
- <code><a href="./src/resources/custom-fields.ts">CustomFieldListV1Response</a></code>
- <code><a href="./src/resources/custom-fields.ts">CustomFieldListV2Response</a></code>
- <code><a href="./src/resources/custom-fields.ts">CustomFieldRetrieveV1Response</a></code>
- <code><a href="./src/resources/custom-fields.ts">CustomFieldRetrieveV2Response</a></code>
- <code><a href="./src/resources/custom-fields.ts">CustomFieldUpdateV1Response</a></code>
- <code><a href="./src/resources/custom-fields.ts">CustomFieldUpdateV2Response</a></code>

Methods:

- <code title="get /v1/custom_fields">client.customFields.<a href="./src/resources/custom-fields.ts">listV1</a>() -> CustomFieldListV1Response</code>
- <code title="post /v1/custom_fields">client.customFields.<a href="./src/resources/custom-fields.ts">createV1</a>({ ...params }) -> CustomFieldCreateV1Response</code>
- <code title="delete /v1/custom_fields/{id}">client.customFields.<a href="./src/resources/custom-fields.ts">deleteV1</a>(id) -> void</code>
- <code title="get /v1/custom_fields/{id}">client.customFields.<a href="./src/resources/custom-fields.ts">retrieveV1</a>(id) -> CustomFieldRetrieveV1Response</code>
- <code title="put /v1/custom_fields/{id}">client.customFields.<a href="./src/resources/custom-fields.ts">updateV1</a>(id, { ...params }) -> CustomFieldUpdateV1Response</code>
- <code title="get /v2/custom_fields">client.customFields.<a href="./src/resources/custom-fields.ts">listV2</a>() -> CustomFieldListV2Response</code>
- <code title="post /v2/custom_fields">client.customFields.<a href="./src/resources/custom-fields.ts">createV2</a>({ ...params }) -> CustomFieldCreateV2Response</code>
- <code title="delete /v2/custom_fields/{id}">client.customFields.<a href="./src/resources/custom-fields.ts">deleteV2</a>(id) -> void</code>
- <code title="get /v2/custom_fields/{id}">client.customFields.<a href="./src/resources/custom-fields.ts">retrieveV2</a>(id) -> CustomFieldRetrieveV2Response</code>
- <code title="put /v2/custom_fields/{id}">client.customFields.<a href="./src/resources/custom-fields.ts">updateV2</a>(id, { ...params }) -> CustomFieldUpdateV2Response</code>

# Identity

Types:

- <code><a href="./src/resources/identity.ts">IdentityRetrieveResponse</a></code>

Methods:

- <code title="get /v1/identity">client.identity.<a href="./src/resources/identity.ts">retrieve</a>() -> IdentityRetrieveResponse</code>

# IncidentAttachments

Types:

- <code><a href="./src/resources/incident-attachments.ts">IncidentAttachment</a></code>
- <code><a href="./src/resources/incident-attachments.ts">IncidentAttachmentCreateResponse</a></code>
- <code><a href="./src/resources/incident-attachments.ts">IncidentAttachmentListResponse</a></code>

Methods:

- <code title="get /v1/incident_attachments">client.incidentAttachments.<a href="./src/resources/incident-attachments.ts">list</a>({ ...params }) -> IncidentAttachmentListResponse</code>
- <code title="post /v1/incident_attachments">client.incidentAttachments.<a href="./src/resources/incident-attachments.ts">create</a>({ ...params }) -> IncidentAttachmentCreateResponse</code>
- <code title="delete /v1/incident_attachments/{id}">client.incidentAttachments.<a href="./src/resources/incident-attachments.ts">delete</a>(id) -> void</code>

# IncidentMemberships

Types:

- <code><a href="./src/resources/incident-memberships/incident-memberships.ts">IncidentMembershipCreateResponse</a></code>

Methods:

- <code title="post /v1/incident_memberships">client.incidentMemberships.<a href="./src/resources/incident-memberships/incident-memberships.ts">create</a>({ ...params }) -> IncidentMembershipCreateResponse</code>

## Actions

Methods:

- <code title="post /v1/incident_memberships/actions/revoke">client.incidentMemberships.actions.<a href="./src/resources/incident-memberships/actions.ts">revoke</a>({ ...params }) -> void</code>

# IncidentRelationships

Types:

- <code><a href="./src/resources/incident-relationships.ts">IncidentRelationshipListResponse</a></code>

Methods:

- <code title="get /v1/incident_relationships">client.incidentRelationships.<a href="./src/resources/incident-relationships.ts">list</a>({ ...params }) -> IncidentRelationshipListResponse</code>

# IncidentRoles

Types:

- <code><a href="./src/resources/incident-roles.ts">IncidentRoleV1</a></code>
- <code><a href="./src/resources/incident-roles.ts">IncidentRoleV2</a></code>
- <code><a href="./src/resources/incident-roles.ts">IncidentRoleCreateResponse</a></code>
- <code><a href="./src/resources/incident-roles.ts">IncidentRoleRetrieveResponse</a></code>
- <code><a href="./src/resources/incident-roles.ts">IncidentRoleUpdateResponse</a></code>
- <code><a href="./src/resources/incident-roles.ts">IncidentRoleListResponse</a></code>
- <code><a href="./src/resources/incident-roles.ts">IncidentRoleCreateV2Response</a></code>
- <code><a href="./src/resources/incident-roles.ts">IncidentRoleListV2Response</a></code>
- <code><a href="./src/resources/incident-roles.ts">IncidentRoleRetrieveV2Response</a></code>
- <code><a href="./src/resources/incident-roles.ts">IncidentRoleUpdateV2Response</a></code>

Methods:

- <code title="get /v1/incident_roles">client.incidentRoles.<a href="./src/resources/incident-roles.ts">list</a>() -> IncidentRoleListResponse</code>
- <code title="post /v1/incident_roles">client.incidentRoles.<a href="./src/resources/incident-roles.ts">create</a>({ ...params }) -> IncidentRoleCreateResponse</code>
- <code title="delete /v1/incident_roles/{id}">client.incidentRoles.<a href="./src/resources/incident-roles.ts">delete</a>(id) -> void</code>
- <code title="get /v1/incident_roles/{id}">client.incidentRoles.<a href="./src/resources/incident-roles.ts">retrieve</a>(id) -> IncidentRoleRetrieveResponse</code>
- <code title="put /v1/incident_roles/{id}">client.incidentRoles.<a href="./src/resources/incident-roles.ts">update</a>(id, { ...params }) -> IncidentRoleUpdateResponse</code>
- <code title="get /v2/incident_roles">client.incidentRoles.<a href="./src/resources/incident-roles.ts">listV2</a>() -> IncidentRoleListV2Response</code>
- <code title="post /v2/incident_roles">client.incidentRoles.<a href="./src/resources/incident-roles.ts">createV2</a>({ ...params }) -> IncidentRoleCreateV2Response</code>
- <code title="delete /v2/incident_roles/{id}">client.incidentRoles.<a href="./src/resources/incident-roles.ts">deleteV2</a>(id) -> void</code>
- <code title="get /v2/incident_roles/{id}">client.incidentRoles.<a href="./src/resources/incident-roles.ts">retrieveV2</a>(id) -> IncidentRoleRetrieveV2Response</code>
- <code title="put /v2/incident_roles/{id}">client.incidentRoles.<a href="./src/resources/incident-roles.ts">updateV2</a>(id, { ...params }) -> IncidentRoleUpdateV2Response</code>

# IncidentStatuses

Types:

- <code><a href="./src/resources/incident-statuses.ts">IncidentStatusV1</a></code>
- <code><a href="./src/resources/incident-statuses.ts">IncidentStatusCreateResponse</a></code>
- <code><a href="./src/resources/incident-statuses.ts">IncidentStatusRetrieveResponse</a></code>
- <code><a href="./src/resources/incident-statuses.ts">IncidentStatusUpdateResponse</a></code>
- <code><a href="./src/resources/incident-statuses.ts">IncidentStatusListResponse</a></code>

Methods:

- <code title="get /v1/incident_statuses">client.incidentStatuses.<a href="./src/resources/incident-statuses.ts">list</a>() -> IncidentStatusListResponse</code>
- <code title="post /v1/incident_statuses">client.incidentStatuses.<a href="./src/resources/incident-statuses.ts">create</a>({ ...params }) -> IncidentStatusCreateResponse</code>
- <code title="delete /v1/incident_statuses/{id}">client.incidentStatuses.<a href="./src/resources/incident-statuses.ts">delete</a>(id) -> void</code>
- <code title="get /v1/incident_statuses/{id}">client.incidentStatuses.<a href="./src/resources/incident-statuses.ts">retrieve</a>(id) -> IncidentStatusRetrieveResponse</code>
- <code title="put /v1/incident_statuses/{id}">client.incidentStatuses.<a href="./src/resources/incident-statuses.ts">update</a>(id, { ...params }) -> IncidentStatusUpdateResponse</code>

# IncidentTypes

Types:

- <code><a href="./src/resources/incident-types.ts">IncidentType</a></code>
- <code><a href="./src/resources/incident-types.ts">IncidentTypeRetrieveResponse</a></code>
- <code><a href="./src/resources/incident-types.ts">IncidentTypeListResponse</a></code>

Methods:

- <code title="get /v1/incident_types">client.incidentTypes.<a href="./src/resources/incident-types.ts">list</a>() -> IncidentTypeListResponse</code>
- <code title="get /v1/incident_types/{id}">client.incidentTypes.<a href="./src/resources/incident-types.ts">retrieve</a>(id) -> IncidentTypeRetrieveResponse</code>

# Incidents

Types:

- <code><a href="./src/resources/incidents/incidents.ts">CustomFieldEntryPayload</a></code>
- <code><a href="./src/resources/incidents/incidents.ts">CustomFieldOptionV2</a></code>
- <code><a href="./src/resources/incidents/incidents.ts">IncidentRoleAssignmentPayload</a></code>
- <code><a href="./src/resources/incidents/incidents.ts">IncidentStatusV2</a></code>
- <code><a href="./src/resources/incidents/incidents.ts">IncidentTimestampValuePayload</a></code>
- <code><a href="./src/resources/incidents/incidents.ts">IncidentV1</a></code>
- <code><a href="./src/resources/incidents/incidents.ts">IncidentV2</a></code>
- <code><a href="./src/resources/incidents/incidents.ts">PaginationMetaResultWithTotal</a></code>
- <code><a href="./src/resources/incidents/incidents.ts">Severity</a></code>
- <code><a href="./src/resources/incidents/incidents.ts">IncidentCreateResponse</a></code>
- <code><a href="./src/resources/incidents/incidents.ts">IncidentRetrieveResponse</a></code>
- <code><a href="./src/resources/incidents/incidents.ts">IncidentListResponse</a></code>
- <code><a href="./src/resources/incidents/incidents.ts">IncidentCreateV2Response</a></code>
- <code><a href="./src/resources/incidents/incidents.ts">IncidentListV2Response</a></code>
- <code><a href="./src/resources/incidents/incidents.ts">IncidentRetrieveV2Response</a></code>

Methods:

- <code title="get /v1/incidents">client.incidents.<a href="./src/resources/incidents/incidents.ts">list</a>({ ...params }) -> IncidentListResponse</code>
- <code title="post /v1/incidents">client.incidents.<a href="./src/resources/incidents/incidents.ts">create</a>({ ...params }) -> IncidentCreateResponse</code>
- <code title="get /v1/incidents/{id}">client.incidents.<a href="./src/resources/incidents/incidents.ts">retrieve</a>(id) -> IncidentRetrieveResponse</code>
- <code title="get /v2/incidents">client.incidents.<a href="./src/resources/incidents/incidents.ts">listV2</a>({ ...params }) -> IncidentListV2Response</code>
- <code title="post /v2/incidents">client.incidents.<a href="./src/resources/incidents/incidents.ts">createV2</a>({ ...params }) -> IncidentCreateV2Response</code>
- <code title="get /v2/incidents/{id}">client.incidents.<a href="./src/resources/incidents/incidents.ts">retrieveV2</a>(id) -> IncidentRetrieveV2Response</code>

## Actions

Types:

- <code><a href="./src/resources/incidents/actions.ts">ActionEditResponse</a></code>

Methods:

- <code title="post /v2/incidents/{id}/actions/edit">client.incidents.actions.<a href="./src/resources/incidents/actions.ts">edit</a>(id, { ...params }) -> ActionEditResponse</code>

# IPAllowlists

Types:

- <code><a href="./src/resources/ip-allowlists.ts">IPAllowlist</a></code>
- <code><a href="./src/resources/ip-allowlists.ts">IPAllowlistItem</a></code>
- <code><a href="./src/resources/ip-allowlists.ts">IPAllowlistRetrieveResponse</a></code>
- <code><a href="./src/resources/ip-allowlists.ts">IPAllowlistUpdateResponse</a></code>

Methods:

- <code title="get /v1/ip_allowlists">client.ipAllowlists.<a href="./src/resources/ip-allowlists.ts">retrieve</a>() -> IPAllowlistRetrieveResponse</code>
- <code title="put /v1/ip_allowlists">client.ipAllowlists.<a href="./src/resources/ip-allowlists.ts">update</a>({ ...params }) -> IPAllowlistUpdateResponse</code>

# OpenAPIJson

Types:

- <code><a href="./src/resources/openapi-json.ts">OpenAPIJsonRetrieveResponse</a></code>

Methods:

- <code title="get /v1/openapi.json">client.openAPIJson.<a href="./src/resources/openapi-json.ts">retrieve</a>() -> string</code>

# OpenAPIV3Json

Types:

- <code><a href="./src/resources/openapi-v3-json.ts">OpenAPIV3JsonRetrieveResponse</a></code>

Methods:

- <code title="get /v1/openapiV3.json">client.openAPIV3Json.<a href="./src/resources/openapi-v3-json.ts">retrieve</a>() -> string</code>

# Severities

Types:

- <code><a href="./src/resources/severities.ts">SeverityV1</a></code>
- <code><a href="./src/resources/severities.ts">SeverityCreateResponse</a></code>
- <code><a href="./src/resources/severities.ts">SeverityRetrieveResponse</a></code>
- <code><a href="./src/resources/severities.ts">SeverityUpdateResponse</a></code>
- <code><a href="./src/resources/severities.ts">SeverityListResponse</a></code>

Methods:

- <code title="get /v1/severities">client.severities.<a href="./src/resources/severities.ts">list</a>() -> SeverityListResponse</code>
- <code title="post /v1/severities">client.severities.<a href="./src/resources/severities.ts">create</a>({ ...params }) -> SeverityCreateResponse</code>
- <code title="delete /v1/severities/{id}">client.severities.<a href="./src/resources/severities.ts">delete</a>(id) -> void</code>
- <code title="get /v1/severities/{id}">client.severities.<a href="./src/resources/severities.ts">retrieve</a>(id) -> SeverityRetrieveResponse</code>
- <code title="put /v1/severities/{id}">client.severities.<a href="./src/resources/severities.ts">update</a>(id, { ...params }) -> SeverityUpdateResponse</code>

# StatusPages

## Incidents

Types:

- <code><a href="./src/resources/status-pages/incidents.ts">IncidentListResponseIncidentsResponse</a></code>

Methods:

- <code title="get /v1/status-pages/{id}/incidents/{incident_id}/response-incidents">client.statusPages.incidents.<a href="./src/resources/status-pages/incidents.ts">listResponseIncidents</a>(incidentID, { ...params }) -> IncidentListResponseIncidentsResponse</code>

# AlertAttributes

Types:

- <code><a href="./src/resources/alert-attributes.ts">AlertAttributeV2</a></code>
- <code><a href="./src/resources/alert-attributes.ts">AlertAttributeCreateResponse</a></code>
- <code><a href="./src/resources/alert-attributes.ts">AlertAttributeRetrieveResponse</a></code>
- <code><a href="./src/resources/alert-attributes.ts">AlertAttributeUpdateResponse</a></code>
- <code><a href="./src/resources/alert-attributes.ts">AlertAttributeListResponse</a></code>

Methods:

- <code title="get /v2/alert_attributes">client.alertAttributes.<a href="./src/resources/alert-attributes.ts">list</a>() -> AlertAttributeListResponse</code>
- <code title="post /v2/alert_attributes">client.alertAttributes.<a href="./src/resources/alert-attributes.ts">create</a>({ ...params }) -> AlertAttributeCreateResponse</code>
- <code title="delete /v2/alert_attributes/{id}">client.alertAttributes.<a href="./src/resources/alert-attributes.ts">delete</a>(id) -> void</code>
- <code title="get /v2/alert_attributes/{id}">client.alertAttributes.<a href="./src/resources/alert-attributes.ts">retrieve</a>(id) -> AlertAttributeRetrieveResponse</code>
- <code title="put /v2/alert_attributes/{id}">client.alertAttributes.<a href="./src/resources/alert-attributes.ts">update</a>(id, { ...params }) -> AlertAttributeUpdateResponse</code>

# AlertEvents

Types:

- <code><a href="./src/resources/alert-events.ts">AlertEventCreateHTTPResponse</a></code>

Methods:

- <code title="post /v2/alert_events/http/{alert_source_config_id}">client.alertEvents.<a href="./src/resources/alert-events.ts">createHTTP</a>(alertSourceConfigID, { ...params }) -> AlertEventCreateHTTPResponse</code>

# AlertRoutes

Types:

- <code><a href="./src/resources/alert-routes.ts">AlertRoute</a></code>
- <code><a href="./src/resources/alert-routes.ts">AlertSourcePayload</a></code>
- <code><a href="./src/resources/alert-routes.ts">AutoGeneratedTemplateBinding</a></code>
- <code><a href="./src/resources/alert-routes.ts">AutoGeneratedTemplateBindingPayload</a></code>
- <code><a href="./src/resources/alert-routes.ts">ChannelConfigPayload</a></code>
- <code><a href="./src/resources/alert-routes.ts">ChannelTarget</a></code>
- <code><a href="./src/resources/alert-routes.ts">ChannelTargetPayload</a></code>
- <code><a href="./src/resources/alert-routes.ts">ConditionGroup</a></code>
- <code><a href="./src/resources/alert-routes.ts">ConditionGroupPayload</a></code>
- <code><a href="./src/resources/alert-routes.ts">EscalationConfigPayload</a></code>
- <code><a href="./src/resources/alert-routes.ts">Expression</a></code>
- <code><a href="./src/resources/alert-routes.ts">ExpressionPayload</a></code>
- <code><a href="./src/resources/alert-routes.ts">GroupingKey</a></code>
- <code><a href="./src/resources/alert-routes.ts">IncidentConfigPayload</a></code>
- <code><a href="./src/resources/alert-routes.ts">IncidentTemplatePayload</a></code>
- <code><a href="./src/resources/alert-routes.ts">PaginationMetaResult</a></code>
- <code><a href="./src/resources/alert-routes.ts">ReturnsMeta</a></code>
- <code><a href="./src/resources/alert-routes.ts">TemplateBinding</a></code>
- <code><a href="./src/resources/alert-routes.ts">TemplateBindingPayload</a></code>
- <code><a href="./src/resources/alert-routes.ts">AlertRouteCreateResponse</a></code>
- <code><a href="./src/resources/alert-routes.ts">AlertRouteRetrieveResponse</a></code>
- <code><a href="./src/resources/alert-routes.ts">AlertRouteUpdateResponse</a></code>
- <code><a href="./src/resources/alert-routes.ts">AlertRouteListResponse</a></code>

Methods:

- <code title="get /v2/alert_routes">client.alertRoutes.<a href="./src/resources/alert-routes.ts">list</a>({ ...params }) -> AlertRouteListResponse</code>
- <code title="post /v2/alert_routes">client.alertRoutes.<a href="./src/resources/alert-routes.ts">create</a>({ ...params }) -> AlertRouteCreateResponse</code>
- <code title="delete /v2/alert_routes/{id}">client.alertRoutes.<a href="./src/resources/alert-routes.ts">delete</a>(id) -> void</code>
- <code title="get /v2/alert_routes/{id}">client.alertRoutes.<a href="./src/resources/alert-routes.ts">retrieve</a>(id) -> AlertRouteRetrieveResponse</code>
- <code title="put /v2/alert_routes/{id}">client.alertRoutes.<a href="./src/resources/alert-routes.ts">update</a>(id, { ...params }) -> AlertRouteUpdateResponse</code>

# AlertSources

Types:

- <code><a href="./src/resources/alert-sources.ts">AlertSource</a></code>
- <code><a href="./src/resources/alert-sources.ts">HTTPCustomOptions</a></code>
- <code><a href="./src/resources/alert-sources.ts">JiraOptions</a></code>
- <code><a href="./src/resources/alert-sources.ts">ParamBindingValue</a></code>
- <code><a href="./src/resources/alert-sources.ts">ParamBindingValuePayload</a></code>
- <code><a href="./src/resources/alert-sources.ts">TemplatePayload</a></code>
- <code><a href="./src/resources/alert-sources.ts">AlertSourceCreateResponse</a></code>
- <code><a href="./src/resources/alert-sources.ts">AlertSourceRetrieveResponse</a></code>
- <code><a href="./src/resources/alert-sources.ts">AlertSourceUpdateResponse</a></code>
- <code><a href="./src/resources/alert-sources.ts">AlertSourceListResponse</a></code>

Methods:

- <code title="get /v2/alert_sources">client.alertSources.<a href="./src/resources/alert-sources.ts">list</a>() -> AlertSourceListResponse</code>
- <code title="post /v2/alert_sources">client.alertSources.<a href="./src/resources/alert-sources.ts">create</a>({ ...params }) -> AlertSourceCreateResponse</code>
- <code title="delete /v2/alert_sources/{id}">client.alertSources.<a href="./src/resources/alert-sources.ts">delete</a>(id) -> void</code>
- <code title="get /v2/alert_sources/{id}">client.alertSources.<a href="./src/resources/alert-sources.ts">retrieve</a>(id) -> AlertSourceRetrieveResponse</code>
- <code title="put /v2/alert_sources/{id}">client.alertSources.<a href="./src/resources/alert-sources.ts">update</a>(id, { ...params }) -> AlertSourceUpdateResponse</code>

# Alerts

Types:

- <code><a href="./src/resources/alerts.ts">AlertAttributeValueV2</a></code>
- <code><a href="./src/resources/alerts.ts">AlertV2</a></code>
- <code><a href="./src/resources/alerts.ts">AlertRetrieveResponse</a></code>
- <code><a href="./src/resources/alerts.ts">AlertListResponse</a></code>

Methods:

- <code title="get /v2/alerts">client.alerts.<a href="./src/resources/alerts.ts">list</a>({ ...params }) -> AlertListResponse</code>
- <code title="get /v2/alerts/{id}">client.alerts.<a href="./src/resources/alerts.ts">retrieve</a>(id) -> AlertRetrieveResponse</code>

# CatalogEntries

Types:

- <code><a href="./src/resources/catalog-entries.ts">CatalogEntryV2</a></code>
- <code><a href="./src/resources/catalog-entries.ts">CatalogEntryV3</a></code>
- <code><a href="./src/resources/catalog-entries.ts">CatalogTypeV2</a></code>
- <code><a href="./src/resources/catalog-entries.ts">CatalogTypeV3</a></code>
- <code><a href="./src/resources/catalog-entries.ts">CatalogEntryCreateEntryV2Response</a></code>
- <code><a href="./src/resources/catalog-entries.ts">CatalogEntryCreateEntryV3Response</a></code>
- <code><a href="./src/resources/catalog-entries.ts">CatalogEntryListEntriesV2Response</a></code>
- <code><a href="./src/resources/catalog-entries.ts">CatalogEntryListEntriesV3Response</a></code>
- <code><a href="./src/resources/catalog-entries.ts">CatalogEntryShowEntryV2Response</a></code>
- <code><a href="./src/resources/catalog-entries.ts">CatalogEntryShowEntryV3Response</a></code>
- <code><a href="./src/resources/catalog-entries.ts">CatalogEntryUpdateEntryV2Response</a></code>
- <code><a href="./src/resources/catalog-entries.ts">CatalogEntryUpdateEntryV3Response</a></code>

Methods:

- <code title="get /v2/catalog_entries">client.catalogEntries.<a href="./src/resources/catalog-entries.ts">listEntriesV2</a>({ ...params }) -> CatalogEntryListEntriesV2Response</code>
- <code title="post /v2/catalog_entries">client.catalogEntries.<a href="./src/resources/catalog-entries.ts">createEntryV2</a>({ ...params }) -> CatalogEntryCreateEntryV2Response</code>
- <code title="delete /v2/catalog_entries/{id}">client.catalogEntries.<a href="./src/resources/catalog-entries.ts">destroyEntryV2</a>(id) -> void</code>
- <code title="get /v2/catalog_entries/{id}">client.catalogEntries.<a href="./src/resources/catalog-entries.ts">showEntryV2</a>(id) -> CatalogEntryShowEntryV2Response</code>
- <code title="put /v2/catalog_entries/{id}">client.catalogEntries.<a href="./src/resources/catalog-entries.ts">updateEntryV2</a>(id, { ...params }) -> CatalogEntryUpdateEntryV2Response</code>
- <code title="get /v3/catalog_entries">client.catalogEntries.<a href="./src/resources/catalog-entries.ts">listEntriesV3</a>({ ...params }) -> CatalogEntryListEntriesV3Response</code>
- <code title="post /v3/catalog_entries">client.catalogEntries.<a href="./src/resources/catalog-entries.ts">createEntryV3</a>({ ...params }) -> CatalogEntryCreateEntryV3Response</code>
- <code title="delete /v3/catalog_entries/{id}">client.catalogEntries.<a href="./src/resources/catalog-entries.ts">destroyEntryV3</a>(id) -> void</code>
- <code title="get /v3/catalog_entries/{id}">client.catalogEntries.<a href="./src/resources/catalog-entries.ts">showEntryV3</a>(id) -> CatalogEntryShowEntryV3Response</code>
- <code title="put /v3/catalog_entries/{id}">client.catalogEntries.<a href="./src/resources/catalog-entries.ts">updateEntryV3</a>(id, { ...params }) -> CatalogEntryUpdateEntryV3Response</code>

# CatalogResources

Types:

- <code><a href="./src/resources/catalog-resources.ts">CatalogResourceListV2Response</a></code>
- <code><a href="./src/resources/catalog-resources.ts">CatalogResourceListV3Response</a></code>

Methods:

- <code title="get /v2/catalog_resources">client.catalogResources.<a href="./src/resources/catalog-resources.ts">listV2</a>() -> CatalogResourceListV2Response</code>
- <code title="get /v3/catalog_resources">client.catalogResources.<a href="./src/resources/catalog-resources.ts">listV3</a>() -> CatalogResourceListV3Response</code>

# CatalogTypes

Types:

- <code><a href="./src/resources/catalog-types/catalog-types.ts">CatalogTypeCreateResponse</a></code>
- <code><a href="./src/resources/catalog-types/catalog-types.ts">CatalogTypeRetrieveResponse</a></code>
- <code><a href="./src/resources/catalog-types/catalog-types.ts">CatalogTypeUpdateResponse</a></code>
- <code><a href="./src/resources/catalog-types/catalog-types.ts">CatalogTypeListResponse</a></code>

Methods:

- <code title="get /v3/catalog_types">client.catalogTypes.<a href="./src/resources/catalog-types/catalog-types.ts">list</a>() -> CatalogTypeListResponse</code>
- <code title="post /v3/catalog_types">client.catalogTypes.<a href="./src/resources/catalog-types/catalog-types.ts">create</a>({ ...params }) -> CatalogTypeCreateResponse</code>
- <code title="delete /v3/catalog_types/{id}">client.catalogTypes.<a href="./src/resources/catalog-types/catalog-types.ts">destroy</a>(id) -> void</code>
- <code title="get /v3/catalog_types/{id}">client.catalogTypes.<a href="./src/resources/catalog-types/catalog-types.ts">retrieve</a>(id) -> CatalogTypeRetrieveResponse</code>
- <code title="put /v3/catalog_types/{id}">client.catalogTypes.<a href="./src/resources/catalog-types/catalog-types.ts">update</a>(id, { ...params }) -> CatalogTypeUpdateResponse</code>

## Actions

Types:

- <code><a href="./src/resources/catalog-types/actions.ts">ActionUpdateSchemaResponse</a></code>

Methods:

- <code title="post /v3/catalog_types/{id}/actions/update_schema">client.catalogTypes.actions.<a href="./src/resources/catalog-types/actions.ts">updateSchema</a>(id, { ...params }) -> ActionUpdateSchemaResponse</code>

# EscalationPaths

Types:

- <code><a href="./src/resources/escalation-paths.ts">EscalationPath</a></code>
- <code><a href="./src/resources/escalation-paths.ts">EscalationPathNode</a></code>
- <code><a href="./src/resources/escalation-paths.ts">EscalationPathNodeIfElse</a></code>
- <code><a href="./src/resources/escalation-paths.ts">EscalationPathNodeIfElsePayload</a></code>
- <code><a href="./src/resources/escalation-paths.ts">EscalationPathNodePayload</a></code>
- <code><a href="./src/resources/escalation-paths.ts">WeekdayIntervalConfig</a></code>
- <code><a href="./src/resources/escalation-paths.ts">EscalationPathCreateResponse</a></code>
- <code><a href="./src/resources/escalation-paths.ts">EscalationPathRetrieveResponse</a></code>
- <code><a href="./src/resources/escalation-paths.ts">EscalationPathUpdateResponse</a></code>

Methods:

- <code title="post /v2/escalation_paths">client.escalationPaths.<a href="./src/resources/escalation-paths.ts">create</a>({ ...params }) -> EscalationPathCreateResponse</code>
- <code title="delete /v2/escalation_paths/{id}">client.escalationPaths.<a href="./src/resources/escalation-paths.ts">delete</a>(id) -> void</code>
- <code title="get /v2/escalation_paths/{id}">client.escalationPaths.<a href="./src/resources/escalation-paths.ts">retrieve</a>(id) -> EscalationPathRetrieveResponse</code>
- <code title="put /v2/escalation_paths/{id}">client.escalationPaths.<a href="./src/resources/escalation-paths.ts">update</a>(id, { ...params }) -> EscalationPathUpdateResponse</code>

# Escalations

Types:

- <code><a href="./src/resources/escalations.ts">EscalationV2</a></code>
- <code><a href="./src/resources/escalations.ts">EscalationCreateResponse</a></code>
- <code><a href="./src/resources/escalations.ts">EscalationRetrieveResponse</a></code>
- <code><a href="./src/resources/escalations.ts">EscalationListResponse</a></code>

Methods:

- <code title="get /v2/escalations">client.escalations.<a href="./src/resources/escalations.ts">list</a>({ ...params }) -> EscalationListResponse</code>
- <code title="post /v2/escalations">client.escalations.<a href="./src/resources/escalations.ts">create</a>({ ...params }) -> EscalationCreateResponse</code>
- <code title="get /v2/escalations/{id}">client.escalations.<a href="./src/resources/escalations.ts">retrieve</a>(id) -> EscalationRetrieveResponse</code>

# FollowUps

Types:

- <code><a href="./src/resources/follow-ups.ts">ExternalIssueReference</a></code>
- <code><a href="./src/resources/follow-ups.ts">FollowUp</a></code>
- <code><a href="./src/resources/follow-ups.ts">FollowUpRetrieveResponse</a></code>
- <code><a href="./src/resources/follow-ups.ts">FollowUpListResponse</a></code>

Methods:

- <code title="get /v2/follow_ups">client.followUps.<a href="./src/resources/follow-ups.ts">list</a>({ ...params }) -> FollowUpListResponse</code>
- <code title="get /v2/follow_ups/{id}">client.followUps.<a href="./src/resources/follow-ups.ts">retrieve</a>(id) -> FollowUpRetrieveResponse</code>

# IncidentAlerts

Types:

- <code><a href="./src/resources/incident-alerts.ts">AlertSlim</a></code>
- <code><a href="./src/resources/incident-alerts.ts">IncidentSlim</a></code>
- <code><a href="./src/resources/incident-alerts.ts">IncidentAlertListResponse</a></code>

Methods:

- <code title="get /v2/incident_alerts">client.incidentAlerts.<a href="./src/resources/incident-alerts.ts">list</a>({ ...params }) -> IncidentAlertListResponse</code>

# IncidentTimestamps

Types:

- <code><a href="./src/resources/incident-timestamps.ts">IncidentTimestamp</a></code>
- <code><a href="./src/resources/incident-timestamps.ts">IncidentTimestampRetrieveResponse</a></code>
- <code><a href="./src/resources/incident-timestamps.ts">IncidentTimestampListResponse</a></code>

Methods:

- <code title="get /v2/incident_timestamps">client.incidentTimestamps.<a href="./src/resources/incident-timestamps.ts">list</a>() -> IncidentTimestampListResponse</code>
- <code title="get /v2/incident_timestamps/{id}">client.incidentTimestamps.<a href="./src/resources/incident-timestamps.ts">retrieve</a>(id) -> IncidentTimestampRetrieveResponse</code>

# IncidentUpdates

Types:

- <code><a href="./src/resources/incident-updates.ts">IncidentUpdateListResponse</a></code>

Methods:

- <code title="get /v2/incident_updates">client.incidentUpdates.<a href="./src/resources/incident-updates.ts">list</a>({ ...params }) -> IncidentUpdateListResponse</code>

# ScheduleEntries

Types:

- <code><a href="./src/resources/schedule-entries.ts">ScheduleEntry</a></code>
- <code><a href="./src/resources/schedule-entries.ts">ScheduleEntryListResponse</a></code>

Methods:

- <code title="get /v2/schedule_entries">client.scheduleEntries.<a href="./src/resources/schedule-entries.ts">list</a>({ ...params }) -> ScheduleEntryListResponse</code>

# ScheduleOverrides

Types:

- <code><a href="./src/resources/schedule-overrides.ts">UserReferencePayloadV2</a></code>
- <code><a href="./src/resources/schedule-overrides.ts">ScheduleOverrideCreateResponse</a></code>

Methods:

- <code title="post /v2/schedule_overrides">client.scheduleOverrides.<a href="./src/resources/schedule-overrides.ts">create</a>({ ...params }) -> ScheduleOverrideCreateResponse</code>

# Schedules

Types:

- <code><a href="./src/resources/schedules.ts">Schedule</a></code>
- <code><a href="./src/resources/schedules.ts">ScheduleHolidaysPublicConfigPayload</a></code>
- <code><a href="./src/resources/schedules.ts">ScheduleRotationHandover</a></code>
- <code><a href="./src/resources/schedules.ts">ScheduleRotationWorkingInterval</a></code>
- <code><a href="./src/resources/schedules.ts">ScheduleCreateResponse</a></code>
- <code><a href="./src/resources/schedules.ts">ScheduleRetrieveResponse</a></code>
- <code><a href="./src/resources/schedules.ts">ScheduleUpdateResponse</a></code>
- <code><a href="./src/resources/schedules.ts">ScheduleListResponse</a></code>

Methods:

- <code title="get /v2/schedules">client.schedules.<a href="./src/resources/schedules.ts">list</a>({ ...params }) -> ScheduleListResponse</code>
- <code title="post /v2/schedules">client.schedules.<a href="./src/resources/schedules.ts">create</a>({ ...params }) -> ScheduleCreateResponse</code>
- <code title="delete /v2/schedules/{id}">client.schedules.<a href="./src/resources/schedules.ts">delete</a>(id) -> void</code>
- <code title="get /v2/schedules/{id}">client.schedules.<a href="./src/resources/schedules.ts">retrieve</a>(id) -> ScheduleRetrieveResponse</code>
- <code title="put /v2/schedules/{id}">client.schedules.<a href="./src/resources/schedules.ts">update</a>(id, { ...params }) -> ScheduleUpdateResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">RbacRole</a></code>
- <code><a href="./src/resources/users.ts">UserWithRoles</a></code>
- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /v2/users">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="get /v2/users/{id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(id) -> UserRetrieveResponse</code>

# Workflows

Types:

- <code><a href="./src/resources/workflows.ts">EngineParamBinding</a></code>
- <code><a href="./src/resources/workflows.ts">EngineParamBindingPayload</a></code>
- <code><a href="./src/resources/workflows.ts">EngineReference</a></code>
- <code><a href="./src/resources/workflows.ts">ManagementMeta</a></code>
- <code><a href="./src/resources/workflows.ts">StepConfigPayload</a></code>
- <code><a href="./src/resources/workflows.ts">TriggerSlim</a></code>
- <code><a href="./src/resources/workflows.ts">Workflow</a></code>
- <code><a href="./src/resources/workflows.ts">WorkflowDelay</a></code>
- <code><a href="./src/resources/workflows.ts">WorkflowCreateResponse</a></code>
- <code><a href="./src/resources/workflows.ts">WorkflowRetrieveResponse</a></code>
- <code><a href="./src/resources/workflows.ts">WorkflowUpdateResponse</a></code>
- <code><a href="./src/resources/workflows.ts">WorkflowListResponse</a></code>

Methods:

- <code title="get /v2/workflows">client.workflows.<a href="./src/resources/workflows.ts">list</a>() -> WorkflowListResponse</code>
- <code title="post /v2/workflows">client.workflows.<a href="./src/resources/workflows.ts">create</a>({ ...params }) -> WorkflowCreateResponse</code>
- <code title="delete /v2/workflows/{id}">client.workflows.<a href="./src/resources/workflows.ts">destroy</a>(id) -> void</code>
- <code title="get /v2/workflows/{id}">client.workflows.<a href="./src/resources/workflows.ts">retrieve</a>(id, { ...params }) -> WorkflowRetrieveResponse</code>
- <code title="put /v2/workflows/{id}">client.workflows.<a href="./src/resources/workflows.ts">update</a>(id, { ...params }) -> WorkflowUpdateResponse</code>
