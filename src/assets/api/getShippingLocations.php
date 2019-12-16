<?php
require "init.php";
$seller_id = $_POST['seller_id'];
$data = array();
$catgegoryid;
$sql_query = "SELECT * FROM `shop_details`  WHERE `seller_id`='$seller_id'";
$result = mysqli_query($con2, $sql_query);
$row=mysqli_fetch_assoc($result);
$locationId = $row['shipping_locations'];

$locationId = explode(",", $locationId);

foreach($locationId  as $val){
    $sql_query = "SELECT * FROM `shipping_location_shop` WHERE `id` = $val";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result))
    {
        $data[] = $row["location_alias"];
    }
}

mysqli_close($con1);
mysqli_close($con2);


echo json_encode($data);
?>