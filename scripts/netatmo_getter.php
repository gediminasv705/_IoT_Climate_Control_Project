<?php

include 'netatmo_post.php';

$json = $_POST['myData'];
$decoded_json = json_decode($json, true);
$myScope = $decoded_json['scope'];
$scope = $decoded_json['scope'];
$path_send = $decoded_json['path'];
$reason = $decoded_json['reason'];

if ($reason == 'measurements'){

$netatmo_access_token = netatmo_access_token($username, $password, $scope, $host, $client_id, $client_secret);
$path = "/api/homesdata";

$netatmo_data_received = netatmo_post($path, $host, $netatmo_access_token);
$netatmo_data_decoded = json_decode($netatmo_data_received, true);

$home_id = $netatmo_data_decoded['body']['homes']['0']['id'];
$room_id = $netatmo_data_decoded['body']['homes']['0']['rooms']['0']['id'];

$path = $path_send . '?home_id=' . $home_id;

$netatmo_data_received = netatmo_post($path, $host, $netatmo_access_token);

echo $netatmo_data_received;

} else {

    echo 'error: bad reason';
}

?>
