<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $data = array();

    $y = date_create(date("Y-m-d"));
    $dateDiff = array();

    $sql_query="SELECT `prodid` from product  WHERE  shop_id =  $shopId ";
    $result = mysqli_query($con1, $sql_query);
    $count=0;
    while($row1=mysqli_fetch_assoc($result)){
        $data[$count++]=$row1["prodid"]+0;
    }

    $dataSz=sizeof($data);
;
    $dataCnt=0;
    $countRev=0;
    $today=date_create(date("Y-m-d"));

    while($dataSz!=0){
        $dy=$data[$dataCnt];

        // $sql_queryRev ="SELECT rr.*, (SELECT COUNT(*)from like_dislike ld where ld.review_id = rr.id and ld.likeordislike = 1) as likes, (SELECT COUNT(*)from like_dislike ld where ld.review_id = rr.id and ld.likeordislike = 0) as dislikes FROM review_rating rr  WHERE `mappingid` = $dy";
        // // echo $sql_queryRev;
        // $resultRev = mysqli_query($con2, $sql_queryRev);
        // while($row=mysqli_fetch_assoc($resultRev)){
        //     $rev[$countRev++] = array('reviewId' => $row["id"], 'review' => $row["review"], 'rating' => $row["rating"], 'userId' => $row["userid"], 'hasImage' => $row["has_image"], 'reviewTitle' => $row["review_title"],'date' => $row["date"], 'likes' => $row["likes"], 'dislikes' => $row["dislikes"]);
        // }

        $sql_query ="SELECT rr.* FROM review_rating rr   WHERE `mappingid` = $dy";
        $result = mysqli_query($con2, $sql_query);
        while($row=mysqli_fetch_assoc($result)){
            $y=date_create($row["date"]);
            $diff=date_diff($y,$today);
            $x=$diff->days;
            $dateDiff[$countRev++]=$x;
        }

        $dataCnt++;
        $dataSz--;
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($dateDiff);
?>