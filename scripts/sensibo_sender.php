<?php

include 'sensibo_config.php';
include 'sensibo_settings.php';

$collection_name = '/api/v2/pods/' . $device_id . '/acStates?apiKey=' . $api_key;

$request_url = $host . $collection_name;


$curl = curl_init($request_url);

$data = '{
    "acState":{
        "on": ' . $sensibo_on . ',
        "mode": ' . $sensibo_mode . ',
        "fanLevel": ' . $sensibo_fan_level . ',
        "targetTemperature": ' . $sensibo_target_temp . ',
        "temperatureUnit": ' . $sensibo_temp_unit . ',
        "swing": ' . $sensibo_swing . '
    }
}';

curl_setopt($curl, CURLOPT_URL, $request_url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, [
  'Content-Type: application/json'
]);

$response = curl_exec($curl);
curl_close($curl);

echo $response;

?>