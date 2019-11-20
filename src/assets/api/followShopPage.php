<?php
    require "init.php";
    $userId = $_POST["userId"];
    $shopId = $_POST["shopId"];
    $data = array();

    $sql_query="INSERT INTO `follow`(shopid, userid) VALUES ('$shopId','$userId')";
    $result = mysqli_query($con2, $sql_query);
    if(! $result)
    {
        $status="Error";
        echo json_encode($status);
    }
    else
    {
        $status="Success";
        echo json_encode($status);
    }
?>