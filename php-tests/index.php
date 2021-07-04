<?php

$data = [
    'test' => 1,
    'test2' => 10
];

$url = "http://127.0.0.1/test.php";
//$data = array('field1' => 'value', 'field2' => 'value');
$options = array(
    'http' => array(
        'header'  => "Content-type: application/json\r\n",
        'method'  => 'POST',
        'content' => json_encode($data),
    )
);

$context  = stream_context_create($options);
$result = file_get_contents( $url, false, $context );
var_dump($result);
//$response = json_decode(  );