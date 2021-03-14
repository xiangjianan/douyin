// 页面高度
$('body').height($(window).height());
$('.loading').height($(window).height());
$('#content').click(function () {
    $('#content').val('');
});
$('#download').click(function () {
    $('.loading').css('display','block');
});

$('#watch').click(function () {
    $('.loading').css('display','block');
    let content = $("#content").val().trim();
    $.ajax({
        type: "POST",
        dataType: "text",
        url: 'https://dy.helloxjn.com/api/douyin',
        data: {
            "video_url_share": content,
        },
        success: function (msg) {
            msg = JSON.parse(msg)
            if (!msg.error) {
                let video_url = msg.data;
                $('#video_url').attr("href", video_url);
                $('#error').text('');
                document.getElementById("video_url").click();
            } else {
                $('#error').text('链接无效');
                setTimeout(function () {
                    $('#error').text('');
                },1000)
                $('.loading').css('display','none');
            }
        },
    });
});

console.log(`
GitHub: https://github.com/xiangjianan

Email: xiang9872@gmail.com

Page: www.helloxjn.com

`);