// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MeorphisTest from 'test3';
import { Response } from 'node-fetch';

const meorphisTest = new MeorphisTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource provisions', () => {
  test('postProvision', async () => {
    const responsePromise = meorphisTest.cards.provisions.postProvision(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
