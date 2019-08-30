<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();

    $sql_query = "SELECT * FROM `customer_order` ";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
            $data["customer_order"]=array('customerOrder'=>$row["coid"],'prodid'=>$row["prodid"],'quantity'=>$row["quantity"],'variantsChosen'=>$row["variants_chosen"],'giftOption'=>$row["giftoption"],'giftNote'=>$row["gift_note"],'message'=>$row["message"],'isRfq'=>$row["is_rfq"],'basePrice'=>$row["base_price"],'qtyPrice'=>$row["qty_price"],'totalPrice'=>$row["total_price"],'discount'=>$row["discount"],'shippingPrice'=>$row["shippingprice"],'tax'=>$row["tax"],'variantPrice'=>$row["variantprice"],'hasImage'=>$row["has_image"],'orderid'=>$row["orderid"],'promoDisc'=>$row["promo_disc"],'invoiceNumber'=>$row["invoice_number"],'deliveryDate'=>$row["delivery_date"],'shippingTrackingNumber'=>$row["shipping_tracking_number"],'shippingTrackingHyperlink'=>$row["shipping_tracking_hyperlink"]);

    }

    



    echo json_encode($data);
        //echo "hello";
    
?>