<?php
    require "init.php";
    $msg = $_POST['msg'];
    $threadid = $_POST['threadid'];
    $message_type = 'rfq';
    $senderid = $_POST['Buyerid'];
    // $Sellerid = $_POST['Sellerid'];
    $sender_type = $_POST['sender_type'];
    $result1 = null;

    if($senderid != NULL){
    $sql_query ="INSERT INTO `message` (`threadid`, `message`, `senderid`, `sender_type`,`message_type`,`discripancyid`) VALUES ('$threadid','$msg','$senderid','$sender_type','$message_type',0)";
    $result = mysqli_query($con2, $sql_query);
    // echo($result);
    }
    else{
    $sql_query1 ="INSERT INTO `message` (`threadid`, `message`, `senderid`, `sender_type`,`message_type`,`discripancyid`) VALUES ('$threadid','$msg','$sellerid','$sender_type','$message_type',0)";
    $result1 = mysqli_query($con2, $sql_query1);
    // echo($result1);
    }
    if(!$result || !$result1){
        echo json_encode("Error");
    }
    else{
        echo json_encode("Success");
    }
?>