from django.contrib.auth import authenticate, password_validation
from django.contrib.auth.models import User
from rest_framework import serializers, exceptions
import time
from knox.models import AuthToken
# User Serializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        user = User(**data)
        password = data.get('password')
        email = data.get('email')
        if not email:
            raise serializers.ValidationError('Email is required')
        email_user = User.objects.filter(email=email)
        if email_user:
            raise(serializers.ValidationError('Email is taken'))

        errors = dict()
        try:
            password_validation.validate_password(password=password, user=User)
        except exceptions.ValidationError as e:
            errors['password'] = list(e)

        if errors:
            raise serializers.ValidationError(errors)

        return super(RegisterSerializer, self).validate(data)

    def create(self, validated_data, **kwargs):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password'])

        user.is_active = False
        user.save()

        return user

# Login Serializer


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


class VerifyUserSerializer(serializers.Serializer):
    is_active = serializers.BooleanField

    def update(self, validated_data):
        print('heloooooooo')
        print(validated_data)
        time.sleep((20000))
        # instance.is_active = validated_data.get('is_active', True)
        return 1

    def validate(self, data):

        raise serializers.ValidationError('An error has occured')
