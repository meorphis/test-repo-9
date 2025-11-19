// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo2 from 'incident-io-2';

const client = new IncidentIo2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource escalationPaths', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.escalationPaths.create({
      name: 'Urgent Support',
      path: [{ id: '01FCNDV6P870EA6S7TK1DSYDG0', type: 'if_else' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.escalationPaths.create({
      name: 'Urgent Support',
      path: [
        {
          id: '01FCNDV6P870EA6S7TK1DSYDG0',
          type: 'if_else',
          if_else: {
            else_path: [],
            then_path: [],
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
          level: {
            targets: [
              { id: 'lawrencejones', type: 'schedule', urgency: 'high', schedule_mode: 'currently_on_call' },
            ],
            ack_mode: 'all',
            round_robin_config: { enabled: false, rotate_after_seconds: 120 },
            time_to_ack_interval_condition: 'active',
            time_to_ack_seconds: 1800,
            time_to_ack_weekday_interval_config_id: '01FCNDV6P870EA6S7TK1DSYDG0',
          },
          notify_channel: {
            targets: [
              { id: 'lawrencejones', type: 'schedule', urgency: 'high', schedule_mode: 'currently_on_call' },
            ],
            time_to_ack_interval_condition: 'active',
            time_to_ack_seconds: 1800,
            time_to_ack_weekday_interval_config_id: '01FCNDV6P870EA6S7TK1DSYDG0',
          },
          repeat: { repeat_times: 3, to_node: '01FCNDV6P870EA6S7TK1DSYDG0' },
        },
      ],
      team_ids: ['01JPQA75EPNEES4479P16P4XAB'],
      working_hours: [
        {
          id: 'abc123',
          name: 'abc123',
          timezone: 'abc123',
          weekday_intervals: [{ end_time: '17:00', start_time: '09:00', weekday: 'monday' }],
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.escalationPaths.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.escalationPaths.update('01FCNDV6P870EA6S7TK1DSYDG0', {
      name: 'Urgent Support',
      path: [{ id: '01FCNDV6P870EA6S7TK1DSYDG0', type: 'if_else' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.escalationPaths.update('01FCNDV6P870EA6S7TK1DSYDG0', {
      name: 'Urgent Support',
      path: [
        {
          id: '01FCNDV6P870EA6S7TK1DSYDG0',
          type: 'if_else',
          if_else: {
            else_path: [],
            then_path: [],
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
          level: {
            targets: [
              { id: 'lawrencejones', type: 'schedule', urgency: 'high', schedule_mode: 'currently_on_call' },
            ],
            ack_mode: 'all',
            round_robin_config: { enabled: false, rotate_after_seconds: 120 },
            time_to_ack_interval_condition: 'active',
            time_to_ack_seconds: 1800,
            time_to_ack_weekday_interval_config_id: '01FCNDV6P870EA6S7TK1DSYDG0',
          },
          notify_channel: {
            targets: [
              { id: 'lawrencejones', type: 'schedule', urgency: 'high', schedule_mode: 'currently_on_call' },
            ],
            time_to_ack_interval_condition: 'active',
            time_to_ack_seconds: 1800,
            time_to_ack_weekday_interval_config_id: '01FCNDV6P870EA6S7TK1DSYDG0',
          },
          repeat: { repeat_times: 3, to_node: '01FCNDV6P870EA6S7TK1DSYDG0' },
        },
      ],
      team_ids: ['01JPQA75EPNEES4479P16P4XAB'],
      working_hours: [
        {
          id: 'abc123',
          name: 'abc123',
          timezone: 'abc123',
          weekday_intervals: [{ end_time: '17:00', start_time: '09:00', weekday: 'monday' }],
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.escalationPaths.delete('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
