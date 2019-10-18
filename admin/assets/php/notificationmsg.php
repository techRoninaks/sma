<?php
   require "init.php";
   $user1 = $_POST['user1'];
   $user2 =$_POST['user2'];
   $id =$_POST['threadid'];
   $message =$_POST['message'];
   $message_type ='notification';
    $result = array();
    $sql_query1 = "SELECT id from thread where (user1 =$user1 and user2=$user2 and usertype1 = 'admin' and usertype2 = 'seller') or (user1 = $user2 and user2=$user1 and usertype1 = 'seller' and usertype2 = 'admin')";
    $result1 = mysqli_query($con2, $sql_query1);

    if($id == NULL){
        $sql_query2 = "INSERT INTO thread (user1, user2, usertype1, usertype2) VALUES (, , '', 'admin', 'seller')";
        $result2 = mysqli_query($con2, $sql_query2);
        if($result3==TRUE){
          $sql_query1 = "SELECT id from thread where (user1 =$user1 and user2=$user2 and usertype1 = 'admin' and usertype2 = 'seller') or (user1 = $user2 and user2=$user1 and usertype1 = 'seller' and usertype2 = 'admin')";
          $result1 = mysqli_query($con2, $sql_query1);
        }
      
        else {
          $sql_query3 = "INSERT INTO message (threadid, message, message_type) VALUES ($id2, '$message',  '$message_type')";
          $result3 = mysqli_query($con2, $sql_query3);

        }
      }

      // else {
      // $sql_query4 = "INSERT INTO message (threadid, message, message_type) VALUES ($id2, '$message',  '$message_type')";
      // $result4 = mysqli_query($con2, $sql_query4);
      // }
    
if($result){
      echo '1';
    }
   
  
?>  

  
   