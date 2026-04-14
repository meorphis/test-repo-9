// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo4 from 'incident-io-2';

const client = new IncidentIo4({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ipAllowlists', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.ipAllowlists.retrieve();
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
    const responsePromise = client.ipAllowlists.update({
      allowlist: [{ value: '192.0.2.0' }],
      enabled: true,
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
    const response = await client.ipAllowlists.update({
      allowlist: [{ value: '192.0.2.0', label: 'London HQ' }],
      enabled: true,
      version: 1,
    });
  });
});
