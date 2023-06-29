import w1thermsensor
import time
import requests
import json
def readTemp():
    sensor = w1thermsensor.W1ThermSensor()
    temp = sensor.get_temperature()
    # print(round(temp, 1))
    while True:
        print("hello")    
        url = 'http://192.168.0.24:8000/api/temperature'
        temp = sensor.get_temperature()
        data = round(temp, 0)
        try:
            payload = {"temperature": data}
            headers = {"Content-Type": "application/json"}
            postingData = requests.post(url, data=json.dumps(payload), headers=headers)
            print("working ?")
            if postingData.status_code == 201:
                print("succesfull")
            else:
                print("Failed. Status code: ", postingData.status_code)
        except  requests.exceptions.ConnectionError as e:
            print(e)

        time.sleep(120)

