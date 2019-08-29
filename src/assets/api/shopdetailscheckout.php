<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();

    $sql_query = "SELECT * FROM `shop_details` ";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data["shop_details"]=array('shopDetails'=>$row["id"],'sellerId'=>$row["seller_id"],'primaryImage'=>$row["primary_image"],'prodImage1'=>$row["prod_image_1"],'prodImage2'=>$row["prod_image_2"],'prodImage3'=>$row["prod_image_3"],'addrId'=>$row["addr_id"],'shopLocation'=>$row["shop_location"],'issueReturn'=>$row["issue_return"],'issueRefund'=>$row["issue_refund"],'requiresConfirmation'=>$row["requires_confirmation"],'giftOption'=>$row["gift_option"],'orderConfirmation'=>$row["order_confirmation"],'rating'=>$row["rating"],'vacationStartDate'=>$row["vacation_start_date"],'onVacation'=>$row["on_vacation"],'vacationEndDate'=>$row["vacation_end_date"],'ratingCount'=>$row["rating_count"],'reviewCount'=>$row["review_count"],'returningCustomersCount'=>$row["returning_customers_count"],'shopViewCount'=>$row["shop_view_count"],'privateAcc'=>$row["private_acc"],'followerCount'=>$row["follower_count"],'tAndC'=>$row["t_and_c"],'shopPolicy'=>$row["shop_policy"],'planId'=>$row["plan_id"],'planExpDate'=>$row["plan_exp_date"],'rfq'=>$row["rfq"],'coverPhoto'=>$row["cover_photo"],'deliverByDate'=>$row["deliver_by_date"],'shippingOptionId'=>$row["shipping_option_id"],'shippingLocations'=>$row["shipping_locations"],'autoCancellationTime'=>$row["auto_cancellation_time"],'avgShippingTime'=>$row["avg_shipping_time"],'avgProcessingTime'=>$row["avg_processing_time"],'avgResponseTime'=>$row["avg_response_time"],'categoryId'=>$row["category_id"],'subCategoryId'=>$row["sub_category_id"],'tags'=>$row["tags"]);
    }



    echo json_encode($data);
        //echo "hello";
    
?>