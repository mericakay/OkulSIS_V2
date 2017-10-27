var did = localStorage.getItem("dyiliid");
var rolid = localStorage.getItem("RolID");
var ip = localStorage.getItem("proxy");
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
       
            $('.sidebar-menu').append('<ul> <a  style = "background: url(' + img + ') no-repeat left center;  padding-left:35px;" href="' + url + '">' + text + '</a></ul>');
        }
    }
});
