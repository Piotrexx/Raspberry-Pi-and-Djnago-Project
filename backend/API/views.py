from django.shortcuts import render
from .serializers import TemperatureSerializer
from .models import TemperatureNew
from rest_framework import viewsets
from django.contrib.auth.models import User 
# Create your views here.

class TemperatureAPIView(viewsets.ModelViewSet):
    serializer_class = TemperatureSerializer
    queryset = TemperatureNew.objects.all()

