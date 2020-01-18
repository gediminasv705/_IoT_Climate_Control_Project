


$("#temp-20").click(function() {

  var settings = {
    setTemp: 20,
    sensiboOn: "true",
    sensiboMode: "heat",
    sensiboFanLevel: "auto"
  };

  sendSettings(settings);
});

$("#temp-22").click(function() {
  var obj = { scope: "write_thermostat", temp: 22, path: tempPath + "22" };
  var myJSON = JSON.stringify(obj);

  $.post(url, { myData: myJSON }, function(data) {
    console.log(data);
    console.log("22");
  });
});

function sendSettings(settings) {

  netatmoSend();
  sensiboSend();

  function netatmoSend() {
    var sendPath = "/api/setroomthermpoint";
    var url = "scripts/netatmo_sender.php";

    var obj = {
      scope: "write_thermostat",
      temp: settings.setTemp,
      path: sendPath
    };
    var myJSON = JSON.stringify(obj);

    $.post(url, { myData: myJSON }, function(data) {
      console.log(data);
    });
  }

  function sensiboSend() {
    var url = "scripts/sensibo_sender.php";

    var obj = {
      sensiboOn: settings.sensiboOn,
      sensiboMode: settings.sensiboMode,
      sensiboFanLevel: settings.sensiboFanLevel,
      sensiboTargetTemp: settings.setTemp
    };
    var myJSON = JSON.stringify(obj);

    $.post(url, { myData: myJSON }, function(data) {
      console.log(data);
    });
  }
}
