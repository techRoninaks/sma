<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *");
    $orderid = $_POST['orderid'];
    $data = array();
    $sql_query = "SELECT * FROM `customer_order` where orderid = '$orderid'";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data=array(
        'orderid'=>$row["orderid"],
        'coid'=>$row["coid"],
        'prodid'=>$row["prodid"],
        'quantity'=>$row["quantity"],
        'variantsChosen'=>$row["variants_chosen"],
        'giftOption'=>$row["gift_option"],
        'giftNote'=>$row["gift_note"],
        'giftTitle'=>$row["gift_title"],
        'basePrice'=>$row["base_price"],
        'totalPrice'=>$row["total_price"],
        'discount'=>$row["discount"],
        'shippingPrice'=>$row["shippingprice"],
        'variantPrice'=>$row["variantprice"],
        'tax'=>$row["tax"],
        'deliveryDate'=>$row["delivery_date"]);

    }

    
    echo json_encode($data);

?>