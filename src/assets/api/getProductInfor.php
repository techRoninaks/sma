<?php
    require "init.php";
    $prodid = $_POST['id'];
    $sellerid = $_POST['sellerid'];
    $data = array();
    $count = 0;
    $sql_query = "SELECT COUNT(*) FROM `purchase_order` WHERE sellerid = $sellerid ";
    $result = mysqli_query($con2, $sql_query);
    $row=mysqli_fetch_assoc($result);
    $purchaseOrderCount =$row['COUNT(*)'];
    $sql_query = "SELECT COUNT(*) FROM `customer_order` WHERE prodid = $prodid ";
    $result = mysqli_query($con2, $sql_query);
    $row=mysqli_fetch_assoc($result);
    $customerOrderCount =$row['COUNT(*)'];
    $isOrdered = false;

    if($purchaseOrderCount>0){
        $isOrdered = true;
    }
    if($customerOrderCount>0){
        $isOrdered = true;
    }

    $sql_query = "SELECT * FROM `product` WHERE prodid = $prodid";
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data = array("prodid"=>$row['prodid'],"name"=>$row['name'],"short_desc"=>$row['short_desc'],"Long_desc"=>$row['Long_desc'],"spec"=>$row['spec'],"shipping_option"=>$row['shipping_option'],"base_price"=>$row['base_price'],"bulk_discount_id"=>$row['bulk_discount_id'],"offer_id"=>$row['offer_id'],"returning_customers_count"=>$row['returning_customers_count'],"product_view_count"=>$row['product_view_count'],"cmsn_dedtd"=>$row['cmsn_dedtd'],"shop_id"=>$row['shop_id'],"category_id"=>$row['category_id'],"sub_catgry_id"=>$row['sub_catgry_id'],"active_status"=>$row['active_status'],"qty_avble"=>$row['qty_avble'],"safe_qty"=>$row['safe_qty'],"is_returnable"=>$row['is_returnable'],"label_id"=>$row['label_id'],"tags"=>$row['tags'],"avg_confrmn_time"=>$row['avg_confrmn_time'],"avg_response_time"=>$row['avg_response_time'],"avg_prcessing_time"=>$row['avg_prcessing_time'],"avg_shpping_time"=>$row['avg_shpping_time'],"auto_cancel_time"=>$row['auto_cancel_time'],"has_rfq"=>$row['has_rfq'],"has_gift"=>$row['has_gift'],"has_order_confmn"=>$row['has_order_confmn'],"can_orderbydate"=>$row['can_orderbydate'],"has_instant_buy"=>$row['has_instant_buy'],"min_order_quant"=>$row['min_order_quant'],"max_order_quant"=>$row['max_order_quant'],"shipping_policy"=>$row['shipping_policy'],"return_policy"=>$row['return_policy'],"product_policy"=>$row['product_policy'],"shipping_location_id"=>$row['shipping_location_id'],"rating"=>$row['rating'],"rating_count"=>$row['rating_count'],"review_count"=>$row['review_count'],"revenue_generated"=>$row['revenue_generated'],"promo_id"=>$row['promo_id'],"sold_count"=>$row['sold_count'],"created_date"=>$row['created_date'],"remarks"=>$row['remarks'],"can_upload_image"=>$row['can_upload_image'],"max_no_of_image"=>$row['max_no_of_image'],"add_custom_message_field"=>$row['add_custom_message_field'],"isOrdered"=>$isOrdered);
    }

    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
        //echo "hello";
    
?>  