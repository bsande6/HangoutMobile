from django.shortcuts import render
from rest_framework.decorators import api_view
from hangout_app.auth.serializers import RegisterSerializer
from django.http import HttpResponse

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
            

def loginview(request):
    if request.method == 'POST':
        serializer = LoginSerializer

# class LoginView(ModelViewSet, TokenObtainPairView):
#     serializer_class = LoginSerializer
#     permission_classes = (AllowAny,)
#     http_method_names = ['post']

# class RegisterView()
