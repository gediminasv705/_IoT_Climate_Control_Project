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

        // sensibo priima tik int values
        var sendTemp = Math.floor( setTemp );

      var settings = {
        setTemp: sendTemp,
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

    //sensiboOn = "false";
    sendData = sensiboSet(setTemp, sensiboOn, sensiboMode, sensiboFanLevel);
    console.log(sendData);

      sendData = sensiboSet(setTemp, sensiboOn, sensiboMode, sensiboFanLevel);
      sensiboSend(sendData);
    }

  }, 10000);
}
