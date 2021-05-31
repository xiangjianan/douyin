// 页面高度
$('.loading').height($(window).height()-$('.home-logo').height());
$('#content').click(function () {
    $('#content').val('');
});
$('#download').click(function () {
    $('.loading').css('display','block');
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
                $('.loading').css('display','none');
                let video_url = msg.data['video_url_web'];
                let video_name = msg.data['video_name'];
                $('#error').text('');
                window.open(`https://dy.helloxjn.com/download?video_url_web=${video_url}&video_name=${video_name}`,"_self");
            } else {
                $('.loading').css('display','none');
                $('#error').text('链接无效');
                setTimeout(function () {
                    $('#error').text('');
                },1000)
            }
        },
    });
});

$('#watch').click(function () {
    $('.loading').css('display','block');
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
                $('.loading').css('display','none');
                let video_url = msg.data['video_url_web'];
                $('#video_url').attr("href", video_url);
                $('#error').text('');
                document.getElementById("video_url").click();
            } else {
                $('.loading').css('display','none');
                $('#error').text('链接无效');
                setTimeout(function () {
                    $('#error').text('');
                },1000)
            }
        },
    });
});

console.log(`
GitHub: https://github.com/xiangjianan

Email: xiang9872@gmail.com

Page: www.helloxjn.com

`);