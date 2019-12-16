<?php
    require "init.php";
    $stageDate = $_POST["stageDate"];
    $stageName = $_POST["stageName"];
    $orderIdShort = $_POST["orderIdShort"];
    $cancelReason = $_POST["cancelReason"];

    $sql_query1="INSERT INTO `order_stage_date` (`order_id`,`stage`,`date`) VALUES ('$orderIdShort','$stageName','$stageDate')";
    $result1 = mysqli_query($con2, $sql_query1);

    $sql_query2="UPDATE `purchase_order` SET `order_status`= '$stageName',`cancellation_message`='$cancelReason' WHERE `orderid`= '$orderIdShort' ";
    $result2 = mysqli_query($con2, $sql_query2);

    if(! $result1 && ! $result2)
    {
        $response ="Error";
    }
    else
    {
        $response ="Success";
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($response);
?>