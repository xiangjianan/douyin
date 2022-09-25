from django.shortcuts import render, HttpResponse


def auth(func):
    def wrapper(request, *args, **kwargs):
        key = request.GET.get('from')
        print(key)
        if key != 'github':
            return render(request, 'home-auth.html')
        res = func(request, *args, **kwargs)
        return res
    return wrapper


@auth
def home(request):
    return render(request, 'home.html')


@auth
def download(request):
    video_url_web = request.GET.get('video_url_web')
    video_name = request.GET.get('video_name')
    if not video_url_web:
        return render(request, 'home.html', locals())
    return render(request, 'download.html', locals())
