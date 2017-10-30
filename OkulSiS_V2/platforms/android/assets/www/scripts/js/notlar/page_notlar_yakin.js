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
    alert("asd");
    $.ajax({
        url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=VeliOgrencileri_mbllogin&dersYiliID='+did+'',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var j;
            var dataSet = [];
            var properties = [];
            $('#sube').empty();
            for (var j = 0; j < data.length; j++) {
                var text = data[j].AdiSoyadi;
                var sinifid = data[j].SinifID;
               
                $('#sube').append("<option value=" + sinifid + ">" + text + "</option>");
            }
            $("#sube").on('change', function () {
                $.ajax({
                    url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=KySubeOgrenciDersListesi_mbllogin&ogrenciSeviyeID=' + this.value + '',
                    type: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        var j;
                        var dataSet = [];
                        var properties = [];
                        //$('#location').empty();
                        for (var j = 0; j < data.length; j++) {
                            var derssaati = data[j].HaftalikDersSaati;
                            var Adi = data[j].DersAdi;
                            var bir = data[j].Donem1_DonemNotu;
                            var iki = data[j].Donem2_DonemNotu;
                            var ys = data[j].YilSonuNotu;
                            var selected = data[j].selected;
                            $('#location').append('<tr><td>' + Adi + '</td><td>' + derssaati + '</td><td>' + bir + '</td><td>' + iki + '</td><td>' + ys + '</td></tr>');
                        }

                    }
                });
                
            });
        }
    });
};


