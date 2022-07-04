from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import update_last_login
from django.contrib.auth import login, get_user_model
from django.core.exceptions import ObjectDoesNotExist

from hangout_app.user.serializers import UserSerializer
#from hangout_app.user.models import User
from django.contrib.auth.backends import ModelBackend

from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.backends import ModelBackend

class AuthBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        User = get_user_model()
        if '@' in username:
            kwargs = {'email': username}
        else:
            kwargs = {'username': username}
        try:
            user = get_user_model().objects.get(**kwargs)
           
            if user.check_password(password):
                return user
        except User.DoesNotExist:
            return None
    
    def get_user(id_):
        User = get_user_model()
        try:
            return User.objects.get(pk=id_)
        except User.DoesNotExist:
            return None

class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=255)
    password = serializers.CharField(
        label= ("Password"),
        style={'input_type': 'password'},
        trim_whitespace=False,
        max_length=128,
    )

    # def authenticate(self, username, password):
    #     if '@' in username:
    #         kwargs = {'email': username}
    #     else:
    #         kwargs = {'username': username}
    #     try:
    #         user = get_user_model().objects.get(**kwargs)
            
    #         if user.check_password(password):
    #             return user
    #     except User.DoesNotExist:
    #         return None

    def validate(self, data):
        username = data.get('email')
        password = data.get('password')

        if username and password:
            user = authenticate(username=username, password=password)

            # if user and  user.is_active:
            #     login(request, data['user'])
            #     print(user.is_authenticated, request.user.is_authenticated)
            if not user:
                msg = ('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = ('Must include "username" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        data['user'] = user
        return data


class RegisterSerializer(UserSerializer):
    
    class Meta:
        User = get_user_model()
        model = User
        fields = ['id', 'firstname', 'lastname', 'email', 'username', 'password','phone_number']
        
    def create(self, validated_data):
        User = get_user_model()
        try:
            user = User.objects.get(email=validated_data['email'])
        except ObjectDoesNotExist:
            user = User.objects.create_user(**validated_data)
        return user