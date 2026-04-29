// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AlertRoutesAPI from './alert-routes';
import * as WorkflowsAPI from './workflows';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CatalogEntries extends APIResource {
  /**
   * List entries for a catalog type.
   *
   * @deprecated
   */
  listEntriesV2(
    query: CatalogEntryListEntriesV2Params,
    options?: RequestOptions,
  ): APIPromise<CatalogEntryListEntriesV2Response> {
    return this._client.get('/v2/catalog_entries', { query, ...options });
  }

  /**
   * Create an entry within the catalog. We support a maximum of 50,000 entries per
   * type.
   *
   * If you call this API with a payload where the external_id and catalog_type_id
   * match an existing entry, the existing entry will be updated.
   *
   * @deprecated
   */
  createEntryV2(
    body: CatalogEntryCreateEntryV2Params,
    options?: RequestOptions,
  ): APIPromise<CatalogEntryCreateEntryV2Response> {
    return this._client.post('/v2/catalog_entries', { body, ...options });
  }

  /**
   * Archives a catalog entry.
   *
   * @deprecated
   */
  destroyEntryV2(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/catalog_entries/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Show a single catalog entry.
   *
   * @deprecated
   */
  showEntryV2(id: string, options?: RequestOptions): APIPromise<CatalogEntryShowEntryV2Response> {
    return this._client.get(path`/v2/catalog_entries/${id}`, options);
  }

  /**
   * Updates an existing catalog entry.
   *
   * @deprecated
   */
  updateEntryV2(
    id: string,
    body: CatalogEntryUpdateEntryV2Params,
    options?: RequestOptions,
  ): APIPromise<CatalogEntryUpdateEntryV2Response> {
    return this._client.put(path`/v2/catalog_entries/${id}`, { body, ...options });
  }

  /**
   * List entries for a catalog type.
   *
   * @example
   * ```ts
   * const response = await client.catalogEntries.listEntriesV3({
   *   catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',
   *   page_size: 25,
   * });
   * ```
   */
  listEntriesV3(
    query: CatalogEntryListEntriesV3Params,
    options?: RequestOptions,
  ): APIPromise<CatalogEntryListEntriesV3Response> {
    return this._client.get('/v3/catalog_entries', { query, ...options });
  }

  /**
   * Create an entry within the catalog. We support a maximum of 50,000 entries per
   * type.
   *
   * If you call this API with a payload where the external_id and catalog_type_id
   * match an existing entry, the existing entry will be updated.
   *
   * @example
   * ```ts
   * const response = await client.catalogEntries.createEntryV3({
   *   attribute_values: {
   *     abc123: {
   *       array_value: [{ literal: 'SEV123' }],
   *       value: { literal: 'SEV123' },
   *     },
   *   },
   *   catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',
   *   name: 'Primary On-call',
   *   aliases: ['lawrence@incident.io', 'lawrence'],
   *   external_id: '761722cd-d1d7-477b-ac7e-90f9e079dc33',
   *   rank: 3,
   * });
   * ```
   */
  createEntryV3(
    body: CatalogEntryCreateEntryV3Params,
    options?: RequestOptions,
  ): APIPromise<CatalogEntryCreateEntryV3Response> {
    return this._client.post('/v3/catalog_entries', { body, ...options });
  }

  /**
   * Archives a catalog entry.
   *
   * @example
   * ```ts
   * await client.catalogEntries.destroyEntryV3(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  destroyEntryV3(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v3/catalog_entries/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Show a single catalog entry.
   *
   * @example
   * ```ts
   * const response = await client.catalogEntries.showEntryV3(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   * );
   * ```
   */
  showEntryV3(id: string, options?: RequestOptions): APIPromise<CatalogEntryShowEntryV3Response> {
    return this._client.get(path`/v3/catalog_entries/${id}`, options);
  }

  /**
   * Updates an existing catalog entry.
   *
   * @example
   * ```ts
   * const response = await client.catalogEntries.updateEntryV3(
   *   '01FCNDV6P870EA6S7TK1DSYDG0',
   *   {
   *     attribute_values: {
   *       abc123: {
   *         array_value: [{ literal: 'SEV123' }],
   *         value: { literal: 'SEV123' },
   *       },
   *     },
   *     name: 'Primary On-call',
   *     aliases: ['lawrence@incident.io', 'lawrence'],
   *     external_id: '761722cd-d1d7-477b-ac7e-90f9e079dc33',
   *     rank: 3,
   *     update_attributes: ['abc123'],
   *   },
   * );
   * ```
   */
  updateEntryV3(
    id: string,
    body: CatalogEntryUpdateEntryV3Params,
    options?: RequestOptions,
  ): APIPromise<CatalogEntryUpdateEntryV3Response> {
    return this._client.put(path`/v3/catalog_entries/${id}`, { body, ...options });
  }
}

export interface CatalogEntryV2 {
  /**
   * ID of this catalog entry
   */
  id: string;

  /**
   * Optional aliases that can be used to reference this entry
   */
  aliases: Array<string>;

  /**
   * Values of this entry
   */
  attribute_values: { [key: string]: CatalogEntryV2.AttributeValues };

  /**
   * ID of this catalog type
   */
  catalog_type_id: string;

  /**
   * When this entry was created
   */
  created_at: string;

  /**
   * Name is the human readable name of this entry
   */
  name: string;

  /**
   * When catalog type is ranked, this is used to help order things
   */
  rank: number;

  /**
   * When this entry was last updated
   */
  updated_at: string;

  /**
   * When this entry was archived
   */
  archived_at?: string;

  /**
   * An optional alternative ID for this entry, which is ensured to be unique for the
   * type
   */
  external_id?: string;
}

export namespace CatalogEntryV2 {
  export interface AttributeValues {
    /**
     * If array_value is set, this helps render the values
     */
    array_value?: Array<AttributeValues.ArrayValue>;

    value?: AttributeValues.Value;
  }

  export namespace AttributeValues {
    export interface ArrayValue {
      /**
       * Human readable label to be displayed for user to select
       */
      label: string;

      /**
       * This field is deprecated. It will not be present in any responses, and will be
       * removed in a future version
       */
      sort_key: string;

      catalog_entry?: ArrayValue.CatalogEntry;

      /**
       * This field is deprecated. It will not be present in any responses, and will be
       * removed in a future version
       */
      helptext?: string;

      /**
       * This field is deprecated. It will not be present in any responses, and will be
       * removed in a future version
       */
      image_url?: string;

      /**
       * This field is deprecated. It will not be present in any responses, and will be
       * removed in a future version
       */
      is_image_slack_icon?: boolean;

      /**
       * If set, this is the literal value of the step parameter
       */
      literal?: string;

      /**
       * This field is deprecated. It will not be present in any responses, and will be
       * removed in a future version
       */
      reference?: string;

      /**
       * This field is deprecated. It will not be present in any responses, and will be
       * removed in a future version
       */
      unavailable?: boolean;

      /**
       * This field is deprecated. It will not be present in any responses, and will be
       * removed in a future version
       */
      value?: string;
    }

    export namespace ArrayValue {
      export interface CatalogEntry {
        /**
         * ID of this catalog entry
         */
        catalog_entry_id: string;

        /**
         * The name of this entry
         */
        catalog_entry_name: string;

        /**
         * ID of this catalog type
         */
        catalog_type_id: string;

        /**
         * When this entry was archived
         */
        archived_at?: string;
      }
    }

    export interface Value {
      /**
       * Human readable label to be displayed for user to select
       */
      label: string;

      /**
       * This field is deprecated. It will not be present in any responses, and will be
       * removed in a future version
       */
      sort_key: string;

      catalog_entry?: Value.CatalogEntry;

      /**
       * This field is deprecated. It will not be present in any responses, and will be
       * removed in a future version
       */
      helptext?: string;

      /**
       * This field is deprecated. It will not be present in any responses, and will be
       * removed in a future version
       */
      image_url?: string;

      /**
       * This field is deprecated. It will not be present in any responses, and will be
       * removed in a future version
       */
      is_image_slack_icon?: boolean;

      /**
       * If set, this is the literal value of the step parameter
       */
      literal?: string;

      /**
       * This field is deprecated. It will not be present in any responses, and will be
       * removed in a future version
       */
      reference?: string;

      /**
       * This field is deprecated. It will not be present in any responses, and will be
       * removed in a future version
       */
      unavailable?: boolean;

      /**
       * This field is deprecated. It will not be present in any responses, and will be
       * removed in a future version
       */
      value?: string;
    }

    export namespace Value {
      export interface CatalogEntry {
        /**
         * ID of this catalog entry
         */
        catalog_entry_id: string;

        /**
         * The name of this entry
         */
        catalog_entry_name: string;

        /**
         * ID of this catalog type
         */
        catalog_type_id: string;

        /**
         * When this entry was archived
         */
        archived_at?: string;
      }
    }
  }
}

export interface CatalogEntryV3 {
  /**
   * ID of this catalog entry
   */
  id: string;

  /**
   * Optional aliases that can be used to reference this entry
   */
  aliases: Array<string>;

  /**
   * Values of this entry
   */
  attribute_values: { [key: string]: CatalogEntryV3.AttributeValues };

  /**
   * ID of this catalog type
   */
  catalog_type_id: string;

  /**
   * When this entry was created
   */
  created_at: string;

  /**
   * Name is the human readable name of this entry
   */
  name: string;

  /**
   * When catalog type is ranked, this is used to help order things
   */
  rank: number;

  /**
   * When this entry was last updated
   */
  updated_at: string;

  /**
   * When this entry was archived
   */
  archived_at?: string;

  /**
   * An optional alternative ID for this entry, which is ensured to be unique for the
   * type
   */
  external_id?: string;
}

export namespace CatalogEntryV3 {
  export interface AttributeValues {
    /**
     * If the attribute is multi-valued, the value will be returned here.
     */
    array_value?: Array<AttributeValues.ArrayValue>;

    value?: AttributeValues.Value;
  }

  export namespace AttributeValues {
    export interface ArrayValue {
      /**
       * A label for this attribute value. If the attribute refers to another Catalog
       * entry, this will be the name of that entry.
       */
      label: string;

      /**
       * The underlying value of the attribute, serialized as a string.
       *
       * For String, Text, Number, and Bool typed attributes, this will be empty. For
       * attributes that refer to another catalog entry, this can be the ID, external ID,
       * or one of the aliases of that catalog entry.
       */
      literal?: string;
    }

    export interface Value {
      /**
       * A label for this attribute value. If the attribute refers to another Catalog
       * entry, this will be the name of that entry.
       */
      label: string;

      /**
       * The underlying value of the attribute, serialized as a string.
       *
       * For String, Text, Number, and Bool typed attributes, this will be empty. For
       * attributes that refer to another catalog entry, this can be the ID, external ID,
       * or one of the aliases of that catalog entry.
       */
      literal?: string;
    }
  }
}

export interface CatalogTypeV2 {
  /**
   * ID of this catalog type
   */
  id: string;

  /**
   * Annotations that can track metadata about this type
   */
  annotations: { [key: string]: string };

  /**
   * What categories is this type considered part of
   */
  categories: Array<
    'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'
  >;

  /**
   * Sets the display color of this type in the dashboard
   */
  color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange';

  /**
   * When this type was created
   */
  created_at: string;

  /**
   * Human readble description of this type
   */
  description: string;

  /**
   * Sets the display icon of this type in the dashboard
   */
  icon:
    | 'alert'
    | 'bolt'
    | 'box'
    | 'briefcase'
    | 'browser'
    | 'bulb'
    | 'calendar'
    | 'clock'
    | 'cog'
    | 'components'
    | 'database'
    | 'doc'
    | 'email'
    | 'escalation-path'
    | 'files'
    | 'flag'
    | 'folder'
    | 'globe'
    | 'money'
    | 'server'
    | 'severity'
    | 'status-page'
    | 'store'
    | 'star'
    | 'tag'
    | 'user'
    | 'users';

  /**
   * Catalog types that are synced with external resources can't be edited
   */
  is_editable: boolean;

  /**
   * Name is the human readable name of this type
   */
  name: string;

  /**
   * If this type should be ranked
   */
  ranked: boolean;

  schema: CatalogTypeV2.Schema;

  /**
   * This type has been deprecated, and will always be empty.
   */
  semantic_type: string;

  /**
   * The type name of this catalog type, to be used when defining attributes. This is
   * immutable once a CatalogType has been created. For non-externally sync types, it
   * must follow the pattern Custom["SomeName"]
   */
  type_name: string;

  /**
   * When this type was last updated
   */
  updated_at: string;

  /**
   * If this is a dynamic catalog type, this will be the unique parameter for
   * identitfying this resource externally.
   */
  dynamic_resource_parameter?: string;

  /**
   * If populated, gives an estimated count of entries for this type
   */
  estimated_count?: number;

  /**
   * When this type was last synced (if it's ever been sync'd)
   */
  last_synced_at?: string;

  /**
   * The registry resource this type is synced from, if any
   */
  registry_type?: string;

  /**
   * If populated, the integrations required for this type
   */
  required_integrations?: Array<string>;

  /**
   * The url of the external repository where this type is managed
   */
  source_repo_url?: string;
}

export namespace CatalogTypeV2 {
  export interface Schema {
    /**
     * Attributes of this catalog type
     */
    attributes: Array<Schema.Attribute>;

    /**
     * The version number of this schema
     */
    version: number;
  }

  export namespace Schema {
    export interface Attribute {
      /**
       * The ID of this attribute
       */
      id: string;

      /**
       * Whether this attribute is an array
       */
      array: boolean;

      /**
       * Controls how this attribute is modified
       */
      mode: '' | 'manual' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path';

      /**
       * Unique name of this attribute
       */
      name: string;

      /**
       * Catalog type name for this attribute
       */
      type: string;

      /**
       * The attribute to use (if this is a backlink)
       */
      backlink_attribute?: string;

      /**
       * The path to use (if this is a path attribute)
       */
      path?: Array<Attribute.Path>;
    }

    export namespace Attribute {
      export interface Path {
        /**
         * the ID of the attribute to use
         */
        attribute_id: string;

        /**
         * the name of the attribute to use
         */
        attribute_name: string;
      }
    }
  }
}

export interface CatalogTypeV3 {
  /**
   * ID of this catalog type
   */
  id: string;

  /**
   * Annotations that can track metadata about this type
   */
  annotations: { [key: string]: string };

  /**
   * What categories is this type considered part of
   */
  categories: Array<
    'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'
  >;

  /**
   * Sets the display color of this type in the dashboard
   */
  color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange';

  /**
   * When this type was created
   */
  created_at: string;

  /**
   * Human readble description of this type
   */
  description: string;

  /**
   * Sets the display icon of this type in the dashboard
   */
  icon:
    | 'alert'
    | 'bolt'
    | 'box'
    | 'briefcase'
    | 'browser'
    | 'bulb'
    | 'calendar'
    | 'clock'
    | 'cog'
    | 'components'
    | 'database'
    | 'doc'
    | 'email'
    | 'escalation-path'
    | 'files'
    | 'flag'
    | 'folder'
    | 'globe'
    | 'money'
    | 'server'
    | 'severity'
    | 'status-page'
    | 'store'
    | 'star'
    | 'tag'
    | 'user'
    | 'users';

  /**
   * Catalog types that are synced with external resources can't be edited
   */
  is_editable: boolean;

  /**
   * Name is the human readable name of this type
   */
  name: string;

  /**
   * If this type should be ranked
   */
  ranked: boolean;

  schema: CatalogTypeV3.Schema;

  /**
   * The type name of this catalog type, to be used when defining attributes. This is
   * immutable once a CatalogType has been created. For non-externally sync types, it
   * must follow the pattern Custom["SomeName"]
   */
  type_name: string;

  /**
   * When this type was last updated
   */
  updated_at: string;

  /**
   * If enabled, you can refer to entries of this type by their name, as well as
   * their external ID and any aliases.
   */
  use_name_as_identifier: boolean;

  /**
   * If this is a dynamic catalog type, this will be the unique parameter for
   * identitfying this resource externally.
   */
  dynamic_resource_parameter?: string;

  /**
   * If populated, gives an estimated count of entries for this type
   */
  estimated_count?: number;

  /**
   * When this type was last synced (if it's ever been sync'd)
   */
  last_synced_at?: string;

  /**
   * The registry resource this type is synced from, if any
   */
  registry_type?: string;

  /**
   * If populated, the integrations required for this type
   */
  required_integrations?: Array<string>;

  /**
   * The url of the external repository where this type is managed
   */
  source_repo_url?: string;
}

export namespace CatalogTypeV3 {
  export interface Schema {
    /**
     * Attributes of this catalog type
     */
    attributes: Array<Schema.Attribute>;

    /**
     * The version number of this schema
     */
    version: number;
  }

  export namespace Schema {
    export interface Attribute {
      /**
       * The ID of this attribute
       */
      id: string;

      /**
       * Whether this attribute is an array
       */
      array: boolean;

      /**
       * Controls how this attribute is modified
       */
      mode: '' | 'api' | 'dashboard' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path';

      /**
       * Unique name of this attribute
       */
      name: string;

      /**
       * Catalog type name for this attribute
       */
      type: string;

      /**
       * The attribute to use (if this is a backlink)
       */
      backlink_attribute?: string;

      /**
       * The path to use (if this is a path attribute)
       */
      path?: Array<Attribute.Path>;
    }

    export namespace Attribute {
      export interface Path {
        /**
         * the ID of the attribute to use
         */
        attribute_id: string;

        /**
         * the name of the attribute to use
         */
        attribute_name: string;
      }
    }
  }
}

export interface CatalogEntryCreateEntryV2Response {
  catalog_entry: CatalogEntryV2;
}

export interface CatalogEntryCreateEntryV3Response {
  catalog_entry: CatalogEntryV3;
}

export interface CatalogEntryListEntriesV2Response {
  catalog_entries: Array<CatalogEntryV2>;

  catalog_type: CatalogTypeV2;

  pagination_meta: AlertRoutesAPI.PaginationMetaResult;
}

export interface CatalogEntryListEntriesV3Response {
  catalog_entries: Array<CatalogEntryV3>;

  catalog_type: CatalogTypeV3;

  pagination_meta: CatalogEntryListEntriesV3Response.PaginationMeta;
}

export namespace CatalogEntryListEntriesV3Response {
  export interface PaginationMeta {
    /**
     * What was the maximum number of results requested
     */
    page_size: number;

    /**
     * If provided, pass this as the 'after' param to load the next page
     */
    after?: string;
  }
}

export interface CatalogEntryShowEntryV2Response {
  catalog_entry: CatalogEntryV2;

  catalog_type: CatalogTypeV2;
}

export interface CatalogEntryShowEntryV3Response {
  catalog_entry: CatalogEntryV3;

  catalog_type: CatalogTypeV3;
}

export interface CatalogEntryUpdateEntryV2Response {
  catalog_entry: CatalogEntryV2;

  catalog_type: CatalogTypeV2;
}

export interface CatalogEntryUpdateEntryV3Response {
  catalog_entry: CatalogEntryV3;

  catalog_type: CatalogTypeV3;
}

export interface CatalogEntryListEntriesV2Params {
  /**
   * ID of this catalog type
   */
  catalog_type_id: string;

  /**
   * An record's ID. This endpoint will return a list of records after this ID in
   * relation to the API response order.
   */
  after?: string;

  /**
   * Integer number of records to return
   */
  page_size?: number;
}

export interface CatalogEntryCreateEntryV2Params {
  /**
   * Values of this entry
   */
  attribute_values: { [key: string]: WorkflowsAPI.EngineParamBindingPayload };

  /**
   * ID of this catalog type
   */
  catalog_type_id: string;

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

  /**
   * When catalog type is ranked, this is used to help order things
   */
  rank?: number;
}

export interface CatalogEntryUpdateEntryV2Params {
  /**
   * Values of this entry
   */
  attribute_values: { [key: string]: WorkflowsAPI.EngineParamBindingPayload };

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

  /**
   * When catalog type is ranked, this is used to help order things
   */
  rank?: number;
}

export interface CatalogEntryListEntriesV3Params {
  /**
   * ID of this catalog type
   */
  catalog_type_id: string;

  /**
   * The integer number of records to return
   */
  page_size: number;

  /**
   * An record's ID. This endpoint will return a list of records after this ID in
   * relation to the API response order.
   */
  after?: string;

  /**
   * If specified, only entries with this identifier will be returned. This will
   * search by ID, external ID, and aliases.
   *
   * If 'use name as identifier' is enabled for the catalog type, this will also
   * match on name.
   */
  identifier?: string;
}

export interface CatalogEntryCreateEntryV3Params {
  /**
   * Values of this entry
   */
  attribute_values: { [key: string]: CatalogEntryCreateEntryV3Params.AttributeValues };

  /**
   * ID of this catalog type
   */
  catalog_type_id: string;

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

  /**
   * When catalog type is ranked, this is used to help order things
   */
  rank?: number;
}

export namespace CatalogEntryCreateEntryV3Params {
  export interface AttributeValues {
    /**
     * If set, this is the array value of the step parameter
     */
    array_value?: Array<AttributeValues.ArrayValue>;

    value?: AttributeValues.Value;
  }

  export namespace AttributeValues {
    export interface ArrayValue {
      /**
       * If set, this is the literal value of the step parameter
       */
      literal?: string;
    }

    export interface Value {
      /**
       * If set, this is the literal value of the step parameter
       */
      literal?: string;
    }
  }
}

export interface CatalogEntryUpdateEntryV3Params {
  /**
   * Values of this entry
   */
  attribute_values: { [key: string]: CatalogEntryUpdateEntryV3Params.AttributeValues };

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

  /**
   * When catalog type is ranked, this is used to help order things
   */
  rank?: number;

  /**
   * If provided, only update these attribute_values keys. If not provided, update
   * all attribute values. If you specify an attribute key that's not in your
   * payload, the associated attribute value will be cleared.
   */
  update_attributes?: Array<string>;
}

export namespace CatalogEntryUpdateEntryV3Params {
  export interface AttributeValues {
    /**
     * If set, this is the array value of the step parameter
     */
    array_value?: Array<AttributeValues.ArrayValue>;

    value?: AttributeValues.Value;
  }

  export namespace AttributeValues {
    export interface ArrayValue {
      /**
       * If set, this is the literal value of the step parameter
       */
      literal?: string;
    }

    export interface Value {
      /**
       * If set, this is the literal value of the step parameter
       */
      literal?: string;
    }
  }
}

export declare namespace CatalogEntries {
  export {
    type CatalogEntryV2 as CatalogEntryV2,
    type CatalogEntryV3 as CatalogEntryV3,
    type CatalogTypeV2 as CatalogTypeV2,
    type CatalogTypeV3 as CatalogTypeV3,
    type CatalogEntryCreateEntryV2Response as CatalogEntryCreateEntryV2Response,
    type CatalogEntryCreateEntryV3Response as CatalogEntryCreateEntryV3Response,
    type CatalogEntryListEntriesV2Response as CatalogEntryListEntriesV2Response,
    type CatalogEntryListEntriesV3Response as CatalogEntryListEntriesV3Response,
    type CatalogEntryShowEntryV2Response as CatalogEntryShowEntryV2Response,
    type CatalogEntryShowEntryV3Response as CatalogEntryShowEntryV3Response,
    type CatalogEntryUpdateEntryV2Response as CatalogEntryUpdateEntryV2Response,
    type CatalogEntryUpdateEntryV3Response as CatalogEntryUpdateEntryV3Response,
    type CatalogEntryListEntriesV2Params as CatalogEntryListEntriesV2Params,
    type CatalogEntryCreateEntryV2Params as CatalogEntryCreateEntryV2Params,
    type CatalogEntryUpdateEntryV2Params as CatalogEntryUpdateEntryV2Params,
    type CatalogEntryListEntriesV3Params as CatalogEntryListEntriesV3Params,
    type CatalogEntryCreateEntryV3Params as CatalogEntryCreateEntryV3Params,
    type CatalogEntryUpdateEntryV3Params as CatalogEntryUpdateEntryV3Params,
  };
}
