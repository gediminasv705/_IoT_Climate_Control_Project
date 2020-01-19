function sensiboGetData() {
  var time = new Date();
  var mytime =
    " [ " +
    time.getHours() +
    ":" +
    time.getMinutes() +
    ":" +
    time.getSeconds() +
    " ] ";

  console.log(mytime + "Sensibo duomenys atnaujinami");

  sensiboMeasurements();
  sensiboAcStates();

  function sensiboMeasurements() {
    var url = "scripts/sensibo_getter.php";
    var obj = { reason: "measurements" };
    var myJSON = JSON.stringify(obj);

    $.post(url, { myData: myJSON }, function(data) {
      console.log(mytime + "Sensibo gauti nustatymai: " + data);
      var decodedData = JSON.parse(data);

      var sensiboStatus = decodedData.status;
      var sensiboTemperature = decodedData.result["0"].temperature;
      var sensiboHumidity = decodedData.result["0"].humidity;

      if (sensiboStatus == "success") {
        document.getElementById("sensibo-measured-temp").innerHTML =
          sensiboTemperature + "°C";
        document.getElementById("sensibo-humidity").innerHTML =
          "H " + sensiboHumidity + "%";
      }
    });
  }

  function sensiboAcStates() {
    var url = "scripts/sensibo_getter.php";
    var obj = { reason: "acStates" };
    var myJSON = JSON.stringify(obj);

    $.post(url, { myData: myJSON }, function(data) {
      console.log(mytime + "Sensibo gauti matavimai: " + data);
      var decodedData = JSON.parse(data);
      var roomPath = decodedData.result["0"];

      var sensiboStatus = roomPath.status;
      var sensiboTargetTemp = roomPath.acState.targetTemperature;
      var sensiboTempUnit = roomPath.acState.temperatureUnit;
      var sensiboOn = roomPath.acState.on;
      var sensiboMode = roomPath.acState.mode;
      var sensiboFanLevel = roomPath.acState.fanLevel;

      // Fiksuoja pakeistus parametrus:
      // var sensiboChangedProperties = roomPath.changedProperties;

      if (sensiboStatus == "Success") {
        document.getElementById("sensibo-status").innerHTML = "Connected";
        document.getElementById("sensibo-set-temp").innerHTML =
          sensiboTargetTemp + "°" + sensiboTempUnit;
        document.getElementById("sensibo-mode").innerHTML = sensiboMode;
        document.getElementById(
          "sensibo-fan-level"
        ).innerHTML = sensiboFanLevel;

        if (sensiboOn) {
          document.getElementById("sensibo-device-status").innerHTML =
            "Device is On";
        } else {
          document.getElementById("sensibo-device-status").innerHTML =
            "Device is Off";
        }
      } else {
        console.log("Nepavyko prisijungti");
      }
    });
  }
}
