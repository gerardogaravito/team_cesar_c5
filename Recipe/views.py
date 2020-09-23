# Create your views here.
"""Recipe Api view"""

from .models import Recipe,ingredients
from .serializers import RecipeSerializer, ingredientsSerializer
from rest_framework import viewsets


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class ingredientsViewSet(viewsets.ModelViewSet):
    queryset = ingredients.objects.all()
    serializer_class = ingredientsSerializer



#     serializers_class = serializers.RecipeSerializer


#     ]

#         return Response({'messege': '200', 'recipe': recipe})

    # def post(self, request):
    #     """crea un mensaje con nuestro nombre """
    #     serializer = self.serializer_class(data=request.data)

    #     if serializer.is_valid():
    #         name = serializer.validated_data.get('name')
    #         massage = f'Hello {name}'
    #         return Response({'message' : massage})
    #     else:
    #         return Response(
    #             serializer.errors,
    #             status=status.HTTP_400_BAD_REQUEST
    #         )
    # def put(self, request, pk=None):
    #     """actualiza un objeto """
    #     return Response({'method': 'PUT'})

    # def patch(self, request, pk=None):
    #     """actualiza parsialmente un objeto """
    #     return Response({'method': 'PATCH'})

    # def delete(self, request, pk=None):
    #     """Borra un odjeto """
    #     return Response({'method': 'DELETE'})