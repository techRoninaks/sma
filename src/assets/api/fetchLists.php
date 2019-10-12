<?php

    require "init.php";

    $catId = $_POST["catId"];
    $sKey = $_POST["key"];
    $pincode = $_POST["pin"];
    $filterSet = json_decode($_POST["filterSet"]);
    $sortSet = json_decode($_POST["sortSet"]);
    //test
    // $catId = 1;
    // $tagNum = 12;
    // $pageNum = 1;

    //Pagination details
    $success = "failed";
    $tagNum = $_POST["tagNum"];
    $pageNum = $_POST["pageNum"];
    $offset = ($pageNum - 1)*$tagNum;
    $sql_count = "select count(*) as prods from product_listing";
    $result_count = mysqli_query($con1,$sql_count);
    $pageRow = mysqli_fetch_assoc($result_count);
    $pageCount = ceil($pageRow['prods'] /$tagNum);
    $paginationQuery = "limit $tagNum offset $offset";
    //Pagination details
    
    $sqlBasic = "select * from product_listing where category_id = '$catId' and shipping_location = '$pincode' ";
    $price = "";
    $rating = "";
    $freeShip = "";
    $hasRfq = "";
    $orderConfirm = "";
    $instantBuy = "";
    $delivery = "";
    $sortCondition = "";

    if($catId){

        if(count($filterSet->priceRange)>0){
            // $price = " base_price => $filterSet->priceRange[0] and base_price <=$filterSet->priceRange[1] ";
        }
        if($filterSet->rating != 0){
            $rating = " and rating = $filterSet->rating ";
        }
        if($filterSet->freeShipping){
            $freeShip = " ";
        }
        if($filterSet->rfq == "on"){
            $hasRfq = " and has_rfq = 1 ";
        }
        if($filterSet->orderConfirm == "on"){
            $orderConfirm = " and has_order_confmn = 1 ";
        }
        if($filterSet->instantBuy == "on"){
            $instantBuy = " and has_instant_buy = 1 ";
        }
        if($filterSet->delivery){
            $delivery = " and shipping_option like '%$filterSet->delivery%' ";
        }
        if($sortSet->priceLH){
            $sortCondition = " order by base_price asc ";
        } else if($sortSet->priceHL){
            $sortCondition = " order by base_price desc ";
        } else if($sortSet->latest){
            $sortCondition = " order by created_date desc ";
        } else if($sortSet->popular){
            $sortCondition = " order by sold_count desc";
        } else if($sortSet->processLH){
            $sortCondition = " order by avg_prcessing_time asc";
        } else if($sortSet->processHL){
            $sortCondition = " order by avg_prcessing_time desc";
        } else if($sortSet->shipLH){
            $sortCondition = " order by price asc ";
        } else if($sortSet->shipHL){
            $sortCondition = " order by price desc ";
        }
        $sql = $sqlBasic . $price . $rating . $freeShip . $hasRfq . $orderConfirm . $instantBuy . $delivery . $sortCondition . $paginationQuery;
        // echo $sql;
        $result = mysqli_query($con1,$sql);
        
        $data = array();
        $count = 0;

        while($row = mysqli_fetch_array($result)){
            $success = "success";
            $data[$count++] = array(
                "prodId"=>$row["prodid"],
                "shopId"=>$row["shop_id"],
                "sellerName"=>$row["seller_name"],
                "prodName"=>$row["name"],
                "desc"=>$row["short_desc"],
                "basePrice"=>$row["base_price"],
                "offerPercent"=>$row["percentage"],
                "hasRfq"=>$row["has_rfq"],
                "activeStatus"=>$row["active_status"],
                "rating"=>$row["rating"],
                "parentId"=>$row["parentid"],
                "orderConfirm"=>$row["has_order_confmn"],
                "instantBuy"=>$row["has_instant_buy"]
            );
        }
    }
    echo json_encode(array("response"=>$success,"data"=>$data,"pages"=>$pageCount));
?>