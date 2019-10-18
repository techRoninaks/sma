<?php
   require "init.php";
   $userid = $_POST['userid'];
   $message = $_POST['message'];
   $prodid =  $_POST['prodid'];
   $type = "Admin Rejected Order";

    $flag = true;
    $result = array();
    $status = "";
    $sql_query = " INSERT INTO notification (userid,message,prodid,type) VALUES ('$userid','$message','$prodid','$type')";
    $result = mysqli_query($con2, $sql_query);
    if(! $result)
    {
        $status="Error";
        echo json_encode($status);
    }
    else
    {
        $status="Success";
        echo json_encode($status);
    }
?>