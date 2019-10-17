<?php
    require "init.php";
    $seller_id = $_POST['seller_id'];
    $shop_name = $_POST['shop_name'];
    $shop_address = $_POST['shop_address'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $pin = $_POST['pin'];
    $main_category = $_POST['main_category'];
    $response = array();
    
    $sql_query3 ="SELECT `category_id` FROM `category` WHERE `category`= '$main_category'";
    $result3 = mysqli_query($con1, $sql_query3);
    $row3= mysqli_fetch_array($result3);
    $cat_id = $row3['category_id'];

    $sql_query1 ="INSERT INTO `shop_details` (seller_id,shopname,shop_location,category_id) VALUES ('$seller_id ','$shop_name','$shop_address','$cat_id')";
    $result1 = mysqli_query($con2, $sql_query1);
    $sql_query2 ="INSERT INTO `address` (addr1,city,state,pincode,mapping_id) VALUES ('$shop_address','$city','$state','$pin','$seller_id')";
    $result2 = mysqli_query($con2, $sql_query2);
   
    $sql_query4 ="SELECT `id`,`pincode` FROM `address` WHERE `addr1`= '$shop_address'";
    $result4 = mysqli_query($con2, $sql_query4);
    $row4= mysqli_fetch_array($result4);
    $addr_id = $row4['id'];
    $pincode = $row4['pincode'];

    $sql_query5 ="UPDATE `shop_details` SET `addr_id`= '$addr_id' ";
    $result5 = mysqli_query($con2, $sql_query5);

    if(! $result1 && ! $result2 && ! $result5)
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