# Generated by Django 4.1.7 on 2023-06-28 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='temperature',
            name='temperature',
            field=models.FloatField(),
        ),
    ]
