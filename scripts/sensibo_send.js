function sensiboSend(settings) {

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