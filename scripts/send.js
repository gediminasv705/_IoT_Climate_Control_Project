function sendData() {
  var time = new Date();
  var mytime =
    " [ " +
    time.getHours() +
    ":" +
    time.getMinutes() +
    ":" +
    time.getSeconds() +
    " ] ";

  var climateMode = document.getElementById("select-climate-mode");
  var heatingDevices = document.getElementById("select-heating-devices");
  var fanSpeed = document.getElementById("select-fan-speed");
  var tempSelect = document.getElementById("temp-select");
  var tempSlider = document.getElementById("temp-slider");
  var btnTempUp = document.getElementById("btn-temp-up");
  var btnTempDown = document.getElementById("btn-temp-down");
  var answer = document.getElementById("answer");

  $("#btn-temp-up").click(function() {
    if (tempSelect.value < 30 && tempSelect.value >= 18) {
      btnTempUp.classList.remove("disabled");
      btnTempDown.classList.remove("disabled");
      tempSelect.value++;
      tempSlider.value = tempSelect.value;
    } else if (tempSelect.value == 30) {
      btnTempUp.classList.add("disabled");
    }
  });

  $("#btn-temp-down").click(function() {
    if (tempSelect.value > 18 && tempSelect.value <= 30) {
      btnTempUp.classList.remove("disabled");
      btnTempDown.classList.remove("disabled");
      tempSelect.value--;
      tempSlider.value = tempSelect.value;
    } else if (tempSelect.value == 18) {
      btnTempDown.classList.add("disabled");
    }
  });

  $("#temp-slider").click(function() {
    tempSelect.value = tempSlider.value;

    if (tempSelect.value == 30) {
      btnTempUp.classList.add("disabled");
    } else {
      btnTempUp.classList.remove("disabled");
    }
    if (tempSelect.value == 18) {
      btnTempDown.classList.add("disabled");
    } else {
      btnTempDown.classList.remove("disabled");
    }
  });

  $("#confirm").click(function() {
    answer.innerHTML = "Užklausa išsiųsta";

    var settings = {
      setTemp: tempSelect.value,
      sensiboOn: "true",
      sensiboMode: "heat",
      sensiboFanLevel: "auto"
    };

    sendSettings(settings);
  });

  function sendSettings(settings) {
    netatmoSend();
    sensiboSend();

    function netatmoSend() {
      console.log(mytime + " Netatmo duomenys siunčiami serveriui");

      var sendPath = "/api/setroomthermpoint";
      var url = "scripts/netatmo_sender.php";

      var obj = {
        scope: "write_thermostat",
        temp: settings.setTemp,
        path: sendPath
      };
      var myJSON = JSON.stringify(obj);

      $.post(url, { myData: myJSON }, function(data) {
        console.log(mytime + "Netatmo serverio atsakymas: " + data);
      });
    }

    function sensiboSend() {
      console.log(mytime + "Sensibo duomenys siunčiami serveriui");

      var url = "scripts/sensibo_sender.php";

      var obj = {
        sensiboOn: settings.sensiboOn,
        sensiboMode: settings.sensiboMode,
        sensiboFanLevel: settings.sensiboFanLevel,
        sensiboTargetTemp: settings.setTemp
      };
      var myJSON = JSON.stringify(obj);

      $.post(url, { myData: myJSON }, function(data) {
        console.log(mytime + "Sensibo serverio atsakymas: " + data);
      });
    }
  }
}
