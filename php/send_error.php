<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit('Only POST is supported.');
}

$requestBody = json_decode(file_get_contents('php://input'));
if (!$requestBody || !isset($requestBody->errorMessage)) {
    exit('Invalid parameters.');
}

error_log($requestBody->errorMessage, 1, 'yumaeda@gmail.com');

?>
