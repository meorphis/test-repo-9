// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo2 from 'incident-io-2';

const client = new IncidentIo2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource catalogEntries', () => {
  // Prism tests are disabled
  test.skip('createEntryV2: only required params', async () => {
    const responsePromise = client.catalogEntries.createEntryV2({
      attribute_values: { abc123: {} },
      catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',
      name: 'Primary On-call',
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
  test.skip('createEntryV2: required and optional params', async () => {
    const response = await client.catalogEntries.createEntryV2({
      attribute_values: {
        abc123: {
          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
          value: { literal: 'SEV123', reference: 'incident.severity' },
        },
      },
      catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',
      name: 'Primary On-call',
      aliases: ['lawrence@incident.io', 'lawrence'],
      external_id: '761722cd-d1d7-477b-ac7e-90f9e079dc33',
      rank: 3,
    });
  });

  // Prism tests are disabled
  test.skip('createEntryV3: only required params', async () => {
    const responsePromise = client.catalogEntries.createEntryV3({
      attribute_values: { abc123: {} },
      catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',
      name: 'Primary On-call',
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
  test.skip('createEntryV3: required and optional params', async () => {
    const response = await client.catalogEntries.createEntryV3({
      attribute_values: { abc123: { array_value: [{ literal: 'SEV123' }], value: { literal: 'SEV123' } } },
      catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',
      name: 'Primary On-call',
      aliases: ['lawrence@incident.io', 'lawrence'],
      external_id: '761722cd-d1d7-477b-ac7e-90f9e079dc33',
      rank: 3,
    });
  });

  // Prism tests are disabled
  test.skip('destroyEntryV2', async () => {
    const responsePromise = client.catalogEntries.destroyEntryV2('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('destroyEntryV3', async () => {
    const responsePromise = client.catalogEntries.destroyEntryV3('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listEntriesV2: only required params', async () => {
    const responsePromise = client.catalogEntries.listEntriesV2({
      catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',
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
  test.skip('listEntriesV2: required and optional params', async () => {
    const response = await client.catalogEntries.listEntriesV2({
      catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',
      after: '01FDAG4SAP5TYPT98WGR2N7W91',
      page_size: 25,
    });
  });

  // Prism tests are disabled
  test.skip('listEntriesV3: only required params', async () => {
    const responsePromise = client.catalogEntries.listEntriesV3({
      catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',
      page_size: 25,
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
  test.skip('listEntriesV3: required and optional params', async () => {
    const response = await client.catalogEntries.listEntriesV3({
      catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',
      page_size: 25,
      after: '01FDAG4SAP5TYPT98WGR2N7W91',
      identifier: 'abc123',
    });
  });

  // Prism tests are disabled
  test.skip('showEntryV2', async () => {
    const responsePromise = client.catalogEntries.showEntryV2('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('showEntryV3', async () => {
    const responsePromise = client.catalogEntries.showEntryV3('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateEntryV2: only required params', async () => {
    const responsePromise = client.catalogEntries.updateEntryV2('01FCNDV6P870EA6S7TK1DSYDG0', {
      attribute_values: { abc123: {} },
      name: 'Primary On-call',
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
  test.skip('updateEntryV2: required and optional params', async () => {
    const response = await client.catalogEntries.updateEntryV2('01FCNDV6P870EA6S7TK1DSYDG0', {
      attribute_values: {
        abc123: {
          array_value: [{ literal: 'SEV123', reference: 'incident.severity' }],
          value: { literal: 'SEV123', reference: 'incident.severity' },
        },
      },
      name: 'Primary On-call',
      aliases: ['lawrence@incident.io', 'lawrence'],
      external_id: '761722cd-d1d7-477b-ac7e-90f9e079dc33',
      rank: 3,
    });
  });

  // Prism tests are disabled
  test.skip('updateEntryV3: only required params', async () => {
    const responsePromise = client.catalogEntries.updateEntryV3('01FCNDV6P870EA6S7TK1DSYDG0', {
      attribute_values: { abc123: {} },
      name: 'Primary On-call',
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
  test.skip('updateEntryV3: required and optional params', async () => {
    const response = await client.catalogEntries.updateEntryV3('01FCNDV6P870EA6S7TK1DSYDG0', {
      attribute_values: { abc123: { array_value: [{ literal: 'SEV123' }], value: { literal: 'SEV123' } } },
      name: 'Primary On-call',
      aliases: ['lawrence@incident.io', 'lawrence'],
      external_id: '761722cd-d1d7-477b-ac7e-90f9e079dc33',
      rank: 3,
      update_attributes: ['abc123'],
    });
  });
});
