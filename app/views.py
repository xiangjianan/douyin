from django.shortcuts import render
from utils.vedio import get_video_url
from utils.my_log import logger


def home(request):
    video_url_share = None
    if request.method == "POST":
        video_url_share = request.POST.get('video_url_share')
        video_url_web, video_name = get_video_url(video_url_share)
        if not video_url_web:
            return render(request, 'home.html', locals())
        logger.info(f'{video_url_web} {video_name}')
        return render(request, 'download.html', locals())
    return render(request, 'home.html', locals())


def download(request):
    video_url_web = request.GET.get('video_url_web')
    video_name = request.GET.get('video_name')
    if not video_url_web:
        return render(request, 'home.html', locals())
    return render(request, 'download.html', locals())
