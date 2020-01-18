<?php

include 'sensibo_config.php';

$json = $_POST['myData'];
$decoded_json = json_decode($json, true);
$reason = $decoded_json['reason'];

if ($reason == 'measurements'){

  $path = '/api/v2/pods/' . $device_id . '/measurements?apiKey=' . $api_key;
  echo server_response($path, $host);

} else if ($reason == 'acStates'){

  $path = '/api/v2/pods/' . $device_id . '/acStates?apiKey=' . $api_key;
  echo server_response($path, $host);
}

function server_response($path, $host){

$request_url = $host . $path;
$curl = curl_init($request_url);

curl_setopt($curl, CURLOPT_HTTPHEADER, [
  'Content-Type: application/json'
]);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
curl_close($curl);

return $response;
}

?>