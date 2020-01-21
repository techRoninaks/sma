<?php
    require "init.php";
    
    $data = array();
    $count = 0;
    $threadid = $_POST["threadid"];
    $sql_query = "SELECT `message`,`sender_type` FROM `message` where threadid='$threadid'";
    
    $result = mysqli_query($con2 , $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data[$count++] = array('message'=>$row["message"],'sender_type'=>$row["sender_type"]);
    }
    echo json_encode($data);
?>