"""api Recipe, ingrediens URLs."""

# django
from django.urls import path

# views

from Recipe import views

urlpatterns = [
    # url de las recetas 
    path(
        route='api/Recipe-list/',
        view= views.RecipeList,
        name= 'Recipe_list'
    ),
    path(
        route='api/Recipe-detail/<str:pk>/',
        view= views.RecipeDetail, 
        name= 'Recipe-detail'
    ),
    path(
        route='api/Recipe-create/',
        view=views.RecipeCreate,
        name= 'Recipe-create'
    ),
    path(
        route='api/Recipe-update/<str:pk>/',
        view=views.RecipeUpdate, 
        name= 'Recipe-update'
    ),
    path(
        route='api/Recipe-delete/<str:pk>/',
        view=views.RecipeDelete, 
        name= 'Recipe-delete'
    ),
    # url de api de ingredientes 
    path(
        route='api/ingredients-list/',
        view=views.ingredientsList, 
        name= 'ingredients-list'
    ),
    path(
        route='api/ingredients-detail/<str:pk>/',
        view=views.ingredientsDetail, 
        name= 'ingredients-detail'
    ),
    path(
        route='api/ingredients-create/',
        view=views.ingredientsCreate, 
        name= 'ingredients-create'
    ),
    path(
        route='api/ingredients-update/<str:pk>/',
        view=views.ingredientsUpdate, 
        name= 'ingredients-update'
    ),
    path(
        route='api/ingredients-delete/<str:pk>/', 
        view=views.ingredientsDelete, 
        name= 'ingredients-delete'
    ),
]
