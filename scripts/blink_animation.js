function netatmoBlink(deviceId) {
  document.getElementById(deviceId).classList.add("blink");

  setTimeout(function() {
    document.getElementById(deviceId).classList.remove("blink");
  }, 800);
}

function sensiboBlink(deviceId) {
  document.getElementById(deviceId).classList.add("blink");

  setTimeout(function() {
    document.getElementById(deviceId).classList.remove("blink");
  }, 800);
}