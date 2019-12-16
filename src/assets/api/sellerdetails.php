<?php
    require "init.php";
    $prodId =$_POST["prodId"];
    // $sellerId = 0;
    $data = array();
    // select shop_details.shopname,seller.name from smausr.seller where seller.id = (select seller_id from smausr.shop_details where shop_details.id in (select shop_id from smapr.product where prodid = )
    $sql_query1 = "SELECT `shop_id` FROM `product` where prodid =  $prodId ";
    $result1 = mysqli_query($con1 , $sql_query1);
    $row1=mysqli_fetch_array($result1);
    $shopId=$row1["shop_id"];
    // echo $shopId;
    // var_dump($shopId);

    $sql_query2 = "SELECT s.seller_name,s.id, sd.shopname ,sd.private_acc,sd.gift_option from seller s JOIN shop_details sd on sd.seller_id = s.id where sd.id = $shopId ";
    // var_dump($sql_query2);
    $result2 = mysqli_query($con2 , $sql_query2);
    // var_dump($result2);
    $row2=mysqli_fetch_array($result2);
    $data=array('shopName'=>$row2["shopname"],'sellerName'=>$row2["seller_name"],'privateAccount'=>$row2["private_acc"],'giftOption'=>$row2["gift_option"],'shopId'=>$shopId,'sellerId'=>$row2["id"]);
    // var_dump($data);
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>