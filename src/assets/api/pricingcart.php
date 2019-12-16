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
          $sql_queryVar="SELECT * FROM `variant_info` where `value` =  '$spiltVariant[$variantC]'";
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
    //   $disc=$discountInfo["percentage"];
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
  
  
      //final price calc
      $discPrice = $minBulk * ((100-$disc)/100);
      $price = $discPrice + $qtPrice + $shipBasePrice;
      $priceAfterTax = $price * (1+($tax/100));
      $totalAmount = round($priceAfterTax);
  
      // echo $totalAmount;
  
  

    
    $sqlQuery4 ="INSERT INTO `cart`(`prodid`, `quantity`, `variants_chosen`, `gift_address`, `gift_note`, `total_price`, `discount`, `variant_price`, `has_image`, `delivery_date`, `require_delivery_date`, `is_ordered`, `user_id`, `gift_title`, `gift_option`) VALUES ($prodId,$productQuantity,'$varId','$giftAddress','$giftNote',$totalAmount,$disc,$varPrice,0,'$deliveryDate',$reqDD,0,$userId,'$giftTitle',$isGift)";
    $result4= mysqli_query($con2,$sqlQuery4);
    mysqli_close($con1);
    mysqli_close($con2);
    echo $result4;
?>