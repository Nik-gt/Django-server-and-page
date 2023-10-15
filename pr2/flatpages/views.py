from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, Template

def home(request):  
    return render(request, 'templates/index.html')   
    
    #return HttpResponse(u'Hello, i am Nikita from BVT2004')