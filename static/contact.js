$('#content').click(function () {
    $('#content').val('');
});
$('#title').click(function () {
    alert(`温馨提示：
1、下载（请使用浏览器）
2、长视频（请耐心等待）
`);
});
$('#get-url').click(function () {
    $(this).css('pointer-events', 'none');
    setTimeout(function () {
        $('#get-url').css('pointer-events', 'auto');
    }, 3000);
});
console.log("一起聊聊编程、聊聊梦想，我的微信号：inMyLife2021");