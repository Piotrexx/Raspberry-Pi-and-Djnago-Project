# Generated by Django 4.1.7 on 2023-06-29 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0002_alter_temperature_temperature'),
    ]

    operations = [
        migrations.CreateModel(
            name='TemperatureNew',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('temperature', models.FloatField()),
                ('date_created', models.DateField(auto_now_add=True)),
            ],
        ),
    ]