// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo4 from 'incident-io-2';

const client = new IncidentIo4({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workflows', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.workflows.create({
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
      continue_on_step_error: true,
      expressions: [
        {
          label: 'Team Slack channel',
          operations: [{ operation_type: 'navigate' }],
          reference: 'abc123',
          root_reference: 'incident.status',
        },
      ],
      include_private_incidents: true,
      name: 'My little workflow',
      once_for: ['incident.url'],
      runs_on_incident_modes: ['standard', 'test', 'retrospective'],
      runs_on_incidents: 'newly_created',
      steps: [
        {
          id: 'abc123',
          name: 'pagerduty.escalate',
          param_bindings: [{}],
        },
      ],
      trigger: 'incident.updated',
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
    const response = await client.workflows.create({
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
      continue_on_step_error: true,
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
      include_private_incidents: true,
      name: 'My little workflow',
      once_for: ['incident.url'],
      runs_on_incident_modes: ['standard', 'test', 'retrospective'],
      runs_on_incidents: 'newly_created',
      steps: [
        {
          id: 'abc123',
          name: 'pagerduty.escalate',
          param_bindings: [
            {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
          ],
          for_each: 'abc123',
        },
      ],
      trigger: 'incident.updated',
      annotations: { 'incident.io/terraform/version': '3.0.0' },
      delay: { conditions_apply_over_delay: false, for_seconds: 60 },
      folder: 'My folder 01',
      shortform: 'page-the-ceo',
      state: 'active',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.workflows.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.retrieve(
        '01FCNDV6P870EA6S7TK1DSYDG0',
        { skip_step_upgrades: false },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(IncidentIo4.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.workflows.update('01FCNDV6P870EA6S7TK1DSYDG0', {
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
      continue_on_step_error: true,
      expressions: [
        {
          label: 'Team Slack channel',
          operations: [{ operation_type: 'navigate' }],
          reference: 'abc123',
          root_reference: 'incident.status',
        },
      ],
      include_private_incidents: true,
      name: 'My little workflow',
      once_for: ['incident.url'],
      runs_on_incident_modes: ['standard', 'test', 'retrospective'],
      runs_on_incidents: 'newly_created',
      steps: [
        {
          id: 'abc123',
          name: 'pagerduty.escalate',
          param_bindings: [{}],
        },
      ],
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
    const response = await client.workflows.update('01FCNDV6P870EA6S7TK1DSYDG0', {
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
      continue_on_step_error: true,
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
      include_private_incidents: true,
      name: 'My little workflow',
      once_for: ['incident.url'],
      runs_on_incident_modes: ['standard', 'test', 'retrospective'],
      runs_on_incidents: 'newly_created',
      steps: [
        {
          id: 'abc123',
          name: 'pagerduty.escalate',
          param_bindings: [
            {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
          ],
          for_each: 'abc123',
        },
      ],
      annotations: { 'incident.io/terraform/version': '3.0.0' },
      delay: { conditions_apply_over_delay: false, for_seconds: 60 },
      folder: 'My folder 01',
      shortform: 'page-the-ceo',
      state: 'active',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.workflows.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('destroy', async () => {
    const responsePromise = client.workflows.destroy('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
