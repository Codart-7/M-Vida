from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from api import views
"""create the endpoints
e.g users/api
"""
urlpatterns = [
        path('api/', views.UserProfileList.as_view()),

        ]
urlpatterns = format_suffix_patterns(urlpatterns)

