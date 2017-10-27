function load() {
    // alert("da");
    var okulid = localStorage.getItem("OkulID");
    var kisiid = localStorage.getItem("gelenid");
    var dersyiliid = localStorage.getItem("dyiliid");
    //  alert(kisiid, dersyiliid);
    $.ajax({
        url: 'http://192.168.2.60:8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=OgrenciDevamsizlikListesi_mbllogin&dersYiliID=' + dersyiliid + '&kisiId=' + kisiid + '',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var j;
            var dataSet = [];
            var properties = [];
            //$('#location').empty();
            for (var j = 0; j < data.length; j++) {
                var text = data[j].Tarih;
                var kod = data[j].DevamsizlikAdi;
                var value = data[j].GunKarsiligi;

                $('#location').append('<tr><td>' + text + '</td><td>' + value + '</td><td>' + kod + '</td></tr>');
            }

        }
    });
}