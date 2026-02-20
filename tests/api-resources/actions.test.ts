// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo2 from 'incident-io-2';

const client = new IncidentIo2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.actions.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.actions.list();
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
      client.actions.list(
        {
          incident_id: '01FCNDV6P870EA6S7TK1DSYDG0',
          incident_mode: 'real',
          is_follow_up: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(IncidentIo2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listV2', async () => {
    const responsePromise = client.actions.listV2();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listV2: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.actions.listV2(
        { incident_id: '01FCNDV6P870EA6S7TK1DSYDG0', incident_mode: 'standard' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(IncidentIo2.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveV2', async () => {
    const responsePromise = client.actions.retrieveV2('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
