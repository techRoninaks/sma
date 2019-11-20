<?php
require "init.php";
$seller_id = $_POST['seller_id'];
$data = array();
$catgegoryid;
$sql_query = "SELECT * FROM `shop_details`  WHERE `seller_id`='$seller_id'";
$result = mysqli_query($con2, $sql_query);
$row=mysqli_fetch_assoc($result);
$locationId = $row['shipping_locations'];

$sql_query = "SELECT * FROM `shipping_location_shop` WHERE `id` = $locationId";
$result = mysqli_query($con2, $sql_query);
while($row=mysqli_fetch_assoc($result))
{
    $data = $data + array('id'=>$row["id"],'location_alias'=>$row["location_alias"],'shop_id'=>$row["shop_id"]);
}

// $pincodeArray = explode(",",$pincode);
// // $locId =  rtrim($locId, ',');
// $count = 0;
// foreach($pincodeArray as $value){
//     $sql_query = "SELECT * FROM `location` WHERE `pincode`= '$value'";
//     $result = mysqli_query($con2, $sql_query);
//     $row=mysqli_fetch_assoc($result);
//     $data[$count++] = array('state'=>$row['state'],'district'=>$row['district'],'city'=>$row['division_name'],'postoffice'=>$row['office_name']);
//     // echo $value."\r\n";
//   }

echo json_encode($data);
?>