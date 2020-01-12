<?php

$url = "https://api.netatmo.com/oauth2/token";

$ch = curl_init();

$data =     [`
    'grant_type' => 'password',
    'client_id' => '5e1356846bd26250937415a0',
    'client_secret' => 'zwCqRoMQ3GzsNqScjtE1tAuwXeDJG8aLatLkMEUTTn',
    'username' => '',
    'password' => ''
];

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('application/x-www-form-urlencoded;charset=UTF-8'));


// receive server response ...
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec($ch);

$server_output_decoded = json_decode($server_output, true);

$server_refresh_token = $server_output_decoded['refresh_token'];

$server_access_token = $server_output_decoded['access_token'];

echo ("Serverio atsakymas: " . $server_output . "</br></br>");

echo ("Server refresh token: " . $server_refresh_token . "</br></br>");

echo ("Server access token: " . $server_access_token . "</br></br>");

curl_close($ch);



$url2 = "https://api.netatmo.com/api/homesdata";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url2);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Bearer ' . $server_access_token
));

$server_output = curl_exec($ch);

echo (" Antras serverio atsakymas: " . curl_exec($ch));

curl_close($ch);

?>
