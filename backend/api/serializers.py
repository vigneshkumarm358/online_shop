from rest_framework import serializers
from api.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only' : True}}

    def create(self, validated_data):
        password = validated_data.pop('password')  
        user = CustomUser(**validated_data)
        user.set_password(password) 
        user.save() 
        return user

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        models = UserAddress
        fields = '__all__'
        extra_kwargs = {'user' : {'read_only': True}}