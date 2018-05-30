from django.db import models

# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return str(self.name)

class Post(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author)
    content = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.title)
