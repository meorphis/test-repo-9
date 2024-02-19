# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

import httpx

from .._compat import cached_property

from ..types import StatusRetrieveResponse

from .._response import to_raw_response_wrapper, async_to_raw_response_wrapper, to_streamed_response_wrapper, async_to_streamed_response_wrapper

import warnings
from typing import TYPE_CHECKING, Optional, Union, List, Dict, Any, Mapping, cast, overload
from typing_extensions import Literal
from .._utils import extract_files, maybe_transform, required_args, deepcopy_minimal, strip_not_given
from .._types import NotGiven, Timeout, Headers, NoneType, Query, Body, NOT_GIVEN, FileTypes, BinaryResponseContent
from .._resource import SyncAPIResource, AsyncAPIResource
from .._base_client import SyncAPIClient, AsyncAPIClient, _merge_mappings, AsyncPaginator, make_request_options, HttpxBinaryResponseContent
from ..types import shared_params

__all__ = ["Status", "AsyncStatus"]

class Status(SyncAPIResource):
    @cached_property
    def with_raw_response(self) -> StatusWithRawResponse:
        return StatusWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> StatusWithStreamingResponse:
        return StatusWithStreamingResponse(self)

    def retrieve(self,
    *,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> StatusRetrieveResponse:
        """API status check"""
        return self._get(
            "/status",
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout),
            cast_to=StatusRetrieveResponse,
        )

class AsyncStatus(AsyncAPIResource):
    @cached_property
    def with_raw_response(self) -> AsyncStatusWithRawResponse:
        return AsyncStatusWithRawResponse(self)

    @cached_property
    def with_streaming_response(self) -> AsyncStatusWithStreamingResponse:
        return AsyncStatusWithStreamingResponse(self)

    async def retrieve(self,
    *,
    # Use the following arguments if you need to pass additional parameters to the API that aren't available via kwargs.
    # The extra values given here take precedence over values defined on the client or passed to this method.
    extra_headers: Headers | None = None,
    extra_query: Query | None = None,
    extra_body: Body | None = None,
    timeout: float | httpx.Timeout | None | NotGiven = NOT_GIVEN,) -> StatusRetrieveResponse:
        """API status check"""
        return await self._get(
            "/status",
            options=make_request_options(extra_headers=extra_headers, extra_query=extra_query, extra_body=extra_body, timeout=timeout),
            cast_to=StatusRetrieveResponse,
        )

class StatusWithRawResponse:
    def __init__(self, status: Status) -> None:
        self._status = status

        self.retrieve = to_raw_response_wrapper(
            status.retrieve,
        )

class AsyncStatusWithRawResponse:
    def __init__(self, status: AsyncStatus) -> None:
        self._status = status

        self.retrieve = async_to_raw_response_wrapper(
            status.retrieve,
        )

class StatusWithStreamingResponse:
    def __init__(self, status: Status) -> None:
        self._status = status

        self.retrieve = to_streamed_response_wrapper(
            status.retrieve,
        )

class AsyncStatusWithStreamingResponse:
    def __init__(self, status: AsyncStatus) -> None:
        self._status = status

        self.retrieve = async_to_streamed_response_wrapper(
            status.retrieve,
        )