<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $data = date_create(date("Y-m-d"));
    $dateDiff = array();

    $sql_query ="SELECT rr.* FROM review_rating rr  WHERE `mappingid` = $prodId ";
    $result = mysqli_query($con2, $sql_query);
    $today=date_create(date("Y-m-d"));
    // echo $today; 
    $count = 0;
    while($row=mysqli_fetch_assoc($result)){
        $data=date_create($row["date"]);
        $diff=date_diff($data,$today);
        $x=$diff->days;
        $dateDiff[$count++]=$x;
    }
    // echo $diff;
    echo json_encode($dateDiff);
?>