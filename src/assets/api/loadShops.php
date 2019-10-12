<?php

    require "init.php";

    $pincode = $_POST["pincode"];

    $tagNum = $_POST["tagNum"];
    $pageNum = $_POST["pageNum"];
    $offset = ($pageNum - 1)*$tagNum;

    $paginationQuery = " limit $tagNum offset $offset ";

    $sql = "select sd.* from shop_details sd, shipping_location_shop sls, seller sl where sd.on_vacation = 0 and sls.pincode like '%$pincode%' and sd.id = sls.shop_id and sl.id = sd.seller_id and sl.stage_number = 8 order by sd.rating" . $paginationQuery;
    $result = mysqli_query($con2,$sql);

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
    
?>