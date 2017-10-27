﻿function load() {
    var kid = localStorage.getItem("gelenid");
    $("#selectNumber")[0].selectedIndex = -1
    $.ajax({
        url: 'http://192.168.2.60:8080/Slim_Proxy_okulsis/SlimProxyBoot.php?kisiId=' + kid + '&url=mobilfirstdata_mbllogin',
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
                alert(dersyiliid);
                rolid = data[j].RolID;

                $('#selectNumber').append("<option  value=" + rolid + ">" + text + "</option>");

            }
            $("#selectNumber").on('change', function () {
                localStorage.setItem("RolID", this.value[0]);
                localStorage.setItem("OkulID", okulid);
                localStorage.setItem("dyiliid", dersyiliid);
                alert(dersyiliid);
                // alert(dersyiliid);
            });
        }

    });
}