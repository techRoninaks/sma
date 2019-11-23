<?php
    require "init.php";
    $userId = $_POST["userId"];
    $shopName = array();
    $count =0;
    $response=array();

    $sql_query1="SELECT id,addr1,addr2,city,district,state,country,pincode FROM `address` WHERE mapping_id = $userId && addr_type='shipping'";
    $result1 = mysqli_query($con2, $sql_query1);
    $arraycount =0;
    while($row1 = mysqli_fetch_assoc($result1)){
        $addressId = $row1["id"];
        $response[$arraycount]=array('id'=>$addressId,'addressId'=>$row1["addr1"].', '.$row1["addr2"].', '.$row1["city"].', '.$row1["district"].', '.$row1["state"].', '.$row1["country"].', '.$row1["pincode"]);
        $arraycount++;
    }
    echo json_encode($response);
?>