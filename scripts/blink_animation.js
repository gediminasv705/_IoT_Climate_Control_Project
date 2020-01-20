function netatmoBlink() {
  document.getElementById("netatmo-set-temp-div").classList.add("blink");

  setTimeout(function() {
    document.getElementById("netatmo-set-temp-div").classList.remove("blink");
  }, 800);
}

function sensiboBlink() {
  document.getElementById("sensibo-set-temp-div").classList.add("blink");

  setTimeout(function() {
    document.getElementById("sensibo-set-temp-div").classList.remove("blink");
  }, 800);
}