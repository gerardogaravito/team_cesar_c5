# Generated by Django 3.0.8 on 2020-09-29 03:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Recipe', '0006_auto_20200922_0115'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipe',
            old_name='porstion',
            new_name='porstions',
        ),
        migrations.RenameField(
            model_name='recipe',
            old_name='preparacion_Time',
            new_name='preparationTime',
        ),
    ]
