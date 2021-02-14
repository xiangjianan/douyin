import requests
import re
import os
from douyin import settings
from .models import Video

headers = {
    'User-Agent': 'mozilla/5.0 (iphone; cpu iphone os 14_4 like mac os x) applewebkit/605.1.15 (khtml, like gecko) version/14.0.3 mobile/15e148 safari/604.1'
}


def get_video_url(video_url_share):
    """
    :param video_url_share: 分享链接
    :return: 视频源链接, 视频描述
    """
    try:
        video_url_share = re.findall('https.*/', video_url_share)[0]
        video_url_redirect = get_response(video_url_share).url
        video_id = re.findall(r'video/(\d+)/', str(video_url_redirect))[0]
        video_url_api = f'https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids={video_id}'
        video_url_json = get_response(video_url_api).json()
        video_url = video_url_json.get('item_list')[0].get('video').get('play_addr').get('url_list')[0]
        video_url = video_url.replace('playwm', 'play').replace('&ratio=720p', '')
        video_url_web = get_response(video_url).url

        video_obj = Video.objects.filter(video_id=video_id).first()
        if video_obj:
            video_name = video_obj.video_name
        else:
            video_name = f'douyin{video_id}.mp4'
            Video.objects.create(video_name=video_name, video_id=video_id)
            video_content = get_response(video_url_web).content
            with open(os.path.join(settings.LOCALE_DIR, video_name), 'wb') as f:
                f.write(video_content)

        return video_url_web, video_name

    except Exception as e:
        print(e)
        return None, None


def get_response(url):
    try:
        response = requests.get(url=url, headers=headers, timeout=5)
        if response.status_code == 200:
            return response
    except Exception as e:
        print(e)
        for i in range(1, 10):
            print(f'请求{url}超时，第{i}次重复请求')
            response = requests.get(url, headers=headers, timeout=5)
            if response.status_code == 200:
                return response
