function controlLogic() {
  var controlMode = document.getElementById("select-control-mode");
  var climateMode = document.getElementById("select-climate-mode");
  var heatingDevices = document.getElementById("select-heating-devices");
  var fanSpeed = document.getElementById("select-fan-speed");
  var tempSelect = document.getElementById("temp-select");
  var tempSlider = document.getElementById("temp-slider");
  var btnTempUp = document.getElementById("btn-temp-up");
  var btnTempDown = document.getElementById("btn-temp-down");
  var confirm = document.getElementById("confirm");

  controlMode.addEventListener("change", function() {
    if (controlMode.value == "auto") {
      btnTempUp.classList.add("disabled");
      btnTempDown.classList.add("disabled");
      confirm.classList.add("disabled");

      automaticControl();
    } else {
      btnTempUp.classList.remove("disabled");
      btnTempDown.classList.remove("disabled");
      confirm.classList.remove("disabled");

      $("#btn-temp-up").click(function() {
        if (tempSelect.value < 30 && tempSelect.value >= 17) {
          btnTempUp.classList.remove("disabled");
          btnTempDown.classList.remove("disabled");
          tempSelect.value++;
          tempSlider.value = tempSelect.value;
        } else if (tempSelect.value == 30) {
          btnTempUp.classList.add("disabled");
        }
      });

      $("#btn-temp-down").click(function() {
        if (tempSelect.value > 17 && tempSelect.value <= 30) {
          btnTempUp.classList.remove("disabled");
          btnTempDown.classList.remove("disabled");
          tempSelect.value--;
          tempSlider.value = tempSelect.value;
        } else if (tempSelect.value == 17) {
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
        if (tempSelect.value == 17) {
          btnTempDown.classList.add("disabled");
        } else {
          btnTempDown.classList.remove("disabled");
        }
      });
    }
  });

  $("#btn-temp-up").click(function() {
    if (tempSelect.value < 30 && tempSelect.value >= 17) {
      btnTempUp.classList.remove("disabled");
      btnTempDown.classList.remove("disabled");
      tempSelect.value++;
      tempSlider.value = tempSelect.value;
    } else if (tempSelect.value == 30) {
      btnTempUp.classList.add("disabled");
    }
  });

  $("#btn-temp-down").click(function() {
    if (tempSelect.value > 17 && tempSelect.value <= 30) {
      btnTempUp.classList.remove("disabled");
      btnTempDown.classList.remove("disabled");
      tempSelect.value--;
      tempSlider.value = tempSelect.value;
    } else if (tempSelect.value == 17) {
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
    if (tempSelect.value == 17) {
      btnTempDown.classList.add("disabled");
    } else {
      btnTempDown.classList.remove("disabled");
    }
  });

  $("#confirm").click(function() {

    document.getElementById("answer-sensibo").classList.remove("green-text");
    document.getElementById("answer-netatmo").classList.remove("green-text");
    document.getElementById("answer-sensibo").classList.remove("red-text");
    document.getElementById("answer-netatmo").classList.remove("red-text");
    document.getElementById("answer-netatmo").innerHTML = "Užklausa siunčiama";
    document.getElementById("answer-sensibo").innerHTML = "Užklausa siunčiama";

    var settings = {
      setTemp: tempSelect.value,
      sensiboOn: "true",
      sensiboMode: "heat",
      sensiboFanLevel: "auto"
    };

    sensiboSend(settings);
    netatmoSend(settings);
  });

}
