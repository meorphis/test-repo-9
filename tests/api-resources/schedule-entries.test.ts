// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo2 from 'incident-io-2';

const client = new IncidentIo2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scheduleEntries', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.scheduleEntries.list({ schedule_id: '01FDAG4SAP5TYPT98WGR2N7W91' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.scheduleEntries.list({
      schedule_id: '01FDAG4SAP5TYPT98WGR2N7W91',
      entry_window_end: '2021-01-01T00:00:00Z',
      entry_window_start: '2021-01-01T00:00:00Z',
    });
  });
});
