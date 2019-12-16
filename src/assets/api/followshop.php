<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $userId = $_POST["userId"];
    $data = array();

    $sql_query="INSERT INTO `follow`(`shopid`, `userid`) VALUES ($shopId,$userId)";
    $result = mysqli_query($con2, $sql_query);
    mysqli_close($con1);
    mysqli_close($con2);
    echo $result;

?>