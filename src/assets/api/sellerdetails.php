<?php
    require "init.php";
    $prodId =$_POST["prodId"];
    $shopId =0;
    // $sellerId = 0;
    $data = array();
    // select shop_details.shopname,seller.name from smausr.seller where seller.id = (select seller_id from smausr.shop_details where shop_details.id in (select shop_id from smapr.product where prodid = )
    $sql_query1 = "SELECT `shop_id` FROM `product` where prodid =  $prodId ";
    $result1 = mysqli_query($con1 , $sql_query1);
    $row1=mysqli_fetch_array($result1);
    $shopId=$row1["shop_id"];
    // echo $shopId;
    // var_dump($shopId);

    $sql_query2 = "SELECT s.name, sd.shopname from seller s JOIN shop_details sd on sd.seller_id = s.id where sd.id = $shopId ";
    // var_dump($sql_query2);
    $result2 = mysqli_query($con2 , $sql_query2);
    // var_dump($result2);
    $row2=mysqli_fetch_array($result2);
    $data=array('shopName'=>$row2["shopname"],'sellerName'=>$row2["name"]);
    // var_dump($data);
    echo json_encode($data);
?>