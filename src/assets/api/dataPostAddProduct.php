<?php
  require "init.php";
//  ? $prodid = $_POST['prodid'];
  $name = $_POST['name'];
  $short_desc = $_POST['short_desc'];
  $Long_desc = $_POST['Long_desc'];
  $spec = $_POST['spec'];
  $shipping_option = $_POST['shipping_option'];
  $base_price = $_POST['base_price'];
  $bulk_discount_id = $_POST['bulk_discount_id'];
  $offer_id = $_POST['offer_id'];
  $returning_customers_count= $_POST['returning_customers_count'];
  $product_view_count = $_POST['product_view_count'];
  $cmsn_dedtd = $_POST['cmsn_dedtd'];
  $shop_id = $_POST['shop_id'];
  $category_id = $_POST['category_id'];
  $sub_catgry_id = $_POST['sub_catgry_id'];
  $active_status = $_POST['active_status'];
  $qty_avble = $_POST['qty_avble'];
  $safe_qty = $_POST['safe_qty'];
  $is_returnable = $_POST['is_returnable'];
  $label_id = $_POST['label_id'];
  $tags = $_POST['tags'];
  $avg_confrmn_time = $_POST['avg_confrmn_time'];
  $avg_response_time = $_POST['avg_response_time'];
  $avg_prcessing_time = $_POST['avg_prcessing_time'];
  $avg_shpping_time = $_POST['avg_shpping_time'];
  $auto_cancel_time = $_POST['auto_cancel_time'];
  $has_rfq = $_POST['has_rfq'];
  $has_gift = $_POST['has_gift'];
  $has_order_confmn = $_POST['has_order_confmn'];
  $can_orderbydate = $_POST['can_orderbydate'];
  $has_instant_buy = $_POST['has_instant_buy'];
  $min_order_quant = $_POST['min_order_quant'];
  $max_order_quant = $_POST['max_order_quant'];
  $shipping_policy = $_POST['shipping_policy'];
  $return_policy = $_POST['return_policy'];
  $product_policy = $_POST['product_policy'];
  $shipping_location_id = $_POST['shipping_location_id'];
  $rating = $_POST['rating'];
  $rating_count = $_POST['rating_count'];
  $review_count = $_POST['review_count'];
  $revenue_generated = $_POST['revenue_generated'];
  $promo_id = $_POST['promo_id'];
  $sold_count = $_POST['sold_count'];
  $created_date = $_POST['created_date'];   
  $remarks = $_POST['remarks'];
  $can_upload_image = $_POST['can_upload_image'];
  $max_no_of_image = $_POST['max_no_of_image'];
  $add_custom_message_field = $_POST['add_custom_message_field'];

  $percentage = $_POST['percentage'];

  $quant = $_POST['quant'];
  $fdiscount = $_POST['fdiscount'];


   //shipping id
   if($shipping_option=="shipping")
   {
       $shipping_option=1;
   }
   else if($shipping_option=="cod")
   {
       $shipping_option=2;
   }
   else if($shipping_option=="pickup")
   {
       $shipping_option=3;
   }
  

    $result = array();
    $status = "";
    // $sql_query1 = " INSERT INTO product' ('name','short_desc','Long_desc','spec','shipping_option','base_price','qty_avble','tags','avg_prcessing_time','avg_shpping_time','auto_cancel_time','min_order_quant','max_order_quant','max_no_of_image') VALUES ($name,$short_desc,$Long_desc,$spec,$shipping_option,$base_price,$qty_avble,$tags,$avg_prcessing_time,$avg_shpping_time,$auto_cancel_time,$min_order_quant,$max_order_quant,$max_no_of_image)";

    $sql_query1 = " INSERT INTO `product` (`name`,`short_desc`,`Long_desc`,`spec`,`shipping_option`,`base_price`,`bulk_discount_id`,`offer_id`,`returning_customers_count`,`product_view_count`,`cmsn_dedtd`,`shop_id`,`category_id`,`sub_catgry_id`,`active_status`,`qty_avble`,`safe_qty`,`is_returnable`,`label_id`,`tags`,`avg_confrmn_time`,`avg_response_time`,`avg_prcessing_time`,`avg_shpping_time`,`auto_cancel_time`,`has_rfq`,`has_gift`,`has_order_confmn`,`can_orderbydate`,`has_instant_buy`,`min_order_quant`,`max_order_quant`,`shipping_policy`,`return_policy`,`product_policy`,`shipping_location_id`,`rating`,`rating_count`,`review_count`,`revenue_generated`,`promo_id`,`sold_count`,`created_date`,`remarks`,`can_upload_image`,`max_no_of_image`,`add_custom_message_field`) VALUES ('$name','$short_desc','$Long_desc','$spec','$shipping_option',$base_price,NULL,NULL,NULL,NULL,0,1,'$category_id','$sub_catgry_id','$active_status',$qty_avble,$safe_qty,0,NULL,'boy',NULL,NULL,0,1,NULL,1,0,1,0,1,$min_order_quant,$max_order_quant,'scdczdc','scsacasc','dcacasc',1,1,1,1,1,NULL,1,6,NULL,NULL,'ygjygygj',1,NULL,1)";
    $result1 = mysqli_query($con1, $sql_query1);
    // echo $sql_query1;
    
    $sql_query = "SELECT `prodid` FROM `product` where 1 ORDER BY `prodid` DESC LIMIT 1";
    $result = mysqli_query($con1, $sql_query);
    $rowprodid = mysqli_fetch_assoc($result);
    $prodid=$rowprodid["prodid"];
    

    $sql_query2 = " UPDATE `product` SET `prodid`= '$prodid',`name`='$name',`short_desc`='$short_desc',`Long_desc`='$Long_desc',`spec`='$spec',`base_price`='$base_price',`qty_avble`='$qty_avble',`tags`='$tags',`avg_prcessing_time`='$avg_prcessing_time',`avg_shpping_time`='$avg_shpping_time',`auto_cancel_time`='$auto_cancel_time',`min_order_quant`='$min_order_quant',`max_order_quant`='$max_order_quant',`max_no_of_image`='$max_no_of_image' where prodid ='$prodid'";
    

       // $sql_query2 = " UPDATE `product` SET `prodid`= '$prodid',`name`='$name',`short_desc`='$short_desc',`Long_desc`='$Long_desc',`spec`='$spec',`shipping_option`='$shipping_option',`base_price`='$base_price',`bulk_discount_id`='$bulk_discount_id,`offer_id`='$offer_id',`returning_customers_count`='$returning_customers_count',`product_view_count`='$product_view_count',`cmsn_dedtd`='$cmsn_dedtd',`shop_id`='$shop_id',`category_id`='$category_id',`sub_catgry_id`='$sub_catgry_id',`active_status`='$active_status',`qty_avble`='$qty_avble',`safe_qty`='$safe_qty',`is_returnable`='$is_returnable',`label_id`='$label_id',`tags`='$tags',`avg_confrmn_time`='$avg_confrmn_time',`avg_response_time`='$avg_response_time',`avg_prcessing_time`='$avg_prcessing_time',`avg_shpping_time`='$avg_shpping_time',`auto_cancel_time`='$auto_cancel_time',`has_rfq`='$has_rfq',`has_gift`='$has_gift',`has_order_confmn`='$has_order_confmn',`can_orderbydate`='$can_orderbydate',`has_instant_buy`='$has_instant_buy',`min_order_quant`='$min_order_quant',`max_order_quant`='$max_order_quant',`shipping_policy`='$shipping_policy',`return_policy`='$return_policy',`product_policy`='$product_policy',`shipping_location_id`='$shipping_location_id',`rating`='$rating',`rating_count`='$rating_count',`review_count`='$review_count',`revenue_generated`='$revenue_generated',`promo_id`='$promo_id',`sold_count`='$sold_count',`created_date`='$created_date',`remarks`='$remarks',`can_upload_image`='$can_upload_image',`max_no_of_image`='$max_no_of_image',`add_custom_message_field`='$add_custom_message_field' where prodid ='$prodid'";
    $result2 = mysqli_query($con1, $sql_query2);
    // echo $sql_query2;
   
    $sql_query3 = "INSERT INTO `offer`( `prodid`, `percentage`, `from_time_stamp`, `to_tme_Stamp`) VALUES ($prodid,$percentage,'2019-08-28 12:00:00','2019-09-20 12:00:00')";
    $result3 = mysqli_query($con1, $sql_query3);
    // echo $sql_query3;

    $sql_query4 = "INSERT INTO `bulk_discount`(`prodid`,`quant`,`fdiscount`,`from_time_stamp`,`to_time_Stamp`) VALUES ($prodid,$quant,$fdiscount,'2019-08-28 12:00:00','2019-09-20 12:00:00')";
    $result4 = mysqli_query($con1, $sql_query4);
    // echo $sql_query4;

    if(! $result)
    {
        $status="Error";
        echo json_encode($status);
    }
    else
    {
        $status="Success";
        echo json_encode($status);
    }
?>