<?php
  require "init.php";
  $user_id = $_POST['user_id'];
  $prodid = $_POST['prodid'];
  $quantity = $_POST['quantity'];
  $variants_chosen = $_POST['variants_chosen'];
  $gift_address = $_POST['gift_address'];
  $gift_note = $_POST['gift_note'];
  $total_price = $_POST['total_price'];
  $discount = $_POST['discount'];
  $variant_price = $_POST['variant_price'];
  $has_image= $_POST['has_image'];
  $delivery_date = $_POST['delivery_date'];
  $require_delivery_date = $_POST['require_delivery_date'];
  $is_ordered = $_POST['is_ordered'];
  $user_id = $_POST['user_id'];
  $gift_title = $_POST['gift_title'];
  $gift_option = $_POST['gift_option'];
          $flag = true;
          $result = array();
          $status = "";
          $sql_query1 = " INSERT INTO 'cart' ('prodid','quantity','varients_choosen','gift_address','gift_note','total_price','discount','varient_price','has_image','delivery_date','require_delivery_date','is_ordered','gift_title','gift_option') VALUES ('$prodid','$quantity','$varients_choosen','$gift_address','$gift_note','$total_price','$discount','$varient_price','$has_image','$delivery_date','$require_delivery_date','$is_ordered','$gift_title','$gift_option')";
          $sql_query2 = " INSERT INTO 'customer_order' ('prodid','quantity','varients_choosen','gift_address','gift_note','total_price','discount','varient_price','has_image','delivery_date','gift_title','gift_option') VALUES ('$prodid','$quantity','$varients_choosen','$gift_address','$gift_note','$total_price','$discount','$varient_price','$has_image','$delivery_date','$gift_title','$gift_option')";
          $sql_query3 = " INSERT INTO 'purchase_order' ('varients_choosen','total_price','delivery_date') VALUES ($varients_choosen',$total_price','$require_delivery_date')";
          $result1 = mysqli_query($con1, $sql_query);           
          $result1 = mysqli_query($con1, $sql_query);           
          $result1 = mysqli_query($con1, $sql_query);
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

