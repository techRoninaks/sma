<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $prodId = $_POST["prodId"];
    $userId = $_POST["userId"];
    $sellerId = $_POST["sellerId"];
    $message = $_POST["message"];
    $productVariant = $_POST["productVariant"];
    $productQuantity = $_POST["productQuantity"];
    $imageUploaded = $_POST["imageUploaded"];
    $deliveryOption = $_POST["deliveryOption"];
    $isRfq =$_POST["rfqEnabled"];
    $isGift =$_POST["giftEnabled"];
    $reqDDate =$_POST["desiredDate"];
    $giftTitle =$_POST["giftTitle"];
    $giftNote =$_POST["giftNote"];
    $giftAddress =$_POST["giftAddress"];
    $msgCount =$_POST["msgCount"];
    $pin =$_POST["pin"];

    $data = array();


    $sqlTax="SELECT value FROM `web_settings` where name = 'tax' ";
    // echo $sqlTax;
    $resTax=mysqli_query($con1,$sqlTax);
    $rowTax=mysqli_fetch_assoc($resTax);
    $tax=$rowTax["value"];

    //get current date
    $sql="SELECT CURRENT_DATE";
    $res=mysqli_query($con1,$sql);
    $row=mysqli_fetch_assoc($res);
    $tDateValue=array('tDate'=>$row["CURRENT_DATE"]);
    
    //get shipping times
    $sql_query1 = "SELECT `avg_confrmn_time`, `avg_response_time`, `avg_prcessing_time`, `avg_shpping_time`, `base_price`, `bulk_discount_id` ,`offer_id` FROM `product` WHERE `prodid` = $prodId";    
    $result1= mysqli_query($con1, $sql_query1);
    $row1=mysqli_fetch_assoc($result1);
    if($reqDDate=="none"){
        $totalTime=$row1["avg_confrmn_time"]+$row1["avg_response_time"]+$row1["avg_prcessing_time"]+$row1["avg_shpping_time"];
        $totalTime=($totalTime/24);
        // $x="{$totalTime} days"; 
        // $today=date("Y-m-d");
        // $deliveryDate=date_add($today,date_interval_create_from_date_string($x)); 

        $date=$tDateValue["tDate"];
        // echo $date;
        $date=date_create("$date");

        $items = round(strval($totalTime));
        $x="{$items} days";
        date_add($date,date_interval_create_from_date_string($x));

        $deliveryDate= date_format($date,"Y-m-d");
        // echo $deliveryDate;
        $reqDD=0;

    }
    else{
        $deliveryDate=$reqDDate;
        $reqDD=1;
    }



    $bulkDiscId=$row1["bulk_discount_id"];
    $basePrice=$row1["base_price"];



    $sqlBulkPrice="SELECT `quant`, `discount` FROM `bulk_discount` WHERE `prodid` = $prodId AND `id` = $bulkDiscId ";
    $resBulkPrice=mysqli_query($con1,$sqlBulkPrice);
    $rowBulkPrice=mysqli_fetch_assoc($resBulkPrice);
    $quantBulk=$rowBulkPrice["quant"];
    $discBulk=$rowBulkPrice["discount"];

    $sqlPrice="SELECT `quantity_price`, `price` FROM `prod_shipping_price` WHERE `prodid` = $prodId AND `shipping_location` = $pin ";
    $resPrice=mysqli_query($con1,$sqlPrice);
    $rowPrice=mysqli_fetch_assoc($resPrice);
    $shipQtyPrice=$rowPrice["quantity_price"];
    $shipBasePrice=$rowPrice["price"];
    // echo "   ".$shipBasePrice.$sqlPrice."   ";
    $offerIdProduct = $row1["offer_id"];




    //get variant info
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


    // //get discount info
    // $sqlDisc = "SELECT * FROM `offer` where prodid =  $prodId  ";    
    // $resDisc=mysqli_query($con1,$sqlDisc);
    // // var_dump($resDisc);
    // // echo $sqlDisc;
    // $rowDisc=mysqli_fetch_array($resDisc);
    // $discountInfo=array('percentage' => $rowDisc["percentage"]);

    // $disc=$discountInfo["percentage"];

    //get discount info
    $sqlDisc = "SELECT * FROM `offer` where `id` =  $offerIdProduct";   
    $resDisc=mysqli_query($con1,$sqlDisc);
    // var_dump($resDisc);
    // echo $sqlDisc;
    $rowDisc=mysqli_fetch_array($resDisc);
    $discountInfo=array('percentage' => $rowDisc["percentage"]);

    $disc=$discountInfo["percentage"];

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
            $priceBulc=$basePrice-$amountBulkDisc+$varPrice;
            $bulkPriceTotal=$priceBulc*$productQuantity; 
            $amountDisc=$bulkPriceTotal*($disc/100);
            $price=$bulkPriceTotal-$amountDisc;

            $totalAmountQt=$price+$qtPrice+$shipBasePrice+$tax;
            $totalAmount=round($totalAmountQt);
        }
        else{
            $amountBulkDisc=0;
            $priceBulc=$basePrice-$amountBulkDisc+$varPrice;
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
            $priceBulc=$basePrice-$amountBulkDisc+$varPrice;
            $bulkPriceTotal=$priceBulc*$productQuantity;

            $amountDisc=$bulkPriceTotal*($disc/100);
            $price=$bulkPriceTotal-$amountDisc;

            $totalAmountQt=$price+$qtPrice+$shipBasePrice+$tax;
            $totalAmount=round($totalAmountQt);
            // $disc = $disc +$discBulk;
        }
        else{
            $amountBulkDisc=0;
            $priceBulc=$basePrice-$amountBulkDisc+$varPrice;
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
            $priceBulc=$basePrice-$amountBulkDisc+$varPrice;
            $bulkPriceTotal=$priceBulc*$productQuantity;

            $amountDisc=$bulkPriceTotal*($disc/100);
            $price=$bulkPriceTotal-$amountDisc;

            $totalAmountQt=$price+$qtPrice+$shipBasePrice+$tax;
            $totalAmount=round($totalAmountQt);
            // $disc = $disc +$discBulk;
        }
        else{
            $amountBulkDisc=0;
            $priceBulc=$basePrice-$amountBulkDisc+$varPrice;
            $bulkPriceTotal=$priceBulc*$productQuantity;

            $amountDisc=$bulkPriceTotal*($disc/100);
            $price=$bulkPriceTotal-$amountDisc;

            $totalAmountQt=$price+$qtPrice+$shipBasePrice+$tax;
            $totalAmount=round($totalAmountQt);
        }
    }
    //total price calc
    // $basePriceTotal=$basePrice*$productQuantity;
    // $amount=$basePriceTotal*($disc/100);
    // $totalAmount=$amount+$varPrice;
    // $amountDisc=$basePrice*($disc/100);
    // $price=$basePrice-$amountDisc;
    // $basePriceTotal=$price*$productQuantity;
    // $totalAmount=$basePriceTotal+$varPrice;

    
    $sqlQuery4 ="INSERT INTO `cart`(`prodid`, `quantity`, `variants_chosen`, `gift_address`, `gift_note`, `total_price`, `discount`, `variant_price`, `has_image`, `delivery_date`, `require_delivery_date`, `is_ordered`, `user_id`, `gift_title`, `gift_option`) VALUES ($prodId,$productQuantity,'$varId','$giftAddress','$giftNote',$totalAmount,$disc,$varPrice,0,'$deliveryDate',$reqDD,0,$userId,'$giftTitle',$isGift)";
    $result4= mysqli_query($con2,$sqlQuery4);

    echo $result4;
?>