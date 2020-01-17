<?php

include 'netatmo_auth.php';

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
 
    return $server_output;

}

$path = "/api/homesdata";

//echo netatmo_post($path, $host, $netatmo_access_token);

?>

