<?php
    require "init.php";
    $data = array();
    $sql_query = "SELECT * FROM `product_status` ";
    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
            $data["product_status"]=array('productStatus'=>$row["id"],'name'=>$row["name"]);
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>