$(document).ready(function() {

  var url = "scripts/netatmo_getter.php";
  var mail = "This is from JS";

  $.get(url, function(data) {

    console.log(data);

  });

});