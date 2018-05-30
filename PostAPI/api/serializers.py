from rest_framework import serializers
from PostAPI.models import Post

class PostListSerializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'author',
            'content',
            'create_at',
        ]