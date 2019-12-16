<?php
//deleteCartProduct.php
require "init.php";
$id =$_POST["id"];
$userId = $_POST["user_id"];
$prodid = $_POST["prodid"];
$quantity = $_POST["quantity"];
$variantsChosen ="";
$giftAddress ="";
$giftNote ="";
$totalPrice ="";
$discount ="";
$variantPrice ="";
$hasImage ="";
$deliveryDate ="";
$giftTitle ="";
$giftOption ="";
$basePrice =""; 
$percentage = "";
$tax = "";
$pincode = $_POST['pincode'];
$deliveryOption = "";
$productQuantity = "";


// /echo $quantity
$data = array();

if($id == "all"){
    $sql_query1 = "SELECT * FROM `cart` WHERE `prodid` =$prodid AND `user_id` =$userId";
    $result1 = mysqli_query($con2, $sql_query1); 
    $row=mysqli_fetch_assoc($result1);
    $id=$row["id"];
    $variantsChosen=$row["variants_chosen"];
    $giftAddress=$row["gift_address"];
    $giftNote=$row["gift_note"];
    $totalPrice=$row["total_price"];
    $discount=$row["discount"];
    $discPrice = $totalPrice * $discount;
    $discPrice = $discPrice/100;
    // echo $discPrice;
    $variantPrice=$row["variant_price"];
    $hasImage=$row["has_image"];
    $deliveryDate=$row["delivery_date"];
    $userId=$row["user_id"];
    $giftTitle=$row["gift_title"];
    $giftOption=$row["gift_option"];
    

    $sqlTax="SELECT value FROM `web_settings` where name = 'tax' ";
    // echo $sqlTax;
    $resTax=mysqli_query($con1,$sqlTax);
    $rowTax=mysqli_fetch_assoc($resTax);
    $tax=$rowTax["value"];

    $sql_query1 ="SELECT * FROM `product` WHERE `prodid` = $prodid";
    $result = mysqli_query($con1, $sql_query1);
    $row=mysqli_fetch_assoc($result);
    $shopid = $row['shop_id'];
    $basePrice=$row["base_price"];

    // $varId=$variantsChosen;
    // echo $varId;

    $sql_query1 = "SELECT `avg_confrmn_time`, `avg_response_time`, `avg_prcessing_time`, `avg_shpping_time`, `base_price`, `bulk_discount_id` ,`offer_id` FROM `product` WHERE `prodid` = $prodid";    
    $result1= mysqli_query($con1, $sql_query1);
    $row1=mysqli_fetch_assoc($result1);

    // //get bulk disc values

    // $sqlBulkPrice="SELECT `quant`, `discount` FROM `bulk_discount` WHERE `prodid` = $prodid GROUP BY `quant` ASC";
    // $resBulkPrice=mysqli_query($con1,$sqlBulkPrice);
    // if (mysqli_num_rows ($resBulkPrice)!= 0 )
    // {
    //     $countBulkQty=0;
    //     $countBulk=0;
    //     while ($rowBulkPrice=mysqli_fetch_assoc($resBulkPrice)) {
    //         $dataBulk[$countBulk++] = array('quant' => $rowBulkPrice["quant"], 'discount' => $rowBulkPrice["discount"]);
    //     }

    //     // echo json_encode($dataBulk);
    //     // echo $sqlBulkPrice;
    //     //find bulk array where quant < prouct qty

    //     $bulkSize = sizeof($dataBulk);
    //     $bCount = 0;
    //     $bulkQtyArray=array();
    //     if($bulkSize!=0){
    //         while($bCount<$bulkSize){
    //             $xBulk=$dataBulk[$bCount]['quant'];
    //             // echo $xBulk;
    //             if($productQuantity>=$xBulk){
    //                 // $bulkQtyArray[$bCount] = $xBulk;
    //                 $bulkQtyArray[$bCount] = array('quant' => $xBulk, 'discount' => $dataBulk[$bCount]['discount']);
    //             }
    //             $bCount++;
    //         }
    //         if(sizeof($bulkQtyArray)!=0){
    //             $bulkQtyArraySize = sizeof($bulkQtyArray);
    //         }
    //         else{
    //             $bulkQtyArray=array();
    //             $bulkQtyArraySize=sizeof($bulkQtyArray);
    //         }
    //         // echo json_encode($bulkQtyArray)."<br>";
    //     }
    //     else{
    //         $bulkQtyArray=array();
    //         $bulkQtyArraySize=sizeof($bulkQtyArray);
    //     }

    //     //now find / and apply disc an % and apply no disc , add both and find total bulk price, then check for smallest price of total and send it as bulk disc

    //     $bQCount = 0;
    //     $minBulk = $basePrice * $productQuantity;
    //     //  echo $minBulk."<br>";
    //     // echo $bulkQtyArraySize."<br>";
    //     if($bulkQtyArraySize!=0){
    //         while($bQCount<$bulkQtyArraySize){
    //             $xBulkD= $bulkQtyArray[$bQCount]['discount'];
    //             $xBulkQ= $bulkQtyArray[$bQCount]['quant'];
    //             // echo $bQCount ."<". $bulkQtyArraySize."<br>";
    //             // echo $xBulkD ."-". $xBulkQ;
    //             if($productQuantity>=$xBulkQ){
    //                 $divBulkD = $productQuantity / $xBulkQ;
    //                 $modBulkD = $productQuantity % $xBulkQ; 
    //                 // echo $xBulkD ."-". $xBulkQ."<br>";
    //                 // echo $divBulkD ."<->". $divBulk."<br>";
    //                 $divBulkD = floor($divBulkD);
    //                 $totalMod = $divBulkD * $xBulkQ;
    //                 $bulkVal1 = $basePrice * $totalMod * ((100-$xBulkD)/100);
    //                 $bulkVal2 = $basePrice * $modBulkD;
    //                 // echo $bulkVal1 ."-". $bulkVal2."<br>";
    //                 $bulkFinal[$bQCount] = $bulkVal1 + $bulkVal2;
    //                 // echo $bulkFinal[$bQCount]."<br>";
    //                 // echo $minBulk;
    //             }
    //             if($minBulk >= $bulkFinal[$bQCount]){
    //                 $minBulk = $bulkFinal[$bQCount];
    //                 // echo $minBulk;
    //             }
    //             $bQCount++;
    //         }
    //     }
    // }
    // else if(mysqli_num_rows ($resBulkPrice) == 0 )
    // {
    //     $minBulk = $basePrice * $productQuantity;
    // }



        //get discount info
        $sqlDisc = "SELECT * FROM `offer` where prodid =  $prodid  ";    
        $resDisc=mysqli_query($con1,$sqlDisc);
        // var_dump($resDisc);
        // echo $sqlDisc;
        $rowDisc=mysqli_fetch_array($resDisc);
        $discountInfo=array('percentage' => $rowDisc["percentage"]);

        $disc=$discountInfo["percentage"];

        $sql_query = "SELECT price, quantity_price FROM `prod_shipping_price` where prodid = $prodid and shipping_location like $pincode";
        $result = mysqli_query($con1, $sql_query);
        $row=mysqli_fetch_assoc($result);
        $data = array('price'=>$row["price"],'quantity_price'=>$row["quantity_price"]);
        
        $shipQtyPrice=$row["quantity_price"];
        $shipBasePrice=$row["price"];

        //shipping qty price 

        if($deliveryOption=="shipping")
        {
            if($productQuantity==1)
            {
                $qtPrice=0;
            }
            else{
                $qt=$productQuantity-1;
                $qtPrice=$qt*$shipQtyPrice;
            } 
            $shipOption=1;
        }
        else if($deliveryOption=="homedelivery")
        {
            $qtPrice=0;
            $shipBasePrice=0;
            $shipOption=2;
        }
        else if($deliveryOption=="pickup")
        {
            $qtPrice=0;
            $shipBasePrice=0;
            $shipOption=3;
        }
        // $data = array('price'=>$row["price"],'quantity_price'=>$row["quantity_price"],'total'=>$qtPrice);
        // echo $qtPrice;
        // $shippingprice = $qtPrice + $shipBasePrice;
    


        

        $amountDisc=$basePrice*($disc/100);
        $price=$basePrice-$amountDisc;
        $price=round($price);
        

        $basePriceTotal=$price*$quantity;
        $totalAmount=$basePriceTotal;
        $totalAmount=round($totalAmount);


        // $priceSave = $basePrice - $discPrice;
        // echo $priceSave;

        $sql_query1 ="SELECT * FROM `shop_details` WHERE `id` = $shopid";
        $result = mysqli_query($con2, $sql_query1);
        $row=mysqli_fetch_assoc($result);
        $sellerid = $row['seller_id'];

        $sql_query1 ="SELECT * FROM `user` WHERE id = $userId";
        $result = mysqli_query($con2, $sql_query1);
        $row=mysqli_fetch_assoc($result);
        $userAddress = $row['addr_id'];


        $sql_query3 = " INSERT INTO `purchase_order` (`sellerid`, `customerid`, `shipping_option`, `order_status`,`cancellation_message`,`delivery_date`, `remarks`,`is_rfq`, `total_amnt`, `payment_mode`,
        `is_rated`, `transaction_id`, `require_delivery_date`, `variants_chosen`, `addr_id`) VALUES ($sellerid, $userId,0,'pending_confirmation',null,$deliveryDate,null,0,$totalAmount,'pending',
            0,0,0,$variantsChosen,$userAddress)";
        $result3 = mysqli_query($con2, $sql_query3);


        $sql_query3 = "SELECT * FROM `purchase_order` where customerid = $userId ORDER BY  `purchase_order`.`orderid` DESC LIMIT 1 ";
        $result3 = mysqli_query($con2, $sql_query3);
        $row=mysqli_fetch_assoc($result3);
        $orderid = $row['orderid'];

        $sql_query2 = " INSERT INTO `customer_order` (`prodid`,`quantity`,`variants_chosen`,`gift_address`,`is_rfq`,`gift_note`,`total_price`,`base_price`,`discount`,`variantprice`,`has_image`,`delivey_date`,`gift_title`,`gift_option`,`orderid`,`shippingprice`,`tax`) VALUES ($prodid,$quantity,$variantsChosen,NULL,0,NULL,$totalAmount,$basePrice,$disc,0,0,'$deliveryDate',NULL,0,$orderid,0,$tax)";
        $result2 = mysqli_query($con2, $sql_query2); 
        // echo $quantity;
        // echo $sql_query2;


        $sql_query3 = "SELECT * FROM `customer_order` where prodid = $prodid ORDER BY `customer_order`.`coid` DESC  LIMIT 1 ";
        $result3 = mysqli_query($con2, $sql_query3);
        $row=mysqli_fetch_assoc($result3);
        $orderid = $row['orderid'];
        echo $orderid;
        
    }

else{
    $sql_query4 = "DELETE FROM `cart` WHERE prodid = $prodid and user_id = $userId";
    $result4 = mysqli_query($con2,$sql_query4);
    echo $sql_query4;
}
mysqli_close($con1);
mysqli_close($con2);



?>