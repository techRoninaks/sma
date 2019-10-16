<?php
   require "init.php";
   $prod_id=$_POST["prodid"];
   $remarks = "";
   if(isset($_POST["remarks"])){
       $remarks=$_POST["remarks"];
   }
   $active_status=$_POST["active_status"];
   $success = "successful";
   if($active_status=="accept"){
        $sql_query ="UPDATE product SET active_status='accept' WHERE prodid='$prod_id'";
        $result = mysqli_query($con1, $sql_query);
   }
   else{
        $sql_query ="UPDATE product SET active_status='reject', remarks='$remarks' WHERE prodid='$prod_id'";
        $result = mysqli_query($con1, $sql_query);
    
   }
   
   if($result==true){
       $success;
   }
    echo json_encode($success);
?>
