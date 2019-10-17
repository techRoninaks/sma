<?php
    require "init.php";
    $success = "unsucessfull";
    // header("Access-Control-Allow-Origin: *"); 
    $id = $_POST["id"];
    $data = array();
    $count = 0;
    $sql_query = "SELECT * FROM `address` where mapping_id = $id ORDER BY `address`.`id` DESC LIMIT 1";
    // echo $sql_query;
    $result = mysqli_query($con2 , $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data=$row["addr1"].", ".$row["addr2"].", ".$row["city"].", ".$row["district"].", ".$row["state"].", ".$row["country"].", ".$row["pincode"];
    }
    $result = array("success"=>$success,"result"=>$data);
    echo json_encode($data);
?>