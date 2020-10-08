"""Recipe"""
# Django
from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=80)
    category = models.CharField(max_length=20)
    instructions= models.TextField(max_length=5000)
    preparationTime= models.IntegerField()
    porstions = models.IntegerField()
    dificult = models.CharField(max_length=20)
    img_url = models.URLField(max_length=200)


    def __str__(self):
        """Return username."""
        return self.name

        class Meta:
            verbose_name = 'Recipe'
            verbose_name_plural = 'Recipies'
            ordering = ['id']


class ingredients(models.Model):
    name = models.CharField(max_length=30)
    cant = models.IntegerField()
    und = models.CharField(max_length=20)
    price = models.IntegerField()
    Recipe= models.ForeignKey("Recipe", on_delete=models.CASCADE)

    def __str__(self):
        return self.name

        class Meta:
            verbose_name = 'ingredien'
            verbose_name_plural = 'ingredients'
            ordering = ['id']