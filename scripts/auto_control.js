function automaticControl() {




  interval = setInterval(function() {
    refresh();

    var netatmoSetTemp = netatmoSetpointTemp;
    var netatmoGetTemp = netatmoMeasuredTemp;
    var sensiboSetTemp = sensiboTargetTemp;
    var deadBand = 1;

    var setTemp = netatmoSetTemp;
    var sensiboOn = "true";
    var sensiboMode = "heat";
    var sensiboFanLevel = "auto";

    var sendData = sensiboSet(setTemp, sensiboOn, sensiboMode, sensiboFanLevel);

    function sensiboSet(setTemp, sensiboOn, sensiboMode, sensiboFanLevel) {
      var settings = {
        setTemp: setTemp,
        sensiboOn: sensiboOn,
        sensiboMode: sensiboMode,
        sensiboFanLevel: sensiboFanLevel
      };

      return settings;
    }

    if (netatmoSetTemp < netatmoGetTemp - deadBand) {
      sendData = sensiboSet(setTemp, sensiboOn, sensiboMode, sensiboFanLevel);
      sensiboSend(sendData);
    } else if (netatmoSetTemp > netatmoGetTemp + deadBand) {
      console.log("gediminas");

      sendData = sensiboSet(setTemp, sensiboOn, sensiboMode, sensiboFanLevel);
      console.log(sendData);
      sensiboSend(sendData);
    }

  }, 10000);
}
