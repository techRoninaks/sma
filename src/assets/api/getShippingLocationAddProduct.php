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
$locaName  = "";
while($row=mysqli_fetch_assoc($result))
{
    switch($row["location_alias"]){
        case "ALL STATE":
        $locaName = "My State";
        break;
        case "ALL CITY":
        $locaName = "My City";
        break;
        case "ALL DISTRICT":
        $locaName = "My District";
        break;
        case "ALL INDIA":
        $locaName = "All Over India";
        break;
    }
    $data = array('id'=>$row["id"],'location_alias'=>$row["location_alias"],'quantity_price'=> 0,'price'=> 0);
}
echo json_encode($data);
?>