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

$sellerid = $_POST['sellerid'];                   
$active_status = $_POST['active_status'];
$qty_avble = $_POST['qty_avble'];
$tags = $_POST['tags'];
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
$can_upload_image = $_POST['can_upload_image'];
$max_no_of_image = $_POST['max_no_of_image'];
$add_custom_message_field = $_POST['add_custom_message_field'];

$labels = $_POST['labels'];
$shippingArray = json_decode($_POST['shippingArray']);
$varinetSelect = $_POST['varinetSelect'];
$titleSelect = $_POST['titleSelect'];
$discountArraySelect = json_decode($_POST['discountArraySelect']);
$price = $_POST['price'];
$caller = $_POST['caller'];
$mainCat = $_POST['mainCat'];
$subCat = $_POST['subCat'];
$faqArray = json_decode($_POST['faqArray']);

// echo $discountArraySelect[0]['actualPrice'];
// $discountArraySelect = (array) $discountArraySelect;

// foreach ($discountArraySelect as $value) {
//   // echo $value->bulkDiscount;
// }


$title = $_POST['title'];
$quantity_price = $_POST['quantity_price'];
// $price = $_POST['price'];

  $shipping_option = rtrim($shipping_option, ",");


   if($has_instant_buy == 'true')
   $has_instant_buy = 1;
   else if($has_instant_buy == 'false')
     $has_instant_buy = 0;

 if($has_rfq == 'true'){
  $has_rfq = 1;
 }
  else if($has_rfq == 'false'){
    $has_rfq = 0;
  }
    
 if($has_gift == 'true')
   $has_gift = 1;
  else if($has_gift == 'false')
    $has_gift = 0;

 if($has_order_confmn == 'true')
   $has_order_confmn = 1;
  else if($has_order_confmn == 'false')
    $has_order_confmn = 0;

 if($can_orderbydate == 'true')
   $can_orderbydate = 1;
  else if($can_orderbydate == 'false')
    $can_orderbydate = 0;

 if($active_status == 'true')
     $active_status = 'active';
  else if($active_status == 'false')
    $active_status = 'inactive';

  if($caller =="publish"){
    $active_status = 'pending_approval';
  }
  else if($caller =="duplicate"){
    $active_status = 'yet_to_publish';
  }
  else if($caller =="save"){
    $active_status = 'yet_to_publish';
  }

 if($add_custom_message_field == 'true')
   $add_custom_message_field = 1;
  else if($add_custom_message_field == 'false')
    $add_custom_message_field = 0;
 
 if($can_upload_image == 'true')
   $can_upload_image = 1;
  else if($can_upload_image == 'false')
    $can_upload_image = 0;

   $sql_query5 ="SELECT * FROM `shop_details` WHERE `seller_id` = $sellerid";
   $result5 = mysqli_query($con2, $sql_query5);
   $row=mysqli_fetch_assoc($result5);
   $shop_id = $row['id'];

    $sql_query7 ="SELECT * FROM `variant_info` WHERE prodid = -99 ";
    $result7 = mysqli_query($con1, $sql_query7);
    $varientArray = "";
    while($row = mysqli_fetch_assoc($result7)){
        $varientArray = $varientArray.$row['variantid'].",";
    }
    $varientArray = rtrim($varientArray, ",");


    $sql_query7 ="SELECT * FROM `offer` WHERE prodid = -99 ORDER BY id DESC LIMIT 1  ";
    $result7 = mysqli_query($con1, $sql_query7);
    $offersArray = "";
    while($row = mysqli_fetch_assoc($result7)){
        $offersArray = $row['id'];
    }

    // echo $offersArray;

  


  

    $result = array();
    $status = "";
    // $sql_query1 = " INSERT INTO product' ('name','short_desc','Long_desc','spec','shipping_option','base_price','qty_avble','tags','avg_prcessing_time','avg_shpping_time','auto_cancel_time','min_order_quant','max_order_quant','max_no_of_image') VALUES ($name,$short_desc,$Long_desc,$spec,$shipping_option,$base_price,$qty_avble,$tags,$avg_prcessing_time,$avg_shpping_time,$auto_cancel_time,$min_order_quant,$max_order_quant,$max_no_of_image)";

    $safe_qty = round($qty_avble/2);

    $sql_query1 = "INSERT INTO `product` (`name`,`short_desc`,`Long_desc`,`spec`,`shipping_option`,`base_price`,`qty_avble`,`tags`,`avg_prcessing_time`,`avg_shpping_time`,`auto_cancel_time`,`has_rfq`,`has_gift`,`has_order_confmn`,`can_orderbydate`,`has_instant_buy`,`min_order_quant`,`max_order_quant`,`shipping_policy`,`return_policy`,`product_policy`,`shipping_location_id`,`can_upload_image`,`max_no_of_image`,`add_custom_message_field`,`shop_id`,`category_id`,`sub_catgry_id`,`active_status`,`is_returnable`,`remarks`,`bulk_discount_id`,`offer_id`,`cmsn_dedtd`,`label_id`,`safe_qty`) VALUES ('$name','$short_desc','$Long_desc','$spec','$shipping_option',$base_price,$qty_avble,'$tags',$avg_prcessing_time,$avg_shpping_time,$auto_cancel_time,$has_rfq,$has_gift,$has_order_confmn,$can_orderbydate,$has_instant_buy,$min_order_quant,$max_order_quant,'$shipping_policy','$return_policy','$product_policy',5,$can_upload_image,$max_no_of_image,$add_custom_message_field,$shop_id,$mainCat,'$subCat','$active_status',0,'New Product',NULL,$offersArray,8,$labels,$safe_qty)";
    $result1 = mysqli_query($con1, $sql_query1);
    
    echo $sql_query1;


    
    $sql_query = "SELECT `prodid` FROM `product` where 1 ORDER BY `prodid` DESC LIMIT 1";
    $result = mysqli_query($con1, $sql_query);
    $rowprodid = mysqli_fetch_assoc($result);
    $prodid=$rowprodid["prodid"];
    // echo $prodid;

    foreach ($discountArraySelect as $value) {
      $sql_query = "INSERT INTO `bulk_discount`( `prodid`, `quant`, `discount`) VALUES ($prodid,$value->bulkDiscount,$value->bulk)";
      $result = mysqli_query($con1, $sql_query);
      if($result){
        "success";
      }
    }
    $sql = "SELECT abs(type_id) FROM `faq` ORDER BY type_id ASC LIMIT 1 ";
    $res = mysqli_query($con1, $sql);
    $row = mysqli_fetch_assoc($res);
    $faqcount = $row['abs(type_id)'];

    foreach ($faqArray as $value) {
      $faqcount++;
      $ques = "-".$faqcount;
      $sql_query = "INSERT INTO `faq`(`prodid`, `type_id`, `text`) VALUES ($prodid,$ques,'$value->faqQ')";
      $result = mysqli_query($con1, $sql_query);
      $sql_query = "INSERT INTO `faq`(`prodid`, `type_id`, `text`) VALUES ($prodid,$faqcount,'$value->faqA')";
      $result = mysqli_query($con1, $sql_query);
    }

    $sql_query = "SELECT * FROM `bulk_discount` Where prodid = $prodid ORDER BY `id` DESC LIMIT 1 ";
    $result = mysqli_query($con1, $sql_query);
    $row = mysqli_fetch_assoc($result);
    $bulkDiscountid = $row['id'];


    $sql = "SELECT * FROM `seller` WHERE id = $sellerid";
    $res = mysqli_query($con2, $sql);
    $row = mysqli_fetch_assoc($res);
    $addressid = $row['addr_id'];

    foreach ($shippingArray as $value) {
      if($value->pincode == "ALL STATE"){
        $sql = "SELECT * FROM `address` WHERE id = $addressid";
        $res = mysqli_query($con2, $sql);
        $row = mysqli_fetch_assoc($res);
        $loc = $row['state'];
        $loc = preg_replace('/\s/', '', $loc);
        $sql_query = "insert INTO shipping_location_product (prodid,location_alias,pincode) VALUES ($prodid,'ALL STATE' ,(select GROUP_CONCAT(distinct pincode SEPARATOR ', ') from smausr.location where state like '$loc'))";
        // echo $sql_query;
        $result = mysqli_query($con1, $sql_query);
      }
      if($value->pincode =="ALL INDIA"){
        $sql = "SELECT * FROM `address` WHERE id = $addressid";
        $res = mysqli_query($con2, $sql);
        $row = mysqli_fetch_assoc($res);
        $loc = $row['state'];
        $sql_query = "insert INTO shipping_location_product (prodid,location_alias,pincode) VALUES ($prodid,'ALL INDIA' ,(select GROUP_CONCAT(distinct pincode SEPARATOR ', ') from location))";
        $result = mysqli_query($con1, $sql_query);
      }
      if($value->pincode =="ALL CITY"){
        $sql = "SELECT * FROM `address` WHERE id = $addressid";
        $res = mysqli_query($con2, $sql);
        $row = mysqli_fetch_assoc($res);
        $loc = $row['city'];
        $sql_query = "insert INTO shipping_location_product (prodid,location_alias,pincode) VALUES ($prodid,'ALL CITY' ,(select GROUP_CONCAT(distinct pincode SEPARATOR ', ') from location where city like '$loc'))";
        $result = mysqli_query($con1, $sql_query);
      }
      if($value->pincode == "ALL DISTRICT"){
        $sql = "SELECT * FROM `address` WHERE id = $addressid";
        $res = mysqli_query($con2, $sql);
        $row = mysqli_fetch_assoc($res);
        $loc = $row['district'];
        $sql_query = "insert INTO shipping_location_product (prodid,location_alias,pincode) VALUES ($prodid,'ALL DISTRICT' ,(select GROUP_CONCAT(distinct pincode SEPARATOR ', ') from location where district like '$loc'))";
        $result = mysqli_query($con1, $sql_query);
      }
      else{
        $location = explode(",",$value->pincode);
        $pincode = $location[1];
        $sql_query = "INSERT INTO `prod_shipping_price`( `prodid`, `shipping_location`,`type` ,`quantity_price`, `price`) VALUES ($prodid,$pincode,'pincode',$value->qtn,$value->price)";
        // echo $sql_query;
        $result = mysqli_query($con1, $sql_query);
      }

    }
    
    $sql = "SELECT * FROM `shipping_location_product` WHERE prodid = $prodid ORDER BY prodid DESC LIMIT 1 ";
    $res = mysqli_query($con1, $sql);
    $row = mysqli_fetch_assoc($res);
    $shipping_location_id = $row['id'];

    $sql_query2 = " UPDATE `product` SET `bulk_discount_id`= $bulkDiscountid,`shipping_location_id`= $shipping_location_id  where `prodid` = `$prodid`";
    $res = mysqli_query($con1, $sql_query2);

    $sql_query2 = "UPDATE `variant_info` SET `prodid`=$prodid WHERE `prodid` = -99";
    $res = mysqli_query($con1, $sql_query2);

    $titleSelect = explode(",", $titleSelect);
    foreach($titleSelect as $value){
      $sql_query ="INSERT INTO `prod_message`(`prodid`, `title`) VALUES ($prodid,'$value')";
      $res = mysqli_query($con1, $sql_query);
    }




    $mob = 0;
        
    if($image1 != 1){
      if (!file_exists('../images/product/'.$prodid.'/')) {
          mkdir('../images/product/'.$prodid.'/', 0777, true);
          $dir='../images/product/'.$prodid.'/';
      }
          $dir='../images/product/'.$prodid.'/';
      define('UPLOAD_DIR', '../images/product/'.$prodid.'/');
      $file = UPLOAD_DIR.$prodid.'_0'.'.jpg';
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
      $file = UPLOAD_DIR.$prodid.'_1'.'.jpg';
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
      $file = UPLOAD_DIR.$prodid.'_2'.'.jpg';
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
      $file = UPLOAD_DIR.$prodid.'_3'.'.jpg';
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
      $file = UPLOAD_DIR.$prodid.'_4'.'.jpg';
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
      $file = UPLOAD_DIR.$prodid.'_5'.'.jpg';
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
      $file = UPLOAD_DIR.$prodid.'_6'.'.jpg';
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
      $file = UPLOAD_DIR.$prodid.'_7'.'.jpg';
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
    $file = UPLOAD_DIR.$prodid.'_8'.'.jpg';
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
  $file = UPLOAD_DIR.$prodid.'_9'.'.jpg';
  if($mob == 0){
      $img =explode(",", $image10);
      $img[1] = str_replace(' ', '+', $img[1]);
      $data = base64_decode($img[1]);
  }else{
      $data = base64_decode($image10);
  }
  $success = file_put_contents($file, $data);
}

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

