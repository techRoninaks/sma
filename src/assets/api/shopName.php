<?php
    require "init.php";
    $userId = $_POST["userId"];
    $shopName = array();
    $count =0;
    $response=array();

    $sql_query1="SELECT `shopid` FROM `follow` WHERE userid = $userId";
    $result1 = mysqli_query($con2, $sql_query1);
    $arraycount =0;
    while($row1 = mysqli_fetch_assoc($result1)){
        $shopId = $row1["shopid"];
        $sql_query2 = "SELECT `shopname`, `seller_id`,`rating` FROM `shop_details` where id = $shopId ";
        $result2 = mysqli_query($con2, $sql_query2);
        $row2 = mysqli_fetch_array($result2);
        $sellerId= $row2['seller_id'];

        $sql_query4 = "SELECT `seller_name` FROM `seller` where id =  $sellerId ";
        $result4 = mysqli_query($con2, $sql_query4);
        $row4 = mysqli_fetch_array($result4);

        $sql_query6 = "SELECT `sold_count` FROM `product` where shop_id =  $shopId ";
        $result6 = mysqli_query($con1, $sql_query6);
        while($row6 = mysqli_fetch_assoc($result6))
        {
            $count=$count +$row6["sold_count"]+0;
        }
        $sql_query7 = "SELECT count(*) as countProd FROM `product` where `shop_id`=1";
        $result7 = mysqli_query($con1, $sql_query7);
        $row7 = mysqli_fetch_array($result7);
        $prodCount=$row7["countProd"];

        $response[$arraycount]=array('count'=>$count,'prodCount'=>$prodCount,'shopname'=>$row2['shopname'],'seller_name'=>$row4['seller_name'],'rating'=>$row2['rating'],'shopid'=>$shopId);
        $arraycount++;
    }
    echo json_encode($response);
?>