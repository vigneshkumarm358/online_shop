from django.shortcuts import render
from api.models import *
from api.serializers import *
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny


class UserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    

class UserDetailView(generics.ListAPIView):
    serializer_class = UserDetailSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return CustomUser.objects.filter(username=self.request.user)


class AddressView(generics.ListCreateAPIView):
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return UserAddress.objects.filter(user= self.request.user)
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(user= self.request.user)
        else:
            print(serializer.error)


