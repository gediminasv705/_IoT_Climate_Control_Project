<?php

$api_key = 'ffIwr5QwqJOYLR6np0pB0Qudp9hR76';
$device_id = 'Qk8wtzgS';

$sensibo_settings = '/api/v2/pods/' . $device_id . '/acStates?apiKey=' . $api_key;
$sensibo_measurements = '/api/v2/pods/' . $device_id . '/measurements?apiKey=' . $api_key;

function server_response($collection_name) {

// kazkodel kai host global scope neveikia
$host = 'https://home.sensibo.com';

$request_url = $host . '/' . $collection_name;
$curl = curl_init($request_url);

curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, [
  'Content-Type: application/json',
]);
$response = curl_exec($curl);
curl_close($curl);

return $response;
}

$settings_json = json_decode(server_response($sensibo_settings), true);
$measurements_json = json_decode(server_response($sensibo_measurements), true);

$sensibo_status = $settings_json['result']['0']['status'];
$sensibo_reason = $settings_json['result']['0']['reason'];
$sensibo_target_temp = $settings_json['result']['0']['acState']['targetTemperature'];
$sensibo_target_temp_unit = $settings_json['result']['0']['acState']['temperatureUnit'];
$sensibo_target_temp_unit = $settings_json['result']['0']['acState']['temperatureUnit'];
$sensibo_is_on = $settings_json['result']['0']['acState']['on'];
$sensibo_mode = $settings_json['result']['0']['acState']['mode'];
$sensibo_fan_level = $settings_json['result']['0']['acState']['fanLevel'];
$sensibo_changed_properties =  $settings_json['result']['0']['changedProperties'];


 function sensibo_failure_reason(){
    if ( empty($settings_json['result']['0']['failureReason'])) {

         echo "No failures detected";

    } else {

        echo $settings_json['result']['0']['failureReason'];
    }
}

$sensibo_measured_temp = $measurements_json['result']['0']['temperature'];
$sensibo_measured_humidity = $measurements_json['result']['0']['humidity'];

// echo 'Temp: ' . $sensibo_measured_temp . '</br></br>';
// echo 'Hum: ' . $sensibo_measured_humidity . '</br></br>';
// echo 'Status: ' . $sensibo_status . '</br></br>';
// echo 'JSON settings: ';
// print_r ($settings_json);
// echo '</br></br>';
// echo 'JSON measurements: ';
// print_r ($measurements_json);
// echo '</br></br>';
// SENSIBO CHANGE STATES
// API tikrinimas: https://apitester.com/

$collection_name = '/api/v2/pods/' . $device_id . '/acStates/on?apiKey=' . $api_key;

$host = 'https://home.sensibo.com';

$request_url = $host . '/' . $collection_name;
$curl = curl_init($request_url);

$data = [
  'newValue' => 'true'
];

print_r($data);

curl_setopt($curl, CURLOPT_URL, $host);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'PATCH');
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, [
  'Content-Type: application/x-www-form-urlencoded',
  'Referer: localhost/_IoT_Climate_Control_Project/sensibo_html.php'
]);

$response = curl_exec($curl);
curl_close($curl);

echo $response;


?>