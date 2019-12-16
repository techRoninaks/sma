<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $userId = $_POST["userId"];
    $data = array();

    $sql_query1 = "SELECT `shop_id` FROM `product` where prodid =  $prodId ";
    $result1 = mysqli_query($con1, $sql_query1);
    $row1 = mysqli_fetch_array($result1);
    $shopId = $row1["shop_id"];


    $sql_query="INSERT INTO `follow`(`shopid`, `userid`) VALUES ($shopId,$userId)";
    $result = mysqli_query($con2, $sql_query);
    mysqli_close($con1);
    mysqli_close($con2);
    echo $result;

?>