from django.contrib import admin

# Register your models here.
from Recipe import models

admin.site.register(models.Recipe)
"""dar acceso al administrador para crear y editar modelos de recetas"""

admin.site.register(models.ingredients)
"""dar acceso al administrador para crear y editar modelos de ingredients"""

