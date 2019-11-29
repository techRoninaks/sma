<?php
    require "init.php";
    $txnid = $_POST["txnid"];
    $orderId = $_POST["orderId"];
    $prodname = $_POST["prodname"];

    // $sql_query1="UPDATE `transaction_details` SET `txnid`=$txnid,`orderid`=$orderId,`status`='pending_conformation',`payment_mode`='cash',`prod_name`='$prodname' ";
    // $result1 = mysqli_query($con2, $sql_query1);
    $sql_query1="INSERT INTO `transaction_details`( `txnid`, `orderid`, `status`, `payment_mode`, `prod_name`) VALUES ('$txnid',$orderId,'pending_conformation','internet','$prodname')";
    $result1 = mysqli_query($con2, $sql_query1);
    echo $sql_query1;
    // $sql_query2="UPDATE `purchase_order` SET `order_status`= '$stageName' WHERE `orderid`= '$orderIdShort' ";
    // $result2 = mysqli_query($con2, $sql_query2);

    if(!$result1)
    {
        $response ="Error";
    }
    else
    {
        $response ="Success";
    }
    echo json_encode($response);
?>