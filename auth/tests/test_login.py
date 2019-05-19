"""Tests for user login"""
import json
from rest_framework import status
from .test_data.login_data import (valid_login_data, login_no_username,
                                   login_no_password,
                                   login_no_name_password, login_no_bad_user)
from .base_class import BaseTest


class LoginTest(BaseTest):
    """This class tests all user login actions."""

    def test_login_successful(self):
        """Test user login passes with correct user credentials."""
        self.register_and_login_user()
        response = self.client.post(self.url_login,
                                    data=json.dumps(
                                        valid_login_data),
                                    content_type='application/json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_login_no_username(self):
        """Test user login fails when no username is provided."""

        response = self.client.post(self.url_login,
                                    data=json.dumps(login_no_username),
                                    content_type='application/json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIsNotNone(response.data["username"])

    def test_login_user_unregistered(self):
        """Test user login fails when user is not registered."""

        response = self.client.post(self.url_login,
                                    data=json.dumps(
                                        login_no_bad_user),
                                    content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_login_no_username_password(self):
        """Test user login fails when no username and password are provided."""

        response = self.client.post(self.url_login,
                                    data=json.dumps(
                                        login_no_name_password),
                                    content_type='application/json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIsNotNone(response.data["username"])
        self.assertIsNotNone(response.data["password"])