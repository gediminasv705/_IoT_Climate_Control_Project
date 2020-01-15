<?php

include 'sensibo_config.php';

$sensibo_settings = '/api/v2/pods/' . $device_id . '/acStates?apiKey=' . $api_key;
$sensibo_measurements = '/api/v2/pods/' . $device_id . '/measurements?apiKey=' . $api_key;


function server_response($collection_name, $host) {

$request_url = $host . $collection_name;
$curl = curl_init($request_url);

curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, [
  'Content-Type: application/json'
]);
$response = curl_exec($curl);
curl_close($curl);

return $response;
}

$settings_json = json_decode(server_response($sensibo_settings, $host), true);
$measurements_json = json_decode(server_response($sensibo_measurements, $host), true);

print_r(server_response($sensibo_settings, $host));

$sensibo_status = $settings_json['result']['0']['status'];
$sensibo_reason = $settings_json['result']['0']['reason'];
$sensibo_target_temp = $settings_json['result']['0']['acState']['targetTemperature'];
$sensibo_target_temp_unit = $settings_json['result']['0']['acState']['temperatureUnit'];
$sensibo_target_temp_unit = $settings_json['result']['0']['acState']['temperatureUnit'];
$sensibo_is_on = $settings_json['result']['0']['acState']['on'];
$sensibo_mode = $settings_json['result']['0']['acState']['mode'];
$sensibo_fan_level = $settings_json['result']['0']['acState']['fanLevel'];
$sensibo_changed_properties =  $settings_json['result']['0']['changedProperties'];

$sensibo_measured_temp = $measurements_json['result']['0']['temperature'];
$sensibo_measured_humidity = $measurements_json['result']['0']['humidity'];

?>