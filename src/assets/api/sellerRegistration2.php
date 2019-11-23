<?php
    require "init.php";
    $seller_id = $_POST['seller_id'];
    $shop_name = $_POST['shop_name'];
    $shop_address = $_POST['shop_address'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $pin = $_POST['pin'];
    $gst = $_POST['gst_no'];
    $main_category = $_POST['main_category'];
    $response = array();
    $stage_number = 2;
    
    $sql_query3 ="SELECT `category_id` FROM `category` WHERE `category`= '$main_category'";
    $result3 = mysqli_query($con1, $sql_query3);
    $row3= mysqli_fetch_array($result3);
    $cat_id = $row3['category_id'];

    $sql_query1 ="INSERT INTO `shop_details` (`id`, `seller_id`, `shopname`, `primary_image`, `prod_image_1`, `prod_image_2`, 
    `prod_image_3`, `addr_id`, `shop_location`, `issue_return`, `issue_refund`, `requires_confirmation`, `gift_option`, 
    `order_confirmation`, `rating`, `vacation_start_date`, `on_vacation`, `vacation_end_date`, `rating_count`, `review_count`, 
    `returning_customers_count`, `shop_view_count`, `private_acc`, `follower_count`, `t_and_c`, `shop_policy`, `plan_id`, 
    `plan_join_date`, `plan_exp_date`, `rfq`, `cover_photo`, `deliver_by_date`, `shipping_option_id`, `shipping_locations`, 
    `auto_cancellation_time`, `avg_shipping_time`, `avg_processing_time`, `avg_response_time`, `category_id`, `sub_category_id`, 
    `tags`, `description`) 
    VALUES (NULL, '$seller_id', '$shop_name', '', '', '', '',0, '$shop_address', '', '', '', '', '',0, NULL, '', NULL,0,0,0,0,
     '',0, '', '',0,'2019-1-1', NULL, '', '', '', '',0,0,0,0,0, '$cat_id', '', '', '')";
    $result1 = mysqli_query($con2, $sql_query1);

    $sql_query2 ="INSERT INTO `address` (addr1,city,state,pincode,mapping_id,`addr2`,`district`,`country`,
    `contact_email`,`contact_number`,`contact_name`,`addr_type`) VALUES ('$shop_address','$city','$state','$pin','$seller_id',NULL,'','', '',111, '','')";
    $result2 = mysqli_query($con2, $sql_query2);
   
    $sql_query4 ="SELECT `id`,`pincode` FROM `address` WHERE `mapping_id`= '$seller_id'";
    $result4 = mysqli_query($con2, $sql_query4);
    $row4= mysqli_fetch_array($result4);
    $addr_id = $row4['id'];
    $pincode = $row4['pincode'];
    // echo $pincode;
    $sql_query5 ="UPDATE `shop_details` SET `addr_id`= '$addr_id' ";
    $result5 = mysqli_query($con2, $sql_query5);

    $sql_query6 ="UPDATE `seller` SET `gst`= '$gst',`stage_number`='$stage_number' WHERE id ='$seller_id'";
    $result6 = mysqli_query($con2, $sql_query6);

    if(! $result1 && ! $result2 && ! $result5 && ! $result6)
    {
        $status="Error";
        echo json_encode($status);
    }
    else
    {
        $status="Success";
        $response = array('status'=>$status,'pincode'=>$pincode);
        echo json_encode($response);
    }
?>