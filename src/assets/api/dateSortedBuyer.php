<?php
    require "init.php";
    $success = "unsuccessful";
    $response = array();
    $count = 0;

    $sql_query = "SELECT * FROM `user` WHERE `id` IN (SELECT `senderid` FROM `message` WHERE `sender_type`='buyer' ORDER BY `receiver_timestamp` DESC)";
    $result = mysqli_query($con2, $sql_query);
    
    while($row = mysqli_fetch_array($result)){
        $success = "successful";
        $response[$count++] = array("Name"=>$row["Name"],"id"=>$row["id"]);
    }
    $result = array("success"=>$success, "result"=>$response);
    echo json_encode(array("data"=>$result));
?>
