<?php
   require "init.php";
   $id = $_POST["id"];
   $success = "unsuccessful";
   $sql_query ="SELECT id FROM `seller`  WHERE id=$id";
   $result = mysqli_query($con2, $sql_query);
   $response = array();
   while($row = mysqli_fetch_array($result)){
       $response = $row['id'];
   }
  
   echo json_encode($response);
?>