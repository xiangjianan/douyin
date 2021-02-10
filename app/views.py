from django.shortcuts import render, redirect
from .vedio import get_video_url


def home(request):
    video_url_share = None
    if request.method == "POST":
        video_url_share = request.POST.get('video_url_share')
        video_url_web, video_title = get_video_url(video_url_share)
        if not video_url_web:
            return render(request, 'home.html', locals())
        return render(request, 'download.html', locals())
        # return redirect(video_url_web)
    return render(request, 'home.html', locals())
