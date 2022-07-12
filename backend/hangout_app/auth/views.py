from django.shortcuts import render
from rest_framework.decorators import api_view
from hangout_app.auth.serializers import RegisterSerializer, LoginSerializer
from django.http import HttpResponse
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import login, get_user_model, logout
#from hangout_app.user.models import User

@api_view(['POST'])
def registerview(request):
    if request.method == 'POST':
        print(request.data)
        serializer = RegisterSerializer(data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.create(serializer.data)
            return HttpResponse(status=200)
        print(serializer.errors)
        msg = list(serializer.errors.values())[0][0]
        return HttpResponse(msg, status=400)
            
@api_view(['POST'])
def loginview(request):
    print(request.user)
    if request.method == 'POST':
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            serializer.validate(serializer.data)
            user = serializer.validated_data['user']
            if user and  user.is_active:
                login(request, user)
                print(user.is_authenticated, request.user.is_authenticated)
            print(request.user)
            request.user.save()
            request.session["fav_color"] = "blue"
            request.session["user"] = request.user.username
            fav_color = request.session["fav_color"]
            print("fav", fav_color)
            return HttpResponse(status=200)
        
        return HttpResponse(serializer.errors['non_field_errors'], status=400)

@api_view(['PUT'])
def logout_view(request):
    logout(request)

def test_delete(request):
    if request.session.test_cookie_worked():
        request.session.delete_test_cookie()
        response = HttpResponse("Cookie test passed")
    else:
        response = HttpResponse("Cookie test failed")
    return response
