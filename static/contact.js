$('#content').click(function () {
    $('#content').val('');
});
$('h1').click(function () {
    alert('不建议解析长视频，本人的乞丐版服务器限速感人');
});
$('#get-url').click(function () {
    $(this).css('pointer-events', 'none');
    setTimeout(function () {
        $('#get-url').css('pointer-events', 'auto');
    }, 3000);
});
console.log("一起聊聊编程、聊聊梦想，我的微信号：inMyLife2021");