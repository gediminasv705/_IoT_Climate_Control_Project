
$("#sensibo-login").click(function(event) {
    event.preventDefault();
    var apiKey = document.getElementById("sensibo-key").value
    sensiboLogin(apiKey);
});

function sensiboLogin(apiKey){

    var url = "scripts/sensibo_config.php";
    var obj = { apiKey: apiKey};
    var myJSON = JSON.stringify(obj);
    
    $.post(url, { apiKey: myJSON }, function(data) {
    
      logFormatter("  Sensibo gauti nustatymai:   ");
      console.log(data);
      sensiboGetData();
});

}
