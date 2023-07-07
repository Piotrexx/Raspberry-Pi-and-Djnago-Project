# library for temperature sensor
import w1thermsensor
import time
import requests
import json
def readTemp():
    # setting up the sensor
    sensor = w1thermsensor.W1ThermSensor()
    while True:
        # to send data to an API I had to replace the 0.0.0.0 with my computer's IP
        url = 'http://192.168.0.24:8000/api/temperature'
        # reading the temperature
        temp = sensor.get_temperature()
        data = round(temp, 1)
        try:
            payload = {"temperature": data}
            headers = {"Content-Type": "application/json"}
            postingData = requests.post(url, data=json.dumps(payload), headers=headers)
            if postingData.status_code == 201:
                print("succesfull")
            else:
                print("Failed. Status code: ", postingData.status_code)
        except  requests.exceptions.ConnectionError as e:
            print(e)

        time.sleep(3600)

