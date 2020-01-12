<?php

$url = "https://api.netatmo.com/oauth2/token";
$host = "https://api.netatmo.com/api/";

$client_id = '5e1356846bd26250937415a0';
$client_secret = 'zwCqRoMQ3GzsNqScjtE1tAuwXeDJG8aLatLkMEUTTn';
$username = 'ona.sacikauskiene@gmail.com';
$password = 'Netatmo@uzusienio116';
$scope = 'read_thermostat';

$ch = curl_init();

//password authorisation

$data =     [
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


// receive server response ...

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec($ch);

$server_output_decoded = json_decode($server_output, true);

$server_refresh_token = $server_output_decoded['refresh_token'];

$server_access_token = $server_output_decoded['access_token'];

echo ("Serverio atsakymas: " . $server_output . "</br></br></br>");

echo ("Server refresh token: " . $server_refresh_token . "</br></br></br>");

echo ("Server access token: " . $server_access_token . "</br></br></br>");

// token authorisation

$url_token = "https://api.netatmo.com/api/homesdata";

curl_setopt($ch, CURLOPT_URL, $url_token);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Bearer ' . $server_access_token
));

$server_output = curl_exec($ch);;
$server_output_decoded = json_decode($server_output, true);

$home_id = $server_output_decoded['body']['homes']['1']['id'];
$room_id = $server_output_decoded['body']['homes']['1']['rooms']['0']['id'];
// $received_set_temp = $server_output_decoded['body']['homes']['1']['therm_schedules']['0']['zones']['2']['rooms_temp']['0']['temp'];

echo "home id:  " . $home_id . "</br></br></br>";
echo "room id:  " . $room_id . "</br></br></br>";
echo "</br></br></br>";

// echo $server_output;

// homestatus

$url_token = "https://api.netatmo.com/api/homestatus?home_id=" . $home_id;

curl_setopt($ch, CURLOPT_URL, $url_token);
curl_setopt($ch, CURLOPT_HTTPGET, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Bearer ' . $server_access_token
));

// homestatus i ekrana
$homestatus_output = curl_exec($ch);
$homestatus_output_decoded = json_decode($homestatus_output, true);

print_r ($homestatus_output);

echo "</br></br></br>";

$received_set_temp = $homestatus_output_decoded['body']['home']['rooms']['0']['therm_setpoint_temperature'];


echo "</br></br></br>";


// Temperatūros gavimas

$url_token = $host . "getroommeasure?home_id=" . $home_id . "&room_id=" . $room_id . "&scale=30min&type=temperature&limit=2&optimize=false&real_time=true";

curl_setopt($ch, CURLOPT_URL, $url_token);
curl_setopt($ch, CURLOPT_HTTPGET, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Bearer ' . $server_access_token
));

$temperature_output = curl_exec($ch);
$temperature_output_decoded = json_decode($temperature_output, true);

//gaunamas paskutinis temperatūros matavimas
$last_temp = end($temperature_output_decoded['body'])['0'];

echo "Last temp: " . $last_temp;


echo "</br></br></br>";




// Bandymai su temperature


//Nustatau SCOPE į WRITE THERMOSTAT

$ch = curl_init();

$data =     [
    'grant_type' => 'password',
    'client_id' => $client_id,
    'client_secret' => $client_secret,
    'username' => $username,
    'password' => $password,
    'scope' => 'write_thermostat'
];

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

echo curl_exec($ch);

//  Keičiu patalpos temperatūrą

$send_set_temp = '22';

echo "</br></br></br>";
echo "Send_set temp: " . $send_set_temp;
echo "</br></br></br>";
echo "Last temp: " . $last_temp;
echo "</br></br></br>";
echo "received set temp: " . $received_set_temp;
echo "</br></br></br>";

$url_token = "https://api.netatmo.com/api/setroomthermpoint?home_id=" . $home_id . "&room_id=" . $room_id ."&mode=manual&temp=" . $send_set_temp;


$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url_token);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Bearer ' . $server_access_token,
));


echo "</br></br></br>";

curl_exec($ch);



curl_close($ch);


?>