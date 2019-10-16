<?php
   require "init.php";
   $state=$_POST['state'];
   $success = "successful";
   $sql_query = "SELECT s.seller_name,s.id  from seller s inner join address a  on s.addr_id = a.id where a.state = '$state'";
   $result = mysqli_query($con2, $sql_query);
//    echo $sql_query;
   $response = array();
   $count = 0;
   while($row = mysqli_fetch_array($result)){
       $success = "successful";
       $response[$count++] = array("id"=>$row["id"],"seller_name"=>$row["seller_name"]);
   }
   $result = array("success"=>$success, "result"=>$response);
   echo json_encode(array("data"=>$result));
?>