// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo5 from 'incident-io-2';

const client = new IncidentIo5({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource incidentAttachments', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.incidentAttachments.create({
      incident_id: '01FDAG4SAP5TYPT98WGR2N7W91',
      resource: { external_id: '123', resource_type: 'pager_duty_incident' },
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
    const response = await client.incidentAttachments.create({
      incident_id: '01FDAG4SAP5TYPT98WGR2N7W91',
      resource: { external_id: '123', resource_type: 'pager_duty_incident' },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.incidentAttachments.list();
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
      client.incidentAttachments.list(
        {
          external_id: '123',
          incident_id: '01G0J1EXE7AXZ2C93K61WBPYEH',
          resource_type: 'pager_duty_incident',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(IncidentIo5.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.incidentAttachments.delete('01FCNDV6P870EA6S7TK1DSYD5H');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
