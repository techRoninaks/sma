<?php
  require "init.php";
//  ? $prodid = $_POST['prodid'];
  $name = $_POST['name'];
  $short_desc = $_POST['short_desc'];
  $Long_desc = $_POST['Long_desc'];
  $spec = $_POST['spec'];
  $shipping_option = $_POST['shipping_option'];
  $base_price = $_POST['base_price'];
  // $bulk_discount_id = $_POST['bulk_discount_id'];
  $offer_id = $_POST['offer_id'];
  $returning_customers_count= $_POST['returning_customers_count'];
  $product_view_count = $_POST['product_view_count'];
  $cmsn_dedtd = $_POST['cmsn_dedtd'];
  // $shop_id = $_POST['shop_id'];
  $category_id = $_POST['category_id'];
  $sub_catgry_id = $_POST['sub_catgry_id'];
  $active_status = $_POST['active_status'];
  $qty_avble = $_POST['qty_avble'];
  $safe_qty = $_POST['safe_qty'];
  // $is_returnable = $_POST['is_returnable'];
  // $label_id = $_POST['label_id'];
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
  // $shipping_location_id = $_POST['shipping_location_id'];
  // $rating = $_POST['rating'];
  // $rating_count = $_POST['rating_count'];
  // $review_count = $_POST['review_count'];
  // $revenue_generated = $_POST['revenue_generated'];
  // $promo_id = $_POST['promo_id'];
  $sold_count = $_POST['sold_count'];
  // $created_date = $_POST['created_date'];   
  // $remarks = $_POST['remarks'];
  // $can_upload_image = $_POST['can_upload_image'];
  $max_no_of_image = $_POST['max_no_of_image'];
  $add_custom_message_field = $_POST['add_custom_message_field'];

    $result = array();
    $status = "";
    $sql_query1 = " INSERT INTO 'product' ('name','short_desc','Long_desc','spec','shipping_option','base_price','cmsn_dedtd','category_id','sub_catgry_id','active_status','qty_avble','safe_qty','tags','avg_prcessing_time','avg_shpping_time','auto_cancel_time','has_rfq','has_gift','has_order_confmn','can_orderbydate','min_order_quant','max_order_quant','shipping_policy','return_policy','product_policy','sold_count','max_no_of_image','add_custom_message_field') VALUES ($name,$short_desc,$Long_desc,$spec,$shipping_option,$base_price,$cmsn_dedtd,$category_id,$sub_catgry_id,$active_status,$qty_avble,$safe_qty,$tags,$avg_prcessing_time,$avg_shpping_time,$auto_cancel_time,$has_rfq,$has_gift,$has_order_confmn,$can_orderbydate,$min_order_quant,$max_order_quant,$shipping_policy,$return_policy,$product_policy,$sold_count,$max_no_of_image,$add_custom_message_field)";

    // $sql_query1 = " INSERT INTO 'product' ('name','short_desc','Long_desc','spec','shipping_option','base_price','bulk_discount_id','offer_id','returning_customers_count','product_view_count','cmsn_dedtd','shop_id','category_id','sub_catgry_id','active_status','qty_avble','safe_qty','is_returnable','label_id','tags','avg_confrmn_time','avg_response_time','avg_prcessing_time','avg_shpping_time','auto_cancel_time','has_rfq','has_gift','has_order_confmn','can_orderbydate','has_instant_buy','min_order_quant','max_order_quant','shipping_policy','return_policy','product_policy','shipping_location_id','rating','rating_count','review_count','revenue_generated','promo_id','sold_count','created_date','remarks','can_upload_image','max_no_of_image','add_custom_message_field') VALUES ('$name','$short_desc','$Long_desc','$spec',0,$base_price,NULL,NULL,NULL,NULL,null,null,$category_id,$sub_catgry_id,$active_status,$qty_avble,$safe_qty,null,NULL,null,NULL,NULL,null,null,NULL,null,null,null,null,null,$min_order_quant,$max_order_quant,null,null,null,null,null,null,null,null,NULL,null,null,NULL,NULL,null,NULL,null,null)";
    $result = mysqli_query($con1, $sql_query);

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
    mysqli_close($con1);
    mysqli_close($con2);
?>