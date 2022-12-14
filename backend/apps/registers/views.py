from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import RegisterSerializer
from .models import UserProfile, Contact


#views for the registration of a new users

class RegisterListAPIView(APIView):
    """creates a new user
    """
    permission_classes = (AllowAny)
    def post(self, request, format=None):
        """
        creates the User
        """
        user = UserProfile.objects.all()
        print(user)
        data = {
                'username': request.data.get('username'),
                'first_name': request.data.get('first_name'),
                'last_name': request.data.get('last_name'),
                'email': request.data.get('email'),
                'password': request.data.get('password'),
                'contacts': request.data.get('contacts'),
                'user': request.user.id
                }
        serializer = UserProfileSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                    serializer.data,
                    status=status.HTTP_201_CREATED
                    )
