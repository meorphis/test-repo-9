from __future__ import annotations

import asyncio
import logging
from typing import Iterator

import pytest

import os
from typing import TYPE_CHECKING, AsyncIterator

from meorphis_test_7 import MeorphisTest7, AsyncMeorphisTest7

if TYPE_CHECKING:
  from _pytest.fixtures import FixtureRequest

pytest.register_assert_rewrite("tests.utils")

logging.getLogger("meorphis_test_7").setLevel(logging.DEBUG)


@pytest.fixture(scope="session")
def event_loop() -> Iterator[asyncio.AbstractEventLoop]:
    loop = asyncio.new_event_loop()
    yield loop
    loop.close()


base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")

api_key = "My API Key"

@pytest.fixture(scope="session")
def client(request: FixtureRequest) -> Iterator[MeorphisTest7]:
    strict = getattr(request, 'param', True)
    if not isinstance(strict, bool):
      raise TypeError(f'Unexpected fixture parameter type {type(strict)}, expected {bool}')

    with MeorphisTest7(base_url=base_url, api_key=api_key, _strict_response_validation=strict) as client :
        yield client

@pytest.fixture(scope="session")
async def async_client(request: FixtureRequest) -> AsyncIterator[AsyncMeorphisTest7]:
    strict = getattr(request, 'param', True)
    if not isinstance(strict, bool):
      raise TypeError(f'Unexpected fixture parameter type {type(strict)}, expected {bool}')

    async with AsyncMeorphisTest7(base_url=base_url, api_key=api_key, _strict_response_validation=strict) as client :
        yield client
