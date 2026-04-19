// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo13 from 'incident-io-2';

const client = new IncidentIo13({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Mock server tests are disabled
  test.skip('updateSchema: only required params', async () => {
    const responsePromise = client.catalogTypes.actions.updateSchema('01FCNDV6P870EA6S7TK1DSYDG0', {
      attributes: [
        {
          array: false,
          name: 'tier',
          type: 'Custom["Service"]',
        },
      ],
      version: 1,
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
  test.skip('updateSchema: required and optional params', async () => {
    const response = await client.catalogTypes.actions.updateSchema('01FCNDV6P870EA6S7TK1DSYDG0', {
      attributes: [
        {
          array: false,
          name: 'tier',
          type: 'Custom["Service"]',
          id: '01GW2G3V0S59R238FAHPDS1R66',
          backlink_attribute: 'abc123',
          mode: '',
          path: [{ attribute_id: 'abc123' }],
        },
      ],
      version: 1,
    });
  });
});
