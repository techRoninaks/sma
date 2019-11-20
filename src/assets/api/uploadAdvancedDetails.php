<?php
require "init.php";
$seller_id = $_POST['seller_id'];
$responseInput = $_POST['responseInput'];
$processInput = $_POST['processInput'];
$cancellInput = $_POST['cancellInput'];
$giftInput = $_POST['giftInput'];
$deliver_by_date = $_POST['deliver_by_date'];
$rfq = $_POST['rfq'];
$order_confirmation = $_POST['order_confirmation'];
$data = array();
$giftBool = '0';
$deliver_by_dateBool = '0';
$rfqBool = '0';
$order_confirmationBool = '0';

if($giftInput == 'true'){
    $giftBool = '1';
}
if($deliver_by_date == 'true'){
    $deliver_by_dateBool = '1';
}
if($rfq == 'true'){
    $rfqBool = '1';
}
if($order_confirmation == 'true'){
    $order_confirmationBool = '1';
}

// echo $order_confirmationBool.$rfqBool.$deliver_by_dateBool.$giftBool;
$sql_query = "UPDATE `shop_details` SET `gift_option`= $giftBool,`order_confirmation`= $order_confirmationBool,`rfq`= $rfqBool,`deliver_by_date`= $deliver_by_dateBool,`auto_cancellation_time`= '$cancellInput',`avg_processing_time`= '$processInput',`avg_response_time`= '$responseInput' WHERE `id` = '$seller_id'";
// echo $sql_query;
$result = mysqli_query($con2, $sql_query);

if($result){
    echo "1";
}
else{
    echo '0';
}
?>