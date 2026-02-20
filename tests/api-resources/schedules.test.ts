// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo2 from 'incident-io-2';

const client = new IncidentIo2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schedules', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.schedules.create({ schedule: {} });
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
    const response = await client.schedules.create({
      schedule: {
        annotations: { 'incident.io/terraform/version': 'version-of-terraform' },
        config: {
          rotations: [
            {
              name: 'My Rotation',
              id: '01G0J1EXE7AXZ2C93K61WBPYEH',
              effective_from: '2021-08-17T13:28:57.801578Z',
              handover_start_at: '2021-08-17T13:28:57.801578Z',
              handovers: [{ interval: 1, interval_type: 'hourly' }],
              layers: [{ name: 'Layer 1', id: '01G0J1EXE7AXZ2C93K61WBPYEH' }],
              scheduling_mode: 'fair',
              users: [
                {
                  id: '01G0J1EXE7AXZ2C93K61WBPYEH',
                  email: 'bob@example.com',
                  slack_user_id: 'USER123',
                },
              ],
              working_interval: [
                {
                  end_time: '17:00',
                  start_time: '09:00',
                  weekday: 'monday',
                },
              ],
            },
          ],
        },
        holidays_public_config: { country_codes: ['abc123'] },
        name: 'Primary On-call Schedule',
        team_ids: ['01JPQA75EPNEES4479P16P4XAB'],
        timezone: 'America/Los_Angeles',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.schedules.retrieve('01G0J1EXE7AXZ2C93K61WBPYEH');
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
    const responsePromise = client.schedules.update('01G0J1EXE7AXZ2C93K61WBPYEH', { schedule: {} });
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
    const response = await client.schedules.update('01G0J1EXE7AXZ2C93K61WBPYEH', {
      schedule: {
        annotations: { 'incident.io/terraform/version': 'version-of-terraform' },
        config: {
          rotations: [
            {
              id: '01G0J1EXE7AXZ2C93K61WBPYEH',
              effective_from: '2021-08-17T13:28:57.801578Z',
              handover_start_at: '2021-08-17T13:28:57.801578Z',
              handovers: [{ interval: 1, interval_type: 'hourly' }],
              layers: [{ id: '01G0J1EXE7AXZ2C93K61WBPYEH', name: 'Layer 1' }],
              name: 'My Rotation',
              scheduling_mode: 'fair',
              users: [
                {
                  id: '01G0J1EXE7AXZ2C93K61WBPYEH',
                  email: 'bob@example.com',
                  slack_user_id: 'USER123',
                },
              ],
              working_interval: [
                {
                  end_time: '17:00',
                  start_time: '09:00',
                  weekday: 'monday',
                },
              ],
            },
          ],
        },
        holidays_public_config: { country_codes: ['abc123'] },
        name: 'Primary On-call Schedule',
        team_ids: ['01JPQA75EPNEES4479P16P4XAB'],
        timezone: 'America/Los_Angeles',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.schedules.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.schedules.list(
        { after: '01FDAG4SAP5TYPT98WGR2N7W91', page_size: 25 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(IncidentIo2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.schedules.delete('01G0J1EXE7AXZ2C93K61WBPYEH');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
