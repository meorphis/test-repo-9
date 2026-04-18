// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo7 from 'incident-io-2';

const client = new IncidentIo7({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource incidents', () => {
  // Mock server tests are disabled
  test.skip('listResponseIncidents: only required params', async () => {
    const responsePromise = client.statusPages.incidents.listResponseIncidents('abc123', { id: 'abc123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listResponseIncidents: required and optional params', async () => {
    const response = await client.statusPages.incidents.listResponseIncidents('abc123', { id: 'abc123' });
  });
});
