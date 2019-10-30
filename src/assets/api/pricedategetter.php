<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $pin = $_POST["pin"];
    $productQuantity = $_POST["productQuantity"];
    $deliveryOption = $_POST["deliveryOption"];

    $data = array();

    //get current date
    $sql="SELECT CURRENT_DATE";
    $res=mysqli_query($con1,$sql);
    $row=mysqli_fetch_assoc($res);
    $tDateValue=array('tDate'=>$row["CURRENT_DATE"]);


    $sqlPrice="SELECT `quantity_price`, `price` FROM `prod_shipping_price` WHERE `prodid` = $prodId AND `shipping_location` = $pin ";
    $resPrice=mysqli_query($con1,$sqlPrice);
    $rowPrice=mysqli_fetch_assoc($resPrice);
    $shipQtyPrice=$rowPrice["quantity_price"];
    $shipBasePrice=$rowPrice["price"];

  

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
        if($quantBulk>=$productQuantity){
            $disc = $disc +$discBulk;
        }
    }
    else if($deliveryOption=="cod")
    {
        if($productQuantity==1)
        {
            $qtPrice=0;
        }
        else{
            $qt=$productQuantity-1;
            $qtPrice=$qt*$shipQtyPrice;
        } 
        $shipOption=2;
        if($quantBulk>=$productQuantity){
            $disc = $disc +$discBulk;
        }
    }
    else if($deliveryOption=="pickup")
    {
        $qtPrice=0;
        $shipBasePrice=0;
        $shipOption=3;
        if($quantBulk>=$productQuantity){
            $disc = $disc +$discBulk;
        }
    }

    //total price calc
    // $basePriceTotal = $basePrice * $productQuantity;
    // $amount = $basePrice * ($disc / 100);
    $amountDisc=$basePrice*($disc/100);
    $price=$basePrice-$amountDisc;
    $basePriceTotal=$price*$productQuantity;
    $totalAmountQt=$basePriceTotal+$qtPrice+$shipBasePrice;
    $totalAmount=round($totalAmountQt);
    // $price=round($price);
    // $basePriceTotal=$price*$productQuantity;
    // $totalAmount=$basePriceTotal+$varPrice;
    echo json_encode($data = array('tPrice' => $totalAmount, 'dDate' => $deliveryDate));
?>