# Generated by Django 3.1.4 on 2021-03-10 17:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20210215_0311'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='video_url_web',
            field=models.CharField(default=1, max_length=1024),
            preserve_default=False,
        ),
    ]
