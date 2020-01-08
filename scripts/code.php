<?php


$sensibo_settings = file_get_contents("https://home.sensibo.com/api/v2/pods/Qk8wtzgS/acStates?apiKey=ffIwr5QwqJOYLR6np0pB0Qudp9hR76");
$sensibo_measurements = file_get_contents("https://home.sensibo.com/api/v2/pods/Qk8wtzgS/measurements?apiKey=ffIwr5QwqJOYLR6np0pB0Qudp9hR76");

$sensibo_json = json_decode($sensibo_settings, true);
$measurements_json = json_decode($sensibo_measurements, true);

$sensibo_status = $sensibo_json['result']['0']['status'];
$sensibo_reason = $sensibo_json['result']['0']['reason'];
$sensibo_target_temp = $sensibo_json['result']['0']['acState']['targetTemperature'];
$sensibo_target_temp_unit = $sensibo_json['result']['0']['acState']['temperatureUnit'];
$sensibo_target_temp_unit = $sensibo_json['result']['0']['acState']['temperatureUnit'];
$sensibo_is_on = $sensibo_json['result']['0']['acState']['on'];
$sensibo_mode = $sensibo_json['result']['0']['acState']['mode'];
$sensibo_fan_level = $sensibo_json['result']['0']['acState']['fanLevel'];
$sensibo_changed_properties =  $sensibo_json['result']['0']['changedProperties'];


 function sensibo_failure_reason(){
    if ( empty($sensibo_json['result']['0']['failureReason'])) {

         echo "No failures detected";

    } else {

        echo $sensibo_json['result']['0']['failureReason'];
    }
}

;

$sensibo_measured_temp = $measurements_json['result']['0']['temperature'];
$sensibo_measured_humidity = $measurements_json['result']['0']['humidity'];

?>