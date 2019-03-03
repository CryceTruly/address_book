from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from .seriializers import ContactSerializer
from .models import Contact
from rest_framework import permissions
from django.contrib.auth.models import User
# Create your views here.


class ContactViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerializer

    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ContactSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    # def list(self, request):
    #     querySet = Contact.objects.all()
    #     serializer = ContactSerializer(querySet, many=True)
    #     return Response(serializer.data)

    # def retrieve(self, request, pk=None):
    #     queryset = Contact.objects.all()
    #     Contact = get_object_or_404(queryset, pk=pk)
    #     serializer = ContactSerializer(Contact)
    #     return Response(serializer.data)
