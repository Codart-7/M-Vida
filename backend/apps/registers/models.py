from django.db import models
import jwt
from django.conf import settings
from datetime import datetime, timedelta
from django.contrib.auth.models import (
        AbstractBaseUser, BaseUserManager,PermissionsMixin
        )

# Create your models here.
""" this handles the logic for the
registration
"""

class UserProfileManager(BaseUserManager):
    """
    Django requires that custom users define their own Manager class. By
    inheriting from `BaseUserManager`, we get a lot of the same code used by
    Django to create a `User`.

    All we have to do is override the `create_user` 
    function which we will use to create `User` objects.
    """
    def create_user(self, username, email, password=None):
        """Create and return a `User` 
        with an email, username and password."""
        if username is None:
            raise TypeError('Users must have a username.')

        if email is None:
            raise TypeError('Users must have an email address.')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        '''set the authentication for true when the user sets a password
        '''
        #user.is_authenticated(True)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if password is None:
            raise TypeError('Superusers must have a password.')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class UserProfile(AbstractBaseUser, PermissionsMixin):
    """ a class that stores the user details
    the user field is used to create a relationship
    with the default django user.
    """
    #user = models.OneToOneField(User, on_delete=models.CASCADE)
    #is_anonymous = models.BooleanField(default=False)
    username = models.CharField(max_length=20, db_index=True, unique=True)
    first_name = models.TextField(max_length=200, blank=False)
    last_name = models.TextField(max_length=200, blank=False)
    email = models.EmailField(db_index=True, unique=True, blank=False)

    """
    When a user no longer wishes to use our platform, they may try to delete
    their account. That's a problem for us because the data we collect is
    valuable to us and we don't want to delete it. We
    will simply offer users a way to deactivate their account instead of
    letting them delete it. That way they won't show up on the site anymore,
    but we can still analyze the data.
    """
    is_active = models.BooleanField(default=False)
    """
    The `is_staff` flag is expected by Django to determine
    who can and cannot log into the Django admin site.
    For most users this flag will always be false.
    """
    is_staff = models.BooleanField(default=False)

    #timestamp for when the user is created
    created_at = models.DateTimeField(auto_now_add=True)

    #timestamp for when the user is updated
    created_at = models.DateTimeField(auto_now_add=True)

    """
    The `USERNAME_FIELD` property tells us which field
    we will use to login
    """
    objects = UserProfileManager()
    USERNAME_FIELD = "username"

    REQUIRED_FIELDS = ["email", "first_name", "last_name"]

    def __str__(self):
        return self.email

    @property
    def token(self):
        """
        Allows us to get a user's token by calling `user.token`
        instead of`user.generate_jwt_token().
        """
        return self._generate_jwt_token()

    def _generate_jwt_token(self):
        """
        Generates a JSON Web Token that stores this user's ID
        and has an expiry date set to 60 days into the future.
        """
        dt = datetime.now() + timedelta(days=60)

        token = jwt.encode({
            'id': self.pk,
            'exp': int(dt.strftime('%s'))
            }, settings.SECRET_KEY, algorithm='HS256')
        return token.decode('utf-8')


class Contact(models.Model):
    """ a class that stores the users address
    details
    """
    userProfile = models.ForeignKey(
            UserProfile,
            on_delete=models.CASCADE,
            )
    country = models.TextField(max_length=100)
    city = models.TextField(max_length=200)
    weight = models.IntegerField(default=0)

    def __str__(self):
        """returns an instance of the parent"""
        return self.contacts


