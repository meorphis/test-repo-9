// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo2 from 'incident-io-2';

const client = new IncidentIo2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource incidents', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.incidents.create({ idempotency_key: 'alert-uuid', visibility: 'public' });
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
    const response = await client.incidents.create({
      idempotency_key: 'alert-uuid',
      visibility: 'public',
      custom_field_entries: [
        {
          custom_field_id: '01FCNDV6P870EA6S7TK1DSYDG0',
          values: [
            {
              id: '01FCNDV6P870EA6S7TK1DSYDG0',
              value_catalog_entry_id: '01FCNDV6P870EA6S7TK1DSYDG0',
              value_link: 'https://google.com/',
              value_numeric: '123.456',
              value_option_id: '01FCNDV6P870EA6S7TK1DSYDG0',
              value_text: 'This is my text field, I hope you like it',
              value_timestamp: '',
            },
          ],
        },
      ],
      incident_role_assignments: [
        {
          assignee: { id: '01G0J1EXE7AXZ2C93K61WBPYEH', email: 'bob@example.com', slack_user_id: 'USER123' },
          incident_role_id: '01FH5TZRWMNAFB0DZ23FD1TV96',
        },
      ],
      incident_type_id: '01FH5TZRWMNAFB0DZ23FD1TV96',
      mode: 'real',
      name: 'Our database is sad',
      severity_id: '01FH5TZRWMNAFB0DZ23FD1TV96',
      slack_team_id: 'T02A1FSLE8J',
      source_message_channel_id: 'C02AW36C1M5',
      source_message_timestamp: '1653650280.526509',
      status: 'triage',
      summary: "Our database is really really sad, and we don't know why yet.",
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.incidents.retrieve('01FDAG4SAP5TYPT98WGR2N7W91');
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
    const responsePromise = client.incidents.list();
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
      client.incidents.list(
        { after: '01FDAG4SAP5TYPT98WGR2N7W91', page_size: 25, status: ['declined'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(IncidentIo2.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createV2: only required params', async () => {
    const responsePromise = client.incidents.createV2({
      idempotency_key: 'alert-uuid',
      visibility: 'public',
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
  test.skip('createV2: required and optional params', async () => {
    const response = await client.incidents.createV2({
      idempotency_key: 'alert-uuid',
      visibility: 'public',
      custom_field_entries: [
        {
          custom_field_id: '01FCNDV6P870EA6S7TK1DSYDG0',
          values: [
            {
              id: '01FCNDV6P870EA6S7TK1DSYDG0',
              value_catalog_entry_id: '01FCNDV6P870EA6S7TK1DSYDG0',
              value_link: 'https://google.com/',
              value_numeric: '123.456',
              value_option_id: '01FCNDV6P870EA6S7TK1DSYDG0',
              value_text: 'This is my text field, I hope you like it',
              value_timestamp: '',
            },
          ],
        },
      ],
      incident_role_assignments: [
        {
          incident_role_id: '01FH5TZRWMNAFB0DZ23FD1TV96',
          assignee: { id: '01G0J1EXE7AXZ2C93K61WBPYEH', email: 'bob@example.com', slack_user_id: 'USER123' },
        },
      ],
      incident_status_id: '01G0J1EXE7AXZ2C93K61WBPYEH',
      incident_timestamp_values: [
        { incident_timestamp_id: '01FCNDV6P870EA6S7TK1DSYD5H', value: '2021-08-17T13:28:57.801578Z' },
      ],
      incident_type_id: '01FH5TZRWMNAFB0DZ23FD1TV96',
      mode: 'standard',
      name: 'Our database is sad',
      retrospective_incident_options: {
        external_id: 123,
        postmortem_document_url: 'https://docs.google.com/my_doc_id',
        slack_channel_id: 'abc123',
      },
      severity_id: '01FH5TZRWMNAFB0DZ23FD1TV96',
      slack_channel_name_override: 'inc-123-database-down',
      slack_team_id: 'T02A1FSLE8J',
      summary: "Our database is really really sad, and we don't know why yet.",
    });
  });

  // Prism tests are disabled
  test.skip('listV2', async () => {
    const responsePromise = client.incidents.listV2();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listV2: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.incidents.listV2(
        {
          after: '01FDAG4SAP5TYPT98WGR2N7W91',
          created_at: { 'created_at[gte]': ['2024-05-01'] },
          custom_field: {
            '01GBSQF3FHF7FWZQNWGHAVQ804': {
              one_of: ['01GBSQF3FHF7FWZQNWGHAVQ804', '01ET65M7ZARSFZ6TFDFVQDN9AA'],
            },
          },
          incident_role: {
            '01GBSQF3FHF7FWZQNWGHAVQ804': {
              one_of: ['01GBSQF3FHF7FWZQNWGHAVQ804', '01ET65M7ZARSFZ6TFDFVQDN9AA'],
            },
          },
          incident_type: { one_of: ['01GBSQF3FHF7FWZQNWGHAVQ804'] },
          mode: { one_of: ['retrospective'] },
          page_size: 25,
          severity: { one_of: ['01GBSQF3FHF7FWZQNWGHAVQ804'] },
          status: { one_of: ['01GBSQF3FHF7FWZQNWGHAVQ804'] },
          status_category: { one_of: ['active'] },
          updated_at: { 'updated_at[gte]': ['2024-05-01'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(IncidentIo2.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveV2', async () => {
    const responsePromise = client.incidents.retrieveV2('01FDAG4SAP5TYPT98WGR2N7W91');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
