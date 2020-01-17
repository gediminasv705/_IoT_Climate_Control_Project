<?php

// Čia noriu gauti informaciją iš get.js

$entityBody = file_get_contents('php://input');

echo $entityBody;

//Retrieve the string, which was sent via the POST parameter "user" 

 
//Decode the JSON string and convert it into a PHP associative array.


//var_dump the array so that we can view it's structure.

// echo $scope;

// $scope = 'read_thermostat';
// $netatmo_access_token = netatmo_access_token($username, $password, $scope, $host);

// $path = "/api/homesdata";
// $netatmo_data_received = netatmo_post($path, $host, $netatmo_access_token);

// $home_id = $netatmo_data_received['body']['homes']['1']['id'];
// $room_id = $netatmo_data_received['body']['homes']['1']['rooms']['0']['id']; 

// $path = "/api/homestatus?home_id=" . $home_id;
// $netatmo_data_received = netatmo_post($path, $host, $netatmo_access_token);

// $received_set_temp = $netatmo_data_received['body']['home']['rooms']['0']['therm_setpoint_temperature'];
// $received_measured_temp = $netatmo_data_received['body']['home']['rooms']['0']['therm_measured_temperature'];
// $received_mode = $netatmo_data_received['body']['home']['rooms']['0']['therm_setpoint_mode'];
// $received_battery_level = $netatmo_data_received['body']['home']['modules']['1']['battery_state'];
// $status = $netatmo_data_received['status'];


// include ("get.js");

//  if ( isset($_POST["mail"]) && !empty($_POST["mail"])){

//     echo $_POST["mail"];
//  }

?>
