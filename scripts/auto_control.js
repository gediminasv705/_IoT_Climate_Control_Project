function automaticControl(){

    setInterval(function(){ 

    var netatmoSetTemp = netatmoSetpointTemp;
    var netatmoGetTemp = netatmoMeasuredTemp;
    var sensiboSetTemp = sensiboTargetTemp;
    var deadBand = 1;


    if (netatmoSetTemp < netatmoGetTemp - deadBand) {

        var settings = {
            setTemp: netatmoSetTemp,
            sensiboOn: "true",
            sensiboMode: "heat",
            sensiboFanLevel: "auto"
          };
      
          sendSettings(settings);
          console.log("set to: " + netatmoSetTemp);
          
    }






    }, 4000);
    
}