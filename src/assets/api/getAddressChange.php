<?php
    require "init.php";
    $success = "unsucessfull";
    // header("Access-Control-Allow-Origin: *"); 
    $id = $_POST["id"];
    $data = array();
    $count = 0;
    $sql_query = "SELECT * FROM `address` where id=$id";
    // echo $sql_query;
    $result = mysqli_query($con2 , $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data[$count++]=array(
        'id'=>$row["id"],'addr1'=>$row["addr1"],'addr2'=>$row["addr2"],'city'=>$row["city"],'district'=>$row["district"],'state'=>$row["state"],'country'=>$row["country"],'pincode'=>$row["pincode"],'contact_email'=>$row["contact_email"],'contact_number'=>$row["contact_number"],'contact_name'=>$row["contact_name"],'addr_type'=>$row["addr_type"]);
    }
    $result = array("success"=>$success,"result"=>$data);
    echo json_encode($data);
?>