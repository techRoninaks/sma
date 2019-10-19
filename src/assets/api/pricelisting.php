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
    $msgCount =$_POST["msgCount"];
    $image = $_POST["image"];
    $mob = 0;

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
    // echo $sqlVariant;
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
    $totalAmount=round($totalAmount);
    //is image uploaded
//     if($imageUploaded==null){
//         $imageUploaded=0;
//     }
//     else{
//         $imageUploaded=1;
//     }




   //purchase order insertion

    $sql_query2 = "INSERT INTO `purchase_order` (`sellerid`, `customerid`, `shipping_option`, `order_status`,`cancellation_message`,`delivery_date`, `remarks`,`is_rfq`, `total_amnt`, `payment_mode`,
    `is_rated`, `transaction_id`, `require_delivery_date`, `variants_chosen`, `addr_id`) VALUES  ($sellerId,$userId,$shipOption,'pending_confirmation',null,'$deliveryDate',null,$isRfq,$totalAmount,'pending',
    0,0,$reqDD,$varId,0)";
    $result2 = mysqli_query($con2, $sql_query2);
    // echo $sql_query2;

    //orderid selection

    $sqlOrder="SELECT `orderid` FROM `purchase_order`  where `sellerid`=$sellerId and `customerid`=$userId ORDER BY orderid DESC LIMIT 1";
    $resOrder=mysqli_query($con2,$sqlOrder);
    $rowOrder=mysqli_fetch_assoc($resOrder);
    // echo $sqlOrder;
    // var_dump($rowOrder);
    $orderInfo=array('orderId'=>$rowOrder["orderid"]);
    
    $orderId=$orderInfo["orderId"];

    // echo $image;
    // upload image
           if($imageUploaded==0){

            $imageUploaded=0;

        }

        else if($imageUploaded==1){

            $imageUploaded=1;

            if($image != 1){

                // $dir='../assets/images/order/'.$orderId.'/';

                // mkdir($dir);

                if (!file_exists('../images/order/'.$orderId.'/')) {

                    mkdir('../images/order/'.$orderId.'/', 0777, true);

                    $dir='../images/order/'.$orderId.'/';

        

                }

                // if (!file_exists('../'.$orderId.'/')) {

                //     mkdir('../'.$orderId.'/', 0777, true);

                //     $dir='../assets/images/order/'.$orderId.'/';

        

                // }

                define('UPLOAD_DIR', '../images/order/'.$orderId.'/');

                //  echo $image;

                $file = UPLOAD_DIR.'custom'.$orderId.'.jpg';

                if($mob == 0){

                    $img =explode(",", $image);

                    // echo $img;

                    $img[1] = str_replace(' ', '+', $img[1]);

                    // echo $img[1];

                    $data = base64_decode($img[1]);

                    // echo $data;

        

                }else{

                    $data = base64_decode($image);

                }

                $success = file_put_contents($file, $data);

                // echo "<br>";        

                // echo "<br>";

                // echo $success;

                // echo "<br>";

                // echo $dir.$file;

            }

        }

    // echo $image;

    // upload image



    //insertion in customer order
    $sql_query3 = "INSERT INTO `customer_order`(`prodid`, `quantity`, `variants_chosen`, `gift_option`, `gift_note`, `gift_title`, `gift_address`, `is_rfq`,
    `base_price`, `qty_price`, `total_price`, `discount`, `shippingprice`, `tax`, `variantprice`, `has_image`, `orderid`, `promo_disc`, `invoice_number`, 
    `delivey_date`, `shipping_tracking_number`, `shipping_tracking_hyperlink`) VALUES ($prodId,$productQuantity,$varId,$isGift,null,null,null,$isRfq,$basePrice,0,
    $totalAmount,$disc,0,0,$varPrice,0,$orderId,null,0,'$deliveryDate',null,null)";
    $result3 = mysqli_query($con2, $sql_query3);
    // echo $sql_query3;
    //customer order id
    $sqlCustOrder="SELECT `coid` FROM `customer_order`  where `orderid`=$orderId ORDER BY orderid DESC LIMIT 1";
    $resCustOrder=mysqli_query($con2,$sqlCustOrder);
    $rowCustOrder=mysqli_fetch_assoc($resCustOrder);
    // echo $sqlOrder;
    // var_dump($rowOrder);
    $orderCustInfo=array('coid'=>$rowCustOrder["coid"]);
    
    $coId=$orderCustInfo["coid"];

    //message decode
    // for($msgC=0;$msgC<$msgCount;$msgC++){
    //     $msgValue=$message[$msgC];
    //     $sql_query4="INSERT INTO `order_message`(`coid`, `message`) VALUES ($coId,$msgValue)";
    //     $result4 = mysqli_query($con2, $sql_query4);
    //     echo $sql_query4;
    // }
    $spiltMsg = explode(",", $message);  
    for($msgC=0;$msgC<$msgCount;$msgC++){
        $sql_query4="INSERT INTO `order_message`(`coid`, `message`) VALUES ($coId,'$spiltMsg[$msgC]')";
        $result4 = mysqli_query($con2, $sql_query4);
        // echo $sql_query4;
    }


    // echo $sql_query3;
    // echo $result4;
?>
