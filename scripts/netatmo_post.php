<?php

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

    $server_output_decoded["date"] = date("H:i:s");


    if (isset($server_output_decoded['error']['message']) && !empty($server_output_decoded['error']['message'])){

        echo "</br> Failed to send/receive data from Netatmo. ERROR: " . $server_output_decoded['error']['message'] . ' Time: ' . date("H:i:s") . '</br>';

    } else {

        echo "</br> Data received/sent!"  . ' Time: ' . date("H:i:s") . '</br>';
        return $server_output_decoded;
        
    }

}

?>