from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class Temperature(models.Model):
    temperature = models.FloatField()


class TemperatureNew(models.Model):
    temperature = models.FloatField()
    date_created = models.DateTimeField(auto_now_add=True)

