from django.shortcuts import render
from hangout_app.friends.models import Friend_Request
from hangout_app.user.models import User
from hangout_app.user.serializers import UserSerializer, FriendsSerializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from django.core import serializers


@api_view(['GET'])
def get_friends_list(request):
    owner = request.user.get_username()
    try:
        user = User.objects.get(username=owner)
        queryset = user.friends.all()
        friends = serializers.serialize("json", queryset, fields=['username', 'email'])

        return HttpResponse(friends, status=200)
    
    except:
        return HttpResponse(status=400)

    
    
