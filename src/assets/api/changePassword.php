<?php
    require "init.php";
    $status="";
    $newPassword = $_POST['new_password'];
    $mobileNo = $_POST['fp_mobile_no'];

    $sql="UPDATE user SET password='$newPassword' WHERE phone1 = '$mobileNo'";

    if (mysqli_query($con2,$sql))
    {
        $status="ChangedPassword";
        echo json_encode($status);
    }
    else
    {
        $status="Error";
        echo json_encode($status);
    }
    
?>