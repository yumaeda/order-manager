<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit('Only POST is supported.');
}

$requestBody = json_decode(file_get_contents('php://input'));
if (!$requestBody ||
    !isset($requestBody->orderId) ||
    !isset($requestBody->deliveryDate) ||
    !isset($requestBody->deliveryTime) ||
    !isset($requestBody->orderContents) ||
    !isset($requestBody->trackingCode1) ||
    !isset($requestBody->trackingCode2) ||
    !isset($requestBody->paymentMethod) ||
    !isset($requestBody->memberDiscount)) {
    exit('Parameters are not set properly!');
}

$curDirPath = dirname(__FILE__);
require_once("$curDirPath/../defines.php");
require("$curDirPath/../../../includes/config.inc.php");
require(MYSQL);

function getTotalPrice($dbc, $contents, $fMember) {
    $total = 0;

    $tokens = explode(';', $contents);
    foreach ($tokens as $token) {
        $subTokens = explode('#', $token);
        $code = $subTokens[0];
        $qty  = $subTokens[1];
        
        prepareNextQuery($dbc);
        if (($code < 50000) || ($code >= 100000)) {
            $result = mysqli_query($dbc, "CALL get_wine('$code')");
            if ($result !== FALSE) {
                $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
                $price = $fMember ? $row['member_price'] : $row['price'];

                $total += ($qty * $price);
            }
        }
    }

    return $total;
}

function getTransactionId($dbc, $id) {
    $escapedId = mysqli_real_escape_string ($dbc, $id);

    return (strlen($escapedId) !== 14) ? '0000-0000-0000' : $escapedId;
}

$orderId = mysqli_real_escape_string($dbc, $requestBody->orderId);
$paymentMethod  = intval($requestBody->paymentMethod);
$deliveryDate   = mysqli_real_escape_string($dbc, $requestBody->deliveryDate);
$deliveryTime   = mysqli_real_escape_string($dbc, $requestBody->deliveryTime);
$orderContents  = mysqli_real_escape_string($dbc, $requestBody->orderContents);
$transactionId  = getTransactionId($dbc, $requestBody->trackingCode1);
$transactionId2 = getTransactionId($dbc, $requestBody->trackingCode2);
$fMember        = intval($requestBody->memberDiscount);
$wineTotal      = getTotalPrice($dbc, $orderContents, $fMember);

prepareNextQuery($dbc);
if (mysqli_query($dbc, "CALL set_shipping_datetime('$orderId', '$deliveryDate', '$deliveryTime')") !== FALSE) {
    prepareNextQuery($dbc);
    if (mysqli_query($dbc, "CALL set_payment_method('$orderId', $paymentMethod)") !== FALSE) {
        prepareNextQuery($dbc);
        if (mysqli_query($dbc, "CALL set_order_contents('$orderId', '$orderContents', $wineTotal, '$transactionId', '$transactionId2')") !== FALSE) {
            echo 'SUCCESS';
        }
    }
}

mysqli_close($dbc);

?>
