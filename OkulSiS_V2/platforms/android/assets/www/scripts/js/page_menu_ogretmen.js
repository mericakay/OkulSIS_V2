function user() {
    var did = localStorage.getItem("dyiliid");
    var rolid = localStorage.getItem("RolID");
    var okulid = localStorage.getItem("OkulID");
    var kisiid = localStorage.getItem("gelenid");
    var ip = localStorage.getItem("proxy");
    var kisiadi = localStorage.getItem("KullaniciAdi");
    document.getElementById("username_mrc").innerHTML = kisiadi;

    $.ajax({
        url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=mobilMenu_mbllogin&RolID=' + rolid + '',
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
        
        url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=ogretmenDersProgrami_mbllogin&kisiId=' + kisiid + '&OkulID=' + okulid + '&dersYiliID=9D7A115C-5E96-4F6E-B31D-E5710BDA1C97',
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
               // alert($(this).val());
                var x = document.getElementById("myDate").value;
               // alert(x);
                if (x === "") {
                    alert("Lütfen Tarih Seçiniz !!")

                }
                else {


                    $.ajax({
                        url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=ogretmenDersProgramiDersSaatleri_mbllogin&kisiId=1250E188-B635-4418-ABB4-98E8886C707D&sinifID=' + this.value + '&tarih=' + x + '',
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

                                    url: 'http://' + ip + ':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?url=ogretmenDersPrgDersSaatleriOgrencileri_mbllogin&sinifID=F4201B97-B073-4DD7-8891-8091C3DC82CF&tarih=2017-01-02+00%3A00%3A00&dersSirasi=1&dersYiliID=fc4675fc-dafb-4af6-a3c2-7acd22622039&kisiId=1250E188-B635-4418-ABB4-98E8886C707D',
                                    type: 'GET',
                                    dataType: 'json',
                                    success: function (data) {
                                        var j;
                                        var dataSet = [];
                                        var properties = [];
                                        //$('#location').empty();
                                        for (var j = 0; j < data.length; j++) {
                                            var Numarasi = data[j].Numarasi;
                                            var Adi = data[j].Adsoyad;
                                            var SoyAdi = data[j].Soyadi;
                                            var Tc = data[j].TCKimlikNo;
                                            var selected = data[j].selected;
                                            $('#location').append('<tr><td>' + Numarasi + '</td><td>' + Adi + '</td><td><input type="checkbox"  id="option" name="check" / ><label for="option" sytle=" margin-right:20px;">Yok</label><input type="checkbox"  id="option" name="check"/ ><label for="option" sytle="font-size: 11px;">Geç</label></td></tr>');
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
};


