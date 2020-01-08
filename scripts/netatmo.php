<?php

// $username = 'YOUR_USERNAME';
// $pwd = 'YOUR_PWD';
// $client->setVariable('username', $username);
// $client->setVariable('password', $pwd);
// try
// {
//     $tokens = $client->getAccessToken();
//     $refresh_token = $tokens['refresh_token'];
//     $access_token = $tokens['access_token'];
// }
// catch(Netatmo\Exceptions\NAClientException $ex)
// {
//     echo "An error occcured while trying to retrive your tokens \n";
// }

// https://api.netatmo.com/oauth2/authorize?
//     client_id=[YOUR_APP_ID]
//     &redirect_uri=[YOUR_REDIRECT_URI]
//     &scope=[SCOPE_DOT_SEPARATED]
//     &state=[SOME_ARBITRARY_BUT_UNIQUE_STRING]


//     [YOUR_REDIRECT_URI]?state=[YOUR_STATE_VALUE]code=[NETATMO_GENERATED_CODE]


////////////////// auth examplw


    // POST /oauth2/token HTTP/1.1
    // Host: api.netatmo.com
    // Content-Type: application/x-www-form-urlencoded;charset=UTF-8

    // grant_type=authorization_code
    // client_id=[YOUR_APP_ID]
    // client_secret=[YOUR_CLIENT_SECRET]
    // code=[CODE_RECEIVED_FROM_USER]
    // redirect_uri=[YOUR_REDIRECT_URI]
    // scope=[SCOPE_DOT_SEPARATED]



$url = "https://api.netatmo.com/oauth2/token";

echo "Puslapis: " . $url . "</br></br>";

$ch = curl_init();


// $data =     ['grant_type'=>'authorization_code',
//             'client_id'=>'5e1356846bd26250937415a0',
//             'client_secret'=>'zwCqRoMQ3GzsNqScjtE1tAuwXeDJG8aLatLkMEUTTn',
//             'code'=> $_GET['code']];


$data =     ['grant_type'=>'password',
            'client_id'=>'5e1356846bd26250937415a0',
            'client_secret'=>'zwCqRoMQ3GzsNqScjtE1tAuwXeDJG8aLatLkMEUTTn',
            'username'=>'',
            'password'=>'',
            'scope'=>'read_thermostat'];

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('application/x-www-form-urlencoded;charset=UTF-8'));


// receive server response ...
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec ($ch);

echo ("Serverio atsakymas: " . $server_output);

curl_close ($ch);

// further processing ....
//if ($server_output == "OK") { ... } else { ... }



    

?>


<!-- https://api.netatmo.com/oauth2/authorize?
    client_id=5e1356846bd26250937415a0
    &redirect_uri=http://localhost/projektas/scripts/netatmo.php -->