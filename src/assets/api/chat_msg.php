<?php
    require "init.php";
    $msg = $_POST['msg'];
    $threadid = $_POST['threadid'];
    $message_type = 'message';
    $senderid = $_POST['Senderid'];
    $sender_type = $_POST['sender_type'];
    
    $sql_query ="INSERT INTO `message` (`threadid`, `message`, `senderid`, `sender_type`,`message_type`) VALUES ('$threadid','$msg','$senderid','$sender_type','$message_type')";
    $result = mysqli_query($con2, $sql_query);
    echo($result);
      
?>