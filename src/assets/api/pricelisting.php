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
    $pin = $_POST["pin"];

    $image0 = $_POST["image0"];
    $image1 = $_POST["image1"];
    $image2 = $_POST["image2"];
    $image3 = $_POST["image3"];
    $image4 = $_POST["image4"];
    $image5 = $_POST["image5"];
    $image6 = $_POST["image6"];
    $image7 = $_POST["image7"];
    $image8 = $_POST["image8"];
    $image9 = $_POST["image9"];

    $imageU0 = $_POST["imageU0"];
    $imageU1 = $_POST["imageU1"];
    $imageU2 = $_POST["imageU2"];
    $imageU3 = $_POST["imageU3"];
    $imageU4 = $_POST["imageU4"];
    $imageU5 = $_POST["imageU5"];
    $imageU6 = $_POST["imageU6"];
    $imageU7 = $_POST["imageU7"];
    $imageU8 = $_POST["imageU8"];
    $imageU9 = $_POST["imageU9"];

    $mob = 0;

    $isRfq = 0;
 
    $data = array();


    //get tax
    $sqlTax="SELECT value FROM `web_settings` where name = 'tax' ";
    // echo $sqlTax;
    $resTax=mysqli_query($con1,$sqlTax);
    $rowTax=mysqli_fetch_assoc($resTax);
    // echo $tax;
      
    //get current date
    $sql="SELECT CURRENT_DATE";
    $res=mysqli_query($con1,$sql);
    $row=mysqli_fetch_assoc($res);
    $tDateValue=array('tDate'=>$row["CURRENT_DATE"]);
    
    //get shipping times
    $sql_query1 = "SELECT `avg_confrmn_time`, `avg_response_time`, `avg_prcessing_time`, `avg_shpping_time`, `base_price` , `bulk_discount_id` ,`offer_id` FROM `product` WHERE `prodid` = $prodId";    
    $result1= mysqli_query($con1, $sql_query1);
    $row1=mysqli_fetch_assoc($result1);
    if($reqDDate=="none"){
        $totalTime=$row1["avg_confrmn_time"]+$row1["avg_response_time"]+$row1["avg_prcessing_time"]+$row1["avg_shpping_time"];
        $totalTime=($totalTime/24);

        $date=$tDateValue["tDate"];
        // echo $date;
        $date=date_create("$date");

        $items = round(strval($totalTime));
        $x="{$items} days";
        date_add($date,date_interval_create_from_date_string($x));

        $deliveryDate= date_format($date,"Y-m-d");
        // echo $deliveryDate;
        $reqDD=0;
        $orderStatus = 'processing';
    }
    else if($reqDDate=='orderConf'){
        $deliveryDate='2025-02-02 12:56:15';
        $reqDD=1;
        $orderStatus = 'pending_confirmation';
    }
    else{
        $deliveryDate=$reqDDate;
        $reqDD=1;
        $orderStatus = 'pending_confirmation';

    }



    //get price
    $basePrice=$row1["base_price"];
    $bulkDiscId=$row1["bulk_discount_id"];
    $offerIdProduct = $row1["offer_id"];
    $tax=$rowTax["value"];


    //variant price
    $spiltVariant = explode(",", $productVariant);  
    $variantCount = sizeof($spiltVariant);
    $varPrice = 0;
    $varId="";
    for($variantC=0;$variantC<$variantCount;$variantC++){
        $sql_queryVar="SELECT * FROM `variant_info` where `value` =  '$spiltVariant[$variantC]' and prodid = $prodId ";
        // echo $sql_queryVar;
        $resultVar = mysqli_query($con1, $sql_queryVar);
        $rowVariant=mysqli_fetch_array($resultVar);
        $varIdValue=$rowVariant["variantid"];
        $varPriceValue=$rowVariant["price"];
        $varId = $varIdValue.",".$varId;
        $varPrice = $varPrice + $varPriceValue;
    }

    $basePrice = $basePrice + $varPrice;
        
    //get bulk disc values
    $sqlBulkPrice="SELECT `quant`, `discount` FROM `bulk_discount` WHERE `prodid` = $prodId GROUP BY `quant` ASC";
    $resBulkPrice=mysqli_query($con1,$sqlBulkPrice);
    if (mysqli_num_rows ($resBulkPrice)!= 0 )
    {
       $countBulkQty=0;
       $countBulk=0;
       while ($rowBulkPrice=mysqli_fetch_assoc($resBulkPrice)) {
           $dataBulk[$countBulk++] = array('quant' => $rowBulkPrice["quant"], 'discount' => $rowBulkPrice["discount"]);
       }
       // echo json_encode($dataBulk);
       // echo $sqlBulkPrice;
       
       //find bulk array where quant < prouct qty
       $bulkSize = sizeof($dataBulk);
       $bCount = 0;
       $bulkQtyArray=array();
       if($bulkSize!=0){
           while($bCount<$bulkSize){
               $xBulk=$dataBulk[$bCount]['quant'];
               // echo $xBulk;
               if($productQuantity>=$xBulk){
                   // $bulkQtyArray[$bCount] = $xBulk;
                   $bulkQtyArray[$bCount] = array('quant' => $xBulk, 'discount' => $dataBulk[$bCount]['discount']);
               }
               $bCount++;

           }
           if(sizeof($bulkQtyArray)!=0){
               $bulkQtyArraySize = sizeof($bulkQtyArray);
           }
           else{
               $bulkQtyArray=array();
               $bulkQtyArraySize=sizeof($bulkQtyArray);
           }
           // echo json_encode($bulkQtyArray)."<br>";
       }
       else{
           $bulkQtyArray=array();
           $bulkQtyArraySize=sizeof($bulkQtyArray);
       }

   
       //now find / and apply disc an % and apply no disc , add both and find total bulk price, then check for smallest price of total and send it as bulk disc
       $bQCount = 0;
       $minBulk = $basePrice * $productQuantity;
       //  echo $minBulk."<br>";
       // echo $bulkQtyArraySize."<br>";
       if($bulkQtyArraySize!=0){
           while($bQCount<$bulkQtyArraySize){
               $xBulkD= $bulkQtyArray[$bQCount]['discount'];
               $xBulkQ= $bulkQtyArray[$bQCount]['quant'];
               // echo $bQCount ."<". $bulkQtyArraySize."<br>";
       
               // echo $xBulkD ."-". $xBulkQ;
               if($productQuantity>=$xBulkQ){
                   $divBulkD = $productQuantity / $xBulkQ;
                   $modBulkD = $productQuantity % $xBulkQ; 
                   // echo $xBulkD ."-". $xBulkQ."<br>";
                   // echo $divBulkD ."<->". $divBulk."<br>";
                   $divBulkD = floor($divBulkD);
                   $totalMod = $divBulkD * $xBulkQ;
       
                   $bulkVal1 = $basePrice * $totalMod * ((100-$xBulkD)/100);
                   $bulkVal2 = $basePrice * $modBulkD;
                   // echo $bulkVal1 ."-". $bulkVal2."<br>";
       
                   $bulkFinal[$bQCount] = $bulkVal1 + $bulkVal2;
                   // echo $bulkFinal[$bQCount]."<br>";
                   // echo $minBulk;
               }
               if($minBulk >= $bulkFinal[$bQCount]){
                   $minBulk = $bulkFinal[$bQCount];
                   // echo $minBulk;
               }
               $bQCount++;
           }
       
       }
    }
    else if(mysqli_num_rows ($resBulkPrice) == 0 )
    {
       $minBulk = $basePrice * $productQuantity;
    }

    //shipping price
    $sqlPrice="SELECT `quantity_price`, `price` FROM `prod_shipping_price` WHERE `prodid` = $prodId AND `shipping_location` = $pin ";
    $resPrice=mysqli_query($con1,$sqlPrice);
    $rowPrice=mysqli_fetch_assoc($resPrice);
    $shipQtyPrice=$rowPrice["quantity_price"];
    $shipBasePrice=$rowPrice["price"];


    //get discount info
    $sqlDisc = "SELECT * FROM `offer` where `id` =  $offerIdProduct";   
    $resDisc=mysqli_query($con1,$sqlDisc);
    $rowDisc=mysqli_fetch_array($resDisc);
    $discountInfo=array('percentage' => $rowDisc["percentage"]);
    // $disc=$discountInfo["percentage"];
    $offStartDate = $rowDisc["from_time_stamp"];
    $offEndDate = $rowDisc["to_tme_Stamp"];
    $tDateValue2=$row["CURRENT_DATE"];
    $sql="SELECT DATEDIFF('$tDateValue2', '$offEndDate') AS DateDiffNew, DATEDIFF('$offStartDate', '$tDateValue2') AS DateDiffOld";
    // echo $sql;
    $res=mysqli_query($con1,$sql);
    $row=mysqli_fetch_assoc($res);
    $ddN=$row["DateDiffNew"];
    $ddO=$row["DateDiffOld"];
    //  echo $ddN."<br>".$ddO."<br>".$tDateValue2."<br>".$sql."<br>";
    // ($ddN>0 and $ddO<0) OR $ddO<0 
    if($ddN<0 AND $ddO<0){
        $disc=$discountInfo["percentage"];
        // echo 1;
    }
    else
    {
        // echo 2;
        $disc = 0;
    }

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
    else if($deliveryOption=="hd")
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

    // echo $minBulk."<br>";
    //final price calc
    $discPrice = $minBulk * ((100-$disc)/100);
    $price = $discPrice + $qtPrice + $shipBasePrice;
    $priceAfterTax = $price * (1+($tax/100));
    $totalAmount = round($priceAfterTax);

    echo $shipBasePrice;
    echo $totalAmount;



   //purchase order insertion

    $sql_query2 = "INSERT INTO `purchase_order` (`sellerid`, `customerid`, `shipping_option`, `order_status`,`cancellation_message`,`delivery_date`, `remarks`,`is_rfq`, `total_amnt`, `payment_mode`,
    `is_rated`, `transaction_id`, `require_delivery_date`, `variants_chosen`, `addr_id`) VALUES  ($sellerId,$userId,$shipOption,'$orderStatus',null,'$deliveryDate',null,$isRfq,$totalAmount,'pending',
    0,0,$reqDD,'$varId',0)";
    $result2 = mysqli_query($con2, $sql_query2);
    echo $sql_query2;

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

        if($imageU0==1){
            $image=$image0;
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
                $file = UPLOAD_DIR.'custom'.$orderId.'_0.jpg';
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
        if($imageU1==1){
            $image=$image1;
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
                $file = UPLOAD_DIR.'custom'.$orderId.'_1.jpg';
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
        if($imageU2==1){
            $image=$image2;
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
                $file = UPLOAD_DIR.'custom'.$orderId.'_2.jpg';
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
        if($imageU3==1){
            $image=$image3;
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
                $file = UPLOAD_DIR.'custom'.$orderId.'_3.jpg';
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
        if($imageU4==1){
            $image=$image4;
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
                $file = UPLOAD_DIR.'custom'.$orderId.'_4.jpg';
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
        if($imageU5==1){
            $image=$image5;
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
                $file = UPLOAD_DIR.'custom'.$orderId.'_5.jpg';
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
        if($imageU6==1){
            $image=$image6;
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
                $file = UPLOAD_DIR.'custom'.$orderId.'_6.jpg';
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
        if($imageU7==1){
            $image=$image7;
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
                $file = UPLOAD_DIR.'custom'.$orderId.'_7.jpg';
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
        if($imageU8==1){
            $image=$image8;
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
                $file = UPLOAD_DIR.'custom'.$orderId.'_8.jpg';
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
        if($imageU9==1){
            $image=$image9;
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
                $file = UPLOAD_DIR.'custom'.$orderId.'_9.jpg';
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
            
    }
    // echo $image;
    // upload image


    //insertion in customer order
    $sql_query3 = "INSERT INTO `customer_order`(`prodid`, `quantity`, `variants_chosen`, `gift_option`, `gift_note`, `gift_title`, `gift_address`, `is_rfq`,
    `base_price`, `qty_price`, `total_price`, `discount`, `shippingprice`, `tax`, `variantprice`, `has_image`, `orderid`, `promo_disc`, `invoice_number`, 
    `delivery_date`, `shipping_tracking_number`, `shipping_tracking_hyperlink`) VALUES ($prodId,$productQuantity,'$varId',$isGift,null,null,null,$isRfq,$basePrice,$qtPrice,
    $totalAmount,$disc,$shipBasePrice,$tax,$varPrice,$imageUploaded,$orderId,null,0,'$deliveryDate',null,null)";
    $result3 = mysqli_query($con2, $sql_query3);
    echo $sql_query3;
    //customer order id
    $sqlCustOrder="SELECT `coid` FROM `customer_order`  where `orderid`=$orderId ORDER BY orderid DESC LIMIT 1";
    $resCustOrder=mysqli_query($con2,$sqlCustOrder);
    $rowCustOrder=mysqli_fetch_assoc($resCustOrder);
    // echo $sqlCustOrder;
    // var_dump($rowOrder);
    $orderCustInfo=array('coid'=>$rowCustOrder["coid"]);
    
    $coId=$orderCustInfo["coid"];


    $spiltMsg = explode(",", $message);  
    for($msgC=0;$msgC<$msgCount;$msgC++){
        $sql_query4="INSERT INTO `order_message`(`coid`, `message`) VALUES ($coId,'$spiltMsg[$msgC]')";
        $result4 = mysqli_query($con2, $sql_query4);
        // echo $sql_query4;
    }
    mysqli_close($con1);
    mysqli_close($con2);

    // echo $sql_query3;
    // echo $result4;
?>
