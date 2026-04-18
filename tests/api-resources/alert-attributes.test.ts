// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo7 from 'incident-io-2';

const client = new IncidentIo7({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource alertAttributes', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.alertAttributes.create({
      array: false,
      name: 'service',
      type: 'CatalogEntry["01GW2G3V0S59R238FAHPDS1R67"]',
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
    const response = await client.alertAttributes.create({
      array: false,
      name: 'service',
      type: 'CatalogEntry["01GW2G3V0S59R238FAHPDS1R67"]',
      required: false,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.alertAttributes.retrieve('01GW2G3V0S59R238FAHPDS1R66');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.alertAttributes.update('01GW2G3V0S59R238FAHPDS1R66', {
      array: false,
      name: 'service',
      type: 'CatalogEntry["01GW2G3V0S59R238FAHPDS1R67"]',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.alertAttributes.update('01GW2G3V0S59R238FAHPDS1R66', {
      array: false,
      name: 'service',
      type: 'CatalogEntry["01GW2G3V0S59R238FAHPDS1R67"]',
      required: false,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.alertAttributes.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.alertAttributes.delete('01GW2G3V0S59R238FAHPDS1R66');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
