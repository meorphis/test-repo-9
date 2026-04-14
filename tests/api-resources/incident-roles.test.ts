// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo4 from 'incident-io-2';

const client = new IncidentIo4({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource incidentRoles', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.incidentRoles.create({
      description: 'The person currently coordinating the incident',
      instructions: 'Take point on the incident; Make sure people are clear on responsibilities',
      name: 'Incident Lead',
      required: false,
      shortform: 'lead',
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
    const response = await client.incidentRoles.create({
      description: 'The person currently coordinating the incident',
      instructions: 'Take point on the incident; Make sure people are clear on responsibilities',
      name: 'Incident Lead',
      required: false,
      shortform: 'lead',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.incidentRoles.retrieve('01FCNDV6P870EA6S7TK1DSYDG0');
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
    const responsePromise = client.incidentRoles.update('01FCNDV6P870EA6S7TK1DSYDG0', {
      description: 'The person currently coordinating the incident',
      instructions: 'Take point on the incident; Make sure people are clear on responsibilities',
      name: 'Incident Lead',
      shortform: 'lead',
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
    const response = await client.incidentRoles.update('01FCNDV6P870EA6S7TK1DSYDG0', {
      description: 'The person currently coordinating the incident',
      instructions: 'Take point on the incident; Make sure people are clear on responsibilities',
      name: 'Incident Lead',
      shortform: 'lead',
      required: false,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.incidentRoles.list();
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
    const responsePromise = client.incidentRoles.delete('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createV2: only required params', async () => {
    const responsePromise = client.incidentRoles.createV2({
      description: 'The person currently coordinating the incident',
      instructions: 'Take point on the incident; Make sure people are clear on responsibilities',
      name: 'Incident Lead',
      shortform: 'lead',
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
  test.skip('createV2: required and optional params', async () => {
    const response = await client.incidentRoles.createV2({
      description: 'The person currently coordinating the incident',
      instructions: 'Take point on the incident; Make sure people are clear on responsibilities',
      name: 'Incident Lead',
      shortform: 'lead',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteV2', async () => {
    const responsePromise = client.incidentRoles.deleteV2('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listV2', async () => {
    const responsePromise = client.incidentRoles.listV2();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveV2', async () => {
    const responsePromise = client.incidentRoles.retrieveV2('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateV2: only required params', async () => {
    const responsePromise = client.incidentRoles.updateV2('01FCNDV6P870EA6S7TK1DSYDG0', {
      description: 'The person currently coordinating the incident',
      instructions: 'Take point on the incident; Make sure people are clear on responsibilities',
      name: 'Incident Lead',
      shortform: 'lead',
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
  test.skip('updateV2: required and optional params', async () => {
    const response = await client.incidentRoles.updateV2('01FCNDV6P870EA6S7TK1DSYDG0', {
      description: 'The person currently coordinating the incident',
      instructions: 'Take point on the incident; Make sure people are clear on responsibilities',
      name: 'Incident Lead',
      shortform: 'lead',
    });
  });
});
