// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list',
    endpoint: '/v1/actions',
    httpMethod: 'get',
    summary: 'List Actions V1',
    description: 'List all actions for an organisation.',
    stainlessPath: '(resource) actions > (method) list',
    qualified: 'client.actions.list',
    params: [
      'incident_id?: string;',
      "incident_mode?: 'real' | 'test' | 'tutorial';",
      'is_follow_up?: boolean;',
    ],
    response:
      "{ actions: { id: string; created_at: string; follow_up: boolean; incident_id: string; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; updated_at: string; assignee?: user_v1; completed_at?: string; description?: string; external_issue_reference?: object; }[]; }",
    markdown:
      "## list\n\n`client.actions.list(incident_id?: string, incident_mode?: 'real' | 'test' | 'tutorial', is_follow_up?: boolean): { actions: action_v1[]; }`\n\n**get** `/v1/actions`\n\nList all actions for an organisation.\n\n### Parameters\n\n- `incident_id?: string`\n  Find actions related to this incident\n\n- `incident_mode?: 'real' | 'test' | 'tutorial'`\n  Filter to actions from incidents of the given mode. If not set, only actions from `real` incidents are returned\n\n- `is_follow_up?: boolean`\n  Filter to actions marked as being follow up actions\n\n### Returns\n\n- `{ actions: { id: string; created_at: string; follow_up: boolean; incident_id: string; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; updated_at: string; assignee?: user_v1; completed_at?: string; description?: string; external_issue_reference?: object; }[]; }`\n\n  - `actions: { id: string; created_at: string; follow_up: boolean; incident_id: string; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; updated_at: string; assignee?: { id: string; name: string; role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset'; email?: string; slack_user_id?: string; }; completed_at?: string; description?: string; external_issue_reference?: { issue_name?: string; issue_permalink?: string; provider?: string; }; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst actions = await client.actions.list();\n\nconsole.log(actions);\n```",
    perLanguage: {
      typescript: {
        method: 'client.actions.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst actions = await client.actions.list();\n\nconsole.log(actions.actions);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/actions \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/actions/{id}',
    httpMethod: 'get',
    summary: 'Show Actions V1',
    description: 'Get a single incident action.',
    stainlessPath: '(resource) actions > (method) retrieve',
    qualified: 'client.actions.retrieve',
    params: ['id: string;'],
    response:
      "{ action: { id: string; created_at: string; follow_up: boolean; incident_id: string; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; updated_at: string; assignee?: user_v1; completed_at?: string; description?: string; external_issue_reference?: object; }; }",
    markdown:
      "## retrieve\n\n`client.actions.retrieve(id: string): { action: action_v1; }`\n\n**get** `/v1/actions/{id}`\n\nGet a single incident action.\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the action\n\n### Returns\n\n- `{ action: { id: string; created_at: string; follow_up: boolean; incident_id: string; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; updated_at: string; assignee?: user_v1; completed_at?: string; description?: string; external_issue_reference?: object; }; }`\n\n  - `action: { id: string; created_at: string; follow_up: boolean; incident_id: string; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; updated_at: string; assignee?: { id: string; name: string; role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset'; email?: string; slack_user_id?: string; }; completed_at?: string; description?: string; external_issue_reference?: { issue_name?: string; issue_permalink?: string; provider?: string; }; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst action = await client.actions.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(action);\n```",
    perLanguage: {
      typescript: {
        method: 'client.actions.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst action = await client.actions.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(action.action);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/actions/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list_v2',
    endpoint: '/v2/actions',
    httpMethod: 'get',
    summary: 'List Actions V2',
    description: 'List all actions for an organisation.',
    stainlessPath: '(resource) actions > (method) list_v2',
    qualified: 'client.actions.listV2',
    params: [
      'incident_id?: string;',
      "incident_mode?: 'standard' | 'retrospective' | 'test' | 'tutorial' | 'stream';",
    ],
    response:
      "{ actions: { id: string; created_at: string; creator: actor_v2; description: string; incident_id: string; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; updated_at: string; assignee?: user_v2; completed_at?: string; }[]; }",
    markdown:
      "## list_v2\n\n`client.actions.listV2(incident_id?: string, incident_mode?: 'standard' | 'retrospective' | 'test' | 'tutorial' | 'stream'): { actions: action_v2[]; }`\n\n**get** `/v2/actions`\n\nList all actions for an organisation.\n\n### Parameters\n\n- `incident_id?: string`\n  Find actions related to this incident\n\n- `incident_mode?: 'standard' | 'retrospective' | 'test' | 'tutorial' | 'stream'`\n  Filter to actions from incidents of the given mode. If not set, only actions from `standard` and `retrospective` incidents are returned\n\n### Returns\n\n- `{ actions: { id: string; created_at: string; creator: actor_v2; description: string; incident_id: string; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; updated_at: string; assignee?: user_v2; completed_at?: string; }[]; }`\n\n  - `actions: { id: string; created_at: string; creator: { alert?: alert_actor_v2; api_key?: object; user?: user_v2; workflow?: workflow_actor_v2; }; description: string; incident_id: string; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; updated_at: string; assignee?: { id: string; name: string; role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset'; email?: string; slack_user_id?: string; }; completed_at?: string; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.actions.listV2();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.actions.listV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.actions.listV2();\n\nconsole.log(response.actions);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/actions \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve_v2',
    endpoint: '/v2/actions/{id}',
    httpMethod: 'get',
    summary: 'Show Actions V2',
    description: 'Get a single incident action.',
    stainlessPath: '(resource) actions > (method) retrieve_v2',
    qualified: 'client.actions.retrieveV2',
    params: ['id: string;'],
    response:
      "{ action: { id: string; created_at: string; creator: actor_v2; description: string; incident_id: string; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; updated_at: string; assignee?: user_v2; completed_at?: string; }; }",
    markdown:
      "## retrieve_v2\n\n`client.actions.retrieveV2(id: string): { action: action_v2; }`\n\n**get** `/v2/actions/{id}`\n\nGet a single incident action.\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the action\n\n### Returns\n\n- `{ action: { id: string; created_at: string; creator: actor_v2; description: string; incident_id: string; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; updated_at: string; assignee?: user_v2; completed_at?: string; }; }`\n\n  - `action: { id: string; created_at: string; creator: { alert?: alert_actor_v2; api_key?: object; user?: user_v2; workflow?: workflow_actor_v2; }; description: string; incident_id: string; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; updated_at: string; assignee?: { id: string; name: string; role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset'; email?: string; slack_user_id?: string; }; completed_at?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.actions.retrieveV2('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.actions.retrieveV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.actions.retrieveV2('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(response.action);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/actions/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/custom_field_options',
    httpMethod: 'get',
    summary: 'List Custom Field Options V1',
    description: 'Show custom field options for a custom field',
    stainlessPath: '(resource) custom_field_options > (method) list',
    qualified: 'client.customFieldOptions.list',
    params: ['custom_field_id: string;', 'after?: string;', 'page_size?: number;'],
    response:
      '{ custom_field_options: { id: string; custom_field_id: string; sort_key: number; value: string; }[]; pagination_meta: { page_size: number; after?: string; }; }',
    markdown:
      "## list\n\n`client.customFieldOptions.list(custom_field_id: string, after?: string, page_size?: number): { custom_field_options: custom_field_option_v1[]; pagination_meta: pagination_meta; }`\n\n**get** `/v1/custom_field_options`\n\nShow custom field options for a custom field\n\n### Parameters\n\n- `custom_field_id: string`\n  The custom field to list options for.\n\n- `after?: string`\n  A custom field option's ID. This endpoint will return a list of custom field options created after this option.\n\n- `page_size?: number`\n  Integer number of records to return\n\n### Returns\n\n- `{ custom_field_options: { id: string; custom_field_id: string; sort_key: number; value: string; }[]; pagination_meta: { page_size: number; after?: string; }; }`\n\n  - `custom_field_options: { id: string; custom_field_id: string; sort_key: number; value: string; }[]`\n  - `pagination_meta: { page_size: number; after?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst customFieldOptions = await client.customFieldOptions.list({ custom_field_id: '01FCNDV6P870EA6S7TK1DSYD5H' });\n\nconsole.log(customFieldOptions);\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFieldOptions.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst customFieldOptions = await client.customFieldOptions.list({\n  custom_field_id: '01FCNDV6P870EA6S7TK1DSYD5H',\n});\n\nconsole.log(customFieldOptions.custom_field_options);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/custom_field_options \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/custom_field_options',
    httpMethod: 'post',
    summary: 'Create Custom Field Options V1',
    description:
      "Create a custom field option. If the sort key is not supplied, it'll default to 1000, so the option appears near the end of the list.",
    stainlessPath: '(resource) custom_field_options > (method) create',
    qualified: 'client.customFieldOptions.create',
    params: ['custom_field_id: string;', 'value: string;', 'sort_key?: number;'],
    response:
      '{ custom_field_option: { id: string; custom_field_id: string; sort_key: number; value: string; }; }',
    markdown:
      "## create\n\n`client.customFieldOptions.create(custom_field_id: string, value: string, sort_key?: number): { custom_field_option: custom_field_option_v1; }`\n\n**post** `/v1/custom_field_options`\n\nCreate a custom field option. If the sort key is not supplied, it'll default to 1000, so the option appears near the end of the list.\n\n### Parameters\n\n- `custom_field_id: string`\n  ID of the custom field this option belongs to\n\n- `value: string`\n  Human readable name for the custom field option\n\n- `sort_key?: number`\n  Sort key used to order the custom field options correctly\n\n### Returns\n\n- `{ custom_field_option: { id: string; custom_field_id: string; sort_key: number; value: string; }; }`\n\n  - `custom_field_option: { id: string; custom_field_id: string; sort_key: number; value: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst customFieldOption = await client.customFieldOptions.create({ custom_field_id: '01FCNDV6P870EA6S7TK1DSYDG0', value: 'Product' });\n\nconsole.log(customFieldOption);\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFieldOptions.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst customFieldOption = await client.customFieldOptions.create({\n  custom_field_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n  value: 'Product',\n  sort_key: 10,\n});\n\nconsole.log(customFieldOption.custom_field_option);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/custom_field_options \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",\n          "value": "Product",\n          "sort_key": 10\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/custom_field_options/{id}',
    httpMethod: 'delete',
    summary: 'Delete Custom Field Options V1',
    description: 'Delete a custom field option',
    stainlessPath: '(resource) custom_field_options > (method) delete',
    qualified: 'client.customFieldOptions.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.customFieldOptions.delete(id: string): void`\n\n**delete** `/v1/custom_field_options/{id}`\n\nDelete a custom field option\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the custom field option\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.customFieldOptions.delete('01FCNDV6P870EA6S7TK1DSYDG0')\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFieldOptions.delete',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.customFieldOptions.delete('01FCNDV6P870EA6S7TK1DSYDG0');",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/custom_field_options/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/custom_field_options/{id}',
    httpMethod: 'get',
    summary: 'Show Custom Field Options V1',
    description: 'Get a single custom field option',
    stainlessPath: '(resource) custom_field_options > (method) retrieve',
    qualified: 'client.customFieldOptions.retrieve',
    params: ['id: string;'],
    response:
      '{ custom_field_option: { id: string; custom_field_id: string; sort_key: number; value: string; }; }',
    markdown:
      "## retrieve\n\n`client.customFieldOptions.retrieve(id: string): { custom_field_option: custom_field_option_v1; }`\n\n**get** `/v1/custom_field_options/{id}`\n\nGet a single custom field option\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the custom field option\n\n### Returns\n\n- `{ custom_field_option: { id: string; custom_field_id: string; sort_key: number; value: string; }; }`\n\n  - `custom_field_option: { id: string; custom_field_id: string; sort_key: number; value: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst customFieldOption = await client.customFieldOptions.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(customFieldOption);\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFieldOptions.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst customFieldOption = await client.customFieldOptions.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(customFieldOption.custom_field_option);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/custom_field_options/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/custom_field_options/{id}',
    httpMethod: 'put',
    summary: 'Update Custom Field Options V1',
    description: 'Update a custom field option',
    stainlessPath: '(resource) custom_field_options > (method) update',
    qualified: 'client.customFieldOptions.update',
    params: ['id: string;', 'sort_key: number;', 'value: string;'],
    response:
      '{ custom_field_option: { id: string; custom_field_id: string; sort_key: number; value: string; }; }',
    markdown:
      "## update\n\n`client.customFieldOptions.update(id: string, sort_key: number, value: string): { custom_field_option: custom_field_option_v1; }`\n\n**put** `/v1/custom_field_options/{id}`\n\nUpdate a custom field option\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the custom field option\n\n- `sort_key: number`\n  Sort key used to order the custom field options correctly\n\n- `value: string`\n  Human readable name for the custom field option\n\n### Returns\n\n- `{ custom_field_option: { id: string; custom_field_id: string; sort_key: number; value: string; }; }`\n\n  - `custom_field_option: { id: string; custom_field_id: string; sort_key: number; value: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst customFieldOption = await client.customFieldOptions.update('01FCNDV6P870EA6S7TK1DSYDG0', { sort_key: 10, value: 'Product' });\n\nconsole.log(customFieldOption);\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFieldOptions.update',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst customFieldOption = await client.customFieldOptions.update('01FCNDV6P870EA6S7TK1DSYDG0', {\n  sort_key: 10,\n  value: 'Product',\n});\n\nconsole.log(customFieldOption.custom_field_option);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/custom_field_options/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "sort_key": 10,\n          "value": "Product"\n        }\'',
      },
    },
  },
  {
    name: 'list_v1',
    endpoint: '/v1/custom_fields',
    httpMethod: 'get',
    summary: 'List Custom Fields V1',
    description: 'List all custom fields for an organisation.',
    stainlessPath: '(resource) custom_fields > (method) list_v1',
    qualified: 'client.customFields.listV1',
    response:
      "{ custom_fields: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v1[]; show_before_closure: boolean; show_before_creation: boolean; show_before_update: boolean; updated_at: string; catalog_type_id?: string; required?: 'never' | 'before_closure' | 'always'; required_v2?: 'never' | 'before_resolution' | 'always'; show_in_announcement_post?: boolean; }[]; }",
    markdown:
      "## list_v1\n\n`client.customFields.listV1(): { custom_fields: custom_field_v1[]; }`\n\n**get** `/v1/custom_fields`\n\nList all custom fields for an organisation.\n\n### Returns\n\n- `{ custom_fields: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v1[]; show_before_closure: boolean; show_before_creation: boolean; show_before_update: boolean; updated_at: string; catalog_type_id?: string; required?: 'never' | 'before_closure' | 'always'; required_v2?: 'never' | 'before_resolution' | 'always'; show_in_announcement_post?: boolean; }[]; }`\n\n  - `custom_fields: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: { id: string; custom_field_id: string; sort_key: number; value: string; }[]; show_before_closure: boolean; show_before_creation: boolean; show_before_update: boolean; updated_at: string; catalog_type_id?: string; required?: 'never' | 'before_closure' | 'always'; required_v2?: 'never' | 'before_resolution' | 'always'; show_in_announcement_post?: boolean; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.customFields.listV1();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFields.listV1',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.customFields.listV1();\n\nconsole.log(response.custom_fields);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/custom_fields \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create_v1',
    endpoint: '/v1/custom_fields',
    httpMethod: 'post',
    summary: 'Create Custom Fields V1',
    description: 'Create a new custom field',
    stainlessPath: '(resource) custom_fields > (method) create_v1',
    qualified: 'client.customFields.createV1',
    params: [
      'description: string;',
      "field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric';",
      'name: string;',
      'show_before_closure: boolean;',
      'show_before_creation: boolean;',
      'show_before_update: boolean;',
      "required?: 'never' | 'before_closure' | 'always';",
      "required_v2?: 'never' | 'before_resolution' | 'always';",
      'show_in_announcement_post?: boolean;',
    ],
    response:
      "{ custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v1[]; show_before_closure: boolean; show_before_creation: boolean; show_before_update: boolean; updated_at: string; catalog_type_id?: string; required?: 'never' | 'before_closure' | 'always'; required_v2?: 'never' | 'before_resolution' | 'always'; show_in_announcement_post?: boolean; }; }",
    markdown:
      "## create_v1\n\n`client.customFields.createV1(description: string, field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric', name: string, show_before_closure: boolean, show_before_creation: boolean, show_before_update: boolean, required?: 'never' | 'before_closure' | 'always', required_v2?: 'never' | 'before_resolution' | 'always', show_in_announcement_post?: boolean): { custom_field: custom_field_v1; }`\n\n**post** `/v1/custom_fields`\n\nCreate a new custom field\n\n### Parameters\n\n- `description: string`\n  Description of the custom field\n\n- `field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'`\n  Type of custom field\n\n- `name: string`\n  Human readable name for the custom field\n\n- `show_before_closure: boolean`\n  Whether a custom field should be shown in the incident resolve modal. If this custom field is required before resolution, but no value has been set for it, the field will be shown in the resolve modal whatever the value of this setting.\n\n- `show_before_creation: boolean`\n  Whether a custom field should be shown in the incident creation modal. This must be true if the field is always required.\n\n- `show_before_update: boolean`\n  Whether a custom field should be shown in the incident update modal.\n\n- `required?: 'never' | 'before_closure' | 'always'`\n  When this custom field must be set during the incident lifecycle. [DEPRECATED: please use required_v2 instead].\n\n- `required_v2?: 'never' | 'before_resolution' | 'always'`\n  When this custom field must be set during the incident lifecycle.\n\n- `show_in_announcement_post?: boolean`\n  Whether a custom field should be shown in the list of fields as part of the announcement post when set.\n\n### Returns\n\n- `{ custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v1[]; show_before_closure: boolean; show_before_creation: boolean; show_before_update: boolean; updated_at: string; catalog_type_id?: string; required?: 'never' | 'before_closure' | 'always'; required_v2?: 'never' | 'before_resolution' | 'always'; show_in_announcement_post?: boolean; }; }`\n\n  - `custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: { id: string; custom_field_id: string; sort_key: number; value: string; }[]; show_before_closure: boolean; show_before_creation: boolean; show_before_update: boolean; updated_at: string; catalog_type_id?: string; required?: 'never' | 'before_closure' | 'always'; required_v2?: 'never' | 'before_resolution' | 'always'; show_in_announcement_post?: boolean; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.customFields.createV1({\n  description: 'Which team is impacted by this issue',\n  field_type: 'single_select',\n  name: 'Affected Team',\n  show_before_closure: true,\n  show_before_creation: true,\n  show_before_update: true,\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFields.createV1',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.customFields.createV1({\n  description: 'Which team is impacted by this issue',\n  field_type: 'single_select',\n  name: 'Affected Team',\n  show_before_closure: true,\n  show_before_creation: true,\n  show_before_update: true,\n  required: 'never',\n  required_v2: 'never',\n  show_in_announcement_post: true,\n});\n\nconsole.log(response.custom_field);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/custom_fields \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "description": "Which team is impacted by this issue",\n          "field_type": "single_select",\n          "name": "Affected Team",\n          "show_before_closure": true,\n          "show_before_creation": true,\n          "show_before_update": true,\n          "required": "never",\n          "required_v2": "never",\n          "show_in_announcement_post": true\n        }\'',
      },
    },
  },
  {
    name: 'delete_v1',
    endpoint: '/v1/custom_fields/{id}',
    httpMethod: 'delete',
    summary: 'Delete Custom Fields V1',
    description: 'Delete a custom field',
    stainlessPath: '(resource) custom_fields > (method) delete_v1',
    qualified: 'client.customFields.deleteV1',
    params: ['id: string;'],
    markdown:
      "## delete_v1\n\n`client.customFields.deleteV1(id: string): void`\n\n**delete** `/v1/custom_fields/{id}`\n\nDelete a custom field\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the custom field\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.customFields.deleteV1('01FCNDV6P870EA6S7TK1DSYDG0')\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFields.deleteV1',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.customFields.deleteV1('01FCNDV6P870EA6S7TK1DSYDG0');",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/custom_fields/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve_v1',
    endpoint: '/v1/custom_fields/{id}',
    httpMethod: 'get',
    summary: 'Show Custom Fields V1',
    description: 'Get a single custom field.',
    stainlessPath: '(resource) custom_fields > (method) retrieve_v1',
    qualified: 'client.customFields.retrieveV1',
    params: ['id: string;'],
    response:
      "{ custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v1[]; show_before_closure: boolean; show_before_creation: boolean; show_before_update: boolean; updated_at: string; catalog_type_id?: string; required?: 'never' | 'before_closure' | 'always'; required_v2?: 'never' | 'before_resolution' | 'always'; show_in_announcement_post?: boolean; }; }",
    markdown:
      "## retrieve_v1\n\n`client.customFields.retrieveV1(id: string): { custom_field: custom_field_v1; }`\n\n**get** `/v1/custom_fields/{id}`\n\nGet a single custom field.\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the custom field\n\n### Returns\n\n- `{ custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v1[]; show_before_closure: boolean; show_before_creation: boolean; show_before_update: boolean; updated_at: string; catalog_type_id?: string; required?: 'never' | 'before_closure' | 'always'; required_v2?: 'never' | 'before_resolution' | 'always'; show_in_announcement_post?: boolean; }; }`\n\n  - `custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: { id: string; custom_field_id: string; sort_key: number; value: string; }[]; show_before_closure: boolean; show_before_creation: boolean; show_before_update: boolean; updated_at: string; catalog_type_id?: string; required?: 'never' | 'before_closure' | 'always'; required_v2?: 'never' | 'before_resolution' | 'always'; show_in_announcement_post?: boolean; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.customFields.retrieveV1('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFields.retrieveV1',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.customFields.retrieveV1('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(response.custom_field);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/custom_fields/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update_v1',
    endpoint: '/v1/custom_fields/{id}',
    httpMethod: 'put',
    summary: 'Update Custom Fields V1',
    description: 'Update the details of a custom field',
    stainlessPath: '(resource) custom_fields > (method) update_v1',
    qualified: 'client.customFields.updateV1',
    params: [
      'id: string;',
      'description: string;',
      'name: string;',
      'show_before_closure: boolean;',
      'show_before_creation: boolean;',
      'show_before_update: boolean;',
      "required?: 'never' | 'before_closure' | 'always';",
      "required_v2?: 'never' | 'before_resolution' | 'always';",
      'show_in_announcement_post?: boolean;',
    ],
    response:
      "{ custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v1[]; show_before_closure: boolean; show_before_creation: boolean; show_before_update: boolean; updated_at: string; catalog_type_id?: string; required?: 'never' | 'before_closure' | 'always'; required_v2?: 'never' | 'before_resolution' | 'always'; show_in_announcement_post?: boolean; }; }",
    markdown:
      "## update_v1\n\n`client.customFields.updateV1(id: string, description: string, name: string, show_before_closure: boolean, show_before_creation: boolean, show_before_update: boolean, required?: 'never' | 'before_closure' | 'always', required_v2?: 'never' | 'before_resolution' | 'always', show_in_announcement_post?: boolean): { custom_field: custom_field_v1; }`\n\n**put** `/v1/custom_fields/{id}`\n\nUpdate the details of a custom field\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the custom field\n\n- `description: string`\n  Description of the custom field\n\n- `name: string`\n  Human readable name for the custom field\n\n- `show_before_closure: boolean`\n  Whether a custom field should be shown in the incident resolve modal. If this custom field is required before resolution, but no value has been set for it, the field will be shown in the resolve modal whatever the value of this setting.\n\n- `show_before_creation: boolean`\n  Whether a custom field should be shown in the incident creation modal. This must be true if the field is always required.\n\n- `show_before_update: boolean`\n  Whether a custom field should be shown in the incident update modal.\n\n- `required?: 'never' | 'before_closure' | 'always'`\n  When this custom field must be set during the incident lifecycle. [DEPRECATED: please use required_v2 instead].\n\n- `required_v2?: 'never' | 'before_resolution' | 'always'`\n  When this custom field must be set during the incident lifecycle.\n\n- `show_in_announcement_post?: boolean`\n  Whether a custom field should be shown in the list of fields as part of the announcement post when set.\n\n### Returns\n\n- `{ custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v1[]; show_before_closure: boolean; show_before_creation: boolean; show_before_update: boolean; updated_at: string; catalog_type_id?: string; required?: 'never' | 'before_closure' | 'always'; required_v2?: 'never' | 'before_resolution' | 'always'; show_in_announcement_post?: boolean; }; }`\n\n  - `custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: { id: string; custom_field_id: string; sort_key: number; value: string; }[]; show_before_closure: boolean; show_before_creation: boolean; show_before_update: boolean; updated_at: string; catalog_type_id?: string; required?: 'never' | 'before_closure' | 'always'; required_v2?: 'never' | 'before_resolution' | 'always'; show_in_announcement_post?: boolean; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.customFields.updateV1('01FCNDV6P870EA6S7TK1DSYDG0', {\n  description: 'Which team is impacted by this issue',\n  name: 'Affected Team',\n  show_before_closure: true,\n  show_before_creation: true,\n  show_before_update: true,\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFields.updateV1',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.customFields.updateV1('01FCNDV6P870EA6S7TK1DSYDG0', {\n  description: 'Which team is impacted by this issue',\n  name: 'Affected Team',\n  show_before_closure: true,\n  show_before_creation: true,\n  show_before_update: true,\n  required: 'never',\n  required_v2: 'never',\n  show_in_announcement_post: true,\n});\n\nconsole.log(response.custom_field);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/custom_fields/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "description": "Which team is impacted by this issue",\n          "name": "Affected Team",\n          "show_before_closure": true,\n          "show_before_creation": true,\n          "show_before_update": true,\n          "required": "never",\n          "required_v2": "never",\n          "show_in_announcement_post": true\n        }\'',
      },
    },
  },
  {
    name: 'list_v2',
    endpoint: '/v2/custom_fields',
    httpMethod: 'get',
    summary: 'List Custom Fields V2',
    description: 'List all custom fields for an organisation.',
    stainlessPath: '(resource) custom_fields > (method) list_v2',
    qualified: 'client.customFields.listV2',
    response:
      "{ custom_fields: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; updated_at: string; catalog_type_id?: string; filter_by?: custom_field_filter_by_options_v2; group_by_catalog_attribute_id?: string; helptext_catalog_attribute_id?: string; }[]; }",
    markdown:
      "## list_v2\n\n`client.customFields.listV2(): { custom_fields: custom_field_v2[]; }`\n\n**get** `/v2/custom_fields`\n\nList all custom fields for an organisation.\n\n### Returns\n\n- `{ custom_fields: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; updated_at: string; catalog_type_id?: string; filter_by?: custom_field_filter_by_options_v2; group_by_catalog_attribute_id?: string; helptext_catalog_attribute_id?: string; }[]; }`\n\n  - `custom_fields: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; updated_at: string; catalog_type_id?: string; filter_by?: { catalog_attribute_id: string; custom_field_id: string; }; group_by_catalog_attribute_id?: string; helptext_catalog_attribute_id?: string; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.customFields.listV2();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFields.listV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.customFields.listV2();\n\nconsole.log(response.custom_fields);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/custom_fields \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create_v2',
    endpoint: '/v2/custom_fields',
    httpMethod: 'post',
    summary: 'Create Custom Fields V2',
    description: 'Create a new custom field',
    stainlessPath: '(resource) custom_fields > (method) create_v2',
    qualified: 'client.customFields.createV2',
    params: [
      'description: string;',
      "field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric';",
      'name: string;',
      'catalog_type_id?: string;',
      'filter_by?: { catalog_attribute_id: string; custom_field_id: string; };',
      'group_by_catalog_attribute_id?: string;',
      'helptext_catalog_attribute_id?: string;',
    ],
    response:
      "{ custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; updated_at: string; catalog_type_id?: string; filter_by?: custom_field_filter_by_options_v2; group_by_catalog_attribute_id?: string; helptext_catalog_attribute_id?: string; }; }",
    markdown:
      "## create_v2\n\n`client.customFields.createV2(description: string, field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric', name: string, catalog_type_id?: string, filter_by?: { catalog_attribute_id: string; custom_field_id: string; }, group_by_catalog_attribute_id?: string, helptext_catalog_attribute_id?: string): { custom_field: custom_field_v2; }`\n\n**post** `/v2/custom_fields`\n\nCreate a new custom field\n\n### Parameters\n\n- `description: string`\n  Description of the custom field\n\n- `field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'`\n  Type of custom field\n\n- `name: string`\n  Human readable name for the custom field\n\n- `catalog_type_id?: string`\n  For catalog fields, the ID of the associated catalog type\n\n- `filter_by?: { catalog_attribute_id: string; custom_field_id: string; }`\n  - `catalog_attribute_id: string`\n    This must be an attribute of the catalog type of this custom field. It must be an attribute that points to another catalog type (so not a plain string, number, or boolean attribute).\n  - `custom_field_id: string`\n    This must be the ID of a custom field, which must have values of the same type as the attribute you are filtering by.\n\nWhen this filtering field is set on an incident, the options for this custom field will be filtered to only those with the attribute value that matches the value of the filtering field.\n\n- `group_by_catalog_attribute_id?: string`\n  For catalog fields, the ID of the attribute used to group catalog entries (if applicable)\n\n- `helptext_catalog_attribute_id?: string`\n  Which catalog attribute provides helptext for the options\n\n### Returns\n\n- `{ custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; updated_at: string; catalog_type_id?: string; filter_by?: custom_field_filter_by_options_v2; group_by_catalog_attribute_id?: string; helptext_catalog_attribute_id?: string; }; }`\n\n  - `custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; updated_at: string; catalog_type_id?: string; filter_by?: { catalog_attribute_id: string; custom_field_id: string; }; group_by_catalog_attribute_id?: string; helptext_catalog_attribute_id?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.customFields.createV2({\n  description: 'Which team is impacted by this issue',\n  field_type: 'single_select',\n  name: 'Affected Team',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFields.createV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.customFields.createV2({\n  description: 'Which team is impacted by this issue',\n  field_type: 'single_select',\n  name: 'Affected Team',\n  catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n  filter_by: {\n    catalog_attribute_id: '01H2FW182TAH0NHEVBY34SCAK0',\n    custom_field_id: '01H2FW182TAH0NHEVBY34SCAK0',\n  },\n  group_by_catalog_attribute_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n  helptext_catalog_attribute_id: '01H2FW182TAH0NHEVBY34SCAK0',\n});\n\nconsole.log(response.custom_field);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/custom_fields \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "description": "Which team is impacted by this issue",\n          "field_type": "single_select",\n          "name": "Affected Team",\n          "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",\n          "filter_by": {\n            "catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0",\n            "custom_field_id": "01H2FW182TAH0NHEVBY34SCAK0"\n          },\n          "group_by_catalog_attribute_id": "01FCNDV6P870EA6S7TK1DSYDG0",\n          "helptext_catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0"\n        }\'',
      },
    },
  },
  {
    name: 'delete_v2',
    endpoint: '/v2/custom_fields/{id}',
    httpMethod: 'delete',
    summary: 'Delete Custom Fields V2',
    description: 'Delete a custom field',
    stainlessPath: '(resource) custom_fields > (method) delete_v2',
    qualified: 'client.customFields.deleteV2',
    params: ['id: string;'],
    markdown:
      "## delete_v2\n\n`client.customFields.deleteV2(id: string): void`\n\n**delete** `/v2/custom_fields/{id}`\n\nDelete a custom field\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the custom field\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.customFields.deleteV2('01FCNDV6P870EA6S7TK1DSYDG0')\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFields.deleteV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.customFields.deleteV2('01FCNDV6P870EA6S7TK1DSYDG0');",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/custom_fields/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve_v2',
    endpoint: '/v2/custom_fields/{id}',
    httpMethod: 'get',
    summary: 'Show Custom Fields V2',
    description: 'Get a single custom field.',
    stainlessPath: '(resource) custom_fields > (method) retrieve_v2',
    qualified: 'client.customFields.retrieveV2',
    params: ['id: string;'],
    response:
      "{ custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; updated_at: string; catalog_type_id?: string; filter_by?: custom_field_filter_by_options_v2; group_by_catalog_attribute_id?: string; helptext_catalog_attribute_id?: string; }; }",
    markdown:
      "## retrieve_v2\n\n`client.customFields.retrieveV2(id: string): { custom_field: custom_field_v2; }`\n\n**get** `/v2/custom_fields/{id}`\n\nGet a single custom field.\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the custom field\n\n### Returns\n\n- `{ custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; updated_at: string; catalog_type_id?: string; filter_by?: custom_field_filter_by_options_v2; group_by_catalog_attribute_id?: string; helptext_catalog_attribute_id?: string; }; }`\n\n  - `custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; updated_at: string; catalog_type_id?: string; filter_by?: { catalog_attribute_id: string; custom_field_id: string; }; group_by_catalog_attribute_id?: string; helptext_catalog_attribute_id?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.customFields.retrieveV2('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFields.retrieveV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.customFields.retrieveV2('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(response.custom_field);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/custom_fields/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update_v2',
    endpoint: '/v2/custom_fields/{id}',
    httpMethod: 'put',
    summary: 'Update Custom Fields V2',
    description: 'Update the details of a custom field',
    stainlessPath: '(resource) custom_fields > (method) update_v2',
    qualified: 'client.customFields.updateV2',
    params: [
      'id: string;',
      'description: string;',
      'name: string;',
      'filter_by?: { catalog_attribute_id: string; custom_field_id: string; };',
      'group_by_catalog_attribute_id?: string;',
      'helptext_catalog_attribute_id?: string;',
    ],
    response:
      "{ custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; updated_at: string; catalog_type_id?: string; filter_by?: custom_field_filter_by_options_v2; group_by_catalog_attribute_id?: string; helptext_catalog_attribute_id?: string; }; }",
    markdown:
      "## update_v2\n\n`client.customFields.updateV2(id: string, description: string, name: string, filter_by?: { catalog_attribute_id: string; custom_field_id: string; }, group_by_catalog_attribute_id?: string, helptext_catalog_attribute_id?: string): { custom_field: custom_field_v2; }`\n\n**put** `/v2/custom_fields/{id}`\n\nUpdate the details of a custom field\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the custom field\n\n- `description: string`\n  Description of the custom field\n\n- `name: string`\n  Human readable name for the custom field\n\n- `filter_by?: { catalog_attribute_id: string; custom_field_id: string; }`\n  - `catalog_attribute_id: string`\n    This must be an attribute of the catalog type of this custom field. It must be an attribute that points to another catalog type (so not a plain string, number, or boolean attribute).\n  - `custom_field_id: string`\n    This must be the ID of a custom field, which must have values of the same type as the attribute you are filtering by.\n\nWhen this filtering field is set on an incident, the options for this custom field will be filtered to only those with the attribute value that matches the value of the filtering field.\n\n- `group_by_catalog_attribute_id?: string`\n  For catalog fields, the ID of the attribute used to group catalog entries (if applicable)\n\n- `helptext_catalog_attribute_id?: string`\n  Which catalog attribute provides helptext for the options\n\n### Returns\n\n- `{ custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; updated_at: string; catalog_type_id?: string; filter_by?: custom_field_filter_by_options_v2; group_by_catalog_attribute_id?: string; helptext_catalog_attribute_id?: string; }; }`\n\n  - `custom_field: { id: string; created_at: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; updated_at: string; catalog_type_id?: string; filter_by?: { catalog_attribute_id: string; custom_field_id: string; }; group_by_catalog_attribute_id?: string; helptext_catalog_attribute_id?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.customFields.updateV2('01FCNDV6P870EA6S7TK1DSYDG0', { description: 'Which team is impacted by this issue', name: 'Affected Team' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.customFields.updateV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.customFields.updateV2('01FCNDV6P870EA6S7TK1DSYDG0', {\n  description: 'Which team is impacted by this issue',\n  name: 'Affected Team',\n  filter_by: {\n    catalog_attribute_id: '01H2FW182TAH0NHEVBY34SCAK0',\n    custom_field_id: '01H2FW182TAH0NHEVBY34SCAK0',\n  },\n  group_by_catalog_attribute_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n  helptext_catalog_attribute_id: '01H2FW182TAH0NHEVBY34SCAK0',\n});\n\nconsole.log(response.custom_field);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/custom_fields/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "description": "Which team is impacted by this issue",\n          "name": "Affected Team",\n          "filter_by": {\n            "catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0",\n            "custom_field_id": "01H2FW182TAH0NHEVBY34SCAK0"\n          },\n          "group_by_catalog_attribute_id": "01FCNDV6P870EA6S7TK1DSYDG0",\n          "helptext_catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/identity',
    httpMethod: 'get',
    summary: 'Identity Utilities V1',
    description: 'Test if your API key is valid, and which roles it has.',
    stainlessPath: '(resource) identity > (method) retrieve',
    qualified: 'client.identity.retrieve',
    response: '{ identity: { dashboard_url: string; name: string; roles: string[]; }; }',
    markdown:
      "## retrieve\n\n`client.identity.retrieve(): { identity: object; }`\n\n**get** `/v1/identity`\n\nTest if your API key is valid, and which roles it has.\n\n### Returns\n\n- `{ identity: { dashboard_url: string; name: string; roles: string[]; }; }`\n\n  - `identity: { dashboard_url: string; name: string; roles: string[]; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst identity = await client.identity.retrieve();\n\nconsole.log(identity);\n```",
    perLanguage: {
      typescript: {
        method: 'client.identity.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst identity = await client.identity.retrieve();\n\nconsole.log(identity.identity);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/identity \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/incident_attachments',
    httpMethod: 'get',
    summary: 'List Incident Attachments V1',
    description:
      'List all incident attachments for a given external resource or incident. You must provide either a specific incident ID or a specific external resource type and external ID.',
    stainlessPath: '(resource) incident_attachments > (method) list',
    qualified: 'client.incidentAttachments.list',
    params: ['external_id?: string;', 'incident_id?: string;', 'resource_type?: string;'],
    response: '{ incident_attachments: { id: string; incident_id: string; resource: object; }[]; }',
    markdown:
      "## list\n\n`client.incidentAttachments.list(external_id?: string, incident_id?: string, resource_type?: string): { incident_attachments: incident_attachment[]; }`\n\n**get** `/v1/incident_attachments`\n\nList all incident attachments for a given external resource or incident. You must provide either a specific incident ID or a specific external resource type and external ID.\n\n### Parameters\n\n- `external_id?: string`\n  ID of the resource in the external system\n\n- `incident_id?: string`\n  Incident that this attachment is against\n\n- `resource_type?: string`\n  E.g. PagerDuty: the external system that holds the resource\n\n### Returns\n\n- `{ incident_attachments: { id: string; incident_id: string; resource: object; }[]; }`\n\n  - `incident_attachments: { id: string; incident_id: string; resource: { external_id: string; permalink: string; resource_type: string; title: string; }; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentAttachments = await client.incidentAttachments.list();\n\nconsole.log(incidentAttachments);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentAttachments.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentAttachments = await client.incidentAttachments.list();\n\nconsole.log(incidentAttachments.incident_attachments);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_attachments \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/incident_attachments',
    httpMethod: 'post',
    summary: 'Create Incident Attachments V1',
    description: 'Attaches an external resource to an incident',
    stainlessPath: '(resource) incident_attachments > (method) create',
    qualified: 'client.incidentAttachments.create',
    params: ['incident_id: string;', 'resource: { external_id: string; resource_type: string; };'],
    response: '{ incident_attachment: { id: string; incident_id: string; resource: object; }; }',
    markdown:
      "## create\n\n`client.incidentAttachments.create(incident_id: string, resource: { external_id: string; resource_type: string; }): { incident_attachment: incident_attachment; }`\n\n**post** `/v1/incident_attachments`\n\nAttaches an external resource to an incident\n\n### Parameters\n\n- `incident_id: string`\n  ID of the incident to add an attachment to\n\n- `resource: { external_id: string; resource_type: string; }`\n  - `external_id: string`\n    ID of the resource in the external system\n  - `resource_type: string`\n    E.g. PagerDuty: the external system that holds the resource\n\n### Returns\n\n- `{ incident_attachment: { id: string; incident_id: string; resource: object; }; }`\n\n  - `incident_attachment: { id: string; incident_id: string; resource: { external_id: string; permalink: string; resource_type: string; title: string; }; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentAttachment = await client.incidentAttachments.create({\n  incident_id: '01FDAG4SAP5TYPT98WGR2N7W91',\n  resource: { external_id: '123', resource_type: 'pager_duty_incident' },\n});\n\nconsole.log(incidentAttachment);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentAttachments.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentAttachment = await client.incidentAttachments.create({\n  incident_id: '01FDAG4SAP5TYPT98WGR2N7W91',\n  resource: { external_id: '123', resource_type: 'pager_duty_incident' },\n});\n\nconsole.log(incidentAttachment.incident_attachment);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_attachments \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "incident_id": "01FDAG4SAP5TYPT98WGR2N7W91",\n          "resource": {\n            "external_id": "123",\n            "resource_type": "pager_duty_incident"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/incident_attachments/{id}',
    httpMethod: 'delete',
    summary: 'Delete Incident Attachments V1',
    description: 'Unattaches an external resource from an incident',
    stainlessPath: '(resource) incident_attachments > (method) delete',
    qualified: 'client.incidentAttachments.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.incidentAttachments.delete(id: string): void`\n\n**delete** `/v1/incident_attachments/{id}`\n\nUnattaches an external resource from an incident\n\n### Parameters\n\n- `id: string`\n  Unique identifier of this incident membership\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.incidentAttachments.delete('01FCNDV6P870EA6S7TK1DSYD5H')\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentAttachments.delete',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.incidentAttachments.delete('01FCNDV6P870EA6S7TK1DSYD5H');",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_attachments/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/incident_memberships',
    httpMethod: 'post',
    summary: 'Create Incident Memberships V1',
    description: 'Makes a user a member of a private incident',
    stainlessPath: '(resource) incident_memberships > (method) create',
    qualified: 'client.incidentMemberships.create',
    params: ['incident_id: string;', 'user_id: string;'],
    response:
      '{ incident_membership: { id: string; created_at: string; incident_id: string; updated_at: string; user: object; }; }',
    markdown:
      "## create\n\n`client.incidentMemberships.create(incident_id: string, user_id: string): { incident_membership: object; }`\n\n**post** `/v1/incident_memberships`\n\nMakes a user a member of a private incident\n\n### Parameters\n\n- `incident_id: string`\n\n- `user_id: string`\n\n### Returns\n\n- `{ incident_membership: { id: string; created_at: string; incident_id: string; updated_at: string; user: object; }; }`\n\n  - `incident_membership: { id: string; created_at: string; incident_id: string; updated_at: string; user: { id: string; name: string; role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset'; email?: string; slack_user_id?: string; }; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentMembership = await client.incidentMemberships.create({ incident_id: '01ET65M7ZADYFCKD4K1AE2QNMC', user_id: '01FCQSP07Z74QMMYPDDGQB9FTG' });\n\nconsole.log(incidentMembership);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentMemberships.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentMembership = await client.incidentMemberships.create({\n  incident_id: '01ET65M7ZADYFCKD4K1AE2QNMC',\n  user_id: '01FCQSP07Z74QMMYPDDGQB9FTG',\n});\n\nconsole.log(incidentMembership.incident_membership);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_memberships \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "incident_id": "01ET65M7ZADYFCKD4K1AE2QNMC",\n          "user_id": "01FCQSP07Z74QMMYPDDGQB9FTG"\n        }\'',
      },
    },
  },
  {
    name: 'revoke',
    endpoint: '/v1/incident_memberships/actions/revoke',
    httpMethod: 'post',
    summary: 'Revoke Incident Memberships V1',
    description: "Revoke a user's membership of a private incident",
    stainlessPath: '(resource) incident_memberships.actions > (method) revoke',
    qualified: 'client.incidentMemberships.actions.revoke',
    params: ['incident_id: string;', 'user_id: string;'],
    markdown:
      "## revoke\n\n`client.incidentMemberships.actions.revoke(incident_id: string, user_id: string): void`\n\n**post** `/v1/incident_memberships/actions/revoke`\n\nRevoke a user's membership of a private incident\n\n### Parameters\n\n- `incident_id: string`\n  Revoke memberships to incident\n\n- `user_id: string`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.incidentMemberships.actions.revoke({ incident_id: '01FCNDV6P870EA6S7TK1DSYD5H', user_id: '01FCQSP07Z74QMMYPDDGQB9FTG' })\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentMemberships.actions.revoke',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.incidentMemberships.actions.revoke({\n  incident_id: '01FCNDV6P870EA6S7TK1DSYD5H',\n  user_id: '01FCQSP07Z74QMMYPDDGQB9FTG',\n});",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_memberships/actions/revoke \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "incident_id": "01FCNDV6P870EA6S7TK1DSYD5H",\n          "user_id": "01FCQSP07Z74QMMYPDDGQB9FTG"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/incident_relationships',
    httpMethod: 'get',
    summary: 'List Incident Relationships V1',
    description: 'List related incidents for a specific incident.',
    stainlessPath: '(resource) incident_relationships > (method) list',
    qualified: 'client.incidentRelationships.list',
    params: ['incident_id: string;', 'after?: string;', 'page_size?: number;'],
    response:
      '{ incident_relationships: { id: string; incident: { id: string; external_id: number; name: string; }; }[]; pagination_meta?: { page_size: number; after?: string; }; }',
    markdown:
      "## list\n\n`client.incidentRelationships.list(incident_id: string, after?: string, page_size?: number): { incident_relationships: object[]; pagination_meta?: pagination_meta; }`\n\n**get** `/v1/incident_relationships`\n\nList related incidents for a specific incident.\n\n### Parameters\n\n- `incident_id: string`\n  ID of the incident to find relationships for\n\n- `after?: string`\n  An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.\n\n- `page_size?: number`\n  Integer number of records to return\n\n### Returns\n\n- `{ incident_relationships: { id: string; incident: { id: string; external_id: number; name: string; }; }[]; pagination_meta?: { page_size: number; after?: string; }; }`\n\n  - `incident_relationships: { id: string; incident: { id: string; external_id: number; name: string; }; }[]`\n  - `pagination_meta?: { page_size: number; after?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentRelationships = await client.incidentRelationships.list({ incident_id: '01FCNDV6P870EA6S7TK1DSYD5H' });\n\nconsole.log(incidentRelationships);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentRelationships.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentRelationships = await client.incidentRelationships.list({\n  incident_id: '01FCNDV6P870EA6S7TK1DSYD5H',\n});\n\nconsole.log(incidentRelationships.incident_relationships);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_relationships \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/incident_roles',
    httpMethod: 'get',
    summary: 'List Incident Roles V1',
    description: 'List all incident roles for an organisation.',
    stainlessPath: '(resource) incident_roles > (method) list',
    qualified: 'client.incidentRoles.list',
    response:
      "{ incident_roles: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }[]; }",
    markdown:
      "## list\n\n`client.incidentRoles.list(): { incident_roles: incident_role_v1[]; }`\n\n**get** `/v1/incident_roles`\n\nList all incident roles for an organisation.\n\n### Returns\n\n- `{ incident_roles: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }[]; }`\n\n  - `incident_roles: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentRoles = await client.incidentRoles.list();\n\nconsole.log(incidentRoles);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentRoles.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentRoles = await client.incidentRoles.list();\n\nconsole.log(incidentRoles.incident_roles);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_roles \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/incident_roles',
    httpMethod: 'post',
    summary: 'Create Incident Roles V1',
    description: 'Create a new incident role',
    stainlessPath: '(resource) incident_roles > (method) create',
    qualified: 'client.incidentRoles.create',
    params: [
      'description: string;',
      'instructions: string;',
      'name: string;',
      'required: boolean;',
      'shortform: string;',
    ],
    response:
      "{ incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }; }",
    markdown:
      "## create\n\n`client.incidentRoles.create(description: string, instructions: string, name: string, required: boolean, shortform: string): { incident_role: incident_role_v1; }`\n\n**post** `/v1/incident_roles`\n\nCreate a new incident role\n\n### Parameters\n\n- `description: string`\n  Describes the purpose of the role\n\n- `instructions: string`\n  Provided to whoever is nominated for the role. Note that this will be empty for the 'reporter' role.\n\n- `name: string`\n  Human readable name of the incident role\n\n- `required: boolean`\n  DEPRECATED: this will always be false.\n\n- `shortform: string`\n  Short human readable name for Slack. Note that this will be empty for the 'reporter' role.\n\n### Returns\n\n- `{ incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }; }`\n\n  - `incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentRole = await client.incidentRoles.create({\n  description: 'The person currently coordinating the incident',\n  instructions: 'Take point on the incident; Make sure people are clear on responsibilities',\n  name: 'Incident Lead',\n  required: false,\n  shortform: 'lead',\n});\n\nconsole.log(incidentRole);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentRoles.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentRole = await client.incidentRoles.create({\n  description: 'The person currently coordinating the incident',\n  instructions: 'Take point on the incident; Make sure people are clear on responsibilities',\n  name: 'Incident Lead',\n  required: false,\n  shortform: 'lead',\n});\n\nconsole.log(incidentRole.incident_role);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_roles \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "description": "The person currently coordinating the incident",\n          "instructions": "Take point on the incident; Make sure people are clear on responsibilities",\n          "name": "Incident Lead",\n          "required": false,\n          "shortform": "lead"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/incident_roles/{id}',
    httpMethod: 'delete',
    summary: 'Delete Incident Roles V1',
    description: 'Removes an existing role',
    stainlessPath: '(resource) incident_roles > (method) delete',
    qualified: 'client.incidentRoles.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.incidentRoles.delete(id: string): void`\n\n**delete** `/v1/incident_roles/{id}`\n\nRemoves an existing role\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the role\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.incidentRoles.delete('01FCNDV6P870EA6S7TK1DSYDG0')\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentRoles.delete',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.incidentRoles.delete('01FCNDV6P870EA6S7TK1DSYDG0');",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_roles/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/incident_roles/{id}',
    httpMethod: 'get',
    summary: 'Show Incident Roles V1',
    description: 'Get a single incident role.',
    stainlessPath: '(resource) incident_roles > (method) retrieve',
    qualified: 'client.incidentRoles.retrieve',
    params: ['id: string;'],
    response:
      "{ incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }; }",
    markdown:
      "## retrieve\n\n`client.incidentRoles.retrieve(id: string): { incident_role: incident_role_v1; }`\n\n**get** `/v1/incident_roles/{id}`\n\nGet a single incident role.\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the role\n\n### Returns\n\n- `{ incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }; }`\n\n  - `incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentRole = await client.incidentRoles.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(incidentRole);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentRoles.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentRole = await client.incidentRoles.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(incidentRole.incident_role);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_roles/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/incident_roles/{id}',
    httpMethod: 'put',
    summary: 'Update Incident Roles V1',
    description: 'Update an existing incident role',
    stainlessPath: '(resource) incident_roles > (method) update',
    qualified: 'client.incidentRoles.update',
    params: [
      'id: string;',
      'description: string;',
      'instructions: string;',
      'name: string;',
      'shortform: string;',
      'required?: boolean;',
    ],
    response:
      "{ incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }; }",
    markdown:
      "## update\n\n`client.incidentRoles.update(id: string, description: string, instructions: string, name: string, shortform: string, required?: boolean): { incident_role: incident_role_v1; }`\n\n**put** `/v1/incident_roles/{id}`\n\nUpdate an existing incident role\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the role\n\n- `description: string`\n  Describes the purpose of the role\n\n- `instructions: string`\n  Provided to whoever is nominated for the role. Note that this will be empty for the 'reporter' role.\n\n- `name: string`\n  Human readable name of the incident role\n\n- `shortform: string`\n  Short human readable name for Slack. Note that this will be empty for the 'reporter' role.\n\n- `required?: boolean`\n  DEPRECATED: this will always be false.\n\n### Returns\n\n- `{ incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }; }`\n\n  - `incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentRole = await client.incidentRoles.update('01FCNDV6P870EA6S7TK1DSYDG0', {\n  description: 'The person currently coordinating the incident',\n  instructions: 'Take point on the incident; Make sure people are clear on responsibilities',\n  name: 'Incident Lead',\n  shortform: 'lead',\n});\n\nconsole.log(incidentRole);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentRoles.update',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentRole = await client.incidentRoles.update('01FCNDV6P870EA6S7TK1DSYDG0', {\n  description: 'The person currently coordinating the incident',\n  instructions: 'Take point on the incident; Make sure people are clear on responsibilities',\n  name: 'Incident Lead',\n  shortform: 'lead',\n});\n\nconsole.log(incidentRole.incident_role);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_roles/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "description": "The person currently coordinating the incident",\n          "instructions": "Take point on the incident; Make sure people are clear on responsibilities",\n          "name": "Incident Lead",\n          "shortform": "lead"\n        }\'',
      },
    },
  },
  {
    name: 'list_v2',
    endpoint: '/v2/incident_roles',
    httpMethod: 'get',
    summary: 'List Incident Roles V2',
    description: 'List all incident roles for an organisation.',
    stainlessPath: '(resource) incident_roles > (method) list_v2',
    qualified: 'client.incidentRoles.listV2',
    response:
      "{ incident_roles: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; }[]; }",
    markdown:
      "## list_v2\n\n`client.incidentRoles.listV2(): { incident_roles: incident_role_v2[]; }`\n\n**get** `/v2/incident_roles`\n\nList all incident roles for an organisation.\n\n### Returns\n\n- `{ incident_roles: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; }[]; }`\n\n  - `incident_roles: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.incidentRoles.listV2();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentRoles.listV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.incidentRoles.listV2();\n\nconsole.log(response.incident_roles);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/incident_roles \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create_v2',
    endpoint: '/v2/incident_roles',
    httpMethod: 'post',
    summary: 'Create Incident Roles V2',
    description: 'Create a new incident role',
    stainlessPath: '(resource) incident_roles > (method) create_v2',
    qualified: 'client.incidentRoles.createV2',
    params: ['description: string;', 'instructions: string;', 'name: string;', 'shortform: string;'],
    response:
      "{ incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; }; }",
    markdown:
      "## create_v2\n\n`client.incidentRoles.createV2(description: string, instructions: string, name: string, shortform: string): { incident_role: incident_role_v2; }`\n\n**post** `/v2/incident_roles`\n\nCreate a new incident role\n\n### Parameters\n\n- `description: string`\n  Describes the purpose of the role\n\n- `instructions: string`\n  Provided to whoever is nominated for the role. Note that this will be empty for the 'reporter' role.\n\n- `name: string`\n  Human readable name of the incident role\n\n- `shortform: string`\n  Short human readable name for Slack. Note that this will be empty for the 'reporter' role.\n\n### Returns\n\n- `{ incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; }; }`\n\n  - `incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.incidentRoles.createV2({\n  description: 'The person currently coordinating the incident',\n  instructions: 'Take point on the incident; Make sure people are clear on responsibilities',\n  name: 'Incident Lead',\n  shortform: 'lead',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentRoles.createV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.incidentRoles.createV2({\n  description: 'The person currently coordinating the incident',\n  instructions: 'Take point on the incident; Make sure people are clear on responsibilities',\n  name: 'Incident Lead',\n  shortform: 'lead',\n});\n\nconsole.log(response.incident_role);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/incident_roles \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "description": "The person currently coordinating the incident",\n          "instructions": "Take point on the incident; Make sure people are clear on responsibilities",\n          "name": "Incident Lead",\n          "shortform": "lead"\n        }\'',
      },
    },
  },
  {
    name: 'delete_v2',
    endpoint: '/v2/incident_roles/{id}',
    httpMethod: 'delete',
    summary: 'Delete Incident Roles V2',
    description: 'Removes an existing role',
    stainlessPath: '(resource) incident_roles > (method) delete_v2',
    qualified: 'client.incidentRoles.deleteV2',
    params: ['id: string;'],
    markdown:
      "## delete_v2\n\n`client.incidentRoles.deleteV2(id: string): void`\n\n**delete** `/v2/incident_roles/{id}`\n\nRemoves an existing role\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the role\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.incidentRoles.deleteV2('01FCNDV6P870EA6S7TK1DSYDG0')\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentRoles.deleteV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.incidentRoles.deleteV2('01FCNDV6P870EA6S7TK1DSYDG0');",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/incident_roles/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve_v2',
    endpoint: '/v2/incident_roles/{id}',
    httpMethod: 'get',
    summary: 'Show Incident Roles V2',
    description: 'Get a single incident role.',
    stainlessPath: '(resource) incident_roles > (method) retrieve_v2',
    qualified: 'client.incidentRoles.retrieveV2',
    params: ['id: string;'],
    response:
      "{ incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; }; }",
    markdown:
      "## retrieve_v2\n\n`client.incidentRoles.retrieveV2(id: string): { incident_role: incident_role_v2; }`\n\n**get** `/v2/incident_roles/{id}`\n\nGet a single incident role.\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the role\n\n### Returns\n\n- `{ incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; }; }`\n\n  - `incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.incidentRoles.retrieveV2('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentRoles.retrieveV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.incidentRoles.retrieveV2('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(response.incident_role);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/incident_roles/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update_v2',
    endpoint: '/v2/incident_roles/{id}',
    httpMethod: 'put',
    summary: 'Update Incident Roles V2',
    description: 'Update an existing incident role',
    stainlessPath: '(resource) incident_roles > (method) update_v2',
    qualified: 'client.incidentRoles.updateV2',
    params: [
      'id: string;',
      'description: string;',
      'instructions: string;',
      'name: string;',
      'shortform: string;',
    ],
    response:
      "{ incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; }; }",
    markdown:
      "## update_v2\n\n`client.incidentRoles.updateV2(id: string, description: string, instructions: string, name: string, shortform: string): { incident_role: incident_role_v2; }`\n\n**put** `/v2/incident_roles/{id}`\n\nUpdate an existing incident role\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the role\n\n- `description: string`\n  Describes the purpose of the role\n\n- `instructions: string`\n  Provided to whoever is nominated for the role. Note that this will be empty for the 'reporter' role.\n\n- `name: string`\n  Human readable name of the incident role\n\n- `shortform: string`\n  Short human readable name for Slack. Note that this will be empty for the 'reporter' role.\n\n### Returns\n\n- `{ incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; }; }`\n\n  - `incident_role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.incidentRoles.updateV2('01FCNDV6P870EA6S7TK1DSYDG0', {\n  description: 'The person currently coordinating the incident',\n  instructions: 'Take point on the incident; Make sure people are clear on responsibilities',\n  name: 'Incident Lead',\n  shortform: 'lead',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentRoles.updateV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.incidentRoles.updateV2('01FCNDV6P870EA6S7TK1DSYDG0', {\n  description: 'The person currently coordinating the incident',\n  instructions: 'Take point on the incident; Make sure people are clear on responsibilities',\n  name: 'Incident Lead',\n  shortform: 'lead',\n});\n\nconsole.log(response.incident_role);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/incident_roles/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "description": "The person currently coordinating the incident",\n          "instructions": "Take point on the incident; Make sure people are clear on responsibilities",\n          "name": "Incident Lead",\n          "shortform": "lead"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/incident_statuses',
    httpMethod: 'get',
    summary: 'List Incident Statuses V1',
    description: 'List all incident statuses for an organisation.',
    stainlessPath: '(resource) incident_statuses > (method) list',
    qualified: 'client.incidentStatuses.list',
    response:
      "{ incident_statuses: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }[]; }",
    markdown:
      "## list\n\n`client.incidentStatuses.list(): { incident_statuses: incident_status_v1[]; }`\n\n**get** `/v1/incident_statuses`\n\nList all incident statuses for an organisation.\n\n### Returns\n\n- `{ incident_statuses: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }[]; }`\n\n  - `incident_statuses: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentStatuses = await client.incidentStatuses.list();\n\nconsole.log(incidentStatuses);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentStatuses.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentStatuses = await client.incidentStatuses.list();\n\nconsole.log(incidentStatuses.incident_statuses);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_statuses \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/incident_statuses',
    httpMethod: 'post',
    summary: 'Create Incident Statuses V1',
    description: 'Create a new incident status',
    stainlessPath: '(resource) incident_statuses > (method) create',
    qualified: 'client.incidentStatuses.create',
    params: ["category: 'live' | 'learning' | 'closed';", 'description: string;', 'name: string;'],
    response:
      "{ incident_status: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }; }",
    markdown:
      "## create\n\n`client.incidentStatuses.create(category: 'live' | 'learning' | 'closed', description: string, name: string): { incident_status: incident_status_v1; }`\n\n**post** `/v1/incident_statuses`\n\nCreate a new incident status\n\n### Parameters\n\n- `category: 'live' | 'learning' | 'closed'`\n  Whether the status should be considered 'live' (now renamed to active), 'learning' (now renamed to post-incident) or 'closed'. The triage and declined statuses cannot be created or modified.\n\n- `description: string`\n  Rich text description of the incident status\n\n- `name: string`\n  Unique name of this status\n\n### Returns\n\n- `{ incident_status: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }; }`\n\n  - `incident_status: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentStatus = await client.incidentStatuses.create({\n  category: 'live',\n  description: 'Impact has been **fully mitigated**, and we\\'re ready to learn from this incident.',\n  name: 'Closed',\n});\n\nconsole.log(incidentStatus);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentStatuses.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentStatus = await client.incidentStatuses.create({\n  category: 'live',\n  description: \"Impact has been **fully mitigated**, and we're ready to learn from this incident.\",\n  name: 'Closed',\n});\n\nconsole.log(incidentStatus.incident_status);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_statuses \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d "{\n          \\"category\\": \\"live\\",\n          \\"description\\": \\"Impact has been **fully mitigated**, and we\'re ready to learn from this incident.\\",\n          \\"name\\": \\"Closed\\"\n        }"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/incident_statuses/{id}',
    httpMethod: 'delete',
    summary: 'Delete Incident Statuses V1',
    description: 'Delete an incident status',
    stainlessPath: '(resource) incident_statuses > (method) delete',
    qualified: 'client.incidentStatuses.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.incidentStatuses.delete(id: string): void`\n\n**delete** `/v1/incident_statuses/{id}`\n\nDelete an incident status\n\n### Parameters\n\n- `id: string`\n  Unique ID of this incident status\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.incidentStatuses.delete('01FCNDV6P870EA6S7TK1DSYD5H')\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentStatuses.delete',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.incidentStatuses.delete('01FCNDV6P870EA6S7TK1DSYD5H');",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_statuses/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/incident_statuses/{id}',
    httpMethod: 'get',
    summary: 'Show Incident Statuses V1',
    description: 'Get a single incident status.',
    stainlessPath: '(resource) incident_statuses > (method) retrieve',
    qualified: 'client.incidentStatuses.retrieve',
    params: ['id: string;'],
    response:
      "{ incident_status: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }; }",
    markdown:
      "## retrieve\n\n`client.incidentStatuses.retrieve(id: string): { incident_status: incident_status_v1; }`\n\n**get** `/v1/incident_statuses/{id}`\n\nGet a single incident status.\n\n### Parameters\n\n- `id: string`\n  Unique ID of this incident status\n\n### Returns\n\n- `{ incident_status: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }; }`\n\n  - `incident_status: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentStatus = await client.incidentStatuses.retrieve('01FCNDV6P870EA6S7TK1DSYD5H');\n\nconsole.log(incidentStatus);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentStatuses.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentStatus = await client.incidentStatuses.retrieve('01FCNDV6P870EA6S7TK1DSYD5H');\n\nconsole.log(incidentStatus.incident_status);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_statuses/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/incident_statuses/{id}',
    httpMethod: 'put',
    summary: 'Update Incident Statuses V1',
    description: 'Update an existing incident status',
    stainlessPath: '(resource) incident_statuses > (method) update',
    qualified: 'client.incidentStatuses.update',
    params: ['id: string;', 'description: string;', 'name: string;'],
    response:
      "{ incident_status: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }; }",
    markdown:
      "## update\n\n`client.incidentStatuses.update(id: string, description: string, name: string): { incident_status: incident_status_v1; }`\n\n**put** `/v1/incident_statuses/{id}`\n\nUpdate an existing incident status\n\n### Parameters\n\n- `id: string`\n  Unique ID of this incident status\n\n- `description: string`\n  Rich text description of the incident status\n\n- `name: string`\n  Unique name of this status\n\n### Returns\n\n- `{ incident_status: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }; }`\n\n  - `incident_status: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentStatus = await client.incidentStatuses.update('01FCNDV6P870EA6S7TK1DSYD5H', { description: 'Impact has been **fully mitigated**, and we\\'re ready to learn from this incident.', name: 'Closed' });\n\nconsole.log(incidentStatus);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentStatuses.update',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentStatus = await client.incidentStatuses.update('01FCNDV6P870EA6S7TK1DSYD5H', {\n  description: \"Impact has been **fully mitigated**, and we're ready to learn from this incident.\",\n  name: 'Closed',\n});\n\nconsole.log(incidentStatus.incident_status);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_statuses/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d "{\n          \\"description\\": \\"Impact has been **fully mitigated**, and we\'re ready to learn from this incident.\\",\n          \\"name\\": \\"Closed\\"\n        }"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/incident_types',
    httpMethod: 'get',
    summary: 'List Incident Types V1',
    description: 'List all incident types for an organisation.',
    stainlessPath: '(resource) incident_types > (method) list',
    qualified: 'client.incidentTypes.list',
    response:
      "{ incident_types: { id: string; create_in_triage: 'always' | 'optional'; created_at: string; description: string; is_default: boolean; name: string; private_incidents_only: boolean; updated_at: string; }[]; }",
    markdown:
      "## list\n\n`client.incidentTypes.list(): { incident_types: incident_type[]; }`\n\n**get** `/v1/incident_types`\n\nList all incident types for an organisation.\n\n### Returns\n\n- `{ incident_types: { id: string; create_in_triage: 'always' | 'optional'; created_at: string; description: string; is_default: boolean; name: string; private_incidents_only: boolean; updated_at: string; }[]; }`\n\n  - `incident_types: { id: string; create_in_triage: 'always' | 'optional'; created_at: string; description: string; is_default: boolean; name: string; private_incidents_only: boolean; updated_at: string; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentTypes = await client.incidentTypes.list();\n\nconsole.log(incidentTypes);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentTypes.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentTypes = await client.incidentTypes.list();\n\nconsole.log(incidentTypes.incident_types);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_types \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/incident_types/{id}',
    httpMethod: 'get',
    summary: 'Show Incident Types V1',
    description: 'Get a single incident type.',
    stainlessPath: '(resource) incident_types > (method) retrieve',
    qualified: 'client.incidentTypes.retrieve',
    params: ['id: string;'],
    response:
      "{ incident_type: { id: string; create_in_triage: 'always' | 'optional'; created_at: string; description: string; is_default: boolean; name: string; private_incidents_only: boolean; updated_at: string; }; }",
    markdown:
      "## retrieve\n\n`client.incidentTypes.retrieve(id: string): { incident_type: incident_type; }`\n\n**get** `/v1/incident_types/{id}`\n\nGet a single incident type.\n\n### Parameters\n\n- `id: string`\n  Unique identifier for this Incident Type\n\n### Returns\n\n- `{ incident_type: { id: string; create_in_triage: 'always' | 'optional'; created_at: string; description: string; is_default: boolean; name: string; private_incidents_only: boolean; updated_at: string; }; }`\n\n  - `incident_type: { id: string; create_in_triage: 'always' | 'optional'; created_at: string; description: string; is_default: boolean; name: string; private_incidents_only: boolean; updated_at: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentType = await client.incidentTypes.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(incidentType);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentTypes.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentType = await client.incidentTypes.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(incidentType.incident_type);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incident_types/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/incidents',
    httpMethod: 'get',
    summary: 'List Incidents V1',
    description: 'List all incidents for an organisation.',
    stainlessPath: '(resource) incidents > (method) list',
    qualified: 'client.incidents.list',
    params: ['after?: string;', 'page_size?: number;', 'status?: string[];'],
    response:
      "{ incidents: { id: string; created_at: string; creator: object; custom_field_entries: object[]; incident_role_assignments: object[]; mode: 'real' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; status: 'triage' | 'investigating' | 'fixing' | 'monitoring' | 'closed' | 'declined'; updated_at: string; visibility: 'public' | 'private'; call_url?: string; incident_type?: incident_type; permalink?: string; postmortem_document_url?: string; severity?: severity_v1; slack_channel_name?: string; summary?: string; timestamps?: object[]; }[]; pagination_meta?: { page_size: number; after?: string; total_record_count?: number; }; }",
    markdown:
      "## list\n\n`client.incidents.list(after?: string, page_size?: number, status?: string[]): { incidents: incident_v1[]; pagination_meta?: object; }`\n\n**get** `/v1/incidents`\n\nList all incidents for an organisation.\n\n### Parameters\n\n- `after?: string`\n  An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.\n\n- `page_size?: number`\n  Integer number of records to return\n\n- `status?: string[]`\n  Filter for incidents in these statuses\n\n### Returns\n\n- `{ incidents: { id: string; created_at: string; creator: object; custom_field_entries: object[]; incident_role_assignments: object[]; mode: 'real' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; status: 'triage' | 'investigating' | 'fixing' | 'monitoring' | 'closed' | 'declined'; updated_at: string; visibility: 'public' | 'private'; call_url?: string; incident_type?: incident_type; permalink?: string; postmortem_document_url?: string; severity?: severity_v1; slack_channel_name?: string; summary?: string; timestamps?: object[]; }[]; pagination_meta?: { page_size: number; after?: string; total_record_count?: number; }; }`\n\n  - `incidents: { id: string; created_at: string; creator: { api_key?: { id: string; name: string; }; user?: object; }; custom_field_entries: { custom_field: { id: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v1[]; }; values: { value_catalog_entry?: object; value_link?: string; value_numeric?: string; value_option?: custom_field_option_v1; value_text?: string; }[]; }[]; incident_role_assignments: { role: object; assignee?: object; }[]; mode: 'real' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; status: 'triage' | 'investigating' | 'fixing' | 'monitoring' | 'closed' | 'declined'; updated_at: string; visibility: 'public' | 'private'; call_url?: string; incident_type?: { id: string; create_in_triage: 'always' | 'optional'; created_at: string; description: string; is_default: boolean; name: string; private_incidents_only: boolean; updated_at: string; }; permalink?: string; postmortem_document_url?: string; severity?: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }; slack_channel_name?: string; summary?: string; timestamps?: { name: string; last_occurred_at?: string; }[]; }[]`\n  - `pagination_meta?: { page_size: number; after?: string; total_record_count?: number; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidents = await client.incidents.list();\n\nconsole.log(incidents);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidents.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidents = await client.incidents.list();\n\nconsole.log(incidents.incidents);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incidents \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/incidents',
    httpMethod: 'post',
    summary: 'Create Incidents V1',
    description: 'Create a new incident.',
    stainlessPath: '(resource) incidents > (method) create',
    qualified: 'client.incidents.create',
    params: [
      'idempotency_key: string;',
      "visibility: 'public' | 'private';",
      'custom_field_entries?: { custom_field_id: string; values: { id?: string; value_catalog_entry_id?: string; value_link?: string; value_numeric?: string; value_option_id?: string; value_text?: string; value_timestamp?: string; }[]; }[];',
      'incident_role_assignments?: { assignee: { id?: string; email?: string; slack_user_id?: string; }; incident_role_id: string; }[];',
      'incident_type_id?: string;',
      "mode?: 'real' | 'test';",
      'name?: string;',
      'severity_id?: string;',
      'slack_team_id?: string;',
      'source_message_channel_id?: string;',
      'source_message_timestamp?: string;',
      "status?: 'triage' | 'investigating' | 'fixing' | 'monitoring' | 'closed' | 'declined';",
      'summary?: string;',
    ],
    response:
      "{ incident: { id: string; created_at: string; creator: object; custom_field_entries: object[]; incident_role_assignments: object[]; mode: 'real' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; status: 'triage' | 'investigating' | 'fixing' | 'monitoring' | 'closed' | 'declined'; updated_at: string; visibility: 'public' | 'private'; call_url?: string; incident_type?: incident_type; permalink?: string; postmortem_document_url?: string; severity?: severity_v1; slack_channel_name?: string; summary?: string; timestamps?: object[]; }; }",
    markdown:
      "## create\n\n`client.incidents.create(idempotency_key: string, visibility: 'public' | 'private', custom_field_entries?: { custom_field_id: string; values: { id?: string; value_catalog_entry_id?: string; value_link?: string; value_numeric?: string; value_option_id?: string; value_text?: string; value_timestamp?: string; }[]; }[], incident_role_assignments?: { assignee: { id?: string; email?: string; slack_user_id?: string; }; incident_role_id: string; }[], incident_type_id?: string, mode?: 'real' | 'test', name?: string, severity_id?: string, slack_team_id?: string, source_message_channel_id?: string, source_message_timestamp?: string, status?: 'triage' | 'investigating' | 'fixing' | 'monitoring' | 'closed' | 'declined', summary?: string): { incident: incident_v1; }`\n\n**post** `/v1/incidents`\n\nCreate a new incident.\n\n### Parameters\n\n- `idempotency_key: string`\n  Unique string used to de-duplicate incident create requests\n\n- `visibility: 'public' | 'private'`\n  Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). For more information on Private Incidents see our [help centre](https://help.incident.io/articles/5905558102-can-we-mark-incidents-as-sensitive-and-restrict-access).\n\n- `custom_field_entries?: { custom_field_id: string; values: { id?: string; value_catalog_entry_id?: string; value_link?: string; value_numeric?: string; value_option_id?: string; value_text?: string; value_timestamp?: string; }[]; }[]`\n  Set the incident's custom fields to these values\n\n- `incident_role_assignments?: { assignee: { id?: string; email?: string; slack_user_id?: string; }; incident_role_id: string; }[]`\n  Assign incident roles to these people\n\n- `incident_type_id?: string`\n  Incident type to create this incident as\n\n- `mode?: 'real' | 'test'`\n  Whether the incident is real or test\n\n- `name?: string`\n  Explanation of the incident\n\n- `severity_id?: string`\n  Severity to create incident as\n\n- `slack_team_id?: string`\n  ID of the Slack team / workspace. This is only required if you are using a Slack Enterprise Grid with multiple teams.\n\n- `source_message_channel_id?: string`\n  Channel ID of the source message, if this incident was created from one\n\n- `source_message_timestamp?: string`\n  Timestamp of the source message, if this incident was created from one\n\n- `status?: 'triage' | 'investigating' | 'fixing' | 'monitoring' | 'closed' | 'declined'`\n  Current status of the incident\n\n- `summary?: string`\n  Detailed description of the incident\n\n### Returns\n\n- `{ incident: { id: string; created_at: string; creator: object; custom_field_entries: object[]; incident_role_assignments: object[]; mode: 'real' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; status: 'triage' | 'investigating' | 'fixing' | 'monitoring' | 'closed' | 'declined'; updated_at: string; visibility: 'public' | 'private'; call_url?: string; incident_type?: incident_type; permalink?: string; postmortem_document_url?: string; severity?: severity_v1; slack_channel_name?: string; summary?: string; timestamps?: object[]; }; }`\n\n  - `incident: { id: string; created_at: string; creator: { api_key?: { id: string; name: string; }; user?: object; }; custom_field_entries: { custom_field: { id: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v1[]; }; values: { value_catalog_entry?: object; value_link?: string; value_numeric?: string; value_option?: custom_field_option_v1; value_text?: string; }[]; }[]; incident_role_assignments: { role: object; assignee?: object; }[]; mode: 'real' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; status: 'triage' | 'investigating' | 'fixing' | 'monitoring' | 'closed' | 'declined'; updated_at: string; visibility: 'public' | 'private'; call_url?: string; incident_type?: { id: string; create_in_triage: 'always' | 'optional'; created_at: string; description: string; is_default: boolean; name: string; private_incidents_only: boolean; updated_at: string; }; permalink?: string; postmortem_document_url?: string; severity?: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }; slack_channel_name?: string; summary?: string; timestamps?: { name: string; last_occurred_at?: string; }[]; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incident = await client.incidents.create({ idempotency_key: 'alert-uuid', visibility: 'public' });\n\nconsole.log(incident);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidents.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incident = await client.incidents.create({\n  idempotency_key: 'alert-uuid',\n  visibility: 'public',\n  custom_field_entries: [\n    {\n      custom_field_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n      values: [\n        {\n          id: '01FCNDV6P870EA6S7TK1DSYDG0',\n          value_catalog_entry_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n          value_link: 'https://google.com/',\n          value_numeric: '123.456',\n          value_option_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n          value_text: 'This is my text field, I hope you like it',\n          value_timestamp: '',\n        },\n      ],\n    },\n  ],\n  incident_role_assignments: [\n    {\n      assignee: {\n        email: 'bob@example.com',\n        id: '01G0J1EXE7AXZ2C93K61WBPYEH',\n        slack_user_id: 'USER123',\n      },\n      incident_role_id: '01FH5TZRWMNAFB0DZ23FD1TV96',\n    },\n  ],\n  incident_type_id: '01FH5TZRWMNAFB0DZ23FD1TV96',\n  mode: 'real',\n  name: 'Our database is sad',\n  severity_id: '01FH5TZRWMNAFB0DZ23FD1TV96',\n  slack_team_id: 'T02A1FSLE8J',\n  source_message_channel_id: 'C02AW36C1M5',\n  source_message_timestamp: '1653650280.526509',\n  status: 'triage',\n  summary: \"Our database is really really sad, and we don't know why yet.\",\n});\n\nconsole.log(incident.incident);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incidents \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d "{\n          \\"idempotency_key\\": \\"alert-uuid\\",\n          \\"visibility\\": \\"public\\",\n          \\"custom_field_entries\\": [\n            {\n              \\"custom_field_id\\": \\"01FCNDV6P870EA6S7TK1DSYDG0\\",\n              \\"values\\": [\n                {\n                  \\"id\\": \\"01FCNDV6P870EA6S7TK1DSYDG0\\",\n                  \\"value_catalog_entry_id\\": \\"01FCNDV6P870EA6S7TK1DSYDG0\\",\n                  \\"value_link\\": \\"https://google.com/\\",\n                  \\"value_numeric\\": \\"123.456\\",\n                  \\"value_option_id\\": \\"01FCNDV6P870EA6S7TK1DSYDG0\\",\n                  \\"value_text\\": \\"This is my text field, I hope you like it\\",\n                  \\"value_timestamp\\": \\"\\"\n                }\n              ]\n            }\n          ],\n          \\"incident_role_assignments\\": [\n            {\n              \\"assignee\\": {\n                \\"id\\": \\"01G0J1EXE7AXZ2C93K61WBPYEH\\",\n                \\"email\\": \\"bob@example.com\\",\n                \\"slack_user_id\\": \\"USER123\\"\n              },\n              \\"incident_role_id\\": \\"01FH5TZRWMNAFB0DZ23FD1TV96\\"\n            }\n          ],\n          \\"incident_type_id\\": \\"01FH5TZRWMNAFB0DZ23FD1TV96\\",\n          \\"mode\\": \\"real\\",\n          \\"name\\": \\"Our database is sad\\",\n          \\"severity_id\\": \\"01FH5TZRWMNAFB0DZ23FD1TV96\\",\n          \\"slack_team_id\\": \\"T02A1FSLE8J\\",\n          \\"source_message_channel_id\\": \\"C02AW36C1M5\\",\n          \\"source_message_timestamp\\": \\"1653650280.526509\\",\n          \\"status\\": \\"triage\\",\n          \\"summary\\": \\"Our database is really really sad, and we don\'t know why yet.\\"\n        }"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/incidents/{id}',
    httpMethod: 'get',
    summary: 'Show Incidents V1',
    description: 'Get a single incident.',
    stainlessPath: '(resource) incidents > (method) retrieve',
    qualified: 'client.incidents.retrieve',
    params: ['id: string;'],
    response:
      "{ incident: { id: string; created_at: string; creator: object; custom_field_entries: object[]; incident_role_assignments: object[]; mode: 'real' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; status: 'triage' | 'investigating' | 'fixing' | 'monitoring' | 'closed' | 'declined'; updated_at: string; visibility: 'public' | 'private'; call_url?: string; incident_type?: incident_type; permalink?: string; postmortem_document_url?: string; severity?: severity_v1; slack_channel_name?: string; summary?: string; timestamps?: object[]; }; }",
    markdown:
      "## retrieve\n\n`client.incidents.retrieve(id: string): { incident: incident_v1; }`\n\n**get** `/v1/incidents/{id}`\n\nGet a single incident.\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the incident\n\n### Returns\n\n- `{ incident: { id: string; created_at: string; creator: object; custom_field_entries: object[]; incident_role_assignments: object[]; mode: 'real' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; status: 'triage' | 'investigating' | 'fixing' | 'monitoring' | 'closed' | 'declined'; updated_at: string; visibility: 'public' | 'private'; call_url?: string; incident_type?: incident_type; permalink?: string; postmortem_document_url?: string; severity?: severity_v1; slack_channel_name?: string; summary?: string; timestamps?: object[]; }; }`\n\n  - `incident: { id: string; created_at: string; creator: { api_key?: { id: string; name: string; }; user?: object; }; custom_field_entries: { custom_field: { id: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v1[]; }; values: { value_catalog_entry?: object; value_link?: string; value_numeric?: string; value_option?: custom_field_option_v1; value_text?: string; }[]; }[]; incident_role_assignments: { role: object; assignee?: object; }[]; mode: 'real' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; status: 'triage' | 'investigating' | 'fixing' | 'monitoring' | 'closed' | 'declined'; updated_at: string; visibility: 'public' | 'private'; call_url?: string; incident_type?: { id: string; create_in_triage: 'always' | 'optional'; created_at: string; description: string; is_default: boolean; name: string; private_incidents_only: boolean; updated_at: string; }; permalink?: string; postmortem_document_url?: string; severity?: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }; slack_channel_name?: string; summary?: string; timestamps?: { name: string; last_occurred_at?: string; }[]; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incident = await client.incidents.retrieve('01FDAG4SAP5TYPT98WGR2N7W91');\n\nconsole.log(incident);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidents.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incident = await client.incidents.retrieve('01FDAG4SAP5TYPT98WGR2N7W91');\n\nconsole.log(incident.incident);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/incidents/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list_v2',
    endpoint: '/v2/incidents',
    httpMethod: 'get',
    summary: 'List Incidents V2',
    description:
      "List all incidents for an organisation.\n\nThis endpoint supports a number of filters, which can help find incidents matching certain\ncriteria.\n\nFilters are provided as query parameters, but due to the dynamic nature of what you can\nquery by (different accounts have different custom fields, statuses, etc) they are more\ncomplex than most.\n\nThe maximum page size that can be requested is 250.\n\nTo help, here are some exemplar curl requests with a human description of what they search\nfor.\n\nNote that:\n- Filters may be used together, and the result will be incidents that match all filters.\n- IDs are normally in UUID format, but have been replaced with shorter strings to improve\nreadability.\n- All query parameters must be URI encoded.\n\n### By status\n\nWith status of id=ABC, find all incidents that are set to that status:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'status[one_of]=ABC'\n\nOr all incidents that are not set to status with id=ABC:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'status[not_in]=ABC'\n\n### By created_at or updated_at\n\nFind all incidents that follow specified date parameters for created_at and updated_at fields.\nPossible values are \"gte\" (greater than or equal to), \"lte\" (less than or equal to), and\n\"date_range\" (between two dates). The following example finds all incidents created before\nor on 2021-01-02T00:00:00Z:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'created_at[lte]=2021-01-02'\n\nTo find incidents created within a specific date range, use the date_range option with\ntilde-separated dates:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'created_at[date_range]=2024-12-02~2024-12-08'\n\n### By status category\n\nFind all incidents that are in a status category. Possible values are \"triage\",\n\"declined\", \"merged\", \"canceled\", \"live\", \"learning\" and \"closed\":\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'status_category[one_of]=live'\n\nOr all incidents that are not in a status category:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'status_category[not_in]=live'\n\n\n### By severity\n\nWith severity of id=ABC, find all incidents that are set to that severity:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'severity[one_of]=ABC'\n\nOr all incidents where severity rank is greater-than-or-equal-to the rank of severity\nid=ABC:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'severity[gte]=ABC'\n\nOr all incidents where severity rank is less-than-or-equal-to the rank of severity id=ABC:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'severity[lte]=ABC'\n\n### By incident type\n\nWith incident type of id=ABC, find all incidents that are of that type:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'incident_type[one_of]=ABC'\n\nOr all incidents not of that type:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'incident_type[not_in]=ABC'\n\n### By incident mode\n\nBy default, we return standard and retrospective incidents. This means that test and\ntutorial incidents are filtered out. To override this behaviour, you can use the\nmode filter to specify which modes you want to get.\n\nTo find incidents of all modes:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'mode[one_of]=standard&mode[one_of]=retrospective&mode[one_of]=test&mode[one_of]=tutorial'\n\nTo find just test incidents:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'mode[one_of]=test'\n\n\n### By incident role\n\nRoles and custom fields have another nested layer in the query parameter, to account for\noperations against any of the roles or custom fields created in the account.\n\nWith incident role id=ABC, find all incidents where that role is unset:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'incident_role[ABC][is_set]=true'\n\nOr where the role has been set:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'incident_role[ABC][is_set]=false'\n\n### By option custom fields\n\nWith an option custom field id=ABC, all incidents that have field ABC set to the custom\nfield option of id=XYZ:\n\n\t\tcurl \\\n\t\t\t--get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'custom_field[ABC][one_of]=XYZ'\n\nOr all incidents that do not have custom field id=ABC set to option id=XYZ:\n\n\t\tcurl \\\n\t\t\t--get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'custom_field[ABC][not_in]=XYZ'\n",
    stainlessPath: '(resource) incidents > (method) list_v2',
    qualified: 'client.incidents.listV2',
    params: [
      'after?: string;',
      'created_at?: object;',
      'custom_field?: object;',
      'incident_role?: object;',
      'incident_type?: object;',
      'mode?: object;',
      'page_size?: number;',
      'severity?: object;',
      'status?: object;',
      'status_category?: object;',
      'updated_at?: object;',
    ],
    response:
      "{ incidents: { id: string; created_at: string; creator: actor_v2; custom_field_entries: object[]; incident_role_assignments: object[]; incident_status: incident_status_v2; mode: 'standard' | 'retrospective' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; updated_at: string; visibility: 'public' | 'private'; call_url?: string; duration_metrics?: object[]; external_issue_reference?: external_issue_reference; has_debrief?: boolean; incident_timestamp_values?: object[]; incident_type?: object; permalink?: string; postmortem_document_url?: string; severity?: severity; slack_channel_name?: string; summary?: string; workload_minutes_late?: number; workload_minutes_sleeping?: number; workload_minutes_total?: number; workload_minutes_working?: number; }[]; pagination_meta?: { page_size: number; after?: string; total_record_count?: number; }; }",
    markdown:
      "## list_v2\n\n`client.incidents.listV2(after?: string, created_at?: object, custom_field?: object, incident_role?: object, incident_type?: object, mode?: object, page_size?: number, severity?: object, status?: object, status_category?: object, updated_at?: object): { incidents: incident_v2[]; pagination_meta?: pagination_meta_result_with_total; }`\n\n**get** `/v2/incidents`\n\nList all incidents for an organisation.\n\nThis endpoint supports a number of filters, which can help find incidents matching certain\ncriteria.\n\nFilters are provided as query parameters, but due to the dynamic nature of what you can\nquery by (different accounts have different custom fields, statuses, etc) they are more\ncomplex than most.\n\nThe maximum page size that can be requested is 250.\n\nTo help, here are some exemplar curl requests with a human description of what they search\nfor.\n\nNote that:\n- Filters may be used together, and the result will be incidents that match all filters.\n- IDs are normally in UUID format, but have been replaced with shorter strings to improve\nreadability.\n- All query parameters must be URI encoded.\n\n### By status\n\nWith status of id=ABC, find all incidents that are set to that status:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'status[one_of]=ABC'\n\nOr all incidents that are not set to status with id=ABC:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'status[not_in]=ABC'\n\n### By created_at or updated_at\n\nFind all incidents that follow specified date parameters for created_at and updated_at fields.\nPossible values are \"gte\" (greater than or equal to), \"lte\" (less than or equal to), and\n\"date_range\" (between two dates). The following example finds all incidents created before\nor on 2021-01-02T00:00:00Z:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'created_at[lte]=2021-01-02'\n\nTo find incidents created within a specific date range, use the date_range option with\ntilde-separated dates:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'created_at[date_range]=2024-12-02~2024-12-08'\n\n### By status category\n\nFind all incidents that are in a status category. Possible values are \"triage\",\n\"declined\", \"merged\", \"canceled\", \"live\", \"learning\" and \"closed\":\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'status_category[one_of]=live'\n\nOr all incidents that are not in a status category:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'status_category[not_in]=live'\n\n\n### By severity\n\nWith severity of id=ABC, find all incidents that are set to that severity:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'severity[one_of]=ABC'\n\nOr all incidents where severity rank is greater-than-or-equal-to the rank of severity\nid=ABC:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'severity[gte]=ABC'\n\nOr all incidents where severity rank is less-than-or-equal-to the rank of severity id=ABC:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'severity[lte]=ABC'\n\n### By incident type\n\nWith incident type of id=ABC, find all incidents that are of that type:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'incident_type[one_of]=ABC'\n\nOr all incidents not of that type:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'incident_type[not_in]=ABC'\n\n### By incident mode\n\nBy default, we return standard and retrospective incidents. This means that test and\ntutorial incidents are filtered out. To override this behaviour, you can use the\nmode filter to specify which modes you want to get.\n\nTo find incidents of all modes:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'mode[one_of]=standard&mode[one_of]=retrospective&mode[one_of]=test&mode[one_of]=tutorial'\n\nTo find just test incidents:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'mode[one_of]=test'\n\n\n### By incident role\n\nRoles and custom fields have another nested layer in the query parameter, to account for\noperations against any of the roles or custom fields created in the account.\n\nWith incident role id=ABC, find all incidents where that role is unset:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'incident_role[ABC][is_set]=true'\n\nOr where the role has been set:\n\n\t\tcurl --get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'incident_role[ABC][is_set]=false'\n\n### By option custom fields\n\nWith an option custom field id=ABC, all incidents that have field ABC set to the custom\nfield option of id=XYZ:\n\n\t\tcurl \\\n\t\t\t--get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'custom_field[ABC][one_of]=XYZ'\n\nOr all incidents that do not have custom field id=ABC set to option id=XYZ:\n\n\t\tcurl \\\n\t\t\t--get 'https://api.incident.io/v2/incidents' \\\n\t\t\t--data 'custom_field[ABC][not_in]=XYZ'\n\n\n### Parameters\n\n- `after?: string`\n  An incident's ID. This endpoint will return a list of incidents after this ID in relation to the API response order.\n\n- `created_at?: object`\n  Filter on incident created at timestamp. The accepted operators are 'gte', 'lte' and 'date_range'.\n\n- `custom_field?: object`\n  Filter on an incident custom field. Custom field ID should be sent, followed by the operator and values. Accepted operator will depend on the custom field type.\n\n- `incident_role?: object`\n  Filter on an incident role. Role ID should be sent, followed by the operator and values. The accepted operators are 'one_of', 'is_blank'.\n\n- `incident_type?: object`\n  Filter on incident type. The accepted operators are 'one_of, or 'not_in'.\n\n- `mode?: object`\n  Filter on incident mode. The accepted operator is 'one_of'.  If this is not provided, this value defaults to `{\"one_of\": [\"standard\", \"retrospective\"] }`, meaning that test and tutorial incidents are not included.\n\n- `page_size?: number`\n  Integer number of records to return\n\n- `severity?: object`\n  Filter on incident severity. The accepted operators are 'one_of', 'not_in', 'gte', 'lte'.\n\n- `status?: object`\n  Filter on incident status. The accepted operators are 'one_of', or 'not_in'.\n\n- `status_category?: object`\n  Filter on the category of the incidents status. The accepted operators are 'one_of', or 'not_in'.\n\n- `updated_at?: object`\n  Filter on incident updated at timestamp. The accepted operators are 'gte', 'lte' and 'date_range'.\n\n### Returns\n\n- `{ incidents: { id: string; created_at: string; creator: actor_v2; custom_field_entries: object[]; incident_role_assignments: object[]; incident_status: incident_status_v2; mode: 'standard' | 'retrospective' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; updated_at: string; visibility: 'public' | 'private'; call_url?: string; duration_metrics?: object[]; external_issue_reference?: external_issue_reference; has_debrief?: boolean; incident_timestamp_values?: object[]; incident_type?: object; permalink?: string; postmortem_document_url?: string; severity?: severity; slack_channel_name?: string; summary?: string; workload_minutes_late?: number; workload_minutes_sleeping?: number; workload_minutes_total?: number; workload_minutes_working?: number; }[]; pagination_meta?: { page_size: number; after?: string; total_record_count?: number; }; }`\n\n  - `incidents: { id: string; created_at: string; creator: { alert?: alert_actor_v2; api_key?: object; user?: user_v2; workflow?: workflow_actor_v2; }; custom_field_entries: { custom_field: { id: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v2[]; }; values: { value_catalog_entry?: object; value_link?: string; value_numeric?: string; value_option?: custom_field_option_v2; value_text?: string; }[]; }[]; incident_role_assignments: { role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }; assignee?: object; }[]; incident_status: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }; mode: 'standard' | 'retrospective' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; updated_at: string; visibility: 'public' | 'private'; call_url?: string; duration_metrics?: { duration_metric: { id: string; name: string; }; value_seconds?: number; }[]; external_issue_reference?: { issue_name: string; issue_permalink: string; provider: string; }; has_debrief?: boolean; incident_timestamp_values?: { incident_timestamp: object; value?: { value?: string; }; }[]; incident_type?: { id: string; create_in_triage: 'always' | 'optional'; created_at: string; description: string; is_default: boolean; name: string; private_incidents_only: boolean; updated_at: string; }; permalink?: string; postmortem_document_url?: string; severity?: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }; slack_channel_name?: string; summary?: string; workload_minutes_late?: number; workload_minutes_sleeping?: number; workload_minutes_total?: number; workload_minutes_working?: number; }[]`\n  - `pagination_meta?: { page_size: number; after?: string; total_record_count?: number; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.incidents.listV2();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidents.listV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.incidents.listV2();\n\nconsole.log(response.incidents);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/incidents \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create_v2',
    endpoint: '/v2/incidents',
    httpMethod: 'post',
    summary: 'Create Incidents V2',
    description:
      'Create a new incident.\n\nNote that if the incident mode is set to "retrospective" then the new incident\nwill not be announced in Slack.\n',
    stainlessPath: '(resource) incidents > (method) create_v2',
    qualified: 'client.incidents.createV2',
    params: [
      'idempotency_key: string;',
      "visibility: 'public' | 'private';",
      'custom_field_entries?: { custom_field_id: string; values: { id?: string; value_catalog_entry_id?: string; value_link?: string; value_numeric?: string; value_option_id?: string; value_text?: string; value_timestamp?: string; }[]; }[];',
      'incident_role_assignments?: { incident_role_id: string; assignee?: { id?: string; email?: string; slack_user_id?: string; }; }[];',
      'incident_status_id?: string;',
      'incident_timestamp_values?: { incident_timestamp_id: string; value?: string; }[];',
      'incident_type_id?: string;',
      "mode?: 'standard' | 'retrospective' | 'test' | 'tutorial';",
      'name?: string;',
      'retrospective_incident_options?: { external_id?: number; postmortem_document_url?: string; slack_channel_id?: string; };',
      'severity_id?: string;',
      'slack_channel_name_override?: string;',
      'slack_team_id?: string;',
      'summary?: string;',
    ],
    response:
      "{ incident: { id: string; created_at: string; creator: actor_v2; custom_field_entries: object[]; incident_role_assignments: object[]; incident_status: incident_status_v2; mode: 'standard' | 'retrospective' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; updated_at: string; visibility: 'public' | 'private'; call_url?: string; duration_metrics?: object[]; external_issue_reference?: external_issue_reference; has_debrief?: boolean; incident_timestamp_values?: object[]; incident_type?: object; permalink?: string; postmortem_document_url?: string; severity?: severity; slack_channel_name?: string; summary?: string; workload_minutes_late?: number; workload_minutes_sleeping?: number; workload_minutes_total?: number; workload_minutes_working?: number; }; }",
    markdown:
      "## create_v2\n\n`client.incidents.createV2(idempotency_key: string, visibility: 'public' | 'private', custom_field_entries?: { custom_field_id: string; values: object[]; }[], incident_role_assignments?: { incident_role_id: string; assignee?: user_reference_payload_v2; }[], incident_status_id?: string, incident_timestamp_values?: { incident_timestamp_id: string; value?: string; }[], incident_type_id?: string, mode?: 'standard' | 'retrospective' | 'test' | 'tutorial', name?: string, retrospective_incident_options?: { external_id?: number; postmortem_document_url?: string; slack_channel_id?: string; }, severity_id?: string, slack_channel_name_override?: string, slack_team_id?: string, summary?: string): { incident: incident_v2; }`\n\n**post** `/v2/incidents`\n\nCreate a new incident.\n\nNote that if the incident mode is set to \"retrospective\" then the new incident\nwill not be announced in Slack.\n\n\n### Parameters\n\n- `idempotency_key: string`\n  Unique string used to de-duplicate incident create requests\n\n- `visibility: 'public' | 'private'`\n  Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). For more information on Private Incidents see our [help centre](https://help.incident.io/articles/5905558102-can-we-mark-incidents-as-sensitive-and-restrict-access).\n\n- `custom_field_entries?: { custom_field_id: string; values: { id?: string; value_catalog_entry_id?: string; value_link?: string; value_numeric?: string; value_option_id?: string; value_text?: string; value_timestamp?: string; }[]; }[]`\n  Set the incident's custom fields to these values\n\n- `incident_role_assignments?: { incident_role_id: string; assignee?: { id?: string; email?: string; slack_user_id?: string; }; }[]`\n  Assign incident roles to these people\n\n- `incident_status_id?: string`\n  Incident status to assign to the incident\n\n- `incident_timestamp_values?: { incident_timestamp_id: string; value?: string; }[]`\n  Assign the incident's timestamps to these values\n\n- `incident_type_id?: string`\n  Incident type to create this incident as\n\n- `mode?: 'standard' | 'retrospective' | 'test' | 'tutorial'`\n  Whether the incident is real, a test, a tutorial, or importing as a retrospective incident\n\n- `name?: string`\n  Explanation of the incident\n\n- `retrospective_incident_options?: { external_id?: number; postmortem_document_url?: string; slack_channel_id?: string; }`\n  - `external_id?: number`\n    The external ID (e.g. the 123 in INC-123) to assign to the incident. This can be useful when importing incidents. If you want to use this field, you'll need to talk to us first.\n  - `postmortem_document_url?: string`\n    The URL of the postmortem, if there is one\n  - `slack_channel_id?: string`\n    Pass the ID of a Slack channel to attach the incident to an existing channel, rather than creating a new one\n\n- `severity_id?: string`\n  Severity to create incident as\n\n- `slack_channel_name_override?: string`\n  Name of the Slack channel to create for this incident\n\n- `slack_team_id?: string`\n  Slack Team to create the incident in\n\n- `summary?: string`\n  Detailed description of the incident\n\n### Returns\n\n- `{ incident: { id: string; created_at: string; creator: actor_v2; custom_field_entries: object[]; incident_role_assignments: object[]; incident_status: incident_status_v2; mode: 'standard' | 'retrospective' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; updated_at: string; visibility: 'public' | 'private'; call_url?: string; duration_metrics?: object[]; external_issue_reference?: external_issue_reference; has_debrief?: boolean; incident_timestamp_values?: object[]; incident_type?: object; permalink?: string; postmortem_document_url?: string; severity?: severity; slack_channel_name?: string; summary?: string; workload_minutes_late?: number; workload_minutes_sleeping?: number; workload_minutes_total?: number; workload_minutes_working?: number; }; }`\n\n  - `incident: { id: string; created_at: string; creator: { alert?: alert_actor_v2; api_key?: object; user?: user_v2; workflow?: workflow_actor_v2; }; custom_field_entries: { custom_field: { id: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v2[]; }; values: { value_catalog_entry?: object; value_link?: string; value_numeric?: string; value_option?: custom_field_option_v2; value_text?: string; }[]; }[]; incident_role_assignments: { role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }; assignee?: object; }[]; incident_status: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }; mode: 'standard' | 'retrospective' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; updated_at: string; visibility: 'public' | 'private'; call_url?: string; duration_metrics?: { duration_metric: { id: string; name: string; }; value_seconds?: number; }[]; external_issue_reference?: { issue_name: string; issue_permalink: string; provider: string; }; has_debrief?: boolean; incident_timestamp_values?: { incident_timestamp: object; value?: { value?: string; }; }[]; incident_type?: { id: string; create_in_triage: 'always' | 'optional'; created_at: string; description: string; is_default: boolean; name: string; private_incidents_only: boolean; updated_at: string; }; permalink?: string; postmortem_document_url?: string; severity?: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }; slack_channel_name?: string; summary?: string; workload_minutes_late?: number; workload_minutes_sleeping?: number; workload_minutes_total?: number; workload_minutes_working?: number; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.incidents.createV2({ idempotency_key: 'alert-uuid', visibility: 'public' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidents.createV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.incidents.createV2({\n  idempotency_key: 'alert-uuid',\n  visibility: 'public',\n  custom_field_entries: [\n    {\n      custom_field_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n      values: [\n        {\n          id: '01FCNDV6P870EA6S7TK1DSYDG0',\n          value_catalog_entry_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n          value_link: 'https://google.com/',\n          value_numeric: '123.456',\n          value_option_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n          value_text: 'This is my text field, I hope you like it',\n          value_timestamp: '',\n        },\n      ],\n    },\n  ],\n  incident_role_assignments: [\n    {\n      assignee: {\n        email: 'bob@example.com',\n        id: '01G0J1EXE7AXZ2C93K61WBPYEH',\n        slack_user_id: 'USER123',\n      },\n      incident_role_id: '01FH5TZRWMNAFB0DZ23FD1TV96',\n    },\n  ],\n  incident_status_id: '01G0J1EXE7AXZ2C93K61WBPYEH',\n  incident_timestamp_values: [\n    { incident_timestamp_id: '01FCNDV6P870EA6S7TK1DSYD5H', value: '2021-08-17T13:28:57.801578Z' },\n  ],\n  incident_type_id: '01FH5TZRWMNAFB0DZ23FD1TV96',\n  mode: 'standard',\n  name: 'Our database is sad',\n  retrospective_incident_options: {\n    external_id: 123,\n    postmortem_document_url: 'https://docs.google.com/my_doc_id',\n    slack_channel_id: 'abc123',\n  },\n  severity_id: '01FH5TZRWMNAFB0DZ23FD1TV96',\n  slack_channel_name_override: 'inc-123-database-down',\n  slack_team_id: 'T02A1FSLE8J',\n  summary: \"Our database is really really sad, and we don't know why yet.\",\n});\n\nconsole.log(response.incident);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/incidents \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d "{\n          \\"idempotency_key\\": \\"alert-uuid\\",\n          \\"visibility\\": \\"public\\",\n          \\"custom_field_entries\\": [\n            {\n              \\"custom_field_id\\": \\"01FCNDV6P870EA6S7TK1DSYDG0\\",\n              \\"values\\": [\n                {\n                  \\"id\\": \\"01FCNDV6P870EA6S7TK1DSYDG0\\",\n                  \\"value_catalog_entry_id\\": \\"01FCNDV6P870EA6S7TK1DSYDG0\\",\n                  \\"value_link\\": \\"https://google.com/\\",\n                  \\"value_numeric\\": \\"123.456\\",\n                  \\"value_option_id\\": \\"01FCNDV6P870EA6S7TK1DSYDG0\\",\n                  \\"value_text\\": \\"This is my text field, I hope you like it\\",\n                  \\"value_timestamp\\": \\"\\"\n                }\n              ]\n            }\n          ],\n          \\"incident_role_assignments\\": [\n            {\n              \\"incident_role_id\\": \\"01FH5TZRWMNAFB0DZ23FD1TV96\\",\n              \\"assignee\\": {\n                \\"id\\": \\"01G0J1EXE7AXZ2C93K61WBPYEH\\",\n                \\"email\\": \\"bob@example.com\\",\n                \\"slack_user_id\\": \\"USER123\\"\n              }\n            }\n          ],\n          \\"incident_status_id\\": \\"01G0J1EXE7AXZ2C93K61WBPYEH\\",\n          \\"incident_timestamp_values\\": [\n            {\n              \\"incident_timestamp_id\\": \\"01FCNDV6P870EA6S7TK1DSYD5H\\",\n              \\"value\\": \\"2021-08-17T13:28:57.801578Z\\"\n            }\n          ],\n          \\"incident_type_id\\": \\"01FH5TZRWMNAFB0DZ23FD1TV96\\",\n          \\"mode\\": \\"standard\\",\n          \\"name\\": \\"Our database is sad\\",\n          \\"retrospective_incident_options\\": {\n            \\"external_id\\": 123,\n            \\"postmortem_document_url\\": \\"https://docs.google.com/my_doc_id\\",\n            \\"slack_channel_id\\": \\"abc123\\"\n          },\n          \\"severity_id\\": \\"01FH5TZRWMNAFB0DZ23FD1TV96\\",\n          \\"slack_channel_name_override\\": \\"inc-123-database-down\\",\n          \\"slack_team_id\\": \\"T02A1FSLE8J\\",\n          \\"summary\\": \\"Our database is really really sad, and we don\'t know why yet.\\"\n        }"',
      },
    },
  },
  {
    name: 'retrieve_v2',
    endpoint: '/v2/incidents/{id}',
    httpMethod: 'get',
    summary: 'Show Incidents V2',
    description:
      "Get a single incident.\n\nThe ID supplied can be either the incident's full ID, or the numeric part of its\nreference. For example, to get INC-123, you could use either its full ID or:\n\n\t\tcurl \\\n\t\t\t--get 'https://api.incident.io/v2/incidents/123\n",
    stainlessPath: '(resource) incidents > (method) retrieve_v2',
    qualified: 'client.incidents.retrieveV2',
    params: ['id: string;'],
    response:
      "{ incident: { id: string; created_at: string; creator: actor_v2; custom_field_entries: object[]; incident_role_assignments: object[]; incident_status: incident_status_v2; mode: 'standard' | 'retrospective' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; updated_at: string; visibility: 'public' | 'private'; call_url?: string; duration_metrics?: object[]; external_issue_reference?: external_issue_reference; has_debrief?: boolean; incident_timestamp_values?: object[]; incident_type?: object; permalink?: string; postmortem_document_url?: string; severity?: severity; slack_channel_name?: string; summary?: string; workload_minutes_late?: number; workload_minutes_sleeping?: number; workload_minutes_total?: number; workload_minutes_working?: number; }; }",
    markdown:
      "## retrieve_v2\n\n`client.incidents.retrieveV2(id: string): { incident: incident_v2; }`\n\n**get** `/v2/incidents/{id}`\n\nGet a single incident.\n\nThe ID supplied can be either the incident's full ID, or the numeric part of its\nreference. For example, to get INC-123, you could use either its full ID or:\n\n\t\tcurl \\\n\t\t\t--get 'https://api.incident.io/v2/incidents/123\n\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the incident\n\n### Returns\n\n- `{ incident: { id: string; created_at: string; creator: actor_v2; custom_field_entries: object[]; incident_role_assignments: object[]; incident_status: incident_status_v2; mode: 'standard' | 'retrospective' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; updated_at: string; visibility: 'public' | 'private'; call_url?: string; duration_metrics?: object[]; external_issue_reference?: external_issue_reference; has_debrief?: boolean; incident_timestamp_values?: object[]; incident_type?: object; permalink?: string; postmortem_document_url?: string; severity?: severity; slack_channel_name?: string; summary?: string; workload_minutes_late?: number; workload_minutes_sleeping?: number; workload_minutes_total?: number; workload_minutes_working?: number; }; }`\n\n  - `incident: { id: string; created_at: string; creator: { alert?: alert_actor_v2; api_key?: object; user?: user_v2; workflow?: workflow_actor_v2; }; custom_field_entries: { custom_field: { id: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v2[]; }; values: { value_catalog_entry?: object; value_link?: string; value_numeric?: string; value_option?: custom_field_option_v2; value_text?: string; }[]; }[]; incident_role_assignments: { role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }; assignee?: object; }[]; incident_status: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }; mode: 'standard' | 'retrospective' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; updated_at: string; visibility: 'public' | 'private'; call_url?: string; duration_metrics?: { duration_metric: { id: string; name: string; }; value_seconds?: number; }[]; external_issue_reference?: { issue_name: string; issue_permalink: string; provider: string; }; has_debrief?: boolean; incident_timestamp_values?: { incident_timestamp: object; value?: { value?: string; }; }[]; incident_type?: { id: string; create_in_triage: 'always' | 'optional'; created_at: string; description: string; is_default: boolean; name: string; private_incidents_only: boolean; updated_at: string; }; permalink?: string; postmortem_document_url?: string; severity?: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }; slack_channel_name?: string; summary?: string; workload_minutes_late?: number; workload_minutes_sleeping?: number; workload_minutes_total?: number; workload_minutes_working?: number; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.incidents.retrieveV2('01FDAG4SAP5TYPT98WGR2N7W91');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidents.retrieveV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.incidents.retrieveV2('01FDAG4SAP5TYPT98WGR2N7W91');\n\nconsole.log(response.incident);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/incidents/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'edit',
    endpoint: '/v2/incidents/{id}/actions/edit',
    httpMethod: 'post',
    summary: 'Edit Incidents V2',
    description:
      'Edit an existing incident.\n\nThis endpoint allows you to edit the properties of an existing incident: e.g. set the severity or update custom fields.\n\nWhen using this endpoint, only fields that are provided will be edited (omitted fields\nwill be ignored).\n',
    stainlessPath: '(resource) incidents.actions > (method) edit',
    qualified: 'client.incidents.actions.edit',
    params: [
      'id: string;',
      'incident: { call_url?: string; custom_field_entries?: { custom_field_id: string; values: { id?: string; value_catalog_entry_id?: string; value_link?: string; value_numeric?: string; value_option_id?: string; value_text?: string; value_timestamp?: string; }[]; }[]; incident_role_assignments?: { incident_role_id: string; assignee?: object; }[]; incident_status_id?: string; incident_timestamp_values?: { incident_timestamp_id: string; value?: string; }[]; name?: string; severity_id?: string; slack_channel_name_override?: string; summary?: string; };',
      'notify_incident_channel: boolean;',
    ],
    response:
      "{ incident: { id: string; created_at: string; creator: actor_v2; custom_field_entries: object[]; incident_role_assignments: object[]; incident_status: incident_status_v2; mode: 'standard' | 'retrospective' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; updated_at: string; visibility: 'public' | 'private'; call_url?: string; duration_metrics?: object[]; external_issue_reference?: external_issue_reference; has_debrief?: boolean; incident_timestamp_values?: object[]; incident_type?: object; permalink?: string; postmortem_document_url?: string; severity?: severity; slack_channel_name?: string; summary?: string; workload_minutes_late?: number; workload_minutes_sleeping?: number; workload_minutes_total?: number; workload_minutes_working?: number; }; }",
    markdown:
      "## edit\n\n`client.incidents.actions.edit(id: string, incident: { call_url?: string; custom_field_entries?: object[]; incident_role_assignments?: object[]; incident_status_id?: string; incident_timestamp_values?: object[]; name?: string; severity_id?: string; slack_channel_name_override?: string; summary?: string; }, notify_incident_channel: boolean): { incident: incident_v2; }`\n\n**post** `/v2/incidents/{id}/actions/edit`\n\nEdit an existing incident.\n\nThis endpoint allows you to edit the properties of an existing incident: e.g. set the severity or update custom fields.\n\nWhen using this endpoint, only fields that are provided will be edited (omitted fields\nwill be ignored).\n\n\n### Parameters\n\n- `id: string`\n  The unique identifier of the incident that you want to edit\n\n- `incident: { call_url?: string; custom_field_entries?: { custom_field_id: string; values: { id?: string; value_catalog_entry_id?: string; value_link?: string; value_numeric?: string; value_option_id?: string; value_text?: string; value_timestamp?: string; }[]; }[]; incident_role_assignments?: { incident_role_id: string; assignee?: object; }[]; incident_status_id?: string; incident_timestamp_values?: { incident_timestamp_id: string; value?: string; }[]; name?: string; severity_id?: string; slack_channel_name_override?: string; summary?: string; }`\n  - `call_url?: string`\n    The call URL attached to this incident\n  - `custom_field_entries?: { custom_field_id: string; values: { id?: string; value_catalog_entry_id?: string; value_link?: string; value_numeric?: string; value_option_id?: string; value_text?: string; value_timestamp?: string; }[]; }[]`\n    Set the incident's custom fields to these values\n  - `incident_role_assignments?: { incident_role_id: string; assignee?: { id?: string; email?: string; slack_user_id?: string; }; }[]`\n    Assign incident roles to these people\n  - `incident_status_id?: string`\n    Incident status to change incident to (you can only change an incident from one active status to another, any other lifecycle changes must be taken via the app.)\n  - `incident_timestamp_values?: { incident_timestamp_id: string; value?: string; }[]`\n    Assign the incident's timestamps to these values\n  - `name?: string`\n    Explanation of the incident\n  - `severity_id?: string`\n    The ID of the current severity of this incident\n  - `slack_channel_name_override?: string`\n    Override the name of the incident Slack channel\n  - `summary?: string`\n    Detailed description of the incident\n\n- `notify_incident_channel: boolean`\n  Should we send Slack channel notifications to inform responders of this update? Note that this won't work if the Slack channel has already been archived.\n\n### Returns\n\n- `{ incident: { id: string; created_at: string; creator: actor_v2; custom_field_entries: object[]; incident_role_assignments: object[]; incident_status: incident_status_v2; mode: 'standard' | 'retrospective' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; updated_at: string; visibility: 'public' | 'private'; call_url?: string; duration_metrics?: object[]; external_issue_reference?: external_issue_reference; has_debrief?: boolean; incident_timestamp_values?: object[]; incident_type?: object; permalink?: string; postmortem_document_url?: string; severity?: severity; slack_channel_name?: string; summary?: string; workload_minutes_late?: number; workload_minutes_sleeping?: number; workload_minutes_total?: number; workload_minutes_working?: number; }; }`\n\n  - `incident: { id: string; created_at: string; creator: { alert?: alert_actor_v2; api_key?: object; user?: user_v2; workflow?: workflow_actor_v2; }; custom_field_entries: { custom_field: { id: string; description: string; field_type: 'single_select' | 'multi_select' | 'text' | 'link' | 'numeric'; name: string; options: custom_field_option_v2[]; }; values: { value_catalog_entry?: object; value_link?: string; value_numeric?: string; value_option?: custom_field_option_v2; value_text?: string; }[]; }[]; incident_role_assignments: { role: { id: string; created_at: string; description: string; instructions: string; name: string; role_type: 'lead' | 'reporter' | 'custom'; shortform: string; updated_at: string; required?: boolean; }; assignee?: object; }[]; incident_status: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }; mode: 'standard' | 'retrospective' | 'test' | 'tutorial'; name: string; reference: string; slack_channel_id: string; slack_team_id: string; updated_at: string; visibility: 'public' | 'private'; call_url?: string; duration_metrics?: { duration_metric: { id: string; name: string; }; value_seconds?: number; }[]; external_issue_reference?: { issue_name: string; issue_permalink: string; provider: string; }; has_debrief?: boolean; incident_timestamp_values?: { incident_timestamp: object; value?: { value?: string; }; }[]; incident_type?: { id: string; create_in_triage: 'always' | 'optional'; created_at: string; description: string; is_default: boolean; name: string; private_incidents_only: boolean; updated_at: string; }; permalink?: string; postmortem_document_url?: string; severity?: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }; slack_channel_name?: string; summary?: string; workload_minutes_late?: number; workload_minutes_sleeping?: number; workload_minutes_total?: number; workload_minutes_working?: number; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.incidents.actions.edit('01G18REBY9AYH6CMWCJ2CVCYCH', {\n  incident: {},\n  notify_incident_channel: true,\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidents.actions.edit',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.incidents.actions.edit('01G18REBY9AYH6CMWCJ2CVCYCH', {\n  incident: {\n    call_url: 'https://zoom.us/foo',\n    custom_field_entries: [\n      {\n        custom_field_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n        values: [\n          {\n            id: '01FCNDV6P870EA6S7TK1DSYDG0',\n            value_catalog_entry_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n            value_link: 'https://google.com/',\n            value_numeric: '123.456',\n            value_option_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n            value_text: 'This is my text field, I hope you like it',\n            value_timestamp: '',\n          },\n        ],\n      },\n    ],\n    incident_role_assignments: [\n      {\n        assignee: {\n          email: 'bob@example.com',\n          id: '01G0J1EXE7AXZ2C93K61WBPYEH',\n          slack_user_id: 'USER123',\n        },\n        incident_role_id: '01FH5TZRWMNAFB0DZ23FD1TV96',\n      },\n    ],\n    incident_status_id: 'abc123',\n    incident_timestamp_values: [\n      { incident_timestamp_id: '01FCNDV6P870EA6S7TK1DSYD5H', value: '2021-08-17T13:28:57.801578Z' },\n    ],\n    name: 'Our database is sad',\n    severity_id: '01G0J1EXE7AXZ2C93K61WBPYEH',\n    slack_channel_name_override: 'inc-123-database-down',\n    summary: \"Our database is really really sad, and we don't know why yet.\",\n  },\n  notify_incident_channel: true,\n});\n\nconsole.log(response.incident);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/incidents/$ID/actions/edit \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d "{\n          \\"incident\\": {\n            \\"call_url\\": \\"https://zoom.us/foo\\",\n            \\"custom_field_entries\\": [\n              {\n                \\"custom_field_id\\": \\"01FCNDV6P870EA6S7TK1DSYDG0\\",\n                \\"values\\": [\n                  {\n                    \\"id\\": \\"01FCNDV6P870EA6S7TK1DSYDG0\\",\n                    \\"value_catalog_entry_id\\": \\"01FCNDV6P870EA6S7TK1DSYDG0\\",\n                    \\"value_link\\": \\"https://google.com/\\",\n                    \\"value_numeric\\": \\"123.456\\",\n                    \\"value_option_id\\": \\"01FCNDV6P870EA6S7TK1DSYDG0\\",\n                    \\"value_text\\": \\"This is my text field, I hope you like it\\",\n                    \\"value_timestamp\\": \\"\\"\n                  }\n                ]\n              }\n            ],\n            \\"incident_role_assignments\\": [\n              {\n                \\"incident_role_id\\": \\"01FH5TZRWMNAFB0DZ23FD1TV96\\",\n                \\"assignee\\": {\n                  \\"id\\": \\"01G0J1EXE7AXZ2C93K61WBPYEH\\",\n                  \\"email\\": \\"bob@example.com\\",\n                  \\"slack_user_id\\": \\"USER123\\"\n                }\n              }\n            ],\n            \\"incident_status_id\\": \\"abc123\\",\n            \\"incident_timestamp_values\\": [\n              {\n                \\"incident_timestamp_id\\": \\"01FCNDV6P870EA6S7TK1DSYD5H\\",\n                \\"value\\": \\"2021-08-17T13:28:57.801578Z\\"\n              }\n            ],\n            \\"name\\": \\"Our database is sad\\",\n            \\"severity_id\\": \\"01G0J1EXE7AXZ2C93K61WBPYEH\\",\n            \\"slack_channel_name_override\\": \\"inc-123-database-down\\",\n            \\"summary\\": \\"Our database is really really sad, and we don\'t know why yet.\\"\n          },\n          \\"notify_incident_channel\\": true\n        }"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/ip_allowlists',
    httpMethod: 'get',
    summary: 'ShowIPAllowlist IPAllowlists V1',
    description: 'Show the IP allowlist for your organisation',
    stainlessPath: '(resource) ip_allowlists > (method) retrieve',
    qualified: 'client.ipAllowlists.retrieve',
    response:
      '{ ip_allowlist: { allowlist: ip_allowlist_item[]; enabled: boolean; version: number; updated_at?: string; }; }',
    markdown:
      "## retrieve\n\n`client.ipAllowlists.retrieve(): { ip_allowlist: ip_allowlist; }`\n\n**get** `/v1/ip_allowlists`\n\nShow the IP allowlist for your organisation\n\n### Returns\n\n- `{ ip_allowlist: { allowlist: ip_allowlist_item[]; enabled: boolean; version: number; updated_at?: string; }; }`\n\n  - `ip_allowlist: { allowlist: { value: string; label?: string; }[]; enabled: boolean; version: number; updated_at?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst ipAllowlist = await client.ipAllowlists.retrieve();\n\nconsole.log(ipAllowlist);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ipAllowlists.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst ipAllowlist = await client.ipAllowlists.retrieve();\n\nconsole.log(ipAllowlist.ip_allowlist);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/ip_allowlists \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/ip_allowlists',
    httpMethod: 'put',
    summary: 'UpdateIPAllowlist IPAllowlists V1',
    description: 'Update the IP allowlist for your organisation',
    stainlessPath: '(resource) ip_allowlists > (method) update',
    qualified: 'client.ipAllowlists.update',
    params: ['allowlist: { value: string; label?: string; }[];', 'enabled: boolean;', 'version: number;'],
    response:
      '{ ip_allowlist: { allowlist: ip_allowlist_item[]; enabled: boolean; version: number; updated_at?: string; }; }',
    markdown:
      "## update\n\n`client.ipAllowlists.update(allowlist: { value: string; label?: string; }[], enabled: boolean, version: number): { ip_allowlist: ip_allowlist; }`\n\n**put** `/v1/ip_allowlists`\n\nUpdate the IP allowlist for your organisation\n\n### Parameters\n\n- `allowlist: { value: string; label?: string; }[]`\n  A list of IP addresses or CIDR prefixes to allow\n\n- `enabled: boolean`\n  Whether this IP allowlist is enabled or not\n\n- `version: number`\n  The version of this IP allowlist\n\n### Returns\n\n- `{ ip_allowlist: { allowlist: ip_allowlist_item[]; enabled: boolean; version: number; updated_at?: string; }; }`\n\n  - `ip_allowlist: { allowlist: { value: string; label?: string; }[]; enabled: boolean; version: number; updated_at?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst ipAllowlist = await client.ipAllowlists.update({\n  allowlist: [{ value: '192.0.2.0' }],\n  enabled: true,\n  version: 1,\n});\n\nconsole.log(ipAllowlist);\n```",
    perLanguage: {
      typescript: {
        method: 'client.ipAllowlists.update',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst ipAllowlist = await client.ipAllowlists.update({\n  allowlist: [{ label: 'London HQ', value: '192.0.2.0' }],\n  enabled: true,\n  version: 1,\n});\n\nconsole.log(ipAllowlist.ip_allowlist);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/ip_allowlists \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "allowlist": [\n            {\n              "value": "192.0.2.0",\n              "label": "London HQ"\n            }\n          ],\n          "enabled": true,\n          "version": 1\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/openapi.json',
    httpMethod: 'get',
    summary: 'OpenAPI Utilities V1',
    description:
      'Get the OpenAPI (v2) definition.\n\n**DEPRECATED**: Please use the OpenAPIV3 endpoint instead. The schema returned from this endpoint does not contain new options and endpoints added in 2025 and later.',
    stainlessPath: '(resource) openapi_json > (method) retrieve',
    qualified: 'client.openAPIJson.retrieve',
    response: 'string',
    markdown:
      "## retrieve\n\n`client.openAPIJson.retrieve(): string`\n\n**get** `/v1/openapi.json`\n\nGet the OpenAPI (v2) definition.\n\n**DEPRECATED**: Please use the OpenAPIV3 endpoint instead. The schema returned from this endpoint does not contain new options and endpoints added in 2025 and later.\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst openAPIJson = await client.openAPIJson.retrieve();\n\nconsole.log(openAPIJson);\n```",
    perLanguage: {
      typescript: {
        method: 'client.openAPIJson.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst openAPIJson = await client.openAPIJson.retrieve();\n\nconsole.log(openAPIJson);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/openapi.json \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/openapiV3.json',
    httpMethod: 'get',
    summary: 'OpenAPIV3 Utilities V1',
    description: 'Get the OpenAPI (v3) definition.',
    stainlessPath: '(resource) openapi_v3_json > (method) retrieve',
    qualified: 'client.openAPIV3Json.retrieve',
    response: 'string',
    markdown:
      "## retrieve\n\n`client.openAPIV3Json.retrieve(): string`\n\n**get** `/v1/openapiV3.json`\n\nGet the OpenAPI (v3) definition.\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst openAPIV3Json = await client.openAPIV3Json.retrieve();\n\nconsole.log(openAPIV3Json);\n```",
    perLanguage: {
      typescript: {
        method: 'client.openAPIV3Json.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst openAPIV3Json = await client.openAPIV3Json.retrieve();\n\nconsole.log(openAPIV3Json);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/openapiV3.json \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/severities',
    httpMethod: 'get',
    summary: 'List Severities V1',
    description: 'List all incident severities for an organisation.',
    stainlessPath: '(resource) severities > (method) list',
    qualified: 'client.severities.list',
    response:
      '{ severities: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }[]; }',
    markdown:
      "## list\n\n`client.severities.list(): { severities: severity_v1[]; }`\n\n**get** `/v1/severities`\n\nList all incident severities for an organisation.\n\n### Returns\n\n- `{ severities: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }[]; }`\n\n  - `severities: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst severities = await client.severities.list();\n\nconsole.log(severities);\n```",
    perLanguage: {
      typescript: {
        method: 'client.severities.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst severities = await client.severities.list();\n\nconsole.log(severities.severities);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/severities \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/severities',
    httpMethod: 'post',
    summary: 'Create Severities V1',
    description: 'Create a new severity',
    stainlessPath: '(resource) severities > (method) create',
    qualified: 'client.severities.create',
    params: ['description: string;', 'name: string;', 'rank?: number;'],
    response:
      '{ severity: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }; }',
    markdown:
      "## create\n\n`client.severities.create(description: string, name: string, rank?: number): { severity: severity_v1; }`\n\n**post** `/v1/severities`\n\nCreate a new severity\n\n### Parameters\n\n- `description: string`\n  Description of the severity\n\n- `name: string`\n  Human readable name of the severity\n\n- `rank?: number`\n  Rank to help sort severities (lower numbers are less severe)\n\n### Returns\n\n- `{ severity: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }; }`\n\n  - `severity: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst severity = await client.severities.create({ description: 'Issues with **low impact**.', name: 'Minor' });\n\nconsole.log(severity);\n```",
    perLanguage: {
      typescript: {
        method: 'client.severities.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst severity = await client.severities.create({\n  description: 'Issues with **low impact**.',\n  name: 'Minor',\n  rank: 1,\n});\n\nconsole.log(severity.severity);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/severities \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "description": "Issues with **low impact**.",\n          "name": "Minor",\n          "rank": 1\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/severities/{id}',
    httpMethod: 'delete',
    summary: 'Delete Severities V1',
    description: 'Delete a severity',
    stainlessPath: '(resource) severities > (method) delete',
    qualified: 'client.severities.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.severities.delete(id: string): void`\n\n**delete** `/v1/severities/{id}`\n\nDelete a severity\n\n### Parameters\n\n- `id: string`\n  Unique identifier of the severity\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.severities.delete('01FCNDV6P870EA6S7TK1DSYDG0')\n```",
    perLanguage: {
      typescript: {
        method: 'client.severities.delete',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.severities.delete('01FCNDV6P870EA6S7TK1DSYDG0');",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/severities/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v1/severities/{id}',
    httpMethod: 'get',
    summary: 'Show Severities V1',
    description: 'Get a single incident severity.',
    stainlessPath: '(resource) severities > (method) retrieve',
    qualified: 'client.severities.retrieve',
    params: ['id: string;'],
    response:
      '{ severity: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }; }',
    markdown:
      "## retrieve\n\n`client.severities.retrieve(id: string): { severity: severity_v1; }`\n\n**get** `/v1/severities/{id}`\n\nGet a single incident severity.\n\n### Parameters\n\n- `id: string`\n  Unique identifier of the severity\n\n### Returns\n\n- `{ severity: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }; }`\n\n  - `severity: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst severity = await client.severities.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(severity);\n```",
    perLanguage: {
      typescript: {
        method: 'client.severities.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst severity = await client.severities.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(severity.severity);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/severities/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/severities/{id}',
    httpMethod: 'put',
    summary: 'Update Severities V1',
    description: 'Update an existing severity',
    stainlessPath: '(resource) severities > (method) update',
    qualified: 'client.severities.update',
    params: ['id: string;', 'description: string;', 'name: string;', 'rank?: number;'],
    response:
      '{ severity: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }; }',
    markdown:
      "## update\n\n`client.severities.update(id: string, description: string, name: string, rank?: number): { severity: severity_v1; }`\n\n**put** `/v1/severities/{id}`\n\nUpdate an existing severity\n\n### Parameters\n\n- `id: string`\n  Unique identifier of the severity\n\n- `description: string`\n  Description of the severity\n\n- `name: string`\n  Human readable name of the severity\n\n- `rank?: number`\n  Rank to help sort severities (lower numbers are less severe)\n\n### Returns\n\n- `{ severity: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }; }`\n\n  - `severity: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst severity = await client.severities.update('01FCNDV6P870EA6S7TK1DSYDG0', { description: 'Issues with **low impact**.', name: 'Minor' });\n\nconsole.log(severity);\n```",
    perLanguage: {
      typescript: {
        method: 'client.severities.update',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst severity = await client.severities.update('01FCNDV6P870EA6S7TK1DSYDG0', {\n  description: 'Issues with **low impact**.',\n  name: 'Minor',\n  rank: 1,\n});\n\nconsole.log(severity.severity);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/severities/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "description": "Issues with **low impact**.",\n          "name": "Minor",\n          "rank": 1\n        }\'',
      },
    },
  },
  {
    name: 'list_response_incidents',
    endpoint: '/v1/status-pages/{id}/incidents/{incident_id}/response-incidents',
    httpMethod: 'get',
    summary: 'ListResponseIncidents Status Pages V1',
    description: 'List the linked Response incidents for a status page incident.',
    stainlessPath: '(resource) status_pages.incidents > (method) list_response_incidents',
    qualified: 'client.statusPages.incidents.listResponseIncidents',
    params: ['id: string;', 'incident_id: string;'],
    response: '{ incidents: { id: string; linked_at: string; }[]; }',
    markdown:
      "## list_response_incidents\n\n`client.statusPages.incidents.listResponseIncidents(id: string, incident_id: string): { incidents: object[]; }`\n\n**get** `/v1/status-pages/{id}/incidents/{incident_id}/response-incidents`\n\nList the linked Response incidents for a status page incident.\n\n### Parameters\n\n- `id: string`\n  ID of the status page\n\n- `incident_id: string`\n  ID of the status page incident\n\n### Returns\n\n- `{ incidents: { id: string; linked_at: string; }[]; }`\n\n  - `incidents: { id: string; linked_at: string; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.statusPages.incidents.listResponseIncidents('abc123', { id: 'abc123' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.statusPages.incidents.listResponseIncidents',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.statusPages.incidents.listResponseIncidents('abc123', {\n  id: 'abc123',\n});\n\nconsole.log(response.incidents);",
      },
      http: {
        example:
          'curl https://api.incident.io/v1/status-pages/$ID/incidents/$INCIDENT_ID/response-incidents \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v2/alert_attributes',
    httpMethod: 'get',
    summary: 'List Alert Attributes V2',
    description: 'List alert attributes.',
    stainlessPath: '(resource) alert_attributes > (method) list',
    qualified: 'client.alertAttributes.list',
    response:
      '{ alert_attributes: { id: string; array: boolean; name: string; required: boolean; type: string; }[]; }',
    markdown:
      "## list\n\n`client.alertAttributes.list(): { alert_attributes: alert_attribute_v2[]; }`\n\n**get** `/v2/alert_attributes`\n\nList alert attributes.\n\n### Returns\n\n- `{ alert_attributes: { id: string; array: boolean; name: string; required: boolean; type: string; }[]; }`\n\n  - `alert_attributes: { id: string; array: boolean; name: string; required: boolean; type: string; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst alertAttributes = await client.alertAttributes.list();\n\nconsole.log(alertAttributes);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertAttributes.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst alertAttributes = await client.alertAttributes.list();\n\nconsole.log(alertAttributes.alert_attributes);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_attributes \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v2/alert_attributes',
    httpMethod: 'post',
    summary: 'Create Alert Attributes V2',
    description: 'Create a new alert attribute.',
    stainlessPath: '(resource) alert_attributes > (method) create',
    qualified: 'client.alertAttributes.create',
    params: ['array: boolean;', 'name: string;', 'type: string;', 'required?: boolean;'],
    response:
      '{ alert_attribute: { id: string; array: boolean; name: string; required: boolean; type: string; }; }',
    markdown:
      "## create\n\n`client.alertAttributes.create(array: boolean, name: string, type: string, required?: boolean): { alert_attribute: alert_attribute_v2; }`\n\n**post** `/v2/alert_attributes`\n\nCreate a new alert attribute.\n\n### Parameters\n\n- `array: boolean`\n  Whether this attribute is an array\n\n- `name: string`\n  Unique name of this attribute\n\n- `type: string`\n  Engine resource name for this attribute\n\n- `required?: boolean`\n  Whether this attribute is required. If this field is not set, the existing setting will be preserved.\n\n### Returns\n\n- `{ alert_attribute: { id: string; array: boolean; name: string; required: boolean; type: string; }; }`\n\n  - `alert_attribute: { id: string; array: boolean; name: string; required: boolean; type: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst alertAttribute = await client.alertAttributes.create({\n  array: false,\n  name: 'service',\n  type: 'CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]',\n});\n\nconsole.log(alertAttribute);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertAttributes.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst alertAttribute = await client.alertAttributes.create({\n  array: false,\n  name: 'service',\n  type: 'CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]',\n});\n\nconsole.log(alertAttribute.alert_attribute);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_attributes \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "array": false,\n          "name": "service",\n          "type": "CatalogEntry[\\\\"01GW2G3V0S59R238FAHPDS1R67\\\\"]"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v2/alert_attributes/{id}',
    httpMethod: 'delete',
    summary: 'Destroy Alert Attributes V2',
    description: 'Destroy an alert attribute.',
    stainlessPath: '(resource) alert_attributes > (method) delete',
    qualified: 'client.alertAttributes.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.alertAttributes.delete(id: string): void`\n\n**delete** `/v2/alert_attributes/{id}`\n\nDestroy an alert attribute.\n\n### Parameters\n\n- `id: string`\n  The ID of this attribute\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.alertAttributes.delete('01GW2G3V0S59R238FAHPDS1R66')\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertAttributes.delete',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.alertAttributes.delete('01GW2G3V0S59R238FAHPDS1R66');",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_attributes/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v2/alert_attributes/{id}',
    httpMethod: 'get',
    summary: 'Show Alert Attributes V2',
    description: 'Show an alert attribute.',
    stainlessPath: '(resource) alert_attributes > (method) retrieve',
    qualified: 'client.alertAttributes.retrieve',
    params: ['id: string;'],
    response:
      '{ alert_attribute: { id: string; array: boolean; name: string; required: boolean; type: string; }; }',
    markdown:
      "## retrieve\n\n`client.alertAttributes.retrieve(id: string): { alert_attribute: alert_attribute_v2; }`\n\n**get** `/v2/alert_attributes/{id}`\n\nShow an alert attribute.\n\n### Parameters\n\n- `id: string`\n  The ID of this attribute\n\n### Returns\n\n- `{ alert_attribute: { id: string; array: boolean; name: string; required: boolean; type: string; }; }`\n\n  - `alert_attribute: { id: string; array: boolean; name: string; required: boolean; type: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst alertAttribute = await client.alertAttributes.retrieve('01GW2G3V0S59R238FAHPDS1R66');\n\nconsole.log(alertAttribute);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertAttributes.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst alertAttribute = await client.alertAttributes.retrieve('01GW2G3V0S59R238FAHPDS1R66');\n\nconsole.log(alertAttribute.alert_attribute);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_attributes/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v2/alert_attributes/{id}',
    httpMethod: 'put',
    summary: 'Update Alert Attributes V2',
    description: 'Update an alert attribute.',
    stainlessPath: '(resource) alert_attributes > (method) update',
    qualified: 'client.alertAttributes.update',
    params: ['id: string;', 'array: boolean;', 'name: string;', 'type: string;', 'required?: boolean;'],
    response:
      '{ alert_attribute: { id: string; array: boolean; name: string; required: boolean; type: string; }; }',
    markdown:
      "## update\n\n`client.alertAttributes.update(id: string, array: boolean, name: string, type: string, required?: boolean): { alert_attribute: alert_attribute_v2; }`\n\n**put** `/v2/alert_attributes/{id}`\n\nUpdate an alert attribute.\n\n### Parameters\n\n- `id: string`\n  The ID of this attribute\n\n- `array: boolean`\n  Whether this attribute is an array\n\n- `name: string`\n  Unique name of this attribute\n\n- `type: string`\n  Engine resource name for this attribute\n\n- `required?: boolean`\n  Whether this attribute is required. If this field is not set, the existing setting will be preserved.\n\n### Returns\n\n- `{ alert_attribute: { id: string; array: boolean; name: string; required: boolean; type: string; }; }`\n\n  - `alert_attribute: { id: string; array: boolean; name: string; required: boolean; type: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst alertAttribute = await client.alertAttributes.update('01GW2G3V0S59R238FAHPDS1R66', {\n  array: false,\n  name: 'service',\n  type: 'CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]',\n});\n\nconsole.log(alertAttribute);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertAttributes.update',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst alertAttribute = await client.alertAttributes.update('01GW2G3V0S59R238FAHPDS1R66', {\n  array: false,\n  name: 'service',\n  type: 'CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]',\n});\n\nconsole.log(alertAttribute.alert_attribute);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_attributes/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "array": false,\n          "name": "service",\n          "type": "CatalogEntry[\\\\"01GW2G3V0S59R238FAHPDS1R67\\\\"]"\n        }\'',
      },
    },
  },
  {
    name: 'create_http',
    endpoint: '/v2/alert_events/http/{alert_source_config_id}',
    httpMethod: 'post',
    summary: 'CreateHTTP Alert Events V2',
    description: 'Create an alert event using an HTTP source.',
    stainlessPath: '(resource) alert_events > (method) create_http',
    qualified: 'client.alertEvents.createHTTP',
    params: [
      'alert_source_config_id: string;',
      "status: 'firing' | 'resolved';",
      'title: string;',
      'token?: string;',
      'deduplication_key?: string;',
      'description?: string;',
      'metadata?: object;',
      'source_url?: string;',
    ],
    response: '{ deduplication_key: string; message: string; status: string; }',
    markdown:
      "## create_http\n\n`client.alertEvents.createHTTP(alert_source_config_id: string, status: 'firing' | 'resolved', title: string, token?: string, deduplication_key?: string, description?: string, metadata?: object, source_url?: string): { deduplication_key: string; message: string; status: string; }`\n\n**post** `/v2/alert_events/http/{alert_source_config_id}`\n\nCreate an alert event using an HTTP source.\n\n### Parameters\n\n- `alert_source_config_id: string`\n  Which alert source config produced this alert\n\n- `status: 'firing' | 'resolved'`\n  Current status of this alert\n\n- `title: string`\n  The title of the alert, parsed from the alert payload according to the alert source configuration\n\n- `token?: string`\n  Token used to authenticate the request, generated when configuring the alert source. Will be consumed via a URL query string parameter\n\n- `deduplication_key?: string`\n  A deduplication key which uniquely references this alert from your alert source. For newly created HTTP sources, this field is required.\nIf you send an event with the same deduplication_key multiple times, only one alert will be created in incident.io for this alert source config.\nYou can filter on this field to find the alert created by an event you've sent us.\n\n- `description?: string`\n  Description that optionally adds more detail to title. Supports markdown.\n\n- `metadata?: object`\n  Any additional metadata that you've configured your alert source to parse\n\n- `source_url?: string`\n  If applicable, a link to the alert in the upstream system\n\n### Returns\n\n- `{ deduplication_key: string; message: string; status: string; }`\n\n  - `deduplication_key: string`\n  - `message: string`\n  - `status: string`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.alertEvents.createHTTP('01GW2G3V0S59R238FAHPDS1R66', { status: 'firing', title: '*errors.withMessage: PG::Error failed to connect' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertEvents.createHTTP',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.alertEvents.createHTTP('01GW2G3V0S59R238FAHPDS1R66', {\n  status: 'firing',\n  title: '*errors.withMessage: PG::Error failed to connect',\n  deduplication_key: '4293868629',\n  description:\n    \"We've detected a number of timeouts on hello.world.com, the service may be down. To fix...\",\n  metadata: { service: 'hello.world.com', team: ['my-team'] },\n  source_url: 'https://www.my-alerting-platform.com/alerts/my-alert-123',\n});\n\nconsole.log(response.deduplication_key);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_events/http/$ALERT_SOURCE_CONFIG_ID \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d "{\n          \\"status\\": \\"firing\\",\n          \\"title\\": \\"*errors.withMessage: PG::Error failed to connect\\",\n          \\"deduplication_key\\": \\"4293868629\\",\n          \\"description\\": \\"We\'ve detected a number of timeouts on hello.world.com, the service may be down. To fix...\\",\n          \\"metadata\\": {\n            \\"service\\": \\"bar\\",\n            \\"team\\": \\"bar\\"\n          },\n          \\"source_url\\": \\"https://www.my-alerting-platform.com/alerts/my-alert-123\\"\n        }"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v2/alert_routes',
    httpMethod: 'get',
    summary: 'List Alert Routes V2',
    description: 'List all alert routes in your account.',
    stainlessPath: '(resource) alert_routes > (method) list',
    qualified: 'client.alertRoutes.list',
    params: ['page_size: number;', 'after?: string;'],
    response:
      '{ alert_routes: { id: string; enabled: boolean; name: string; }[]; pagination_meta: { page_size: number; after?: string; }; }',
    markdown:
      "## list\n\n`client.alertRoutes.list(page_size: number, after?: string): { alert_routes: object[]; pagination_meta: pagination_meta_result; }`\n\n**get** `/v2/alert_routes`\n\nList all alert routes in your account.\n\n### Parameters\n\n- `page_size: number`\n  Number of alert routes to return per page\n\n- `after?: string`\n  The ID of the last alert route on the previous page\n\n### Returns\n\n- `{ alert_routes: { id: string; enabled: boolean; name: string; }[]; pagination_meta: { page_size: number; after?: string; }; }`\n\n  - `alert_routes: { id: string; enabled: boolean; name: string; }[]`\n  - `pagination_meta: { page_size: number; after?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst alertRoutes = await client.alertRoutes.list({ page_size: 25 });\n\nconsole.log(alertRoutes);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertRoutes.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst alertRoutes = await client.alertRoutes.list({ page_size: 25 });\n\nconsole.log(alertRoutes.alert_routes);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_routes \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v2/alert_routes',
    httpMethod: 'post',
    summary: 'Create Alert Routes V2',
    description: 'Create a new alert route in your account.',
    stainlessPath: '(resource) alert_routes > (method) create',
    qualified: 'client.alertRoutes.create',
    params: [
      'alert_sources: { alert_source_id: string; condition_groups: { conditions: object[]; }[]; }[];',
      'channel_config: { condition_groups: { conditions: object[]; }[]; ms_teams_targets?: { binding: engine_param_binding_payload; channel_visibility: string; }; slack_targets?: { binding: engine_param_binding_payload; channel_visibility: string; }; }[];',
      'condition_groups: { conditions: { operation: string; param_bindings: object[]; subject: string; }[]; }[];',
      'enabled: boolean;',
      'escalation_config: { auto_cancel_escalations: boolean; escalation_targets: { escalation_paths?: object; users?: object; }[]; };',
      'expressions: { label: string; operations: { operation_type: string; branches?: { branches: object[]; returns: returns_meta; }; concatenate?: { reference: string; }; filter?: { condition_groups: condition_group_payload[]; }; navigate?: { reference: string; }; parse?: { returns: returns_meta; source: string; }; }[]; reference: string; root_reference: string; else_branch?: { result: object; }; }[];',
      'incident_config: { auto_decline_enabled: boolean; condition_groups: { conditions: object[]; }[]; defer_time_seconds: number; enabled: boolean; grouping_keys: { reference: string; }[]; grouping_window_seconds: number; };',
      "incident_template: { name: { autogenerated?: boolean; binding?: engine_param_binding_payload; }; custom_fields?: { binding: object; custom_field_id: string; merge_strategy: 'first-wins' | 'last-wins' | 'append'; }[]; incident_mode?: { binding?: engine_param_binding_payload; }; incident_type?: { binding?: engine_param_binding_payload; }; severity?: { merge_strategy: 'first-wins' | 'max'; binding?: object; }; start_in_triage?: { binding?: engine_param_binding_payload; }; summary?: { autogenerated?: boolean; binding?: engine_param_binding_payload; }; workspace?: { binding?: engine_param_binding_payload; }; };",
      'is_private: boolean;',
      'name: string;',
      'version: number;',
      'created_at?: string;',
      'updated_at?: string;',
    ],
    response:
      '{ alert_route: { id: string; alert_sources: object[]; channel_config: object[]; condition_groups: condition_group[]; enabled: boolean; escalation_config: object; expressions: expression[]; incident_config: object; incident_template: object; is_private: boolean; name: string; version: number; created_at?: string; updated_at?: string; }; }',
    markdown:
      "## create\n\n`client.alertRoutes.create(alert_sources: { alert_source_id: string; condition_groups: condition_group_payload[]; }[], channel_config: { condition_groups: condition_group_payload[]; ms_teams_targets?: channel_target_payload; slack_targets?: channel_target_payload; }[], condition_groups: { conditions: object[]; }[], enabled: boolean, escalation_config: { auto_cancel_escalations: boolean; escalation_targets: object[]; }, expressions: { label: string; operations: object[]; reference: string; root_reference: string; else_branch?: object; }[], incident_config: { auto_decline_enabled: boolean; condition_groups: condition_group_payload[]; defer_time_seconds: number; enabled: boolean; grouping_keys: grouping_key[]; grouping_window_seconds: number; }, incident_template: { name: auto_generated_template_binding_payload; custom_fields?: object[]; incident_mode?: template_binding_payload; incident_type?: template_binding_payload; severity?: object; start_in_triage?: template_binding_payload; summary?: auto_generated_template_binding_payload; workspace?: template_binding_payload; }, is_private: boolean, name: string, version: number, created_at?: string, updated_at?: string): { alert_route: alert_route; }`\n\n**post** `/v2/alert_routes`\n\nCreate a new alert route in your account.\n\n### Parameters\n\n- `alert_sources: { alert_source_id: string; condition_groups: { conditions: object[]; }[]; }[]`\n  Which alert sources should this alert route match?\n\n- `channel_config: { condition_groups: { conditions: object[]; }[]; ms_teams_targets?: { binding: engine_param_binding_payload; channel_visibility: string; }; slack_targets?: { binding: engine_param_binding_payload; channel_visibility: string; }; }[]`\n  The channel configuration for this alert route\n\n- `condition_groups: { conditions: { operation: string; param_bindings: object[]; subject: string; }[]; }[]`\n  What condition groups must be true for this alert route to fire?\n\n- `enabled: boolean`\n  Whether this alert route is enabled or not\n\n- `escalation_config: { auto_cancel_escalations: boolean; escalation_targets: { escalation_paths?: object; users?: object; }[]; }`\n  - `auto_cancel_escalations: boolean`\n    Should we auto cancel escalations when all alerts are resolved?\n  - `escalation_targets: { escalation_paths?: { array_value?: object[]; value?: object; }; users?: { array_value?: object[]; value?: object; }; }[]`\n    Targets for escalation\n\n- `expressions: { label: string; operations: { operation_type: string; branches?: { branches: object[]; returns: returns_meta; }; concatenate?: { reference: string; }; filter?: { condition_groups: condition_group_payload[]; }; navigate?: { reference: string; }; parse?: { returns: returns_meta; source: string; }; }[]; reference: string; root_reference: string; else_branch?: { result: object; }; }[]`\n  The expressions used in this template\n\n- `incident_config: { auto_decline_enabled: boolean; condition_groups: { conditions: object[]; }[]; defer_time_seconds: number; enabled: boolean; grouping_keys: { reference: string; }[]; grouping_window_seconds: number; }`\n  - `auto_decline_enabled: boolean`\n    Should triage incidents be declined when alerts are resolved?\n  - `condition_groups: { conditions: { operation: string; param_bindings: object[]; subject: string; }[]; }[]`\n    What condition groups must be true for this alert route to create an incident?\n  - `defer_time_seconds: number`\n    How long should the escalation defer time be?\n  - `enabled: boolean`\n    Whether incident creation is enabled for this alert route\n  - `grouping_keys: { reference: string; }[]`\n    Which attributes should this alert route use to group alerts?\n  - `grouping_window_seconds: number`\n    How large should the grouping window be?\n\n- `incident_template: { name: { autogenerated?: boolean; binding?: engine_param_binding_payload; }; custom_fields?: { binding: object; custom_field_id: string; merge_strategy: 'first-wins' | 'last-wins' | 'append'; }[]; incident_mode?: { binding?: engine_param_binding_payload; }; incident_type?: { binding?: engine_param_binding_payload; }; severity?: { merge_strategy: 'first-wins' | 'max'; binding?: object; }; start_in_triage?: { binding?: engine_param_binding_payload; }; summary?: { autogenerated?: boolean; binding?: engine_param_binding_payload; }; workspace?: { binding?: engine_param_binding_payload; }; }`\n  - `name: { autogenerated?: boolean; binding?: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }; }`\n  - `custom_fields?: { binding: { array_value?: object[]; value?: object; }; custom_field_id: string; merge_strategy: 'first-wins' | 'last-wins' | 'append'; }[]`\n    Custom fields configuration\n  - `incident_mode?: { binding?: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }; }`\n  - `incident_type?: { binding?: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }; }`\n  - `severity?: { merge_strategy: 'first-wins' | 'max'; binding?: { array_value?: object[]; value?: object; }; }`\n  - `start_in_triage?: { binding?: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }; }`\n  - `summary?: { autogenerated?: boolean; binding?: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }; }`\n  - `workspace?: { binding?: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }; }`\n\n- `is_private: boolean`\n  Whether this alert route is private. Private alert routes will only create private incidents from alerts.\n\n- `name: string`\n  The name of this alert route config, for the user's reference\n\n- `version: number`\n  The version of this alert route config\n\n- `created_at?: string`\n  The time of creation of this alert route\n\n- `updated_at?: string`\n  The time of last update of this alert route\n\n### Returns\n\n- `{ alert_route: { id: string; alert_sources: object[]; channel_config: object[]; condition_groups: condition_group[]; enabled: boolean; escalation_config: object; expressions: expression[]; incident_config: object; incident_template: object; is_private: boolean; name: string; version: number; created_at?: string; updated_at?: string; }; }`\n\n  - `alert_route: { id: string; alert_sources: { alert_source_id: string; condition_groups: object[]; }[]; channel_config: { condition_groups: object[]; ms_teams_targets?: object; slack_targets?: object; }[]; condition_groups: { conditions: object[]; }[]; enabled: boolean; escalation_config: { auto_cancel_escalations: boolean; escalation_targets: { escalation_paths?: engine_param_binding; users?: engine_param_binding; }[]; }; expressions: { label: string; operations: object[]; reference: string; returns: returns_meta; root_reference: string; else_branch?: object; }[]; incident_config: { auto_decline_enabled: boolean; condition_groups: object[]; defer_time_seconds: number; enabled: boolean; grouping_keys: object[]; grouping_window_seconds: number; }; incident_template: { name: object; custom_fields?: { binding: engine_param_binding; custom_field_id: string; merge_strategy: 'first-wins' | 'last-wins' | 'append'; }[]; incident_mode?: object; incident_type?: object; severity?: { merge_strategy: 'first-wins' | 'max'; binding?: engine_param_binding; }; start_in_triage?: object; summary?: object; workspace?: object; }; is_private: boolean; name: string; version: number; created_at?: string; updated_at?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst alertRoute = await client.alertRoutes.create({\n  alert_sources: [{ alert_source_id: '01FCNDV6P870EA6S7TK1DSYDG0', condition_groups: [{ conditions: [{\n  operation: 'one_of',\n  param_bindings: [{}],\n  subject: 'incident.severity',\n}] }] }],\n  channel_config: [{ condition_groups: [{ conditions: [{\n  operation: 'one_of',\n  param_bindings: [{}],\n  subject: 'incident.severity',\n}] }] }],\n  condition_groups: [{ conditions: [{\n  operation: 'one_of',\n  param_bindings: [{}],\n  subject: 'incident.severity',\n}] }],\n  enabled: false,\n  escalation_config: { auto_cancel_escalations: false, escalation_targets: [{}] },\n  expressions: [{\n  label: 'Team Slack channel',\n  operations: [{ operation_type: 'navigate' }],\n  reference: 'abc123',\n  root_reference: 'incident.status',\n}],\n  incident_config: {\n  auto_decline_enabled: false,\n  condition_groups: [{ conditions: [{\n  operation: 'one_of',\n  param_bindings: [{}],\n  subject: 'incident.severity',\n}] }],\n  defer_time_seconds: 1,\n  enabled: false,\n  grouping_keys: [{ reference: 'alert.title' }],\n  grouping_window_seconds: 1,\n},\n  incident_template: { name: {} },\n  is_private: false,\n  name: 'Production incidents',\n  version: 1,\n});\n\nconsole.log(alertRoute);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertRoutes.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst alertRoute = await client.alertRoutes.create({\n  alert_sources: [\n    {\n      alert_source_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n      condition_groups: [\n        {\n          conditions: [\n            {\n              operation: 'one_of',\n              param_bindings: [\n                {\n                  array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                  value: { literal: 'SEV123', reference: 'incident.severity' },\n                },\n              ],\n              subject: 'incident.severity',\n            },\n          ],\n        },\n      ],\n    },\n  ],\n  channel_config: [\n    {\n      condition_groups: [\n        {\n          conditions: [\n            {\n              operation: 'one_of',\n              param_bindings: [\n                {\n                  array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                  value: { literal: 'SEV123', reference: 'incident.severity' },\n                },\n              ],\n              subject: 'incident.severity',\n            },\n          ],\n        },\n      ],\n      ms_teams_targets: {\n        binding: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n        channel_visibility: 'abc123',\n      },\n      slack_targets: {\n        binding: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n        channel_visibility: 'abc123',\n      },\n    },\n  ],\n  condition_groups: [\n    {\n      conditions: [\n        {\n          operation: 'one_of',\n          param_bindings: [\n            {\n              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n              value: { literal: 'SEV123', reference: 'incident.severity' },\n            },\n          ],\n          subject: 'incident.severity',\n        },\n      ],\n    },\n  ],\n  enabled: false,\n  escalation_config: {\n    auto_cancel_escalations: false,\n    escalation_targets: [\n      {\n        escalation_paths: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n        users: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n      },\n    ],\n  },\n  expressions: [\n    {\n      else_branch: {\n        result: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n      },\n      label: 'Team Slack channel',\n      operations: [\n        {\n          branches: {\n            branches: [\n              {\n                condition_groups: [\n                  {\n                    conditions: [\n                      {\n                        operation: 'one_of',\n                        param_bindings: [\n                          {\n                            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                            value: { literal: 'SEV123', reference: 'incident.severity' },\n                          },\n                        ],\n                        subject: 'incident.severity',\n                      },\n                    ],\n                  },\n                ],\n                result: {\n                  array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                  value: { literal: 'SEV123', reference: 'incident.severity' },\n                },\n              },\n            ],\n            returns: { array: true, type: 'IncidentStatus' },\n          },\n          concatenate: { reference: 'catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]' },\n          filter: {\n            condition_groups: [\n              {\n                conditions: [\n                  {\n                    operation: 'one_of',\n                    param_bindings: [\n                      {\n                        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                        value: { literal: 'SEV123', reference: 'incident.severity' },\n                      },\n                    ],\n                    subject: 'incident.severity',\n                  },\n                ],\n              },\n            ],\n          },\n          navigate: { reference: 'catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]' },\n          operation_type: 'navigate',\n          parse: {\n            returns: { array: true, type: 'IncidentStatus' },\n            source: 'metadata.annotations[\"github.com/repo\"]',\n          },\n        },\n      ],\n      reference: 'abc123',\n      root_reference: 'incident.status',\n    },\n  ],\n  incident_config: {\n    auto_decline_enabled: false,\n    condition_groups: [\n      {\n        conditions: [\n          {\n            operation: 'one_of',\n            param_bindings: [\n              {\n                array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                value: { literal: 'SEV123', reference: 'incident.severity' },\n              },\n            ],\n            subject: 'incident.severity',\n          },\n        ],\n      },\n    ],\n    defer_time_seconds: 1,\n    enabled: false,\n    grouping_keys: [{ reference: 'alert.title' }],\n    grouping_window_seconds: 1,\n  },\n  incident_template: {\n    custom_fields: [\n      {\n        binding: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n        custom_field_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n        merge_strategy: 'first-wins',\n      },\n    ],\n    incident_mode: {\n      binding: {\n        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n        value: { literal: 'SEV123', reference: 'incident.severity' },\n      },\n    },\n    incident_type: {\n      binding: {\n        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n        value: { literal: 'SEV123', reference: 'incident.severity' },\n      },\n    },\n    name: {\n      autogenerated: false,\n      binding: {\n        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n        value: { literal: 'SEV123', reference: 'incident.severity' },\n      },\n    },\n    severity: {\n      binding: {\n        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n        value: { literal: 'SEV123', reference: 'incident.severity' },\n      },\n      merge_strategy: 'first-wins',\n    },\n    start_in_triage: {\n      binding: {\n        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n        value: { literal: 'SEV123', reference: 'incident.severity' },\n      },\n    },\n    summary: {\n      autogenerated: false,\n      binding: {\n        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n        value: { literal: 'SEV123', reference: 'incident.severity' },\n      },\n    },\n    workspace: {\n      binding: {\n        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n        value: { literal: 'SEV123', reference: 'incident.severity' },\n      },\n    },\n  },\n  is_private: false,\n  name: 'Production incidents',\n  version: 1,\n  created_at: '2021-08-17T13:28:57.801578Z',\n  updated_at: '2021-08-17T13:28:57.801578Z',\n});\n\nconsole.log(alertRoute.alert_route);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_routes \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "alert_sources": [\n            {\n              "alert_source_id": "01FCNDV6P870EA6S7TK1DSYDG0",\n              "condition_groups": [\n                {\n                  "conditions": [\n                    {\n                      "operation": "one_of",\n                      "param_bindings": [\n                        {\n                          "array_value": [\n                            {\n                              "literal": "SEV123",\n                              "reference": "incident.severity"\n                            }\n                          ],\n                          "value": {\n                            "literal": "SEV123",\n                            "reference": "incident.severity"\n                          }\n                        }\n                      ],\n                      "subject": "incident.severity"\n                    }\n                  ]\n                }\n              ]\n            }\n          ],\n          "channel_config": [\n            {\n              "condition_groups": [\n                {\n                  "conditions": [\n                    {\n                      "operation": "one_of",\n                      "param_bindings": [\n                        {\n                          "array_value": [\n                            {\n                              "literal": "SEV123",\n                              "reference": "incident.severity"\n                            }\n                          ],\n                          "value": {\n                            "literal": "SEV123",\n                            "reference": "incident.severity"\n                          }\n                        }\n                      ],\n                      "subject": "incident.severity"\n                    }\n                  ]\n                }\n              ],\n              "ms_teams_targets": {\n                "binding": {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                },\n                "channel_visibility": "abc123"\n              },\n              "slack_targets": {\n                "binding": {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                },\n                "channel_visibility": "abc123"\n              }\n            }\n          ],\n          "condition_groups": [\n            {\n              "conditions": [\n                {\n                  "operation": "one_of",\n                  "param_bindings": [\n                    {\n                      "array_value": [\n                        {\n                          "literal": "SEV123",\n                          "reference": "incident.severity"\n                        }\n                      ],\n                      "value": {\n                        "literal": "SEV123",\n                        "reference": "incident.severity"\n                      }\n                    }\n                  ],\n                  "subject": "incident.severity"\n                }\n              ]\n            }\n          ],\n          "enabled": false,\n          "escalation_config": {\n            "auto_cancel_escalations": false,\n            "escalation_targets": [\n              {\n                "escalation_paths": {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                },\n                "users": {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                }\n              }\n            ]\n          },\n          "expressions": [\n            {\n              "label": "Team Slack channel",\n              "operations": [\n                {\n                  "operation_type": "navigate",\n                  "branches": {\n                    "branches": [\n                      {\n                        "condition_groups": [\n                          {\n                            "conditions": [\n                              {\n                                "operation": "one_of",\n                                "param_bindings": [\n                                  {\n                                    "array_value": [\n                                      {\n                                        "literal": "SEV123",\n                                        "reference": "incident.severity"\n                                      }\n                                    ],\n                                    "value": {\n                                      "literal": "SEV123",\n                                      "reference": "incident.severity"\n                                    }\n                                  }\n                                ],\n                                "subject": "incident.severity"\n                              }\n                            ]\n                          }\n                        ],\n                        "result": {\n                          "array_value": [\n                            {\n                              "literal": "SEV123",\n                              "reference": "incident.severity"\n                            }\n                          ],\n                          "value": {\n                            "literal": "SEV123",\n                            "reference": "incident.severity"\n                          }\n                        }\n                      }\n                    ],\n                    "returns": {\n                      "array": true,\n                      "type": "IncidentStatus"\n                    }\n                  },\n                  "concatenate": {\n                    "reference": "catalog_attribute[\\\\"01FCNDV6P870EA6S7TK1DSYD5H\\\\"]"\n                  },\n                  "filter": {\n                    "condition_groups": [\n                      {\n                        "conditions": [\n                          {\n                            "operation": "one_of",\n                            "param_bindings": [\n                              {\n                                "array_value": [\n                                  {\n                                    "literal": "SEV123",\n                                    "reference": "incident.severity"\n                                  }\n                                ],\n                                "value": {\n                                  "literal": "SEV123",\n                                  "reference": "incident.severity"\n                                }\n                              }\n                            ],\n                            "subject": "incident.severity"\n                          }\n                        ]\n                      }\n                    ]\n                  },\n                  "navigate": {\n                    "reference": "catalog_attribute[\\\\"01FCNDV6P870EA6S7TK1DSYD5H\\\\"]"\n                  },\n                  "parse": {\n                    "returns": {\n                      "array": true,\n                      "type": "IncidentStatus"\n                    },\n                    "source": "metadata.annotations[\\\\"github.com/repo\\\\"]"\n                  }\n                }\n              ],\n              "reference": "abc123",\n              "root_reference": "incident.status",\n              "else_branch": {\n                "result": {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                }\n              }\n            }\n          ],\n          "incident_config": {\n            "auto_decline_enabled": false,\n            "condition_groups": [\n              {\n                "conditions": [\n                  {\n                    "operation": "one_of",\n                    "param_bindings": [\n                      {\n                        "array_value": [\n                          {\n                            "literal": "SEV123",\n                            "reference": "incident.severity"\n                          }\n                        ],\n                        "value": {\n                          "literal": "SEV123",\n                          "reference": "incident.severity"\n                        }\n                      }\n                    ],\n                    "subject": "incident.severity"\n                  }\n                ]\n              }\n            ],\n            "defer_time_seconds": 1,\n            "enabled": false,\n            "grouping_keys": [\n              {\n                "reference": "alert.title"\n              }\n            ],\n            "grouping_window_seconds": 1\n          },\n          "incident_template": {\n            "name": {\n              "autogenerated": false,\n              "binding": {\n                "array_value": [\n                  {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                ],\n                "value": {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              }\n            },\n            "custom_fields": [\n              {\n                "binding": {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                },\n                "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",\n                "merge_strategy": "first-wins"\n              }\n            ],\n            "incident_mode": {\n              "binding": {\n                "array_value": [\n                  {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                ],\n                "value": {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              }\n            },\n            "incident_type": {\n              "binding": {\n                "array_value": [\n                  {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                ],\n                "value": {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              }\n            },\n            "severity": {\n              "merge_strategy": "first-wins",\n              "binding": {\n                "array_value": [\n                  {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                ],\n                "value": {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              }\n            },\n            "start_in_triage": {\n              "binding": {\n                "array_value": [\n                  {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                ],\n                "value": {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              }\n            },\n            "summary": {\n              "autogenerated": false,\n              "binding": {\n                "array_value": [\n                  {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                ],\n                "value": {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              }\n            },\n            "workspace": {\n              "binding": {\n                "array_value": [\n                  {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                ],\n                "value": {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              }\n            }\n          },\n          "is_private": false,\n          "name": "Production incidents",\n          "version": 1,\n          "created_at": "2021-08-17T13:28:57.801578Z",\n          "updated_at": "2021-08-17T13:28:57.801578Z"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v2/alert_routes/{id}',
    httpMethod: 'delete',
    summary: 'Delete Alert Routes V2',
    description: 'Delete an existing alert route in your account.',
    stainlessPath: '(resource) alert_routes > (method) delete',
    qualified: 'client.alertRoutes.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.alertRoutes.delete(id: string): void`\n\n**delete** `/v2/alert_routes/{id}`\n\nDelete an existing alert route in your account.\n\n### Parameters\n\n- `id: string`\n  Unique identifier of the alert route\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.alertRoutes.delete('01FCNDV6P870EA6S7TK1DSYDG0')\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertRoutes.delete',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.alertRoutes.delete('01FCNDV6P870EA6S7TK1DSYDG0');",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_routes/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v2/alert_routes/{id}',
    httpMethod: 'get',
    summary: 'Show Alert Routes V2',
    description: 'Load details about a specific alert route in your account.',
    stainlessPath: '(resource) alert_routes > (method) retrieve',
    qualified: 'client.alertRoutes.retrieve',
    params: ['id: string;'],
    response:
      '{ alert_route: { id: string; alert_sources: object[]; channel_config: object[]; condition_groups: condition_group[]; enabled: boolean; escalation_config: object; expressions: expression[]; incident_config: object; incident_template: object; is_private: boolean; name: string; version: number; created_at?: string; updated_at?: string; }; }',
    markdown:
      "## retrieve\n\n`client.alertRoutes.retrieve(id: string): { alert_route: alert_route; }`\n\n**get** `/v2/alert_routes/{id}`\n\nLoad details about a specific alert route in your account.\n\n### Parameters\n\n- `id: string`\n  Unique identifier of the alert route\n\n### Returns\n\n- `{ alert_route: { id: string; alert_sources: object[]; channel_config: object[]; condition_groups: condition_group[]; enabled: boolean; escalation_config: object; expressions: expression[]; incident_config: object; incident_template: object; is_private: boolean; name: string; version: number; created_at?: string; updated_at?: string; }; }`\n\n  - `alert_route: { id: string; alert_sources: { alert_source_id: string; condition_groups: object[]; }[]; channel_config: { condition_groups: object[]; ms_teams_targets?: object; slack_targets?: object; }[]; condition_groups: { conditions: object[]; }[]; enabled: boolean; escalation_config: { auto_cancel_escalations: boolean; escalation_targets: { escalation_paths?: engine_param_binding; users?: engine_param_binding; }[]; }; expressions: { label: string; operations: object[]; reference: string; returns: returns_meta; root_reference: string; else_branch?: object; }[]; incident_config: { auto_decline_enabled: boolean; condition_groups: object[]; defer_time_seconds: number; enabled: boolean; grouping_keys: object[]; grouping_window_seconds: number; }; incident_template: { name: object; custom_fields?: { binding: engine_param_binding; custom_field_id: string; merge_strategy: 'first-wins' | 'last-wins' | 'append'; }[]; incident_mode?: object; incident_type?: object; severity?: { merge_strategy: 'first-wins' | 'max'; binding?: engine_param_binding; }; start_in_triage?: object; summary?: object; workspace?: object; }; is_private: boolean; name: string; version: number; created_at?: string; updated_at?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst alertRoute = await client.alertRoutes.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(alertRoute);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertRoutes.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst alertRoute = await client.alertRoutes.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(alertRoute.alert_route);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_routes/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v2/alert_routes/{id}',
    httpMethod: 'put',
    summary: 'Update Alert Routes V2',
    description: 'Update an existing alert route in your account.',
    stainlessPath: '(resource) alert_routes > (method) update',
    qualified: 'client.alertRoutes.update',
    params: [
      'id: string;',
      'alert_sources: { alert_source_id: string; condition_groups: { conditions: object[]; }[]; }[];',
      'channel_config: { condition_groups: { conditions: object[]; }[]; ms_teams_targets?: { binding: engine_param_binding_payload; channel_visibility: string; }; slack_targets?: { binding: engine_param_binding_payload; channel_visibility: string; }; }[];',
      'condition_groups: { conditions: { operation: string; param_bindings: object[]; subject: string; }[]; }[];',
      'enabled: boolean;',
      'escalation_config: { auto_cancel_escalations: boolean; escalation_targets: { escalation_paths?: object; users?: object; }[]; };',
      'expressions: { label: string; operations: { operation_type: string; branches?: { branches: object[]; returns: returns_meta; }; concatenate?: { reference: string; }; filter?: { condition_groups: condition_group_payload[]; }; navigate?: { reference: string; }; parse?: { returns: returns_meta; source: string; }; }[]; reference: string; root_reference: string; else_branch?: { result: object; }; }[];',
      'incident_config: { auto_decline_enabled: boolean; condition_groups: { conditions: object[]; }[]; defer_time_seconds: number; enabled: boolean; grouping_keys: { reference: string; }[]; grouping_window_seconds: number; };',
      "incident_template: { name: { autogenerated?: boolean; binding?: engine_param_binding_payload; }; custom_fields?: { binding: object; custom_field_id: string; merge_strategy: 'first-wins' | 'last-wins' | 'append'; }[]; incident_mode?: { binding?: engine_param_binding_payload; }; incident_type?: { binding?: engine_param_binding_payload; }; severity?: { merge_strategy: 'first-wins' | 'max'; binding?: object; }; start_in_triage?: { binding?: engine_param_binding_payload; }; summary?: { autogenerated?: boolean; binding?: engine_param_binding_payload; }; workspace?: { binding?: engine_param_binding_payload; }; };",
      'is_private: boolean;',
      'name: string;',
      'version: number;',
      'created_at?: string;',
      'updated_at?: string;',
    ],
    response:
      '{ alert_route: { id: string; alert_sources: object[]; channel_config: object[]; condition_groups: condition_group[]; enabled: boolean; escalation_config: object; expressions: expression[]; incident_config: object; incident_template: object; is_private: boolean; name: string; version: number; created_at?: string; updated_at?: string; }; }',
    markdown:
      "## update\n\n`client.alertRoutes.update(id: string, alert_sources: { alert_source_id: string; condition_groups: condition_group_payload[]; }[], channel_config: { condition_groups: condition_group_payload[]; ms_teams_targets?: channel_target_payload; slack_targets?: channel_target_payload; }[], condition_groups: { conditions: object[]; }[], enabled: boolean, escalation_config: { auto_cancel_escalations: boolean; escalation_targets: object[]; }, expressions: { label: string; operations: object[]; reference: string; root_reference: string; else_branch?: object; }[], incident_config: { auto_decline_enabled: boolean; condition_groups: condition_group_payload[]; defer_time_seconds: number; enabled: boolean; grouping_keys: grouping_key[]; grouping_window_seconds: number; }, incident_template: { name: auto_generated_template_binding_payload; custom_fields?: object[]; incident_mode?: template_binding_payload; incident_type?: template_binding_payload; severity?: object; start_in_triage?: template_binding_payload; summary?: auto_generated_template_binding_payload; workspace?: template_binding_payload; }, is_private: boolean, name: string, version: number, created_at?: string, updated_at?: string): { alert_route: alert_route; }`\n\n**put** `/v2/alert_routes/{id}`\n\nUpdate an existing alert route in your account.\n\n### Parameters\n\n- `id: string`\n  Unique identifier of the alert route\n\n- `alert_sources: { alert_source_id: string; condition_groups: { conditions: object[]; }[]; }[]`\n  Which alert sources should this alert route match?\n\n- `channel_config: { condition_groups: { conditions: object[]; }[]; ms_teams_targets?: { binding: engine_param_binding_payload; channel_visibility: string; }; slack_targets?: { binding: engine_param_binding_payload; channel_visibility: string; }; }[]`\n  The channel configuration for this alert route\n\n- `condition_groups: { conditions: { operation: string; param_bindings: object[]; subject: string; }[]; }[]`\n  What condition groups must be true for this alert route to fire?\n\n- `enabled: boolean`\n  Whether this alert route is enabled or not\n\n- `escalation_config: { auto_cancel_escalations: boolean; escalation_targets: { escalation_paths?: object; users?: object; }[]; }`\n  - `auto_cancel_escalations: boolean`\n    Should we auto cancel escalations when all alerts are resolved?\n  - `escalation_targets: { escalation_paths?: { array_value?: object[]; value?: object; }; users?: { array_value?: object[]; value?: object; }; }[]`\n    Targets for escalation\n\n- `expressions: { label: string; operations: { operation_type: string; branches?: { branches: object[]; returns: returns_meta; }; concatenate?: { reference: string; }; filter?: { condition_groups: condition_group_payload[]; }; navigate?: { reference: string; }; parse?: { returns: returns_meta; source: string; }; }[]; reference: string; root_reference: string; else_branch?: { result: object; }; }[]`\n  The expressions used in this template\n\n- `incident_config: { auto_decline_enabled: boolean; condition_groups: { conditions: object[]; }[]; defer_time_seconds: number; enabled: boolean; grouping_keys: { reference: string; }[]; grouping_window_seconds: number; }`\n  - `auto_decline_enabled: boolean`\n    Should triage incidents be declined when alerts are resolved?\n  - `condition_groups: { conditions: { operation: string; param_bindings: object[]; subject: string; }[]; }[]`\n    What condition groups must be true for this alert route to create an incident?\n  - `defer_time_seconds: number`\n    How long should the escalation defer time be?\n  - `enabled: boolean`\n    Whether incident creation is enabled for this alert route\n  - `grouping_keys: { reference: string; }[]`\n    Which attributes should this alert route use to group alerts?\n  - `grouping_window_seconds: number`\n    How large should the grouping window be?\n\n- `incident_template: { name: { autogenerated?: boolean; binding?: engine_param_binding_payload; }; custom_fields?: { binding: object; custom_field_id: string; merge_strategy: 'first-wins' | 'last-wins' | 'append'; }[]; incident_mode?: { binding?: engine_param_binding_payload; }; incident_type?: { binding?: engine_param_binding_payload; }; severity?: { merge_strategy: 'first-wins' | 'max'; binding?: object; }; start_in_triage?: { binding?: engine_param_binding_payload; }; summary?: { autogenerated?: boolean; binding?: engine_param_binding_payload; }; workspace?: { binding?: engine_param_binding_payload; }; }`\n  - `name: { autogenerated?: boolean; binding?: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }; }`\n  - `custom_fields?: { binding: { array_value?: object[]; value?: object; }; custom_field_id: string; merge_strategy: 'first-wins' | 'last-wins' | 'append'; }[]`\n    Custom fields configuration\n  - `incident_mode?: { binding?: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }; }`\n  - `incident_type?: { binding?: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }; }`\n  - `severity?: { merge_strategy: 'first-wins' | 'max'; binding?: { array_value?: object[]; value?: object; }; }`\n  - `start_in_triage?: { binding?: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }; }`\n  - `summary?: { autogenerated?: boolean; binding?: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }; }`\n  - `workspace?: { binding?: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }; }`\n\n- `is_private: boolean`\n  Whether this alert route is private. Private alert routes will only create private incidents from alerts.\n\n- `name: string`\n  The name of this alert route config, for the user's reference\n\n- `version: number`\n  The version of this alert route config\n\n- `created_at?: string`\n  The time of creation of this alert route\n\n- `updated_at?: string`\n  The time of last update of this alert route\n\n### Returns\n\n- `{ alert_route: { id: string; alert_sources: object[]; channel_config: object[]; condition_groups: condition_group[]; enabled: boolean; escalation_config: object; expressions: expression[]; incident_config: object; incident_template: object; is_private: boolean; name: string; version: number; created_at?: string; updated_at?: string; }; }`\n\n  - `alert_route: { id: string; alert_sources: { alert_source_id: string; condition_groups: object[]; }[]; channel_config: { condition_groups: object[]; ms_teams_targets?: object; slack_targets?: object; }[]; condition_groups: { conditions: object[]; }[]; enabled: boolean; escalation_config: { auto_cancel_escalations: boolean; escalation_targets: { escalation_paths?: engine_param_binding; users?: engine_param_binding; }[]; }; expressions: { label: string; operations: object[]; reference: string; returns: returns_meta; root_reference: string; else_branch?: object; }[]; incident_config: { auto_decline_enabled: boolean; condition_groups: object[]; defer_time_seconds: number; enabled: boolean; grouping_keys: object[]; grouping_window_seconds: number; }; incident_template: { name: object; custom_fields?: { binding: engine_param_binding; custom_field_id: string; merge_strategy: 'first-wins' | 'last-wins' | 'append'; }[]; incident_mode?: object; incident_type?: object; severity?: { merge_strategy: 'first-wins' | 'max'; binding?: engine_param_binding; }; start_in_triage?: object; summary?: object; workspace?: object; }; is_private: boolean; name: string; version: number; created_at?: string; updated_at?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst alertRoute = await client.alertRoutes.update('01FCNDV6P870EA6S7TK1DSYDG0', {\n  alert_sources: [{ alert_source_id: '01FCNDV6P870EA6S7TK1DSYDG0', condition_groups: [{ conditions: [{\n  operation: 'one_of',\n  param_bindings: [{}],\n  subject: 'incident.severity',\n}] }] }],\n  channel_config: [{ condition_groups: [{ conditions: [{\n  operation: 'one_of',\n  param_bindings: [{}],\n  subject: 'incident.severity',\n}] }] }],\n  condition_groups: [{ conditions: [{\n  operation: 'one_of',\n  param_bindings: [{}],\n  subject: 'incident.severity',\n}] }],\n  enabled: false,\n  escalation_config: { auto_cancel_escalations: false, escalation_targets: [{}] },\n  expressions: [{\n  label: 'Team Slack channel',\n  operations: [{ operation_type: 'navigate' }],\n  reference: 'abc123',\n  root_reference: 'incident.status',\n}],\n  incident_config: {\n  auto_decline_enabled: false,\n  condition_groups: [{ conditions: [{\n  operation: 'one_of',\n  param_bindings: [{}],\n  subject: 'incident.severity',\n}] }],\n  defer_time_seconds: 1,\n  enabled: false,\n  grouping_keys: [{ reference: 'alert.title' }],\n  grouping_window_seconds: 1,\n},\n  incident_template: { name: {} },\n  is_private: false,\n  name: 'Production incidents',\n  version: 1,\n});\n\nconsole.log(alertRoute);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertRoutes.update',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst alertRoute = await client.alertRoutes.update('01FCNDV6P870EA6S7TK1DSYDG0', {\n  alert_sources: [\n    {\n      alert_source_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n      condition_groups: [\n        {\n          conditions: [\n            {\n              operation: 'one_of',\n              param_bindings: [\n                {\n                  array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                  value: { literal: 'SEV123', reference: 'incident.severity' },\n                },\n              ],\n              subject: 'incident.severity',\n            },\n          ],\n        },\n      ],\n    },\n  ],\n  channel_config: [\n    {\n      condition_groups: [\n        {\n          conditions: [\n            {\n              operation: 'one_of',\n              param_bindings: [\n                {\n                  array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                  value: { literal: 'SEV123', reference: 'incident.severity' },\n                },\n              ],\n              subject: 'incident.severity',\n            },\n          ],\n        },\n      ],\n      ms_teams_targets: {\n        binding: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n        channel_visibility: 'abc123',\n      },\n      slack_targets: {\n        binding: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n        channel_visibility: 'abc123',\n      },\n    },\n  ],\n  condition_groups: [\n    {\n      conditions: [\n        {\n          operation: 'one_of',\n          param_bindings: [\n            {\n              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n              value: { literal: 'SEV123', reference: 'incident.severity' },\n            },\n          ],\n          subject: 'incident.severity',\n        },\n      ],\n    },\n  ],\n  enabled: false,\n  escalation_config: {\n    auto_cancel_escalations: false,\n    escalation_targets: [\n      {\n        escalation_paths: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n        users: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n      },\n    ],\n  },\n  expressions: [\n    {\n      else_branch: {\n        result: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n      },\n      label: 'Team Slack channel',\n      operations: [\n        {\n          branches: {\n            branches: [\n              {\n                condition_groups: [\n                  {\n                    conditions: [\n                      {\n                        operation: 'one_of',\n                        param_bindings: [\n                          {\n                            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                            value: { literal: 'SEV123', reference: 'incident.severity' },\n                          },\n                        ],\n                        subject: 'incident.severity',\n                      },\n                    ],\n                  },\n                ],\n                result: {\n                  array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                  value: { literal: 'SEV123', reference: 'incident.severity' },\n                },\n              },\n            ],\n            returns: { array: true, type: 'IncidentStatus' },\n          },\n          concatenate: { reference: 'catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]' },\n          filter: {\n            condition_groups: [\n              {\n                conditions: [\n                  {\n                    operation: 'one_of',\n                    param_bindings: [\n                      {\n                        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                        value: { literal: 'SEV123', reference: 'incident.severity' },\n                      },\n                    ],\n                    subject: 'incident.severity',\n                  },\n                ],\n              },\n            ],\n          },\n          navigate: { reference: 'catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]' },\n          operation_type: 'navigate',\n          parse: {\n            returns: { array: true, type: 'IncidentStatus' },\n            source: 'metadata.annotations[\"github.com/repo\"]',\n          },\n        },\n      ],\n      reference: 'abc123',\n      root_reference: 'incident.status',\n    },\n  ],\n  incident_config: {\n    auto_decline_enabled: false,\n    condition_groups: [\n      {\n        conditions: [\n          {\n            operation: 'one_of',\n            param_bindings: [\n              {\n                array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                value: { literal: 'SEV123', reference: 'incident.severity' },\n              },\n            ],\n            subject: 'incident.severity',\n          },\n        ],\n      },\n    ],\n    defer_time_seconds: 1,\n    enabled: false,\n    grouping_keys: [{ reference: 'alert.title' }],\n    grouping_window_seconds: 1,\n  },\n  incident_template: {\n    custom_fields: [\n      {\n        binding: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n        custom_field_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n        merge_strategy: 'first-wins',\n      },\n    ],\n    incident_mode: {\n      binding: {\n        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n        value: { literal: 'SEV123', reference: 'incident.severity' },\n      },\n    },\n    incident_type: {\n      binding: {\n        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n        value: { literal: 'SEV123', reference: 'incident.severity' },\n      },\n    },\n    name: {\n      autogenerated: false,\n      binding: {\n        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n        value: { literal: 'SEV123', reference: 'incident.severity' },\n      },\n    },\n    severity: {\n      binding: {\n        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n        value: { literal: 'SEV123', reference: 'incident.severity' },\n      },\n      merge_strategy: 'first-wins',\n    },\n    start_in_triage: {\n      binding: {\n        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n        value: { literal: 'SEV123', reference: 'incident.severity' },\n      },\n    },\n    summary: {\n      autogenerated: false,\n      binding: {\n        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n        value: { literal: 'SEV123', reference: 'incident.severity' },\n      },\n    },\n    workspace: {\n      binding: {\n        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n        value: { literal: 'SEV123', reference: 'incident.severity' },\n      },\n    },\n  },\n  is_private: false,\n  name: 'Production incidents',\n  version: 1,\n  created_at: '2021-08-17T13:28:57.801578Z',\n  updated_at: '2021-08-17T13:28:57.801578Z',\n});\n\nconsole.log(alertRoute.alert_route);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_routes/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "alert_sources": [\n            {\n              "alert_source_id": "01FCNDV6P870EA6S7TK1DSYDG0",\n              "condition_groups": [\n                {\n                  "conditions": [\n                    {\n                      "operation": "one_of",\n                      "param_bindings": [\n                        {\n                          "array_value": [\n                            {\n                              "literal": "SEV123",\n                              "reference": "incident.severity"\n                            }\n                          ],\n                          "value": {\n                            "literal": "SEV123",\n                            "reference": "incident.severity"\n                          }\n                        }\n                      ],\n                      "subject": "incident.severity"\n                    }\n                  ]\n                }\n              ]\n            }\n          ],\n          "channel_config": [\n            {\n              "condition_groups": [\n                {\n                  "conditions": [\n                    {\n                      "operation": "one_of",\n                      "param_bindings": [\n                        {\n                          "array_value": [\n                            {\n                              "literal": "SEV123",\n                              "reference": "incident.severity"\n                            }\n                          ],\n                          "value": {\n                            "literal": "SEV123",\n                            "reference": "incident.severity"\n                          }\n                        }\n                      ],\n                      "subject": "incident.severity"\n                    }\n                  ]\n                }\n              ],\n              "ms_teams_targets": {\n                "binding": {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                },\n                "channel_visibility": "abc123"\n              },\n              "slack_targets": {\n                "binding": {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                },\n                "channel_visibility": "abc123"\n              }\n            }\n          ],\n          "condition_groups": [\n            {\n              "conditions": [\n                {\n                  "operation": "one_of",\n                  "param_bindings": [\n                    {\n                      "array_value": [\n                        {\n                          "literal": "SEV123",\n                          "reference": "incident.severity"\n                        }\n                      ],\n                      "value": {\n                        "literal": "SEV123",\n                        "reference": "incident.severity"\n                      }\n                    }\n                  ],\n                  "subject": "incident.severity"\n                }\n              ]\n            }\n          ],\n          "enabled": false,\n          "escalation_config": {\n            "auto_cancel_escalations": false,\n            "escalation_targets": [\n              {\n                "escalation_paths": {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                },\n                "users": {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                }\n              }\n            ]\n          },\n          "expressions": [\n            {\n              "label": "Team Slack channel",\n              "operations": [\n                {\n                  "operation_type": "navigate",\n                  "branches": {\n                    "branches": [\n                      {\n                        "condition_groups": [\n                          {\n                            "conditions": [\n                              {\n                                "operation": "one_of",\n                                "param_bindings": [\n                                  {\n                                    "array_value": [\n                                      {\n                                        "literal": "SEV123",\n                                        "reference": "incident.severity"\n                                      }\n                                    ],\n                                    "value": {\n                                      "literal": "SEV123",\n                                      "reference": "incident.severity"\n                                    }\n                                  }\n                                ],\n                                "subject": "incident.severity"\n                              }\n                            ]\n                          }\n                        ],\n                        "result": {\n                          "array_value": [\n                            {\n                              "literal": "SEV123",\n                              "reference": "incident.severity"\n                            }\n                          ],\n                          "value": {\n                            "literal": "SEV123",\n                            "reference": "incident.severity"\n                          }\n                        }\n                      }\n                    ],\n                    "returns": {\n                      "array": true,\n                      "type": "IncidentStatus"\n                    }\n                  },\n                  "concatenate": {\n                    "reference": "catalog_attribute[\\\\"01FCNDV6P870EA6S7TK1DSYD5H\\\\"]"\n                  },\n                  "filter": {\n                    "condition_groups": [\n                      {\n                        "conditions": [\n                          {\n                            "operation": "one_of",\n                            "param_bindings": [\n                              {\n                                "array_value": [\n                                  {\n                                    "literal": "SEV123",\n                                    "reference": "incident.severity"\n                                  }\n                                ],\n                                "value": {\n                                  "literal": "SEV123",\n                                  "reference": "incident.severity"\n                                }\n                              }\n                            ],\n                            "subject": "incident.severity"\n                          }\n                        ]\n                      }\n                    ]\n                  },\n                  "navigate": {\n                    "reference": "catalog_attribute[\\\\"01FCNDV6P870EA6S7TK1DSYD5H\\\\"]"\n                  },\n                  "parse": {\n                    "returns": {\n                      "array": true,\n                      "type": "IncidentStatus"\n                    },\n                    "source": "metadata.annotations[\\\\"github.com/repo\\\\"]"\n                  }\n                }\n              ],\n              "reference": "abc123",\n              "root_reference": "incident.status",\n              "else_branch": {\n                "result": {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                }\n              }\n            }\n          ],\n          "incident_config": {\n            "auto_decline_enabled": false,\n            "condition_groups": [\n              {\n                "conditions": [\n                  {\n                    "operation": "one_of",\n                    "param_bindings": [\n                      {\n                        "array_value": [\n                          {\n                            "literal": "SEV123",\n                            "reference": "incident.severity"\n                          }\n                        ],\n                        "value": {\n                          "literal": "SEV123",\n                          "reference": "incident.severity"\n                        }\n                      }\n                    ],\n                    "subject": "incident.severity"\n                  }\n                ]\n              }\n            ],\n            "defer_time_seconds": 1,\n            "enabled": false,\n            "grouping_keys": [\n              {\n                "reference": "alert.title"\n              }\n            ],\n            "grouping_window_seconds": 1\n          },\n          "incident_template": {\n            "name": {\n              "autogenerated": false,\n              "binding": {\n                "array_value": [\n                  {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                ],\n                "value": {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              }\n            },\n            "custom_fields": [\n              {\n                "binding": {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                },\n                "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",\n                "merge_strategy": "first-wins"\n              }\n            ],\n            "incident_mode": {\n              "binding": {\n                "array_value": [\n                  {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                ],\n                "value": {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              }\n            },\n            "incident_type": {\n              "binding": {\n                "array_value": [\n                  {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                ],\n                "value": {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              }\n            },\n            "severity": {\n              "merge_strategy": "first-wins",\n              "binding": {\n                "array_value": [\n                  {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                ],\n                "value": {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              }\n            },\n            "start_in_triage": {\n              "binding": {\n                "array_value": [\n                  {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                ],\n                "value": {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              }\n            },\n            "summary": {\n              "autogenerated": false,\n              "binding": {\n                "array_value": [\n                  {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                ],\n                "value": {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              }\n            },\n            "workspace": {\n              "binding": {\n                "array_value": [\n                  {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                ],\n                "value": {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              }\n            }\n          },\n          "is_private": false,\n          "name": "Production incidents",\n          "version": 1,\n          "created_at": "2021-08-17T13:28:57.801578Z",\n          "updated_at": "2021-08-17T13:28:57.801578Z"\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v2/alert_sources',
    httpMethod: 'get',
    summary: 'List Alert Sources V2',
    description: 'List all alert sources in your account.',
    stainlessPath: '(resource) alert_sources > (method) list',
    qualified: 'client.alertSources.list',
    response:
      '{ alert_sources: { id: string; name: string; source_type: string; template: object; email_options?: object; http_custom_options?: http_custom_options; jira_options?: jira_options; secret_token?: string; }[]; }',
    markdown:
      "## list\n\n`client.alertSources.list(): { alert_sources: alert_source[]; }`\n\n**get** `/v2/alert_sources`\n\nList all alert sources in your account.\n\n### Returns\n\n- `{ alert_sources: { id: string; name: string; source_type: string; template: object; email_options?: object; http_custom_options?: http_custom_options; jira_options?: jira_options; secret_token?: string; }[]; }`\n\n  - `alert_sources: { id: string; name: string; source_type: string; template: { attributes: { alert_attribute_id: string; binding: engine_param_binding; }[]; description: object; expressions: object[]; title: object; }; email_options?: { email_address: string; }; http_custom_options?: { deduplication_key_path: string; transform_expression: string; }; jira_options?: { project_ids: string[]; }; secret_token?: string; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst alertSources = await client.alertSources.list();\n\nconsole.log(alertSources);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertSources.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst alertSources = await client.alertSources.list();\n\nconsole.log(alertSources.alert_sources);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_sources \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v2/alert_sources',
    httpMethod: 'post',
    summary: 'Create Alert Sources V2',
    description: 'Create a new alert source in your account.',
    stainlessPath: '(resource) alert_sources > (method) create',
    qualified: 'client.alertSources.create',
    params: [
      'name: string;',
      'source_type: string;',
      'template: { attributes: { alert_attribute_id: string; binding: object; }[]; description: { literal?: string; reference?: string; }; expressions: { label: string; operations: object[]; reference: string; root_reference: string; else_branch?: object; }[]; title: { literal?: string; reference?: string; }; };',
      'http_custom_options?: { deduplication_key_path: string; transform_expression: string; };',
      'jira_options?: { project_ids: string[]; };',
    ],
    response:
      '{ alert_source: { id: string; name: string; source_type: string; template: object; email_options?: object; http_custom_options?: http_custom_options; jira_options?: jira_options; secret_token?: string; }; }',
    markdown:
      "## create\n\n`client.alertSources.create(name: string, source_type: string, template: { attributes: object[]; description: param_binding_value_payload; expressions: expression_payload[]; title: param_binding_value_payload; }, http_custom_options?: { deduplication_key_path: string; transform_expression: string; }, jira_options?: { project_ids: string[]; }): { alert_source: alert_source; }`\n\n**post** `/v2/alert_sources`\n\nCreate a new alert source in your account.\n\n### Parameters\n\n- `name: string`\n  Unique name of the alert source\n\n- `source_type: string`\n  Type of alert source\n\n- `template: { attributes: { alert_attribute_id: string; binding: object; }[]; description: { literal?: string; reference?: string; }; expressions: { label: string; operations: object[]; reference: string; root_reference: string; else_branch?: object; }[]; title: { literal?: string; reference?: string; }; }`\n  - `attributes: { alert_attribute_id: string; binding: { array_value?: object[]; value?: object; }; }[]`\n    Attributes to set on alerts coming from this source, with a binding describing how to set them.\n  - `description: { literal?: string; reference?: string; }`\n  - `expressions: { label: string; operations: { operation_type: string; branches?: { branches: object[]; returns: returns_meta; }; concatenate?: { reference: string; }; filter?: { condition_groups: condition_group_payload[]; }; navigate?: { reference: string; }; parse?: { returns: returns_meta; source: string; }; }[]; reference: string; root_reference: string; else_branch?: { result: object; }; }[]`\n    Expressions available for use in bindings within this template\n  - `title: { literal?: string; reference?: string; }`\n\n- `http_custom_options?: { deduplication_key_path: string; transform_expression: string; }`\n  - `deduplication_key_path: string`\n    JSON path to extract the deduplication key from the payload\n  - `transform_expression: string`\n    JavaScript expression that returns an object with all alert fields\n\n- `jira_options?: { project_ids: string[]; }`\n  - `project_ids: string[]`\n    Which projects in Jira should this alert source watch for new issues? IDs can either be IDs of the projects in Jira, or ID of catalog entries in the 'Jira Project' catalog type.\n\n### Returns\n\n- `{ alert_source: { id: string; name: string; source_type: string; template: object; email_options?: object; http_custom_options?: http_custom_options; jira_options?: jira_options; secret_token?: string; }; }`\n\n  - `alert_source: { id: string; name: string; source_type: string; template: { attributes: { alert_attribute_id: string; binding: engine_param_binding; }[]; description: object; expressions: object[]; title: object; }; email_options?: { email_address: string; }; http_custom_options?: { deduplication_key_path: string; transform_expression: string; }; jira_options?: { project_ids: string[]; }; secret_token?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst alertSource = await client.alertSources.create({\n  name: 'Production Web Dashboard Alerts',\n  source_type: 'alertmanager',\n  template: {\n  attributes: [{\n  alert_attribute_id: 'abc123',\n  binding: {},\n}],\n  description: {},\n  expressions: [{\n  label: 'Team Slack channel',\n  operations: [{ operation_type: 'navigate' }],\n  reference: 'abc123',\n  root_reference: 'incident.status',\n}],\n  title: {},\n},\n});\n\nconsole.log(alertSource);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertSources.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst alertSource = await client.alertSources.create({\n  name: 'Production Web Dashboard Alerts',\n  source_type: 'alertmanager',\n  template: {\n    attributes: [\n      {\n        alert_attribute_id: 'abc123',\n        binding: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n      },\n    ],\n    description: { literal: 'SEV123', reference: 'incident.severity' },\n    expressions: [\n      {\n        else_branch: {\n          result: {\n            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n            value: { literal: 'SEV123', reference: 'incident.severity' },\n          },\n        },\n        label: 'Team Slack channel',\n        operations: [\n          {\n            branches: {\n              branches: [\n                {\n                  condition_groups: [\n                    {\n                      conditions: [\n                        {\n                          operation: 'one_of',\n                          param_bindings: [\n                            {\n                              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                              value: { literal: 'SEV123', reference: 'incident.severity' },\n                            },\n                          ],\n                          subject: 'incident.severity',\n                        },\n                      ],\n                    },\n                  ],\n                  result: {\n                    array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                    value: { literal: 'SEV123', reference: 'incident.severity' },\n                  },\n                },\n              ],\n              returns: { array: true, type: 'IncidentStatus' },\n            },\n            concatenate: { reference: 'catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]' },\n            filter: {\n              condition_groups: [\n                {\n                  conditions: [\n                    {\n                      operation: 'one_of',\n                      param_bindings: [\n                        {\n                          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                          value: { literal: 'SEV123', reference: 'incident.severity' },\n                        },\n                      ],\n                      subject: 'incident.severity',\n                    },\n                  ],\n                },\n              ],\n            },\n            navigate: { reference: 'catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]' },\n            operation_type: 'navigate',\n            parse: {\n              returns: { array: true, type: 'IncidentStatus' },\n              source: 'metadata.annotations[\"github.com/repo\"]',\n            },\n          },\n        ],\n        reference: 'abc123',\n        root_reference: 'incident.status',\n      },\n    ],\n    title: { literal: 'SEV123', reference: 'incident.severity' },\n  },\n  http_custom_options: {\n    deduplication_key_path: '$.alert_id',\n    transform_expression:\n      \"return {\\n  title: $.title || $.name || 'Unknown Alert',\\n  status: $.status === 'resolved' ? 'resolved' : 'firing',\\n  description: $.description || $.message || '',\\n  sourceURL: $.url || $.link || '',\\n  metadata: { team: $.team, severity: $.severity }\\n}\",\n  },\n  jira_options: { project_ids: ['01GBSQF3FHF7FWZQNWGHAVQ804', '10043'] },\n});\n\nconsole.log(alertSource.alert_source);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_sources \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d "{\n          \\"name\\": \\"Production Web Dashboard Alerts\\",\n          \\"source_type\\": \\"alertmanager\\",\n          \\"template\\": {\n            \\"attributes\\": [\n              {\n                \\"alert_attribute_id\\": \\"abc123\\",\n                \\"binding\\": {\n                  \\"array_value\\": [\n                    {\n                      \\"literal\\": \\"SEV123\\",\n                      \\"reference\\": \\"incident.severity\\"\n                    }\n                  ],\n                  \\"value\\": {\n                    \\"literal\\": \\"SEV123\\",\n                    \\"reference\\": \\"incident.severity\\"\n                  }\n                }\n              }\n            ],\n            \\"description\\": {\n              \\"literal\\": \\"SEV123\\",\n              \\"reference\\": \\"incident.severity\\"\n            },\n            \\"expressions\\": [\n              {\n                \\"label\\": \\"Team Slack channel\\",\n                \\"operations\\": [\n                  {\n                    \\"operation_type\\": \\"navigate\\",\n                    \\"branches\\": {\n                      \\"branches\\": [\n                        {\n                          \\"condition_groups\\": [\n                            {\n                              \\"conditions\\": [\n                                {\n                                  \\"operation\\": \\"one_of\\",\n                                  \\"param_bindings\\": [\n                                    {\n                                      \\"array_value\\": [\n                                        {\n                                          \\"literal\\": \\"SEV123\\",\n                                          \\"reference\\": \\"incident.severity\\"\n                                        }\n                                      ],\n                                      \\"value\\": {\n                                        \\"literal\\": \\"SEV123\\",\n                                        \\"reference\\": \\"incident.severity\\"\n                                      }\n                                    }\n                                  ],\n                                  \\"subject\\": \\"incident.severity\\"\n                                }\n                              ]\n                            }\n                          ],\n                          \\"result\\": {\n                            \\"array_value\\": [\n                              {\n                                \\"literal\\": \\"SEV123\\",\n                                \\"reference\\": \\"incident.severity\\"\n                              }\n                            ],\n                            \\"value\\": {\n                              \\"literal\\": \\"SEV123\\",\n                              \\"reference\\": \\"incident.severity\\"\n                            }\n                          }\n                        }\n                      ],\n                      \\"returns\\": {\n                        \\"array\\": true,\n                        \\"type\\": \\"IncidentStatus\\"\n                      }\n                    },\n                    \\"concatenate\\": {\n                      \\"reference\\": \\"catalog_attribute[\\\\\\"01FCNDV6P870EA6S7TK1DSYD5H\\\\\\"]\\"\n                    },\n                    \\"filter\\": {\n                      \\"condition_groups\\": [\n                        {\n                          \\"conditions\\": [\n                            {\n                              \\"operation\\": \\"one_of\\",\n                              \\"param_bindings\\": [\n                                {\n                                  \\"array_value\\": [\n                                    {\n                                      \\"literal\\": \\"SEV123\\",\n                                      \\"reference\\": \\"incident.severity\\"\n                                    }\n                                  ],\n                                  \\"value\\": {\n                                    \\"literal\\": \\"SEV123\\",\n                                    \\"reference\\": \\"incident.severity\\"\n                                  }\n                                }\n                              ],\n                              \\"subject\\": \\"incident.severity\\"\n                            }\n                          ]\n                        }\n                      ]\n                    },\n                    \\"navigate\\": {\n                      \\"reference\\": \\"catalog_attribute[\\\\\\"01FCNDV6P870EA6S7TK1DSYD5H\\\\\\"]\\"\n                    },\n                    \\"parse\\": {\n                      \\"returns\\": {\n                        \\"array\\": true,\n                        \\"type\\": \\"IncidentStatus\\"\n                      },\n                      \\"source\\": \\"metadata.annotations[\\\\\\"github.com/repo\\\\\\"]\\"\n                    }\n                  }\n                ],\n                \\"reference\\": \\"abc123\\",\n                \\"root_reference\\": \\"incident.status\\",\n                \\"else_branch\\": {\n                  \\"result\\": {\n                    \\"array_value\\": [\n                      {\n                        \\"literal\\": \\"SEV123\\",\n                        \\"reference\\": \\"incident.severity\\"\n                      }\n                    ],\n                    \\"value\\": {\n                      \\"literal\\": \\"SEV123\\",\n                      \\"reference\\": \\"incident.severity\\"\n                    }\n                  }\n                }\n              }\n            ],\n            \\"title\\": {\n              \\"literal\\": \\"SEV123\\",\n              \\"reference\\": \\"incident.severity\\"\n            }\n          },\n          \\"http_custom_options\\": {\n            \\"deduplication_key_path\\": \\"\\$.alert_id\\",\n            \\"transform_expression\\": \\"return {\\\\n  title: \\$.title || \\$.name || \'Unknown Alert\',\\\\n  status: \\$.status === \'resolved\' ? \'resolved\' : \'firing\',\\\\n  description: \\$.description || \\$.message || \'\',\\\\n  sourceURL: \\$.url || \\$.link || \'\',\\\\n  metadata: { team: \\$.team, severity: \\$.severity }\\\\n}\\"\n          },\n          \\"jira_options\\": {\n            \\"project_ids\\": [\n              \\"01GBSQF3FHF7FWZQNWGHAVQ804\\",\n              \\"10043\\"\n            ]\n          }\n        }"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v2/alert_sources/{id}',
    httpMethod: 'delete',
    summary: 'Delete Alert Sources V2',
    description: 'Delete an existing alert source in your account.',
    stainlessPath: '(resource) alert_sources > (method) delete',
    qualified: 'client.alertSources.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.alertSources.delete(id: string): void`\n\n**delete** `/v2/alert_sources/{id}`\n\nDelete an existing alert source in your account.\n\n### Parameters\n\n- `id: string`\n  The ID of this alert source\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.alertSources.delete('01GW2G3V0S59R238FAHPDS1R66')\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertSources.delete',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.alertSources.delete('01GW2G3V0S59R238FAHPDS1R66');",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_sources/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v2/alert_sources/{id}',
    httpMethod: 'get',
    summary: 'Show Alert Sources V2',
    description: 'Load details about a specific alert source in your account.',
    stainlessPath: '(resource) alert_sources > (method) retrieve',
    qualified: 'client.alertSources.retrieve',
    params: ['id: string;'],
    response:
      '{ alert_source: { id: string; name: string; source_type: string; template: object; email_options?: object; http_custom_options?: http_custom_options; jira_options?: jira_options; secret_token?: string; }; }',
    markdown:
      "## retrieve\n\n`client.alertSources.retrieve(id: string): { alert_source: alert_source; }`\n\n**get** `/v2/alert_sources/{id}`\n\nLoad details about a specific alert source in your account.\n\n### Parameters\n\n- `id: string`\n  The ID of this alert source\n\n### Returns\n\n- `{ alert_source: { id: string; name: string; source_type: string; template: object; email_options?: object; http_custom_options?: http_custom_options; jira_options?: jira_options; secret_token?: string; }; }`\n\n  - `alert_source: { id: string; name: string; source_type: string; template: { attributes: { alert_attribute_id: string; binding: engine_param_binding; }[]; description: object; expressions: object[]; title: object; }; email_options?: { email_address: string; }; http_custom_options?: { deduplication_key_path: string; transform_expression: string; }; jira_options?: { project_ids: string[]; }; secret_token?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst alertSource = await client.alertSources.retrieve('01GW2G3V0S59R238FAHPDS1R66');\n\nconsole.log(alertSource);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertSources.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst alertSource = await client.alertSources.retrieve('01GW2G3V0S59R238FAHPDS1R66');\n\nconsole.log(alertSource.alert_source);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_sources/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v2/alert_sources/{id}',
    httpMethod: 'put',
    summary: 'Update Alert Sources V2',
    description: 'Update an existing alert source in your account.',
    stainlessPath: '(resource) alert_sources > (method) update',
    qualified: 'client.alertSources.update',
    params: [
      'id: string;',
      'name: string;',
      'template: { attributes: { alert_attribute_id: string; binding: object; }[]; description: { literal?: string; reference?: string; }; expressions: { label: string; operations: object[]; reference: string; root_reference: string; else_branch?: object; }[]; title: { literal?: string; reference?: string; }; };',
      'http_custom_options?: { deduplication_key_path: string; transform_expression: string; };',
      'jira_options?: { project_ids: string[]; };',
    ],
    response:
      '{ alert_source: { id: string; name: string; source_type: string; template: object; email_options?: object; http_custom_options?: http_custom_options; jira_options?: jira_options; secret_token?: string; }; }',
    markdown:
      "## update\n\n`client.alertSources.update(id: string, name: string, template: { attributes: object[]; description: param_binding_value_payload; expressions: expression_payload[]; title: param_binding_value_payload; }, http_custom_options?: { deduplication_key_path: string; transform_expression: string; }, jira_options?: { project_ids: string[]; }): { alert_source: alert_source; }`\n\n**put** `/v2/alert_sources/{id}`\n\nUpdate an existing alert source in your account.\n\n### Parameters\n\n- `id: string`\n  The ID of this alert source\n\n- `name: string`\n  Unique name of the alert source\n\n- `template: { attributes: { alert_attribute_id: string; binding: object; }[]; description: { literal?: string; reference?: string; }; expressions: { label: string; operations: object[]; reference: string; root_reference: string; else_branch?: object; }[]; title: { literal?: string; reference?: string; }; }`\n  - `attributes: { alert_attribute_id: string; binding: { array_value?: object[]; value?: object; }; }[]`\n    Attributes to set on alerts coming from this source, with a binding describing how to set them.\n  - `description: { literal?: string; reference?: string; }`\n  - `expressions: { label: string; operations: { operation_type: string; branches?: { branches: object[]; returns: returns_meta; }; concatenate?: { reference: string; }; filter?: { condition_groups: condition_group_payload[]; }; navigate?: { reference: string; }; parse?: { returns: returns_meta; source: string; }; }[]; reference: string; root_reference: string; else_branch?: { result: object; }; }[]`\n    Expressions available for use in bindings within this template\n  - `title: { literal?: string; reference?: string; }`\n\n- `http_custom_options?: { deduplication_key_path: string; transform_expression: string; }`\n  - `deduplication_key_path: string`\n    JSON path to extract the deduplication key from the payload\n  - `transform_expression: string`\n    JavaScript expression that returns an object with all alert fields\n\n- `jira_options?: { project_ids: string[]; }`\n  - `project_ids: string[]`\n    Which projects in Jira should this alert source watch for new issues? IDs can either be IDs of the projects in Jira, or ID of catalog entries in the 'Jira Project' catalog type.\n\n### Returns\n\n- `{ alert_source: { id: string; name: string; source_type: string; template: object; email_options?: object; http_custom_options?: http_custom_options; jira_options?: jira_options; secret_token?: string; }; }`\n\n  - `alert_source: { id: string; name: string; source_type: string; template: { attributes: { alert_attribute_id: string; binding: engine_param_binding; }[]; description: object; expressions: object[]; title: object; }; email_options?: { email_address: string; }; http_custom_options?: { deduplication_key_path: string; transform_expression: string; }; jira_options?: { project_ids: string[]; }; secret_token?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst alertSource = await client.alertSources.update('01GW2G3V0S59R238FAHPDS1R66', {\n  name: 'Production Web Dashboard Alerts',\n  template: {\n  attributes: [{\n  alert_attribute_id: 'abc123',\n  binding: {},\n}],\n  description: {},\n  expressions: [{\n  label: 'Team Slack channel',\n  operations: [{ operation_type: 'navigate' }],\n  reference: 'abc123',\n  root_reference: 'incident.status',\n}],\n  title: {},\n},\n});\n\nconsole.log(alertSource);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alertSources.update',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst alertSource = await client.alertSources.update('01GW2G3V0S59R238FAHPDS1R66', {\n  name: 'Production Web Dashboard Alerts',\n  template: {\n    attributes: [\n      {\n        alert_attribute_id: 'abc123',\n        binding: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n      },\n    ],\n    description: { literal: 'SEV123', reference: 'incident.severity' },\n    expressions: [\n      {\n        else_branch: {\n          result: {\n            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n            value: { literal: 'SEV123', reference: 'incident.severity' },\n          },\n        },\n        label: 'Team Slack channel',\n        operations: [\n          {\n            branches: {\n              branches: [\n                {\n                  condition_groups: [\n                    {\n                      conditions: [\n                        {\n                          operation: 'one_of',\n                          param_bindings: [\n                            {\n                              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                              value: { literal: 'SEV123', reference: 'incident.severity' },\n                            },\n                          ],\n                          subject: 'incident.severity',\n                        },\n                      ],\n                    },\n                  ],\n                  result: {\n                    array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                    value: { literal: 'SEV123', reference: 'incident.severity' },\n                  },\n                },\n              ],\n              returns: { array: true, type: 'IncidentStatus' },\n            },\n            concatenate: { reference: 'catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]' },\n            filter: {\n              condition_groups: [\n                {\n                  conditions: [\n                    {\n                      operation: 'one_of',\n                      param_bindings: [\n                        {\n                          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                          value: { literal: 'SEV123', reference: 'incident.severity' },\n                        },\n                      ],\n                      subject: 'incident.severity',\n                    },\n                  ],\n                },\n              ],\n            },\n            navigate: { reference: 'catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]' },\n            operation_type: 'navigate',\n            parse: {\n              returns: { array: true, type: 'IncidentStatus' },\n              source: 'metadata.annotations[\"github.com/repo\"]',\n            },\n          },\n        ],\n        reference: 'abc123',\n        root_reference: 'incident.status',\n      },\n    ],\n    title: { literal: 'SEV123', reference: 'incident.severity' },\n  },\n  http_custom_options: {\n    deduplication_key_path: '$.alert_id',\n    transform_expression:\n      \"return {\\n  title: $.title || $.name || 'Unknown Alert',\\n  status: $.status === 'resolved' ? 'resolved' : 'firing',\\n  description: $.description || $.message || '',\\n  sourceURL: $.url || $.link || '',\\n  metadata: { team: $.team, severity: $.severity }\\n}\",\n  },\n  jira_options: { project_ids: ['01GBSQF3FHF7FWZQNWGHAVQ804', '10043'] },\n});\n\nconsole.log(alertSource.alert_source);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alert_sources/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d "{\n          \\"name\\": \\"Production Web Dashboard Alerts\\",\n          \\"template\\": {\n            \\"attributes\\": [\n              {\n                \\"alert_attribute_id\\": \\"abc123\\",\n                \\"binding\\": {\n                  \\"array_value\\": [\n                    {\n                      \\"literal\\": \\"SEV123\\",\n                      \\"reference\\": \\"incident.severity\\"\n                    }\n                  ],\n                  \\"value\\": {\n                    \\"literal\\": \\"SEV123\\",\n                    \\"reference\\": \\"incident.severity\\"\n                  }\n                }\n              }\n            ],\n            \\"description\\": {\n              \\"literal\\": \\"SEV123\\",\n              \\"reference\\": \\"incident.severity\\"\n            },\n            \\"expressions\\": [\n              {\n                \\"label\\": \\"Team Slack channel\\",\n                \\"operations\\": [\n                  {\n                    \\"operation_type\\": \\"navigate\\",\n                    \\"branches\\": {\n                      \\"branches\\": [\n                        {\n                          \\"condition_groups\\": [\n                            {\n                              \\"conditions\\": [\n                                {\n                                  \\"operation\\": \\"one_of\\",\n                                  \\"param_bindings\\": [\n                                    {\n                                      \\"array_value\\": [\n                                        {\n                                          \\"literal\\": \\"SEV123\\",\n                                          \\"reference\\": \\"incident.severity\\"\n                                        }\n                                      ],\n                                      \\"value\\": {\n                                        \\"literal\\": \\"SEV123\\",\n                                        \\"reference\\": \\"incident.severity\\"\n                                      }\n                                    }\n                                  ],\n                                  \\"subject\\": \\"incident.severity\\"\n                                }\n                              ]\n                            }\n                          ],\n                          \\"result\\": {\n                            \\"array_value\\": [\n                              {\n                                \\"literal\\": \\"SEV123\\",\n                                \\"reference\\": \\"incident.severity\\"\n                              }\n                            ],\n                            \\"value\\": {\n                              \\"literal\\": \\"SEV123\\",\n                              \\"reference\\": \\"incident.severity\\"\n                            }\n                          }\n                        }\n                      ],\n                      \\"returns\\": {\n                        \\"array\\": true,\n                        \\"type\\": \\"IncidentStatus\\"\n                      }\n                    },\n                    \\"concatenate\\": {\n                      \\"reference\\": \\"catalog_attribute[\\\\\\"01FCNDV6P870EA6S7TK1DSYD5H\\\\\\"]\\"\n                    },\n                    \\"filter\\": {\n                      \\"condition_groups\\": [\n                        {\n                          \\"conditions\\": [\n                            {\n                              \\"operation\\": \\"one_of\\",\n                              \\"param_bindings\\": [\n                                {\n                                  \\"array_value\\": [\n                                    {\n                                      \\"literal\\": \\"SEV123\\",\n                                      \\"reference\\": \\"incident.severity\\"\n                                    }\n                                  ],\n                                  \\"value\\": {\n                                    \\"literal\\": \\"SEV123\\",\n                                    \\"reference\\": \\"incident.severity\\"\n                                  }\n                                }\n                              ],\n                              \\"subject\\": \\"incident.severity\\"\n                            }\n                          ]\n                        }\n                      ]\n                    },\n                    \\"navigate\\": {\n                      \\"reference\\": \\"catalog_attribute[\\\\\\"01FCNDV6P870EA6S7TK1DSYD5H\\\\\\"]\\"\n                    },\n                    \\"parse\\": {\n                      \\"returns\\": {\n                        \\"array\\": true,\n                        \\"type\\": \\"IncidentStatus\\"\n                      },\n                      \\"source\\": \\"metadata.annotations[\\\\\\"github.com/repo\\\\\\"]\\"\n                    }\n                  }\n                ],\n                \\"reference\\": \\"abc123\\",\n                \\"root_reference\\": \\"incident.status\\",\n                \\"else_branch\\": {\n                  \\"result\\": {\n                    \\"array_value\\": [\n                      {\n                        \\"literal\\": \\"SEV123\\",\n                        \\"reference\\": \\"incident.severity\\"\n                      }\n                    ],\n                    \\"value\\": {\n                      \\"literal\\": \\"SEV123\\",\n                      \\"reference\\": \\"incident.severity\\"\n                    }\n                  }\n                }\n              }\n            ],\n            \\"title\\": {\n              \\"literal\\": \\"SEV123\\",\n              \\"reference\\": \\"incident.severity\\"\n            }\n          },\n          \\"http_custom_options\\": {\n            \\"deduplication_key_path\\": \\"\\$.alert_id\\",\n            \\"transform_expression\\": \\"return {\\\\n  title: \\$.title || \\$.name || \'Unknown Alert\',\\\\n  status: \\$.status === \'resolved\' ? \'resolved\' : \'firing\',\\\\n  description: \\$.description || \\$.message || \'\',\\\\n  sourceURL: \\$.url || \\$.link || \'\',\\\\n  metadata: { team: \\$.team, severity: \\$.severity }\\\\n}\\"\n          },\n          \\"jira_options\\": {\n            \\"project_ids\\": [\n              \\"01GBSQF3FHF7FWZQNWGHAVQ804\\",\n              \\"10043\\"\n            ]\n          }\n        }"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v2/alerts',
    httpMethod: 'get',
    summary: 'List Alerts V2',
    description:
      "List all alerts for your account.\n\t\t\nThis endpoint supports a number of filters, which can help find alerts matching certain\ncriteria. These filters work similarly to the filters on the incidents endpoint, where \na field is specified alongside a comparison operator in the query string.\n\nNote that:\n- Filters may be used together, and the result will be alerts that match all filters.\n- All query parameters must be URI encoded.\n\n### By deduplication_key\n\nFind all alerts with deduplication_key ABC:\n\n\t\tcurl --get 'https://api.incident.io/v2/alerts' \\\n\t\t\t--data 'deduplication_key[is]=ABC'\n\n### By status\n\nFind all alerts in a firing state:\n\n\t\tcurl --get 'https://api.incident.io/v2/alerts' \\\n\t\t\t--data 'status[one_of]=firing'\n\n### By created_at\nFind all alerts that follow specified date parameters for created_at field.\nPossible values are \"gte\" (greater than or equal to), \"lte\" (less than or equal to), and \n\"date_range\" (between two dates). The following example finds all alerts created after \n2025-01-01:\n\n\t\tcurl --get 'https://api.incident.io/v2/alerts' \\\n\t\t\t--data 'created_at[gte]=2025-01-01'\n\nTo find alerts created within a specific date range, use the date_range option with \ntilde-separated dates:\n\n\t\tcurl --get 'https://api.incident.io/v2/alerts' \\\n\t\t\t--data 'created_at[date_range]=2024-12-02~2024-12-08'\n\t\t",
    stainlessPath: '(resource) alerts > (method) list',
    qualified: 'client.alerts.list',
    params: [
      'page_size: number;',
      'after?: string;',
      'created_at?: object;',
      'deduplication_key?: object;',
      'status?: object;',
    ],
    response:
      "{ alerts: { id: string; alert_source_id: string; attributes: object[]; created_at: string; deduplication_key: string; status: 'firing' | 'resolved'; title: string; updated_at: string; description?: string; resolved_at?: string; source_url?: string; }[]; pagination_meta: { page_size: number; after?: string; }; }",
    markdown:
      "## list\n\n`client.alerts.list(page_size: number, after?: string, created_at?: object, deduplication_key?: object, status?: object): { alerts: alert_v2[]; pagination_meta: pagination_meta_result; }`\n\n**get** `/v2/alerts`\n\nList all alerts for your account.\n\t\t\nThis endpoint supports a number of filters, which can help find alerts matching certain\ncriteria. These filters work similarly to the filters on the incidents endpoint, where \na field is specified alongside a comparison operator in the query string.\n\nNote that:\n- Filters may be used together, and the result will be alerts that match all filters.\n- All query parameters must be URI encoded.\n\n### By deduplication_key\n\nFind all alerts with deduplication_key ABC:\n\n\t\tcurl --get 'https://api.incident.io/v2/alerts' \\\n\t\t\t--data 'deduplication_key[is]=ABC'\n\n### By status\n\nFind all alerts in a firing state:\n\n\t\tcurl --get 'https://api.incident.io/v2/alerts' \\\n\t\t\t--data 'status[one_of]=firing'\n\n### By created_at\nFind all alerts that follow specified date parameters for created_at field.\nPossible values are \"gte\" (greater than or equal to), \"lte\" (less than or equal to), and \n\"date_range\" (between two dates). The following example finds all alerts created after \n2025-01-01:\n\n\t\tcurl --get 'https://api.incident.io/v2/alerts' \\\n\t\t\t--data 'created_at[gte]=2025-01-01'\n\nTo find alerts created within a specific date range, use the date_range option with \ntilde-separated dates:\n\n\t\tcurl --get 'https://api.incident.io/v2/alerts' \\\n\t\t\t--data 'created_at[date_range]=2024-12-02~2024-12-08'\n\t\t\n\n### Parameters\n\n- `page_size: number`\n  Number of alerts to return per page\n\n- `after?: string`\n  If provided, pass this as the 'after' param to load the next page\n\n- `created_at?: object`\n  Filter on alert created at timestamp. Accepted operators are 'gte', 'lte' and 'date_range'.\n\n- `deduplication_key?: object`\n  Filter on alert deduplication key. The accepted operator is 'is'.\n\n- `status?: object`\n  Filter on alert status. The accepted operators are 'one_of', or 'not_in'.\n\n### Returns\n\n- `{ alerts: { id: string; alert_source_id: string; attributes: object[]; created_at: string; deduplication_key: string; status: 'firing' | 'resolved'; title: string; updated_at: string; description?: string; resolved_at?: string; source_url?: string; }[]; pagination_meta: { page_size: number; after?: string; }; }`\n\n  - `alerts: { id: string; alert_source_id: string; attributes: { attribute: object; array_value?: object[]; value?: object; }[]; created_at: string; deduplication_key: string; status: 'firing' | 'resolved'; title: string; updated_at: string; description?: string; resolved_at?: string; source_url?: string; }[]`\n  - `pagination_meta: { page_size: number; after?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst alerts = await client.alerts.list({ page_size: 25 });\n\nconsole.log(alerts);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alerts.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst alerts = await client.alerts.list({ page_size: 25 });\n\nconsole.log(alerts.alerts);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alerts \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v2/alerts/{id}',
    httpMethod: 'get',
    summary: 'Show Alerts V2',
    description: 'Show a single alert for your account',
    stainlessPath: '(resource) alerts > (method) retrieve',
    qualified: 'client.alerts.retrieve',
    params: ['id: string;'],
    response:
      "{ alert: { id: string; alert_source_id: string; attributes: object[]; created_at: string; deduplication_key: string; status: 'firing' | 'resolved'; title: string; updated_at: string; description?: string; resolved_at?: string; source_url?: string; }; }",
    markdown:
      "## retrieve\n\n`client.alerts.retrieve(id: string): { alert: alert_v2; }`\n\n**get** `/v2/alerts/{id}`\n\nShow a single alert for your account\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the alert\n\n### Returns\n\n- `{ alert: { id: string; alert_source_id: string; attributes: object[]; created_at: string; deduplication_key: string; status: 'firing' | 'resolved'; title: string; updated_at: string; description?: string; resolved_at?: string; source_url?: string; }; }`\n\n  - `alert: { id: string; alert_source_id: string; attributes: { attribute: object; array_value?: object[]; value?: object; }[]; created_at: string; deduplication_key: string; status: 'firing' | 'resolved'; title: string; updated_at: string; description?: string; resolved_at?: string; source_url?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst alert = await client.alerts.retrieve('01FDAG4SAP5TYPT98WGR2N7W91');\n\nconsole.log(alert);\n```",
    perLanguage: {
      typescript: {
        method: 'client.alerts.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst alert = await client.alerts.retrieve('01FDAG4SAP5TYPT98WGR2N7W91');\n\nconsole.log(alert.alert);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/alerts/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list_entries_v2',
    endpoint: '/v2/catalog_entries',
    httpMethod: 'get',
    summary: 'ListEntries Catalog V2',
    description: 'List entries for a catalog type.',
    stainlessPath: '(resource) catalog_entries > (method) list_entries_v2',
    qualified: 'client.catalogEntries.listEntriesV2',
    params: ['catalog_type_id: string;', 'after?: string;', 'page_size?: number;'],
    response:
      "{ catalog_entries: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }[]; catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; semantic_type: string; type_name: string; updated_at: string; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; pagination_meta: { page_size: number; after?: string; }; }",
    markdown:
      "## list_entries_v2\n\n`client.catalogEntries.listEntriesV2(catalog_type_id: string, after?: string, page_size?: number): { catalog_entries: catalog_entry_v2[]; catalog_type: catalog_type_v2; pagination_meta: pagination_meta_result; }`\n\n**get** `/v2/catalog_entries`\n\nList entries for a catalog type.\n\n### Parameters\n\n- `catalog_type_id: string`\n  ID of this catalog type\n\n- `after?: string`\n  An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.\n\n- `page_size?: number`\n  Integer number of records to return\n\n### Returns\n\n- `{ catalog_entries: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }[]; catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; semantic_type: string; type_name: string; updated_at: string; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; pagination_meta: { page_size: number; after?: string; }; }`\n\n  - `catalog_entries: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }[]`\n  - `catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: { attributes: { id: string; array: boolean; mode: '' | 'manual' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path'; name: string; type: string; backlink_attribute?: string; path?: object[]; }[]; version: number; }; semantic_type: string; type_name: string; updated_at: string; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }`\n  - `pagination_meta: { page_size: number; after?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.catalogEntries.listEntriesV2({ catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0' });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogEntries.listEntriesV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.catalogEntries.listEntriesV2({\n  catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n});\n\nconsole.log(response.catalog_entries);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/catalog_entries \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create_entry_v2',
    endpoint: '/v2/catalog_entries',
    httpMethod: 'post',
    summary: 'CreateEntry Catalog V2',
    description:
      'Create an entry within the catalog. We support a maximum of 50,000 entries per type.\n\nIf you call this API with a payload where the external_id and catalog_type_id match an existing entry, the existing entry will be updated.',
    stainlessPath: '(resource) catalog_entries > (method) create_entry_v2',
    qualified: 'client.catalogEntries.createEntryV2',
    params: [
      'attribute_values: object;',
      'catalog_type_id: string;',
      'name: string;',
      'aliases?: string[];',
      'external_id?: string;',
      'rank?: number;',
    ],
    response:
      '{ catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }; }',
    markdown:
      "## create_entry_v2\n\n`client.catalogEntries.createEntryV2(attribute_values: object, catalog_type_id: string, name: string, aliases?: string[], external_id?: string, rank?: number): { catalog_entry: catalog_entry_v2; }`\n\n**post** `/v2/catalog_entries`\n\nCreate an entry within the catalog. We support a maximum of 50,000 entries per type.\n\nIf you call this API with a payload where the external_id and catalog_type_id match an existing entry, the existing entry will be updated.\n\n### Parameters\n\n- `attribute_values: object`\n  Values of this entry\n\n- `catalog_type_id: string`\n  ID of this catalog type\n\n- `name: string`\n  Name is the human readable name of this entry\n\n- `aliases?: string[]`\n  Optional aliases that can be used to reference this entry\n\n- `external_id?: string`\n  An optional alternative ID for this entry, which is ensured to be unique for the type\n\n- `rank?: number`\n  When catalog type is ranked, this is used to help order things\n\n### Returns\n\n- `{ catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }; }`\n\n  - `catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.catalogEntries.createEntryV2({\n  attribute_values: { abc123: {} },\n  catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n  name: 'Primary On-call',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogEntries.createEntryV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.catalogEntries.createEntryV2({\n  attribute_values: {\n    abc123: {\n      array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n      value: { literal: 'SEV123', reference: 'incident.severity' },\n    },\n  },\n  catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n  name: 'Primary On-call',\n  aliases: ['lawrence@incident.io', 'lawrence'],\n  external_id: '761722cd-d1d7-477b-ac7e-90f9e079dc33',\n  rank: 3,\n});\n\nconsole.log(response.catalog_entry);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/catalog_entries \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "attribute_values": {\n            "abc123": {\n              "array_value": [\n                {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              ],\n              "value": {\n                "literal": "SEV123",\n                "reference": "incident.severity"\n              }\n            }\n          },\n          "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",\n          "name": "Primary On-call",\n          "aliases": [\n            "lawrence@incident.io",\n            "lawrence"\n          ],\n          "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33",\n          "rank": 3\n        }\'',
      },
    },
  },
  {
    name: 'destroy_entry_v2',
    endpoint: '/v2/catalog_entries/{id}',
    httpMethod: 'delete',
    summary: 'DestroyEntry Catalog V2',
    description: 'Archives a catalog entry.',
    stainlessPath: '(resource) catalog_entries > (method) destroy_entry_v2',
    qualified: 'client.catalogEntries.destroyEntryV2',
    params: ['id: string;'],
    markdown:
      "## destroy_entry_v2\n\n`client.catalogEntries.destroyEntryV2(id: string): void`\n\n**delete** `/v2/catalog_entries/{id}`\n\nArchives a catalog entry.\n\n### Parameters\n\n- `id: string`\n  ID of this catalog entry\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.catalogEntries.destroyEntryV2('01FCNDV6P870EA6S7TK1DSYDG0')\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogEntries.destroyEntryV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.catalogEntries.destroyEntryV2('01FCNDV6P870EA6S7TK1DSYDG0');",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/catalog_entries/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'show_entry_v2',
    endpoint: '/v2/catalog_entries/{id}',
    httpMethod: 'get',
    summary: 'ShowEntry Catalog V2',
    description: 'Show a single catalog entry.',
    stainlessPath: '(resource) catalog_entries > (method) show_entry_v2',
    qualified: 'client.catalogEntries.showEntryV2',
    params: ['id: string;'],
    response:
      "{ catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }; catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; semantic_type: string; type_name: string; updated_at: string; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }",
    markdown:
      "## show_entry_v2\n\n`client.catalogEntries.showEntryV2(id: string): { catalog_entry: catalog_entry_v2; catalog_type: catalog_type_v2; }`\n\n**get** `/v2/catalog_entries/{id}`\n\nShow a single catalog entry.\n\n### Parameters\n\n- `id: string`\n  ID of this catalog entry\n\n### Returns\n\n- `{ catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }; catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; semantic_type: string; type_name: string; updated_at: string; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }`\n\n  - `catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }`\n  - `catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: { attributes: { id: string; array: boolean; mode: '' | 'manual' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path'; name: string; type: string; backlink_attribute?: string; path?: object[]; }[]; version: number; }; semantic_type: string; type_name: string; updated_at: string; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.catalogEntries.showEntryV2('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogEntries.showEntryV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.catalogEntries.showEntryV2('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(response.catalog_entry);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/catalog_entries/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update_entry_v2',
    endpoint: '/v2/catalog_entries/{id}',
    httpMethod: 'put',
    summary: 'UpdateEntry Catalog V2',
    description: 'Updates an existing catalog entry.',
    stainlessPath: '(resource) catalog_entries > (method) update_entry_v2',
    qualified: 'client.catalogEntries.updateEntryV2',
    params: [
      'id: string;',
      'attribute_values: object;',
      'name: string;',
      'aliases?: string[];',
      'external_id?: string;',
      'rank?: number;',
    ],
    response:
      "{ catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }; catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; semantic_type: string; type_name: string; updated_at: string; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }",
    markdown:
      "## update_entry_v2\n\n`client.catalogEntries.updateEntryV2(id: string, attribute_values: object, name: string, aliases?: string[], external_id?: string, rank?: number): { catalog_entry: catalog_entry_v2; catalog_type: catalog_type_v2; }`\n\n**put** `/v2/catalog_entries/{id}`\n\nUpdates an existing catalog entry.\n\n### Parameters\n\n- `id: string`\n  ID of this catalog entry\n\n- `attribute_values: object`\n  Values of this entry\n\n- `name: string`\n  Name is the human readable name of this entry\n\n- `aliases?: string[]`\n  Optional aliases that can be used to reference this entry\n\n- `external_id?: string`\n  An optional alternative ID for this entry, which is ensured to be unique for the type\n\n- `rank?: number`\n  When catalog type is ranked, this is used to help order things\n\n### Returns\n\n- `{ catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }; catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; semantic_type: string; type_name: string; updated_at: string; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }`\n\n  - `catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }`\n  - `catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: { attributes: { id: string; array: boolean; mode: '' | 'manual' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path'; name: string; type: string; backlink_attribute?: string; path?: object[]; }[]; version: number; }; semantic_type: string; type_name: string; updated_at: string; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.catalogEntries.updateEntryV2('01FCNDV6P870EA6S7TK1DSYDG0', {\n  attribute_values: { abc123: {} },\n  name: 'Primary On-call',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogEntries.updateEntryV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.catalogEntries.updateEntryV2('01FCNDV6P870EA6S7TK1DSYDG0', {\n  attribute_values: {\n    abc123: {\n      array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n      value: { literal: 'SEV123', reference: 'incident.severity' },\n    },\n  },\n  name: 'Primary On-call',\n  aliases: ['lawrence@incident.io', 'lawrence'],\n  external_id: '761722cd-d1d7-477b-ac7e-90f9e079dc33',\n  rank: 3,\n});\n\nconsole.log(response.catalog_entry);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/catalog_entries/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "attribute_values": {\n            "abc123": {\n              "array_value": [\n                {\n                  "literal": "SEV123",\n                  "reference": "incident.severity"\n                }\n              ],\n              "value": {\n                "literal": "SEV123",\n                "reference": "incident.severity"\n              }\n            }\n          },\n          "name": "Primary On-call",\n          "aliases": [\n            "lawrence@incident.io",\n            "lawrence"\n          ],\n          "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33",\n          "rank": 3\n        }\'',
      },
    },
  },
  {
    name: 'list_entries_v3',
    endpoint: '/v3/catalog_entries',
    httpMethod: 'get',
    summary: 'ListEntries Catalog V3',
    description: 'List entries for a catalog type.',
    stainlessPath: '(resource) catalog_entries > (method) list_entries_v3',
    qualified: 'client.catalogEntries.listEntriesV3',
    params: ['catalog_type_id: string;', 'page_size: number;', 'after?: string;', 'identifier?: string;'],
    response:
      "{ catalog_entries: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }[]; catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; pagination_meta: { page_size: number; after?: string; }; }",
    markdown:
      "## list_entries_v3\n\n`client.catalogEntries.listEntriesV3(catalog_type_id: string, page_size: number, after?: string, identifier?: string): { catalog_entries: catalog_entry_v3[]; catalog_type: catalog_type_v3; pagination_meta: object; }`\n\n**get** `/v3/catalog_entries`\n\nList entries for a catalog type.\n\n### Parameters\n\n- `catalog_type_id: string`\n  ID of this catalog type\n\n- `page_size: number`\n  The integer number of records to return\n\n- `after?: string`\n  An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.\n\n- `identifier?: string`\n  If specified, only entries with this identifier will be returned. This will search by ID, external ID, and aliases.\n\nIf 'use name as identifier' is enabled for the catalog type, this will also match on name.\n\n### Returns\n\n- `{ catalog_entries: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }[]; catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; pagination_meta: { page_size: number; after?: string; }; }`\n\n  - `catalog_entries: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }[]`\n  - `catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: { attributes: { id: string; array: boolean; mode: '' | 'api' | 'dashboard' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path'; name: string; type: string; backlink_attribute?: string; path?: object[]; }[]; version: number; }; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }`\n  - `pagination_meta: { page_size: number; after?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.catalogEntries.listEntriesV3({ catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0', page_size: 25 });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogEntries.listEntriesV3',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.catalogEntries.listEntriesV3({\n  catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n  page_size: 25,\n});\n\nconsole.log(response.catalog_entries);",
      },
      http: {
        example:
          'curl https://api.incident.io/v3/catalog_entries \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create_entry_v3',
    endpoint: '/v3/catalog_entries',
    httpMethod: 'post',
    summary: 'CreateEntry Catalog V3',
    description:
      'Create an entry within the catalog. We support a maximum of 50,000 entries per type.\n\nIf you call this API with a payload where the external_id and catalog_type_id match an existing entry, the existing entry will be updated.',
    stainlessPath: '(resource) catalog_entries > (method) create_entry_v3',
    qualified: 'client.catalogEntries.createEntryV3',
    params: [
      'attribute_values: object;',
      'catalog_type_id: string;',
      'name: string;',
      'aliases?: string[];',
      'external_id?: string;',
      'rank?: number;',
    ],
    response:
      '{ catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }; }',
    markdown:
      "## create_entry_v3\n\n`client.catalogEntries.createEntryV3(attribute_values: object, catalog_type_id: string, name: string, aliases?: string[], external_id?: string, rank?: number): { catalog_entry: catalog_entry_v3; }`\n\n**post** `/v3/catalog_entries`\n\nCreate an entry within the catalog. We support a maximum of 50,000 entries per type.\n\nIf you call this API with a payload where the external_id and catalog_type_id match an existing entry, the existing entry will be updated.\n\n### Parameters\n\n- `attribute_values: object`\n  Values of this entry\n\n- `catalog_type_id: string`\n  ID of this catalog type\n\n- `name: string`\n  Name is the human readable name of this entry\n\n- `aliases?: string[]`\n  Optional aliases that can be used to reference this entry\n\n- `external_id?: string`\n  An optional alternative ID for this entry, which is ensured to be unique for the type\n\n- `rank?: number`\n  When catalog type is ranked, this is used to help order things\n\n### Returns\n\n- `{ catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }; }`\n\n  - `catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.catalogEntries.createEntryV3({\n  attribute_values: { abc123: {} },\n  catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n  name: 'Primary On-call',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogEntries.createEntryV3',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.catalogEntries.createEntryV3({\n  attribute_values: {\n    abc123: {\n      array_value: [{ literal: 'SEV123' }],\n      value: { literal: 'SEV123' },\n    },\n  },\n  catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n  name: 'Primary On-call',\n  aliases: ['lawrence@incident.io', 'lawrence'],\n  external_id: '761722cd-d1d7-477b-ac7e-90f9e079dc33',\n  rank: 3,\n});\n\nconsole.log(response.catalog_entry);",
      },
      http: {
        example:
          'curl https://api.incident.io/v3/catalog_entries \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "attribute_values": {\n            "abc123": {\n              "array_value": [\n                {\n                  "literal": "SEV123"\n                }\n              ],\n              "value": {\n                "literal": "SEV123"\n              }\n            }\n          },\n          "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",\n          "name": "Primary On-call",\n          "aliases": [\n            "lawrence@incident.io",\n            "lawrence"\n          ],\n          "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33",\n          "rank": 3\n        }\'',
      },
    },
  },
  {
    name: 'destroy_entry_v3',
    endpoint: '/v3/catalog_entries/{id}',
    httpMethod: 'delete',
    summary: 'DestroyEntry Catalog V3',
    description: 'Archives a catalog entry.',
    stainlessPath: '(resource) catalog_entries > (method) destroy_entry_v3',
    qualified: 'client.catalogEntries.destroyEntryV3',
    params: ['id: string;'],
    markdown:
      "## destroy_entry_v3\n\n`client.catalogEntries.destroyEntryV3(id: string): void`\n\n**delete** `/v3/catalog_entries/{id}`\n\nArchives a catalog entry.\n\n### Parameters\n\n- `id: string`\n  ID of this catalog entry\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.catalogEntries.destroyEntryV3('01FCNDV6P870EA6S7TK1DSYDG0')\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogEntries.destroyEntryV3',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.catalogEntries.destroyEntryV3('01FCNDV6P870EA6S7TK1DSYDG0');",
      },
      http: {
        example:
          'curl https://api.incident.io/v3/catalog_entries/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'show_entry_v3',
    endpoint: '/v3/catalog_entries/{id}',
    httpMethod: 'get',
    summary: 'ShowEntry Catalog V3',
    description: 'Show a single catalog entry.',
    stainlessPath: '(resource) catalog_entries > (method) show_entry_v3',
    qualified: 'client.catalogEntries.showEntryV3',
    params: ['id: string;'],
    response:
      "{ catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }; catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }",
    markdown:
      "## show_entry_v3\n\n`client.catalogEntries.showEntryV3(id: string): { catalog_entry: catalog_entry_v3; catalog_type: catalog_type_v3; }`\n\n**get** `/v3/catalog_entries/{id}`\n\nShow a single catalog entry.\n\n### Parameters\n\n- `id: string`\n  ID of this catalog entry\n\n### Returns\n\n- `{ catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }; catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }`\n\n  - `catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }`\n  - `catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: { attributes: { id: string; array: boolean; mode: '' | 'api' | 'dashboard' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path'; name: string; type: string; backlink_attribute?: string; path?: object[]; }[]; version: number; }; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.catalogEntries.showEntryV3('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogEntries.showEntryV3',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.catalogEntries.showEntryV3('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(response.catalog_entry);",
      },
      http: {
        example:
          'curl https://api.incident.io/v3/catalog_entries/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update_entry_v3',
    endpoint: '/v3/catalog_entries/{id}',
    httpMethod: 'put',
    summary: 'UpdateEntry Catalog V3',
    description: 'Updates an existing catalog entry.',
    stainlessPath: '(resource) catalog_entries > (method) update_entry_v3',
    qualified: 'client.catalogEntries.updateEntryV3',
    params: [
      'id: string;',
      'attribute_values: object;',
      'name: string;',
      'aliases?: string[];',
      'external_id?: string;',
      'rank?: number;',
      'update_attributes?: string[];',
    ],
    response:
      "{ catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }; catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }",
    markdown:
      "## update_entry_v3\n\n`client.catalogEntries.updateEntryV3(id: string, attribute_values: object, name: string, aliases?: string[], external_id?: string, rank?: number, update_attributes?: string[]): { catalog_entry: catalog_entry_v3; catalog_type: catalog_type_v3; }`\n\n**put** `/v3/catalog_entries/{id}`\n\nUpdates an existing catalog entry.\n\n### Parameters\n\n- `id: string`\n  ID of this catalog entry\n\n- `attribute_values: object`\n  Values of this entry\n\n- `name: string`\n  Name is the human readable name of this entry\n\n- `aliases?: string[]`\n  Optional aliases that can be used to reference this entry\n\n- `external_id?: string`\n  An optional alternative ID for this entry, which is ensured to be unique for the type\n\n- `rank?: number`\n  When catalog type is ranked, this is used to help order things\n\n- `update_attributes?: string[]`\n  If provided, only update these attribute_values keys. If not provided, update all attribute values.\nIf you specify an attribute key that's not in your payload, the associated attribute value will be cleared.\n\n### Returns\n\n- `{ catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }; catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }`\n\n  - `catalog_entry: { id: string; aliases: string[]; attribute_values: object; catalog_type_id: string; created_at: string; name: string; rank: number; updated_at: string; archived_at?: string; external_id?: string; }`\n  - `catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: { attributes: { id: string; array: boolean; mode: '' | 'api' | 'dashboard' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path'; name: string; type: string; backlink_attribute?: string; path?: object[]; }[]; version: number; }; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.catalogEntries.updateEntryV3('01FCNDV6P870EA6S7TK1DSYDG0', {\n  attribute_values: { abc123: {} },\n  name: 'Primary On-call',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogEntries.updateEntryV3',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.catalogEntries.updateEntryV3('01FCNDV6P870EA6S7TK1DSYDG0', {\n  attribute_values: {\n    abc123: {\n      array_value: [{ literal: 'SEV123' }],\n      value: { literal: 'SEV123' },\n    },\n  },\n  name: 'Primary On-call',\n  aliases: ['lawrence@incident.io', 'lawrence'],\n  external_id: '761722cd-d1d7-477b-ac7e-90f9e079dc33',\n  rank: 3,\n  update_attributes: ['abc123'],\n});\n\nconsole.log(response.catalog_entry);",
      },
      http: {
        example:
          'curl https://api.incident.io/v3/catalog_entries/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "attribute_values": {\n            "abc123": {\n              "array_value": [\n                {\n                  "literal": "SEV123"\n                }\n              ],\n              "value": {\n                "literal": "SEV123"\n              }\n            }\n          },\n          "name": "Primary On-call",\n          "aliases": [\n            "lawrence@incident.io",\n            "lawrence"\n          ],\n          "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33",\n          "rank": 3,\n          "update_attributes": [\n            "abc123"\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'list_v2',
    endpoint: '/v2/catalog_resources',
    httpMethod: 'get',
    summary: 'ListResources Catalog V2',
    description:
      'List available engine resources for the catalog.\n\nA resource represents a type of data that can be held within the catalog, so this\nendpoint can be used to see what attribute types can be used when updating the\nschema of a catalog type.\n',
    stainlessPath: '(resource) catalog_resources > (method) list_v2',
    qualified: 'client.catalogResources.listV2',
    response:
      "{ resources: { category: 'primitive' | 'custom' | 'external'; description: string; label: string; type: string; value_docstring: string; }[]; }",
    markdown:
      "## list_v2\n\n`client.catalogResources.listV2(): { resources: object[]; }`\n\n**get** `/v2/catalog_resources`\n\nList available engine resources for the catalog.\n\nA resource represents a type of data that can be held within the catalog, so this\nendpoint can be used to see what attribute types can be used when updating the\nschema of a catalog type.\n\n\n### Returns\n\n- `{ resources: { category: 'primitive' | 'custom' | 'external'; description: string; label: string; type: string; value_docstring: string; }[]; }`\n\n  - `resources: { category: 'primitive' | 'custom' | 'external'; description: string; label: string; type: string; value_docstring: string; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.catalogResources.listV2();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogResources.listV2',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.catalogResources.listV2();\n\nconsole.log(response.resources);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/catalog_resources \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list_v3',
    endpoint: '/v3/catalog_resources',
    httpMethod: 'get',
    summary: 'ListResources Catalog V3',
    description:
      'List available engine resources for the catalog.\n\nA resource represents a type of data that can be held within the catalog, so this\nendpoint can be used to see what attribute types can be used when updating the\nschema of a catalog type.\n',
    stainlessPath: '(resource) catalog_resources > (method) list_v3',
    qualified: 'client.catalogResources.listV3',
    response:
      "{ resources: { category: 'primitive' | 'custom' | 'external'; description: string; label: string; type: string; value_docstring: string; }[]; }",
    markdown:
      "## list_v3\n\n`client.catalogResources.listV3(): { resources: object[]; }`\n\n**get** `/v3/catalog_resources`\n\nList available engine resources for the catalog.\n\nA resource represents a type of data that can be held within the catalog, so this\nendpoint can be used to see what attribute types can be used when updating the\nschema of a catalog type.\n\n\n### Returns\n\n- `{ resources: { category: 'primitive' | 'custom' | 'external'; description: string; label: string; type: string; value_docstring: string; }[]; }`\n\n  - `resources: { category: 'primitive' | 'custom' | 'external'; description: string; label: string; type: string; value_docstring: string; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.catalogResources.listV3();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogResources.listV3',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.catalogResources.listV3();\n\nconsole.log(response.resources);",
      },
      http: {
        example:
          'curl https://api.incident.io/v3/catalog_resources \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v3/catalog_types',
    httpMethod: 'get',
    summary: 'ListTypes Catalog V3',
    description:
      'List all catalog types for an organisation, including those synced from external resources.',
    stainlessPath: '(resource) catalog_types > (method) list',
    qualified: 'client.catalogTypes.list',
    response:
      "{ catalog_types: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }[]; }",
    markdown:
      "## list\n\n`client.catalogTypes.list(): { catalog_types: catalog_type_v3[]; }`\n\n**get** `/v3/catalog_types`\n\nList all catalog types for an organisation, including those synced from external resources.\n\n### Returns\n\n- `{ catalog_types: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }[]; }`\n\n  - `catalog_types: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: { attributes: { id: string; array: boolean; mode: '' | 'api' | 'dashboard' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path'; name: string; type: string; backlink_attribute?: string; path?: object[]; }[]; version: number; }; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst catalogTypes = await client.catalogTypes.list();\n\nconsole.log(catalogTypes);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogTypes.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst catalogTypes = await client.catalogTypes.list();\n\nconsole.log(catalogTypes.catalog_types);",
      },
      http: {
        example:
          'curl https://api.incident.io/v3/catalog_types \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v3/catalog_types',
    httpMethod: 'post',
    summary: 'CreateType Catalog V3',
    description: 'Create a catalog type. The schema must be updated using the UpdateTypeSchema endpoint.',
    stainlessPath: '(resource) catalog_types > (method) create',
    qualified: 'client.catalogTypes.create',
    params: [
      'description: string;',
      'name: string;',
      'annotations?: object;',
      "categories?: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[];",
      "color?: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange';",
      'icon?: string;',
      'ranked?: boolean;',
      'source_repo_url?: string;',
      'type_name?: string;',
      'use_name_as_identifier?: boolean;',
    ],
    response:
      "{ catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }",
    markdown:
      "## create\n\n`client.catalogTypes.create(description: string, name: string, annotations?: object, categories?: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[], color?: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange', icon?: string, ranked?: boolean, source_repo_url?: string, type_name?: string, use_name_as_identifier?: boolean): { catalog_type: catalog_type_v3; }`\n\n**post** `/v3/catalog_types`\n\nCreate a catalog type. The schema must be updated using the UpdateTypeSchema endpoint.\n\n### Parameters\n\n- `description: string`\n  Human readble description of this type\n\n- `name: string`\n  Name is the human readable name of this type\n\n- `annotations?: object`\n  Annotations that can track metadata about this type\n\n- `categories?: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]`\n  What categories is this type considered part of\n\n- `color?: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'`\n  Sets the display color of this type in the dashboard\n\n- `icon?: string`\n  Sets the display icon of this type in the dashboard\n\n- `ranked?: boolean`\n  If this type should be ranked\n\n- `source_repo_url?: string`\n  The url of the external repository where this type is managed\n\n- `type_name?: string`\n  The type name of this catalog type, to be used when defining attributes. This is immutable once a CatalogType has been created. For non-externally sync types, it must follow the pattern Custom[\"SomeName\"]\n\n- `use_name_as_identifier?: boolean`\n  If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases.\n\n### Returns\n\n- `{ catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }`\n\n  - `catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: { attributes: { id: string; array: boolean; mode: '' | 'api' | 'dashboard' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path'; name: string; type: string; backlink_attribute?: string; path?: object[]; }[]; version: number; }; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst catalogType = await client.catalogTypes.create({ description: 'Represents Kubernetes clusters that we run inside of GKE.', name: 'Kubernetes Cluster' });\n\nconsole.log(catalogType);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogTypes.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst catalogType = await client.catalogTypes.create({\n  description: 'Represents Kubernetes clusters that we run inside of GKE.',\n  name: 'Kubernetes Cluster',\n  annotations: { 'incident.io/catalog-importer/id': 'id-of-config' },\n  categories: ['customer'],\n  color: 'yellow',\n  icon: 'alert',\n  ranked: true,\n  source_repo_url: 'https://github.com/my-company/incident-io-catalog',\n  type_name: 'Custom[\"BackstageGroup\"]',\n  use_name_as_identifier: true,\n});\n\nconsole.log(catalogType.catalog_type);",
      },
      http: {
        example:
          'curl https://api.incident.io/v3/catalog_types \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "description": "Represents Kubernetes clusters that we run inside of GKE.",\n          "name": "Kubernetes Cluster",\n          "annotations": {\n            "incident.io/catalog-importer/id": "id-of-config"\n          },\n          "categories": [\n            "customer"\n          ],\n          "color": "yellow",\n          "icon": "alert",\n          "ranked": true,\n          "source_repo_url": "https://github.com/my-company/incident-io-catalog",\n          "type_name": "Custom[\\\\"BackstageGroup\\\\"]",\n          "use_name_as_identifier": true\n        }\'',
      },
    },
  },
  {
    name: 'destroy',
    endpoint: '/v3/catalog_types/{id}',
    httpMethod: 'delete',
    summary: 'DestroyType Catalog V3',
    description: 'Archives a catalog type and associated entries.',
    stainlessPath: '(resource) catalog_types > (method) destroy',
    qualified: 'client.catalogTypes.destroy',
    params: ['id: string;'],
    markdown:
      "## destroy\n\n`client.catalogTypes.destroy(id: string): void`\n\n**delete** `/v3/catalog_types/{id}`\n\nArchives a catalog type and associated entries.\n\n### Parameters\n\n- `id: string`\n  ID of this catalog type\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.catalogTypes.destroy('01FCNDV6P870EA6S7TK1DSYDG0')\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogTypes.destroy',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.catalogTypes.destroy('01FCNDV6P870EA6S7TK1DSYDG0');",
      },
      http: {
        example:
          'curl https://api.incident.io/v3/catalog_types/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v3/catalog_types/{id}',
    httpMethod: 'get',
    summary: 'ShowType Catalog V3',
    description: 'Show a single catalog type.',
    stainlessPath: '(resource) catalog_types > (method) retrieve',
    qualified: 'client.catalogTypes.retrieve',
    params: ['id: string;'],
    response:
      "{ catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }",
    markdown:
      "## retrieve\n\n`client.catalogTypes.retrieve(id: string): { catalog_type: catalog_type_v3; }`\n\n**get** `/v3/catalog_types/{id}`\n\nShow a single catalog type.\n\n### Parameters\n\n- `id: string`\n  ID of this catalog type\n\n### Returns\n\n- `{ catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }`\n\n  - `catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: { attributes: { id: string; array: boolean; mode: '' | 'api' | 'dashboard' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path'; name: string; type: string; backlink_attribute?: string; path?: object[]; }[]; version: number; }; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst catalogType = await client.catalogTypes.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(catalogType);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogTypes.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst catalogType = await client.catalogTypes.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(catalogType.catalog_type);",
      },
      http: {
        example:
          'curl https://api.incident.io/v3/catalog_types/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v3/catalog_types/{id}',
    httpMethod: 'put',
    summary: 'UpdateType Catalog V3',
    description:
      'Updates an existing catalog type. The schema must be updated using the UpdateTypeSchema endpoint.',
    stainlessPath: '(resource) catalog_types > (method) update',
    qualified: 'client.catalogTypes.update',
    params: [
      'id: string;',
      'description: string;',
      'name: string;',
      'annotations?: object;',
      "categories?: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[];",
      "color?: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange';",
      'icon?: string;',
      'ranked?: boolean;',
      'source_repo_url?: string;',
      'use_name_as_identifier?: boolean;',
    ],
    response:
      "{ catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }",
    markdown:
      "## update\n\n`client.catalogTypes.update(id: string, description: string, name: string, annotations?: object, categories?: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[], color?: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange', icon?: string, ranked?: boolean, source_repo_url?: string, use_name_as_identifier?: boolean): { catalog_type: catalog_type_v3; }`\n\n**put** `/v3/catalog_types/{id}`\n\nUpdates an existing catalog type. The schema must be updated using the UpdateTypeSchema endpoint.\n\n### Parameters\n\n- `id: string`\n  ID of this catalog type\n\n- `description: string`\n  Human readble description of this type\n\n- `name: string`\n  Name is the human readable name of this type\n\n- `annotations?: object`\n  Annotations that can track metadata about this type\n\n- `categories?: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]`\n  What categories is this type considered part of\n\n- `color?: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'`\n  Sets the display color of this type in the dashboard\n\n- `icon?: string`\n  Sets the display icon of this type in the dashboard\n\n- `ranked?: boolean`\n  If this type should be ranked\n\n- `source_repo_url?: string`\n  The url of the external repository where this type is managed\n\n- `use_name_as_identifier?: boolean`\n  If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases.\n\n### Returns\n\n- `{ catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }`\n\n  - `catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: { attributes: { id: string; array: boolean; mode: '' | 'api' | 'dashboard' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path'; name: string; type: string; backlink_attribute?: string; path?: object[]; }[]; version: number; }; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst catalogType = await client.catalogTypes.update('01FCNDV6P870EA6S7TK1DSYDG0', { description: 'Represents Kubernetes clusters that we run inside of GKE.', name: 'Kubernetes Cluster' });\n\nconsole.log(catalogType);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogTypes.update',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst catalogType = await client.catalogTypes.update('01FCNDV6P870EA6S7TK1DSYDG0', {\n  description: 'Represents Kubernetes clusters that we run inside of GKE.',\n  name: 'Kubernetes Cluster',\n  annotations: { 'incident.io/catalog-importer/id': 'id-of-config' },\n  categories: ['customer'],\n  color: 'yellow',\n  icon: 'alert',\n  ranked: true,\n  source_repo_url: 'https://github.com/my-company/incident-io-catalog',\n  use_name_as_identifier: true,\n});\n\nconsole.log(catalogType.catalog_type);",
      },
      http: {
        example:
          'curl https://api.incident.io/v3/catalog_types/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "description": "Represents Kubernetes clusters that we run inside of GKE.",\n          "name": "Kubernetes Cluster",\n          "annotations": {\n            "incident.io/catalog-importer/id": "id-of-config"\n          },\n          "categories": [\n            "customer"\n          ],\n          "color": "yellow",\n          "icon": "alert",\n          "ranked": true,\n          "source_repo_url": "https://github.com/my-company/incident-io-catalog",\n          "use_name_as_identifier": true\n        }\'',
      },
    },
  },
  {
    name: 'update_schema',
    endpoint: '/v3/catalog_types/{id}/actions/update_schema',
    httpMethod: 'post',
    summary: 'UpdateTypeSchema Catalog V3',
    description:
      "Update an existing catalog types schema, adding or removing attributes.\n\nUpdating the schema is handled separately from creating and updating types, so that you don't\nhave to worry about dependencies between types. For example, if type A has an attribute that\nrelies on type B, you would have to create type B first.\n\nBy allowing the creation of types without a schema, they can be created in any order, but it\nmeans that you need to make a separate call to this endpoint to update the schema.",
    stainlessPath: '(resource) catalog_types.actions > (method) update_schema',
    qualified: 'client.catalogTypes.actions.updateSchema',
    params: [
      'id: string;',
      "attributes: { array: boolean; name: string; type: string; id?: string; backlink_attribute?: string; mode?: '' | 'api' | 'dashboard' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path'; path?: { attribute_id: string; }[]; }[];",
      'version: number;',
    ],
    response:
      "{ catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }",
    markdown:
      "## update_schema\n\n`client.catalogTypes.actions.updateSchema(id: string, attributes: { array: boolean; name: string; type: string; id?: string; backlink_attribute?: string; mode?: '' | 'api' | 'dashboard' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path'; path?: { attribute_id: string; }[]; }[], version: number): { catalog_type: catalog_type_v3; }`\n\n**post** `/v3/catalog_types/{id}/actions/update_schema`\n\nUpdate an existing catalog types schema, adding or removing attributes.\n\nUpdating the schema is handled separately from creating and updating types, so that you don't\nhave to worry about dependencies between types. For example, if type A has an attribute that\nrelies on type B, you would have to create type B first.\n\nBy allowing the creation of types without a schema, they can be created in any order, but it\nmeans that you need to make a separate call to this endpoint to update the schema.\n\n### Parameters\n\n- `id: string`\n  ID of this catalog type\n\n- `attributes: { array: boolean; name: string; type: string; id?: string; backlink_attribute?: string; mode?: '' | 'api' | 'dashboard' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path'; path?: { attribute_id: string; }[]; }[]`\n\n- `version: number`\n\n### Returns\n\n- `{ catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: object; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }; }`\n\n  - `catalog_type: { id: string; annotations: object; categories: 'customer' | 'issue-tracker' | 'product-feature' | 'service' | 'on-call' | 'team' | 'user'[]; color: 'yellow' | 'green' | 'blue' | 'violet' | 'pink' | 'cyan' | 'orange'; created_at: string; description: string; icon: string; is_editable: boolean; name: string; ranked: boolean; schema: { attributes: { id: string; array: boolean; mode: '' | 'api' | 'dashboard' | 'external' | 'internal' | 'dynamic' | 'backlink' | 'path'; name: string; type: string; backlink_attribute?: string; path?: object[]; }[]; version: number; }; type_name: string; updated_at: string; use_name_as_identifier: boolean; dynamic_resource_parameter?: string; estimated_count?: number; last_synced_at?: string; registry_type?: string; required_integrations?: string[]; source_repo_url?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst response = await client.catalogTypes.actions.updateSchema('01FCNDV6P870EA6S7TK1DSYDG0', { attributes: [{\n  array: false,\n  name: 'tier',\n  type: 'Custom[\"Service\"]',\n}], version: 1 });\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.catalogTypes.actions.updateSchema',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.catalogTypes.actions.updateSchema('01FCNDV6P870EA6S7TK1DSYDG0', {\n  attributes: [\n    {\n      array: false,\n      backlink_attribute: 'abc123',\n      id: '01GW2G3V0S59R238FAHPDS1R66',\n      mode: '',\n      name: 'tier',\n      path: [{ attribute_id: 'abc123' }],\n      type: 'Custom[\"Service\"]',\n    },\n  ],\n  version: 1,\n});\n\nconsole.log(response.catalog_type);",
      },
      http: {
        example:
          'curl https://api.incident.io/v3/catalog_types/$ID/actions/update_schema \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "attributes": [\n            {\n              "array": false,\n              "name": "tier",\n              "type": "Custom[\\\\"Service\\\\"]",\n              "id": "01GW2G3V0S59R238FAHPDS1R66",\n              "backlink_attribute": "abc123",\n              "mode": "",\n              "path": [\n                {\n                  "attribute_id": "abc123"\n                }\n              ]\n            }\n          ],\n          "version": 1\n        }\'',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v2/escalation_paths',
    httpMethod: 'post',
    summary: 'CreatePath Escalations V2',
    description:
      'Create an escalation path.\n\nAn escalation path is a series of steps that describe how a page should be escalated,\nrepresented as graph, supporting conditional branches based on alert priority and working\nintervals.\n\nWe recommend you create escalation paths in the incident.io dashboard where our path\nbuilder makes it easy to use conditions and visualise the path.\n',
    stainlessPath: '(resource) escalation_paths > (method) create',
    qualified: 'client.escalationPaths.create',
    params: [
      'name: string;',
      "path: { id: string; type: 'if_else' | 'repeat' | 'level' | 'notify_channel'; if_else?: { else_path: escalation_path_node_payload[]; then_path: escalation_path_node_payload[]; conditions?: object[]; }; level?: { targets: { id: string; type: 'schedule' | 'user' | 'slack_channel' | 'msteams_channel'; urgency: 'high' | 'low'; schedule_mode?: 'currently_on_call' | 'all_users_for_rota' | 'all_users' | ''; }[]; ack_mode?: 'all' | 'first'; round_robin_config?: { enabled: boolean; rotate_after_seconds?: number; }; time_to_ack_interval_condition?: 'active' | 'inactive'; time_to_ack_seconds?: number; time_to_ack_weekday_interval_config_id?: string; }; notify_channel?: { targets: { id: string; type: 'schedule' | 'user' | 'slack_channel' | 'msteams_channel'; urgency: 'high' | 'low'; schedule_mode?: 'currently_on_call' | 'all_users_for_rota' | 'all_users' | ''; }[]; time_to_ack_interval_condition?: 'active' | 'inactive'; time_to_ack_seconds?: number; time_to_ack_weekday_interval_config_id?: string; }; repeat?: { repeat_times: number; to_node: string; }; }[];",
      'team_ids?: string[];',
      "working_hours?: { id: string; name: string; timezone: string; weekday_intervals: { end_time: string; start_time: string; weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'; }[]; }[];",
    ],
    response:
      '{ escalation_path: { id: string; name: string; path: escalation_path_node[]; team_ids: string[]; working_hours?: weekday_interval_config[]; }; }',
    markdown:
      "## create\n\n`client.escalationPaths.create(name: string, path: { id: string; type: 'if_else' | 'repeat' | 'level' | 'notify_channel'; if_else?: escalation_path_node_if_else_payload; level?: object; notify_channel?: object; repeat?: object; }[], team_ids?: string[], working_hours?: { id: string; name: string; timezone: string; weekday_intervals: object[]; }[]): { escalation_path: escalation_path; }`\n\n**post** `/v2/escalation_paths`\n\nCreate an escalation path.\n\nAn escalation path is a series of steps that describe how a page should be escalated,\nrepresented as graph, supporting conditional branches based on alert priority and working\nintervals.\n\nWe recommend you create escalation paths in the incident.io dashboard where our path\nbuilder makes it easy to use conditions and visualise the path.\n\n\n### Parameters\n\n- `name: string`\n  The name of this escalation path, for the user's reference.\n\n- `path: { id: string; type: 'if_else' | 'repeat' | 'level' | 'notify_channel'; if_else?: { else_path: escalation_path_node_payload[]; then_path: escalation_path_node_payload[]; conditions?: object[]; }; level?: { targets: { id: string; type: 'schedule' | 'user' | 'slack_channel' | 'msteams_channel'; urgency: 'high' | 'low'; schedule_mode?: 'currently_on_call' | 'all_users_for_rota' | 'all_users' | ''; }[]; ack_mode?: 'all' | 'first'; round_robin_config?: { enabled: boolean; rotate_after_seconds?: number; }; time_to_ack_interval_condition?: 'active' | 'inactive'; time_to_ack_seconds?: number; time_to_ack_weekday_interval_config_id?: string; }; notify_channel?: { targets: { id: string; type: 'schedule' | 'user' | 'slack_channel' | 'msteams_channel'; urgency: 'high' | 'low'; schedule_mode?: 'currently_on_call' | 'all_users_for_rota' | 'all_users' | ''; }[]; time_to_ack_interval_condition?: 'active' | 'inactive'; time_to_ack_seconds?: number; time_to_ack_weekday_interval_config_id?: string; }; repeat?: { repeat_times: number; to_node: string; }; }[]`\n  The nodes that form the levels and branches of this escalation path.\n\n- `team_ids?: string[]`\n  IDs of the teams that own this escalation path. This will automatically sync escalation paths with the right teams in Catalog. If you have an escalation paths attribute on your Teams, this attribute is required.\n\n- `working_hours?: { id: string; name: string; timezone: string; weekday_intervals: { end_time: string; start_time: string; weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'; }[]; }[]`\n  The working hours for this escalation path.\n\n### Returns\n\n- `{ escalation_path: { id: string; name: string; path: escalation_path_node[]; team_ids: string[]; working_hours?: weekday_interval_config[]; }; }`\n\n  - `escalation_path: { id: string; name: string; path: { id: string; type: 'if_else' | 'repeat' | 'level' | 'notify_channel'; if_else?: escalation_path_node_if_else; level?: object; notify_channel?: object; repeat?: object; }[]; team_ids: string[]; working_hours?: { id: string; name: string; timezone: string; weekday_intervals: object[]; }[]; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst escalationPath = await client.escalationPaths.create({ name: 'Urgent Support', path: [{ id: '01FCNDV6P870EA6S7TK1DSYDG0', type: 'if_else' }] });\n\nconsole.log(escalationPath);\n```",
    perLanguage: {
      typescript: {
        method: 'client.escalationPaths.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst escalationPath = await client.escalationPaths.create({\n  name: 'Urgent Support',\n  path: [\n    {\n      id: '01FCNDV6P870EA6S7TK1DSYDG0',\n      if_else: {\n        conditions: [\n          {\n            operation: 'one_of',\n            param_bindings: [\n              {\n                array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                value: { literal: 'SEV123', reference: 'incident.severity' },\n              },\n            ],\n            subject: 'incident.severity',\n          },\n        ],\n        else_path: [{}],\n        then_path: [{}],\n      },\n      level: {\n        ack_mode: 'all',\n        round_robin_config: { enabled: false, rotate_after_seconds: 120 },\n        targets: [\n          {\n            id: 'lawrencejones',\n            schedule_mode: 'currently_on_call',\n            type: 'schedule',\n            urgency: 'high',\n          },\n        ],\n        time_to_ack_interval_condition: 'active',\n        time_to_ack_seconds: 1800,\n        time_to_ack_weekday_interval_config_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n      },\n      notify_channel: {\n        targets: [\n          {\n            id: 'lawrencejones',\n            schedule_mode: 'currently_on_call',\n            type: 'schedule',\n            urgency: 'high',\n          },\n        ],\n        time_to_ack_interval_condition: 'active',\n        time_to_ack_seconds: 1800,\n        time_to_ack_weekday_interval_config_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n      },\n      repeat: { repeat_times: 3, to_node: '01FCNDV6P870EA6S7TK1DSYDG0' },\n      type: 'if_else',\n    },\n  ],\n  team_ids: ['01JPQA75EPNEES4479P16P4XAB'],\n  working_hours: [\n    {\n      id: 'abc123',\n      name: 'abc123',\n      timezone: 'abc123',\n      weekday_intervals: [\n        {\n          end_time: '17:00',\n          start_time: '09:00',\n          weekday: 'monday',\n        },\n      ],\n    },\n  ],\n});\n\nconsole.log(escalationPath.escalation_path);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/escalation_paths \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "name": "Urgent Support",\n          "path": [\n            {\n              "id": "01FCNDV6P870EA6S7TK1DSYDG0",\n              "type": "if_else",\n              "if_else": {\n                "else_path": [],\n                "then_path": [],\n                "conditions": [\n                  {\n                    "operation": "one_of",\n                    "param_bindings": [\n                      {\n                        "array_value": [\n                          {\n                            "literal": "SEV123",\n                            "reference": "incident.severity"\n                          }\n                        ],\n                        "value": {\n                          "literal": "SEV123",\n                          "reference": "incident.severity"\n                        }\n                      }\n                    ],\n                    "subject": "incident.severity"\n                  }\n                ]\n              },\n              "level": {\n                "targets": [\n                  {\n                    "id": "lawrencejones",\n                    "type": "schedule",\n                    "urgency": "high",\n                    "schedule_mode": "currently_on_call"\n                  }\n                ],\n                "ack_mode": "all",\n                "round_robin_config": {\n                  "enabled": false,\n                  "rotate_after_seconds": 120\n                },\n                "time_to_ack_interval_condition": "active",\n                "time_to_ack_seconds": 1800,\n                "time_to_ack_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"\n              },\n              "notify_channel": {\n                "targets": [\n                  {\n                    "id": "lawrencejones",\n                    "type": "schedule",\n                    "urgency": "high",\n                    "schedule_mode": "currently_on_call"\n                  }\n                ],\n                "time_to_ack_interval_condition": "active",\n                "time_to_ack_seconds": 1800,\n                "time_to_ack_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"\n              },\n              "repeat": {\n                "repeat_times": 3,\n                "to_node": "01FCNDV6P870EA6S7TK1DSYDG0"\n              }\n            }\n          ],\n          "team_ids": [\n            "01JPQA75EPNEES4479P16P4XAB"\n          ],\n          "working_hours": [\n            {\n              "id": "abc123",\n              "name": "abc123",\n              "timezone": "abc123",\n              "weekday_intervals": [\n                {\n                  "end_time": "17:00",\n                  "start_time": "09:00",\n                  "weekday": "monday"\n                }\n              ]\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v2/escalation_paths/{id}',
    httpMethod: 'delete',
    summary: 'DestroyPath Escalations V2',
    description:
      'Archives an escalation path.\n\nWe recommend you create escalation paths in the incident.io dashboard where our path\nbuilder makes it easy to use conditions and visualise the path.\n',
    stainlessPath: '(resource) escalation_paths > (method) delete',
    qualified: 'client.escalationPaths.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.escalationPaths.delete(id: string): void`\n\n**delete** `/v2/escalation_paths/{id}`\n\nArchives an escalation path.\n\nWe recommend you create escalation paths in the incident.io dashboard where our path\nbuilder makes it easy to use conditions and visualise the path.\n\n\n### Parameters\n\n- `id: string`\n  Unique identifier for this escalation path.\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.escalationPaths.delete('01FCNDV6P870EA6S7TK1DSYDG0')\n```",
    perLanguage: {
      typescript: {
        method: 'client.escalationPaths.delete',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.escalationPaths.delete('01FCNDV6P870EA6S7TK1DSYDG0');",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/escalation_paths/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v2/escalation_paths/{id}',
    httpMethod: 'get',
    summary: 'ShowPath Escalations V2',
    description:
      'Show an escalation path.\n\nWe recommend you create escalation paths in the incident.io dashboard where our path\nbuilder makes it easy to use conditions and visualise the path.\n',
    stainlessPath: '(resource) escalation_paths > (method) retrieve',
    qualified: 'client.escalationPaths.retrieve',
    params: ['id: string;'],
    response:
      '{ escalation_path: { id: string; name: string; path: escalation_path_node[]; team_ids: string[]; working_hours?: weekday_interval_config[]; }; }',
    markdown:
      "## retrieve\n\n`client.escalationPaths.retrieve(id: string): { escalation_path: escalation_path; }`\n\n**get** `/v2/escalation_paths/{id}`\n\nShow an escalation path.\n\nWe recommend you create escalation paths in the incident.io dashboard where our path\nbuilder makes it easy to use conditions and visualise the path.\n\n\n### Parameters\n\n- `id: string`\n  Unique identifier for this escalation path.\n\n### Returns\n\n- `{ escalation_path: { id: string; name: string; path: escalation_path_node[]; team_ids: string[]; working_hours?: weekday_interval_config[]; }; }`\n\n  - `escalation_path: { id: string; name: string; path: { id: string; type: 'if_else' | 'repeat' | 'level' | 'notify_channel'; if_else?: escalation_path_node_if_else; level?: object; notify_channel?: object; repeat?: object; }[]; team_ids: string[]; working_hours?: { id: string; name: string; timezone: string; weekday_intervals: object[]; }[]; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst escalationPath = await client.escalationPaths.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(escalationPath);\n```",
    perLanguage: {
      typescript: {
        method: 'client.escalationPaths.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst escalationPath = await client.escalationPaths.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(escalationPath.escalation_path);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/escalation_paths/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v2/escalation_paths/{id}',
    httpMethod: 'put',
    summary: 'UpdatePath Escalations V2',
    description:
      'Updates an escalation path.\n\nWe recommend you create escalation paths in the incident.io dashboard where our path\nbuilder makes it easy to use conditions and visualise the path.\n',
    stainlessPath: '(resource) escalation_paths > (method) update',
    qualified: 'client.escalationPaths.update',
    params: [
      'id: string;',
      'name: string;',
      "path: { id: string; type: 'if_else' | 'repeat' | 'level' | 'notify_channel'; if_else?: { else_path: escalation_path_node_payload[]; then_path: escalation_path_node_payload[]; conditions?: object[]; }; level?: { targets: { id: string; type: 'schedule' | 'user' | 'slack_channel' | 'msteams_channel'; urgency: 'high' | 'low'; schedule_mode?: 'currently_on_call' | 'all_users_for_rota' | 'all_users' | ''; }[]; ack_mode?: 'all' | 'first'; round_robin_config?: { enabled: boolean; rotate_after_seconds?: number; }; time_to_ack_interval_condition?: 'active' | 'inactive'; time_to_ack_seconds?: number; time_to_ack_weekday_interval_config_id?: string; }; notify_channel?: { targets: { id: string; type: 'schedule' | 'user' | 'slack_channel' | 'msteams_channel'; urgency: 'high' | 'low'; schedule_mode?: 'currently_on_call' | 'all_users_for_rota' | 'all_users' | ''; }[]; time_to_ack_interval_condition?: 'active' | 'inactive'; time_to_ack_seconds?: number; time_to_ack_weekday_interval_config_id?: string; }; repeat?: { repeat_times: number; to_node: string; }; }[];",
      'team_ids?: string[];',
      "working_hours?: { id: string; name: string; timezone: string; weekday_intervals: { end_time: string; start_time: string; weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'; }[]; }[];",
    ],
    response:
      '{ escalation_path: { id: string; name: string; path: escalation_path_node[]; team_ids: string[]; working_hours?: weekday_interval_config[]; }; }',
    markdown:
      "## update\n\n`client.escalationPaths.update(id: string, name: string, path: { id: string; type: 'if_else' | 'repeat' | 'level' | 'notify_channel'; if_else?: escalation_path_node_if_else_payload; level?: object; notify_channel?: object; repeat?: object; }[], team_ids?: string[], working_hours?: { id: string; name: string; timezone: string; weekday_intervals: object[]; }[]): { escalation_path: escalation_path; }`\n\n**put** `/v2/escalation_paths/{id}`\n\nUpdates an escalation path.\n\nWe recommend you create escalation paths in the incident.io dashboard where our path\nbuilder makes it easy to use conditions and visualise the path.\n\n\n### Parameters\n\n- `id: string`\n  Unique identifier for this escalation path.\n\n- `name: string`\n  The name of this escalation path, for the user's reference.\n\n- `path: { id: string; type: 'if_else' | 'repeat' | 'level' | 'notify_channel'; if_else?: { else_path: escalation_path_node_payload[]; then_path: escalation_path_node_payload[]; conditions?: object[]; }; level?: { targets: { id: string; type: 'schedule' | 'user' | 'slack_channel' | 'msteams_channel'; urgency: 'high' | 'low'; schedule_mode?: 'currently_on_call' | 'all_users_for_rota' | 'all_users' | ''; }[]; ack_mode?: 'all' | 'first'; round_robin_config?: { enabled: boolean; rotate_after_seconds?: number; }; time_to_ack_interval_condition?: 'active' | 'inactive'; time_to_ack_seconds?: number; time_to_ack_weekday_interval_config_id?: string; }; notify_channel?: { targets: { id: string; type: 'schedule' | 'user' | 'slack_channel' | 'msteams_channel'; urgency: 'high' | 'low'; schedule_mode?: 'currently_on_call' | 'all_users_for_rota' | 'all_users' | ''; }[]; time_to_ack_interval_condition?: 'active' | 'inactive'; time_to_ack_seconds?: number; time_to_ack_weekday_interval_config_id?: string; }; repeat?: { repeat_times: number; to_node: string; }; }[]`\n  The nodes that form the levels and branches of this escalation path.\n\n- `team_ids?: string[]`\n  IDs of the teams that own this escalation path. This will automatically sync escalation paths with the right teams in Catalog. If you have an escalation paths attribute on your Teams, this attribute is required.\n\n- `working_hours?: { id: string; name: string; timezone: string; weekday_intervals: { end_time: string; start_time: string; weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'; }[]; }[]`\n  The working hours for this escalation path.\n\n### Returns\n\n- `{ escalation_path: { id: string; name: string; path: escalation_path_node[]; team_ids: string[]; working_hours?: weekday_interval_config[]; }; }`\n\n  - `escalation_path: { id: string; name: string; path: { id: string; type: 'if_else' | 'repeat' | 'level' | 'notify_channel'; if_else?: escalation_path_node_if_else; level?: object; notify_channel?: object; repeat?: object; }[]; team_ids: string[]; working_hours?: { id: string; name: string; timezone: string; weekday_intervals: object[]; }[]; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst escalationPath = await client.escalationPaths.update('01FCNDV6P870EA6S7TK1DSYDG0', { name: 'Urgent Support', path: [{ id: '01FCNDV6P870EA6S7TK1DSYDG0', type: 'if_else' }] });\n\nconsole.log(escalationPath);\n```",
    perLanguage: {
      typescript: {
        method: 'client.escalationPaths.update',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst escalationPath = await client.escalationPaths.update('01FCNDV6P870EA6S7TK1DSYDG0', {\n  name: 'Urgent Support',\n  path: [\n    {\n      id: '01FCNDV6P870EA6S7TK1DSYDG0',\n      if_else: {\n        conditions: [\n          {\n            operation: 'one_of',\n            param_bindings: [\n              {\n                array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                value: { literal: 'SEV123', reference: 'incident.severity' },\n              },\n            ],\n            subject: 'incident.severity',\n          },\n        ],\n        else_path: [{}],\n        then_path: [{}],\n      },\n      level: {\n        ack_mode: 'all',\n        round_robin_config: { enabled: false, rotate_after_seconds: 120 },\n        targets: [\n          {\n            id: 'lawrencejones',\n            schedule_mode: 'currently_on_call',\n            type: 'schedule',\n            urgency: 'high',\n          },\n        ],\n        time_to_ack_interval_condition: 'active',\n        time_to_ack_seconds: 1800,\n        time_to_ack_weekday_interval_config_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n      },\n      notify_channel: {\n        targets: [\n          {\n            id: 'lawrencejones',\n            schedule_mode: 'currently_on_call',\n            type: 'schedule',\n            urgency: 'high',\n          },\n        ],\n        time_to_ack_interval_condition: 'active',\n        time_to_ack_seconds: 1800,\n        time_to_ack_weekday_interval_config_id: '01FCNDV6P870EA6S7TK1DSYDG0',\n      },\n      repeat: { repeat_times: 3, to_node: '01FCNDV6P870EA6S7TK1DSYDG0' },\n      type: 'if_else',\n    },\n  ],\n  team_ids: ['01JPQA75EPNEES4479P16P4XAB'],\n  working_hours: [\n    {\n      id: 'abc123',\n      name: 'abc123',\n      timezone: 'abc123',\n      weekday_intervals: [\n        {\n          end_time: '17:00',\n          start_time: '09:00',\n          weekday: 'monday',\n        },\n      ],\n    },\n  ],\n});\n\nconsole.log(escalationPath.escalation_path);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/escalation_paths/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "name": "Urgent Support",\n          "path": [\n            {\n              "id": "01FCNDV6P870EA6S7TK1DSYDG0",\n              "type": "if_else",\n              "if_else": {\n                "else_path": [],\n                "then_path": [],\n                "conditions": [\n                  {\n                    "operation": "one_of",\n                    "param_bindings": [\n                      {\n                        "array_value": [\n                          {\n                            "literal": "SEV123",\n                            "reference": "incident.severity"\n                          }\n                        ],\n                        "value": {\n                          "literal": "SEV123",\n                          "reference": "incident.severity"\n                        }\n                      }\n                    ],\n                    "subject": "incident.severity"\n                  }\n                ]\n              },\n              "level": {\n                "targets": [\n                  {\n                    "id": "lawrencejones",\n                    "type": "schedule",\n                    "urgency": "high",\n                    "schedule_mode": "currently_on_call"\n                  }\n                ],\n                "ack_mode": "all",\n                "round_robin_config": {\n                  "enabled": false,\n                  "rotate_after_seconds": 120\n                },\n                "time_to_ack_interval_condition": "active",\n                "time_to_ack_seconds": 1800,\n                "time_to_ack_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"\n              },\n              "notify_channel": {\n                "targets": [\n                  {\n                    "id": "lawrencejones",\n                    "type": "schedule",\n                    "urgency": "high",\n                    "schedule_mode": "currently_on_call"\n                  }\n                ],\n                "time_to_ack_interval_condition": "active",\n                "time_to_ack_seconds": 1800,\n                "time_to_ack_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"\n              },\n              "repeat": {\n                "repeat_times": 3,\n                "to_node": "01FCNDV6P870EA6S7TK1DSYDG0"\n              }\n            }\n          ],\n          "team_ids": [\n            "01JPQA75EPNEES4479P16P4XAB"\n          ],\n          "working_hours": [\n            {\n              "id": "abc123",\n              "name": "abc123",\n              "timezone": "abc123",\n              "weekday_intervals": [\n                {\n                  "end_time": "17:00",\n                  "start_time": "09:00",\n                  "weekday": "monday"\n                }\n              ]\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v2/escalations',
    httpMethod: 'get',
    summary: 'List Escalations V2',
    description:
      'List all escalations for your account.\n\nThis endpoint supports a number of filters, which can help find escalations matching certain\ncriteria.\n\nNote that:\n- Filters may be used together, and the result will be escalations that match all filters.\n- All query parameters must be URI encoded.\n\nTo use this API, you will need an API key with the "View data" or "Create and manage on-call resources" permission.\n\n### By escalation_path\n\nFind all escalations that escalated to escalation path with id=ABC:\n\n\t\tcurl --get \'https://api.incident.io/v2/escalations\' \\\n\t\t\t--data \'escalation_path[one_of]=ABC\'\n\n### By status\n\nFind all escalations with a current status of "triggered":\n\n\t\tcurl --get \'https://api.incident.io/v2/escalations\' \\\n\t\t\t--data \'status[one_of]=triggered\'\n\nPossible values are "pending", "triggered", "acked", "resolved", "expired" and "cancelled".\nEscalations are in "pending" when they are in a grace period when the related alert has\nbeen grouped in an incident.\n\n### By alert\n\nFind all escalations that were created by alert with id=ABC:\n\n\t\tcurl --get \'https://api.incident.io/v2/escalations\' \\\n\t\t\t--data \'alert[one_of]=ABC\'\n\n### By created_at and updated_at\nFind all escalations that follow specified date parameters for created_at and updated_at fields.\nPossible values are "gte" (greater than or equal to), "lte" (less than or equal to), and\n"date_range" (between two dates).\nFor example, to find all escalations updated after 2025-01-01:\n\n\t\tcurl --get \'https://api.incident.io/v2/escalations\' \\\n\t\t\t--data \'updated_at[gte]=2025-01-01\'\n\nTo find all escalations created between 2025-01-01 and 2025-01-31:\n\n\t\tcurl --get \'https://api.incident.io/v2/escalations\' \\\n            --data \'created_at[date_range]=2025-01-01~2025-01-31\'\n',
    stainlessPath: '(resource) escalations > (method) list',
    qualified: 'client.escalations.list',
    params: [
      'after?: string;',
      'alert?: object;',
      'created_at?: object;',
      'escalation_path?: object;',
      'page_size?: number;',
      'status?: object;',
      'updated_at?: object;',
    ],
    response:
      "{ escalations: { id: string; created_at: string; creator: object; events: object[]; priority: object; related_alerts: alert_slim[]; related_incidents: incident_slim[]; status: 'pending' | 'triggered' | 'acked' | 'resolved' | 'expired' | 'cancelled'; title: string; updated_at: string; escalation_path_id?: string; }[]; pagination_meta: { page_size: number; after?: string; }; }",
    markdown:
      "## list\n\n`client.escalations.list(after?: string, alert?: object, created_at?: object, escalation_path?: object, page_size?: number, status?: object, updated_at?: object): { escalations: escalation_v2[]; pagination_meta: pagination_meta_result; }`\n\n**get** `/v2/escalations`\n\nList all escalations for your account.\n\nThis endpoint supports a number of filters, which can help find escalations matching certain\ncriteria.\n\nNote that:\n- Filters may be used together, and the result will be escalations that match all filters.\n- All query parameters must be URI encoded.\n\nTo use this API, you will need an API key with the \"View data\" or \"Create and manage on-call resources\" permission.\n\n### By escalation_path\n\nFind all escalations that escalated to escalation path with id=ABC:\n\n\t\tcurl --get 'https://api.incident.io/v2/escalations' \\\n\t\t\t--data 'escalation_path[one_of]=ABC'\n\n### By status\n\nFind all escalations with a current status of \"triggered\":\n\n\t\tcurl --get 'https://api.incident.io/v2/escalations' \\\n\t\t\t--data 'status[one_of]=triggered'\n\nPossible values are \"pending\", \"triggered\", \"acked\", \"resolved\", \"expired\" and \"cancelled\".\nEscalations are in \"pending\" when they are in a grace period when the related alert has\nbeen grouped in an incident.\n\n### By alert\n\nFind all escalations that were created by alert with id=ABC:\n\n\t\tcurl --get 'https://api.incident.io/v2/escalations' \\\n\t\t\t--data 'alert[one_of]=ABC'\n\n### By created_at and updated_at\nFind all escalations that follow specified date parameters for created_at and updated_at fields.\nPossible values are \"gte\" (greater than or equal to), \"lte\" (less than or equal to), and\n\"date_range\" (between two dates).\nFor example, to find all escalations updated after 2025-01-01:\n\n\t\tcurl --get 'https://api.incident.io/v2/escalations' \\\n\t\t\t--data 'updated_at[gte]=2025-01-01'\n\nTo find all escalations created between 2025-01-01 and 2025-01-31:\n\n\t\tcurl --get 'https://api.incident.io/v2/escalations' \\\n            --data 'created_at[date_range]=2025-01-01~2025-01-31'\n\n\n### Parameters\n\n- `after?: string`\n  An escalation's ID. This endpoint will return a list of escalations after this ID in relation to the API response order.\n\n- `alert?: object`\n  Filter on the alert that created an escalation. Accepted operators are 'one_of' and 'not_in'.\n\n- `created_at?: object`\n  Filter on the created_at timestamp of the escalation. Accepted operators are 'gte', 'lte' and 'date_range'.\n\n- `escalation_path?: object`\n  Filter on the escalation path for which the escalation was triggered. Accepted operators are 'one_of' and 'not_in'.\n\n- `page_size?: number`\n  Number of escalations to return per page\n\n- `status?: object`\n  Filter on the status of the escalation. Accepted operators are 'one_of' and 'not_in'.\n\n- `updated_at?: object`\n  Filter on the updated_at timestamp of the escalation. Accepted operators are 'gte', 'lte' and 'date_range'.\n\n### Returns\n\n- `{ escalations: { id: string; created_at: string; creator: object; events: object[]; priority: object; related_alerts: alert_slim[]; related_incidents: incident_slim[]; status: 'pending' | 'triggered' | 'acked' | 'resolved' | 'expired' | 'cancelled'; title: string; updated_at: string; escalation_path_id?: string; }[]; pagination_meta: { page_size: number; after?: string; }; }`\n\n  - `escalations: { id: string; created_at: string; creator: { alert?: object; user?: object; workflow?: object; }; events: { id: string; event: string; occurred_at: string; channels?: { microsoft_teams_channel_id?: string; microsoft_teams_team_id?: string; slack_channel_id?: string; slack_team_id?: string; }[]; urgency?: 'high' | 'low'; users?: object[]; }[]; priority: { name: string; }; related_alerts: { id: string; alert_source_id: string; created_at: string; deduplication_key: string; status: 'firing' | 'resolved'; title: string; updated_at: string; description?: string; resolved_at?: string; source_url?: string; }[]; related_incidents: { id: string; external_id: number; name: string; reference: string; status_category: 'triage' | 'declined' | 'merged' | 'canceled' | 'active' | 'post-incident' | 'closed' | 'paused'; visibility: 'public' | 'private'; summary?: string; }[]; status: 'pending' | 'triggered' | 'acked' | 'resolved' | 'expired' | 'cancelled'; title: string; updated_at: string; escalation_path_id?: string; }[]`\n  - `pagination_meta: { page_size: number; after?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst escalations = await client.escalations.list();\n\nconsole.log(escalations);\n```",
    perLanguage: {
      typescript: {
        method: 'client.escalations.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst escalations = await client.escalations.list();\n\nconsole.log(escalations.escalations);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/escalations \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v2/escalations',
    httpMethod: 'post',
    summary: 'Create Escalations V2',
    description:
      'Create an escalation.\n\nAn escalation pages people, either according to an escalation path, or directly to\nspecific users. You must provide either an escalation_path_id OR user_ids, but not both.\n\nWhen escalating via an escalation path, the escalation will follow the configured path\nwith its levels and timeouts, using your default [alert\npriority](https://app.incident.io/~/settings/alerts/configuration/priorities).\n\nWhen escalating directly to users, they will receive a high-urgency\nnotification, based on their notification rules.\n\nThis endpoint is rate-limited to 60 requests per minute, since it is intended for\ninteractive use cases (for example someone clicking a "escalate to team" button\nin your internal developer platform). To escalate based on automated alerts, we\nrecommend sending events to an alert source instead.\n',
    stainlessPath: '(resource) escalations > (method) create',
    qualified: 'client.escalations.create',
    params: [
      'idempotency_key: string;',
      'title: string;',
      'description?: string;',
      'escalation_path_id?: string;',
      'user_ids?: string[];',
    ],
    response:
      "{ escalation: { id: string; created_at: string; creator: object; events: object[]; priority: object; related_alerts: alert_slim[]; related_incidents: incident_slim[]; status: 'pending' | 'triggered' | 'acked' | 'resolved' | 'expired' | 'cancelled'; title: string; updated_at: string; escalation_path_id?: string; }; }",
    markdown:
      "## create\n\n`client.escalations.create(idempotency_key: string, title: string, description?: string, escalation_path_id?: string, user_ids?: string[]): { escalation: escalation_v2; }`\n\n**post** `/v2/escalations`\n\nCreate an escalation.\n\nAn escalation pages people, either according to an escalation path, or directly to\nspecific users. You must provide either an escalation_path_id OR user_ids, but not both.\n\nWhen escalating via an escalation path, the escalation will follow the configured path\nwith its levels and timeouts, using your default [alert\npriority](https://app.incident.io/~/settings/alerts/configuration/priorities).\n\nWhen escalating directly to users, they will receive a high-urgency\nnotification, based on their notification rules.\n\nThis endpoint is rate-limited to 60 requests per minute, since it is intended for\ninteractive use cases (for example someone clicking a \"escalate to team\" button\nin your internal developer platform). To escalate based on automated alerts, we\nrecommend sending events to an alert source instead.\n\n\n### Parameters\n\n- `idempotency_key: string`\n  Unique key to prevent duplicate escalations. If this key has already been used, the existing escalation will be returned.\n\n- `title: string`\n  The title of the escalation. This message will be included in all notifications about this escalation.\n\n- `description?: string`\n  Additional details about the escalation\n\n- `escalation_path_id?: string`\n  ID of the escalation path to follow\n\n- `user_ids?: string[]`\n  IDs of users to escalate directly to\n\n### Returns\n\n- `{ escalation: { id: string; created_at: string; creator: object; events: object[]; priority: object; related_alerts: alert_slim[]; related_incidents: incident_slim[]; status: 'pending' | 'triggered' | 'acked' | 'resolved' | 'expired' | 'cancelled'; title: string; updated_at: string; escalation_path_id?: string; }; }`\n\n  - `escalation: { id: string; created_at: string; creator: { alert?: object; user?: object; workflow?: object; }; events: { id: string; event: string; occurred_at: string; channels?: { microsoft_teams_channel_id?: string; microsoft_teams_team_id?: string; slack_channel_id?: string; slack_team_id?: string; }[]; urgency?: 'high' | 'low'; users?: object[]; }[]; priority: { name: string; }; related_alerts: { id: string; alert_source_id: string; created_at: string; deduplication_key: string; status: 'firing' | 'resolved'; title: string; updated_at: string; description?: string; resolved_at?: string; source_url?: string; }[]; related_incidents: { id: string; external_id: number; name: string; reference: string; status_category: 'triage' | 'declined' | 'merged' | 'canceled' | 'active' | 'post-incident' | 'closed' | 'paused'; visibility: 'public' | 'private'; summary?: string; }[]; status: 'pending' | 'triggered' | 'acked' | 'resolved' | 'expired' | 'cancelled'; title: string; updated_at: string; escalation_path_id?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst escalation = await client.escalations.create({ idempotency_key: '2024-01-15-abc123', title: 'Production database experiencing high CPU' });\n\nconsole.log(escalation);\n```",
    perLanguage: {
      typescript: {
        method: 'client.escalations.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst escalation = await client.escalations.create({\n  idempotency_key: '2024-01-15-abc123',\n  title: 'Production database experiencing high CPU',\n  description: 'Database CPU has been above 90% for 5 minutes',\n  escalation_path_id: '01H0J1EXE7AXZ2C93K61WBPYEH',\n  user_ids: ['01H0J1EXE7AXZ2C93K61WBPYEH', '01H0J1EXE7AXZ2C93K61WBPYEI'],\n});\n\nconsole.log(escalation.escalation);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/escalations \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "idempotency_key": "2024-01-15-abc123",\n          "title": "Production database experiencing high CPU",\n          "description": "Database CPU has been above 90% for 5 minutes",\n          "escalation_path_id": "01H0J1EXE7AXZ2C93K61WBPYEH",\n          "user_ids": [\n            "01H0J1EXE7AXZ2C93K61WBPYEH",\n            "01H0J1EXE7AXZ2C93K61WBPYEI"\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v2/escalations/{id}',
    httpMethod: 'get',
    summary: 'Show Escalations V2',
    description: 'Show a specific escalation.',
    stainlessPath: '(resource) escalations > (method) retrieve',
    qualified: 'client.escalations.retrieve',
    params: ['id: string;'],
    response:
      "{ escalation: { id: string; created_at: string; creator: object; events: object[]; priority: object; related_alerts: alert_slim[]; related_incidents: incident_slim[]; status: 'pending' | 'triggered' | 'acked' | 'resolved' | 'expired' | 'cancelled'; title: string; updated_at: string; escalation_path_id?: string; }; }",
    markdown:
      "## retrieve\n\n`client.escalations.retrieve(id: string): { escalation: escalation_v2; }`\n\n**get** `/v2/escalations/{id}`\n\nShow a specific escalation.\n\n### Parameters\n\n- `id: string`\n  Unique ID of the escalation\n\n### Returns\n\n- `{ escalation: { id: string; created_at: string; creator: object; events: object[]; priority: object; related_alerts: alert_slim[]; related_incidents: incident_slim[]; status: 'pending' | 'triggered' | 'acked' | 'resolved' | 'expired' | 'cancelled'; title: string; updated_at: string; escalation_path_id?: string; }; }`\n\n  - `escalation: { id: string; created_at: string; creator: { alert?: object; user?: object; workflow?: object; }; events: { id: string; event: string; occurred_at: string; channels?: { microsoft_teams_channel_id?: string; microsoft_teams_team_id?: string; slack_channel_id?: string; slack_team_id?: string; }[]; urgency?: 'high' | 'low'; users?: object[]; }[]; priority: { name: string; }; related_alerts: { id: string; alert_source_id: string; created_at: string; deduplication_key: string; status: 'firing' | 'resolved'; title: string; updated_at: string; description?: string; resolved_at?: string; source_url?: string; }[]; related_incidents: { id: string; external_id: number; name: string; reference: string; status_category: 'triage' | 'declined' | 'merged' | 'canceled' | 'active' | 'post-incident' | 'closed' | 'paused'; visibility: 'public' | 'private'; summary?: string; }[]; status: 'pending' | 'triggered' | 'acked' | 'resolved' | 'expired' | 'cancelled'; title: string; updated_at: string; escalation_path_id?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst escalation = await client.escalations.retrieve('01G0J1EXE7AXZ2C93K61WBPYEH');\n\nconsole.log(escalation);\n```",
    perLanguage: {
      typescript: {
        method: 'client.escalations.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst escalation = await client.escalations.retrieve('01G0J1EXE7AXZ2C93K61WBPYEH');\n\nconsole.log(escalation.escalation);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/escalations/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v2/follow_ups',
    httpMethod: 'get',
    summary: 'List Follow-ups V2',
    description: 'List all follow-ups for an organisation.',
    stainlessPath: '(resource) follow_ups > (method) list',
    qualified: 'client.followUps.list',
    params: [
      'incident_id?: string;',
      "incident_mode?: 'standard' | 'retrospective' | 'test' | 'tutorial' | 'stream';",
    ],
    response:
      "{ follow_ups: { id: string; created_at: string; creator: actor_v2; incident_id: string; labels: string[]; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; title: string; updated_at: string; assignee?: user_v2; completed_at?: string; description?: string; external_issue_reference?: external_issue_reference; priority?: object; }[]; }",
    markdown:
      "## list\n\n`client.followUps.list(incident_id?: string, incident_mode?: 'standard' | 'retrospective' | 'test' | 'tutorial' | 'stream'): { follow_ups: follow_up[]; }`\n\n**get** `/v2/follow_ups`\n\nList all follow-ups for an organisation.\n\n### Parameters\n\n- `incident_id?: string`\n  Find follow-ups related to this incident\n\n- `incident_mode?: 'standard' | 'retrospective' | 'test' | 'tutorial' | 'stream'`\n  Filter to follow-ups from incidents of the given mode. If not set, only follow-ups from `standard` and `retrospective` incidents are returned\n\n### Returns\n\n- `{ follow_ups: { id: string; created_at: string; creator: actor_v2; incident_id: string; labels: string[]; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; title: string; updated_at: string; assignee?: user_v2; completed_at?: string; description?: string; external_issue_reference?: external_issue_reference; priority?: object; }[]; }`\n\n  - `follow_ups: { id: string; created_at: string; creator: { alert?: alert_actor_v2; api_key?: object; user?: user_v2; workflow?: workflow_actor_v2; }; incident_id: string; labels: string[]; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; title: string; updated_at: string; assignee?: { id: string; name: string; role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset'; email?: string; slack_user_id?: string; }; completed_at?: string; description?: string; external_issue_reference?: { issue_name: string; issue_permalink: string; provider: string; }; priority?: { id: string; name: string; rank: number; description?: string; }; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst followUps = await client.followUps.list();\n\nconsole.log(followUps);\n```",
    perLanguage: {
      typescript: {
        method: 'client.followUps.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst followUps = await client.followUps.list();\n\nconsole.log(followUps.follow_ups);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/follow_ups \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v2/follow_ups/{id}',
    httpMethod: 'get',
    summary: 'Show Follow-ups V2',
    description: 'Get a single incident follow-up.',
    stainlessPath: '(resource) follow_ups > (method) retrieve',
    qualified: 'client.followUps.retrieve',
    params: ['id: string;'],
    response:
      "{ follow_up: { id: string; created_at: string; creator: actor_v2; incident_id: string; labels: string[]; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; title: string; updated_at: string; assignee?: user_v2; completed_at?: string; description?: string; external_issue_reference?: external_issue_reference; priority?: object; }; }",
    markdown:
      "## retrieve\n\n`client.followUps.retrieve(id: string): { follow_up: follow_up; }`\n\n**get** `/v2/follow_ups/{id}`\n\nGet a single incident follow-up.\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the follow-up\n\n### Returns\n\n- `{ follow_up: { id: string; created_at: string; creator: actor_v2; incident_id: string; labels: string[]; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; title: string; updated_at: string; assignee?: user_v2; completed_at?: string; description?: string; external_issue_reference?: external_issue_reference; priority?: object; }; }`\n\n  - `follow_up: { id: string; created_at: string; creator: { alert?: alert_actor_v2; api_key?: object; user?: user_v2; workflow?: workflow_actor_v2; }; incident_id: string; labels: string[]; status: 'outstanding' | 'completed' | 'deleted' | 'not_doing'; title: string; updated_at: string; assignee?: { id: string; name: string; role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset'; email?: string; slack_user_id?: string; }; completed_at?: string; description?: string; external_issue_reference?: { issue_name: string; issue_permalink: string; provider: string; }; priority?: { id: string; name: string; rank: number; description?: string; }; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst followUp = await client.followUps.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(followUp);\n```",
    perLanguage: {
      typescript: {
        method: 'client.followUps.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst followUp = await client.followUps.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(followUp.follow_up);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/follow_ups/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v2/incident_alerts',
    httpMethod: 'get',
    summary: 'ListIncidentAlerts Alerts V2',
    description: 'List the connections between incidents and alerts',
    stainlessPath: '(resource) incident_alerts > (method) list',
    qualified: 'client.incidentAlerts.list',
    params: ['page_size: number;', 'after?: string;', 'alert_id?: string;', 'incident_id?: string;'],
    response:
      '{ incident_alerts: { id: string; alert: object; incident: object; alert_route_id?: string; }[]; pagination_meta: { page_size: number; after?: string; }; }',
    markdown:
      "## list\n\n`client.incidentAlerts.list(page_size: number, after?: string, alert_id?: string, incident_id?: string): { incident_alerts: object[]; pagination_meta: pagination_meta_result; }`\n\n**get** `/v2/incident_alerts`\n\nList the connections between incidents and alerts\n\n### Parameters\n\n- `page_size: number`\n  Number of incident alerts to return per page\n\n- `after?: string`\n  If provided, pass this as the 'after' param to load the next page\n\n- `alert_id?: string`\n  Alert that this incident alert refers to\n\n- `incident_id?: string`\n  Incident that this incident alert is attached to\n\n### Returns\n\n- `{ incident_alerts: { id: string; alert: object; incident: object; alert_route_id?: string; }[]; pagination_meta: { page_size: number; after?: string; }; }`\n\n  - `incident_alerts: { id: string; alert: { id: string; alert_source_id: string; created_at: string; deduplication_key: string; status: 'firing' | 'resolved'; title: string; updated_at: string; description?: string; resolved_at?: string; source_url?: string; }; incident: { id: string; external_id: number; name: string; reference: string; status_category: 'triage' | 'declined' | 'merged' | 'canceled' | 'active' | 'post-incident' | 'closed' | 'paused'; visibility: 'public' | 'private'; summary?: string; }; alert_route_id?: string; }[]`\n  - `pagination_meta: { page_size: number; after?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentAlerts = await client.incidentAlerts.list({ page_size: 25 });\n\nconsole.log(incidentAlerts);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentAlerts.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentAlerts = await client.incidentAlerts.list({ page_size: 25 });\n\nconsole.log(incidentAlerts.incident_alerts);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/incident_alerts \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v2/incident_timestamps',
    httpMethod: 'get',
    summary: 'List Incident Timestamps V2',
    description: 'List all incident timestamps for an organisation.',
    stainlessPath: '(resource) incident_timestamps > (method) list',
    qualified: 'client.incidentTimestamps.list',
    response: '{ incident_timestamps: { id: string; name: string; rank: number; }[]; }',
    markdown:
      "## list\n\n`client.incidentTimestamps.list(): { incident_timestamps: incident_timestamp[]; }`\n\n**get** `/v2/incident_timestamps`\n\nList all incident timestamps for an organisation.\n\n### Returns\n\n- `{ incident_timestamps: { id: string; name: string; rank: number; }[]; }`\n\n  - `incident_timestamps: { id: string; name: string; rank: number; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentTimestamps = await client.incidentTimestamps.list();\n\nconsole.log(incidentTimestamps);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentTimestamps.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentTimestamps = await client.incidentTimestamps.list();\n\nconsole.log(incidentTimestamps.incident_timestamps);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/incident_timestamps \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v2/incident_timestamps/{id}',
    httpMethod: 'get',
    summary: 'Show Incident Timestamps V2',
    description: 'Get a single incident timestamp.',
    stainlessPath: '(resource) incident_timestamps > (method) retrieve',
    qualified: 'client.incidentTimestamps.retrieve',
    params: ['id: string;'],
    response: '{ incident_timestamp: { id: string; name: string; rank: number; }; }',
    markdown:
      "## retrieve\n\n`client.incidentTimestamps.retrieve(id: string): { incident_timestamp: incident_timestamp; }`\n\n**get** `/v2/incident_timestamps/{id}`\n\nGet a single incident timestamp.\n\n### Parameters\n\n- `id: string`\n  Unique ID of this incident timestamp\n\n### Returns\n\n- `{ incident_timestamp: { id: string; name: string; rank: number; }; }`\n\n  - `incident_timestamp: { id: string; name: string; rank: number; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentTimestamp = await client.incidentTimestamps.retrieve('01FCNDV6P870EA6S7TK1DSYD5H');\n\nconsole.log(incidentTimestamp);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentTimestamps.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentTimestamp = await client.incidentTimestamps.retrieve('01FCNDV6P870EA6S7TK1DSYD5H');\n\nconsole.log(incidentTimestamp.incident_timestamp);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/incident_timestamps/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v2/incident_updates',
    httpMethod: 'get',
    summary: 'List Incident Updates V2',
    description: 'List all incident updates for an organisation, or for a specific incident.',
    stainlessPath: '(resource) incident_updates > (method) list',
    qualified: 'client.incidentUpdates.list',
    params: ['after?: string;', 'incident_id?: string;', 'page_size?: number;'],
    response:
      '{ incident_updates: { id: string; created_at: string; incident_id: string; new_incident_status: object; updater: object; merged_into_incident_id?: string; message?: string; new_severity?: object; }[]; pagination_meta?: { page_size: number; after?: string; }; }',
    markdown:
      "## list\n\n`client.incidentUpdates.list(after?: string, incident_id?: string, page_size?: number): { incident_updates: object[]; pagination_meta?: pagination_meta_result; }`\n\n**get** `/v2/incident_updates`\n\nList all incident updates for an organisation, or for a specific incident.\n\n### Parameters\n\n- `after?: string`\n  An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.\n\n- `incident_id?: string`\n  Incident whose updates you want to list\n\n- `page_size?: number`\n  Integer number of records to return\n\n### Returns\n\n- `{ incident_updates: { id: string; created_at: string; incident_id: string; new_incident_status: object; updater: object; merged_into_incident_id?: string; message?: string; new_severity?: object; }[]; pagination_meta?: { page_size: number; after?: string; }; }`\n\n  - `incident_updates: { id: string; created_at: string; incident_id: string; new_incident_status: { id: string; category: 'triage' | 'declined' | 'merged' | 'canceled' | 'live' | 'learning' | 'closed' | 'paused'; created_at: string; description: string; name: string; rank: number; updated_at: string; }; updater: { alert?: object; api_key?: { id: string; name: string; }; user?: object; workflow?: object; }; merged_into_incident_id?: string; message?: string; new_severity?: { id: string; created_at: string; description: string; name: string; rank: number; updated_at: string; }; }[]`\n  - `pagination_meta?: { page_size: number; after?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst incidentUpdates = await client.incidentUpdates.list();\n\nconsole.log(incidentUpdates);\n```",
    perLanguage: {
      typescript: {
        method: 'client.incidentUpdates.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst incidentUpdates = await client.incidentUpdates.list();\n\nconsole.log(incidentUpdates.incident_updates);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/incident_updates \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v2/schedule_entries',
    httpMethod: 'get',
    summary: 'ListScheduleEntries Schedules V2',
    description:
      'Get a list of schedule entries. The endpoint will return all entries that overlap with the given window, if one is provided.',
    stainlessPath: '(resource) schedule_entries > (method) list',
    qualified: 'client.scheduleEntries.list',
    params: ['schedule_id: string;', 'entry_window_end?: string;', 'entry_window_start?: string;'],
    response:
      '{ schedule_entries: { final: object[]; overrides: object[]; scheduled: object[]; }; pagination_meta?: { after: string; after_url: string; }; }',
    markdown:
      "## list\n\n`client.scheduleEntries.list(schedule_id: string, entry_window_end?: string, entry_window_start?: string): { schedule_entries: object; pagination_meta?: object; }`\n\n**get** `/v2/schedule_entries`\n\nGet a list of schedule entries. The endpoint will return all entries that overlap with the given window, if one is provided.\n\n### Parameters\n\n- `schedule_id: string`\n  The ID of the schedule to get entries for.\n\n- `entry_window_end?: string`\n  The end of the window to get entries for.\n\n- `entry_window_start?: string`\n  The start of the window to get entries for.\n\n### Returns\n\n- `{ schedule_entries: { final: object[]; overrides: object[]; scheduled: object[]; }; pagination_meta?: { after: string; after_url: string; }; }`\n\n  - `schedule_entries: { final: { end_at: string; start_at: string; entry_id?: string; fingerprint?: string; layer_id?: string; rotation_id?: string; user?: object; }[]; overrides: { end_at: string; start_at: string; entry_id?: string; fingerprint?: string; layer_id?: string; rotation_id?: string; user?: object; }[]; scheduled: { end_at: string; start_at: string; entry_id?: string; fingerprint?: string; layer_id?: string; rotation_id?: string; user?: object; }[]; }`\n  - `pagination_meta?: { after: string; after_url: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst scheduleEntries = await client.scheduleEntries.list({ schedule_id: '01FDAG4SAP5TYPT98WGR2N7W91' });\n\nconsole.log(scheduleEntries);\n```",
    perLanguage: {
      typescript: {
        method: 'client.scheduleEntries.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst scheduleEntries = await client.scheduleEntries.list({\n  schedule_id: '01FDAG4SAP5TYPT98WGR2N7W91',\n});\n\nconsole.log(scheduleEntries.schedule_entries);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/schedule_entries \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v2/schedule_overrides',
    httpMethod: 'post',
    summary: 'CreateOverride Schedules V2',
    description: 'Create a new schedule override.',
    stainlessPath: '(resource) schedule_overrides > (method) create',
    qualified: 'client.scheduleOverrides.create',
    params: [
      'end_at: string;',
      'layer_id: string;',
      'rotation_id: string;',
      'schedule_id: string;',
      'start_at: string;',
      'user: { id?: string; email?: string; slack_user_id?: string; };',
    ],
    response:
      '{ override: { id: string; created_at: string; end_at: string; layer_id: string; rotation_id: string; schedule_id: string; start_at: string; updated_at: string; user?: object; }; }',
    markdown:
      "## create\n\n`client.scheduleOverrides.create(end_at: string, layer_id: string, rotation_id: string, schedule_id: string, start_at: string, user: { id?: string; email?: string; slack_user_id?: string; }): { override: object; }`\n\n**post** `/v2/schedule_overrides`\n\nCreate a new schedule override.\n\n### Parameters\n\n- `end_at: string`\n  End time of the override\n\n- `layer_id: string`\n  The layer this override applies to\n\n- `rotation_id: string`\n  The rotation this override applies to\n\n- `schedule_id: string`\n  The schedule this override applies to\n\n- `start_at: string`\n  Start time of the override\n\n- `user: { id?: string; email?: string; slack_user_id?: string; }`\n  - `id?: string`\n    The incident.io ID of a user\n  - `email?: string`\n    The user's email address, matching the email on their Slack account\n  - `slack_user_id?: string`\n    The ID of the user's Slack account.\n\n### Returns\n\n- `{ override: { id: string; created_at: string; end_at: string; layer_id: string; rotation_id: string; schedule_id: string; start_at: string; updated_at: string; user?: object; }; }`\n\n  - `override: { id: string; created_at: string; end_at: string; layer_id: string; rotation_id: string; schedule_id: string; start_at: string; updated_at: string; user?: { id: string; name: string; role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset'; email?: string; slack_user_id?: string; }; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst scheduleOverride = await client.scheduleOverrides.create({\n  end_at: '2021-08-17T14:00:00.000000Z',\n  layer_id: '01G0J1EXE7AXZ2C93K61WBPYNH',\n  rotation_id: '01G0J1EXE7AXZ2C93K61WBPYEH',\n  schedule_id: '01G0J1EXE7AXZ2C93K61WBPYEH',\n  start_at: '2021-08-17T13:00:00.000000Z',\n  user: {},\n});\n\nconsole.log(scheduleOverride);\n```",
    perLanguage: {
      typescript: {
        method: 'client.scheduleOverrides.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst scheduleOverride = await client.scheduleOverrides.create({\n  end_at: '2021-08-17T14:00:00.000000Z',\n  layer_id: '01G0J1EXE7AXZ2C93K61WBPYNH',\n  rotation_id: '01G0J1EXE7AXZ2C93K61WBPYEH',\n  schedule_id: '01G0J1EXE7AXZ2C93K61WBPYEH',\n  start_at: '2021-08-17T13:00:00.000000Z',\n  user: {\n    email: 'bob@example.com',\n    id: '01G0J1EXE7AXZ2C93K61WBPYEH',\n    slack_user_id: 'USER123',\n  },\n});\n\nconsole.log(scheduleOverride.override);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/schedule_overrides \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "end_at": "2021-08-17T14:00:00.000000Z",\n          "layer_id": "01G0J1EXE7AXZ2C93K61WBPYNH",\n          "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",\n          "schedule_id": "01G0J1EXE7AXZ2C93K61WBPYEH",\n          "start_at": "2021-08-17T13:00:00.000000Z",\n          "user": {\n            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",\n            "email": "bob@example.com",\n            "slack_user_id": "USER123"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v2/schedules',
    httpMethod: 'get',
    summary: 'List Schedules V2',
    description: 'List configured schedules.',
    stainlessPath: '(resource) schedules > (method) list',
    qualified: 'client.schedules.list',
    params: ['after?: string;', 'page_size?: number;'],
    response:
      '{ schedules: { id: string; annotations: object; created_at: string; name: string; team_ids: string[]; timezone: string; updated_at: string; config?: object; current_shifts?: schedule_entry[]; holidays_public_config?: object; }[]; pagination_meta?: { page_size: number; after?: string; total_record_count?: number; }; }',
    markdown:
      "## list\n\n`client.schedules.list(after?: string, page_size?: number): { schedules: schedule[]; pagination_meta?: pagination_meta_result_with_total; }`\n\n**get** `/v2/schedules`\n\nList configured schedules.\n\n### Parameters\n\n- `after?: string`\n  A schedule's ID. This endpoint will return a list of schedules after this ID in relation to the API response order.\n\n- `page_size?: number`\n  Integer number of records to return\n\n### Returns\n\n- `{ schedules: { id: string; annotations: object; created_at: string; name: string; team_ids: string[]; timezone: string; updated_at: string; config?: object; current_shifts?: schedule_entry[]; holidays_public_config?: object; }[]; pagination_meta?: { page_size: number; after?: string; total_record_count?: number; }; }`\n\n  - `schedules: { id: string; annotations: object; created_at: string; name: string; team_ids: string[]; timezone: string; updated_at: string; config?: { rotations: { id: string; handover_start_at: string; handovers: schedule_rotation_handover[]; layers: object[]; name: string; users: user_v2[]; working_intervals: schedule_rotation_working_interval[]; effective_from?: string; scheduling_mode?: 'fair' | 'sequential'; working_interval?: schedule_rotation_working_interval[]; }[]; }; current_shifts?: { end_at: string; start_at: string; entry_id?: string; fingerprint?: string; layer_id?: string; rotation_id?: string; user?: user_v2; }[]; holidays_public_config?: { country_codes: string[]; }; }[]`\n  - `pagination_meta?: { page_size: number; after?: string; total_record_count?: number; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst schedules = await client.schedules.list();\n\nconsole.log(schedules);\n```",
    perLanguage: {
      typescript: {
        method: 'client.schedules.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst schedules = await client.schedules.list();\n\nconsole.log(schedules.schedules);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/schedules \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v2/schedules',
    httpMethod: 'post',
    summary: 'Create Schedules V2',
    description: 'Create a new schedule.',
    stainlessPath: '(resource) schedules > (method) create',
    qualified: 'client.schedules.create',
    params: [
      "schedule: { annotations?: object; config?: { rotations?: { name: string; id?: string; effective_from?: string; handover_start_at?: string; handovers?: object[]; layers?: { name: string; id?: string; }[]; scheduling_mode?: 'fair' | 'sequential'; users?: object[]; working_interval?: { end_time: string; start_time: string; weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'; }[]; }[]; }; holidays_public_config?: { country_codes: string[]; }; name?: string; team_ids?: string[]; timezone?: string; };",
    ],
    response:
      '{ schedule: { id: string; annotations: object; created_at: string; name: string; team_ids: string[]; timezone: string; updated_at: string; config?: object; current_shifts?: schedule_entry[]; holidays_public_config?: object; }; }',
    markdown:
      "## create\n\n`client.schedules.create(schedule: { annotations?: object; config?: { rotations?: object[]; }; holidays_public_config?: object; name?: string; team_ids?: string[]; timezone?: string; }): { schedule: schedule; }`\n\n**post** `/v2/schedules`\n\nCreate a new schedule.\n\n### Parameters\n\n- `schedule: { annotations?: object; config?: { rotations?: { name: string; id?: string; effective_from?: string; handover_start_at?: string; handovers?: object[]; layers?: { name: string; id?: string; }[]; scheduling_mode?: 'fair' | 'sequential'; users?: object[]; working_interval?: { end_time: string; start_time: string; weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'; }[]; }[]; }; holidays_public_config?: { country_codes: string[]; }; name?: string; team_ids?: string[]; timezone?: string; }`\n  - `annotations?: object`\n    Annotations that can track metadata about the schedule\n  - `config?: { rotations?: { name: string; id?: string; effective_from?: string; handover_start_at?: string; handovers?: { interval?: number; interval_type?: 'hourly' | 'daily' | 'weekly'; }[]; layers?: { name: string; id?: string; }[]; scheduling_mode?: 'fair' | 'sequential'; users?: { id?: string; email?: string; slack_user_id?: string; }[]; working_interval?: { end_time: string; start_time: string; weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'; }[]; }[]; }`\n  - `holidays_public_config?: { country_codes: string[]; }`\n  - `name?: string`\n    Name of the schedule\n  - `team_ids?: string[]`\n    IDs of teams that own this schedule\n  - `timezone?: string`\n    Timezone of the schedule\n\n### Returns\n\n- `{ schedule: { id: string; annotations: object; created_at: string; name: string; team_ids: string[]; timezone: string; updated_at: string; config?: object; current_shifts?: schedule_entry[]; holidays_public_config?: object; }; }`\n\n  - `schedule: { id: string; annotations: object; created_at: string; name: string; team_ids: string[]; timezone: string; updated_at: string; config?: { rotations: { id: string; handover_start_at: string; handovers: schedule_rotation_handover[]; layers: object[]; name: string; users: user_v2[]; working_intervals: schedule_rotation_working_interval[]; effective_from?: string; scheduling_mode?: 'fair' | 'sequential'; working_interval?: schedule_rotation_working_interval[]; }[]; }; current_shifts?: { end_at: string; start_at: string; entry_id?: string; fingerprint?: string; layer_id?: string; rotation_id?: string; user?: user_v2; }[]; holidays_public_config?: { country_codes: string[]; }; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst schedule = await client.schedules.create({ schedule: {} });\n\nconsole.log(schedule);\n```",
    perLanguage: {
      typescript: {
        method: 'client.schedules.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst schedule = await client.schedules.create({\n  schedule: {\n    annotations: { 'incident.io/terraform/version': 'version-of-terraform' },\n    config: {\n      rotations: [\n        {\n          effective_from: '2021-08-17T13:28:57.801578Z',\n          handover_start_at: '2021-08-17T13:28:57.801578Z',\n          handovers: [{ interval: 1, interval_type: 'hourly' }],\n          id: '01G0J1EXE7AXZ2C93K61WBPYEH',\n          layers: [{ id: '01G0J1EXE7AXZ2C93K61WBPYEH', name: 'Layer 1' }],\n          name: 'My Rotation',\n          scheduling_mode: 'fair',\n          users: [\n            {\n              email: 'bob@example.com',\n              id: '01G0J1EXE7AXZ2C93K61WBPYEH',\n              slack_user_id: 'USER123',\n            },\n          ],\n          working_interval: [\n            {\n              end_time: '17:00',\n              start_time: '09:00',\n              weekday: 'monday',\n            },\n          ],\n        },\n      ],\n    },\n    holidays_public_config: { country_codes: ['abc123'] },\n    name: 'Primary On-call Schedule',\n    team_ids: ['01JPQA75EPNEES4479P16P4XAB'],\n    timezone: 'America/Los_Angeles',\n  },\n});\n\nconsole.log(schedule.schedule);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/schedules \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "schedule": {\n            "annotations": {\n              "incident.io/terraform/version": "version-of-terraform"\n            },\n            "config": {\n              "rotations": [\n                {\n                  "name": "My Rotation",\n                  "id": "01G0J1EXE7AXZ2C93K61WBPYEH",\n                  "effective_from": "2021-08-17T13:28:57.801578Z",\n                  "handover_start_at": "2021-08-17T13:28:57.801578Z",\n                  "handovers": [\n                    {\n                      "interval": 1,\n                      "interval_type": "hourly"\n                    }\n                  ],\n                  "layers": [\n                    {\n                      "name": "Layer 1",\n                      "id": "01G0J1EXE7AXZ2C93K61WBPYEH"\n                    }\n                  ],\n                  "scheduling_mode": "fair",\n                  "users": [\n                    {\n                      "id": "01G0J1EXE7AXZ2C93K61WBPYEH",\n                      "email": "bob@example.com",\n                      "slack_user_id": "USER123"\n                    }\n                  ],\n                  "working_interval": [\n                    {\n                      "end_time": "17:00",\n                      "start_time": "09:00",\n                      "weekday": "monday"\n                    }\n                  ]\n                }\n              ]\n            },\n            "holidays_public_config": {\n              "country_codes": [\n                "abc123"\n              ]\n            },\n            "name": "Primary On-call Schedule",\n            "team_ids": [\n              "01JPQA75EPNEES4479P16P4XAB"\n            ],\n            "timezone": "America/Los_Angeles"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v2/schedules/{id}',
    httpMethod: 'delete',
    summary: 'Destroy Schedules V2',
    description: 'Archives a single schedule.',
    stainlessPath: '(resource) schedules > (method) delete',
    qualified: 'client.schedules.delete',
    params: ['id: string;'],
    markdown:
      "## delete\n\n`client.schedules.delete(id: string): void`\n\n**delete** `/v2/schedules/{id}`\n\nArchives a single schedule.\n\n### Parameters\n\n- `id: string`\n  Unique internal ID of the schedule\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.schedules.delete('01G0J1EXE7AXZ2C93K61WBPYEH')\n```",
    perLanguage: {
      typescript: {
        method: 'client.schedules.delete',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.schedules.delete('01G0J1EXE7AXZ2C93K61WBPYEH');",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/schedules/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v2/schedules/{id}',
    httpMethod: 'get',
    summary: 'Show Schedules V2',
    description: 'Get a single schedule.',
    stainlessPath: '(resource) schedules > (method) retrieve',
    qualified: 'client.schedules.retrieve',
    params: ['id: string;'],
    response:
      '{ schedule: { id: string; annotations: object; created_at: string; name: string; team_ids: string[]; timezone: string; updated_at: string; config?: object; current_shifts?: schedule_entry[]; holidays_public_config?: object; }; }',
    markdown:
      "## retrieve\n\n`client.schedules.retrieve(id: string): { schedule: schedule; }`\n\n**get** `/v2/schedules/{id}`\n\nGet a single schedule.\n\n### Parameters\n\n- `id: string`\n  Unique internal ID of the schedule\n\n### Returns\n\n- `{ schedule: { id: string; annotations: object; created_at: string; name: string; team_ids: string[]; timezone: string; updated_at: string; config?: object; current_shifts?: schedule_entry[]; holidays_public_config?: object; }; }`\n\n  - `schedule: { id: string; annotations: object; created_at: string; name: string; team_ids: string[]; timezone: string; updated_at: string; config?: { rotations: { id: string; handover_start_at: string; handovers: schedule_rotation_handover[]; layers: object[]; name: string; users: user_v2[]; working_intervals: schedule_rotation_working_interval[]; effective_from?: string; scheduling_mode?: 'fair' | 'sequential'; working_interval?: schedule_rotation_working_interval[]; }[]; }; current_shifts?: { end_at: string; start_at: string; entry_id?: string; fingerprint?: string; layer_id?: string; rotation_id?: string; user?: user_v2; }[]; holidays_public_config?: { country_codes: string[]; }; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst schedule = await client.schedules.retrieve('01G0J1EXE7AXZ2C93K61WBPYEH');\n\nconsole.log(schedule);\n```",
    perLanguage: {
      typescript: {
        method: 'client.schedules.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst schedule = await client.schedules.retrieve('01G0J1EXE7AXZ2C93K61WBPYEH');\n\nconsole.log(schedule.schedule);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/schedules/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v2/schedules/{id}',
    httpMethod: 'put',
    summary: 'Update Schedules V2',
    description: 'Update a schedule.',
    stainlessPath: '(resource) schedules > (method) update',
    qualified: 'client.schedules.update',
    params: [
      'id: string;',
      "schedule: { annotations?: object; config?: { rotations?: { id?: string; effective_from?: string; handover_start_at?: string; handovers?: object[]; layers?: { id?: string; name?: string; }[]; name?: string; scheduling_mode?: 'fair' | 'sequential'; users?: object[]; working_interval?: object[]; }[]; }; holidays_public_config?: { country_codes: string[]; }; name?: string; team_ids?: string[]; timezone?: string; };",
    ],
    response:
      '{ schedule: { id: string; annotations: object; created_at: string; name: string; team_ids: string[]; timezone: string; updated_at: string; config?: object; current_shifts?: schedule_entry[]; holidays_public_config?: object; }; }',
    markdown:
      "## update\n\n`client.schedules.update(id: string, schedule: { annotations?: object; config?: { rotations?: object[]; }; holidays_public_config?: object; name?: string; team_ids?: string[]; timezone?: string; }): { schedule: schedule; }`\n\n**put** `/v2/schedules/{id}`\n\nUpdate a schedule.\n\n### Parameters\n\n- `id: string`\n  The schedule ID to update.\n\n- `schedule: { annotations?: object; config?: { rotations?: { id?: string; effective_from?: string; handover_start_at?: string; handovers?: object[]; layers?: { id?: string; name?: string; }[]; name?: string; scheduling_mode?: 'fair' | 'sequential'; users?: object[]; working_interval?: object[]; }[]; }; holidays_public_config?: { country_codes: string[]; }; name?: string; team_ids?: string[]; timezone?: string; }`\n  - `annotations?: object`\n    Annotations that can track metadata about the schedule\n  - `config?: { rotations?: { id?: string; effective_from?: string; handover_start_at?: string; handovers?: { interval?: number; interval_type?: 'hourly' | 'daily' | 'weekly'; }[]; layers?: { id?: string; name?: string; }[]; name?: string; scheduling_mode?: 'fair' | 'sequential'; users?: { id?: string; email?: string; slack_user_id?: string; }[]; working_interval?: { end_time: string; start_time: string; weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'; }[]; }[]; }`\n  - `holidays_public_config?: { country_codes: string[]; }`\n  - `name?: string`\n    Name of the schedule\n  - `team_ids?: string[]`\n    IDs of teams that own this schedule\n  - `timezone?: string`\n    Timezone of the schedule\n\n### Returns\n\n- `{ schedule: { id: string; annotations: object; created_at: string; name: string; team_ids: string[]; timezone: string; updated_at: string; config?: object; current_shifts?: schedule_entry[]; holidays_public_config?: object; }; }`\n\n  - `schedule: { id: string; annotations: object; created_at: string; name: string; team_ids: string[]; timezone: string; updated_at: string; config?: { rotations: { id: string; handover_start_at: string; handovers: schedule_rotation_handover[]; layers: object[]; name: string; users: user_v2[]; working_intervals: schedule_rotation_working_interval[]; effective_from?: string; scheduling_mode?: 'fair' | 'sequential'; working_interval?: schedule_rotation_working_interval[]; }[]; }; current_shifts?: { end_at: string; start_at: string; entry_id?: string; fingerprint?: string; layer_id?: string; rotation_id?: string; user?: user_v2; }[]; holidays_public_config?: { country_codes: string[]; }; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst schedule = await client.schedules.update('01G0J1EXE7AXZ2C93K61WBPYEH', { schedule: {} });\n\nconsole.log(schedule);\n```",
    perLanguage: {
      typescript: {
        method: 'client.schedules.update',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst schedule = await client.schedules.update('01G0J1EXE7AXZ2C93K61WBPYEH', {\n  schedule: {\n    annotations: { 'incident.io/terraform/version': 'version-of-terraform' },\n    config: {\n      rotations: [\n        {\n          effective_from: '2021-08-17T13:28:57.801578Z',\n          handover_start_at: '2021-08-17T13:28:57.801578Z',\n          handovers: [{ interval: 1, interval_type: 'hourly' }],\n          id: '01G0J1EXE7AXZ2C93K61WBPYEH',\n          layers: [{ id: '01G0J1EXE7AXZ2C93K61WBPYEH', name: 'Layer 1' }],\n          name: 'My Rotation',\n          scheduling_mode: 'fair',\n          users: [\n            {\n              email: 'bob@example.com',\n              id: '01G0J1EXE7AXZ2C93K61WBPYEH',\n              slack_user_id: 'USER123',\n            },\n          ],\n          working_interval: [\n            {\n              end_time: '17:00',\n              start_time: '09:00',\n              weekday: 'monday',\n            },\n          ],\n        },\n      ],\n    },\n    holidays_public_config: { country_codes: ['abc123'] },\n    name: 'Primary On-call Schedule',\n    team_ids: ['01JPQA75EPNEES4479P16P4XAB'],\n    timezone: 'America/Los_Angeles',\n  },\n});\n\nconsole.log(schedule.schedule);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/schedules/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "schedule": {\n            "annotations": {\n              "incident.io/terraform/version": "version-of-terraform"\n            },\n            "config": {\n              "rotations": [\n                {\n                  "id": "01G0J1EXE7AXZ2C93K61WBPYEH",\n                  "effective_from": "2021-08-17T13:28:57.801578Z",\n                  "handover_start_at": "2021-08-17T13:28:57.801578Z",\n                  "handovers": [\n                    {\n                      "interval": 1,\n                      "interval_type": "hourly"\n                    }\n                  ],\n                  "layers": [\n                    {\n                      "id": "01G0J1EXE7AXZ2C93K61WBPYEH",\n                      "name": "Layer 1"\n                    }\n                  ],\n                  "name": "My Rotation",\n                  "scheduling_mode": "fair",\n                  "users": [\n                    {\n                      "id": "01G0J1EXE7AXZ2C93K61WBPYEH",\n                      "email": "bob@example.com",\n                      "slack_user_id": "USER123"\n                    }\n                  ],\n                  "working_interval": [\n                    {\n                      "end_time": "17:00",\n                      "start_time": "09:00",\n                      "weekday": "monday"\n                    }\n                  ]\n                }\n              ]\n            },\n            "holidays_public_config": {\n              "country_codes": [\n                "abc123"\n              ]\n            },\n            "name": "Primary On-call Schedule",\n            "team_ids": [\n              "01JPQA75EPNEES4479P16P4XAB"\n            ],\n            "timezone": "America/Los_Angeles"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v2/users',
    httpMethod: 'get',
    summary: 'List Users V2',
    description: 'List users in your account.',
    stainlessPath: '(resource) users > (method) list',
    qualified: 'client.users.list',
    params: ['after?: string;', 'email?: string;', 'page_size?: number;', 'slack_user_id?: string;'],
    response:
      "{ pagination_meta: { page_size: number; after?: string; }; users: { id: string; base_role: rbac_role; custom_roles: rbac_role[]; name: string; role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset'; email?: string; slack_user_id?: string; }[]; }",
    markdown:
      "## list\n\n`client.users.list(after?: string, email?: string, page_size?: number, slack_user_id?: string): { pagination_meta: pagination_meta_result; users: user_with_roles[]; }`\n\n**get** `/v2/users`\n\nList users in your account.\n\n### Parameters\n\n- `after?: string`\n  An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.\n\n- `email?: string`\n  Filter by email address\n\n- `page_size?: number`\n  Integer number of records to return\n\n- `slack_user_id?: string`\n  Filter by Slack user ID\n\n### Returns\n\n- `{ pagination_meta: { page_size: number; after?: string; }; users: { id: string; base_role: rbac_role; custom_roles: rbac_role[]; name: string; role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset'; email?: string; slack_user_id?: string; }[]; }`\n\n  - `pagination_meta: { page_size: number; after?: string; }`\n  - `users: { id: string; base_role: { id: string; name: string; slug: string; description?: string; }; custom_roles: { id: string; name: string; slug: string; description?: string; }[]; name: string; role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset'; email?: string; slack_user_id?: string; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst users = await client.users.list();\n\nconsole.log(users);\n```",
    perLanguage: {
      typescript: {
        method: 'client.users.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst users = await client.users.list();\n\nconsole.log(users.pagination_meta);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/users \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v2/users/{id}',
    httpMethod: 'get',
    summary: 'Show Users V2',
    description: 'Get a single user.',
    stainlessPath: '(resource) users > (method) retrieve',
    qualified: 'client.users.retrieve',
    params: ['id: string;'],
    response:
      "{ user: { id: string; base_role: rbac_role; custom_roles: rbac_role[]; name: string; role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset'; email?: string; slack_user_id?: string; }; }",
    markdown:
      "## retrieve\n\n`client.users.retrieve(id: string): { user: user_with_roles; }`\n\n**get** `/v2/users/{id}`\n\nGet a single user.\n\n### Parameters\n\n- `id: string`\n  Unique identifier of the user\n\n### Returns\n\n- `{ user: { id: string; base_role: rbac_role; custom_roles: rbac_role[]; name: string; role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset'; email?: string; slack_user_id?: string; }; }`\n\n  - `user: { id: string; base_role: { id: string; name: string; slug: string; description?: string; }; custom_roles: { id: string; name: string; slug: string; description?: string; }[]; name: string; role: 'viewer' | 'responder' | 'administrator' | 'owner' | 'unset'; email?: string; slack_user_id?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst user = await client.users.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(user);\n```",
    perLanguage: {
      typescript: {
        method: 'client.users.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst user = await client.users.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(user.user);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/users/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v2/workflows',
    httpMethod: 'get',
    summary: 'ListWorkflows Workflows V2',
    description: 'List all workflows',
    stainlessPath: '(resource) workflows > (method) list',
    qualified: 'client.workflows.list',
    response:
      "{ workflows: { id: string; condition_groups: object[]; continue_on_step_error: boolean; expressions: object[]; include_private_incidents: boolean; name: string; once_for: object[]; runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[]; runs_on_incidents: 'newly_created' | 'newly_created_and_active'; state: 'active' | 'disabled' | 'draft' | 'error'; steps: { label: string; name: string; }[]; trigger: object; version: number; delay?: object; folder?: string; runs_from?: string; shortform?: string; }[]; }",
    markdown:
      "## list\n\n`client.workflows.list(): { workflows: object[]; }`\n\n**get** `/v2/workflows`\n\nList all workflows\n\n### Returns\n\n- `{ workflows: { id: string; condition_groups: object[]; continue_on_step_error: boolean; expressions: object[]; include_private_incidents: boolean; name: string; once_for: object[]; runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[]; runs_on_incidents: 'newly_created' | 'newly_created_and_active'; state: 'active' | 'disabled' | 'draft' | 'error'; steps: { label: string; name: string; }[]; trigger: object; version: number; delay?: object; folder?: string; runs_from?: string; shortform?: string; }[]; }`\n\n  - `workflows: { id: string; condition_groups: { conditions: { operation: object; param_bindings: engine_param_binding[]; subject: object; }[]; }[]; continue_on_step_error: boolean; expressions: { label: string; operations: { operation_type: string; returns: returns_meta; branches?: object; filter?: object; navigate?: object; parse?: object; }[]; reference: string; returns: object; root_reference: string; else_branch?: { result: engine_param_binding; }; }[]; include_private_incidents: boolean; name: string; once_for: { array: boolean; key: string; label: string; type: string; }[]; runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[]; runs_on_incidents: 'newly_created' | 'newly_created_and_active'; state: 'active' | 'disabled' | 'draft' | 'error'; steps: { label: string; name: string; }[]; trigger: { label: string; name: string; }; version: number; delay?: { conditions_apply_over_delay: boolean; for_seconds: number; }; folder?: string; runs_from?: string; shortform?: string; }[]`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst workflows = await client.workflows.list();\n\nconsole.log(workflows);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.list',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst workflows = await client.workflows.list();\n\nconsole.log(workflows.workflows);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/workflows \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v2/workflows',
    httpMethod: 'post',
    summary: 'CreateWorkflow Workflows V2',
    description: 'Create a new workflow',
    stainlessPath: '(resource) workflows > (method) create',
    qualified: 'client.workflows.create',
    params: [
      'condition_groups: { conditions: { operation: string; param_bindings: object[]; subject: string; }[]; }[];',
      'continue_on_step_error: boolean;',
      'expressions: { label: string; operations: { operation_type: string; branches?: { branches: object[]; returns: returns_meta; }; concatenate?: { reference: string; }; filter?: { condition_groups: condition_group_payload[]; }; navigate?: { reference: string; }; parse?: { returns: returns_meta; source: string; }; }[]; reference: string; root_reference: string; else_branch?: { result: object; }; }[];',
      'include_private_incidents: boolean;',
      'name: string;',
      'once_for: string[];',
      "runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[];",
      "runs_on_incidents: 'newly_created' | 'newly_created_and_active';",
      'steps: { id: string; name: string; param_bindings: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }[]; for_each?: string; }[];',
      'trigger: string;',
      'annotations?: object;',
      'delay?: { conditions_apply_over_delay: boolean; for_seconds: number; };',
      'folder?: string;',
      'shortform?: string;',
      "state?: 'active' | 'disabled' | 'draft' | 'error';",
    ],
    response:
      "{ management_meta: { annotations: object; managed_by: 'dashboard' | 'terraform' | 'external'; source_url?: string; }; workflow: { id: string; condition_groups: condition_group[]; continue_on_step_error: boolean; expressions: expression[]; include_private_incidents: boolean; name: string; once_for: engine_reference[]; runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[]; runs_on_incidents: 'newly_created' | 'newly_created_and_active'; state: 'active' | 'disabled' | 'draft' | 'error'; steps: object[]; trigger: trigger_slim; version: number; delay?: workflow_delay; folder?: string; runs_from?: string; shortform?: string; }; }",
    markdown:
      "## create\n\n`client.workflows.create(condition_groups: { conditions: object[]; }[], continue_on_step_error: boolean, expressions: { label: string; operations: object[]; reference: string; root_reference: string; else_branch?: object; }[], include_private_incidents: boolean, name: string, once_for: string[], runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[], runs_on_incidents: 'newly_created' | 'newly_created_and_active', steps: { id: string; name: string; param_bindings: engine_param_binding_payload[]; for_each?: string; }[], trigger: string, annotations?: object, delay?: { conditions_apply_over_delay: boolean; for_seconds: number; }, folder?: string, shortform?: string, state?: 'active' | 'disabled' | 'draft' | 'error'): { management_meta: management_meta; workflow: workflow; }`\n\n**post** `/v2/workflows`\n\nCreate a new workflow\n\n### Parameters\n\n- `condition_groups: { conditions: { operation: string; param_bindings: object[]; subject: string; }[]; }[]`\n  Conditions that apply to the workflow trigger\n\n- `continue_on_step_error: boolean`\n  Whether to continue executing the workflow if a step fails\n\n- `expressions: { label: string; operations: { operation_type: string; branches?: { branches: object[]; returns: returns_meta; }; concatenate?: { reference: string; }; filter?: { condition_groups: condition_group_payload[]; }; navigate?: { reference: string; }; parse?: { returns: returns_meta; source: string; }; }[]; reference: string; root_reference: string; else_branch?: { result: object; }; }[]`\n  The expressions to use in the workflow\n\n- `include_private_incidents: boolean`\n  Whether to include private incidents\n\n- `name: string`\n  Name provided by the user when creating the workflow\n\n- `once_for: string[]`\n  This workflow will run 'once for' a list of references\n\n- `runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[]`\n  Which incident modes should this workflow run on? By default, workflows only run on standard incidents, but can also be configured to run on test and retrospective incidents.\n\n- `runs_on_incidents: 'newly_created' | 'newly_created_and_active'`\n  Which incidents should the workflow be applied to?\n\n- `steps: { id: string; name: string; param_bindings: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }[]; for_each?: string; }[]`\n  Steps that are executed as part of the workflow\n\n- `trigger: string`\n  Trigger to set on the workflow\n\n- `annotations?: object`\n  Annotations that track metadata about this resource\n\n- `delay?: { conditions_apply_over_delay: boolean; for_seconds: number; }`\n  - `conditions_apply_over_delay: boolean`\n    If this workflow is delayed, whether the conditions should be rechecked between trigger firing and execution\n  - `for_seconds: number`\n    Delay in seconds between trigger firing and running the workflow\n\n- `folder?: string`\n  Folder to display the workflow in\n\n- `shortform?: string`\n  The shortform used to trigger this workflow (only applicable for manual triggers)\n\n- `state?: 'active' | 'disabled' | 'draft' | 'error'`\n  What state this workflow is in\n\n### Returns\n\n- `{ management_meta: { annotations: object; managed_by: 'dashboard' | 'terraform' | 'external'; source_url?: string; }; workflow: { id: string; condition_groups: condition_group[]; continue_on_step_error: boolean; expressions: expression[]; include_private_incidents: boolean; name: string; once_for: engine_reference[]; runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[]; runs_on_incidents: 'newly_created' | 'newly_created_and_active'; state: 'active' | 'disabled' | 'draft' | 'error'; steps: object[]; trigger: trigger_slim; version: number; delay?: workflow_delay; folder?: string; runs_from?: string; shortform?: string; }; }`\n\n  - `management_meta: { annotations: object; managed_by: 'dashboard' | 'terraform' | 'external'; source_url?: string; }`\n  - `workflow: { id: string; condition_groups: { conditions: object[]; }[]; continue_on_step_error: boolean; expressions: { label: string; operations: object[]; reference: string; returns: returns_meta; root_reference: string; else_branch?: object; }[]; include_private_incidents: boolean; name: string; once_for: { array: boolean; key: string; label: string; type: string; }[]; runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[]; runs_on_incidents: 'newly_created' | 'newly_created_and_active'; state: 'active' | 'disabled' | 'draft' | 'error'; steps: { id: string; label: string; name: string; param_bindings: object[]; for_each?: string; }[]; trigger: { label: string; name: string; }; version: number; delay?: { conditions_apply_over_delay: boolean; for_seconds: number; }; folder?: string; runs_from?: string; shortform?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst workflow = await client.workflows.create({\n  condition_groups: [{ conditions: [{\n  operation: 'one_of',\n  param_bindings: [{}],\n  subject: 'incident.severity',\n}] }],\n  continue_on_step_error: true,\n  expressions: [{\n  label: 'Team Slack channel',\n  operations: [{ operation_type: 'navigate' }],\n  reference: 'abc123',\n  root_reference: 'incident.status',\n}],\n  include_private_incidents: true,\n  name: 'My little workflow',\n  once_for: ['incident.url'],\n  runs_on_incident_modes: ['standard', 'test', 'retrospective'],\n  runs_on_incidents: 'newly_created',\n  steps: [{\n  id: 'abc123',\n  name: 'pagerduty.escalate',\n  param_bindings: [{}],\n}],\n  trigger: 'incident.updated',\n});\n\nconsole.log(workflow);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.create',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst workflow = await client.workflows.create({\n  condition_groups: [\n    {\n      conditions: [\n        {\n          operation: 'one_of',\n          param_bindings: [\n            {\n              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n              value: { literal: 'SEV123', reference: 'incident.severity' },\n            },\n          ],\n          subject: 'incident.severity',\n        },\n      ],\n    },\n  ],\n  continue_on_step_error: true,\n  expressions: [\n    {\n      else_branch: {\n        result: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n      },\n      label: 'Team Slack channel',\n      operations: [\n        {\n          branches: {\n            branches: [\n              {\n                condition_groups: [\n                  {\n                    conditions: [\n                      {\n                        operation: 'one_of',\n                        param_bindings: [\n                          {\n                            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                            value: { literal: 'SEV123', reference: 'incident.severity' },\n                          },\n                        ],\n                        subject: 'incident.severity',\n                      },\n                    ],\n                  },\n                ],\n                result: {\n                  array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                  value: { literal: 'SEV123', reference: 'incident.severity' },\n                },\n              },\n            ],\n            returns: { array: true, type: 'IncidentStatus' },\n          },\n          concatenate: { reference: 'catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]' },\n          filter: {\n            condition_groups: [\n              {\n                conditions: [\n                  {\n                    operation: 'one_of',\n                    param_bindings: [\n                      {\n                        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                        value: { literal: 'SEV123', reference: 'incident.severity' },\n                      },\n                    ],\n                    subject: 'incident.severity',\n                  },\n                ],\n              },\n            ],\n          },\n          navigate: { reference: 'catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]' },\n          operation_type: 'navigate',\n          parse: {\n            returns: { array: true, type: 'IncidentStatus' },\n            source: 'metadata.annotations[\"github.com/repo\"]',\n          },\n        },\n      ],\n      reference: 'abc123',\n      root_reference: 'incident.status',\n    },\n  ],\n  include_private_incidents: true,\n  name: 'My little workflow',\n  once_for: ['incident.url'],\n  runs_on_incident_modes: ['standard', 'test', 'retrospective'],\n  runs_on_incidents: 'newly_created',\n  steps: [\n    {\n      for_each: 'abc123',\n      id: 'abc123',\n      name: 'pagerduty.escalate',\n      param_bindings: [\n        {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n      ],\n    },\n  ],\n  trigger: 'incident.updated',\n  annotations: { 'incident.io/terraform/version': '3.0.0' },\n  delay: { conditions_apply_over_delay: false, for_seconds: 60 },\n  folder: 'My folder 01',\n  shortform: 'page-the-ceo',\n  state: 'active',\n});\n\nconsole.log(workflow.management_meta);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/workflows \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "condition_groups": [\n            {\n              "conditions": [\n                {\n                  "operation": "one_of",\n                  "param_bindings": [\n                    {\n                      "array_value": [\n                        {\n                          "literal": "SEV123",\n                          "reference": "incident.severity"\n                        }\n                      ],\n                      "value": {\n                        "literal": "SEV123",\n                        "reference": "incident.severity"\n                      }\n                    }\n                  ],\n                  "subject": "incident.severity"\n                }\n              ]\n            }\n          ],\n          "continue_on_step_error": true,\n          "expressions": [\n            {\n              "label": "Team Slack channel",\n              "operations": [\n                {\n                  "operation_type": "navigate",\n                  "branches": {\n                    "branches": [\n                      {\n                        "condition_groups": [\n                          {\n                            "conditions": [\n                              {\n                                "operation": "one_of",\n                                "param_bindings": [\n                                  {\n                                    "array_value": [\n                                      {\n                                        "literal": "SEV123",\n                                        "reference": "incident.severity"\n                                      }\n                                    ],\n                                    "value": {\n                                      "literal": "SEV123",\n                                      "reference": "incident.severity"\n                                    }\n                                  }\n                                ],\n                                "subject": "incident.severity"\n                              }\n                            ]\n                          }\n                        ],\n                        "result": {\n                          "array_value": [\n                            {\n                              "literal": "SEV123",\n                              "reference": "incident.severity"\n                            }\n                          ],\n                          "value": {\n                            "literal": "SEV123",\n                            "reference": "incident.severity"\n                          }\n                        }\n                      }\n                    ],\n                    "returns": {\n                      "array": true,\n                      "type": "IncidentStatus"\n                    }\n                  },\n                  "concatenate": {\n                    "reference": "catalog_attribute[\\\\"01FCNDV6P870EA6S7TK1DSYD5H\\\\"]"\n                  },\n                  "filter": {\n                    "condition_groups": [\n                      {\n                        "conditions": [\n                          {\n                            "operation": "one_of",\n                            "param_bindings": [\n                              {\n                                "array_value": [\n                                  {\n                                    "literal": "SEV123",\n                                    "reference": "incident.severity"\n                                  }\n                                ],\n                                "value": {\n                                  "literal": "SEV123",\n                                  "reference": "incident.severity"\n                                }\n                              }\n                            ],\n                            "subject": "incident.severity"\n                          }\n                        ]\n                      }\n                    ]\n                  },\n                  "navigate": {\n                    "reference": "catalog_attribute[\\\\"01FCNDV6P870EA6S7TK1DSYD5H\\\\"]"\n                  },\n                  "parse": {\n                    "returns": {\n                      "array": true,\n                      "type": "IncidentStatus"\n                    },\n                    "source": "metadata.annotations[\\\\"github.com/repo\\\\"]"\n                  }\n                }\n              ],\n              "reference": "abc123",\n              "root_reference": "incident.status",\n              "else_branch": {\n                "result": {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                }\n              }\n            }\n          ],\n          "include_private_incidents": true,\n          "name": "My little workflow",\n          "once_for": [\n            "incident.url"\n          ],\n          "runs_on_incident_modes": [\n            "standard",\n            "test",\n            "retrospective"\n          ],\n          "runs_on_incidents": "newly_created",\n          "steps": [\n            {\n              "id": "abc123",\n              "name": "pagerduty.escalate",\n              "param_bindings": [\n                {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                }\n              ],\n              "for_each": "abc123"\n            }\n          ],\n          "trigger": "incident.updated",\n          "annotations": {\n            "incident.io/terraform/version": "3.0.0"\n          },\n          "delay": {\n            "conditions_apply_over_delay": false,\n            "for_seconds": 60\n          },\n          "folder": "My folder 01",\n          "shortform": "page-the-ceo",\n          "state": "active"\n        }\'',
      },
    },
  },
  {
    name: 'destroy',
    endpoint: '/v2/workflows/{id}',
    httpMethod: 'delete',
    summary: 'DestroyWorkflow Workflows V2',
    description: 'Archives a workflow',
    stainlessPath: '(resource) workflows > (method) destroy',
    qualified: 'client.workflows.destroy',
    params: ['id: string;'],
    markdown:
      "## destroy\n\n`client.workflows.destroy(id: string): void`\n\n**delete** `/v2/workflows/{id}`\n\nArchives a workflow\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the workflow\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nawait client.workflows.destroy('01FCNDV6P870EA6S7TK1DSYDG0')\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.destroy',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.workflows.destroy('01FCNDV6P870EA6S7TK1DSYDG0');",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/workflows/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/v2/workflows/{id}',
    httpMethod: 'get',
    summary: 'ShowWorkflow Workflows V2',
    description: 'Show a workflow by ID',
    stainlessPath: '(resource) workflows > (method) retrieve',
    qualified: 'client.workflows.retrieve',
    params: ['id: string;', 'skip_step_upgrades?: boolean;'],
    response:
      "{ management_meta: { annotations: object; managed_by: 'dashboard' | 'terraform' | 'external'; source_url?: string; }; workflow: { id: string; condition_groups: condition_group[]; continue_on_step_error: boolean; expressions: expression[]; include_private_incidents: boolean; name: string; once_for: engine_reference[]; runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[]; runs_on_incidents: 'newly_created' | 'newly_created_and_active'; state: 'active' | 'disabled' | 'draft' | 'error'; steps: object[]; trigger: trigger_slim; version: number; delay?: workflow_delay; folder?: string; runs_from?: string; shortform?: string; }; }",
    markdown:
      "## retrieve\n\n`client.workflows.retrieve(id: string, skip_step_upgrades?: boolean): { management_meta: management_meta; workflow: workflow; }`\n\n**get** `/v2/workflows/{id}`\n\nShow a workflow by ID\n\n### Parameters\n\n- `id: string`\n  Unique identifier for the workflow\n\n- `skip_step_upgrades?: boolean`\n  Skips workflow step upgrades, when the parameters for an existing workflow step change\n\n### Returns\n\n- `{ management_meta: { annotations: object; managed_by: 'dashboard' | 'terraform' | 'external'; source_url?: string; }; workflow: { id: string; condition_groups: condition_group[]; continue_on_step_error: boolean; expressions: expression[]; include_private_incidents: boolean; name: string; once_for: engine_reference[]; runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[]; runs_on_incidents: 'newly_created' | 'newly_created_and_active'; state: 'active' | 'disabled' | 'draft' | 'error'; steps: object[]; trigger: trigger_slim; version: number; delay?: workflow_delay; folder?: string; runs_from?: string; shortform?: string; }; }`\n\n  - `management_meta: { annotations: object; managed_by: 'dashboard' | 'terraform' | 'external'; source_url?: string; }`\n  - `workflow: { id: string; condition_groups: { conditions: object[]; }[]; continue_on_step_error: boolean; expressions: { label: string; operations: object[]; reference: string; returns: returns_meta; root_reference: string; else_branch?: object; }[]; include_private_incidents: boolean; name: string; once_for: { array: boolean; key: string; label: string; type: string; }[]; runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[]; runs_on_incidents: 'newly_created' | 'newly_created_and_active'; state: 'active' | 'disabled' | 'draft' | 'error'; steps: { id: string; label: string; name: string; param_bindings: object[]; for_each?: string; }[]; trigger: { label: string; name: string; }; version: number; delay?: { conditions_apply_over_delay: boolean; for_seconds: number; }; folder?: string; runs_from?: string; shortform?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst workflow = await client.workflows.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(workflow);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.retrieve',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst workflow = await client.workflows.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');\n\nconsole.log(workflow.management_meta);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/workflows/$ID \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v2/workflows/{id}',
    httpMethod: 'put',
    summary: 'UpdateWorkflow Workflows V2',
    description: 'Updates a workflow',
    stainlessPath: '(resource) workflows > (method) update',
    qualified: 'client.workflows.update',
    params: [
      'id: string;',
      'condition_groups: { conditions: { operation: string; param_bindings: object[]; subject: string; }[]; }[];',
      'continue_on_step_error: boolean;',
      'expressions: { label: string; operations: { operation_type: string; branches?: { branches: object[]; returns: returns_meta; }; concatenate?: { reference: string; }; filter?: { condition_groups: condition_group_payload[]; }; navigate?: { reference: string; }; parse?: { returns: returns_meta; source: string; }; }[]; reference: string; root_reference: string; else_branch?: { result: object; }; }[];',
      'include_private_incidents: boolean;',
      'name: string;',
      'once_for: string[];',
      "runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[];",
      "runs_on_incidents: 'newly_created' | 'newly_created_and_active';",
      'steps: { id: string; name: string; param_bindings: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }[]; for_each?: string; }[];',
      'annotations?: object;',
      'delay?: { conditions_apply_over_delay: boolean; for_seconds: number; };',
      'folder?: string;',
      'shortform?: string;',
      "state?: 'active' | 'disabled' | 'draft' | 'error';",
    ],
    response:
      "{ management_meta: { annotations: object; managed_by: 'dashboard' | 'terraform' | 'external'; source_url?: string; }; workflow: { id: string; condition_groups: condition_group[]; continue_on_step_error: boolean; expressions: expression[]; include_private_incidents: boolean; name: string; once_for: engine_reference[]; runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[]; runs_on_incidents: 'newly_created' | 'newly_created_and_active'; state: 'active' | 'disabled' | 'draft' | 'error'; steps: object[]; trigger: trigger_slim; version: number; delay?: workflow_delay; folder?: string; runs_from?: string; shortform?: string; }; }",
    markdown:
      "## update\n\n`client.workflows.update(id: string, condition_groups: { conditions: object[]; }[], continue_on_step_error: boolean, expressions: { label: string; operations: object[]; reference: string; root_reference: string; else_branch?: object; }[], include_private_incidents: boolean, name: string, once_for: string[], runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[], runs_on_incidents: 'newly_created' | 'newly_created_and_active', steps: { id: string; name: string; param_bindings: engine_param_binding_payload[]; for_each?: string; }[], annotations?: object, delay?: { conditions_apply_over_delay: boolean; for_seconds: number; }, folder?: string, shortform?: string, state?: 'active' | 'disabled' | 'draft' | 'error'): { management_meta: management_meta; workflow: workflow; }`\n\n**put** `/v2/workflows/{id}`\n\nUpdates a workflow\n\n### Parameters\n\n- `id: string`\n  ID of the workflow to update\n\n- `condition_groups: { conditions: { operation: string; param_bindings: object[]; subject: string; }[]; }[]`\n  Conditions that apply to the workflow trigger\n\n- `continue_on_step_error: boolean`\n  Whether to continue executing the workflow if a step fails\n\n- `expressions: { label: string; operations: { operation_type: string; branches?: { branches: object[]; returns: returns_meta; }; concatenate?: { reference: string; }; filter?: { condition_groups: condition_group_payload[]; }; navigate?: { reference: string; }; parse?: { returns: returns_meta; source: string; }; }[]; reference: string; root_reference: string; else_branch?: { result: object; }; }[]`\n  The expressions to use in the workflow\n\n- `include_private_incidents: boolean`\n  Whether to include private incidents\n\n- `name: string`\n  Name provided by the user when creating the workflow\n\n- `once_for: string[]`\n  This workflow will run 'once for' a list of references\n\n- `runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[]`\n  Which incident modes should this workflow run on? By default, workflows only run on standard incidents, but can also be configured to run on test and retrospective incidents.\n\n- `runs_on_incidents: 'newly_created' | 'newly_created_and_active'`\n  Which incidents should the workflow be applied to?\n\n- `steps: { id: string; name: string; param_bindings: { array_value?: param_binding_value_payload[]; value?: param_binding_value_payload; }[]; for_each?: string; }[]`\n  Steps that are executed as part of the workflow\n\n- `annotations?: object`\n  Annotations that track metadata about this resource\n\n- `delay?: { conditions_apply_over_delay: boolean; for_seconds: number; }`\n  - `conditions_apply_over_delay: boolean`\n    If this workflow is delayed, whether the conditions should be rechecked between trigger firing and execution\n  - `for_seconds: number`\n    Delay in seconds between trigger firing and running the workflow\n\n- `folder?: string`\n  Folder to display the workflow in\n\n- `shortform?: string`\n  The shortform used to trigger this workflow (only applicable for manual triggers)\n\n- `state?: 'active' | 'disabled' | 'draft' | 'error'`\n  What state this workflow is in\n\n### Returns\n\n- `{ management_meta: { annotations: object; managed_by: 'dashboard' | 'terraform' | 'external'; source_url?: string; }; workflow: { id: string; condition_groups: condition_group[]; continue_on_step_error: boolean; expressions: expression[]; include_private_incidents: boolean; name: string; once_for: engine_reference[]; runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[]; runs_on_incidents: 'newly_created' | 'newly_created_and_active'; state: 'active' | 'disabled' | 'draft' | 'error'; steps: object[]; trigger: trigger_slim; version: number; delay?: workflow_delay; folder?: string; runs_from?: string; shortform?: string; }; }`\n\n  - `management_meta: { annotations: object; managed_by: 'dashboard' | 'terraform' | 'external'; source_url?: string; }`\n  - `workflow: { id: string; condition_groups: { conditions: object[]; }[]; continue_on_step_error: boolean; expressions: { label: string; operations: object[]; reference: string; returns: returns_meta; root_reference: string; else_branch?: object; }[]; include_private_incidents: boolean; name: string; once_for: { array: boolean; key: string; label: string; type: string; }[]; runs_on_incident_modes: 'standard' | 'test' | 'retrospective'[]; runs_on_incidents: 'newly_created' | 'newly_created_and_active'; state: 'active' | 'disabled' | 'draft' | 'error'; steps: { id: string; label: string; name: string; param_bindings: object[]; for_each?: string; }[]; trigger: { label: string; name: string; }; version: number; delay?: { conditions_apply_over_delay: boolean; for_seconds: number; }; folder?: string; runs_from?: string; shortform?: string; }`\n\n### Example\n\n```typescript\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13();\n\nconst workflow = await client.workflows.update('01FCNDV6P870EA6S7TK1DSYDG0', {\n  condition_groups: [{ conditions: [{\n  operation: 'one_of',\n  param_bindings: [{}],\n  subject: 'incident.severity',\n}] }],\n  continue_on_step_error: true,\n  expressions: [{\n  label: 'Team Slack channel',\n  operations: [{ operation_type: 'navigate' }],\n  reference: 'abc123',\n  root_reference: 'incident.status',\n}],\n  include_private_incidents: true,\n  name: 'My little workflow',\n  once_for: ['incident.url'],\n  runs_on_incident_modes: ['standard', 'test', 'retrospective'],\n  runs_on_incidents: 'newly_created',\n  steps: [{\n  id: 'abc123',\n  name: 'pagerduty.escalate',\n  param_bindings: [{}],\n}],\n});\n\nconsole.log(workflow);\n```",
    perLanguage: {
      typescript: {
        method: 'client.workflows.update',
        example:
          "import IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst workflow = await client.workflows.update('01FCNDV6P870EA6S7TK1DSYDG0', {\n  condition_groups: [\n    {\n      conditions: [\n        {\n          operation: 'one_of',\n          param_bindings: [\n            {\n              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n              value: { literal: 'SEV123', reference: 'incident.severity' },\n            },\n          ],\n          subject: 'incident.severity',\n        },\n      ],\n    },\n  ],\n  continue_on_step_error: true,\n  expressions: [\n    {\n      else_branch: {\n        result: {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n      },\n      label: 'Team Slack channel',\n      operations: [\n        {\n          branches: {\n            branches: [\n              {\n                condition_groups: [\n                  {\n                    conditions: [\n                      {\n                        operation: 'one_of',\n                        param_bindings: [\n                          {\n                            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                            value: { literal: 'SEV123', reference: 'incident.severity' },\n                          },\n                        ],\n                        subject: 'incident.severity',\n                      },\n                    ],\n                  },\n                ],\n                result: {\n                  array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                  value: { literal: 'SEV123', reference: 'incident.severity' },\n                },\n              },\n            ],\n            returns: { array: true, type: 'IncidentStatus' },\n          },\n          concatenate: { reference: 'catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]' },\n          filter: {\n            condition_groups: [\n              {\n                conditions: [\n                  {\n                    operation: 'one_of',\n                    param_bindings: [\n                      {\n                        array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n                        value: { literal: 'SEV123', reference: 'incident.severity' },\n                      },\n                    ],\n                    subject: 'incident.severity',\n                  },\n                ],\n              },\n            ],\n          },\n          navigate: { reference: 'catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]' },\n          operation_type: 'navigate',\n          parse: {\n            returns: { array: true, type: 'IncidentStatus' },\n            source: 'metadata.annotations[\"github.com/repo\"]',\n          },\n        },\n      ],\n      reference: 'abc123',\n      root_reference: 'incident.status',\n    },\n  ],\n  include_private_incidents: true,\n  name: 'My little workflow',\n  once_for: ['incident.url'],\n  runs_on_incident_modes: ['standard', 'test', 'retrospective'],\n  runs_on_incidents: 'newly_created',\n  steps: [\n    {\n      for_each: 'abc123',\n      id: 'abc123',\n      name: 'pagerduty.escalate',\n      param_bindings: [\n        {\n          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],\n          value: { literal: 'SEV123', reference: 'incident.severity' },\n        },\n      ],\n    },\n  ],\n  annotations: { 'incident.io/terraform/version': '3.0.0' },\n  delay: { conditions_apply_over_delay: false, for_seconds: 60 },\n  folder: 'My folder 01',\n  shortform: 'page-the-ceo',\n  state: 'active',\n});\n\nconsole.log(workflow.management_meta);",
      },
      http: {
        example:
          'curl https://api.incident.io/v2/workflows/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $INCIDENT_IO_2_API_KEY" \\\n    -d \'{\n          "condition_groups": [\n            {\n              "conditions": [\n                {\n                  "operation": "one_of",\n                  "param_bindings": [\n                    {\n                      "array_value": [\n                        {\n                          "literal": "SEV123",\n                          "reference": "incident.severity"\n                        }\n                      ],\n                      "value": {\n                        "literal": "SEV123",\n                        "reference": "incident.severity"\n                      }\n                    }\n                  ],\n                  "subject": "incident.severity"\n                }\n              ]\n            }\n          ],\n          "continue_on_step_error": true,\n          "expressions": [\n            {\n              "label": "Team Slack channel",\n              "operations": [\n                {\n                  "operation_type": "navigate",\n                  "branches": {\n                    "branches": [\n                      {\n                        "condition_groups": [\n                          {\n                            "conditions": [\n                              {\n                                "operation": "one_of",\n                                "param_bindings": [\n                                  {\n                                    "array_value": [\n                                      {\n                                        "literal": "SEV123",\n                                        "reference": "incident.severity"\n                                      }\n                                    ],\n                                    "value": {\n                                      "literal": "SEV123",\n                                      "reference": "incident.severity"\n                                    }\n                                  }\n                                ],\n                                "subject": "incident.severity"\n                              }\n                            ]\n                          }\n                        ],\n                        "result": {\n                          "array_value": [\n                            {\n                              "literal": "SEV123",\n                              "reference": "incident.severity"\n                            }\n                          ],\n                          "value": {\n                            "literal": "SEV123",\n                            "reference": "incident.severity"\n                          }\n                        }\n                      }\n                    ],\n                    "returns": {\n                      "array": true,\n                      "type": "IncidentStatus"\n                    }\n                  },\n                  "concatenate": {\n                    "reference": "catalog_attribute[\\\\"01FCNDV6P870EA6S7TK1DSYD5H\\\\"]"\n                  },\n                  "filter": {\n                    "condition_groups": [\n                      {\n                        "conditions": [\n                          {\n                            "operation": "one_of",\n                            "param_bindings": [\n                              {\n                                "array_value": [\n                                  {\n                                    "literal": "SEV123",\n                                    "reference": "incident.severity"\n                                  }\n                                ],\n                                "value": {\n                                  "literal": "SEV123",\n                                  "reference": "incident.severity"\n                                }\n                              }\n                            ],\n                            "subject": "incident.severity"\n                          }\n                        ]\n                      }\n                    ]\n                  },\n                  "navigate": {\n                    "reference": "catalog_attribute[\\\\"01FCNDV6P870EA6S7TK1DSYD5H\\\\"]"\n                  },\n                  "parse": {\n                    "returns": {\n                      "array": true,\n                      "type": "IncidentStatus"\n                    },\n                    "source": "metadata.annotations[\\\\"github.com/repo\\\\"]"\n                  }\n                }\n              ],\n              "reference": "abc123",\n              "root_reference": "incident.status",\n              "else_branch": {\n                "result": {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                }\n              }\n            }\n          ],\n          "include_private_incidents": true,\n          "name": "My little workflow",\n          "once_for": [\n            "incident.url"\n          ],\n          "runs_on_incident_modes": [\n            "standard",\n            "test",\n            "retrospective"\n          ],\n          "runs_on_incidents": "newly_created",\n          "steps": [\n            {\n              "id": "abc123",\n              "name": "pagerduty.escalate",\n              "param_bindings": [\n                {\n                  "array_value": [\n                    {\n                      "literal": "SEV123",\n                      "reference": "incident.severity"\n                    }\n                  ],\n                  "value": {\n                    "literal": "SEV123",\n                    "reference": "incident.severity"\n                  }\n                }\n              ],\n              "for_each": "abc123"\n            }\n          ],\n          "annotations": {\n            "incident.io/terraform/version": "3.0.0"\n          },\n          "delay": {\n            "conditions_apply_over_delay": false,\n            "for_seconds": 60\n          },\n          "folder": "My folder 01",\n          "shortform": "page-the-ceo",\n          "state": "active"\n        }\'',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'typescript',
    content:
      "# Incident Io 13 TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/incident-io-2.svg?label=npm%20(stable))](https://npmjs.org/package/incident-io-2) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/incident-io-2)\n\nThis library provides convenient access to the Incident Io 13 REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [api-docs.incident.io](https://api-docs.incident.io/). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Incident Io 13 MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=incident-io-2-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImluY2lkZW50LWlvLTItbWNwIl0sImVudiI6eyJJTkNJREVOVF9JT18yX0FQSV9LRVkiOiJNeSBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22incident-io-2-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22incident-io-2-mcp%22%5D%2C%22env%22%3A%7B%22INCIDENT_IO_2_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install git+ssh://git@github.com:meorphis/test-repo-9.git\n```\n> [!NOTE]\n> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npm install incident-io-2`\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst actions = await client.actions.list();\n\nconsole.log(actions.actions);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  apiKey: process.env['INCIDENT_IO_2_API_KEY'], // This is the default and can be omitted\n});\n\nconst actions: IncidentIo13.ActionListResponse = await client.actions.list();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst actions = await client.actions.list().catch(async (err) => {\n  if (err instanceof IncidentIo13.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new IncidentIo13({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.actions.list({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new IncidentIo13({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.actions.list({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new IncidentIo13();\n\nconst response = await client.actions.list().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: actions, response: raw } = await client.actions.list().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(actions.actions);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `INCIDENT_IO_13_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport IncidentIo13 from 'incident-io-2';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new IncidentIo13({\n  logger: logger.child({ name: 'IncidentIo13' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.actions.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport IncidentIo13 from 'incident-io-2';\nimport fetch from 'my-fetch';\n\nconst client = new IncidentIo13({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport IncidentIo13 from 'incident-io-2';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new IncidentIo13({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport IncidentIo13 from 'incident-io-2';\n\nconst client = new IncidentIo13({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport IncidentIo13 from 'npm:incident-io-2';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new IncidentIo13({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/meorphis/test-repo-9/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
