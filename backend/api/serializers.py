# serializers which will take object info and translate to json and vice versa
from django.contrib.auth.models import User 
from rest_framework import serializers
from .models import Customer, Order



# serializer for the user model
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        # specify the model and its fields and add extra keword arguments
        model = User
        fields = ["id","username", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}
    
    # method to create new user
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user



# serializer for customer model
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ["id", "name", "code", "author", "created_at"]
        extra_kwargs = {"author": {"read_only": True}}



# serializer for the order model
class OrderSerializer(serializer.ModelSerializer):
    class Meta:
        model = Order
        fields = ["id", "customer", "item", "amount", "author", "created_at"]
        extra_kwargs = {"author": {"read_only": True}}