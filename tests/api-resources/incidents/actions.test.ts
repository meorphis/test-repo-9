// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IncidentIo2 from 'incident-io-2';

const client = new IncidentIo2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Prism tests are disabled
  test.skip('edit: only required params', async () => {
    const responsePromise = client.incidents.actions.edit('01G18REBY9AYH6CMWCJ2CVCYCH', {
      incident: {},
      notify_incident_channel: true,
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
  test.skip('edit: required and optional params', async () => {
    const response = await client.incidents.actions.edit('01G18REBY9AYH6CMWCJ2CVCYCH', {
      incident: {
        call_url: 'https://zoom.us/foo',
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
            assignee: {
              id: '01G0J1EXE7AXZ2C93K61WBPYEH',
              email: 'bob@example.com',
              slack_user_id: 'USER123',
            },
          },
        ],
        incident_status_id: 'abc123',
        incident_timestamp_values: [
          { incident_timestamp_id: '01FCNDV6P870EA6S7TK1DSYD5H', value: '2021-08-17T13:28:57.801578Z' },
        ],
        name: 'Our database is sad',
        severity_id: '01G0J1EXE7AXZ2C93K61WBPYEH',
        slack_channel_name_override: 'inc-123-database-down',
        summary: "Our database is really really sad, and we don't know why yet.",
      },
      notify_incident_channel: true,
    });
  });
});
