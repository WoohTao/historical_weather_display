from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('<str:place_name>', views.place_detail)
]
