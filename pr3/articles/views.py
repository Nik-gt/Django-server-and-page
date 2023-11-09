from django.shortcuts import render
from .models import Article

def page_articles(request):
    return render(request, "articles.html", context={"posts": Article.objects.all()})
