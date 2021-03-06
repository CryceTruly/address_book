from django.urls import path, include
from knox import views as knox_views

from .views import RegisterAPI, LoginAPI, UserAPI, EmailVerifyAPI

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view(), name='register'),
    path('api/auth/login', LoginAPI.as_view(), name='login'),
    path('api/auth/profile', UserAPI.as_view(), name='profile'),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('api/auth/verify/', EmailVerifyAPI.as_view(), name='email_verify')
]
