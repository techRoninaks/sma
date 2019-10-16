<?php
   require "init.php";
   $id = $_POST["id"];
   $sql_query ="UPDATE seller SET stage_number=8 WHERE id=$id";
   $result = mysqli_query($con2, $sql_query);
//    $row=mysqli_fetch_array($result);
   if($result)
   {
    $response['response'] = "successful";
    echo json_encode(array("data"=>$response));
    // $result = array("success"=>"success");
    // echo json_encode(array("data"=>$result));
   } 
   else 
   {
    $response['response'] = "unsuccessful";
    echo json_encode($response);

   }
   
?>