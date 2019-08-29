<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
   
    $sql_query = "SELECT * FROM `cart` ";
    $result = mysqli_query($con2, $sql_query);
    $count =0;
    while($row=mysqli_fetch_assoc($result)){
            $data[$count]=array('cart'=>$row["id"],'prodId'=>$row["prodid"],'quantity'=>$row["quantity"],'variantsChosen'=>$row["variants_chosen"],'giftAddress'=>$row["gift_address"],'giftNote'=>$row["gift_note"],'message'=>$row["message"],'type'=>$row["type"],'totalPrice'=>$row["total_price"],'discount'=>$row["discount"],'variantPrice'=>$row["variant_price"],'hasImage'=>$row["has_image"],'expectedDeliveryDate'=>$row["expected_delivery_Date"],'deliveryOn'=>$row["delivery_on"],'isRemoved'=>$row["is_removed"],'isOrdered'=>$row["is_ordered"],'userId'=>$row["user_id"]);
            $count++;
    }


    echo json_encode($data);
        //echo "hello";
    
?>