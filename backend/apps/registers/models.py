from django.db import models
from django.contrib.auth.models import User

# Create your models here.
""" this handles the logic for the 
registration
"""
class UserProfile(models.Model):
    """ a class that stores the user details
    the user field is used to create a relationship
    with the default django user.
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=200)
    first_name = models.TextField(max_length=200)
    last_name = models.TextField(max_length=200)
    email = models.EmailField()
    password = models.CharField(max_length=50)

    def __str__(self):
            return "%s" % (self.username)

class Contact(models.Model):
    """ a class that stores the users address
    details
    """
    userProfile = models.ForeignKey(
            UserProfile, related_name = 'contacts',
            on_delete = models.CASCADE,
            )
    country = models.TextField(max_length=100)
    city = models.TextField(max_length=200)
    weight = models.IntegerField(default=0)

    def __str__(self):
        """solves the app_label issue"""
        return self.userprofile

    class Meta:
        unique_together = ['userprofile', 'country']
        ordering = ['country']
