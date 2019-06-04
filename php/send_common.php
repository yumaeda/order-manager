<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit('Only POST is supported.');
}

$requestBody = json_decode(file_get_contents('php://input'));
if (!$requestBody || !isset($requestBody->orderId)) {
    exit('Invalid parameters.');
}

if (!isset($curDirPath)) {
    $curDirPath = dirname(__FILE__);
}

require_once("$curDirPath/../defines.php");
require("$curDirPath/../../../includes/config.inc.php");
require(MYSQL);

$orderId = mysqli_real_escape_string($dbc, $requestBody->orderId);
