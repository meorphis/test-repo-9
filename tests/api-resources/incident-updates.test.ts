// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo2 from 'incident-io-2';

const client = new IncidentIo2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource incidentUpdates', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.incidentUpdates.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.incidentUpdates.list(
        {
          after: '01FDAG4SAP5TYPT98WGR2N7W91',
          incident_id: '01G0J1EXE7AXZ2C93K61WBPYEH',
          page_size: 25,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(IncidentIo2.NotFoundError);
  });
});
