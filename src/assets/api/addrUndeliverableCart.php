<?php
    require "init.php";
    $data = array();
    // $userId = $_POST["userId"];
    $prodId = $_POST["prodId"];
    $pincode = $_POST["pincode"];
    $addr_type = "shipping";
    $sql_query = "SELECT * FROM `address` WHERE mapping_id= '$prodId' AND `addr_type`= '$addr_type'";
    $result = mysqli_query($con2, $sql_query);
    $count =0;
    while($row=mysqli_fetch_assoc($result)){
        $data[$count++]=$row["pincode"];
    }
    // echo $sql_query;
    echo json_encode($data);
    
    $sql_query1 = "SELECT * FROM `prod_shipping_price` where prodId='$prodId' and pincode like '$pincode';";
    $result1 = mysqli_query($con1, $sql_query1);
    $row=mysqli_fetch_assoc($result);
    echo $sql_query1;
    mysqli_close($con1);
    mysqli_close($con2);
?>