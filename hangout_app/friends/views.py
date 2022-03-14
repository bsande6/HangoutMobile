from django.shortcuts import render
from hangout_app.friends.models import Friend_Request
from hangout_app.user.models import User
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from django.http import HttpResponse

@api_view(['POST'])
def send_friend_request(request, userID):
    owner = request.user.get_username()
    owner = User.objects.get(username=owner)
    new_friend = User.objects.get(pk = userID)
    
    friend_request, created = Friend_Request.objects.get_or_create(current_user=owner, to_user=new_friend)
    if created:
        return HttpResponse('Friend request sent', status=200)
    else:
        return HttpResponse("Request has already been sent")

@api_view(['POST'])
def accept_friend_request(request, requestID):
    friend_request = Friend_Request.objects.get(id=requestID)
    if friend_request.to_user == request.user:
        friend_request.to_user.friends.add(friend_request.from_user) 
        friend_request.from_user.friends.add(friend_request.to_user)
        friend_request.delete()  
        return HttpResponse("Friend request accepted")
    else:
        return HttpResponse("Friend request not accepted")


