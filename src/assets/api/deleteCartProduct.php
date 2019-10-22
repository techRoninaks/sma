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
    $variantPrice=$row["variant_price"];
    $hasImage=$row["has_image"];
    $deliveryDate=$row["delivery_date"];
    $userId=$row["user_id"];
    $giftTitle=$row["gift_title"];
    $giftOption=$row["gift_option"];
    

$sql="SELECT CURRENT_DATE";
$res=mysqli_query($con1,$sql);
$row=mysqli_fetch_assoc($res);
$tDateValue=array('tDate'=>$row["CURRENT_DATE"]);

//get shipping times
$sql_query1 = "SELECT `avg_confrmn_time`, `avg_response_time`, `avg_prcessing_time`, `avg_shpping_time`, `base_price` FROM `product` WHERE `prodid` = $prodid";  
$result1= mysqli_query($con1, $sql_query1);
$row1=mysqli_fetch_assoc($result1);
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

$sql_query1 ="SELECT * FROM `product` WHERE `prodid` = $prodid";
$result = mysqli_query($con1, $sql_query1);
$row=mysqli_fetch_assoc($result);
$shopid = $row['shop_id'];
$basePrice=$row["base_price"];


$varId=$variantsChosen;
// echo $varId;

//get discount info
$sqlDisc = "SELECT * FROM `offer` where prodid =  $prodid  ";    
$resDisc=mysqli_query($con1,$sqlDisc);
// var_dump($resDisc);
// echo $sqlDisc;
$rowDisc=mysqli_fetch_array($resDisc);
$discountInfo=array('percentage' => $rowDisc["percentage"]);

$disc=$discountInfo["percentage"];

$amountDisc=$basePrice*($disc/100);
$price=$basePrice-$amountDisc;
$basePriceTotal=$price*$quantity;
$totalAmount=$basePriceTotal;
$totalAmount=round($totalAmount);


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


$sql_query3 = "SELECT * FROM `purchase_order` where customerid = $userId ORDER BY  `purchase_order`.`customerid` DESC LIMIT 1 ";
$result3 = mysqli_query($con2, $sql_query3);
$row=mysqli_fetch_assoc($result3);
$orderid = $row['orderid'];

$sql_query2 = " INSERT INTO `customer_order` (`prodid`,`quantity`,`variants_chosen`,`gift_address`,`is_rfq`,`gift_note`,`total_price`,`base_price`,`discount`,`variantprice`,`has_image`,`delivey_date`,`gift_title`,`gift_option`,`orderid`,`shippingprice`,`tax`) VALUES ($prodid,$quantity,$variantsChosen,NULL,0,NULL,$totalAmount,$basePrice,$disc,0,0,'$deliveryDate',NULL,0,$orderid,0, 0)";
$result2 = mysqli_query($con2, $sql_query2); 


$sql_query3 = "SELECT * FROM `customer_order` where prodid = $prodid ORDER BY `customer_order`.`coid` DESC  LIMIT 1 ";
$result3 = mysqli_query($con2, $sql_query3);
$row=mysqli_fetch_assoc($result3);
$orderid = $row['coid'];
echo $orderid;

}

else{
$sql_query4 = "DELETE FROM `cart` WHERE prodid = $prodid and user_id = $userId";
$result4 = mysqli_query($con2,$sql_query4);
echo $sql_query4;
}



?>