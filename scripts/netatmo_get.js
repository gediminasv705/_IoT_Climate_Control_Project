function netatmoGetData() {

logFormatter("  Netatmo duomenys atnaujinami  ");

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

      logFormatter("  Netatmo gauti duomenys:  ");
      console.log(data);

      var decodedData = JSON.parse(data);
      var roomPath = decodedData.body.home.rooms["0"];

      var netatmoStatus = decodedData.status;

      // nededu į var nes naudoju auto_control funkcijoje
      netatmoMeasuredTemp = roomPath.therm_measured_temperature;
      netatmoSetpointTemp = roomPath.therm_setpoint_temperature;
      
      var netatmoSetpointMode = roomPath.therm_setpoint_mode;
      var netatmoBatteryLevel =
        decodedData.body.home.modules["1"].battery_state;
      var netatmoOutputState = decodedData.body.home.modules["1"].boiler_status;

      if (netatmoStatus == "ok") {

        document.getElementById("answer-netatmo").classList.add("green-text");
        document.getElementById("answer-netatmo").innerHTML = "<p>Netatmo nustatymai sėkmingai gauti</p>";
        document.getElementById("netatmo-status-icon").classList.remove("red-text");
        document.getElementById("netatmo-status-icon").classList.add("green-text");
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

          document.getElementById("answer-netatmo").classList.add("red-text");
          document.getElementById("answer-netatmo").innerHTML = "<p>Nepavyko gauti Netatmo nustatymų</p>"
          document.getElementById("netatmo-status-icon").classList.remove("green-text");
          document.getElementById("netatmo-status-icon").classList.add("red-text");

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
