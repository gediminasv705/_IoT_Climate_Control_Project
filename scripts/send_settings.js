function sendSettings(settings) {

  netatmoSend();
  sensiboSend();

  function netatmoSend() {

    logFormatter("  Netatmo duomenys siunčiami serveriui  ");

    var sendPath = "/api/setroomthermpoint";
    var url = "scripts/netatmo_sender.php";

    var obj = {
      scope: "write_thermostat",
      temp: settings.setTemp,
      path: sendPath
    };
    var myJSON = JSON.stringify(obj);

    $.post(url, { myData: myJSON }, function(data) {
      logFormatter("  Netatmo serverio atsakymas:  ");
      console.log(data);
      var decodedData = JSON.parse(data);
      var status = decodedData.status;

      if (status == "ok"){
        document.getElementById("answer-netatmo").classList.add("green-text");
        document.getElementById("answer-netatmo").innerHTML = "<p>Netatmo serveriui užklausa sėkmingai išsiūsta</p>";
      } else {
        document.getElementById("answer-netatmo").classList.add("red-text");
        document.getElementById("answer-netatmo").innerHTML = "<p>Netatmo serveriui užklausos išsiūsti nepavyko</p>";
      }


    });
  }

  function sensiboSend() {

    logFormatter("  Sensibo duomenys siunčiami serveriui  ");

    var url = "scripts/sensibo_sender.php";

    var obj = {
      sensiboOn: settings.sensiboOn,
      sensiboMode: settings.sensiboMode,
      sensiboFanLevel: settings.sensiboFanLevel,
      sensiboTargetTemp: settings.setTemp
    };
    var myJSON = JSON.stringify(obj);

    $.post(url, { myData: myJSON }, function(data) {
      logFormatter("  Sensibo serverio atsakymas:  ");
      console.log(data);
      var decodedData = JSON.parse(data);
      var status = decodedData.status;

      if (status == "success"){
        document.getElementById("answer-sensibo").classList.add("green-text");
        document.getElementById("answer-sensibo").innerHTML = "<p>Sensibo serveriui užklausa sėkmingai išsiūsta</p>";
      } else {
        document.getElementById("answer-sensibo").classList.add("red-text");
        document.getElementById("answer-sensibo").innerHTML = "<p>Sensibo serveriui užklausos išsiūsti nepavyko</p>";
      }
    });
  }
}
