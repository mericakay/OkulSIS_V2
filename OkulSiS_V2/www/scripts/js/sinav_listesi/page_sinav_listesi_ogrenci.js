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
        url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=mobilMenu_mbllogin&RolID=' + rolid + '&cid=' + cid + '&dbn=' + dbn + '',
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

        url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=Yakinisinavlistesi_mbllogin&ogretmenID=5F7F8763-F9BD-40E8-8F0E-532E136EB483&egitimYilID=2016&okulID=7E755C68-ABC1-492B-9D82-3B39B831A962&kisiID=5F7F8763-F9BD-40E8-8F0E-532E136EB483&dbn=Bilsanet1&cid=3',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var j;
            var dataSet = [];
            var properties = [];
            //$('#location').empty();
            for (var j = 0; j < data.length; j++) {
                var adi = data[j].SinavTurAdi;
                var sinavkodu = data[j].SinavKodu;
                var tarih = data[j].SinavTarihi;
                var aciklama = data[j].SinavAciklamasi;
                var bitistarih = data[j].SinavBitisTarihi;
                var aa = "'aa'";

                $('#location').append('<tr><td  onclick="myFunction()">' + adi + '</td><td>' + sinavkodu + '</td><td>' + tarih + '</td><td>' + aciklama + '</td><td>' + bitistarih + '</td></tr>');

            }

        }
    });


}

