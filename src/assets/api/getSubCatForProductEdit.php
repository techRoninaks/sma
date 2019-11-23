<?php
require "init.php";
$sub = $_POST['sub'];
$data = array();
$sub = explode(",", $sub);
foreach($sub as $val){
    $sql_query = "SELECT * FROM `category` WHERE `category_id` = $val ";
    $result = mysqli_query($con1, $sql_query);
    $row=mysqli_fetch_assoc($result);
    $data[]= array("id"=>$row['category_id'],"val"=>$row['category']);
}
// $sql_query = "SELECT * FROM `shop_details` WHERE `seller_id` = $seller_id ";
// $result = mysqli_query($con2, $sql_query);
// $row=mysqli_fetch_assoc($result);
// $locaId  = $row['shipping_locations'];
// $sql_query = "SELECT * FROM `shipping_location_shop`  WHERE `id` = $locaId ";
// $result = mysqli_query($con2, $sql_query);
// $count =0;
// $data = array();
// $locaName  = "";
// while($row=mysqli_fetch_assoc($result))
// {

// }
echo json_encode($data);
?>