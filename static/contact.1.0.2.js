// 页面高度
$('.loading').height($(window).height() - $('.home-logo').height());
$('#content').click(function () {
    $('#content').val('');
});
new Vue({
    el: '#download',
    methods: {
        download() {
            let $ele = this;
            $('.loading').css('display', 'block');
            let content = $("#content").val().trim();
            $.ajax({
                type: "POST",
                dataType: "text",
                // url: '/api/douyin',
                url: 'https://dy.helloxjn.com/api/douyin',
                data: {
                    "video_url_share": content,
                },
                success: function (msg) {
                    msg = JSON.parse(msg)
                    if (!msg.error) {
                        $('.loading').css('display', 'none');
                        let video_url = msg.data['video_url_web'];
                        let video_name = msg.data['video_name'];
                        $('#error').text('');
                        window.open(`https://dy.helloxjn.com/download?video_url_web=${video_url}&video_name=${video_name}`, "_self");
                    } else {
                        $('.loading').css('display', 'none');
                        $('.el-message__closeBtn').click();
                        $ele.$message({
                            message: '无效链接',
                            type: 'info',
                            center: true,
                            offset: 4,
                            showClose: true,
                            duration: 2000,
                        });
                        setTimeout(function () {
                            $('#error').text('');
                        }, 1000)
                    }
                },
            });
        },
    }
})
new Vue({
    el: '#watch',
    methods: {
        watch() {
            let $ele = this;
            $('.loading').css('display', 'block');
            let content = $("#content").val().trim();
            $.ajax({
                type: "POST",
                dataType: "text",
                // url: 'api/douyin',
                url: 'https://dy.helloxjn.com/api/douyin',
                data: {
                    "video_url_share": content,
                },
                success: function (msg) {
                    msg = JSON.parse(msg)
                    if (!msg.error) {
                        $('.loading').css('display', 'none');
                        let video_url = msg.data['video_url_web'];
                        $('#video_url').attr("href", video_url);
                        $('#error').text('');
                        document.getElementById("video_url").click();
                    } else {
                        $('.loading').css('display', 'none');
                        $('.el-message__closeBtn').click();
                        $ele.$message({
                            message: '无效链接',
                            type: 'info',
                            center: true,
                            offset: 4,
                            showClose: true,
                            duration: 2000,
                        });
                        setTimeout(function () {
                            $('#error').text('');
                        }, 1000)
                    }
                },
            });
        },
    }
})

console.log(`
GitHub: https://github.com/xiangjianan

Email: xiang9872@gmail.com

Page: www.helloxjn.com

`);

