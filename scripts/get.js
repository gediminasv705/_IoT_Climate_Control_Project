function netatmoDataInit() {
  
  $(document).ready(function() {
    var url = "scripts/netatmo_post.php";

    getPath = "/api/homestatus?home_id=5da9b0feffda1e000b1a6c6c";

    var obj = { scope: 'read_thermostat', temp: 20, path: getPath};
    var myJSON = JSON.stringify(obj);

    netatmoData(url);

    function netatmoData(url){
    $.post(url,
    { myData: myJSON}, // duomenys kuriuos siunti
    function(data) {
             console.log(data);
             decodedData = JSON.parse(data);

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
          netatmoRoomId =
          decodedData.body.home.rooms["0"].id;
          homeId =
          decodedData.body.home.id;

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

    
    

    // function netatmoData(url) {
    //   $.get(url, function(data) {
    //     decodedData = JSON.parse(data);

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
    //   });
    }

});

}
