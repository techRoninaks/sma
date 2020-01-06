<?php

    require "init.php";

    $DB_SMA_PR = DB_SMA_PR;
    $DB_SMA_USER = DB_SMA_USER;

    $catId = $_POST["catId"];
    $pincode = $_POST["pincode"];

    $filterSet = json_decode($_POST["filters"]);
    $sortSet = json_decode($_POST["sort"]);

    $data = array();
    $count = 0;
    $request = "failed";
 
    $tagNum = $_POST["tagNum"];
    $pageNum = $_POST["pageNum"];
    $offset = ($pageNum - 1)*$tagNum;

    $paginationQuery = " limit $tagNum offset $offset ";

    $productQuery = "SELECT p.category_id, c.parentid, p.prodid, p.created_date, p.sold_count, p.avg_prcessing_time, p.avg_confrmn_time,p.shop_id,sl.seller_name, sh.shopname, p.name, p.short_desc, p.base_price, (SELECT o.percentage from $DB_SMA_PR.offer o WHERE o.id = p.offer_id) as percentage, p.active_status, p.has_rfq, p.rating, p.has_order_confmn, p.has_instant_buy
    FROM $DB_SMA_PR.product p, $DB_SMA_PR.category c, $DB_SMA_USER.seller sl, $DB_SMA_USER.shop_details sh, $DB_SMA_PR.shipping_location_product slp
    WHERE p.category_id = c.category_id AND p.shop_id = sh.id and sh.seller_id = sl.id AND slp.pincode LIKE '%$pincode%' AND p.active_status IN ('active') ";

    // $locationQuery = " AND p.prodid IN (SELECT p.prodid FROM roninaks_smapr.product p, roninaks_smausr.shipping_location_shop sls WHERE p.category_id = '$catId' and p.shipping_location_id = sls.id and sls.pincode LIKE '%$pincode%')";

    $locationQuery = "";

    $groupCondition = " GROUP BY p.prodid ";

    $status = "deliverable";
//Filter madness starts here
    $price = "";
    $rating = "";
    $freeShip = "";
    $hasRfq = "";
    $orderConfirm = "";
    $instantBuy = "";
    $delivery = "";
    $sortCondition = "";
    
        if($filterSet->deliverable){
            $locationQuery = " AND slp.pincode NOT LIKE '%$pincode%'";
            
            $status = "undeliverable";

            $productQuery = "SELECT p.category_id, c.parentid, p.prodid, p.created_date, p.sold_count, p.avg_prcessing_time, p.avg_confrmn_time,p.shop_id,sl.seller_name, sh.shopname, p.name, p.short_desc, p.base_price, (SELECT o.percentage from $DB_SMA_PR.offer o WHERE o.id = p.offer_id) as percentage, p.active_status, p.has_rfq, p.rating, p.has_order_confmn, p.has_instant_buy
            FROM $DB_SMA_PR.product p, $DB_SMA_PR.category c, $DB_SMA_USER.seller sl, $DB_SMA_USER.shop_details sh, $DB_SMA_PR.shipping_location_product slp
            WHERE p.category_id = c.category_id AND p.shop_id = sh.id and sh.seller_id = sl.id AND slp.pincode NOT LIKE '%$pincode%' AND p.active_status IN ('active') ";

        }
        if($filterSet->maxPrice){
            $price = " and p.base_price >= $filterSet->minPrice and p.base_price <=$filterSet->maxPrice ";
        }
        if($filterSet->rating != 0){
            $rating = " and p.rating = $filterSet->rating ";
        }
        if($filterSet->freeShipping){
            $freeShip = " ";
        }
        if($filterSet->rfq){
            $hasRfq = " and p.has_rfq = 1 ";
        }
        if($filterSet->orderConfirm){
            $orderConfirm = " and p.has_order_confmn = 1 ";
        }
        if($filterSet->instantBuy){
            $instantBuy = " and p.has_instant_buy = 1 ";
        }
        if($filterSet->delivery){
            $delivery = " and p.shipping_option like '%$filterSet->delivery%' ";
        }
        if($sortSet->priceLH){
            $sortCondition = " order by p.base_price asc ";
        } else if($sortSet->priceHL){
            $sortCondition = " order by p.base_price desc ";
        } else if($sortSet->latest){
            $sortCondition = " order by p.created_date desc ";
        } else if($sortSet->popular){
            $sortCondition = " order by p.sold_count desc";
        } else if($sortSet->processLH){
            $sortCondition = " order by p.avg_prcessing_time asc";
        } else if($sortSet->processHL){
            $sortCondition = " order by p.avg_prcessing_time desc";
        } else if($sortSet->shipLH){
            $sortCondition = " order by psp.price asc ";
        } else if($sortSet->shipHL){
            $sortCondition = " order by psp.price desc ";
        }

//Filter madness ends here

    // $sql = $productQuery . $locationQuery . $price . $rating . $freeShip . $hasRfq . $orderConfirm . $instantBuy . $delivery . $sortCondition . $paginationQuery;   
    $sql = $productQuery . " AND p.category_id = '$catId' " . $locationQuery . $price . $rating . $freeShip . $hasRfq . $orderConfirm . $instantBuy . $delivery . $groupCondition . $sortCondition. $paginationQuery;
    $result = mysqli_query($con1,$sql);
    
    echo $sql;

    $price = array();
    $prodId = array();

    if(mysqli_num_rows($result) > 0){
        while( $row = mysqli_fetch_array($result) ){

            $request = "success";
            
            $price[$count] = $row["base_price"];
            
            $prodId[$count] = $row["prodid"];

            $data[$count++] = array(
                "prodId"=>$row["prodid"],
                "shopId"=>$row["shop_id"],
                "sellerName"=>$row["seller_name"],
                "shopName"=>$row["shopname"],
                "prodName"=>$row["name"],
                "desc"=>$row["short_desc"],
                "basePrice"=>$row["base_price"],
                "offerPercent"=>$row["percentage"],
                "hasRfq"=>$row["has_rfq"],
                "deliverStatus"=>$status,
                "rating"=>$row["rating"],
                "parentId"=>$row["parentid"],
                "orderConfirm"=>$row["has_order_confmn"],
                "instantBuy"=>$row["has_instant_buy"]
            );

        }
        $pageCount = ceil($count /$tagNum);

        //get sub categories
        $sql_subCategory = "SELECT category,category_id FROM category WHERE parentid = '$catId'";
        $result_subCategory = mysqli_query($con1,$sql_subCategory);

        $subCategory = array();
        $catCount = 0;
        
        while( $row = mysqli_fetch_array($result_subCategory) ){

            $subCategory[$catCount++] = array(
                "category"=>$row["category"],
                "categoryId"=>$row["category_id"]
            );
        
        }

        //get variants
        $sql_variants = "SELECT name FROM variant_info where prodid IN (".implode(',',$prodId).") group by name HAVING COUNT(name) > 5";
        $result_variants = mysqli_query($con1,$sql_variants);

        $variants = array();
        $varCount = 0;

        while( $row = mysqli_fetch_array($result_variants) ){

            $variants[$varCount++] = $row["name"];
        
        }

        //get shipping options
        $sql_ship = "SELECT shipping_option FROM product where category_id = '$catId' GROUP BY shipping_option";
        $result_ship = mysqli_query($con1,$sql_ship);

        $shipMethods = array();
        $shipCount = 0;

        while( $row = mysqli_fetch_array($result_ship) ){

            $shipMethods[$shipCount++] = $row["shipping_option"];

        }

        echo json_encode(
            array(
                "request"=>$request,
                "data"=>$data,
                "pageCount"=>$pageCount,
                "subCategory"=>$subCategory,
                "priceRange"=>$price,
                "variants"=>$variants,
                "shipMethods"=>$shipMethods
            )
        );
    } else {
        echo json_encode(
            array(
                "request"=>$request
            )
        );
    }
    mysqli_close($con1);
    mysqli_close($con2);
?>