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
    alt_number = models.IntegerField(null=True, blank=True, default=0)
    address_detail = models.TextField()
    district = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pin_code = models.IntegerField()
    address_type = models.CharField(max_length=20)

    def __str__(self):
        return self.user


class Product(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    how_to_use = models.TextField()
    benifits = models.TextField()
    price = models.IntegerField()
    discount_price = models.IntegerField()
    top_rated = models.BooleanField(default=False)
    rating = models.FloatField()
    quantity = models.CharField(max_length=10)

    def __str__(self):
        return f'{self.title} - {self.quantity}'

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_img')
    img = models.ImageField(upload_to='images/')



class Review(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True, related_name= 'user_review')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name= 'product_review')
    description = models.TextField()



class ReviewImage(models.Model):
    review = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='review_img')
    img = models.ImageField(upload_to='images/')

