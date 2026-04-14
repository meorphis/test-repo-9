// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo4 from 'incident-io-2';

const client = new IncidentIo4({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scheduleOverrides', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.scheduleOverrides.create({
      end_at: '2021-08-17T14:00:00.000000Z',
      layer_id: '01G0J1EXE7AXZ2C93K61WBPYNH',
      rotation_id: '01G0J1EXE7AXZ2C93K61WBPYEH',
      schedule_id: '01G0J1EXE7AXZ2C93K61WBPYEH',
      start_at: '2021-08-17T13:00:00.000000Z',
      user: {},
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
    const response = await client.scheduleOverrides.create({
      end_at: '2021-08-17T14:00:00.000000Z',
      layer_id: '01G0J1EXE7AXZ2C93K61WBPYNH',
      rotation_id: '01G0J1EXE7AXZ2C93K61WBPYEH',
      schedule_id: '01G0J1EXE7AXZ2C93K61WBPYEH',
      start_at: '2021-08-17T13:00:00.000000Z',
      user: {
        id: '01G0J1EXE7AXZ2C93K61WBPYEH',
        email: 'bob@example.com',
        slack_user_id: 'USER123',
      },
    });
  });
});
