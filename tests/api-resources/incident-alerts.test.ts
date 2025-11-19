// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo2 from 'incident-io-2';

const client = new IncidentIo2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource incidentAlerts', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.incidentAlerts.list({ page_size: 25 });
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
    const response = await client.incidentAlerts.list({
      page_size: 25,
      after: '01FCNDV6P870EA6S7TK1DSYDG0',
      alert_id: '01FCNDV6P870EA6S7TK1DSYDG1',
      incident_id: '01FCNDV6P870EA6S7TK1DSYDG0',
    });
  });
});
