from django.urls import path
from api.views import *


urlpatterns = [
    path('register/', UserView.as_view()),
    path('address/', AddressView.as_view()),
    path('user-details/', UserDetailView.as_view()),
]
