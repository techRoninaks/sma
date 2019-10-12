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

    $data = array();


    //shipping id
    if($deliveryOption=="shipping")
    {
        $shipOption=1;
    }
    else if($deliveryOption=="cod")
    {
        $shipOption=2;
    }
    else if($deliveryOption=="pickup")
    {
        $shipOption=3;
    }
    //get current date
    $sql="SELECT CURRENT_DATE";
    $res=mysqli_query($con1,$sql);
    $row=mysqli_fetch_assoc($res);
    $tDateValue=array('tDate'=>$row["CURRENT_DATE"]);
    
    //get shipping times
    $sql_query1 = "SELECT `avg_confrmn_time`, `avg_response_time`, `avg_prcessing_time`, `avg_shpping_time`, `base_price` FROM `product` WHERE `prodid` = $prodId";    
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

// $y="2013-03-15";
// $date=date_create($y);
// //$date=date("Y-m-d");

// //echo $date."<br>";
// $totalTime=3484;
// $totalTime=($totalTime/24);
// //echo $totalTime."<br>";
// $items = round(strval($totalTime));
// $x="{$items} days";
// //echo $x."<br>";
// date_add($date,date_interval_create_from_date_string($x));

// $z= date_format($date,"Y-m-d");
// echo $z;



    $basePrice=$row1["base_price"];
    //get variant info
    $sqlVariant = "SELECT * FROM `variant_info` where `value` =  '$productVariant'";    
    $resVariant=mysqli_query($con1,$sqlVariant);
    $rowVariant=mysqli_fetch_array($resVariant);
    // echo $sqlVariant;
    // var_dump($rowVariant);
    $variantInfo=array('variantId' => $rowVariant["variantid"], 'price' =>$rowVariant["price"]);

    $varId=$variantInfo["variantId"];
    $varPrice=$variantInfo["price"];


    //get discount info
    $sqlDisc = "SELECT * FROM `offer` where prodid =  $prodId  ";    
    $resDisc=mysqli_query($con1,$sqlDisc);
    // var_dump($resDisc);
    // echo $sqlDisc;
    $rowDisc=mysqli_fetch_array($resDisc);
    $discountInfo=array('percentage' => $rowDisc["percentage"]);

    $disc=$discountInfo["percentage"];

    //total price calc
    // $basePriceTotal=$basePrice*$productQuantity;
    // $amount=$basePriceTotal*($disc/100);
    // $totalAmount=$amount+$varPrice;
    $amountDisc=$basePrice*($disc/100);
    $price=$basePrice-$amountDisc;
    $basePriceTotal=$price*$productQuantity;
    $totalAmount=$basePriceTotal+$varPrice;

    
    $sqlQuery4 ="INSERT INTO `cart`(`prodid`, `quantity`, `variants_chosen`, `gift_address`, `gift_note`, `total_price`, `discount`, `variant_price`, `has_image`, `delivery_date`, `require_delivery_date`, `is_ordered`, `user_id`, `gift_title`, `gift_option`) VALUES ($prodId,$productQuantity,$varId,'$giftAddress','$giftNote',$totalAmount,$disc,$varPrice,0,'$deliveryDate',$reqDD,0,$userId,'$giftTitle',$isGift)";
    $result4= mysqli_query($con2,$sqlQuery4);

    echo $result4;
?>





