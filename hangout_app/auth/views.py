from django.shortcuts import render
from rest_framework.decorators import api_view
from hangout_app.auth.serializers import RegisterSerializer, LoginSerializer
from django.http import HttpResponse
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import authenticate, login

@api_view(['POST'])
def registerview(request):
    if request.method == 'POST':
        serializer = RegisterSerializer(data=request.data,context={'request': request})
        if serializer.is_valid():
            print(serializer.data)
            serializer.create(serializer.data)
            return HttpResponse(status=200)
        print(serializer.errors)

        return HttpResponse('Invalid Data', status=400)
            
@api_view(['POST'])
def loginview(request):
    if request.method == 'POST':
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            serializer.validate(serializer.data)
            user = serializer.validated_data['user']
            if user and  user.is_active:
                login(request, user)
                print(user.is_authenticated, request.user.is_authenticated)
            print(request.user.is_authenticated)
            return HttpResponse("Successfully Authenticated", status=200)
        
        return HttpResponse(serializer.errors['non_field_errors'], status=400)
