from django.db import models


# Create your models here.

class Video(models.Model):
    video_name = models.CharField(max_length=20)
    video_url_web = models.CharField(max_length=1024)
