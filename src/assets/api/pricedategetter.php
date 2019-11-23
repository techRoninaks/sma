<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $pin = $_POST["pin"];
    $productQuantity = $_POST["productQuantity"];
    $deliveryOption = $_POST["deliveryOption"];
    $productVariant = $_POST["productVariant"];
    $data = array();

    //get tax
    $sqlTax="SELECT value FROM `web_settings` where name = 'tax' ";
    $resTax=mysqli_query($con1,$sqlTax);
    $rowTax=mysqli_fetch_assoc($resTax);
    $tax=$rowTax["value"];
        
    $spiltVariant = explode(",", $productVariant);  
    $variantCount = sizeof($spiltVariant);
    $varPrice = 0;
    $varId="";
    for($variantC=0;$variantC<$variantCount;$variantC++){
        $sql_queryVar="SELECT * FROM `variant_info` where `value` =  '$spiltVariant[$variantC]'";
        $resultVar = mysqli_query($con1, $sql_queryVar);
        $rowVariant=mysqli_fetch_array($resultVar);
        $varIdValue=$rowVariant["variantid"];
        $varPriceValue=$rowVariant["price"];
        $varId = $varIdValue.",".$varId;
        $varPrice = $varPrice + $varPriceValue;
    }

    //get current date
    $sql="SELECT CURRENT_DATE";
    $res=mysqli_query($con1,$sql);
    $row=mysqli_fetch_assoc($res);
    $tDateValue=array('tDate'=>$row["CURRENT_DATE"]);

    if($pin>0 && $pin != null){
        $sqlPrice="SELECT `quantity_price`, `price` FROM `prod_shipping_price` WHERE `prodid` = $prodId AND `shipping_location` = $pin ";
        $resPrice=mysqli_query($con1,$sqlPrice);
        $rowPrice=mysqli_fetch_assoc($resPrice);
        $shipQtyPrice=$rowPrice["quantity_price"];
        $shipBasePrice=$rowPrice["price"];
    }
    else{
        $shipQtyPrice=0;
        $shipBasePrice=0;
    }


  

    //get from prod
    $sql_query1 = "SELECT `avg_confrmn_time`, `avg_response_time`, `avg_prcessing_time`, `avg_shpping_time`, `base_price` , `bulk_discount_id`, `offer_id` FROM `product` WHERE `prodid` = $prodId";
    $result1 = mysqli_query($con1, $sql_query1);
    $row1 = mysqli_fetch_assoc($result1);
    

    $offerIdProduct = $row1["offer_id"];
    $bulkDiscId=$row1["bulk_discount_id"];

    $sqlBulkPrice="SELECT `quant`, `discount` FROM `bulk_discount` WHERE `prodid` = $prodId AND `id` = $bulkDiscId ";
    $resBulkPrice=mysqli_query($con1,$sqlBulkPrice);
    $rowBulkPrice=mysqli_fetch_assoc($resBulkPrice);
    $quantBulk=$rowBulkPrice["quant"];
    $discBulk=$rowBulkPrice["discount"];

    //calc date
    $totalTime = $row1["avg_confrmn_time"] + $row1["avg_response_time"] + $row1["avg_prcessing_time"] + $row1["avg_shpping_time"];
    $totalTime = ($totalTime / 24);
    $date = $tDateValue["tDate"];
    $date = date_create("$date");
    $items = round(strval($totalTime));
    $x = "{$items} days";
    date_add($date, date_interval_create_from_date_string($x));
    $deliveryDate = date_format($date, "Y-m-d");


    $basePrice = $row1["base_price"];

    //get discount
    $sqlDisc = "SELECT * FROM `offer` where `id` =  $offerIdProduct";
    $resDisc = mysqli_query($con1, $sqlDisc);
    $rowDisc = mysqli_fetch_array($resDisc);
    $discountInfo = array('percentage' => $rowDisc["percentage"]);
    $disc = $discountInfo["percentage"];


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
        if($productQuantity>=$quantBulk){
            // $disc = $disc +$discBulk;
            $amountBulkDisc=$basePrice*($discBulk/100);
            $priceBulc=$basePrice-$amountBulkDisc + $varPrice;
            $bulkPriceTotal=$priceBulc*$productQuantity;

            $amountDisc=$bulkPriceTotal*($disc/100);
            $price=$bulkPriceTotal-$amountDisc;

            $totalAmountQt=$price+$qtPrice+$shipBasePrice+$tax;
            $totalAmount=round($totalAmountQt);
        }
        else{
            $amountBulkDisc=0;
            $priceBulc=$basePrice-$amountBulkDisc + $varPrice;
            $bulkPriceTotal=$priceBulc*$productQuantity;

            $amountDisc=$bulkPriceTotal*($disc/100);
            $price=$bulkPriceTotal-$amountDisc;

            $totalAmountQt=$price+$qtPrice+$shipBasePrice+$tax;
            $totalAmount=round($totalAmountQt);
        }
    }
    else if($deliveryOption=="hd")
    {
        $qtPrice=0;
        $shipBasePrice=0;
        $shipOption=2;
        if($productQuantity>=$quantBulk){
            $amountBulkDisc=$basePrice*($discBulk/100);
            $priceBulc=$basePrice-$amountBulkDisc+ $varPrice;
            $bulkPriceTotal=$priceBulc*$productQuantity;

            $amountDisc=$bulkPriceTotal*($disc/100);
            $price=$bulkPriceTotal-$amountDisc;

            $totalAmountQt=$price+$qtPrice+$shipBasePrice+$tax;
            $totalAmount=round($totalAmountQt);
            // $disc = $disc +$discBulk;
        }
        else{
            $amountBulkDisc=0;
            $priceBulc=$basePrice-$amountBulkDisc+ $varPrice;
            $bulkPriceTotal=$priceBulc*$productQuantity;

            $amountDisc=$bulkPriceTotal*($disc/100);
            $price=$bulkPriceTotal-$amountDisc;

            $totalAmountQt=$price+$qtPrice+$shipBasePrice+$tax;
            $totalAmount=round($totalAmountQt);
        }
    }
    else if($deliveryOption=="pickup")
    {
        $qtPrice=0;
        $shipBasePrice=0;
        $shipOption=3;
        if($productQuantity>=$quantBulk){
            $amountBulkDisc=$basePrice*($discBulk/100);
            $priceBulc=$basePrice-$amountBulkDisc+ $varPrice;
            $bulkPriceTotal=$priceBulc*$productQuantity;

            $amountDisc=$bulkPriceTotal*($disc/100);
            $price=$bulkPriceTotal-$amountDisc;

            $totalAmountQt=$price+$qtPrice+$shipBasePrice+$tax;
            $totalAmount=round($totalAmountQt);
            // $disc = $disc +$discBulk;
        }
        else{
            $amountBulkDisc=0;
            $priceBulc=$basePrice-$amountBulkDisc+ $varPrice;
            $bulkPriceTotal=$priceBulc*$productQuantity;

            $amountDisc=$bulkPriceTotal*($disc/100);
            $price=$bulkPriceTotal-$amountDisc;

            $totalAmountQt=$price+$qtPrice+$shipBasePrice+$tax;
            $totalAmount=round($totalAmountQt);
        }
    }

    // if($deliveryOption=="shipping")
    // {
    //     if($productQuantity==1)
    //     {
    //         $qtPrice=0;
    //     }
    //     else{
    //         $qt=$productQuantity-1;
    //         $qtPrice=$qt*$shipQtyPrice;
    //     } 
    //     $shipOption=1;
    //     if($quantBulk>=$productQuantity){
    //         $disc = $disc +$discBulk;
    //     }
    // }
    // else if($deliveryOption=="hd")
    // {
    //     $qtPrice=0;
    //     $shipBasePrice=0;
    //     $shipOption=2;
    //     if($quantBulk>=$productQuantity){
    //         $disc = $disc +$discBulk;
    //     }
    // }
    // else if($deliveryOption=="pickup")
    // {
    //     $qtPrice=0;
    //     $shipBasePrice=0;
    //     $shipOption=3;
    //     if($quantBulk>=$productQuantity){
    //         $disc = $disc +$discBulk;
    //     }
    // }

    // //total price calc
    // // $basePriceTotal = $basePrice * $productQuantity;
    // // $amount = $basePrice * ($disc / 100);
    // $amountDisc=$basePrice*($disc/100);
    // $price=$basePrice-$amountDisc;
    // $basePriceTotal=$price*$productQuantity;
    // $totalAmountQt=$basePriceTotal+$qtPrice+$shipBasePrice;
    // $totalAmount=round($totalAmountQt);
    // // $price=round($price);
    // // $basePriceTotal=$price*$productQuantity;
    // // $totalAmount=$basePriceTotal+$varPrice;f
    echo json_encode($data = array('tPrice' => $totalAmount, 'dDate' => $deliveryDate));
?>