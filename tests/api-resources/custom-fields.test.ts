// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo6 from 'incident-io-2';

const client = new IncidentIo6({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customFields', () => {
  // Mock server tests are disabled
  test.skip('createV1: only required params', async () => {
    const responsePromise = client.customFields.createV1({
      description: 'Which team is impacted by this issue',
      field_type: 'single_select',
      name: 'Affected Team',
      show_before_closure: true,
      show_before_creation: true,
      show_before_update: true,
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
  test.skip('createV1: required and optional params', async () => {
    const response = await client.customFields.createV1({
      description: 'Which team is impacted by this issue',
      field_type: 'single_select',
      name: 'Affected Team',
      show_before_closure: true,
      show_before_creation: true,
      show_before_update: true,
      required: 'never',
      required_v2: 'never',
      show_in_announcement_post: true,
    });
  });

  // Mock server tests are disabled
  test.skip('createV2: only required params', async () => {
    const responsePromise = client.customFields.createV2({
      description: 'Which team is impacted by this issue',
      field_type: 'single_select',
      name: 'Affected Team',
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
    const response = await client.customFields.createV2({
      description: 'Which team is impacted by this issue',
      field_type: 'single_select',
      name: 'Affected Team',
      catalog_type_id: '01FCNDV6P870EA6S7TK1DSYDG0',
      filter_by: {
        catalog_attribute_id: '01H2FW182TAH0NHEVBY34SCAK0',
        custom_field_id: '01H2FW182TAH0NHEVBY34SCAK0',
      },
      group_by_catalog_attribute_id: '01FCNDV6P870EA6S7TK1DSYDG0',
      helptext_catalog_attribute_id: '01H2FW182TAH0NHEVBY34SCAK0',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteV1', async () => {
    const responsePromise = client.customFields.deleteV1('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteV2', async () => {
    const responsePromise = client.customFields.deleteV2('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listV1', async () => {
    const responsePromise = client.customFields.listV1();
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
    const responsePromise = client.customFields.listV2();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveV1', async () => {
    const responsePromise = client.customFields.retrieveV1('01FCNDV6P870EA6S7TK1DSYDG0');
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
    const responsePromise = client.customFields.retrieveV2('01FCNDV6P870EA6S7TK1DSYDG0');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateV1: only required params', async () => {
    const responsePromise = client.customFields.updateV1('01FCNDV6P870EA6S7TK1DSYDG0', {
      description: 'Which team is impacted by this issue',
      name: 'Affected Team',
      show_before_closure: true,
      show_before_creation: true,
      show_before_update: true,
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
  test.skip('updateV1: required and optional params', async () => {
    const response = await client.customFields.updateV1('01FCNDV6P870EA6S7TK1DSYDG0', {
      description: 'Which team is impacted by this issue',
      name: 'Affected Team',
      show_before_closure: true,
      show_before_creation: true,
      show_before_update: true,
      required: 'never',
      required_v2: 'never',
      show_in_announcement_post: true,
    });
  });

  // Mock server tests are disabled
  test.skip('updateV2: only required params', async () => {
    const responsePromise = client.customFields.updateV2('01FCNDV6P870EA6S7TK1DSYDG0', {
      description: 'Which team is impacted by this issue',
      name: 'Affected Team',
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
    const response = await client.customFields.updateV2('01FCNDV6P870EA6S7TK1DSYDG0', {
      description: 'Which team is impacted by this issue',
      name: 'Affected Team',
      filter_by: {
        catalog_attribute_id: '01H2FW182TAH0NHEVBY34SCAK0',
        custom_field_id: '01H2FW182TAH0NHEVBY34SCAK0',
      },
      group_by_catalog_attribute_id: '01FCNDV6P870EA6S7TK1DSYDG0',
      helptext_catalog_attribute_id: '01H2FW182TAH0NHEVBY34SCAK0',
    });
  });
});
