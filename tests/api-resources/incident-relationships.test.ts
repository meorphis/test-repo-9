// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo3 from 'incident-io-2';

const client = new IncidentIo3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource incidentRelationships', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.incidentRelationships.list({ incident_id: '01FCNDV6P870EA6S7TK1DSYD5H' });
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
    const response = await client.incidentRelationships.list({
      incident_id: '01FCNDV6P870EA6S7TK1DSYD5H',
      after: '01FDAG4SAP5TYPT98WGR2N7W91',
      page_size: 25,
    });
  });
});
