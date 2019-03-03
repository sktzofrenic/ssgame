# -*- coding: utf-8 -*-
"""Model unit tests."""
import datetime as dt

import pytest

from ssgame.user.models import Role, User

from .factories import UserFactory


@pytest.mark.usefixtures('db')
class TestBibleApi:
    """User tests."""

    def test_get_verse(self, testapp):

        res = testapp.get('/get-bible')

        assert res.status_code == 200

    