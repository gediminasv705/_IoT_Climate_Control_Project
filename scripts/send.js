

var tempPath = "/api/setroomthermpoint?home_id=5da9b0feffda1e000b1a6c6c&room_id=3822593957&mode=manual&temp=";
var url = "scripts/netatmo_post.php";

$("#temp-20").click(function(){


    var obj = { scope: 'write_thermostat', temp: 20, path: (tempPath + '20')};
    var myJSON = JSON.stringify(obj);

    $.post(url,
    { myData: myJSON}, // duomenys kuriuos siunti
    function(data) {
             console.log(data);
             console.log("20");
    });
})

$("#temp-22").click(function(){

    var obj = { scope: 'write_thermostat', temp: 22, path: (tempPath + '22')};
    var myJSON = JSON.stringify(obj);

    $.post(url,
    { myData: myJSON}, // duomenys kuriuos siunti
    function(data) {
             console.log(data);
             console.log("22");
    });
})

