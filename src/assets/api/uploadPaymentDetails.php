<?php
require "init.php";
$seller_id = $_POST['seller_id'];
$shippingform = $_POST['shippingform'];
$shippingmode = $_POST['shippingmode'];
$accountholder = $_POST['accountholder'];
$accounttype = $_POST['accounttype'];
$accountno = $_POST['accountno'];
$ifsc = $_POST['ifsc'];
$bankname = $_POST['bankname'];
$data = array();

// echo $shippingmode;
$loc = explode(",", $shippingmode);
$locId = "";
foreach($loc as $value){
    $sql_query = "SELECT * FROM `shippingoptions` WHERE `shippingoption` LIKE '%$value%'";
    $result = mysqli_query($con1, $sql_query);
    $row=mysqli_fetch_assoc($result);
    $locId = $locId.$row["id"].',';
  }
  $locId =  rtrim($locId, ',');
//   echo $locId;
$sql_query = "UPDATE `shop_details` SET `shop_location`='$shippingform',`shipping_option_id`='$locId' WHERE `seller_id` = '$seller_id'";
$result = mysqli_query($con2, $sql_query);

$sql_query = "UPDATE `seller` SET `account_no`='$accountno',`account_holder`='$accountholder',`account_type`='$accounttype',`bankname`='$bankname',`ifsc`='$ifsc' WHERE `id` = '$seller_id'";
// echo $sql_query;
$result = mysqli_query($con2, $sql_query);

if($result){
    echo "1";
}
else{
    echo '0';
}
?>