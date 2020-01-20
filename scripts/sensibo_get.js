function sensiboGetData() {
  logFormatter("  Sensibo duomenys atnaujinami  ");

  sensiboMeasurements();

  sensiboAcStates();

  function sensiboMeasurements() {
    var url = "scripts/sensibo_getter.php";
    var obj = { reason: "measurements" };
    var myJSON = JSON.stringify(obj);

    $.post(url, { myData: myJSON }, function(data) {
      logFormatter("  Sensibo gauti matavimai:   ");
      console.log(data);

      var decodedData = JSON.parse(data);

      var sensiboStatus = decodedData.status;
      var sensiboTemperature = decodedData.result["0"].temperature;
      var sensiboHumidity = decodedData.result["0"].humidity;

      if (sensiboStatus == "success") {
        document.getElementById("sensibo-measured-temp").innerHTML =
          sensiboTemperature + "°C";
        document.getElementById("sensibo-humidity").innerHTML =
          "H " + sensiboHumidity + "%";
        sensiboAcStates();
      } else {
        document.getElementById("answer-sensibo").classList.add("red-text");
        document.getElementById("answer-sensibo").innerHTML =
          "<p>Nepavyko gauti sensibo nustatymų</p>";
      }
    });
  }

  function sensiboAcStates() {
    var url = "scripts/sensibo_getter.php";
    var obj = { reason: "acStates" };
    var myJSON = JSON.stringify(obj);

    $.post(url, { myData: myJSON }, function(data) {
      logFormatter("  Sensibo gauti nustatymai:   ");
      console.log(data);

      var decodedData = JSON.parse(data);
      var roomPath = decodedData.result["0"];

      var sensiboStatus = roomPath.status;

      // Nededu i var, nes naudoju auto_control funkcijoje
      sensiboTargetTemp = roomPath.acState.targetTemperature;

      var sensiboTempUnit = roomPath.acState.temperatureUnit;
      var sensiboOn = roomPath.acState.on;
      var sensiboMode = roomPath.acState.mode;
      var sensiboFanLevel = roomPath.acState.fanLevel;
      var status = decodedData.status;

      if (status == "success") {
        document.getElementById("answer-sensibo").classList.add("green-text");
        document.getElementById("answer-sensibo").innerHTML =
          "<p>Sensibo nustatymai sėkmingai gauti</p>";
        document.getElementById("sensibo-status").innerHTML = "Connected";

        if (
          (sensiboTargetTemp + "°" + sensiboTempUnit) !=
          (document.getElementById("sensibo-set-temp").innerHTML)
        ) {
          sensiboBlink();
        }
        
        document.getElementById("sensibo-set-temp").innerHTML =
          sensiboTargetTemp + "°" + sensiboTempUnit;
        document.getElementById("sensibo-mode").innerHTML = sensiboMode;
        document.getElementById(
          "sensibo-fan-level"
        ).innerHTML = sensiboFanLevel;
        document
          .getElementById("sensibo-status-icon")
          .classList.add("green-text");
        document
          .getElementById("sensibo-status-icon")
          .classList.remove("red-text");

        if (sensiboOn) {
          document.getElementById("sensibo-device-status").innerHTML =
            "Device is On";
        } else {
          document.getElementById("sensibo-device-status").innerHTML =
            "Device is Off";
        }
      } else {
        document.getElementById("answer-sensibo").classList.add("red-text");
        document.getElementById("answer-sensibo").innerHTML =
          "<p>Nepavyko gauti sensibo nustatymų</p>";
        document
          .getElementById("sensibo-status-icon")
          .classList.add("red-text");
        document
          .getElementById("sensibo-status-icon")
          .classList.remove("green-text");
      }
    });
  }
}
