# serializers which will take object info and translate to json and vice versa
from django.contrib.auth.models import User 
from rest_framework import serializers



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