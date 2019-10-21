<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $val = $_POST["val"];
    $type = $_POST["type"];

    $data = array();
    if ($type == 'bio') {
        $sql_query = "UPDATE `shop_details` SET `description`='$val' WHERE `id`=$shopId";
        $result = mysqli_query($con2, $sql_query);
    } 
    else if ($type == 'ship') {
        $sql_query = "UPDATE `shop_details` SET `shipping_policy`='$val' WHERE `id`=$shopId";
        $result = mysqli_query($con2, $sql_query);
    }
    else if ($type == 'shop') {
        $sql_query = "UPDATE `shop_details` SET `shop_policy`='$val' WHERE `id`=$shopId";
        $result = mysqli_query($con2, $sql_query);
    }
    else if ($type == 'prod') {
        $sql_query = "UPDATE `shop_details` SET `product_policy`='$val' WHERE `id`=$shopId";
        echo $sql_query;
        $result = mysqli_query($con2, $sql_query);
    }
    else if ($type == 'return') {
        $sql_query = "UPDATE `shop_details` SET `return_policy`='$val' WHERE `id`=$shopId";
        // echo $sql_query;
        $result = mysqli_query($con2, $sql_query);
    }
    echo $result;
?>