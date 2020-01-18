<?php

include 'netatmo_config.php';

function netatmo_access_token($username, $password, $scope, $host, $client_id, $client_secret)
{
    $url = $host . "/oauth2/token";

    $ch = curl_init();

    $data = [
        'grant_type' => 'password',
        'client_id' => $client_id,
        'client_secret' => $client_secret,
        'username' => $username,
        'password' => $password,
        'scope' => $scope
    ];

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('application/x-www-form-urlencoded;charset=UTF-8'));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $server_output = curl_exec($ch);
    $server_output_decoded = json_decode($server_output, true);
    $access_token = $server_output_decoded['access_token'];
    return $access_token;
}

?>