// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo13 from 'incident-io-2';

const client = new IncidentIo13({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource alerts', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.alerts.list({ page_size: 25 });
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
    const response = await client.alerts.list({
      page_size: 25,
      after: '01FCNDV6P870EA6S7TK1DSYDG0',
      created_at: { gte: ['2025-01-01'] },
      deduplication_key: { is: ['01GBSQF3FHF7FWZQNWGHAVQ804'] },
      status: { one_of: ['firing'] },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.alerts.retrieve('01FDAG4SAP5TYPT98WGR2N7W91');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
