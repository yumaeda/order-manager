<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit('Only POST is supported!');
}

if (empty($_POST['order_id']) ||
    empty($_POST['delivery_date']) ||
    empty($_POST['delivery_time']) ||
    empty($_POST['order_contents']) ||
    empty($_POST['transaction_id']) ||
    empty($_POST['transaction_id2']) ||
    !isset($_POST['payment_method']) ||
    !isset($_POST['member_discount'])) {
    exit('Parameters are not set properly!');
}

function getTotalPrice($dbc, $contents, $fMember) {
    $total = 0;

    $tokens = explode(';', $contents);
    foreach ($tokens as $token) {
        $subTokens = explode('#', $token);
        $code = $subTokens[0];
        $qty  = $subTokens[1];
        
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

$curDirPath = dirname(__FILE__);
require("$curDirPath/../../defines.php");
require_once("$curDirPath/../../../../includes/config.inc.php");
require(MYSQL);

$orderId        = mysqli_real_escape_string ($dbc, $_POST['order_id']);
$paymentMethod  = intval(mysqli_real_escape_string ($dbc, $_POST['payment_method']));
$deliveryDate   = mysqli_real_escape_string ($dbc, $_POST['delivery_date']);
$deliveryTime   = mysqli_real_escape_string ($dbc, $_POST['delivery_time']);
$orderContents  = mysqli_real_escape_string ($dbc, $_POST['order_contents']);
$transactionId  = getTransactionId($dbc, $_POST['transaction_id']);
$transactionId2 = getTransactionId($dbc, $_POST['transaction_id2']);
$fMember        = intval(mysqli_real_escape_string ($dbc, $_POST['member_discount']));
$wineTotal      = getTotalPrice($dbc, $orderContents, $fMember);

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
