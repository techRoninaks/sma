<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $data = array();

    $sql_query1 = "SELECT `seller_id` FROM `shop_details` where id =  $shopId ";
    $result1 = mysqli_query($con2 , $sql_query1);
    $row1=mysqli_fetch_array($result1);
    $sellerId=$row1["seller_id"];

    $sql_query2 = "SELECT * FROM `seller` where id= $sellerId";
    $result2 = mysqli_query($con2 , $sql_query2);
    $row2=mysqli_fetch_array($result2);
    $selName=$row2["seller_name"];

    $sql_query="SELECT * from product  WHERE  shop_id =  $shopId  limit 9 ";
    $result = mysqli_query($con1, $sql_query);
    $count=0;
    while ($row = mysqli_fetch_assoc($result)) {
        $data[$count++] = array("shopId"=>$row["shop_id"],
        "sellerName"=>$selName, 
       "prodId"=>$row["prodid"],
       "prodName"=>$row["name"],
       "desc"=>$row["short_desc"],
       "basePrice"=>$row["base_price"],
       "status"=>$row["active_status"],
       "hasRfq"=>$row["has_rfq"],
       "rating"=>$row["rating"]);
    }
    // echo $data;
    // "offerPercent"=>$row["percentage"],
    echo json_encode($data);

    //     "sellerName"=>$row["sName"], 

// , (SELECT seller_name from like_dislike ld  WHERE  shop_id =  $shopId) AS sName  
?>