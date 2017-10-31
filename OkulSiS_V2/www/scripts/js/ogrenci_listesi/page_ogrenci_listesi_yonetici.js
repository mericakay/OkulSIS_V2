function user() {
    var did = localStorage.getItem("dyiliid");
    var rolid = localStorage.getItem("RolID");
    var okulid = localStorage.getItem("OkulID");
    var kisiid = localStorage.getItem("gelenid");
    var ip = localStorage.getItem("proxy");
    var kisiadi = localStorage.getItem("KullaniciAdi");
    document.getElementById("username_mrc").innerHTML = kisiadi;
    var cid = localStorage.getItem("cid");
    var dbn = localStorage.getItem("dbn");

    $.ajax({
        url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=mobilMenu_mbllogin&RolID=' + rolid + '&cid='+cid+'&dbn='+dbn+'',
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

    $.ajax({
        url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=ogretmenDersProgramiDersSaatleri_mbllogin&kisiId='+kisiid+'&sinifID=' + this.value + '&tarih=' + x + '&cid='+cid+'&dbn='+dbn+'',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var j;
            var dataSet = [];
            var properties = [];
            $('#sube').empty();
            for (var j = 0; j < data.length; j++) {
                var text = data[j].Aciklama;
                var derssirasi = data[j].DersSirasi;
                var dersid = data[j].DersID;
                var sinifid = data[j].SinifID;

                $('#sube').append("<option >" + text + "</option>");
            }
            $("#sube").on('change', function () {
                $.ajax({

                    url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=Kysubeogrencilistesi_mbllogin&sinifID='+sinifid+'&cid='+cid+'&dbn='+dbn+'',
                    type: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        var j;
                        var dataSet = [];
                        var properties = [];
                        //$('#location').empty();
                        for (var j = 0; j < data.length; j++) {
                            var adi = data[j].Adi;
                            var soyadi = data[j].Soyadi;
                            var tc = data[j].TCKimlikNo;
                            var aciklama = data[j].Aciklama;
                            var numarasi = data[j].Numarasi;

                            $('#location').append('<tr><td>' + adi + '</td><td>' + soyadi + '</td><td>' + tc + '</td><td>' + aciklama + '</td><td>' + numarasi + '</td></tr>');
            
                        }

                    }
                });
            });
        }
    });


