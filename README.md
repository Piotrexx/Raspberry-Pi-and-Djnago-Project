# Raspberry-Pi-and-Djnago-Project
So, Raspberry Pi will get temeprature data from it's sensor and it will be sent to backend.


## Installing packages/dependencies


### Install all packages for react (frontend)

```shell
npm i
```


### Install packages for Python (backend)

**This package allows you to whitelist urls that you want to access your API, [full documantation](https://github.com/adamchainz/django-cors-headers)**

```shell
pip install django-cors-headers
```

```shell
pip install Django
```

```shell
pip install djangorestframework
```

**Simple JWT is a JSON Web Token authentication plugin for the Django REST Framework, [full documantation](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/index.html)**

```shell
pip install djangorestframework-simplejwt
```


### Installing packages for you Raspberry Pi

**Package for the temperature sensor**

```shell
pip install w1thermsensor
```


## Additional commands/information

If you want to run this project on your local machine, You should start you Django server like this:

```shell
python manage.py runserver 0.0.0.0:8000
```

Username for admin is piotrexx and you can change password like this:

```shell
python manage.py changepassword piotrexx
```
Remember to use all python commands in [backend](https://github.com/Piotrexx/Raspberry-Pi-and-Djnago-Project/tree/master/backend) folder.

And all npm commands in [frontend](https://github.com/Piotrexx/Raspberry-Pi-and-Djnago-Project/tree/master/frontend) folder.