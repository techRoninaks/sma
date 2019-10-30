<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $userId = $_POST["userId"];

    $data = array();
    $rev = array();

    $sql_query="SELECT `prodid` from product  WHERE  shop_id =  $shopId ";
    $result = mysqli_query($con1, $sql_query);

    // echo $sql_query;

    $count=0;
    while($row1=mysqli_fetch_assoc($result)){
        $data[$count++]=$row1["prodid"]+0;
    }

    $dataSz=sizeof($data);
    // echo $data[0];
    // echo $data[1];
    $dataCnt=0;
    $countRev=0;

    while($dataSz!=0){
        $dy=$data[$dataCnt];

        $sql_queryRev ="SELECT rr.*, (SELECT COUNT(*)from like_dislike ld where ld.review_id = rr.id and ld.likeordislike = 1) as likes, (SELECT COUNT(*)from like_dislike ld where ld.review_id = rr.id and ld.likeordislike = 0) as dislikes FROM review_rating rr  WHERE `mappingid` = $dy";
        // echo $sql_queryRev;
        $resultRev = mysqli_query($con2, $sql_queryRev);
        while($row1=mysqli_fetch_assoc($result)){
            $rev[$countRev++] = $row1['id'];
        }
        $dataCnt++;
        $dataSz--;
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