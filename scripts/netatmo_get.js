function netatmoGetData() {
  var time = new Date();
  var mytime =
    " [ " +
    time.getHours() +
    ":" +
    time.getMinutes() +
    ":" +
    time.getSeconds() +
    " ] ";

  console.log(mytime + "Netatmo duomenys atnaujinami");

  netatmoInfo();
  //netatmoMeasurements();

  function netatmoInfo() {
    var url = "scripts/netatmo_getter.php";
    var getPath = "/api/homestatus";
    var obj = {
      scope: "read_thermostat",
      path: getPath,
      reason: "measurements"
    };
    var myJSON = JSON.stringify(obj);

    $.post(url, { myData: myJSON }, function(data) {
      console.log(mytime + "Netatmo gauti duomenys: " + data);
      var decodedData = JSON.parse(data);
      var roomPath = decodedData.body.home.rooms["0"];

      var netatmoStatus = decodedData.status;
      var netatmoMeasuredTemp = roomPath.therm_measured_temperature;
      var netatmoSetpointTemp = roomPath.therm_setpoint_temperature;
      var netatmoSetpointMode = roomPath.therm_setpoint_mode;
      var netatmoBatteryLevel =
        decodedData.body.home.modules["1"].battery_state;
      var netatmoOutputState = decodedData.body.home.modules["1"].boiler_status;

      if (netatmoStatus == "ok") {
        document.getElementById("netatmo-status-res").innerHTML = "Connected";
        document.getElementById("netatmo-measured-temp").innerHTML =
          netatmoMeasuredTemp + "°C";
        document.getElementById("netatmo-set-temp").innerHTML =
          netatmoSetpointTemp + "°C";
        document.getElementById(
          "netatmo-control-mode"
        ).innerHTML = netatmoSetpointMode;
        document.getElementById(
          "netatmo-battery-level"
        ).innerHTML = netatmoBatteryLevel;

        if (netatmoOutputState) {
          document.getElementById("netatmo-output-status").innerHTML =
            "Output is On";
        } else {
          document.getElementById("netatmo-output-status").innerHTML =
            "Output is Off";
        }
      } else {
        document.getElementById("netatmo-status-res").innerHTML =
          "Not connected";
      }
    });
  }

  function netatmoMeasurements() {
    var url = "scripts/netatmo_getter.php";
    var getPath = "/api/homestatus";
    var obj = {
      scope: "read_thermostat",
      path: getPath,
      reason: "measurements"
    };
    var myJSON = JSON.stringify(obj);

    $.post(url, { myData: myJSON }, function(data) {
      console.log(data);
      decodedData = JSON.parse(data);

      if (netatmoIsReachable) {
      } else {
      }
    });
  }
}
