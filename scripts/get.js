function netatmoDataInit() {
  
  $(document).ready(function() {
    var url = "scripts/netatmo_getter.php";

    function netatmoData(url) {
      $.get(url, function(data) {
        decodedData = JSON.parse(data);

        console.log(decodedData.body.home.rooms["0"]);

        netatmoMeasuredTemp =
          decodedData.body.home.rooms["0"].therm_measured_temperature;
        netatmoSetpointTemp =
          decodedData.body.home.rooms["0"].therm_setpoint_temperature;
        netatmoSetpointMode =
          decodedData.body.home.rooms["0"].therm_setpoint_mode;
        netatmoIsReachable = decodedData.body.home.rooms["0"].reachable;
        netatmoSetpontStart =
          decodedData.body.home.rooms["0"].therm_setpoint_start_time;
        netatmoSetpontEnd =
          decodedData.body.home.rooms["0"].therm_setpoint_end_time;

        document.getElementById("netatmo-measured-temp").innerHTML =
          netatmoMeasuredTemp + "°C";

        if (netatmoIsReachable) {
          document.getElementById("netatmo-status-res").innerHTML = "Connected";
          document.getElementById("netatmo-measured-temp").innerHTML =
            netatmoMeasuredTemp + "°C";
          document.getElementById("netatmo-set-temp").innerHTML =
            netatmoSetpointTemp + "°C";
          document.getElementById("netatmo-set-temp").innerHTML =
            netatmoSetpointTemp + "°C";
          document.getElementById(
            "netatmo-control-mode"
          ).innerHTML = netatmoSetpointMode;
        } else {
          document.getElementById("netatmo-status-res").innerHTML =
            "Not connected";
        }
      });
    }

    netatmoData(url);

    var url = "scripts/netatmo_getter.php";

    $.post(
      url,
      { myData: "This is my data." }, // duomenys kuriuos siunti
      function(data) {
        //console.log(data);
      }
    );
  });
}
