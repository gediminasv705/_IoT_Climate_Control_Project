
<?php

include 'netatmo_post.php';

// Prieš siųsdamas komandą turiu gauti home ID ir room ID 
$path = "/api/homesdata";
$scope = "read_thermostat";
$netatmo_access_token = netatmo_access_token($username, $password, $scope, $host, $client_id, $client_secret);
$netatmo_data_received = netatmo_post($path, $host, $netatmo_access_token);
$netatmo_data_decoded = json_decode($netatmo_data_received, true);

$home_id = $netatmo_data_decoded['body']['homes']['0']['id'];
$room_id = $netatmo_data_decoded['body']['homes']['0']['rooms']['0']['id'];

// Čia siunčiu komandą

$json = $_POST['myData'];
$decoded_json = json_decode($json, true);
$scope = $decoded_json['scope'];
$temp = $decoded_json['temp'];
$path = $decoded_json['path'];

$path_send = $path . "?home_id=" . $home_id . "&room_id=" . $room_id . "&mode=manual&temp=" . $temp;

echo $path_send;
//Kviečiu dar kartą access token, kad pakeisčiau scope į write thermostat
$netatmo_access_token = netatmo_access_token($username, $password, $scope, $host, $client_id, $client_secret);
echo netatmo_post($path_send, $host, $netatmo_access_token);

?>