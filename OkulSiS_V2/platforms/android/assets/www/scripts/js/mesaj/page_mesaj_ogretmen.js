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

        url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=GelenMesajListesi_mbllogin&kisiID=' + kisiid + '&cid=' + cid + '&dbn=' + dbn + '',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var j;
            var dataSet = [];
            var properties = [];
            //$('#location').empty();
            for (var j = 0; j < data.length; j++) {
                var tarih = data[j].Tarih;
                var Adi = data[j].SenderAdiSoyadi;
                var konu = data[j].Konu;
                var mesaj = data[j].Mesaj;
                var selected = data[j].selected;
                $('#location').append('<tr><td  onclick="myFunction()">' + Adi + '</td><td>' + konu + '</td><td>' + tarih + '</td><td style="visibility:hidden;">' + mesaj + '</td></tr>');
            }

        }
    });;
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
                    var cell = row.getElementsByTagName("td")[3];
                    var devamsız = row.getElementsByTagName("td")[1];
                    var id = cell.innerHTML;
                    var gelen = devamsız.innerHTML;
                    alert(id);
                    // alert("<OgrenciID>" + id + "</OgrenciID>" + "<DevamsizlikKodID>" + gelen + "</DevamsizlikKodID>");
                };
            };

        currentRow.onclick = createClickHandler(currentRow);
    }


}


