// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo2 from 'incident-io-2';

const client = new IncidentIo2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource incidentMemberships', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.incidentMemberships.create({
      incident_id: '01ET65M7ZADYFCKD4K1AE2QNMC',
      user_id: '01FCQSP07Z74QMMYPDDGQB9FTG',
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
    const response = await client.incidentMemberships.create({
      incident_id: '01ET65M7ZADYFCKD4K1AE2QNMC',
      user_id: '01FCQSP07Z74QMMYPDDGQB9FTG',
    });
  });
});
