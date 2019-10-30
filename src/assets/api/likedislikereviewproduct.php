<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $userId = $_POST["userId"];
    // echo $prodId;
    $data = array();
    $sql_query ="SELECT rr.*, (SELECT COUNT(*)from like_dislike ld where ld.review_id = rr.id and ld.likeordislike = 1) as likes, (SELECT COUNT(*)from like_dislike ld where ld.review_id = rr.id and ld.likeordislike = 0) as dislikes FROM review_rating rr  WHERE `mappingid` = $prodId ";
    // AND `userid` = $userId 
    $result = mysqli_query($con2, $sql_query);
    // echo $sql_query;
    // var_dump($result);
    $count = 0;
    while($row1=mysqli_fetch_assoc($result)){
        $data[$count++] = $row1['id'];
    }

    $lDValue=array();
    $countLD=0;
    $sql="SELECT `likeordislike` ,`review_id` FROM `like_dislike` where `customer_id` = $userId";
    // echo $sql;
    $res=mysqli_query($con2,$sql);
    while($row=mysqli_fetch_assoc($res)){
        $lDValue[$countLD++]=array('likeDislike'=>$row["likeordislike"],'reviewId'=>$row["review_id"]);
        // echo $lDValue;
    }



    // $sql="SELECT `likeordislike` FROM `like_dislike` where `review_id` = 8 AND `customer_id` = 2";
    // $res=mysqli_query($con1,$sql);
    // $row=mysqli_fetch_assoc($res);
    // $tDateValue=array('tDate'=>$row["CURRENT_DATE"]);


    echo json_encode($lDValue);
?>




 