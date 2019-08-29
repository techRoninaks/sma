<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();

    $sql_query = "SELECT * FROM `order_message` ";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
            $data["order_message"]=array('orderMessage'=>$row["id"],'coId'=>$row["coid"],'message'=>$row["message"]);
            
    }




    echo json_encode($data);
        //echo "hello";
    
?>