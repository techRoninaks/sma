<?php
require "init.php";
$seller_id = $_POST['seller_id'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$gst = $_POST['gst'];
$address = $_POST['address'];
$caetegory = $_POST['category'];
$data = array();

$sql_query = "UPDATE `seller` SET `email`='$email',`gst`=$gst,`phone1`=$phone where `id` = '$seller_id'";
$result = mysqli_query($con2, $sql_query);
$sql_query = "UPDATE `shop_details` SET `shopname`='$name' WHERE `seller_id` = '$seller_id'";
$result = mysqli_query($con2, $sql_query);

$sql_query = "SELECT * FROM seller WHERE id='$seller_id'";
$result = mysqli_query($con2, $sql_query);
$row=mysqli_fetch_assoc($result);
$addressId =$row["addr_id"];
$add = explode(",",$address);
$add1 = $add[0];
$add2 = $add[1];
$add3 = $add[2];
$add4 = $add[3];
$add5 = $add[4];
$add6 = $add[5];
$add7 = $add[6];

$sql_query = "UPDATE `address` SET `addr1`= '$add1',`addr2`='$add2',`city`='$add3',`district`='$add4',`state`='$add5',`country`='$add6',`pincode`='$add7',`contact_email`='$email',`contact_number`='$phone' WHERE `id` = '$addressId'";
// echo $sql_query;
$result = mysqli_query($con2, $sql_query);

if($result){
    echo "1";
}
else{
    echo '0';
}
?>