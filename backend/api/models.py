from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username


class UserAddress(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='user_name')
    name = models.CharField(max_length=50)
    mobile_number = models.IntegerField()
    alt_number = models.IntegerField()
    address_detail = models.TextField()
    district = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pin_code = models.IntegerField()
    address_type = models.CharField(max_length=20)

    def __str__(self):
        return self.user