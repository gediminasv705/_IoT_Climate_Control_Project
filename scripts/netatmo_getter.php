<?php

include 'netatmo_auth.php';
include 'config.php';

//gaunu access token ir nustatau reikiamą scope
$scope = 'read_thermostat';
$netatmo_access_token = netatmo_access_token($username, $password, $scope, $host);


function netatmo_post($path, $host, $netatmo_access_token)
{
    $url = $host . $path;

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Authorization: Bearer ' . $netatmo_access_token
    ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $server_output = curl_exec($ch);
    $server_output_decoded = json_decode($server_output, true);


    if ($server_output_decoded['error']['message']){

        echo "</br> Failed to receive data from Netatmo. ERROR: " . $server_output_decoded['error']['message'] . '</br>';

    } else {

        echo "</br> Data received! </br>";
        return $server_output_decoded;
        
    }

}

$path = "/api/homesdata";
$netatmo_data_received = netatmo_post($path, $host, $netatmo_access_token);

$home_id = $netatmo_data_received['body']['homes']['1']['id'];
$room_id = $netatmo_data_received['body']['homes']['1']['rooms']['0']['id'];

$path = "/api/homestatus?home_id=" . $home_id;
$netatmo_data_received = netatmo_post($path, $host, $netatmo_access_token);

$received_set_temp = $netatmo_data_received['body']['home']['rooms']['0']['therm_setpoint_temperature'];
$received_measured_temp = $netatmo_data_received['body']['home']['rooms']['0']['therm_measured_temperature'];
$received_mode = $netatmo_data_received['body']['home']['rooms']['0']['therm_setpoint_mode'];
$received_battery_level = $netatmo_data_received['body']['home']['modules']['1']['battery_state'];
$status = $netatmo_data_received['status'];

?>