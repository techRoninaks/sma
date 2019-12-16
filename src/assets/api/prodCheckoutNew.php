<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
    $prodId = $_POST["prodId"];
    $sql_query = "SELECT * FROM `product` where prodId = $prodId";
    // echo $sql_query;
    $result = mysqli_query($con1 , $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data = array('prodId'=>$row["prodid"],
        'name'=>$row["name"]);
        // 'specification'=>$row["spec"],
        // 'shippingOption'=>$row["shipping_option"],
        // 'basePrice'=>$row["base_price"],
        // 'bulkDiscId'=>$row["bulk_discount_id"],
        // 'offerId'=>$row["offer_id"],
        // 'returningCustCount'=>$row["returning_customers_count"],
        // 'productViewCount'=>$row["product_view_count"],
        // 'commisionDedtd'=>$row["cmsn_dedtd"],
        // 'shopId'=>$row["shop_id"],
        // 'categoryId'=>$row["category_id"],
        // 'subCategoryId'=>$row["sub_catgry_id"],
        // 'activeStatus'=>$row["active_status"],
        // 'qtyAvailable'=>$row["qty_avble"],
        // 'safeQty'=>$row["safe_qty"],
        // 'isReturnable'=>$row["is_returnable"],
        // 'labelId'=>$row["label_id"],
        // 'tags'=>$row["tags"],
        // 'avgConfirmTime'=>$row["avg_confrmn_time"],
        // 'avgResponseTime'=>$row["avg_response_time"],
        // 'avgProcessTime'=>$row["avg_prcessing_time"],
        // 'avgShipTime'=>$row["avg_shpping_time"],
        // 'autoCancelTime'=>$row["auto_cancel_time"],
        // 'hasRfq'=>$row["has_rfq"],
        // 'hasGift'=>$row["has_gift"],
        // 'hasOrderConfirm'=>$row["has_order_confmn"],
        // 'canOrderByDate'=>$row["can_orderbydate"],
        // 'hasInstantBuy'=>$row["has_instant_buy"],
        // 'minOrderQuant'=>$row["min_order_quant"],
        // 'maxOrderQuant'=>$row["max_order_quant"],
        // 'shipLocationId'=>$row["shipping_location_id"],
        // 'rating'=>$row["rating"],
        // 'ratingCount'=>$row["rating_count"],
        // 'reviewCount'=>$row["review_count"],
        // 'revenueGenerated'=>$row["revenue_generated"],
        // 'promoId'=>$row["promo_id"],
        // 'soldCount'=>$row["sold_count"]);
    }    mysqli_close($con1);
    mysqli_close($con2);

    echo json_encode($data);
?>