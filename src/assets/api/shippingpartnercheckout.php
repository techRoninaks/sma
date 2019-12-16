<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();

    $sql_query = "SELECT * FROM `shipping_partner` ";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data["shipping_partner"]=array('shippingPartner'=>$row["id"],'shopId'=>$row["shop_id"],'name'=>$row["name"],'price'=>$row["price"],'duration'=>$row["duration"]);     
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
        //echo "hello";
    
?>