<?php
   require "init.php";
   $success = "unsuccessful";
   $sql_query ="SELECT * FROM prod_manage";
   $result = mysqli_query($con2, $sql_query);
   $response = array();
   $count = 0;
   while($row = mysqli_fetch_array($result)){
       $success = "successful";
       $response[$count++] = array("seller_id"=>$row["id"],
       "seller_name"=>$row["seller_name"],"prod_id"=>$row["prodid"],"prod_name"=>$row["Name"],"prod_price"=>$row["base_price"]);
   }
   $result = array("success"=>$success, "result"=>$response);
   echo json_encode(array("data"=>$result));
?>











