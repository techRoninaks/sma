<?php
    require "init.php";
    header("Content-Type: application/json; charset=UTF-8");
    
    $user_id = $_POST["user_id"];
    $shipping_type = $_POST["shippingType"];
    $sql = "SELECT `orderid` FROM `purchase_order`  where  `customerid`= $user_id ORDER BY orderid DESC LIMIT 1";
    $result1 = mysqli_query($con2,$sql);

    $rowOrder=mysqli_fetch_assoc($result1);
    $orderId=$rowOrder["orderid"];
    $sql1 = "UPDATE `purchase_order` SET `shipping_option`='$shipping_type' WHERE `orderid` = '$user_id'";
    $result = mysqli_query($con2,$sql1);
    if($result){
        echo '1';
    }
    else{
        echo '0';
    }
?>

