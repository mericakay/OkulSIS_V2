function load() {
    var kid = localStorage.getItem("gelenid");
    var ip = localStorage.getItem("proxy");
    var tc = localStorage.getItem("tc");
    var cid = localStorage.getItem("cid");
   // alert(tc);
    $("#selectNumber")[0].selectedIndex = -1
    $.ajax({
        url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?tc=' + tc + '&url=mobilfirstdata_mbllogin&cid=' + cid + '',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var j;
            var dataSet = [];
            var properties = [];
            var rolid;
            $('#selectNumber').empty();
            for (var j = 0; j < data.length; j++) {
                var text = data[j].OkulAdi;
                var okulid = data[j].OkulID;
                var dersyiliid = data[j].DersYiliID;
                rolid = data[j].RolID;
                var dbn = data[j].dbn;
               

                $('#selectNumber').append("<option id=" + dbn + "  value=" + RolID + ">" + text + "</option>");

            }
            $("#selectNumber").on('change', function () {
              
                localStorage.setItem("dbn", $(this).find('option:selected').attr('id'));
                localStorage.setItem("RolID", $(this).find('option:selected').attr('value'));
                localStorage.setItem("OkulID", okulid);
                localStorage.setItem("dyiliid", dersyiliid);
                var dbn = localStorage.getItem("dbn");
                var rolid = localStorage.getItem("RolID");
              //  alert( rolid);
               window.location.href = "index2.html";
            });
        }

    });
}