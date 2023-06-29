from rest_framework import serializers
from .models import TemperatureNew

class TemperatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = TemperatureNew
        fields = ('temperature','date_created')