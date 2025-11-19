// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo2 from 'incident-io-2';

const client = new IncidentIo2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource escalations', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.escalations.create({
      idempotency_key: '2024-01-15-abc123',
      title: 'Production database experiencing high CPU',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.escalations.create({
      idempotency_key: '2024-01-15-abc123',
      title: 'Production database experiencing high CPU',
      description: 'Database CPU has been above 90% for 5 minutes',
      escalation_path_id: '01H0J1EXE7AXZ2C93K61WBPYEH',
      user_ids: ['01H0J1EXE7AXZ2C93K61WBPYEH', '01H0J1EXE7AXZ2C93K61WBPYEI'],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.escalations.retrieve('01G0J1EXE7AXZ2C93K61WBPYEH');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.escalations.list();
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
      client.escalations.list(
        {
          after: '01FDAG4SAP5TYPT98WGR2N7W91',
          alert: { one_of: ['01J479052SSQAA4531ASFPR3BF'] },
          created_at: { gte: ['2021-08-17'] },
          escalation_path: { one_of: ['01J479052SSQAA4531ASFPR3BF'] },
          page_size: 25,
          status: { one_of: ['triggered'] },
          updated_at: { gte: ['2021-08-17'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(IncidentIo2.NotFoundError);
  });
});
