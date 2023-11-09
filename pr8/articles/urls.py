from django.urls import path

from .views import create_post, get_article, page_articles, registred, login, logout

urlpatterns = [
    path("", page_articles, name="home"),
    path("article/<int:article_id>", get_article, name="article_detail"),
    path("article/new", create_post, name="create_post"),
    path("registration", registred, name="reg_page"),
    path("login", login, name="login"),
    path("logout", logout, name="logout"),
]
