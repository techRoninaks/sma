<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
    $sql_query = "SELECT * FROM `variant_info` ";
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
            $data=array('variantInfor'=>$row["variantid"],'prodId'=>$row["prodid"],'name'=>$row["name"],'price'=>$row["price"]);
        
    }

//     echo json_encode($data);
    echo json_encode("hello");
        //echo "hello";
    
?>


