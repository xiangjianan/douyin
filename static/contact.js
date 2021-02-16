$('#content').click(function () {
    $('#content').val('');
});
$('#title').click(function () {
    alert(`提示：
1、下载（请使用浏览器）
2、长视频（请耐心等待）`);
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
        url: 'http://8.130.48.251:8088/api/douyin',
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
            }
            $('#watch').css('pointer-events', 'auto');
            $('#download').css('pointer-events', 'auto');
        },
    });
});

console.log("一起聊聊编程、聊聊梦想，我的微信号：inMyLife2021");