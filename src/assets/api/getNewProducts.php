<?php
    require "init.php";
    
    $tagNum = $_POST["tagNum"];
    $pageNum = $_POST["pageNum"];
    $offset = ($pageNum - 1)*$tagNum;

    $sql_count = "select count(*) from trending_products";
    $result_count = mysqli_query($con2,$sql_count);
    $pageRow = mysqli_fetch_assoc($result_count);

    $pageCount = ceil($pageRow['count(*)'] /$tagNum);

    $sql_query = "select * from offer_products limit $tagNum offset $offset";
    $result = mysqli_query($con2,$sql_query);

    $sql_query = "select * from new_products limit $tagNum";
    $result = mysqli_query($con1,$sql_query);

    $data = array();
    $count = 0;

    while($row = mysqli_fetch_array($result)){
        $data[$count++] = array("shopId"=>$row["shop_id"],
        "sellerName"=>$row["seller_name"],
        "prodId"=>$row["prodid"],
        "prodName"=>$row["name"],
        "desc"=>$row["short_desc"],
        "basePrice"=>$row["base_price"],
        "offerPercent"=>$row["percentage"],
        "status"=>$row["active_status"],
        "hasRfq"=>$row["has_rfq"],
        "rating"=>$row["rating"]);
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode(array("data"=>$data,"pages"=>$pageCount));
?>