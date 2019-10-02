<?php
    require "init.php";
    $userId = $_POST["userId"];
    $shopId = $_POST["shopId"];
    $data = array();

    $sql_query="INSERT INTO `follow`(shopid, userid) VALUES ('$shopId','$userId')";
    $result = mysqli_query($con2, $sql_query);

    echo $result;

?>