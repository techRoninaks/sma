<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
   
    $sql_query = "SELECT * FROM `purchase_order` ";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
            $data["purchase_order"]=array('purchaseOrder'=>$row["orderid"],'sellerId'=>$row["sellerid"],'createdDate'=>$row["created_date"],'customerId'=>$row["customerid"],'shippingOption'=>$row["shipping_option"],'orderStatus'=>$row["order_status"],'cancellationMessage'=>$row["cancellation_message"],'deliveryDate'=>$row["delivery_date"],'remarks'=>$row["remarks"],'addrType'=>$row["addr_type"],'isRfq'=>$row["is_rfq"],'totalAmount'=>$row["total_amnt"],'paymentMode'=>$row["payment_mode"],'isRated'=>$row["is_rated"],'transactionId'=>$row["transaction_id"]);

    }


    echo json_encode($data);
        //echo "hello";
    
?>