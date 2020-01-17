$(document).ready(function() {
  var url = "scripts/netatmo_auth.php";

  $.get(url, function(data) {
    decodedData = JSON.parse(data);
  });



  // var json = '{"heroes":[{"id":"1","name":"CEO Steve Jobs"},{"id":"2","name":"Bill Gates"},{"id":"3","name":"Paul Allen"},{"id":"4","name":"Sundar Pichai"}]}';
  // var obj = JSON.parse(json);

  // console.log(json);
  // var jsonAgain = JSON.stringify(obj);

  var url = "scripts/netatmo_getter.php";
  var obj = { name: "John", age: 30, city: "New York" };
  var myJSON = JSON.stringify(obj);

  console.log(myJSON);

//Čia noriu perduoti informaciją į netatmo_getter.php

$.post(url, myJSON, function(data, status){

  console.log("status: " + status);

});



});
