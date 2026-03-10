// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo3 from 'incident-io-2';

const client = new IncidentIo3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource alertEvents', () => {
  // Mock server tests are disabled
  test.skip('createHTTP: only required params', async () => {
    const responsePromise = client.alertEvents.createHTTP('01GW2G3V0S59R238FAHPDS1R66', {
      status: 'firing',
      title: '*errors.withMessage: PG::Error failed to connect',
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
  test.skip('createHTTP: required and optional params', async () => {
    const response = await client.alertEvents.createHTTP('01GW2G3V0S59R238FAHPDS1R66', {
      status: 'firing',
      title: '*errors.withMessage: PG::Error failed to connect',
      token: 'some-random-string',
      deduplication_key: '4293868629',
      description:
        "We've detected a number of timeouts on hello.world.com, the service may be down. To fix...",
      metadata: { service: 'bar', team: 'bar' },
      source_url: 'https://www.my-alerting-platform.com/alerts/my-alert-123',
    });
  });
});
