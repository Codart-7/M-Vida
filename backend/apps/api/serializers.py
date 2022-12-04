from rest_framework import serializers
from django.db import models
from .models import UserProfile, Contact
"""from rest_framework.response import Response
from rest_framework import status
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
"""

class ContactSerializer(serializers.ModelSerializer):
    """serializing a child class to have it's output
    nested in the parent class"""
    class Meta:
        model = Contact
        fields = ["userprofile","country", "city", "birth_date", "weight"]
class UserProfileSerializer(serializers.ModelSerializer):
    """serializers to get the user details
    """
    contacts = ContactSerializer(many=True)
    class Meta:
        model = UserProfile
        fields = [
                "username", "first_name", "last_name",
                "email", "password", "contacts"
                ]
        
    def create(self, validated_data):
        contacts_data = validated_data.pop('contacts')
        userprofile = UserProfile.objects.create(**validated_data)
        for contact_data in contacts_data:
            Contacts.objects.create(userprofile=userprofile, **contact_data)
        return userprofile
