from django.db import models

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from phone_field import PhoneField


class UserManager(BaseUserManager):

    def create_user(self, username, email, password=None, **kwargs):
        """Create and return a `User` with an email, phone number, username and password."""
        if username is None:
            raise TypeError('Users must have a username.')
        if email is None:
            raise TypeError('Users must have an email.')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, username, email, password):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if password is None:
            raise TypeError('Superusers must have a password.')
        if email is None:
            raise TypeError('Superusers must have an email.')
        if username is None:
            raise TypeError('Superusers must have an username.')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(db_index=True, unique=True,  null=True, blank=True)
    firstname = models.CharField(max_length = 50)
    lastname = models.CharField(max_length = 50)
    phone_number = PhoneField(max_length = 10)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    friends = models.ManyToManyField("User", blank=True)
    status = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'firstname', 'lastname']

    objects = UserManager()

    def __str__(self):
        return f"{self.email}"

    def get_user(self, user_id):
        print("get_user")
        try:
            return User.objects.get(pk=user_id) # <-- must be primary key and number
        except User.DoesNotExist:
            return None


