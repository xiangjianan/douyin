$('#content').click(function () {
    $('#content').val('');
});

export const downloadFile = (url, fileName) => {
    var x = new XMLHttpRequest();
    x.open("GET", url, true);
    x.responseType = 'blob';
    x.οnlοad = function (e) {
        var url = window.URL.createObjectURL(x.response)
        var a = document.createElement('a');
        a.href = url
        a.download = fileName;
        a.click()
    }
    x.send();
}
console.log("一起聊聊编程、聊聊梦想，我的微信号：inMyLife2021");