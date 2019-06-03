<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit('Only POST is supported.');
}

$requestBody = json_decode(file_get_contents('php://input'));
if (!$requestBody ||
    !isset($requestBody->orderId) ||
    !isset($requestBody->action) ||
    !isset($requestBody->status)) {
    exit('Invalid parameters.');
}

$curDirPath = dirname(__FILE__);
require_once("$curDirPath/../defines.php");
require("$curDirPath/../../../includes/config.inc.php");
require(MYSQL);

$action = mysqli_real_escape_string ($dbc, $requestBody->action);
if ($action === 'update')
{
    $orderId = mysqli_real_escape_string($dbc, $requestBody->orderId);
    $status  = mysqli_real_escape_string($dbc, $requestBody->status);
    mysqli_query($dbc, "CALL set_order_status('$orderId', $status)");
}

mysqli_close($dbc);

?>
