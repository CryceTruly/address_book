from django.contrib.auth.models import User
from rest_framework import serializers


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username','id','first_name','last_name','username','email','password']

        extra_kwargs={
            'password':{'write_only':True}
        }


        def create(self,validated_data):
            user=User.objects.create_user(**validated_data)
            user.set_password([validated_data['password']])
            return user


