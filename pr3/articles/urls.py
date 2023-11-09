from django.urls import path

from .views import page_articles

urlpatterns = [
    path("", page_articles, name="home"),
]
