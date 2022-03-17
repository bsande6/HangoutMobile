"""hangout_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from hangout_app.auth import views as auth_views
from hangout_app.friends import views as friend_views
from hangout_app.user import views as user_views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    #url(r'^register/$', views.register, name='register'),
    re_path(r'^api/auth/register/$', auth_views.registerview),
    re_path(r'^api/auth/login/$', auth_views.loginview),
    path('send_friend_request/<int:userID>/', friend_views.send_friend_request),
    path('accept_friend_request/<int:requestID>/', friend_views.accept_friend_request),
    path('get_friends_list/', user_views.get_friends_list),
]

