from django.contrib.auth.models import User
from rest_framework import serializers



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('id','username','email')





class RegisterSerializer(serializers.ModelSerializer):
    """
    Serializer for registering new users.
    """
    email = serializers.EmailField()

    class Meta(object):
        extra_kwargs = {
            "password": {
                "style": {"input_type": "password"},
                "write_only": True,
            }
        }
        fields = ('username', "email", "password","first_name","last_name")
        model = User

    def create(self, validated_data):

        user = User.objects.create_user(**validated_data)
        user.is_active = False
        user.first_name = validated_data['first_name']
        user.last_name = validated_data['last_name']
        user.save()
        return user





