from django.shortcuts import render
from hangout_app.friends.models import Friend_Request
from django.contrib.auth import get_user_model
from hangout_app.user.serializers import UserSerializer, FriendsSerializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from django.core import serializers
from django.contrib.auth.decorators import login_required
import json

@api_view(['GET'])
# @login_required
def get_friends_list(request):
    User = get_user_model()
    fav_color = request.session["fav_color"]
    user = request.session["user"]
    print("fav", fav_color)
    print("r", user)
    print("z", request.user)
    # owner = request.user.get_username()
    owner = user
    print("owner", owner)
    try:
        user = User.objects.get(username=owner)
        queryset = user.friends.all()
        friends = serializers.serialize("json", queryset, fields=['username', 'email', 'firstname', 'lastname'])
        return HttpResponse(friends, status=200)
    except:
        return HttpResponse(status=400)

@api_view(['GET'])
def get_friend_status(request, uname):
    uname = User.objects.get(username=uname)
    try:
        status = uname.status
        return HttpResponse(status, status=200)
    
    except:
        return HttpResponse(status=400)

@api_view(['GET'])
def get_all_users(request):
    try:
        User = get_user_model()
        queryset = User.objects.all()
        users = serializers.serialize("json", queryset, fields=['username', 'email', 'firstname', 'lastname', 'phone_number'])
        user_list = []
        users = json.loads(users)
        
        for user in users:
            
            user_list.append(user['fields'])
        user_list = json.dumps(user_list)
        return HttpResponse(user_list, status=200)
    
    except:
        return HttpResponse(status=400)

    
    
