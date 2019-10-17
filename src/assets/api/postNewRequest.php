<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *");
    $orderid = $_POST['orderid'] ;
    $date = $_POST['reqDate'] ;
    $data = array();
    // $count = 0;
    $sql_query = "UPDATE `customer_order` SET `delivey_date`= $date WHERE WHERE id =  $orderid";
    $result = mysqli_query($con2, $sql_query);
    //echo "hello";
    
?>