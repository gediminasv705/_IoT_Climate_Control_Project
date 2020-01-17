
<?php

include 'netatmo_post.php';
//tik per front end gauti atsakyma

$username = 'ona.sacikauskiene@gmail.com';
$password = 'Netatmo@uzusienio116';
$host = 'https://api.netatmo.com';

$json = $_POST['myData'];
$decoded_json = json_decode($json, true);
$myScope = $decoded_json['scope'];
$temp = $decoded_json['temp'];

var_dump($temp);

$scope = $myScope;
$netatmo_access_token = netatmo_access_token($username, $password, $scope, $host);

$send_set_temp = $temp;

$send_set_temp = 20;
$scope = 'write_thermostat';

$path = "/api/setroomthermpoint?home_id=5da9b0feffda1e000b1a6c6c&room_id=3822593957&mode=manual&temp=" . $send_set_temp ;

echo $path;
// $netatmo_data_received = netatmo_post($path, $host, $netatmo_access_token);

// $scope = $myScope;
// $netatmo_access_token = netatmo_access_token($username, $password, $scope, $host);

// $path = "/api/homesdata";
// $netatmo_data_received = netatmo_post($path, $host, $netatmo_access_token);

// $netatmo_data_decoded = json_decode($netatmo_data_received, true);

// $home_id = $netatmo_data_decoded['body']['homes']['1']['id'];

// echo $home_id;




?>