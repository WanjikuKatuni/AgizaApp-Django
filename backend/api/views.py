from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from .serializers import UserSerializer, CustomerSerializer, OrderSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Customer, Order



# Customer Views
class CustomerListCreateAPIView(generics.ListCreateAPIView):
    """
    create and list customer details
    """
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        """
        check if data from serializer is valid
        """
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            # print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomerDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    retrieve, update and delete customer details
    """
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [IsAuthenticated]




# Order Views
class OrderListCreateAPIView(generics.ListCreateAPIView):
    """
    create and list order details
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        """
        check if data from serializer is valid
        """
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            # print(serializer.errors) 
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class OrderDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    retrieve, update and delete order details
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]



# view for creating a new user
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]