from django.shortcuts import render
from .serializers import TemperatureSerializer
from .models import TemperatureNew
from rest_framework import viewsets
from django.contrib.auth.models import User 
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.

class TemperatureAPIView(viewsets.ModelViewSet):
    serializer_class = TemperatureSerializer
    queryset = TemperatureNew.objects.all()


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        
        token['username'] = user.username


        return token
class MyTokenPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer