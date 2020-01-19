<?php

include 'sensibo_config.php';

echo sensibo_set_parameters($host, $device_id, $api_key);

function sensibo_set_parameters($host, $device_id, $api_key){

$path = '/api/v2/pods/';
$settings = $_POST['myData'];  
$decoded_json = json_decode($settings, true);

$sensibo_on = $decoded_json['sensiboOn'];
$sensibo_mode = $decoded_json['sensiboMode'];
$sensibo_fan_level = $decoded_json['sensiboFanLevel'];
$sensibo_target_temp = $decoded_json['sensiboTargetTemp'];

$request_url = $host . $path . $device_id . '/acStates?apiKey=' . $api_key;;

$curl = curl_init($request_url);

$data = '{
    "acState":{
        "on": ' . $sensibo_on . ',
        "mode": "' . $sensibo_mode . '",
        "fanLevel": "' . $sensibo_fan_level . '",
        "targetTemperature": ' . $sensibo_target_temp . ',
        "temperatureUnit": "C",
        "swing": "stopped"
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

return $response;
}


?>