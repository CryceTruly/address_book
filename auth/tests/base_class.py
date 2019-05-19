import json
from django.contrib.auth.models import User
from .test_data.login_data import (
    valid_login_data)
from .test_data.register_data import valid_register_data

from rest_framework.test import APITestCase, APIClient
import time
from django.urls import reverse


class BaseTest(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.url_register = reverse('auth:register')
        self.url_login = reverse('auth:login')
        self.url_user_detail = reverse('auth:profile')

    def register_test_user(self):
        """
        Method that registers a test user
        """
        response = self.client.post(self.url_register, data=json.dumps(
            valid_register_data), content_type='application/json')
        return response

    def register_and_login_user(self):
        """
        Method that registers, activates and logs in a user,
        It then sets the received token into client's credentials.
        """
        self.register_test_user()
        response = self.client.post(self.url_login, data=valid_login_data,
                                    format='json')

    def created_user(self):
        return User.objects.create_user(
            username='abc123',
            email='abc@abc.com',
            password='ia83naJS')

    def create_another_user_in_db(self):
        return User.objects.create_user(
            username='roger',
            email='testw@mail.com',
            password='ia83naJS')
