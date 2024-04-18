# File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

from __future__ import annotations

import os
from typing import Any, cast

import pytest

from tests.utils import assert_matches_type
from meorphis_test_7 import MeorphisTest7, AsyncMeorphisTest7
from meorphis_test_7.types import StatusRetrieveResponse

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")


class TestStatus:
    parametrize = pytest.mark.parametrize("client", [False, True], indirect=True, ids=["loose", "strict"])

    @parametrize
    def test_method_retrieve(self, client: MeorphisTest7) -> None:
        status = client.status.retrieve()
        assert_matches_type(StatusRetrieveResponse, status, path=["response"])

    @parametrize
    def test_raw_response_retrieve(self, client: MeorphisTest7) -> None:
        response = client.status.with_raw_response.retrieve()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        status = response.parse()
        assert_matches_type(StatusRetrieveResponse, status, path=["response"])

    @parametrize
    def test_streaming_response_retrieve(self, client: MeorphisTest7) -> None:
        with client.status.with_streaming_response.retrieve() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            status = response.parse()
            assert_matches_type(StatusRetrieveResponse, status, path=["response"])

        assert cast(Any, response.is_closed) is True


class TestAsyncStatus:
    parametrize = pytest.mark.parametrize("async_client", [False, True], indirect=True, ids=["loose", "strict"])

    @parametrize
    async def test_method_retrieve(self, async_client: AsyncMeorphisTest7) -> None:
        status = await async_client.status.retrieve()
        assert_matches_type(StatusRetrieveResponse, status, path=["response"])

    @parametrize
    async def test_raw_response_retrieve(self, async_client: AsyncMeorphisTest7) -> None:
        response = await async_client.status.with_raw_response.retrieve()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        status = await response.parse()
        assert_matches_type(StatusRetrieveResponse, status, path=["response"])

    @parametrize
    async def test_streaming_response_retrieve(self, async_client: AsyncMeorphisTest7) -> None:
        async with async_client.status.with_streaming_response.retrieve() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            status = await response.parse()
            assert_matches_type(StatusRetrieveResponse, status, path=["response"])

        assert cast(Any, response.is_closed) is True
