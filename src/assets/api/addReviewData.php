<?php
    require "init.php";
    $title = $_POST['title'];
    $notes = $_POST['note'];
    $userId = $_POST['userId'];
    $prodId = $_POST['prodId'];
    $rating = $_POST['rating'];

    $sql="SELECT CURRENT_DATE";
    $res=mysqli_query($con1,$sql);
    $row=mysqli_fetch_assoc($res);
    $tDateValue=array('tDate'=>$row["CURRENT_DATE"]);
    $date=$tDateValue["tDate"];
    $current_date= date_create($date);
    $Date = $current_date->format('Y/m/d');

    $sql_query = " INSERT INTO `review_rating` (`userid`,`review_title`,`review`,`mappingid`,`rating`,`has_image`,`date`) VALUES ('$userId','$title','$notes','$prodId','$rating',0,'$Date')";
    
    $result = mysqli_query($con2, $sql_query);
    if(! $result)
    {
        $status="Error";
        echo json_encode($status);
    }
    else
    {
        $status="Success";
        echo json_encode($status);
    }
    mysqli_close($con1);
    mysqli_close($con2);
?>