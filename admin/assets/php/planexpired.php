<?php
   require "init.php";
   $success = "unsuccessful";
   $sql_query ="SELECT s.seller_name,s.id,sd.plan_exp_date,CURRENT_DATE, datediff(sd.plan_exp_date,CURRENT_DATE) as difference from shop_details sd,seller s where sd.seller_id = s.id and datediff(sd.plan_exp_date,CURRENT_DATE) <=0";
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