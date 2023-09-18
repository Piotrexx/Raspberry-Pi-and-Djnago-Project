from channels.generic.websocket import AsyncWebsocketConsumer
from API.serializers import TemperatureSerializer
from API.models import TemperatureNew
import json
import requests
from channels.db import database_sync_to_async
from django.dispatch import receiver
from django.db.models.signals import post_save
import datetime
import asyncio

class TemperatureConsumer(AsyncWebsocketConsumer):
    
    async def connect(self):
        await self.accept()
        while True:
            await self.send_temperature()
            await asyncio.sleep(60)  

        
        


    async def disconnect(self, code):
        pass

    async def receive(self, text_data):
        pass
    

    

    @database_sync_to_async
    def get_temeperature(self):
        data = TemperatureNew.objects.all()
        serializer = TemperatureSerializer(data, many=True)
        # print(json.dumps(serializer.data))
        return json.dumps(serializer.data)
    



    async def send_temperature(self):
        data = await self.get_temeperature()
        # print(json.dumps(data))
        await self.send(data)


