<?php
   require "init.php";
   $success = "unsuccessful";
   $sql_query = "select category from category;";
   $result = mysqli_query($con1, $sql_query);
   $response = array();
   $count = 0;
   while($row = mysqli_fetch_array($result)){
       $success = "successful";
       $response[$count++] = array( "name"=>$row["category"]);
   }
   $result = array("success"=>$success, "result"=>$response);
   echo json_encode(array("data"=>$result));
?>