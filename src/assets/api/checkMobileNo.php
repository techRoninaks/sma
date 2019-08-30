<?php
include("init.php");

$status ="";

$fp_mobile_no = $_POST['fp_mobile_no'];

$sql = "SELECT Name FROM user WHERE phone1 = '$fp_mobile_no'";

$result=mysqli_query($con2,$sql);

$row=mysqli_fetch_array($result);

if($row)
    {
        $status = "Found";
        echo json_encode($status);
    }
    else
    {
        $status = "Not Found";
        echo json_encode($status);
    }
?>