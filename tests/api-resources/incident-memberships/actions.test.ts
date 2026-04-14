// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo4 from 'incident-io-2';

const client = new IncidentIo4({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Mock server tests are disabled
  test.skip('revoke: only required params', async () => {
    const responsePromise = client.incidentMemberships.actions.revoke({
      incident_id: '01FCNDV6P870EA6S7TK1DSYD5H',
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
  test.skip('revoke: required and optional params', async () => {
    const response = await client.incidentMemberships.actions.revoke({
      incident_id: '01FCNDV6P870EA6S7TK1DSYD5H',
      user_id: '01FCQSP07Z74QMMYPDDGQB9FTG',
    });
  });
});
