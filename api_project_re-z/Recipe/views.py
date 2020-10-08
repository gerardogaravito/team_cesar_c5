# Create your views here.
"""Recipe Api view"""

from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Recipe,ingredients
from .serializers import RecipeSerializer, ingredientsSerializer

#  create your views here.


# listar todos las recetas 
@api_view(['GET'])
def RecipeList(request):
    Recipes = Recipe.objects.all()
    serializer = RecipeSerializer(Recipes, many=True)
    return Response(serializer.data)

# tarer recetas por id
@api_view(['GET'])
def RecipeDetail(request, pk):
    Recipes = Recipe.objects.get(id=pk)
    serializer = RecipeSerializer(Recipes, many=False)
    return Response(serializer.data)

# crear recetas 
@api_view(['POST'])
def RecipeCreate(request):
    serializer = RecipeSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

# actualizar recetas 
@api_view(['POST'])
def RecipeUpdate(request, pk):
    Recipes = Recipe.objects.get(id=pk)
    serializer = RecipeSerializer(instance=Recipes, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

# eliminar recetas 
@api_view(['DELETE'])
def RecipeDelete(request, pk):
    Recipes = Recipe.objects.get(id=pk)
    Recipes.delete()

    return Response('Recipe succsesfully delete!')


# listar ingredientes 
@api_view(['GET'])
def ingredientsList(request):
    ingredien = ingredients.objects.all()
    serializer = ingredientsSerializer(ingredien, many=True)
    return Response(serializer.data)

# listar ingredientes por id de las recetas 
@api_view(['GET'])
def ingredientsDetail(request, pk):
    ingredien = ingredients.objects.get(id=pk)
    serializer = ingredientsSerializer(ingredien)
    
    return Response(serializer.data)


# crear incredientes
@api_view(['POST'])
def ingredientsCreate(request):
    serializer = ingredientsSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

# actualizar un ingrediente 
@api_view(['POST'])
def ingredientsUpdate(request, pk):
    ingredien = ingredients.objects.get(id=pk)
    serializer = ingredientsSerializer(instance=ingredien, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)



# eliminar un ingrediente 
@api_view(['DELETE'])
def ingredientsDelete(request, pk):
    ingredien = ingredients.objects.get(id=pk)
    ingredien.delete()

    return Response('ingredients succsesfully delete!')

