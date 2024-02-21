# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

import time
import asyncio
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from ._client import MeorphisTest7, AsyncMeorphisTest7


class SyncAPIResource:
    _client: MeorphisTest7

    def __init__(self, client: MeorphisTest7) -> None:
        self._client = client
        self._get = client.get
        self._post = client.post
        self._patch = client.patch
        self._put = client.put
        self._delete = client.delete
        self._get_api_list = client.get_api_list

    def _sleep(self, seconds: float) -> None:
        time.sleep(seconds)


class AsyncAPIResource:
    _client: AsyncMeorphisTest7

    def __init__(self, client: AsyncMeorphisTest7) -> None:
        self._client = client
        self._get = client.get
        self._post = client.post
        self._patch = client.patch
        self._put = client.put
        self._delete = client.delete
        self._get_api_list = client.get_api_list

    async def _sleep(self, seconds: float) -> None:
        await asyncio.sleep(seconds)
