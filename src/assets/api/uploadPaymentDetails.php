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
$shippingLoc = $_POST['shippingLoc'];
$data = array();

// echo $shippingmode;
$loc = explode(",", $shippingmode);
$locId = "";
$shippingmode = rtrim($shippingmode,",");

$sql_query = "SELECT * FROM `shop_details` WHERE `seller_id` = $seller_id";
$result = mysqli_query($con2, $sql_query);
$row=mysqli_fetch_assoc($result);
$shopId = $row['id'];

$sql_query = "DELETE FROM `shipping_location_shop` WHERE `shop_id` = $shopId";
$result = mysqli_query($con2, $sql_query);
// echo $sql_query;

foreach($loc as $value){
    $sql_query = "SELECT * FROM `shippingoptions` WHERE `shippingoption` LIKE '%$value%'";
    $result = mysqli_query($con1, $sql_query);
    $row=mysqli_fetch_assoc($result);
    $locId = $locId.$row["id"].',';
  }
  $locId =  rtrim($locId, ',');
$shippingLoc = explode("," ,$shippingLoc);

$sql = "SELECT * FROM `seller` WHERE id = $seller_id";
$res = mysqli_query($con2, $sql);
$row = mysqli_fetch_assoc($res);
$addressid = $row['addr_id'];

foreach($shippingLoc as $value){
        if($value == "All over India"){
            $sql_query = "INSERT INTO `shipping_location_shop`(`location_alias`, `shop_id`, `pincode`) VALUES ('$value',$shopId,(select GROUP_CONCAT(distinct pincode SEPARATOR ', ') from smausr.location))";
            $result = mysqli_query($con2, $sql_query);
            // echo $sql_query;
        }
        else if($value == "My State"){
            $sql = "SELECT * FROM `address` WHERE id = $addressid";
            $res = mysqli_query($con2, $sql);
            $row = mysqli_fetch_assoc($res);
            $loc = $row['state'];
            $loc = preg_replace('/\s/', '', $loc);
            $sql_query = "INSERT INTO `shipping_location_shop`(`location_alias`, `shop_id`, `pincode`) VALUES ('$value',$shopId,(select GROUP_CONCAT(distinct pincode SEPARATOR ', ') from smausr.location where state like '$loc'))";
            $result = mysqli_query($con2, $sql_query);
            echo $sql_query;
        }
        else if($value == "My City"){
            $sql = "SELECT * FROM `address` WHERE id = $addressid";
            $res = mysqli_query($con2, $sql);
            $row = mysqli_fetch_assoc($res);
            $loc = $row['city'];
            $loc = preg_replace('/\s/', '', $loc);
            $sql_query = "INSERT INTO `shipping_location_shop`(`location_alias`, `shop_id`, `pincode`) VALUES ('$value',$shopId,(select GROUP_CONCAT(distinct pincode SEPARATOR ', ') from smausr.location where city like '$loc'))";
            $result = mysqli_query($con2, $sql_query);
            echo $sql_query;
        }
        else if($value == "My District"){
            $sql = "SELECT * FROM `address` WHERE id = $addressid";
            $res = mysqli_query($con2, $sql);
            $row = mysqli_fetch_assoc($res);
            $loc = $row['district'];
            $loc = preg_replace('/\s/', '', $loc);
            $sql_query = "INSERT INTO `shipping_location_shop`(`location_alias`, `shop_id`, `pincode`) VALUES ('$value',$shopId,(select GROUP_CONCAT(distinct pincode SEPARATOR ', ') from smausr.location where district like '$loc'))";
            $result = mysqli_query($con2, $sql_query);
            echo $sql_query;
        }
        else{
            $val  = explode("_",$value);
            $locationName = $val[1];
            $locationPincode = $val[0];
            $sql_query = "INSERT INTO `shipping_location_shop`(`location_alias`, `shop_id`, `pincode`) VALUES ('$locationName',$shopId,'$locationPincode')";
            $result = mysqli_query($con2, $sql_query);
        }

}
$shippingLocations = "";
$sql_query = "SELECT * FROM `shipping_location_shop` where shop_id = $shopId";
$result = mysqli_query($con2, $sql_query);
while($row = mysqli_fetch_assoc($result)){
    $shippingLocations = $shippingLocations.$row['id'].",";
}

$shippingLocations =  rtrim($shippingLocations, ',');

$sql_query = "UPDATE `shop_details` SET `shop_location`='$shippingform',`shipping_option_id`='$locId', `shipping_locations`= '$shippingLocations' WHERE `seller_id` = '$seller_id'";
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
mysqli_close($con1);
mysqli_close($con2);
?>