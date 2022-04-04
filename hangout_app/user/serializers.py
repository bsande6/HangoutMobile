from .models import User
from rest_framework import serializers
from django.core.exceptions import ObjectDoesNotExist
import json


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_active', 'phone_number', 'firstname', 'lastname', 'friends', 'status']
        read_only_field = ['is_active']

    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.firstname = validated_data.get('firstname', instance.firstname)
        instance.created = validated_data.get('created', instance.created)
        instance.save()
        return instance


class FriendsSerializer(serializers.Serializer):
    #friends = serializers.StringRelatedField(many=True)

    class Meta:
        model = User
        fields = ['friends']
        read_only_field = ['is_active']

    def __init__(self, *args, **kwargs):
        super(FriendsSerializer, self).__init__(*args, **kwargs)
        friends = serializers.serialize("json",args)
        
        #self.fields['friends'] = 
       
    #retur

    # def friends_list(self, user):
    #         try:
    #             print(data)

    #             return json.dumps(list(data))
    #         except ObjectDoesNotExist:
    #             msg = ('User does not exist')
    #             raise serializers.ValidationError(msg)
        
# class FriendsSerializer(serializers.Serializer):
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'email', 'password','firstname', 'lastname', 'phone_number', 'friends']

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