<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $userId = $_POST["userId"];
    $reviewId = $_POST["reviewId"];

    $sql_query2 = "SELECT * FROM `like_dislike` WHERE review_id = $reviewId AND customer_id = $userId ";
    $result2 = mysqli_query($con2, $sql_query2);
   
    if (mysqli_num_rows ($result2)!= 0 )
    {
        $sql_query1 ="UPDATE like_dislike SET likeordislike= b'0' WHERE review_id = $reviewId AND customer_id = $userId ";
        $result1 = mysqli_query($con2, $sql_query1);
        // echo $sql_query1;
    }
    else if(mysqli_num_rows ($result2) == 0 )
    {
        $sql_query = "INSERT INTO `like_dislike`(`review_id`, `likeordislike`, `customer_id`) VALUES ($reviewId,0,$userId)";
        $result = mysqli_query($con2, $sql_query);
    }

?>