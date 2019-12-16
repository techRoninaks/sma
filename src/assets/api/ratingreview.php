<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    // echo $prodId;
    $data = array();
    $sql_query ="SELECT rr.*, (SELECT COUNT(*)from like_dislike ld where ld.review_id = rr.id and ld.likeordislike = 1) as likes, (SELECT COUNT(*)from like_dislike ld where ld.review_id = rr.id and ld.likeordislike = 0) as dislikes FROM review_rating rr  WHERE `mappingid` = $prodId ";
 
    $result = mysqli_query($con2, $sql_query);
    // echo $sql_query;
    // var_dump($result);
    $count = 0;
    while($row=mysqli_fetch_assoc($result)){
        $data[$count++] = array('reviewId' => $row["id"], 'review' => $row["review"], 'rating' => $row["rating"], 'userId' => $row["userid"], 'hasImage' => $row["has_image"], 'reviewTitle' => $row["review_title"],'date' => $row["date"], 'likes' => $row["likes"], 'dislikes' => $row["dislikes"]);
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>