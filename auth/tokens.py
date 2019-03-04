import jwt
from django.conf import settings
from rest_framework import authentication, exceptions
from django.shortcuts import get_object_or_404


class JWTAuthentication(authentication.BaseAuthentication):

    def authenticate(self, request):
        auth_header = authentication.get_authorization_header(request).split()
        token = auth_header[1].decode('utf-8')
        return self.authentication_credentials(request, token)
        return None

    def encode_jwt(self, data):
        token = jwt.encode(data, settings.SECRET_KEY, algorithm='HS256')
        return token

    def decode_jwt(self, request, token):
        try:
            payload = jwt.decode(token, settings.SECRET_KEY)
            user = User.objects.get(email=payload['email'])
            if not user.is_active:
                raise exceptions.AuthenticationFailed("User was deactivated.")
            return (user, token)
        except jwt.ExpiredSignatureError as e:
            raise exceptions.AuthenticationFailed(
                "Token expired")
        except jwt.InvalidSignatureError as es:
            raise exceptions.AuthenticationFailed('Expired token')
