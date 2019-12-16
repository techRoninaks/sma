<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $userId = $_POST["userId"];
    $reviewId = $_POST["reviewId"];

    $today=date("Y-m-d");

    $sql_query="INSERT INTO `report`(`userid`, `review_id`, `date`) VALUES ($userId,$reviewId,'$today')";
    $result = mysqli_query($con2, $sql_query);
    mysqli_close($con1);
    mysqli_close($con2);
    echo $sql_query;

?>