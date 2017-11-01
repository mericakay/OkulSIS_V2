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

        url: 'http://192.168.1.26:8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=ogretmenDersProgramiDersSaatleri_mbllogin&kisiId=17A68CAA-1A13-460A-BEAA-FB483AC82F7B&sinifID=F4201B97-B073-4DD7-8891-8091C3DC82CF&tarih=2016-09-19+00%3A00%3A00&dbn=Bilsanet1&cid=3',
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
                // alert(sinifid);
                $('#selectNumber').append("<option value=" + sinifid + ">" + text + "</option>");
            }
            $("#selectNumber").on('change', function () {
           

                    $.ajax({
                        url: 'http://192.168.1.26:8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=ogretmenDersProgrami_mbllogin&kisiId=17A68CAA-1A13-460A-BEAA-FB483AC82F7B&OkulID=7E755C68-ABC1-492B-9D82-3B39B831A962&dersYiliID=9D7A115C-5E96-4F6E-B31D-E5710BDA1C97&dbn=Bilsanet1&cid=3',
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

                                $('#sube').append("<option >" + text + "</option>");
                            }
                            $("#sube").on('change', function () {
                                $.ajax({

                                    url: 'http://192.168.1.26:8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=MuhBorcluSozlesmeleri_mbllogin&dersYiliID=9D7A115C-5E96-4F6E-B31D-E5710BDA1C97&ogrenciID=5A4BEF62-184D-4884-8BE0-B939E2DFBAE6&dbn=Bilsanet1&cid=3',
                                    type: 'GET',
                                    dataType: 'json',
                                    success: function (data) {
                                        var j;
                                        var dataSet = [];
                                        var properties = [];
                                        //$('#location').empty();
                                        for (var j = 0; j < data.length; j++) {
                                            var toplamtutar = data[j].ToplamTutar;
                                            var taahutno = data[j].TaahhutnameNo;
                                            var toplamodenen = data[j].ToplamOdenen;
                                            var kalantutar = data[j].KalanTutar;
                                            var borclusozlesmeid = data[j].BorcluSozlesmeID;

                                            $('#location').append('<tr><td  onclick="myFunction()">' + taahutno + '</td><td>' + toplamtutar + '</td><td>' + toplamodenen + '</td><td>' + kalantutar + '</td><td>' + borclusozlesmeid + '</td></tr>');
                                        }

                                    }
                                });
                            });
                        }
                    });
              
            });
        }
    });
};

function myFunction() {
    //   document.getElementById("demo").innerHTML = "Hello World";
    var table = document.getElementById("location");
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler =
            function (row) {
                return function () {
                    var rows = $("#location>tr");
                    // alert(JSON.stringify(rows, null, 4));
                    console.log(JSON.stringify(rows, null, 4));
                    var cell = row.getElementsByTagName("td")[4];
                    var devamsız = row.getElementsByTagName("td")[1];
                    var id = cell.innerHTML;
                  
                    $.ajax({
                        url: 'http://192.168.1.26:8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=MuhBorcluSozlesmeleri_mbllogin&dersYiliID=9D7A115C-5E96-4F6E-B31D-E5710BDA1C97&ogrenciID=AC4AC495-149F-4F83-ACD9-F342FA86A821&dbn=Bilsanet1&cid=3',
                        type: 'GET',
                        dataType: 'json',
                        success: function (data) {
                            var j;
                            var dataSet = [];
                            var properties = [];
                            //$('#location').empty();
                            for (var j = 0; j < data.length; j++) {
                                var odemetarih = data[j].OdemeTarihi;
                                var taksittutar = data[j].TaksitTutari;
                                var odendiacıklama = data[j].Odendi_aciklama;
                                var taksitno = data[j].TaksitNo;
                              

                                alert("Taksit NO =", taksitno, "Açıklama =", odendiacıklama, "Tutar =", taksittutar, "Tarih =", odemetarih);
                            }

                        }
                    });
                    // alert("<OgrenciID>" + id + "</OgrenciID>" + "<DevamsizlikKodID>" + gelen + "</DevamsizlikKodID>");
                };
            };

        currentRow.onclick = createClickHandler(currentRow);
    }




}
