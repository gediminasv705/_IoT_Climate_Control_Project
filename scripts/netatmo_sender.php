
<?php

include 'netatmo_getter.php';

//gaunu access token ir nustatau reikiamą scope
$scope = 'write_thermostat';
$netatmo_access_token = netatmo_access_token($username, $password, $scope, $host);

$send_set_temp = 22;

$path = "/api/setroomthermpoint?home_id=" . $home_id . "&room_id=" . $room_id ."&mode=manual&temp=" . $send_set_temp;
$netatmo_data_received = netatmo_post($path, $host, $netatmo_access_token);

print_r ($netatmo_data_received);

?>