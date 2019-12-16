<?php
require "init.php";
$seller_id = $_POST['seller_id'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$gst = $_POST['gst'];
$owneridtype = $_POST['owneridtype'];
$owneridno = $_POST['owneridno'];
$ownerdob = $_POST['ownerdob'];
$data = array();

$sql_query = "UPDATE `seller` SET `seller_name`='$name',`email`='$email',`dob`='$ownerdob',`gst`='$gst',`phone1`='$phone',`idcard_type`='$owneridtype',`idcardno`='$owneridno' where `id` = '$seller_id'";
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