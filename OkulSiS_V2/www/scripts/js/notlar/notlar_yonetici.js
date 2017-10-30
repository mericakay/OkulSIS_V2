function load() {

    var okulid = localStorage.getItem("OkulID");
    var kisiid = localStorage.getItem("gelenid");
    var dersyiliid = localStorage.getItem("dyiliid");
    alert(dersyiliid);
    $.ajax({
     
        url: ' http://192.168.2.60:8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=Kurumyoneticisisubelistesi_mbllogin&dersYiliID=' + dersyiliid + '',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var j;
            var dataSet = [];
            var properties = [];
            $('#selectNumber').empty();
            for (var j = 0; j < data.length; j++) {
                var text = data[j].Aciklama;
                var sinifid = data[j].SinifID;
                $('#selectNumber').append("<option value=" + sinifid + ">" + text + "</option>");
            }
            $("#selectNumber").on('change', function () {
                alert($(this).val());
                var x = document.getElementById("donem").value;
                alert(x);
                if (x === "Dönem Seçiniz") {
                    alert("Lütfen Dönem Seçiniz !!")

                }     
                else {
                    $.ajax({
                        url: ' http://192.168.2.60:8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=Kysubeogrencilistesi_mbllogin&sinifID='+sinifid+'',
                        type: 'GET',
                        dataType: 'json',
                        success: function (data) {
                            var j;
                            var dataSet = [];
                            var properties = [];
                            $('#sube').empty();
                            for (var j = 0; j < data.length; j++) {
                                var text = data[j].Aciklama;
                                var seviyeid = data[j].SeviyeID;
                                var dersid = data[j].DersID;

                                $('#sube').append("<option >" + text + "</option>");
                            }
                            $("#sube").on('change', function () {
                                $.ajax({

                                    url: 'http://192.168.2.60:8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=KySubeOgrenciDersListesi_mbllogin&ogrenciSeviyeID=' + seviyeid + '',
                                    type: 'GET',
                                    dataType: 'json',
                                    success: function (data) {
                                        var j;
                                        var dataSet = [];
                                        var properties = [];
                                        //$('#location').empty();
                                        for (var j = 0; j < data.length; j++) {
                                            var yilsonunotu = data[j].YilSonuNotu;
                                            var haftalikderssaati = data[j].HaftalikDersSaati;
                                            var dersadi = data[j].DersAdi;
                                            var donembirnotu = data[j].Donem1_DonemNotu;
                                            var donemikinotu = data[j].Donem2_DonemNotu;
                                            var yilsonupuani = data[j].YilSonuPuani;
                                            var selected = data[j].selected;
                                            $('#location').append('<tr><td>' + dersadi + '</td><td>' + haftalikderssaati + '</td><td>' + donembirnotu + '</td><td>' + donemikinotu + '</td><td>' + donemikinotu + '</td><td>' + yilsonupuani + '</td></tr>');
                                        }

                                    }
                                });
                            });
                        }
                    });
                }
            });
        }
    });


}