"""vuedj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from rest_framework import routers
from app import views
from django.views.generic import RedirectView
from django.contrib import admin
from django.http import HttpResponse
from django.conf.urls.static import static
from django.conf import settings

router = routers.DefaultRouter()


def handler404(request):
    return HttpResponse('404 Page not found', status=404)


def handler500(request):
    return HttpResponse('500 Internal server error', status=500)


router = routers.DefaultRouter()
router.register(r'todos', views.TodoViewSet)

urlpatterns = [
    # Error handlers
    url(r'^404/$', handler404),
    url(r'^500/$', handler500),

    # Regular API routes at v1, so we can change to v2 in the future
    url('^v1/', include(router.urls)),

    url(r'^$', RedirectView.as_view(url='/v1/')),
    url(r'^admin/', admin.site.urls)
]

# Login and logout views for the browsable API
urlpatterns += [
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
]
# Serve static files in prod. Not recommended, but we really don't need them
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
