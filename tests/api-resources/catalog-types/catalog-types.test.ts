// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo5 from 'incident-io-2';

const client = new IncidentIo5({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource catalogTypes', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.catalogTypes.create({
      description: 'Represents Kubernetes clusters that we run inside of GKE.',
      name: 'Kubernetes Cluster',
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
    const response = await client.catalogTypes.create({
      description: 'Represents Kubernetes clusters that we run inside of GKE.',
      name: 'Kubernetes Cluster',
      annotations: { 'incident.io/catalog-importer/id': 'id-of-config' },
      categories: ['customer'],
      color: 'yellow',
      icon: 'alert',
      ranked: true,
      source_repo_url: 'https://github.com/my-company/incident-io-catalog',
      type_name: 'Custom["BackstageGroup"]',
      use_name_as_identifier: true,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.catalogTypes.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');
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
    const responsePromise = client.catalogTypes.update('01FCNDV6P870EA6S7TK1DSYDG0', {
      description: 'Represents Kubernetes clusters that we run inside of GKE.',
      name: 'Kubernetes Cluster',
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
    const response = await client.catalogTypes.update('01FCNDV6P870EA6S7TK1DSYDG0', {
      description: 'Represents Kubernetes clusters that we run inside of GKE.',
      name: 'Kubernetes Cluster',
      annotations: { 'incident.io/catalog-importer/id': 'id-of-config' },
      categories: ['customer'],
      color: 'yellow',
      icon: 'alert',
      ranked: true,
      source_repo_url: 'https://github.com/my-company/incident-io-catalog',
      use_name_as_identifier: true,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.catalogTypes.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('destroy', async () => {
    const responsePromise = client.catalogTypes.destroy('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
