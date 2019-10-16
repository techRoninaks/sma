<?php
 require "init.php";
 $search_name=$_POST['search_name'];
 $success = "successful";
 $sql_query ="SELECT id,seller_name FROM `seller` WHERE  seller_name LIKE '%$search_name%'";
 $result = mysqli_query($con2, $sql_query);
 $response = array();
 $count = 0;
 while($row = mysqli_fetch_array($result))
 {
     $success = "successful";
     $response[$count++] = array("id"=>$row["id"],"seller_name"=>$row["seller_name"]);
 }
 $result = array("success"=>$success, "result"=>$response);
 echo json_encode(array("data"=>$result)); 
?>

