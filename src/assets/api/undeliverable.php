<?php
    require "init.php";
    $pin = $_POST["pin"];
    $prodId = $_POST["prodId"];
    $shipId = $_POST["shipId"];

    $data = array();
    // `prodid` =  $prodId AND 
    if($pin != ""){
        $sql_query = "SELECT count(*) AS `value` FROM `shipping_location_product` where `id` = $shipId AND `pincode` LIKE '%$pin%' ";
        // echo $sql_query;
        $result = mysqli_query($con1, $sql_query);
        $row = mysqli_fetch_assoc($result); 
        $data= array('count' => $row["value"]);
    }
    else{
        $data = array('count' => "0");
    }

    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>
