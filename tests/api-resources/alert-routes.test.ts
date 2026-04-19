// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo13 from 'incident-io-2';

const client = new IncidentIo13({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource alertRoutes', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.alertRoutes.create({
      alert_sources: [
        {
          alert_source_id: '01FCNDV6P870EA6S7TK1DSYDG0',
          condition_groups: [
            {
              conditions: [
                {
                  operation: 'one_of',
                  param_bindings: [{}],
                  subject: 'incident.severity',
                },
              ],
            },
          ],
        },
      ],
      channel_config: [
        {
          condition_groups: [
            {
              conditions: [
                {
                  operation: 'one_of',
                  param_bindings: [{}],
                  subject: 'incident.severity',
                },
              ],
            },
          ],
        },
      ],
      condition_groups: [
        {
          conditions: [
            {
              operation: 'one_of',
              param_bindings: [{}],
              subject: 'incident.severity',
            },
          ],
        },
      ],
      enabled: false,
      escalation_config: { auto_cancel_escalations: false, escalation_targets: [{}] },
      expressions: [
        {
          label: 'Team Slack channel',
          operations: [{ operation_type: 'navigate' }],
          reference: 'abc123',
          root_reference: 'incident.status',
        },
      ],
      incident_config: {
        auto_decline_enabled: false,
        condition_groups: [
          {
            conditions: [
              {
                operation: 'one_of',
                param_bindings: [{}],
                subject: 'incident.severity',
              },
            ],
          },
        ],
        defer_time_seconds: 1,
        enabled: false,
        grouping_keys: [{ reference: 'alert.title' }],
        grouping_window_seconds: 1,
      },
      incident_template: { name: {} },
      is_private: false,
      name: 'Production incidents',
      version: 1,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.alertRoutes.create({
      alert_sources: [
        {
          alert_source_id: '01FCNDV6P870EA6S7TK1DSYDG0',
          condition_groups: [
            {
              conditions: [
                {
                  operation: 'one_of',
                  param_bindings: [
                    {
                      array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
                      value: { literal: 'SEV123', reference: 'incident.severity' },
                    },
                  ],
                  subject: 'incident.severity',
                },
              ],
            },
          ],
        },
      ],
      channel_config: [
        {
          condition_groups: [
            {
              conditions: [
                {
                  operation: 'one_of',
                  param_bindings: [
                    {
                      array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
                      value: { literal: 'SEV123', reference: 'incident.severity' },
                    },
                  ],
                  subject: 'incident.severity',
                },
              ],
            },
          ],
          ms_teams_targets: {
            binding: {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
            channel_visibility: 'abc123',
          },
          slack_targets: {
            binding: {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
            channel_visibility: 'abc123',
          },
        },
      ],
      condition_groups: [
        {
          conditions: [
            {
              operation: 'one_of',
              param_bindings: [
                {
                  array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
                  value: { literal: 'SEV123', reference: 'incident.severity' },
                },
              ],
              subject: 'incident.severity',
            },
          ],
        },
      ],
      enabled: false,
      escalation_config: {
        auto_cancel_escalations: false,
        escalation_targets: [
          {
            escalation_paths: {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
            users: {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
          },
        ],
      },
      expressions: [
        {
          label: 'Team Slack channel',
          operations: [
            {
              operation_type: 'navigate',
              branches: {
                branches: [
                  {
                    condition_groups: [
                      {
                        conditions: [
                          {
                            operation: 'one_of',
                            param_bindings: [
                              {
                                array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
                                value: { literal: 'SEV123', reference: 'incident.severity' },
                              },
                            ],
                            subject: 'incident.severity',
                          },
                        ],
                      },
                    ],
                    result: {
                      array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
                      value: { literal: 'SEV123', reference: 'incident.severity' },
                    },
                  },
                ],
                returns: { array: true, type: 'IncidentStatus' },
              },
              concatenate: { reference: 'catalog_attribute["01FCNDV6P870EA6S7TK1DSYD5H"]' },
              filter: {
                condition_groups: [
                  {
                    conditions: [
                      {
                        operation: 'one_of',
                        param_bindings: [
                          {
                            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
                            value: { literal: 'SEV123', reference: 'incident.severity' },
                          },
                        ],
                        subject: 'incident.severity',
                      },
                    ],
                  },
                ],
              },
              navigate: { reference: 'catalog_attribute["01FCNDV6P870EA6S7TK1DSYD5H"]' },
              parse: {
                returns: { array: true, type: 'IncidentStatus' },
                source: 'metadata.annotations["github.com/repo"]',
              },
            },
          ],
          reference: 'abc123',
          root_reference: 'incident.status',
          else_branch: {
            result: {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
          },
        },
      ],
      incident_config: {
        auto_decline_enabled: false,
        condition_groups: [
          {
            conditions: [
              {
                operation: 'one_of',
                param_bindings: [
                  {
                    array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
                    value: { literal: 'SEV123', reference: 'incident.severity' },
                  },
                ],
                subject: 'incident.severity',
              },
            ],
          },
        ],
        defer_time_seconds: 1,
        enabled: false,
        grouping_keys: [{ reference: 'alert.title' }],
        grouping_window_seconds: 1,
      },
      incident_template: {
        name: {
          autogenerated: false,
          binding: {
            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
            value: { literal: 'SEV123', reference: 'incident.severity' },
          },
        },
        custom_fields: [
          {
            binding: {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
            custom_field_id: '01FCNDV6P870EA6S7TK1DSYDG0',
            merge_strategy: 'first-wins',
          },
        ],
        incident_mode: {
          binding: {
            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
            value: { literal: 'SEV123', reference: 'incident.severity' },
          },
        },
        incident_type: {
          binding: {
            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
            value: { literal: 'SEV123', reference: 'incident.severity' },
          },
        },
        severity: {
          merge_strategy: 'first-wins',
          binding: {
            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
            value: { literal: 'SEV123', reference: 'incident.severity' },
          },
        },
        start_in_triage: {
          binding: {
            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
            value: { literal: 'SEV123', reference: 'incident.severity' },
          },
        },
        summary: {
          autogenerated: false,
          binding: {
            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
            value: { literal: 'SEV123', reference: 'incident.severity' },
          },
        },
        workspace: {
          binding: {
            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
            value: { literal: 'SEV123', reference: 'incident.severity' },
          },
        },
      },
      is_private: false,
      name: 'Production incidents',
      version: 1,
      created_at: '2021-08-17T13:28:57.801578Z',
      updated_at: '2021-08-17T13:28:57.801578Z',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.alertRoutes.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.alertRoutes.update('01FCNDV6P870EA6S7TK1DSYDG0', {
      alert_sources: [
        {
          alert_source_id: '01FCNDV6P870EA6S7TK1DSYDG0',
          condition_groups: [
            {
              conditions: [
                {
                  operation: 'one_of',
                  param_bindings: [{}],
                  subject: 'incident.severity',
                },
              ],
            },
          ],
        },
      ],
      channel_config: [
        {
          condition_groups: [
            {
              conditions: [
                {
                  operation: 'one_of',
                  param_bindings: [{}],
                  subject: 'incident.severity',
                },
              ],
            },
          ],
        },
      ],
      condition_groups: [
        {
          conditions: [
            {
              operation: 'one_of',
              param_bindings: [{}],
              subject: 'incident.severity',
            },
          ],
        },
      ],
      enabled: false,
      escalation_config: { auto_cancel_escalations: false, escalation_targets: [{}] },
      expressions: [
        {
          label: 'Team Slack channel',
          operations: [{ operation_type: 'navigate' }],
          reference: 'abc123',
          root_reference: 'incident.status',
        },
      ],
      incident_config: {
        auto_decline_enabled: false,
        condition_groups: [
          {
            conditions: [
              {
                operation: 'one_of',
                param_bindings: [{}],
                subject: 'incident.severity',
              },
            ],
          },
        ],
        defer_time_seconds: 1,
        enabled: false,
        grouping_keys: [{ reference: 'alert.title' }],
        grouping_window_seconds: 1,
      },
      incident_template: { name: {} },
      is_private: false,
      name: 'Production incidents',
      version: 1,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.alertRoutes.update('01FCNDV6P870EA6S7TK1DSYDG0', {
      alert_sources: [
        {
          alert_source_id: '01FCNDV6P870EA6S7TK1DSYDG0',
          condition_groups: [
            {
              conditions: [
                {
                  operation: 'one_of',
                  param_bindings: [
                    {
                      array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
                      value: { literal: 'SEV123', reference: 'incident.severity' },
                    },
                  ],
                  subject: 'incident.severity',
                },
              ],
            },
          ],
        },
      ],
      channel_config: [
        {
          condition_groups: [
            {
              conditions: [
                {
                  operation: 'one_of',
                  param_bindings: [
                    {
                      array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
                      value: { literal: 'SEV123', reference: 'incident.severity' },
                    },
                  ],
                  subject: 'incident.severity',
                },
              ],
            },
          ],
          ms_teams_targets: {
            binding: {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
            channel_visibility: 'abc123',
          },
          slack_targets: {
            binding: {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
            channel_visibility: 'abc123',
          },
        },
      ],
      condition_groups: [
        {
          conditions: [
            {
              operation: 'one_of',
              param_bindings: [
                {
                  array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
                  value: { literal: 'SEV123', reference: 'incident.severity' },
                },
              ],
              subject: 'incident.severity',
            },
          ],
        },
      ],
      enabled: false,
      escalation_config: {
        auto_cancel_escalations: false,
        escalation_targets: [
          {
            escalation_paths: {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
            users: {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
          },
        ],
      },
      expressions: [
        {
          label: 'Team Slack channel',
          operations: [
            {
              operation_type: 'navigate',
              branches: {
                branches: [
                  {
                    condition_groups: [
                      {
                        conditions: [
                          {
                            operation: 'one_of',
                            param_bindings: [
                              {
                                array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
                                value: { literal: 'SEV123', reference: 'incident.severity' },
                              },
                            ],
                            subject: 'incident.severity',
                          },
                        ],
                      },
                    ],
                    result: {
                      array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
                      value: { literal: 'SEV123', reference: 'incident.severity' },
                    },
                  },
                ],
                returns: { array: true, type: 'IncidentStatus' },
              },
              concatenate: { reference: 'catalog_attribute["01FCNDV6P870EA6S7TK1DSYD5H"]' },
              filter: {
                condition_groups: [
                  {
                    conditions: [
                      {
                        operation: 'one_of',
                        param_bindings: [
                          {
                            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
                            value: { literal: 'SEV123', reference: 'incident.severity' },
                          },
                        ],
                        subject: 'incident.severity',
                      },
                    ],
                  },
                ],
              },
              navigate: { reference: 'catalog_attribute["01FCNDV6P870EA6S7TK1DSYD5H"]' },
              parse: {
                returns: { array: true, type: 'IncidentStatus' },
                source: 'metadata.annotations["github.com/repo"]',
              },
            },
          ],
          reference: 'abc123',
          root_reference: 'incident.status',
          else_branch: {
            result: {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
          },
        },
      ],
      incident_config: {
        auto_decline_enabled: false,
        condition_groups: [
          {
            conditions: [
              {
                operation: 'one_of',
                param_bindings: [
                  {
                    array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
                    value: { literal: 'SEV123', reference: 'incident.severity' },
                  },
                ],
                subject: 'incident.severity',
              },
            ],
          },
        ],
        defer_time_seconds: 1,
        enabled: false,
        grouping_keys: [{ reference: 'alert.title' }],
        grouping_window_seconds: 1,
      },
      incident_template: {
        name: {
          autogenerated: false,
          binding: {
            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
            value: { literal: 'SEV123', reference: 'incident.severity' },
          },
        },
        custom_fields: [
          {
            binding: {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
            custom_field_id: '01FCNDV6P870EA6S7TK1DSYDG0',
            merge_strategy: 'first-wins',
          },
        ],
        incident_mode: {
          binding: {
            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
            value: { literal: 'SEV123', reference: 'incident.severity' },
          },
        },
        incident_type: {
          binding: {
            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
            value: { literal: 'SEV123', reference: 'incident.severity' },
          },
        },
        severity: {
          merge_strategy: 'first-wins',
          binding: {
            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
            value: { literal: 'SEV123', reference: 'incident.severity' },
          },
        },
        start_in_triage: {
          binding: {
            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
            value: { literal: 'SEV123', reference: 'incident.severity' },
          },
        },
        summary: {
          autogenerated: false,
          binding: {
            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
            value: { literal: 'SEV123', reference: 'incident.severity' },
          },
        },
        workspace: {
          binding: {
            array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
            value: { literal: 'SEV123', reference: 'incident.severity' },
          },
        },
      },
      is_private: false,
      name: 'Production incidents',
      version: 1,
      created_at: '2021-08-17T13:28:57.801578Z',
      updated_at: '2021-08-17T13:28:57.801578Z',
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.alertRoutes.list({ page_size: 25 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.alertRoutes.list({ page_size: 25, after: '01FCNDV6P870EA6S7TK1DSYDG0' });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.alertRoutes.delete('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
