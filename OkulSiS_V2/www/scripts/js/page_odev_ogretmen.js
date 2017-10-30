function user() {
    var did = localStorage.getItem("dyiliid");
    var rolid = localStorage.getItem("RolID");
    var okulid = localStorage.getItem("OkulID");
    var kisiid = localStorage.getItem("gelenid");
    var ip = localStorage.getItem("proxy");
    var kisiadi = localStorage.getItem("KullaniciAdi");
    document.getElementById("username_mrc").innerHTML = kisiadi;
    // Menu AJAX Başlangıç 
    $.ajax({
        url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=mobilMenu_mbllogin&RolID=' + rolid + '',
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
                var iconcolor = data[j].iconcolor;

                var selected = data[j].selected;
                $('.sidebar-menu').append('<ul><li><a href="../../' + url + '"><i class="fa fa-circle-o text-' + iconcolor + '"></i> <span>' + text + '</span></a></li></ul>');
            }
        }
    })
    // Menu AJAX Bitiş 
    $.ajax({

        url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=OdevListesiOgretmen_mbllogin&ogretmenID='+kisiid+'',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var j;
            var dataSet = [];
            var properties = [];
            //$('#location').empty();
            for (var j = 0; j < data.length; j++) {
                var sinifkodu = data[j].SinifKodu;
                var tanim = data[j].Tanim;
                var teslimtarih = data[j].TeslimTarihi;
                var tanimdosya = data[j].TanimDosya;
             
                $('#location').append('<tr><td>' + sinifkodu + '</td><td>' + tanim + '</td><td>' + teslimtarih + '</td><td>' + tanimdosya + '</td></tr>');
            }

        }
    });
};


