from channels.generic.websocket import AsyncWebsocketConsumer
from API.serializers import TemperatureSerializer
from API.models import TemperatureNew
import json
import requests
from channels.db import database_sync_to_async
class TemperatureConsumer(AsyncWebsocketConsumer):
    
    async def connect(self):
        await self.accept()
        await self.send_temperature()
        # self.send(await self.get_temeperature())
        # print(await self.get_temeperature())
        


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
        await self.send(json.dumps(data))


