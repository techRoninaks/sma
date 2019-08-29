<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();

    $sql_query = "SELECT * FROM `address_type` ";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
            $data["address_type"]=array('addressType'=>$row["id"],'type'=>$row["type"]);
    }
    



    echo json_encode($data);
        //echo "hello";
    
?>