<?php
    require "init.php";
    $prodId =$_POST["prodId"];
    $shopId =$_POST["shopId"];
    $data = array();
    $sql_query = "SELECT * FROM `product` where prodid = $prodId and shop_id = $shopId";
    // echo $sql_query;
    $result = mysqli_query($con1 , $sql_query);
    // var_dump($con1);
    if (mysqli_num_rows ($result)!= 0 )
    {
          //get current date
        $sql1="SELECT CURRENT_DATE";
        $res1=mysqli_query($con1,$sql1);
        $row1=mysqli_fetch_assoc($res1);
        $tDateValue=$row1["CURRENT_DATE"];

        $sql_query0 = "SELECT * FROM `shop_details` where id =  $shopId  ";
        $result0 = mysqli_query($con2, $sql_query0);
        $row0 = mysqli_fetch_assoc($result0);
        $vacStartDate = $row0["vacation_start_date"];
        $onVac = $row0["on_vacation"];
        $vacEndDate = $row0["vacation_end_date"];

        $sql="SELECT DATEDIFF('$tDateValue', '$vacEndDate') AS DateDiffNew, DATEDIFF('$vacStartDate', '$tDateValue') AS DateDiffOld";
        // echo $sql;
        $res=mysqli_query($con1,$sql);
        $row=mysqli_fetch_assoc($res);
        $ddN=$row["DateDiffNew"];
        $ddO=$row["DateDiffOld"];
        // ($ddN>0 and $ddO<0) OR $ddO<0 
        if(($onVac == 1)AND(($ddN>0 AND $ddO<0)OR($ddO<0))){
            $sql_query2 = "SELECT seller_id FROM `shop_details` where id = $shopId ";
            $result2 = mysqli_query($con2 , $sql_query2);
            $row2=mysqli_fetch_array($result2);
            $sellerId=$row2["seller_id"];
            $response=1;
            while($row=mysqli_fetch_assoc($result)){
    
                $data=array('vac'=>$onVac,'response'=>$response,'sellerId'=>$sellerId,'prodId'=>$row["prodid"],'name'=>$row["name"],'shortDesc'=>$row["short_desc"],'longDesc'=>$row["Long_desc"],'specification'=>$row["spec"],'shippingOption'=>$row["shipping_option"],'basePrice'=>$row["base_price"],'bulkDiscId'=>$row["bulk_discount_id"],'offerId'=>$row["offer_id"],'returningCustCount'=>$row["returning_customers_count"],'productViewCount'=>$row["product_view_count"],'commisionDedtd'=>$row["cmsn_dedtd"],'shopId'=>$row["shop_id"],'categoryId'=>$row["category_id"],'subCategoryId'=>$row["sub_catgry_id"],'activeStatus'=>$row["active_status"],'qtyAvailable'=>$row["qty_avble"],'safeQty'=>$row["safe_qty"],'isReturnable'=>$row["is_returnable"],'labelId'=>$row["label_id"],'tags'=>$row["tags"],'avgConfirmTime'=>$row["avg_confrmn_time"],'avgResponseTime'=>$row["avg_response_time"],'avgProcessTime'=>$row["avg_prcessing_time"],'avgShipTime'=>$row["avg_shpping_time"],'autoCancelTime'=>$row["auto_cancel_time"],'hasRfq'=>$row["has_rfq"],'hasGift'=>$row["has_gift"],'hasOrderConfirm'=>$row["has_order_confmn"],'canOrderByDate'=>$row["can_orderbydate"],'hasInstantBuy'=>$row["has_instant_buy"],'minOrderQuant'=>$row["min_order_quant"],'maxOrderQuant'=>$row["max_order_quant"],'shipPolicy'=>$row["shipping_policy"],'returnPolicy'=>$row["return_policy"],'prodPolicy'=>$row["product_policy"],'shipLocationId'=>$row["shipping_location_id"],'rating'=>$row["rating"],'ratingCount'=>$row["rating_count"],'reviewCount'=>$row["review_count"],'revenueGenerated'=>$row["revenue_generated"],'promoId'=>$row["promo_id"],'soldCount'=>$row["sold_count"],'canUploadImage'=>$row["can_upload_image"],'maxImageCount'=>$row["max_no_of_image"],'addMsgField'=>$row["add_custom_message_field"]);
            }
        }
        else if($onVac == 0){
            $sql_query2 = "SELECT seller_id FROM `shop_details` where id = $shopId ";
            $result2 = mysqli_query($con2 , $sql_query2);
            $row2=mysqli_fetch_array($result2);
            $sellerId=$row2["seller_id"];
            $response=1;
            while($row=mysqli_fetch_assoc($result)){
    
                $data=array('vac'=>$onVac,'response'=>$response,'sellerId'=>$sellerId,'prodId'=>$row["prodid"],'name'=>$row["name"],'shortDesc'=>$row["short_desc"],'longDesc'=>$row["Long_desc"],'specification'=>$row["spec"],'shippingOption'=>$row["shipping_option"],'basePrice'=>$row["base_price"],'bulkDiscId'=>$row["bulk_discount_id"],'offerId'=>$row["offer_id"],'returningCustCount'=>$row["returning_customers_count"],'productViewCount'=>$row["product_view_count"],'commisionDedtd'=>$row["cmsn_dedtd"],'shopId'=>$row["shop_id"],'categoryId'=>$row["category_id"],'subCategoryId'=>$row["sub_catgry_id"],'activeStatus'=>$row["active_status"],'qtyAvailable'=>$row["qty_avble"],'safeQty'=>$row["safe_qty"],'isReturnable'=>$row["is_returnable"],'labelId'=>$row["label_id"],'tags'=>$row["tags"],'avgConfirmTime'=>$row["avg_confrmn_time"],'avgResponseTime'=>$row["avg_response_time"],'avgProcessTime'=>$row["avg_prcessing_time"],'avgShipTime'=>$row["avg_shpping_time"],'autoCancelTime'=>$row["auto_cancel_time"],'hasRfq'=>$row["has_rfq"],'hasGift'=>$row["has_gift"],'hasOrderConfirm'=>$row["has_order_confmn"],'canOrderByDate'=>$row["can_orderbydate"],'hasInstantBuy'=>$row["has_instant_buy"],'minOrderQuant'=>$row["min_order_quant"],'maxOrderQuant'=>$row["max_order_quant"],'shipPolicy'=>$row["shipping_policy"],'returnPolicy'=>$row["return_policy"],'prodPolicy'=>$row["product_policy"],'shipLocationId'=>$row["shipping_location_id"],'rating'=>$row["rating"],'ratingCount'=>$row["rating_count"],'reviewCount'=>$row["review_count"],'revenueGenerated'=>$row["revenue_generated"],'promoId'=>$row["promo_id"],'soldCount'=>$row["sold_count"],'canUploadImage'=>$row["can_upload_image"],'maxImageCount'=>$row["max_no_of_image"],'addMsgField'=>$row["add_custom_message_field"]);
            }
        }
    }
    else if(mysqli_num_rows ($result) == 0 )
    {
        $response=0;
        $data = array('response'=>$response);
    }

    echo json_encode($data);
?>