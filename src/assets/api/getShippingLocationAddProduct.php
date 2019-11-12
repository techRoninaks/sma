<?php
require "init.php";
$seller_id = $_POST['seller_id'];
$sql_query = "SELECT * FROM `shop_details` WHERE `seller_id` = $seller_id ";
$result = mysqli_query($con2, $sql_query);
$row=mysqli_fetch_assoc($result);
$locaId  = $row['shipping_locations'];
$sql_query = "SELECT * FROM `shipping_location_shop`  WHERE `id` = $locaId ";
$result = mysqli_query($con2, $sql_query);
$count =0;
$data = array();
while($row=mysqli_fetch_assoc($result))
{
    $data = array('id'=>$row["id"],'location_alias'=>$row["location_alias"],'shop_id'=>$row["pincode"],'shop_id'=>$row["pincode"]);
}
echo json_encode($data);
?>