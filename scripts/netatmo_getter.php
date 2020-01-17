<?php

include 'netatmo_post.php';

$scope = 'read_thermostat';
$netatmo_access_token = netatmo_access_token($username, $password, $scope, $host);

$path = "/api/homesdata";
$netatmo_data_received = netatmo_post($path, $host, $netatmo_access_token);
$netatmo_data_decoded = json_decode($netatmo_data_received, true);

$home_id = $netatmo_data_decoded['body']['homes']['1']['id'];

// $path = "/api/homestatus?home_id=" . $home_id;
// $netatmo_data_received = netatmo_post($path, $host, $netatmo_access_token);

// echo $netatmo_data_received;

?>
