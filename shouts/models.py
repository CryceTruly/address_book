from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Contact(models.Model):
    fullname = models.CharField(max_length=500)
    phone = models.TextField(unique=True)
    user = models.ForeignKey(
        User, related_name='contacts', on_delete=models.CASCADE, null=True)
    added = models.DateTimeField(auto_now=True)
