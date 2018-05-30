from rest_framework import generics
from PostAPI.models import Author, Post
from .serializers import PostListSerializers

class PostListView(generics.ListAPIView):
    lookup_field = 'id'
    serializer_class = PostListSerializers

    def get_queryset(self):
        return Post.objects.all()

class PostRetrieveView(generics.RetrieveAPIView):
    serializer_class = PostListSerializers
    queryset = Post.objects.all()

    # def get_queryset(self):
    #     return Post.objects.all()

class PostCreateView(generics.CreateAPIView):
    serializer_class = PostListSerializers
    queryset = Post.objects.all()