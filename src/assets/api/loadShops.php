<?php

    require "init.php";

    $DB_SMA_PR = DB_SMA_PR;
    $DB_SMA_USER = DB_SMA_USER;

    $pincode = $_POST["pincode"];

    $tagNum = $_POST["tagNum"];
    $pageNum = $_POST["pageNum"];
    $offset = ($pageNum - 1)*$tagNum;

    $paginationQuery = " limit $tagNum offset $offset ";

    $sql = "select sd.*, sl.seller_name from $DB_SMA_USER.shop_details sd, $DB_SMA_USER.seller sl where sd.on_vacation = 0 and sl.id = sd.seller_id and sl.stage_number = 8 and sd.id IN (SELECT p.shop_id from $DB_SMA_PR.product p,$DB_SMA_PR.shipping_location_product slp WHERE slp.pincode LIKE '%$pincode%' group by p.shop_id) order by sd.rating" . $paginationQuery;
    $result = mysqli_query($con2,$sql);
    // echo $sql;
    $data = array();
    $count = 0;
    $request = "failed";

    if(mysqli_num_rows($result) > 0){
        while( $row = mysqli_fetch_array($result) ){
        
            $request = "success";
            $data[$count++] = array(
                "shopId"=>$row["id"],
                "sellerId"=>$row["seller_id"],
                "shopName"=>$row["shopname"],
                "sellerName"=>$row["seller_name"],
                "bannerImg"=>$row["primary_image"],
                "shopImg1"=>$row["prod_image_1"],
                "shopImg2"=>$row["prod_image_2"],
                "shopImg3"=>$row["prod_image_3"],
                "shopRating"=>$row["rating"],
                "rfq"=>$row["rfq"],
                "shopDesc"=>$row["description"]
            );
        }
        $pageCount = ceil($count /$tagNum);
    
        echo json_encode(array("request"=>$request,"data"=>$data,"pageCount"=>$pageCount));
    } else {
        echo json_encode(array("request"=>$request));
    }
    mysqli_close($con1);
    mysqli_close($con2);
?>