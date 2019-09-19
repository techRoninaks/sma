<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $data = array();
    $sql_query = "SELECT * FROM `shop_details` where id =  $shopId  ";
    // echo $sql_query;
    $result = mysqli_query($con2, $sql_query);
    // var_dump($con1);
    while ($row = mysqli_fetch_assoc($result)) {
        $data = array(
            'shopId' => $row["id"], 'sellerId' => $row["seller_id"], 'descriptionShop' => $row["description"],
            'shopName' => $row["shopname"], 'primImgShop' => $row["primary_image"], 'prodImgShop1' => $row["prod_image_1"],
            'prodImgShop2' => $row["prod_image_2"], 'prodImgShop3' => $row["prod_image_3"], 'addressIdShop' => $row["addr_id"],
            'shopLocation' => $row["shop_location"], 'issueReturn' => $row["issue_return"], 'issueRefund' => $row["issue_refund"],
            'reqConf' => $row["requires_confirmation"], 'giftOption' => $row["gift_option"], 'orderConf' => $row["order_confirmation"],
            'ratingShop' => $row["rating"], 'vacStartDate' => $row["vacation_start_date"], 'onVac' => $row["on_vacation"],
            'vacEndStart' => $row["vacation_end_date"], 'ratingCountShop' => $row["rating_count"], 'reviewCountShop' => $row["review_count"],
            'returningCustCount' => $row["returning_customers_count"], 'shopViewCount' => $row["shop_view_count"],
            'privateAccount' => $row["private_acc"], 'followerCount' => $row["follower_count"], 'tAndC' => $row["t_and_c"],
            'shopPolicy' => $row["shop_policy"], 'planId' => $row["plan_id"], 'planJoinDate' => $row["plan_join_date"],
            'planExpDate' => $row["paln_exp_date"], 'rfqShop' => $row["rfq"], 'coverPhoto' => $row["cover_photo"],
            'deliverByDate' => $row["deliver_by_date"], 'shippingOptionId' => $row["shipping_option_id"],
            'shippingLocations' => $row["shipping_locations"], 'autoCancelTime' => $row["auto_cancellation_time"],
            'avgShippingTime' => $row["avg_shipping_time"], 'avgProcessingTime' => $row["avg_processing_time"],
            'avgResponseTime' => $row["avg_response_time"], 'categoryId' => $row["category_id"],
            'subCategoryId' => $row["sub_category_id"], 'tagsShop' => $row["tags"]
        );
    }
    echo json_encode($data);
?>