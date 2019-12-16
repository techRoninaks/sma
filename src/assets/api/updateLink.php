<?php
    require "init.php";
    $track_link = $_POST["track_link"];
    $orderId = $_POST["orderIdShort"];

    $sql_query2="UPDATE `customer_order` SET `shipping_tracking_hyperlink`= '$track_link' WHERE `orderid`= '$orderId' ";
    $result2 = mysqli_query($con2, $sql_query2);

    if(! $result2)
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