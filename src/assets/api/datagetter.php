<?php
    require "init.php";
    $prodId =$_POST["prodId"];
    $data = array();
    $sql_query = "SELECT * FROM `product` where prodid =  $prodId  ";
    // echo $sql_query;
    $result = mysqli_query($con1 , $sql_query);
    // var_dump($con1);
    while($row=mysqli_fetch_assoc($result)){
        $data=array('prodId'=>$row["prodid"],'name'=>$row["name"],'shortDesc'=>$row["short_desc"],'longDesc'=>$row["Long_desc"],'specification'=>$row["spec"],'shippingOption'=>$row["shipping_option"],'basePrice'=>$row["base_price"],'bulkDiscId'=>$row["bulk_discount_id"],'offerId'=>$row["offer_id"],'returningCustCount'=>$row["returning_customers_count"],'productViewCount'=>$row["product_view_count"],'commisionDedtd'=>$row["cmsn_dedtd"],'shopId'=>$row["shop_id"],'categoryId'=>$row["category_id"],'subCategoryId'=>$row["sub_catgry_id"],'activeStatus'=>$row["active_status"],'qtyAvailable'=>$row["qty_avble"],'safeQty'=>$row["safe_qty"],'isReturnable'=>$row["is_returnable"],'labelId'=>$row["label_id"],'tags'=>$row["tags"],'avgConfirmTime'=>$row["avg_confrmn_time"],'avgResponseTime'=>$row["avg_response_time"],'avgProcessTime'=>$row["avg_prcessing_time"],'avgShipTime'=>$row["avg_shpping_time"],'autoCancelTime'=>$row["auto_cancel_time"],'hasRfq'=>$row["has_rfq"],'hasGift'=>$row["has_gift"],'hasOrderConfirm'=>$row["has_order_confmn"],'canOrderByDate'=>$row["can_orderbydate"],'hasInstantBuy'=>$row["has_instant_buy"],'minOrderQuant'=>$row["min_order_quant"],'maxOrderQuant'=>$row["max_order_quant"],'shipPolicy'=>$row["shipping_policy"],'returnPolicy'=>$row["return_policy"],'prodPolicy'=>$row["product_policy"],'shipLocationId'=>$row["shipping_location_id"],'rating'=>$row["rating"],'ratingCount'=>$row["rating_count"],'reviewCount'=>$row["review_count"],'revenueGenerated'=>$row["revenue_generated"],'promoId'=>$row["promo_id"],'soldCount'=>$row["sold_count"],'canUploadImage'=>$row["can_upload_image"],'maxImageCount'=>$row["max_no_of_image"],'addMsgField'=>$row["add_custom_message_field"]);
    }
    echo json_encode($data);
?>