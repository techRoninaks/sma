<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $data = array();
    $rev = array();
    $rating = array();

    $sql_query="SELECT `prodid` from product  WHERE  shop_id =  $shopId ";
    $result = mysqli_query($con1, $sql_query);

    $count=0;
    while($row1=mysqli_fetch_assoc($result)){
        $data[$count++]=$row1["prodid"]+0;
    }

    $dataSz=sizeof($data);
     $dataCnt=0;
    $countRev=0;

    while($dataSz!=0){
        $dy=$data[$dataCnt];

        $sql_queryRev ="SELECT rr.*, (SELECT COUNT(*)from like_dislike ld where ld.review_id = rr.id and ld.likeordislike = 1) as likes, (SELECT COUNT(*)from like_dislike ld where ld.review_id = rr.id and ld.likeordislike = 0) as dislikes FROM review_rating rr  WHERE `mappingid` = $dy";
        // echo $sql_queryRev;
        $resultRev = mysqli_query($con2, $sql_queryRev);
        while($row=mysqli_fetch_assoc($resultRev)){
            $rev[$countRev++] = array('reviewId' => $row["id"], 'review' => $row["review"], 'rating' => $row["rating"], 'userId' => $row["userid"], 'hasImage' => $row["has_image"], 'reviewTitle' => $row["review_title"],'date' => $row["date"], 'likes' => $row["likes"], 'dislikes' => $row["dislikes"]);
        }
        $dataCnt++;
        $dataSz--;
    }
    $ratingCount=$countRev;
    $rat1=0;
    $rat2=0;
    $rat3=0;
    $rat4=0;
    $rat5=0;
    for($counter=0;$counter<$ratingCount;$counter++)
    {
        if($rev[$counter]['rating']==1){
            $rat1++;
        }
        else if($rev[$counter]['rating']==2){
            $rat2++;
        }
        else if($rev[$counter]['rating']==3){
            $rat3++;
        }
        else if($rev[$counter]['rating']==4){
            $rat4++;
        }
        else if($rev[$counter]['rating']==5){
            $rat5++;
        }
        // $rating[$counter]= array();
    }
    $total=$countRev;
    $rating=array('rat1'=>$rat1,'rat2'=>$rat2,'rat3'=>$rat3,'rat4'=>$rat4,'rat5'=>$rat5,'totRat'=>$total);
    echo json_encode($rating);
?>