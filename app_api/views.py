from rest_framework.views import APIView
from rest_framework.response import Response
from utils.base_response import BaseResponse
from utils.vedio import get_video_url


class TestMail(APIView):

    def post(self, request):
        res = BaseResponse()
        # 用序列化器做校验
        video_url_web, video_name = get_video_url(request.data.get('video_url_share'))
        if not video_url_web:
            res.code = 1020
            res.error = "链接无效"
        else:
            res.data = video_url_web
        return Response(res.dict)
