<?php
    require "init.php";
    $order_no = $_POST['order_no'];
    $location = $_POST['location'];
    $product_name = $_POST['product_name'];
    $discription = $_POST['discription'];
    $shipping_price = $_POST['shipping_price'];
    $product_price = $_POST['product_price'];
    $delivery_by = $_POST['delivery_by'];
    $processing_time = $_POST['processing_time'];
    $buyer_name = $_POST['buyer_name'];
    $shipping_time = $_POST['shipping_time'];
    $gift_name = $_POST['gift_name'];
    $phone_number = $_POST['phone_number'];
    $address = $_POST['address'];
    $gift_note = $_POST['note'];
    
    $sql_query1 ="INSERT INTO `product` (`name`,`short_desc`,`base_price`,`avg_processing_time`,`avg_shipping_time`) VALUES ('$product_name','$discription','$product_price','$processing_time','$shipping_time')";
    $result1 = mysqli_query($con1, $sql_query1);

    // $sql_query = "UPDATE `customer_order` SET `base_price`=$product_price,`shippingprice`='$shipping_price',`gift_note`='$gift_note',`gift_address`='$address',`delivey_date`='$delivery_by';
    // $result = mysqli_query($con2,$sql_query);

    $sql_query = "UPDATE `purchase_order` SET `delivey_date`='$delivery_by' WHERE `orderid`=$order_no";
    $result = mysqli_query($con2,$sql_query);
    echo($result)  
?>