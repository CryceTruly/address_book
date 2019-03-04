from knox.models import AuthToken
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail, EmailMessage
from django.contrib.sites.shortcuts import get_current_site
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, VerifyUserSerializer
from .tokens import JWTAuthentication
from django.conf import settings
from django.contrib.auth.models import User

import jwt
# Register API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        jwt_ = JWTAuthentication()
        user_data = UserSerializer(
            user, context=self.get_serializer_context()).data
        url = f"http://{get_current_site(request).domain}/api/auth/verify?token={jwt_.encode_jwt(user_data).decode('utf-8')}"

        email = EmailMessage('[AddressBook Activation] Confirm Your Email Address',
                             f'Dear {user.username},\n You arre receiving this e-mail because you have created an account on AddressBook.\nClick the click below to verify your account.\n{url}', to=[
                                 user.email])

        email.send()

        return Response({
            "user": user_data,
            "token": AuthToken.objects.create(user)

        },
            status=status.HTTP_201_CREATED
        )

# Login API


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })

# Get User API


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class EmailVerifyAPI(generics.GenericAPIView):
    serializer_class = VerifyUserSerializer

    def get(self, request):
        token = request.GET.get('token')

        try:
            payload = jwt.decode(token, settings.SECRET_KEY)
        except Exception as identifier:
            return None

        user = User.objects.filter(email=payload.get('email')).first()
        user.is_active = True
        user.save()
        return Response({"message": "Your Email has been verified,you can now login"}, status=status.HTTP_200_OK)
