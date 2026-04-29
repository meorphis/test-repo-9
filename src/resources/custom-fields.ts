// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CustomFieldOptionsAPI from './custom-field-options';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CustomFields extends APIResource {
  /**
   * Create a new custom field
   *
   * @deprecated
   */
  createV1(
    body: CustomFieldCreateV1Params,
    options?: RequestOptions,
  ): APIPromise<CustomFieldCreateV1Response> {
    return this._client.post('/v1/custom_fields', { body, ...options });
  }

  /**
   * Create a new custom field
   *
   * @example
   * ```ts
   * const response = await client.customFields.createV2({
   *   description: 'Which team is impacted by this issue',
   *   field_type: 'single_select',
   *   name: 'Affected Team',
   *   catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',
   *   filter_by: {
   *     catalog_attribute_id: '01H2FW182TAH0NHEVBY34SCAK0',
   *     custom_field_id: '01H2FW182TAH0NHEVBY34SCAK0',
   *   },
   *   group_by_catalog_attribute_id:
   *     '01FCNDV6P870EA6S7TK1DSYDG0',
   *   helptext_catalog_attribute_id:
   *     '01H2FW182TAH0NHEVBY34SCAK0',
   * });
   * ```
   */
  createV2(
    body: CustomFieldCreateV2Params,
    options?: RequestOptions,
  ): APIPromise<CustomFieldCreateV2Response> {
    return this._client.post('/v2/custom_fields', { body, ...options });
  }

  /**
   * Delete a custom field
   *
   * @deprecated
   */
  deleteV1(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/custom_fields/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a custom field
   *
   * @example
   * ```ts
   * await client.customFields.deleteV2(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  deleteV2(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/custom_fields/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all custom fields for an organisation.
   *
   * @deprecated
   */
  listV1(options?: RequestOptions): APIPromise<CustomFieldListV1Response> {
    return this._client.get('/v1/custom_fields', options);
  }

  /**
   * List all custom fields for an organisation.
   *
   * @example
   * ```ts
   * const response = await client.customFields.listV2();
   * ```
   */
  listV2(options?: RequestOptions): APIPromise<CustomFieldListV2Response> {
    return this._client.get('/v2/custom_fields', options);
  }

  /**
   * Get a single custom field.
   *
   * @deprecated
   */
  retrieveV1(id: string, options?: RequestOptions): APIPromise<CustomFieldRetrieveV1Response> {
    return this._client.get(path`/v1/custom_fields/${id}`, options);
  }

  /**
   * Get a single custom field.
   *
   * @example
   * ```ts
   * const response = await client.customFields.retrieveV2(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  retrieveV2(id: string, options?: RequestOptions): APIPromise<CustomFieldRetrieveV2Response> {
    return this._client.get(path`/v2/custom_fields/${id}`, options);
  }

  /**
   * Update the details of a custom field
   *
   * @deprecated
   */
  updateV1(
    id: string,
    body: CustomFieldUpdateV1Params,
    options?: RequestOptions,
  ): APIPromise<CustomFieldUpdateV1Response> {
    return this._client.put(path`/v1/custom_fields/${id}`, { body, ...options });
  }

  /**
   * Update the details of a custom field
   *
   * @example
   * ```ts
   * const response = await client.customFields.updateV2(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   *   {
   *     description: 'Which team is impacted by this issue',
   *     name: 'Affected Team',
   *     filter_by: {
   *       catalog_attribute_id: '01H2FW182TAH0NHEVBY34SCAK0',
   *       custom_field_id: '01H2FW182TAH0NHEVBY34SCAK0',
   *     },
   *     group_by_catalog_attribute_id:
   *       '01FCNDV6P870EA6S7TK1DSYDG0',
   *     helptext_catalog_attribute_id:
   *       '01H2FW182TAH0NHEVBY34SCAK0',
   *   },
   * );
   * ```
   */
  updateV2(
    id: string,
    body: CustomFieldUpdateV2Params,
    options?: RequestOptions,
  ): APIPromise<CustomFieldUpdateV2Response> {
    return this._client.put(path`/v2/custom_fields/${id}`, { body, ...options });
  }
}

export interface CustomFieldFilterByOptionsV2 {
  /**
   * This must be an attribute of the catalog type of this custom field. It must be
   * an attribute that points to another catalog type (so not a plain string, number,
   * or boolean attribute).
   */
  catalog_attribute_id: string;

  /**
   * This must be the ID of a custom field, which must have values of the same type
   * as the attribute you are filtering by.
   *
   * When this filtering field is set on an incident, the options for this custom
   * field will be filtered to only those with the attribute value that matches the
   * value of the filtering field.
   */
  custom_field_id: string;
}

export interface CustomFieldV1 {
  /**
   * Unique identifier for the custom field
   */
  id: string;

  /**
   * When the action was created
   */
  created_at: string;

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

  /**
   * Whether a custom field should be shown in the incident resolve modal. If this
   * custom field is required before resolution, but no value has been set for it,
   * the field will be shown in the resolve modal whatever the value of this setting.
   */
  show_before_closure: boolean;

  /**
   * Whether a custom field should be shown in the incident creation modal. This must
   * be true if the field is always required.
   */
  show_before_creation: boolean;

  /**
   * Whether a custom field should be shown in the incident update modal.
   */
  show_before_update: boolean;

  /**
   * When the action was last updated
   */
  updated_at: string;

  /**
   * For catalog fields, the ID of the associated catalog type
   */
  catalog_type_id?: string;

  /**
   * When this custom field must be set during the incident lifecycle. [DEPRECATED:
   * please use required_v2 instead].
   */
  required?: 'never' | 'before_closure' | 'always';

  /**
   * When this custom field must be set during the incident lifecycle.
   */
  required_v2?: 'never' | 'before_resolution' | 'always';

  /**
   * Whether a custom field should be shown in the list of fields as part of the
   * announcement post when set.
   */
  show_in_announcement_post?: boolean;
}

export interface CustomFieldV2 {
  /**
   * Unique identifier for the custom field
   */
  id: string;

  /**
   * When the action was created
   */
  created_at: string;

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
   * When the action was last updated
   */
  updated_at: string;

  /**
   * For catalog fields, the ID of the associated catalog type
   */
  catalog_type_id?: string;

  filter_by?: CustomFieldFilterByOptionsV2;

  /**
   * For catalog fields, the ID of the attribute used to group catalog entries (if
   * applicable)
   */
  group_by_catalog_attribute_id?: string;

  /**
   * Which catalog attribute provides helptext for the options
   */
  helptext_catalog_attribute_id?: string;
}

export interface CustomFieldCreateV1Response {
  custom_field: CustomFieldV1;
}

export interface CustomFieldCreateV2Response {
  custom_field: CustomFieldV2;
}

export interface CustomFieldListV1Response {
  custom_fields: Array<CustomFieldV1>;
}

export interface CustomFieldListV2Response {
  custom_fields: Array<CustomFieldV2>;
}

export interface CustomFieldRetrieveV1Response {
  custom_field: CustomFieldV1;
}

export interface CustomFieldRetrieveV2Response {
  custom_field: CustomFieldV2;
}

export interface CustomFieldUpdateV1Response {
  custom_field: CustomFieldV1;
}

export interface CustomFieldUpdateV2Response {
  custom_field: CustomFieldV2;
}

export interface CustomFieldCreateV1Params {
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
   * Whether a custom field should be shown in the incident resolve modal. If this
   * custom field is required before resolution, but no value has been set for it,
   * the field will be shown in the resolve modal whatever the value of this setting.
   */
  show_before_closure: boolean;

  /**
   * Whether a custom field should be shown in the incident creation modal. This must
   * be true if the field is always required.
   */
  show_before_creation: boolean;

  /**
   * Whether a custom field should be shown in the incident update modal.
   */
  show_before_update: boolean;

  /**
   * When this custom field must be set during the incident lifecycle. [DEPRECATED:
   * please use required_v2 instead].
   */
  required?: 'never' | 'before_closure' | 'always';

  /**
   * When this custom field must be set during the incident lifecycle.
   */
  required_v2?: 'never' | 'before_resolution' | 'always';

  /**
   * Whether a custom field should be shown in the list of fields as part of the
   * announcement post when set.
   */
  show_in_announcement_post?: boolean;
}

export interface CustomFieldCreateV2Params {
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
   * For catalog fields, the ID of the associated catalog type
   */
  catalog_type_id?: string;

  filter_by?: CustomFieldFilterByOptionsV2;

  /**
   * For catalog fields, the ID of the attribute used to group catalog entries (if
   * applicable)
   */
  group_by_catalog_attribute_id?: string;

  /**
   * Which catalog attribute provides helptext for the options
   */
  helptext_catalog_attribute_id?: string;
}

export interface CustomFieldUpdateV1Params {
  /**
   * Description of the custom field
   */
  description: string;

  /**
   * Human readable name for the custom field
   */
  name: string;

  /**
   * Whether a custom field should be shown in the incident resolve modal. If this
   * custom field is required before resolution, but no value has been set for it,
   * the field will be shown in the resolve modal whatever the value of this setting.
   */
  show_before_closure: boolean;

  /**
   * Whether a custom field should be shown in the incident creation modal. This must
   * be true if the field is always required.
   */
  show_before_creation: boolean;

  /**
   * Whether a custom field should be shown in the incident update modal.
   */
  show_before_update: boolean;

  /**
   * When this custom field must be set during the incident lifecycle. [DEPRECATED:
   * please use required_v2 instead].
   */
  required?: 'never' | 'before_closure' | 'always';

  /**
   * When this custom field must be set during the incident lifecycle.
   */
  required_v2?: 'never' | 'before_resolution' | 'always';

  /**
   * Whether a custom field should be shown in the list of fields as part of the
   * announcement post when set.
   */
  show_in_announcement_post?: boolean;
}

export interface CustomFieldUpdateV2Params {
  /**
   * Description of the custom field
   */
  description: string;

  /**
   * Human readable name for the custom field
   */
  name: string;

  filter_by?: CustomFieldFilterByOptionsV2;

  /**
   * For catalog fields, the ID of the attribute used to group catalog entries (if
   * applicable)
   */
  group_by_catalog_attribute_id?: string;

  /**
   * Which catalog attribute provides helptext for the options
   */
  helptext_catalog_attribute_id?: string;
}

export declare namespace CustomFields {
  export {
    type CustomFieldFilterByOptionsV2 as CustomFieldFilterByOptionsV2,
    type CustomFieldV1 as CustomFieldV1,
    type CustomFieldV2 as CustomFieldV2,
    type CustomFieldCreateV1Response as CustomFieldCreateV1Response,
    type CustomFieldCreateV2Response as CustomFieldCreateV2Response,
    type CustomFieldListV1Response as CustomFieldListV1Response,
    type CustomFieldListV2Response as CustomFieldListV2Response,
    type CustomFieldRetrieveV1Response as CustomFieldRetrieveV1Response,
    type CustomFieldRetrieveV2Response as CustomFieldRetrieveV2Response,
    type CustomFieldUpdateV1Response as CustomFieldUpdateV1Response,
    type CustomFieldUpdateV2Response as CustomFieldUpdateV2Response,
    type CustomFieldCreateV1Params as CustomFieldCreateV1Params,
    type CustomFieldCreateV2Params as CustomFieldCreateV2Params,
    type CustomFieldUpdateV1Params as CustomFieldUpdateV1Params,
    type CustomFieldUpdateV2Params as CustomFieldUpdateV2Params,
  };
}
