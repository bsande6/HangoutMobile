from .models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_active', 'phone_number']
        read_only_field = ['is_active']

# class LoginSerializer(TokenObtainPairSerializer):

#     def validate(self, attrs):
#         data = super().validate(attrs)

#         refresh = self.get_token(self.user)

#         data['user'] = UserSerializer(self.user).data
#         data['refresh'] = str(refresh)
#         data['access'] = str(refresh.access_token)

#         if api_settings.UPDATE_LAST_LOGIN:
#             update_last_login(None, self.user)

#         return data