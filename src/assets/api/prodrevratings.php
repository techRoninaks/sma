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
    $ratingCount=$count;
    $rat1=0;
    $rat2=0;
    $rat3=0;
    $rat4=0;
    $rat5=0;
    for($counter=0;$counter<$ratingCount;$counter++)
    {
        if($data[$counter]['rating']==1){
            $rat1++;
        }
        else if($data[$counter]['rating']==2){
            $rat2++;
        }
        else if($data[$counter]['rating']==3){
            $rat3++;
        }
        else if($data[$counter]['rating']==4){
            $rat4++;
        }
        else if($data[$counter]['rating']==5){
            $rat5++;
        }
        // $rating[$counter]= array();
    }
    $total=$count;
    $rating=array('rat1'=>$rat1,'rat2'=>$rat2,'rat3'=>$rat3,'rat4'=>$rat4,'rat5'=>$rat5,'totRat'=>$total);
    echo json_encode($rating);
?>