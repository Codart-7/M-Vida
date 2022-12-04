from django.db import models
from .models import UserProfile, Contact
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework import status
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

"""
check folder api for user serializer
"""
"""api to register a new user
"""


class RegisterSerializer:
    email = serializers.EmailField(
            required=True,
            validators=[
                UniqueValidator(
                    queryset=User.objects.all()
                    )]
                )
    password = serializers.CharField(
            write_only=True, required=True,
            validators=[validate_password])

    class Meta:
        model = UserProfile
        fields = (
                'username', 'password', 'password2',
                'email', 'first_name', 'last_name',
                'contacts'
                )
        extra_kwargs = {
                'first_name': {'required': True},
                'last_name': {'required': True}
                }

        def validate(self, attrs):
            """
            checks if passwords match
            """
            if attrs['password'] != attrs['password2']:
                raise serializers.ValidationError(
                        {
                            "password":
                            "Password fields didn't match."
                            }
                        )
                return attrs

        def create(self, validated_data):
            """
            create a new User
            """
            user = User.objects.create(
                    username=validated_data['username'],
                    email=validated_data['email'],
                    first_name=validated_data[
                        'first_name'
                        ],
                    last_name=validated_data[
                        'last_name'
                        ],
                    contacts=validated_data['contacts']
                    )
            user.set_password(validated_data['password'])
            user.save()
            return user
