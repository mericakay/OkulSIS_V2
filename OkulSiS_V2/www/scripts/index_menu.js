var did = localStorage.getItem("dyiliid");
var rolid = localStorage.getItem("RolID");
var ip = localStorage.getItem("proxy");
alert(rolid);
$.ajax({

    url: 'http://'+ip+':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=mobilMenu_mbllogin&RolID=' + rolid + '',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
        var j;
        var dataSet = [];
        var properties = [];
        for (var j = 0; j < data.length; j++) {
            var text = data[j].MenuAdi;
            var img = data[j].ImageURL;
            var url = data[j].URL;
            var value = data[j].value;
            var selected = data[j].selected;
            $('.sidebar-menu').append('<ul><li><a>' + text + '</a></li></ul>');
        }
    }
});
