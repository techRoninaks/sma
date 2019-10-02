<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $sql_query="DELETE from `product` where `prodid` =$prodId";
    $result = mysqli_query($con1, $sql_query);
    // echo $sql_query;
    // require "init.php";
    // $prodId = $_POST["prodId"];
    // $userId = $_POST["userId"];
    // $reviewId = $_POST["reviewId"];
    // $today=date("Y-m-d");
    // $sql_query="INSERT INTO `report`(`userid`, `review_id`, `date`) VALUES ($userId,$reviewId,'$today')";
    // $result = mysqli_query($con2, $sql_query);
    // echo $sql_query;
?>