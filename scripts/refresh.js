//Atnaujina duomenis ir informuoja vartotoją
function refresh(){

    document.getElementById("answer-sensibo").classList.remove("green-text");
    document.getElementById("answer-netatmo").classList.remove("green-text");
    document.getElementById("answer-sensibo").classList.remove("red-text");
    document.getElementById("answer-netatmo").classList.remove("red-text");
    document.getElementById("answer-netatmo").innerHTML = "<p>Laukiama duomenų iš Netatmo</p>";
    document.getElementById("answer-sensibo").innerHTML = "<p>Laukiama duomenų iš Sensibo</p>";

    netatmoGetData();
    sensiboGetData();

}

