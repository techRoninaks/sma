<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $userId = $_POST["userId"];
    $data = array();

    $sql_query="INSERT INTO `follow`(`shopid`, `userid`) VALUES ($shopId,$userId)";
    $result = mysqli_query($con2, $sql_query);

    echo $result;

?>