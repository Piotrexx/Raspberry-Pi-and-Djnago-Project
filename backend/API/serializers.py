from rest_framework import serializers
from .models import TemperatureNew
from django.contrib.auth.models import User

class TemperatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = TemperatureNew
        fields = ('temperature','date_created')

