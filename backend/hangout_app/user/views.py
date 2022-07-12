from django.shortcuts import render
from hangout_app.friends.models import Friend_Request
from django.contrib.auth import get_user_model
from hangout_app.user.serializers import UserSerializer, FriendsSerializer, ProfileSerializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from django.core import serializers
from django.contrib.auth.decorators import login_required
import json
from . models import Profile

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
        queryset = Profile.objects.all()
        serializer = ProfileSerializer(queryset, many=True) 
        print(serializer.data)
        User = get_user_model()
        queryset = User.objects.all()
        users = serializers.serialize("json", queryset, fields=['username', 'email', 'firstname', 'lastname', 'phone_number'])
        user_list = []
        users = json.loads(users)
        data = json.dumps(serializer.data)
     
        # for user in users:
    
        #     user_list.append(user['fields'])
        # user_list = json.dumps(user_list)
        return HttpResponse(data, status=200)
    
    except:
        return HttpResponse(status=400)

@api_view(['GET'])
def get_profile_picture(request):
    try:
        owner = request.session["user"]
        user = User.objects.get(username=owner)
        profile = Profile.objects.get(user)
        print(profile.avatar)
        return HttpResponse(profile.avatar, status=200)
    except:
        return HttpResponse(status=400)

@api_view(['GET'])
def get_user_status(request):
    try:
        owner = request.session["user"]
        user = User.objects.get(username=owner)
        profile = Profile.objects.get(user)
        print(profile.status)
        return HttpResponse(profile.status, status=200)
    except:
        return HttpResponse(status=400)

@api_view(['PUT'])
def update_status(request, status):
    try:
        owner = request.session["user"]
        user = User.objects.get(username=owner)
        profile = Profile.objects.get(user)
        profile.status = status
        return HttpResponse(profile.status, status=200)
    except:
        return HttpResponse(status=400)






    
    
