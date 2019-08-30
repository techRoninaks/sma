<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
    $sql_query = "SELECT * FROM `order_type` ";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data["order_type"]=array('id'=>$row["id"],'type'=>$row["type"]);     

    }
    echo json_encode($data);
        //echo "hello";
    
?>