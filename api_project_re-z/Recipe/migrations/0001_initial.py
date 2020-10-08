# Generated by Django 3.0.8 on 2020-09-16 01:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ingredients',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('cant', models.IntegerField()),
                ('und', models.CharField(max_length=20)),
                ('price', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('category', models.CharField(max_length=20)),
                ('instructions', models.TextField(max_length=5000)),
                ('preparacion_Time', models.IntegerField()),
                ('porstion', models.IntegerField()),
                ('dificult', models.CharField(max_length=20)),
                ('picture', models.CharField(max_length=200)),
                ('ingredients', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Recipe.ingredients')),
            ],
        ),
    ]
