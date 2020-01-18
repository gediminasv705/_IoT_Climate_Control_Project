function netatmoConnectionInit() {

    netatmoInfo();
    // netatmoMeasurements();

    function netatmoInfo() {

      var url = "scripts/netatmo_getter.php";
      var getPath = "/api/homestatus";
      var obj = { scope: "read_thermostat", path: getPath, reason: 'measurements' };
      var myJSON = JSON.stringify(obj);

      $.post(
        url,
        { myData: myJSON }, // duomenys kuriuos siunti
        function(data) {

          console.log(data);
          //      decodedData = JSON.parse(data);

          // netatmoMeasuredTemp =
          //   decodedData.body.home.rooms["0"].therm_measured_temperature;

          // netatmoSetpointTemp =
          //   decodedData.body.home.rooms["0"].therm_setpoint_temperature;

          // netatmoSetpointMode =
          //   decodedData.body.home.rooms["0"].therm_setpoint_mode;

          // netatmoIsReachable = decodedData.body.home.rooms["0"].reachable;

          // netatmoSetpontStart =
          //   decodedData.body.home.rooms["0"].therm_setpoint_start_time;

          // netatmoSetpontEnd =
          //   decodedData.body.home.rooms["0"].therm_setpoint_end_time;

          //   netatmoRoomId =
          //   decodedData.body.home.rooms["0"].id;

          //   homeId =
          //   decodedData.body.home.id;

          // document.getElementById("netatmo-measured-temp").innerHTML =
          //   netatmoMeasuredTemp + "°C";
          // if (netatmoIsReachable) {

          //   document.getElementById("netatmo-status-res").innerHTML = "Connected";

          //   document.getElementById("netatmo-measured-temp").innerHTML =
          //     netatmoMeasuredTemp + "°C";

          //   document.getElementById("netatmo-set-temp").innerHTML =
          //     netatmoSetpointTemp + "°C";

          //   document.getElementById("netatmo-set-temp").innerHTML =
          //     netatmoSetpointTemp + "°C";

          //   document.getElementById(
          //     "netatmo-control-mode"
          //   ).innerHTML = netatmoSetpointMode;

          // } else {

          //   document.getElementById("netatmo-status-res").innerHTML =
          //     "Not connected";
          // }
        }
      );
    }

    function netatmoMeasurements() {

      var url = "scripts/netatmo_getter.php";
      var getPath = "/api/homestatus";
      var obj = { scope: "read_thermostat", path: getPath, reason: 'measurements' };
      var myJSON = JSON.stringify(obj);

      $.post(
        url,
        { myData: myJSON }, // duomenys kuriuos siunti
        function(data) {

                console.log(data);
               decodedData = JSON.parse(data);

          if (netatmoIsReachable) {


          } else {

          }
        }
      );
    }
}
