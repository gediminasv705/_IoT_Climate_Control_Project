<?php

include 'netatmo_auth.php';

$json = $_POST['myData'];
$decoded_json = json_decode($json, true);
$myScope = $decoded_json['scope'];
$temp = $decoded_json['temp'];
$scope = $decoded_json['scope'];
$path_send = $decoded_json['path'];

$netatmo_access_token = netatmo_access_token($username, $password, $scope, $host);


echo netatmo_post($path_send, $host, $netatmo_access_token);

function netatmo_post($path_send, $host, $netatmo_access_token)
{
    $url = $host . $path_send;

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Authorization: Bearer ' . $netatmo_access_token
    ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $server_output = curl_exec($ch);
 
    return $server_output;

}






?>

