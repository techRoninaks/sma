<?php
require "init.php";
$seller_id = $_POST['sellerId'];
$primaryArea = $_POST['primaryArea'];
$SecondaryArea = $_POST['SecondaryArea'];
$id = $_POST['id'];
$data ="";

$sql_query = "SELECT * FROM `shipping_location_shop` WHERE `id` = $id";
$result = mysqli_query($con2, $sql_query);
$row=mysqli_fetch_assoc($result);
$locations = $row['pincode'];
$result = "";

if($locations == "" || $locations == null){
    $allLocaion = $SecondaryArea;
}
else{
    $allLocaion = $locations.','.$SecondaryArea;
}


if($primaryArea == "All over India"){
    $sql_query = "UPDATE `shipping_location_shop` SET `location_alias`='ALL INDIA',`pincode`='$allLocaion' WHERE `id`  = $id";
    $result = mysqli_query($con2, $sql_query);
}
if($primaryArea == "All over State"){
    $sql_query = "UPDATE `shipping_location_shop` SET `location_alias`='ALL STATE',`pincode`='$allLocaion' WHERE `id`  = $id";
    $result = mysqli_query($con2, $sql_query);
}
if($primaryArea == "All over District"){
    $sql_query = "UPDATE `shipping_location_shop` SET `location_alias`='ALL DISTRICT',`pincode`='$allLocaion' WHERE `id`  = $id";
    $result = mysqli_query($con2, $sql_query);
}
if($primaryArea == "All over City"){
    $sql_query = "UPDATE `shipping_location_shop` SET `location_alias`='ALL CITY',`pincode`='$allLocaion' WHERE `id`  = $id";
    $result = mysqli_query($con2, $sql_query);
}
if($primaryArea == "All over Post Office"){
    $sql_query = "UPDATE `shipping_location_shop` SET `location_alias`='ALL POST OFFICE',`pincode`='$allLocaion' WHERE `id`  = $id";
    $result = mysqli_query($con2, $sql_query);
}
if($primaryArea == "Custom Locations"){
    $sql_query = "UPDATE `shipping_location_shop` SET `location_alias`='CUSTOM LOCATIONS',`pincode`='$SecondaryArea' WHERE `id`  = $id";
    $result = mysqli_query($con2, $sql_query);
}
// echo $sql_query;

if($result){
    echo "1";
}
else{
    echo '0';
}
mysqli_close($con1);
mysqli_close($con2);
?>