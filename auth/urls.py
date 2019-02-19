from django.urls import path,include
from .views import RegisterApi



urlpatterns=[
    path('api/auth/register',RegisterApi.as_view())
]