<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $userId = $_POST["userId"];
    $data = array();

    $sql_query = "DELETE FROM `follow` WHERE shopid = $shopId && userid = $userId ";
    $result = mysqli_query($con2, $sql_query);

    echo $result;

?>