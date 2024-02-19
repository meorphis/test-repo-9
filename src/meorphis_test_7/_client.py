# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

import httpx

import os

from ._streaming import AsyncStream as AsyncStream, Stream as Stream

from ._exceptions import MeorphisTest7Error, APIStatusError

from typing_extensions import override, Self

from typing import Any

from ._utils import get_async_library

from . import _exceptions

import os
import asyncio
import warnings
from typing import Optional, Union, Dict, Any, Mapping, overload, cast
from typing_extensions import Literal

import httpx

from ._version import __version__
from ._qs import Querystring
from .types import shared_params
from ._utils import extract_files, maybe_transform, required_args, deepcopy_minimal, maybe_coerce_integer, maybe_coerce_float, maybe_coerce_boolean, is_given
from ._types import Omit, NotGiven, Timeout, Transport, ProxiesTypes, RequestOptions, Headers, NoneType, Query, Body, NOT_GIVEN
from ._base_client import (
    DEFAULT_LIMITS,
    DEFAULT_TIMEOUT,
    DEFAULT_MAX_RETRIES,
    ResponseT,
    SyncHttpxClientWrapper,
    AsyncHttpxClientWrapper,
    SyncAPIClient,
    AsyncAPIClient,
    make_request_options,
)
from . import resources

__all__ = ["ENVIRONMENTS", "Timeout", "Transport", "ProxiesTypes", "RequestOptions", "resources", "MeorphisTest7", "AsyncMeorphisTest7", "Client", "AsyncClient"]

ENVIRONMENTS: Dict[str, str] = {
    "production": "https://api.acme.com/v1",
    "environment_1": "https://sandbox.acme.com/v1",
}

class MeorphisTest7(SyncAPIClient):
    accounts: resources.Accounts
    cards: resources.Cards
    status: resources.Status
    with_raw_response: MeorphisTest7WithRawResponse
    with_streaming_response: MeorphisTest7WithStreamedResponse

    # client options
    api_key: str

    _environment: Literal["production","environment_1"] | NotGiven

    def __init__(self, *, api_key: str | None = None, environment: Literal["production","environment_1"] | NotGiven = NOT_GIVEN, base_url: str | httpx.URL | None | NotGiven = NOT_GIVEN, timeout: Union[float, Timeout, None, NotGiven] = NOT_GIVEN, max_retries: int = DEFAULT_MAX_RETRIES, default_headers: Mapping[str, str] | None = None, default_query: Mapping[str, object] | None = None, 
    # Configure a custom httpx client. See the [httpx documentation](https://www.python-httpx.org/api/#client) for more details.
    http_client: httpx.Client | None = None, 
    # Enable or disable schema validation for data returned by the API.
    # When enabled an error APIResponseValidationError is raised
    # if the API responds with invalid data for the expected schema.
    # 
    # This parameter may be removed or changed in the future.
    # If you rely on this feature, please open a GitHub issue
    # outlining your use-case to help us decide if it should be
    # part of our public interface in the future.
    _strict_response_validation: bool = False) -> None:
        """Construct a new synchronous meorphis-test-7 client instance.

        This automatically infers the `api_key` argument from the `MEORPHIS_TEST_7_API_KEY` environment variable if it is not provided.
        """
        if api_key is None:
          api_key = os.environ.get("MEORPHIS_TEST_7_API_KEY")
        if api_key is None:
          raise MeorphisTest7Error(
            "The api_key client option must be set either by passing api_key to the client or by setting the MEORPHIS_TEST_7_API_KEY environment variable"
          )
        self.api_key = api_key

        self._environment = environment

        base_url_env = os.environ.get("MEORPHIS_TEST_7_BASE_URL")
        if is_given(base_url) and base_url is not None:
          # cast required because mypy doesn't understand the type narrowing
          base_url = cast('str | httpx.URL', base_url)  # pyright: ignore[reportUnnecessaryCast]
        elif is_given(environment):
          if base_url_env and base_url is not None:
            raise ValueError(
              'Ambiguous URL; The `MEORPHIS_TEST_7_BASE_URL` env var and the `environment` argument are given. If you want to use the environment, you must pass base_url=None',
            )

          try:
            base_url = ENVIRONMENTS[environment]
          except KeyError as exc:
            raise ValueError(f'Unknown environment: {environment}') from exc
        elif base_url_env is not None:
          base_url = base_url_env
        else:
          self._environment = environment = "production"

          try:
            base_url = ENVIRONMENTS[environment]
          except KeyError as exc:
            raise ValueError(f'Unknown environment: {environment}') from exc

        super().__init__(version=__version__, base_url=base_url, max_retries=max_retries, timeout=timeout, http_client=http_client, custom_headers=default_headers, custom_query=default_query, _strict_response_validation=_strict_response_validation)

        self.accounts = resources.Accounts(self)
        self.cards = resources.Cards(self)
        self.status = resources.Status(self)
        self.with_raw_response = MeorphisTest7WithRawResponse(self)
        self.with_streaming_response = MeorphisTest7WithStreamedResponse(self)

    @property
    @override
    def qs(self) -> Querystring:
        return Querystring(array_format="comma")

    @property
    @override
    def auth_headers(self) -> dict[str, str]:
        api_key = self.api_key
        return {
            "Authorization": api_key
        }

    @property
    @override
    def default_headers(self) -> dict[str, str | Omit]:
        return {
          **super().default_headers,
          "X-Stainless-Async": "false",
          **self._custom_headers,
        }

    def copy(self, *, api_key: str | None = None, environment: Literal["production","environment_1"] | None = None, base_url: str | httpx.URL | None = None, timeout: float | Timeout | None | NotGiven = NOT_GIVEN, http_client: httpx.Client | None = None, max_retries: int | NotGiven = NOT_GIVEN, default_headers: Mapping[str, str] | None = None, set_default_headers: Mapping[str, str] | None = None, default_query: Mapping[str, object] | None = None, set_default_query: Mapping[str, object] | None = None, _extra_kwargs: Mapping[str, Any] = {}) -> Self:
        """
        Create a new client instance re-using the same options given to the current client with optional overriding.
        """
        if default_headers is not None and set_default_headers is not None:
          raise ValueError(
            'The `default_headers` and `set_default_headers` arguments are mutually exclusive'
          )

        if default_query is not None and set_default_query is not None:
          raise ValueError(
            'The `default_query` and `set_default_query` arguments are mutually exclusive'
          )

        headers = self._custom_headers
        if default_headers is not None:
            headers = {**headers, **default_headers}
        elif set_default_headers is not None:
            headers = set_default_headers

        params = self._custom_query
        if default_query is not None:
            params = {**params, **default_query}
        elif set_default_query is not None:
            params = set_default_query

        http_client = http_client or self._client
        return self.__class__(api_key = api_key or self.api_key, base_url=base_url or self.base_url, environment=environment or self._environment, timeout=self.timeout if isinstance(timeout, NotGiven) else timeout, http_client=http_client, max_retries=max_retries if is_given(max_retries) else self.max_retries, default_headers=headers, default_query=params, **_extra_kwargs)

    # Alias for `copy` for nicer inline usage, e.g.
    # client.with_options(timeout=10).foo.create(...)
    with_options = copy

    @override
    def _make_status_error(self, err_msg: str, *, body: object, response: httpx.Response,) -> APIStatusError:
        if response.status_code == 400:
            return _exceptions.BadRequestError(err_msg, response=response, body=body)

        if response.status_code == 401:
            return _exceptions.AuthenticationError(err_msg, response=response, body=body)

        if response.status_code == 403:
            return _exceptions.PermissionDeniedError(err_msg, response=response, body=body)

        if response.status_code == 404:
            return _exceptions.NotFoundError(err_msg, response=response, body=body)

        if response.status_code == 409:
            return _exceptions.ConflictError(err_msg, response=response, body=body)

        if response.status_code == 422:
            return _exceptions.UnprocessableEntityError(err_msg, response=response, body=body)

        if response.status_code == 429:
            return _exceptions.RateLimitError(err_msg, response=response, body=body)

        if response.status_code >= 500:
            return _exceptions.InternalServerError(err_msg, response=response, body=body)
        return APIStatusError(err_msg, response=response, body=body)

class AsyncMeorphisTest7(AsyncAPIClient):
    accounts: resources.AsyncAccounts
    cards: resources.AsyncCards
    status: resources.AsyncStatus
    with_raw_response: AsyncMeorphisTest7WithRawResponse
    with_streaming_response: AsyncMeorphisTest7WithStreamedResponse

    # client options
    api_key: str

    _environment: Literal["production","environment_1"] | NotGiven

    def __init__(self, *, api_key: str | None = None, environment: Literal["production","environment_1"] | NotGiven = NOT_GIVEN, base_url: str | httpx.URL | None | NotGiven = NOT_GIVEN, timeout: Union[float, Timeout, None, NotGiven] = NOT_GIVEN, max_retries: int = DEFAULT_MAX_RETRIES, default_headers: Mapping[str, str] | None = None, default_query: Mapping[str, object] | None = None, 
    # Configure a custom httpx client. See the [httpx documentation](https://www.python-httpx.org/api/#asyncclient) for more details.
    http_client: httpx.AsyncClient | None = None, 
    # Enable or disable schema validation for data returned by the API.
    # When enabled an error APIResponseValidationError is raised
    # if the API responds with invalid data for the expected schema.
    # 
    # This parameter may be removed or changed in the future.
    # If you rely on this feature, please open a GitHub issue
    # outlining your use-case to help us decide if it should be
    # part of our public interface in the future.
    _strict_response_validation: bool = False) -> None:
        """Construct a new async meorphis-test-7 client instance.

        This automatically infers the `api_key` argument from the `MEORPHIS_TEST_7_API_KEY` environment variable if it is not provided.
        """
        if api_key is None:
          api_key = os.environ.get("MEORPHIS_TEST_7_API_KEY")
        if api_key is None:
          raise MeorphisTest7Error(
            "The api_key client option must be set either by passing api_key to the client or by setting the MEORPHIS_TEST_7_API_KEY environment variable"
          )
        self.api_key = api_key

        self._environment = environment

        base_url_env = os.environ.get("MEORPHIS_TEST_7_BASE_URL")
        if is_given(base_url) and base_url is not None:
          # cast required because mypy doesn't understand the type narrowing
          base_url = cast('str | httpx.URL', base_url)  # pyright: ignore[reportUnnecessaryCast]
        elif is_given(environment):
          if base_url_env and base_url is not None:
            raise ValueError(
              'Ambiguous URL; The `MEORPHIS_TEST_7_BASE_URL` env var and the `environment` argument are given. If you want to use the environment, you must pass base_url=None',
            )

          try:
            base_url = ENVIRONMENTS[environment]
          except KeyError as exc:
            raise ValueError(f'Unknown environment: {environment}') from exc
        elif base_url_env is not None:
          base_url = base_url_env
        else:
          self._environment = environment = "production"

          try:
            base_url = ENVIRONMENTS[environment]
          except KeyError as exc:
            raise ValueError(f'Unknown environment: {environment}') from exc

        super().__init__(version=__version__, base_url=base_url, max_retries=max_retries, timeout=timeout, http_client=http_client, custom_headers=default_headers, custom_query=default_query, _strict_response_validation=_strict_response_validation)

        self.accounts = resources.AsyncAccounts(self)
        self.cards = resources.AsyncCards(self)
        self.status = resources.AsyncStatus(self)
        self.with_raw_response = AsyncMeorphisTest7WithRawResponse(self)
        self.with_streaming_response = AsyncMeorphisTest7WithStreamedResponse(self)

    @property
    @override
    def qs(self) -> Querystring:
        return Querystring(array_format="comma")

    @property
    @override
    def auth_headers(self) -> dict[str, str]:
        api_key = self.api_key
        return {
            "Authorization": api_key
        }

    @property
    @override
    def default_headers(self) -> dict[str, str | Omit]:
        return {
          **super().default_headers,
          "X-Stainless-Async": f'async:{get_async_library()}',
          **self._custom_headers,
        }

    def copy(self, *, api_key: str | None = None, environment: Literal["production","environment_1"] | None = None, base_url: str | httpx.URL | None = None, timeout: float | Timeout | None | NotGiven = NOT_GIVEN, http_client: httpx.AsyncClient | None = None, max_retries: int | NotGiven = NOT_GIVEN, default_headers: Mapping[str, str] | None = None, set_default_headers: Mapping[str, str] | None = None, default_query: Mapping[str, object] | None = None, set_default_query: Mapping[str, object] | None = None, _extra_kwargs: Mapping[str, Any] = {}) -> Self:
        """
        Create a new client instance re-using the same options given to the current client with optional overriding.
        """
        if default_headers is not None and set_default_headers is not None:
          raise ValueError(
            'The `default_headers` and `set_default_headers` arguments are mutually exclusive'
          )

        if default_query is not None and set_default_query is not None:
          raise ValueError(
            'The `default_query` and `set_default_query` arguments are mutually exclusive'
          )

        headers = self._custom_headers
        if default_headers is not None:
            headers = {**headers, **default_headers}
        elif set_default_headers is not None:
            headers = set_default_headers

        params = self._custom_query
        if default_query is not None:
            params = {**params, **default_query}
        elif set_default_query is not None:
            params = set_default_query

        http_client = http_client or self._client
        return self.__class__(api_key = api_key or self.api_key, base_url=base_url or self.base_url, environment=environment or self._environment, timeout=self.timeout if isinstance(timeout, NotGiven) else timeout, http_client=http_client, max_retries=max_retries if is_given(max_retries) else self.max_retries, default_headers=headers, default_query=params, **_extra_kwargs)

    # Alias for `copy` for nicer inline usage, e.g.
    # client.with_options(timeout=10).foo.create(...)
    with_options = copy

    @override
    def _make_status_error(self, err_msg: str, *, body: object, response: httpx.Response,) -> APIStatusError:
        if response.status_code == 400:
            return _exceptions.BadRequestError(err_msg, response=response, body=body)

        if response.status_code == 401:
            return _exceptions.AuthenticationError(err_msg, response=response, body=body)

        if response.status_code == 403:
            return _exceptions.PermissionDeniedError(err_msg, response=response, body=body)

        if response.status_code == 404:
            return _exceptions.NotFoundError(err_msg, response=response, body=body)

        if response.status_code == 409:
            return _exceptions.ConflictError(err_msg, response=response, body=body)

        if response.status_code == 422:
            return _exceptions.UnprocessableEntityError(err_msg, response=response, body=body)

        if response.status_code == 429:
            return _exceptions.RateLimitError(err_msg, response=response, body=body)

        if response.status_code >= 500:
            return _exceptions.InternalServerError(err_msg, response=response, body=body)
        return APIStatusError(err_msg, response=response, body=body)

class MeorphisTest7WithRawResponse:
    def __init__(self, client: MeorphisTest7) -> None:
        self.accounts = resources.AccountsWithRawResponse(client.accounts)
        self.cards = resources.CardsWithRawResponse(client.cards)
        self.status = resources.StatusWithRawResponse(client.status)

class AsyncMeorphisTest7WithRawResponse:
    def __init__(self, client: AsyncMeorphisTest7) -> None:
        self.accounts = resources.AsyncAccountsWithRawResponse(client.accounts)
        self.cards = resources.AsyncCardsWithRawResponse(client.cards)
        self.status = resources.AsyncStatusWithRawResponse(client.status)

class MeorphisTest7WithStreamedResponse:
    def __init__(self, client: MeorphisTest7) -> None:
        self.accounts = resources.AccountsWithStreamingResponse(client.accounts)
        self.cards = resources.CardsWithStreamingResponse(client.cards)
        self.status = resources.StatusWithStreamingResponse(client.status)

class AsyncMeorphisTest7WithStreamedResponse:
    def __init__(self, client: AsyncMeorphisTest7) -> None:
        self.accounts = resources.AsyncAccountsWithStreamingResponse(client.accounts)
        self.cards = resources.AsyncCardsWithStreamingResponse(client.cards)
        self.status = resources.AsyncStatusWithStreamingResponse(client.status)

Client = MeorphisTest7

AsyncClient = AsyncMeorphisTest7