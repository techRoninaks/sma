<?php
    require "init.php";
    // $shopId =$_POST["shopId"];
    $sellerId = $_POST["sellerId"];
    $data = array();
    // $sql_query1 = "SELECT `seller_id` FROM `shop_details` where id =  $shopId ";
    // $result1 = mysqli_query($con2 , $sql_query1);
    // $row1=mysqli_fetch_array($result1);
    // $sellerId=$row1["seller_id"];

    $sql_query2 = "SELECT * FROM `seller` where id= $sellerId";
    $result2 = mysqli_query($con2 , $sql_query2);
    $row2=mysqli_fetch_array($result2);
    $data=array('sellerName'=>$row2["seller_name"],'shopId'=>$row2["id"]);
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>