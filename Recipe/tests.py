from proyect.wsgi import *
from Recipe.models import Recipe, ingredients

# LISTAR

# query = Recipe.objects.all()
# print(query)

# INSERTAR
# t = Recipe()
# t.name = ''
# t.save()

# EDITAR

# t = Recipe.objects.get(pk=1)
# t.name = 'Pasta'
# t.save()

# ELIMINAR
# t = Recipe.objects.get(pk=1)
# t.delete()

#obj = Recipe.objects.filter(name__icontains='terry')

# obj = Recipe.objects.filter()

# for i in Recipe.objects.filter():
#     print(i.name)