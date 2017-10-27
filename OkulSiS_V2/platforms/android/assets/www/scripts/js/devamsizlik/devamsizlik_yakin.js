function load() {
    var kisiid = localStorage.getItem("gelenid");
    var dersyiliid = localStorage.getItem("dyiliid");
    $.ajax({
        url: 'http://192.168.2.60:8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=VeliOgrencileri_mbllogin&dersYiliID=' + dersyiliid + '&kisiId=' + kisiid + '',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var j;
            var dataSet = [];
            var properties = [];
            $('#selectNumber').empty();
            for (var j = 0; j < data.length; j++) {
                var text = data[j].AdiSoyadi;
                var value = data[j].OgrenciID;
                $('#selectNumber').append("<option value=" + value + ">" + text + "</option>");
            }
            $("#selectNumber").on('change', function () {
                var ogrenciidselected = this.value;
                $.ajax({
                    url: 'http://192.168.2.60:8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=OgrenciDevamsizlikListesi_mbllogin&dersYiliID=' + dersyiliid + '&kisiId=' + this.value + '',
                    type: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        var j;
                        var dataSet = [];
                        var properties = [];
                        for (var j = 0; j < data.length; j++) {
                            var text = data[j].Tarih;
                            var kod = data[j].DevamsizlikAdi;
                            var value = data[j].GunKarsiligi;
                            $('#location').append('<tr><td>' + text + '</td><td>' + value + '</td><td>' + kod + '</td></tr>');
                        }

                    }
                });
            });
        }

    });
}