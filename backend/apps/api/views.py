from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.http import Http404
from .models import *
from .serializers import UserProfileSerializer, ContactSerializer


class UserProfileList(APIView):
    
    permissions_classes = [permissions.IsAuthenticated]
    def get(self, request, *args, **kwargs):
        """lists all users
        """
        users = UserProfile.objects.all()
        print(users)
        serializer = UserProfileSerializer(
                users, many=True)
        return Response(
                serializer.data,
                status=status.HTTP_200_OK
                )

    def post(self, request, format=None):
        """
        creates the User
        """
        data = {
                'username': request.data.get('username'),
                'first_name': request.data.get('first_name'),
                'last_name': request.data.get('last_name'),
                'email': request.data.get('email'),
                'password': request.data.get('password'),
                'Contact': request.data.get('contact'),
                'user': request.user.id
                }
        serializer = UserProfileSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                    serializer.data,
                    status=status.HTTP_201_CREATED
                    )
        return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
                )
