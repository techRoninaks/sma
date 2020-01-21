<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
    $count = 0;
    $threadid = $_POST["threadid"];
    $sql_query = "SELECT `message`,`sender_type` FROM `message` where threadid='$threadid' AND `message` NOT LIKE 'rfq_id%' AND `message_type`='rfq' ";
    // echo $sql_query;
    $result = mysqli_query($con2 , $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data[$count++] = array('message'=>$row["message"],'sender_type'=>$row["sender_type"]);
    }
    echo json_encode($data);
    // if($success = "successful";){
    //     $sql_query1 = "SELECT `threadid`,`id`,`message` FROM `message` WHERE `threadid`=$threadid ORDER BY `id` DESC LIMIT 1";
    // // echo $sql_query;
    // $result1 = mysqli_query($con2 , $sql_query1);
    // while($row=mysqli_fetch_assoc($result1)){
    //     $data1[$count++] = array('message'=>$row["message"],'id'=>$row["id"],'threadid'=>$row["threadid"]);
    // }
    // // echo json_encode($data1);
    // echo json_encode(array("threadid" => $threadid[0]``1));
    // }
?>