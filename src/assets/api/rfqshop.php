<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $userId = $_POST["userId"];
    // $hasImage = $_POST["hasImage"];
    $shopLocation = $_POST["shopLocation"];    
    $note = $_POST["note"];
    $productRef = $_POST["productRef"];
    // $image = $_POST["image"];
    $sellerId = $_POST["sellerId"];
    $image0 = $_POST["image0"];
    $image1 = $_POST["image1"];
    $image2 = $_POST["image2"];
    $imageRU0 = $_POST["imageRU0"];
    $imageRU1 = $_POST["imageRU1"];
    $imageRU2 = $_POST["imageRU2"];
    $imageUploaded = $_POST["imageUploaded"];
    $mob=0;
    $data = array(); 
 
    $location =explode(" ", $shopLocation);
    $locId=$location[0];

    $sqlOrderAddress="SELECT `id` FROM `address`  where `addr1` LIKE '%$locId%' and `addr_type`='shipping' AND `mapping_id` = $userId ORDER BY id DESC LIMIT 1";
    $resOrderAddress=mysqli_query($con2,$sqlOrderAddress);
    $rowOrderAddress=mysqli_fetch_assoc($resOrderAddress);
    // echo $sqlOrderAddress;
    // var_dump($rowOrder);
    $orderInfoAddress=array('address'=>$rowOrderAddress["id"]);
    
    $addId=$orderInfoAddress["address"];


    $sql_query2 = "INSERT INTO `purchase_order` (`sellerid`, `customerid`, `shipping_option`, `order_status`,`cancellation_message`,`delivery_date`, `remarks`,`is_rfq`, `total_amnt`, `payment_mode`,`is_rated`, `transaction_id`, `require_delivery_date`, `variants_chosen`, `addr_id`) VALUES  ($sellerId,$userId,'undefined','pending_confirmation',null,null,null,1,0,'pending',0,0,0,0,$addId)";
    $result2 = mysqli_query($con2, $sql_query2);
    // echo $sql_query2;
    // echo "<br>";
    //orderid selection

    $sqlOrder="SELECT `orderid` FROM `purchase_order`  where `sellerid`=$sellerId and `customerid`=$userId ORDER BY orderid DESC LIMIT 1";
    $resOrder=mysqli_query($con2,$sqlOrder);
    $rowOrder=mysqli_fetch_assoc($resOrder);
    // echo $sqlOrder;
    // var_dump($rowOrder);
    $orderInfo=array('orderId'=>$rowOrder["orderid"]);
    
    $orderId=$orderInfo["orderId"];

    $spiltMsg = explode(",", $productRef);  
    $prodSize=sizeof($spiltMsg);
    // echo gettype($spiltMsg);
    // echo $spiltMsg[0];
    // echo $prodSize;
    $dataCnt=0;
    $countRev=0;

    while($prodSize>0){
        $dy=$spiltMsg[$dataCnt];
        $sql_queryRev ="SELECT `prodid` from `product` where `name` = '$dy' and `shop_id`=$shopId";
        // echo $sql_queryRev;
        $resultRev = mysqli_query($con1, $sql_queryRev);
        while($rowx=mysqli_fetch_assoc($resultRev)){
            $rev[$countRev++] = $rowx["prodid"];
        }
        $dataCnt++;
        $prodSize--;
    }
    $y=$rev;
    $id=implode("!~!",$y);
// echo $id;


    $sql_query="INSERT INTO `rfq`(`ref_prodid`, `user_id`, `orderid`, `product_name`, `has_image`, `note`) VALUES ('$id',$userId,$orderId,'$productRef',$imageUploaded,'$note')";
    $result = mysqli_query($con2, $sql_query);
    echo $sql_query;
    // echo "<br>";
    $sqlRfq="SELECT `tagid` FROM `rfq` WHERE `user_id` = $userId AND `orderid` = $orderId ";
    $resRfq=mysqli_query($con2,$sqlRfq);
    $rowRfq=mysqli_fetch_assoc($resRfq);
    $idRfq=$rowRfq["tagid"];

    if($imageUploaded==0){
        $imageUploaded=0;
    }
    else if($imageUploaded==1){
        $imageUploaded=1;

        if($imageRU0==1){
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
                $file = UPLOAD_DIR.'rfq'.$orderId.'_0.jpg';
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
                echo $success;
                // echo "<br>";
                // echo $dir.$file;
            }
        }
        if($imageRU1==1){
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
                define('UPLOAD_DIR','../images/order/'.$orderId.'/');
                //  echo $image;
                $file = UPLOAD_DIR.'rfq'.$orderId.'_1.jpg';
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
                echo $success;
                // echo "<br>";
                // echo $dir.$file;
            }
        }
        if($imageRU2==1){
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
                define('UPLOAD_DIR','../images/order/'.$orderId.'/');
                //  echo $image;
                $file = UPLOAD_DIR.'rfq'.$orderId.'_2.jpg';
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
                echo $success;
                // echo "<br>";
                // echo $dir.$file;
            }
        }
    }
    // if($image != 1){
    //     // $dir='../assets/images/shop/'.$shopId.'/';
    //     // mkdir($dir);
    //     if (!file_exists('../images/order/'.$orderId.'/')) {
    //         mkdir('../images/order/'.$orderId.'/', 0777, true);
    //         $dir='../images/order/'.$orderId.'/';
    //     }
    //     // if (!file_exists('../'.$shopId.'/')) {
    //     //     mkdir('../'.$shopId.'/', 0777, true);
    //     //     $dir='../assets/images/shop/'.$shopId.'/';
    //     // }
    //     define('UPLOAD_DIR', '../images/order/'.$orderId.'/');
    //     //  echo $image;
    //     $file = UPLOAD_DIR.'rfq'.$orderId.'.jpg';
    //     if($mob == 0){
    //         $img =explode(",", $image);
    //         // echo $img;
    //         $img[1] = str_replace(' ', '+', $img[1]);
    //         $imgVal=$img[1];
    //         // echo $img[1];
    //         $data = base64_decode($img[1]);
    //         // echo $data;

    //     }else{
    //         $data = base64_decode($image);
    //     }
    //     $success = file_put_contents($file, $data);
    //     // echo "<br>";        
    //     // echo "<br>";
    //     // echo $success;
    //     // echo "<br>";
    //     // echo $dir.$file;
    // }
    // echo json_encode(array('imgSrcLogo'=>$imgVal));
    $sql_query3 = "INSERT INTO `customer_order`(`prodid`, `quantity`, `variants_chosen`, `gift_option`, `gift_note`, `gift_title`, `gift_address`, `is_rfq`,
    `base_price`, `qty_price`, `total_price`, `discount`, `shippingprice`, `tax`, `variantprice`, `has_image`, `orderid`, `promo_disc`, `invoice_number`, 
    `delivery_date`, `shipping_tracking_number`, `shipping_tracking_hyperlink`) VALUES (0,1,'0',0,null,null,null,1,0,0,
    0,0,0,0,0,0,$orderId,null,0,null,null,null)";
    $result3 = mysqli_query($con2, $sql_query3);


    // echo $sql_query3;
    // echo $result3;

    $sqlThread="SELECT `id` FROM `thread` WHERE (`user1` = $userId AND `usertype1` = 'buyer' AND `user2` = $sellerId AND `usertype2` = 'seller') OR (`user2` = $userId AND `usertype2` = 'buyer' AND `user1` = $sellerId AND `usertype1` = 'seller')";
    $resThread=mysqli_query($con2,$sqlThread);
    $rowThread=mysqli_fetch_assoc($resThread);

    if (mysqli_num_rows ($resThread)!= 0 )
    {
        $idThread=$rowThread["id"];
    }
    else if(mysqli_num_rows ($resThread) == 0 )
    {
        
        $sqlT="INSERT INTO `thread` (`user1`,`user2`,`usertype1`,`usertype2`) VALUES ( $userId, $sellerId ,'buyer', 'seller')";
        $resT=mysqli_query($con2,$sqlT);

        $sqlThread2="SELECT `id` FROM `thread` WHERE (`user1` = $userId AND `usertype1` = 'buyer' AND `user2` = $sellerId AND `usertype2` = 'seller') OR (`user2` = $userId AND `usertype2` = 'buyer' AND `user1` = $sellerId AND `usertype1` = 'seller')";
        $resThread2=mysqli_query($con2,$sqlThread2);
        $rowThread2=mysqli_fetch_assoc($resThread2);
        $idThread=$rowThread2["id"];
    }

    
    $sqlMessage="INSERT INTO `message`(`threadid`, `message`, `senderid`, `sender_type`,`message_type`) VALUES ($idThread,'rfq_id!~!$idRfq',$userId,'buyer','rfq')";
    $resMessage=mysqli_query($con2,$sqlMessage);
    mysqli_close($con1);
    mysqli_close($con2);
    // echo $sqlThread;
    // echo $sqlT;
    // echo $sqlThread2;
    // echo $sqlMessage;
?>
