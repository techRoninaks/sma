<?php
   require "init.php";
   $category=$_POST['category'];
   $success = "successful";
   $sql_query = "select s.id,s.seller_name from smausr.seller s where s.id in ( select sd.seller_id from smausr.shop_details sd where sd.id in ( SELECT p.shop_id FROM smapr.category c , smapr.product p WHERE lower (c.category) = lower('$category') AND FIND_IN_SET( c.category_id, p.sub_catgry_id) OR p.category_id = (select y.category_id from smapr.category y where lower (y.category) = lower('$category'))))";
   $result = mysqli_query($con2, $sql_query);
   $response = array();
   $count = 0;
   while($row = mysqli_fetch_array($result)){
       $success = "successful";
       $response[$count++] = array("id"=>$row["id"],"seller_name"=>$row["seller_name"]);
   }
   $result = array("success"=>$success, "result"=>$response);
   echo json_encode(array("data"=>$result));
?>