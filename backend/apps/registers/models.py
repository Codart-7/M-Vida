from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=200)
    first_name = models.TextField(max_length=200)
    last_name = models.TextField(max_length=200)
    email = models.CharField(max_length=200)
    passhash = models.CharField(max_length=50)
    salt = models.CharField(max_length=50)

class UserInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    country = models.TextField(max_length=100)
    city = models.TextField(max_length=200)


