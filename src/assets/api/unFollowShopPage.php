<?php
    require "init.php";
    $userId = $_POST["userId"];
    $shopId = $_POST["shopId"];
    $data = array();

    $sql_query = "DELETE FROM `follow` WHERE shopid = $shopId && userid = $userId ";
    $result = mysqli_query($con2, $sql_query);

    echo $result;

?>