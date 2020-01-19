function automaticControl() {

  interval = setInterval(function() {

    refresh();

    var netatmoSetTemp = netatmoSetpointTemp;
    var netatmoGetTemp = netatmoMeasuredTemp;
    var sensiboSetTemp = sensiboTargetTemp;
    var deadBand = 0.5;
    var boostTempDiff = 4;

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


    if (netatmoSetTemp < netatmoGetTemp - deadBand && netatmoSetTemp - netatmoGetTemp < boostTempDiff) {
        
        console.log('COOLING');
        console.log(netatmoSetTemp - netatmoGetTemp); 
        console.log(boostTempDiff); 

        sensiboOn = "true";
        sensiboMode = "cool";
        sendData = sensiboSet(setTemp, sensiboOn, sensiboMode, sensiboFanLevel);
        sensiboSend(sendData);

    } else if (netatmoSetTemp > netatmoGetTemp + deadBand && netatmoSetTemp - netatmoGetTemp < boostTempDiff) {

        console.log('HEATING');
        console.log(netatmoSetTemp - netatmoGetTemp); 
        console.log(boostTempDiff); 

    sensiboOn = "false";
    sendData = sensiboSet(setTemp, sensiboOn, sensiboMode, sensiboFanLevel);
    sensiboSend(sendData);

    } else if (netatmoSetTemp - netatmoGetTemp > boostTempDiff){

        console.log('turboHEATING');
        console.log(netatmoSetTemp - netatmoGetTemp); 
        console.log(boostTempDiff); 
  
        sensiboOn = "true";
        sensiboMode = "heat";
        sensiboFanLevel = "high";
        sendData = sensiboSet(setTemp, sensiboOn, sensiboMode, sensiboFanLevel);
        sensiboSend(sendData);
        
    }

  }, 10000);
}
