﻿function load() {
    var kid = localStorage.getItem("gelenid");
    var ip = localStorage.getItem("proxy");
    var tc = localStorage.getItem("tc");
    var cid = localStorage.getItem("cid");
   // alert(tc);
    $("#selectNumber")[0].selectedIndex = -1
    $.ajax({
        url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?tc='+tc+'&url=mobilfirstdata_mbllogin&cid='+cid+'',
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
                var dbn = data[j].dbn;
               
                rolid = data[j].RolID;

                $('#selectNumber').append("<option class=" + dbn + "  value=" + rolid + ">" + text + "</option>");

            }
            $("#selectNumber").on('change', function () {
                localStorage.setItem("RolID", $(this).find('option:selected').attr('value'));
                localStorage.setItem("dbn", $(this).find('option:selected').attr('class'));
                localStorage.setItem("OkulID", okulid);
                localStorage.setItem("dyiliid", dersyiliid);
                //var dbn = localStorage.getItem("dbn")
               // alert(dbn);
                window.location.href = "index2.html";
                // alert(dersyiliid);
            });
        }

    });
}