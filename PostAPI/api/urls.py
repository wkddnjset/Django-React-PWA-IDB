from .views import PostListView, PostRetrieveView, PostCreateView
from django.conf.urls import url

urlpatterns = [
    url(r'^post/create/$', PostCreateView.as_view(), name='post-create'),
    url(r'^post/$', PostListView.as_view(), name='post-list'),
    url(r'^post/(?P<pk>[\w-]+)/$', PostRetrieveView.as_view(), name='post-detail'),

]