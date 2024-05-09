from django.db import models
from django.contrib.auth.models import User

# model for customer entity
class Customer(models.Model):
    customerName = models.CharField(max_length=50)
    customerCode = models.CharField(max_length=50)
    phonenumber = models.CharField(max_length=15)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.customerName


# model for order entity
class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='orders')
    itemName = models.CharField(max_length=100)
    itemAmount = models.DecimalField(max_digits=10, decimal_places=2)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
