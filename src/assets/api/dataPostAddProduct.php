<?php
  require "init.php";
// $prodid = $_POST['prodid'];

$image1 = $_POST["image1"];
$image2 = $_POST["image2"];
$image3 = $_POST["image3"];
$image4 = $_POST["image4"];
$image5 = $_POST["image5"];
$image6 = $_POST["image6"];
$image7 = $_POST["image7"];
$image8 = $_POST["image8"];
$image9 = $_POST["image9"];
$image10 = $_POST["image10"];

$name = $_POST['name'];
$short_desc = $_POST['short_desc'];
$Long_desc = $_POST['Long_desc'];
$spec = $_POST['spec'];
$shipping_option = $_POST['shipping_option'];
$base_price = $_POST['base_price'];
$bulk_discount_id = $_POST['bulk_discount_id'];
$offer_id = $_POST['offer_id'];

//   $returning_customers_count= $_POST['returning_customers_count'];
//   $product_view_count = $_POST['product_view_count'];
  //       $cmsn_dedtd = $_POST['cmsn_dedtd'];
$sellerid = $_POST['sellerid'];
// $category_id = $_POST['category_id'];
// $sub_catgry_id = $_POST['sub_catgry_id'];                      
$active_status = $_POST['active_status'];
$qty_avble = $_POST['qty_avble'];
//   $safe_qty = $_POST['safe_qty'];
//   $is_returnable = $_POST['is_returnable'];
  // $label_id = $_POST['label_id'];
$tags = $_POST['tags'];
//   $avg_confrmn_time = $_POST['avg_confrmn_time'];
//   $avg_response_time = $_POST['avg_response_time'];
$avg_prcessing_time = $_POST['avg_prcessing_time'];
$avg_shpping_time = $_POST['avg_shpping_time'];
$auto_cancel_time = $_POST['auto_cancel_time'];
$has_rfq = $_POST['has_rfq'];
$has_gift = $_POST['has_gift'];
$has_order_confmn = $_POST['has_order_confmn'];
$can_orderbydate = $_POST['can_orderbydate'];
$has_instant_buy = $_POST['has_instant_buy'];
$min_order_quant = $_POST['min_order_quant'];
$max_order_quant = $_POST['max_order_quant'];
$shipping_policy = $_POST['shipping_policy'];
$return_policy = $_POST['return_policy'];
$product_policy = $_POST['product_policy'];
// $shipping_location_id = $_POST['shipping_location_id'];
//   $rating = $_POST['rating'];
//   rating_count = $_POST['rating_count'];
//   $review_count = $_POST['review_count'];
//   $revenue_generated = $_POST['revenue_generated'];
//   $promo_id = $_POST['promo_id'];
//   $sold_count = $_POST['sold_count'];
//   $created_date = $_POST['created_date'];   
  // $remarks = $_POST['remarks'];
$can_upload_image = $_POST['can_upload_image'];
$max_no_of_image = $_POST['max_no_of_image'];
$add_custom_message_field = $_POST['add_custom_message_field'];

$title = $_POST['title'];

// $shipping_location = $_POST['shipping_location'];
$quantity_price = $_POST['quantity_price'];
$price = $_POST['price'];

// $location_alias = $_POST['location_alias'];
// $pincode = $_POST['pincode'];

  // $percentage = $_POST['percentage'];

  // $qua nt = $_POST['quant'];
  // $discount = $_POST['discount'];

   //shipping id
   if($shipping_option=="shipping")
   {
       $shipping_option=1;
   }
   else if($shipping_option=="cod")
   {
       $shipping_option=2;
   }
   else if($shipping_option=="pickup")
   {
       $shipping_option=3;
   }

   if($has_instant_buy == true)
   $has_instant_buy = 1;
   else if($has_instant_buy == false)
     $has_instant_buy = 0;

 if($has_rfq == true)
   $has_rfq = 1;
   else if($has_rfq == false)
     $has_rfq = 0;

 if($has_gift == true)
   $has_gift = 1;
   else if($has_gift == false)
     $has_gift = 0;

 if($has_order_confmn == true)
   $has_order_confmn = 1;
   else if($has_order_confmn == false)
     $has_order_confmn = 0;

 if($can_orderbydate == true)
   $can_orderbydate = 1;
   else if($can_orderbydate == false)
     $can_orderbydate = 0;

 if($active_status == true)
     $active_status = 1;
       else if($active_status == false)
         $active_status = 0;

 if($add_custom_message_field == true)
   $add_custom_message_field = 1;
       else if($add_custom_message_field == false)
         $add_custom_message_field = 0;
 
 if($can_upload_image == true)
   $can_upload_image = 1;
       else if($can_upload_image == false)
         $can_upload_image = 0;

   $sql_query5 ="SELECT * FROM `shop_details` WHERE `seller_id` = $sellerid";
   $result5 = mysqli_query($con2, $sql_query5);
   $row=mysqli_fetch_assoc($result5);
   $shop_id = $row['id'];
    //    echo $sql_query5;

    $sql_query7 ="SELECT * FROM `shipping_location_shop` WHERE `id` = $shop_id";
    $result7 = mysqli_query($con1, $sql_query7);
    $row=mysqli_fetch_assoc($result7);
    $shop_id = $row['id'];
       echo $sql_query7;


  

    $result = array();
    $status = "";
    // $sql_query1 = " INSERT INTO product' ('name','short_desc','Long_desc','spec','shipping_option','base_price','qty_avble','tags','avg_prcessing_time','avg_shpping_time','auto_cancel_time','min_order_quant','max_order_quant','max_no_of_image') VALUES ($name,$short_desc,$Long_desc,$spec,$shipping_option,$base_price,$qty_avble,$tags,$avg_prcessing_time,$avg_shpping_time,$auto_cancel_time,$min_order_quant,$max_order_quant,$max_no_of_image)";

    $sql_query1 = "INSERT INTO `product` (`name`,`short_desc`,`Long_desc`,`spec`,`shipping_option`,`base_price`,`qty_avble`,`tags`,`avg_prcessing_time`,`avg_shpping_time`,`auto_cancel_time`,`has_rfq`,`has_gift`,`has_order_confmn`,`can_orderbydate`,`has_instant_buy`,`min_order_quant`,`max_order_quant`,`shipping_policy`,`return_policy`,`product_policy`,`shipping_location_id`,`can_upload_image`,`max_no_of_image`,`add_custom_message_field`,`shop_id`,`category_id`,`sub_catgry_id`,`active_status`,`is_returnable`,`remarks`,`bulk_discount_id`,`offer_id`,`cmsn_dedtd`,`label_id`) VALUES ('$name','$short_desc','$Long_desc','$spec','$shipping_option',$base_price,$qty_avble,'$tags',$avg_prcessing_time,$avg_shpping_time,$auto_cancel_time,$has_rfq,$has_gift,$has_order_confmn,$can_orderbydate,$has_instant_buy,$min_order_quant,$max_order_quant,'$shipping_policy','$return_policy','$product_policy',5,$can_upload_image,$max_no_of_image,$add_custom_message_field,$shop_id,1,2,$active_status,1,'gshgdhsg',NULL,NULL,8,2)";
    $result1 = mysqli_query($con1, $sql_query1);
    // echo $sql_query1;


    
    $sql_query = "SELECT `prodid` FROM `product` where 1 ORDER BY `prodid` DESC LIMIT 1";
    $result = mysqli_query($con1, $sql_query);
    $rowprodid = mysqli_fetch_assoc($result);
    $prodid=$rowprodid["prodid"];
    // echo $prodid;
    

    $sql_query2 = " UPDATE `product` SET `prodid`= `$prodid`,`name`=`$name`,`short_desc`=`$short_desc`,`Long_desc`=`$Long_desc`,`spec`=`$spec`,`base_price`=$base_price,`qty_avble`=$qty_avble,`tags`=`$tags`,`avg_prcessing_time`=$avg_prcessing_time,`avg_shpping_time`=$avg_shpping_time,`auto_cancel_time`=$auto_cancel_time,`min_order_quant`=$min_order_quant,`max_order_quant`=$max_order_quant,`max_no_of_image` = $max_no_of_image where `prodid` = `$prodid`";


    $mob = 0;
        
    if($image1 != 1){
      if (!file_exists('../images/product/'.$prodid.'/')) {
          mkdir('../images/product/'.$prodid.'/', 0777, true);
          $dir='../images/product/'.$prodid.'/';
      }
          $dir='../images/product/'.$prodid.'/';
      define('UPLOAD_DIR', '../images/product/'.$prodid.'/');
      $file = UPLOAD_DIR.$prodid.'_1'.'.jpg';
      if($mob == 0){
          $img =explode(",", $image1);
          $img[1] = str_replace(' ', '+', $img[1]);
          $data = base64_decode($img[1]);
      }else{
          $data = base64_decode($image1);
      }
      $success = file_put_contents($file, $data);
  }
    
    if($image2 != 1){
      if (!file_exists('../images/product/'.$prodid.'/')) {
          mkdir('../images/product/'.$prodid.'/', 0777, true);
          $dir='../images/product/'.$prodid.'/';
      }
          $dir='../images/product/'.$prodid.'/';
      define('UPLOAD_DIR', '../images/product/'.$prodid.'/');
      $file = UPLOAD_DIR.$prodid.'_2'.'.jpg';
      if($mob == 0){
          $img =explode(",", $image2);
          $img[1] = str_replace(' ', '+', $img[1]);
          $data = base64_decode($img[1]);
      }else{
          $data = base64_decode($image2);
      }
      $success = file_put_contents($file, $data);
  }

  
    if($image3 != 1){
      if (!file_exists('../images/product/'.$prodid.'/')) {
          mkdir('../images/product/'.$prodid.'/', 0777, true);
          $dir='../images/product/'.$prodid.'/';
      }
          $dir='../images/product/'.$prodid.'/';
      define('UPLOAD_DIR', '../images/product/'.$prodid.'/');
      $file = UPLOAD_DIR.$prodid.'_3'.'.jpg';
      if($mob == 0){
          $img =explode(",", $image3);
          $img[1] = str_replace(' ', '+', $img[1]);
          $data = base64_decode($img[1]);
      }else{
          $data = base64_decode($image3);
      }
      $success = file_put_contents($file, $data);
  }

     
    if($image4 != 1){
      if (!file_exists('../images/product/'.$prodid.'/')) {
          mkdir('../images/product/'.$prodid.'/', 0777, true);
          $dir='../images/product/'.$prodid.'/';
      }
          $dir='../images/product/'.$prodid.'/';
      define('UPLOAD_DIR', '../images/product/'.$prodid.'/');
      $file = UPLOAD_DIR.$prodid.'_4'.'.jpg';
      if($mob == 0){
          $img =explode(",", $image4);
          $img[1] = str_replace(' ', '+', $img[1]);
          $data = base64_decode($img[1]);
      }else{
          $data = base64_decode($image4);
      }
      $success = file_put_contents($file, $data);
  }
  
    if($image5 != 1){
      if (!file_exists('../images/product/'.$prodid.'/')) {
          mkdir('../images/product/'.$prodid.'/', 0777, true);
          $dir='../images/product/'.$prodid.'/';
      }
          $dir='../images/product/'.$prodid.'/';
      define('UPLOAD_DIR', '../images/product/'.$prodid.'/');
      $file = UPLOAD_DIR.$prodid.'_5'.'.jpg';
      if($mob == 0){
          $img =explode(",", $image5);
          $img[1] = str_replace(' ', '+', $img[1]);
          $data = base64_decode($img[1]);
      }else{
          $data = base64_decode($image5);
      }
      $success = file_put_contents($file, $data);
  }
    
    if($image6 != 1){
      if (!file_exists('../images/product/'.$prodid.'/')) {
          mkdir('../images/product/'.$prodid.'/', 0777, true);
          $dir='../images/product/'.$prodid.'/';
      }
          $dir='../images/product/'.$prodid.'/';
      define('UPLOAD_DIR', '../images/product/'.$prodid.'/');
      $file = UPLOAD_DIR.$prodid.'_6'.'.jpg';
      if($mob == 0){
          $img =explode(",", $image6);
          $img[1] = str_replace(' ', '+', $img[1]);
          $data = base64_decode($img[1]);
      }else{
          $data = base64_decode($image6);
      }
      $success = file_put_contents($file, $data);
  }
   
    if($image7 != 1){
      if (!file_exists('../images/product/'.$prodid.'/')) {
          mkdir('../images/product/'.$prodid.'/', 0777, true);
          $dir='../images/product/'.$prodid.'/';
      }
          $dir='../images/product/'.$prodid.'/';
      define('UPLOAD_DIR', '../images/product/'.$prodid.'/');
      $file = UPLOAD_DIR.$prodid.'_7'.'.jpg';
      if($mob == 0){
          $img =explode(",", $image7);
          $img[1] = str_replace(' ', '+', $img[1]);
          $data = base64_decode($img[1]);
      }else{
          $data = base64_decode($image7);
      }
      $success = file_put_contents($file, $data);
  }
    
    if($image8 != 1){
      if (!file_exists('../images/product/'.$prodid.'/')) {
          mkdir('../images/product/'.$prodid.'/', 0777, true);
          $dir='../images/product/'.$prodid.'/';
      }
          $dir='../images/product/'.$prodid.'/';
      define('UPLOAD_DIR', '../images/product/'.$prodid.'/');
      $file = UPLOAD_DIR.$prodid.'_8'.'.jpg';
      if($mob == 0){
          $img =explode(",", $image8);
          $img[1] = str_replace(' ', '+', $img[1]);
          $data = base64_decode($img[1]);
      }else{
          $data = base64_decode($image8);
      }
      $success = file_put_contents($file, $data);
  }
    
  if($image9 != 1){
    if (!file_exists('../images/product/'.$prodid.'/')) {
        mkdir('../images/product/'.$prodid.'/', 0777, true);
        $dir='../images/product/'.$prodid.'/';
    }
        $dir='../images/product/'.$prodid.'/';
    define('UPLOAD_DIR', '../images/product/'.$prodid.'/');
    $file = UPLOAD_DIR.$prodid.'_9'.'.jpg';
    if($mob == 0){
        $img =explode(",", $image9);
        $img[1] = str_replace(' ', '+', $img[1]);
        $data = base64_decode($img[1]);
    }else{
        $data = base64_decode($image9);
    }
    $success = file_put_contents($file, $data);
}
   
if($image10 != 1){
  if (!file_exists('../images/product/'.$prodid.'/')) {
      mkdir('../images/product/'.$prodid.'/', 0777, true);
      $dir='../images/product/'.$prodid.'/';
  }
      $dir='../images/product/'.$prodid.'/';
  define('UPLOAD_DIR', '../images/product/'.$prodid.'/');
  $file = UPLOAD_DIR.$prodid.'_10'.'.jpg';
  if($mob == 0){
      $img =explode(",", $image10);
      $img[1] = str_replace(' ', '+', $img[1]);
      $data = base64_decode($img[1]);
  }else{
      $data = base64_decode($image10);
  }
  $success = file_put_contents($file, $data);
}


       // $sql_query2 = " UPDATE `product` SET `prodid`= '$prodid',`name`='$name',`short_desc`='$short_desc',`Long_desc`='$Long_desc',`spec`='$spec',`shipping_option`='$shipping_option',`base_price`='$base_price',`bulk_discount_id`='$bulk_discount_id,`offer_id`='$offer_id',`returning_customers_count`='$returning_customers_count',`product_view_count`='$product_view_count',`cmsn_dedtd`='$cmsn_dedtd',`shop_id`='$shop_id',`category_id`='$category_id',`sub_catgry_id`='$sub_catgry_id',`active_status`='$active_status',`qty_avble`='$qty_avble',`safe_qty`='$safe_qty',`is_returnable`='$is_returnable',`label_id`='$label_id',`tags`='$tags',`avg_confrmn_time`='$avg_confrmn_time',`avg_response_time`='$avg_response_time',`avg_prcessing_time`='$avg_prcessing_time',`avg_shpping_time`='$avg_shpping_time',`auto_cancel_time`='$auto_cancel_time',`has_rfq`='$has_rfq',`has_gift`='$has_gift',`has_order_confmn`='$has_order_confmn',`can_orderbydate`='$can_orderbydate',`has_instant_buy`='$has_instant_buy',`min_order_quant`='$min_order_quant',`max_order_quant`='$max_order_quant',`shipping_policy`='$shipping_policy',`return_policy`='$return_policy',`product_policy`='$product_policy',`shipping_location_id`='$shipping_location_id',`rating`='$rating',`rating_count`='$rating_count',`review_count`='$review_count',`revenue_generated`='$revenue_generated',`promo_id`='$promo_id',`sold_count`='$sold_count',`created_date`='$created_date',`remarks`='$remarks',`can_upload_image`='$can_upload_image',`max_no_of_image`='$max_no_of_image',`add_custom_message_field`='$add_custom_message_field' where prodid ='$prodid'";
    // $result2 = mysqli_query($con1, $sql_query2);
    // echo $sql_query2;



    $sql_query6 = "INSERT INTO `prod_message`(`prodid`,`title`) VALUES ($prodid,'$title')";
    $result6 = mysqli_query($con1, $sql_query6);
    // echo $sql_query6;
    
    $sql_query8 = "INSERT INTO `prod_shipping_price` (`prodid`,`shipping_location`,`type`,`quantity_price`,`price`) VALUES ($prodid,'cjnjecnej','djbcdhis',$quantity_price,$price)";
    $result8 = mysqli_query($con1, $sql_query8);
    echo $sql_query8;

    $sql_query9 = "INSERT INTO `shipping_location_product` (`prodid`,`location_alias`,`pincode`) VALUES ($prodid,'kochi',789721)";
    $result9 = mysqli_query($con1, $sql_query9);
    // echo $sql_query9;

    $sql_query3 = "INSERT INTO `offer`( `prodid`, `percentage`, `from_time_stamp`, `to_tme_Stamp`) VALUES ($prodid,`6`,'2019-08-28 12:00:00','2019-09-20 12:00:00')";
    $result3 = mysqli_query($con1, $sql_query3);
    // echo $sql_query3;

    $sql_query4 = "INSERT INTO `bulk_discount`(`prodid`,`quant`,`discount`,`from_time_stamp`,`to_time_Stamp`) VALUES ($prodid,`6`,`3`,'2019-08-28 12:00:00','2019-09-20 12:00:00')";
    $result4 = mysqli_query($con1, $sql_query4);
    // echo $sql_query4;
 

    if(! $result)
    {
        $status="Error";
        echo json_encode($status);
    }
    else
    {
        $status="Success";
        echo json_encode($status);
    }
?>

