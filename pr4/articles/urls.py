from django.urls import path

from .views import get_article, page_articles

urlpatterns = [
    path("", page_articles, name="home"),
    path("article/<int:article_id>", get_article, name="article_detail"),
]
