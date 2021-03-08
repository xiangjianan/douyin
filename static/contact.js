// 页面高度
$('body').height($(window).height());
$('#content').click(function () {
    $('#content').val('');
});
$('#download').click(function () {
    $('#watch').css('pointer-events', 'none');
    $('#download').css('pointer-events', 'none');
    $('#error').text('');
    setTimeout(function () {
        $('#watch').css('pointer-events', 'auto');
        $('#download').css('pointer-events', 'auto');
    }, 3000);
});

$('#watch').click(function () {
    $('#watch').css('pointer-events', 'none');
    $('#download').css('pointer-events', 'none');
    setTimeout(function () {
        $('#watch').css('pointer-events', 'auto');
        $('#download').css('pointer-events', 'auto');
    }, 3000);
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
            }
            $('#watch').css('pointer-events', 'auto');
            $('#download').css('pointer-events', 'auto');
        },
    });
});

console.log(`
Email :\tXJN9872@163.com

WeChat:\tinMyLife2021

Page  :\twww.helloxjn.com

`);