// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo13 from 'incident-io-2';

const client = new IncidentIo13({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource alertSources', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.alertSources.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.alertSources.create({
      name: 'Production Web Dashboard Alerts',
      source_type: 'alertmanager',
      template: {
        attributes: [
          {
            alert_attribute_id: 'abc123',
            binding: {},
          },
        ],
        description: {},
        expressions: [
          {
            label: 'Team Slack channel',
            operations: [{ operation_type: 'navigate' }],
            reference: 'abc123',
            root_reference: 'incident.status',
          },
        ],
        title: {},
      },
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
    const response = await client.alertSources.create({
      name: 'Production Web Dashboard Alerts',
      source_type: 'alertmanager',
      template: {
        attributes: [
          {
            alert_attribute_id: 'abc123',
            binding: {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
          },
        ],
        description: { literal: 'SEV123', reference: 'incident.severity' },
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
        title: { literal: 'SEV123', reference: 'incident.severity' },
      },
      http_custom_options: {
        deduplication_key_path: '$.alert_id',
        transform_expression:
          "return {\n  title: $.title || $.name || 'Unknown Alert',\n  status: $.status === 'resolved' ? 'resolved' : 'firing',\n  description: $.description || $.message || '',\n  sourceURL: $.url || $.link || '',\n  metadata: { team: $.team, severity: $.severity }\n}",
      },
      jira_options: { project_ids: ['01GBSQF3FHF7FWZQNWGHAVQ804', '10043'] },
    });
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.alertSources.delete('01GW2G3V0S59R238FAHPDS1R66');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.alertSources.retrieve('01GW2G3V0S59R238FAHPDS1R66');
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
    const responsePromise = client.alertSources.update('01GW2G3V0S59R238FAHPDS1R66', {
      name: 'Production Web Dashboard Alerts',
      template: {
        attributes: [
          {
            alert_attribute_id: 'abc123',
            binding: {},
          },
        ],
        description: {},
        expressions: [
          {
            label: 'Team Slack channel',
            operations: [{ operation_type: 'navigate' }],
            reference: 'abc123',
            root_reference: 'incident.status',
          },
        ],
        title: {},
      },
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
    const response = await client.alertSources.update('01GW2G3V0S59R238FAHPDS1R66', {
      name: 'Production Web Dashboard Alerts',
      template: {
        attributes: [
          {
            alert_attribute_id: 'abc123',
            binding: {
              array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
              value: { literal: 'SEV123', reference: 'incident.severity' },
            },
          },
        ],
        description: { literal: 'SEV123', reference: 'incident.severity' },
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
        title: { literal: 'SEV123', reference: 'incident.severity' },
      },
      http_custom_options: {
        deduplication_key_path: '$.alert_id',
        transform_expression:
          "return {\n  title: $.title || $.name || 'Unknown Alert',\n  status: $.status === 'resolved' ? 'resolved' : 'firing',\n  description: $.description || $.message || '',\n  sourceURL: $.url || $.link || '',\n  metadata: { team: $.team, severity: $.severity }\n}",
      },
      jira_options: { project_ids: ['01GBSQF3FHF7FWZQNWGHAVQ804', '10043'] },
    });
  });
});
