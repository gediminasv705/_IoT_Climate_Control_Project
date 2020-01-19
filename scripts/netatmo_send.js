function netatmoSend(settings) {

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