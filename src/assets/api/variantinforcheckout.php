<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
    $variantid = $_POST["variantid"];
    $sql_query = "SELECT * FROM `variant_info` WHERE variantid = $variantid";
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
            $data=array('variantid'=>$row["variantid"],'prodId'=>$row["prodid"],'name'=>$row["name"],'value'=>$row["value"],'price'=>$row["price"]);
        
    }

    echo json_encode($data);
    
?>
