from channels.generic.websocket import AsyncWebsocketConsumer
from API.serializers import TemperatureSerializer
from API.models import TemperatureNew

class TemperatureConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, code):
        pass

    async def receive(self, text_data):
        temeperature_data = float(text_data)
        temperature = TemperatureNew.objects.create(temperature=text_data)
        serielizer = TemperatureSerializer(temperature)
        await self.send(serielizer.data)