from rest_framework import serializers
from Recipe.models import Recipe, ingredients


class RecipeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipe
        # fields = ('id',
        # 'name',
        # 'category',
        # 'intructions',
        # 'preparacion_Time',
        # 'porstion',
        # 'dificult',
        # 'img_url',
        # )
        fields = '__all__'


class ingredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ingredients
        # fields = ('id',
        # 'name',
        # 'cant',
        # 'und',
        # 'price',
        # 'Recipe_id',
        # )
        fields = '__all__'
