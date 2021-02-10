import requests
import re

headers = {
    'User-Agent': 'mozilla/5.0 (iphone; cpu iphone os 14_4 like mac os x) applewebkit/605.1.15 (khtml, like gecko) version/14.0.3 mobile/15e148 safari/604.1'
}


def get_video_url(video_url_share):
    try:
        video_url_share = re.findall('https.*/', video_url_share)[0]
        video_url_redirect = requests.get(url=video_url_share, headers=headers).url
        video_id = re.findall('video/(\d+)/', str(video_url_redirect))[0]
        video_url_api = f'https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids={video_id}'
        video_url_json = requests.get(url=video_url_api, headers=headers).json()
        video_url = video_url_json.get('item_list')[0].get('video').get('play_addr').get('url_list')[0]
        video_url = video_url.replace('playwm', 'play').replace('&ratio=720p', '')
        video_url_web = requests.get(url=video_url, headers=headers).url

        video_title = video_url_json.get('item_list')[0].get('desc')
        video_content = requests.get(url=video_url_web, headers=headers).content
        with open(f'/root/static/douyin_static/{video_title}.mp4', 'wb')as f:
            f.write(video_content)

        return video_url_web, video_title
    except:
        return None, None
