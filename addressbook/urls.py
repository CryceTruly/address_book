
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(('auth.urls', 'auth'), namespace='auth')),
    path('', include(('contacts.urls', 'contact'), namespace='contact')),

]
