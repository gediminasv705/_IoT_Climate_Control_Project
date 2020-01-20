function sensiboGetData() {
  logFormatter("  Sensibo duomenys atnaujinami  ");

  sensiboMeasurements();
  sensiboAcStates();

  //Gaunu išmatuotus sensibo duomenis
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

      //Jeigu gavo matavimus, suformatuoju ir išvedu vartotojui
      if (sensiboStatus == "success") {
        document.getElementById("sensibo-measured-temp").innerHTML =
          sensiboTemperature + "°C";
        document.getElementById("sensibo-humidity").innerHTML =
          "H " + sensiboHumidity + "%";
      } else {
        document.getElementById("answer-sensibo").classList.add("red-text");
        document.getElementById("answer-sensibo").innerHTML =
          "<p>Nepavyko gauti sensibo nustatymų</p>";
      }
    });
  }

   //Gaunu sensibo konfigūracijos duomenis
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

      //Jeigu gavo visus duomenis, informuoju vartotoją, jog nustatymai gauti
      if (status == "success") {
        document.getElementById("answer-sensibo").classList.add("green-text");
        document.getElementById("answer-sensibo").innerHTML =
          "<p>Sensibo nustatymai sėkmingai gauti</p>";
        document.getElementById("sensibo-status").innerHTML = "Connected";

        if (
          (sensiboTargetTemp + "°" + sensiboTempUnit) !=
          (document.getElementById("sensibo-set-temp").innerHTML)
        ) {
          sensiboBlink("sensibo-set-temp-div");
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
          if (
            ("Device is On") !=
            (document.getElementById("sensibo-device-status").innerHTML)
          ) {
            sensiboBlink("sensibo-device-status-div");
          } 
          document.getElementById("sensibo-device-status").innerHTML =
            "Device is On";
        } else {
          if (
            ("Device is Off") !=
            (document.getElementById("sensibo-device-status").innerHTML)
          ) {
            sensiboBlink("sensibo-device-status-div");
          } 
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
