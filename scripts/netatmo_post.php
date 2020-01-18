<?php

include 'netatmo_auth.php';

function netatmo_post($path_send, $host, $netatmo_access_token)
{
    $url = $host . $path_send;

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: Bearer ' . $netatmo_access_token));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $server_output = curl_exec($ch);

    return $server_output;
}

?>