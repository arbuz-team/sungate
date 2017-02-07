from django.db import models
from user.models import User
from cart.models import Cart


class Payment(models.Model):

    user = models.ForeignKey(User)
    total_price = models.CharField(max_length=10)
    currency = models.CharField(max_length=3)

    def __str__(self):
        return self.user

class Product_In_Payment(models.Model):

    payment = models.ForeignKey(Payment)
    product = models.ForeignKey(Cart)

    def __str__(self):
        return self.product