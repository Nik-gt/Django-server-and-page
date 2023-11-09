from django.http import Http404
from django.shortcuts import render
from .models import Article

def page_articles(request):
    return render(request, "articles.html", context={"posts": Article.objects.all()})

def get_article(request, article_id):
    try:
        post = Article.objects.get(id=article_id)
        return render(request, "article_detail.html", {"post": post})
    except Article.DoesNotExist:
        return Http404
