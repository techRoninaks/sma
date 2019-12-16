<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $userId = $_POST["userId"];
    $reviewId = $_POST["reviewId"];
    // echo $reviewId;
    // $reviewId = array();

    // $sql_query1 = "SELECT `id` FROM `review_rating` WHERE `mappingid` = $prodId and `id` = $reviewId";
    // $result1 = mysqli_query($con2, $sql_query1);
    // $count=0;
    $today=date("Y-m-d");
    // echo $today;
    // while ($row1 = mysqli_fetch_array($result1)) {
    //     $reviewId[$count++]=array('reviewId' => $row1["id"]);
    // }
    $sql_query="INSERT INTO `report`(`userid`, `review_id`, `date`) VALUES ($userId,$reviewId,'$today')";
    $result = mysqli_query($con2, $sql_query);
    mysqli_close($con1);
    mysqli_close($con2);
    echo $sql_query;

?>