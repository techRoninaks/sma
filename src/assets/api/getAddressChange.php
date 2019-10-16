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
        $data=array(
        'id'=>$row["id"],'addr1'=>$row["addr1"],'addr2'=>$row["addr2"],'city'=>$row["city"],'district'=>$row["district"],'state'=>$row["state"],'country'=>$row["country"],'pincode'=>$row["pincode"],'contact_number'=>$row["contact_number"],'contact_name'=>$row["contact_name"]);
    }
    $result = array("success"=>$success,"result"=>$data);
    echo json_encode($data);
?>