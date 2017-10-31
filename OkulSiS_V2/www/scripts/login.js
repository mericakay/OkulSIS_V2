
$(document).ready(function () {
    $('input[id^="button"]').click(function () {
        // alert('You have clicked ' + $(this).val());
        username = $("#name").val();
        sifre = $("#password").val();
        
      //  localStorage.clear();
        /* assci crypto algoritması Meriç
        alert(username);      
        var bytes = []; // char codes
        var bytesv2 = []; // char codes

        for (var i = 0; i < username.length; ++i) {
            var code = str.charCodeAt(i);

            bytes = bytes.concat([code]);

            bytesv2 = bytesv2.concat([code & 0xff, code / 256 >>> 0]);
        }
        alert(bytes);*/
        var ip = localStorage.getItem("proxy");
      
        $.ajax({
        

            url: 'http://'+ip+':8080/Slim_Proxy_okulsis/SlimProxyBoot.php?tc=' + username + '&sifre=' + sifre + '&url=gnlKullaniciFindForLoginByTcKimlikNo_mbllogin',
            data: {
                username: $("#name").val(),
                sifre: $("#password").val(),
            },
            type: 'Get',
            dataType: 'json',
            success: function (data) {
                // alert(data);
                if (data.lenght !== 0) {
                    var gelen = data[0].adsoyad;
                    var kisiid = data[0].KisiID;
                    var okulid = data[0].OkulID;
                    //  var rolid = data[0].RolID;
                    // alert(rolid);

                    document.getElementsByTagName("P")[0].innerHTML = gelen;
                    // jQuery.load("index2.html",gelen)
                    //localStorage.clear();
                    localStorage.setItem("tc", username);
                    localStorage.setItem("KullaniciAdi", gelen);
                    localStorage.setItem("gelenid", kisiid, "OkulID", okulid);
                    var add = localStorage.getItem("KullaniciAdi");
                   
                    //  alert()
                    window.location.href = "../selectSchool.html";
                    // return id;
                }
                else {
                    alert("Hatalı kullanıcı adı ya da şifre")
                }

            }
        });

    })
})


