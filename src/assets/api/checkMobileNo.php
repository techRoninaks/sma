<?php
include("init.php");

$status ="";

$fp_mobile_no = $_POST['fp_mobile_no'];

$sql = "SELECT Name FROM user WHERE phone1 = '$fp_mobile_no'";
$sql1 = "SELECT `seller_name` FROM seller WHERE phone1 = '$fp_mobile_no'";

$result=mysqli_query($con2,$sql);
$result1=mysqli_query($con2,$sql1);

$row=mysqli_fetch_array($result);
$row1=mysqli_fetch_array($result1);

if($row || $row1)
    {
        $status = "Found";
        echo json_encode($status);
    }
    else
    {
        $status = "Not Found";
        echo json_encode($status);
    }
    mysqli_close($con1);
    mysqli_close($con2);
?>