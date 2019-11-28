<?php
require "init.php";
$seller_id = $_POST['sellerId'];
$primaryArea = $_POST['primaryArea'];
$SecondaryArea = $_POST['SecondaryArea'];
$data ="";

$sql_query = "SELECT * FROM `shop_details` WHERE `seller_id` = $seller_id";
$result = mysqli_query($con2, $sql_query);
$row=mysqli_fetch_assoc($result);
$shopId = $row['id'];
$result = "";

if($primaryArea == "All over India"){
    $sql_query = "INSERT INTO `shipping_location_shop`(`location_alias`, `shop_id`, `pincode`) VALUES ('ALL INDIA',$shopId,'')";
    $result = mysqli_query($con2, $sql_query);
}
if($primaryArea == "All over State"){
    $sql_query = "INSERT INTO `shipping_location_shop`(`location_alias`, `shop_id`, `pincode`) VALUES ('ALL STATE',$shopId,'')";
    $result = mysqli_query($con2, $sql_query);
}
if($primaryArea == "All over District"){
    $sql_query = "INSERT INTO `shipping_location_shop`(`location_alias`, `shop_id`, `pincode`) VALUES ('ALL DISTRICT',$shopId,'')";
    $result = mysqli_query($con2, $sql_query);
}
if($primaryArea == "All over City"){
    $sql_query = "INSERT INTO `shipping_location_shop`(`location_alias`, `shop_id`, `pincode`) VALUES ('ALL CITY',$shopId,'')";
    $result = mysqli_query($con2, $sql_query);
}
if($primaryArea == "All over Post Office"){
    $sql_query = "INSERT INTO `shipping_location_shop`(`location_alias`, `shop_id`, `pincode`) VALUES ('ALL POST OFFICE',$shopId,'')";
    $result = mysqli_query($con2, $sql_query);
}

$sql_query = "SELECT * FROM `shipping_location_shop` ORDER BY `id` DESC LIMIT 1 ";
$result = mysqli_query($con2, $sql_query);
$row=mysqli_fetch_assoc($result);
$locationId = $row['id'];
$sql_query = "UPDATE `shop_details` SET `shipping_locations`='$locationId' WHERE `seller_id` = $seller_id ";
$result = mysqli_query($con2, $sql_query);
echo $sql_query;


if($result){
    echo "1";
}
else{
    echo '0';
}
?>