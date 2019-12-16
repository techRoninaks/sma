<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
    $prodid = $_POST["prodid"];
    $sql_query = "SELECT * FROM `product` where prodid='$prodid'";
    // echo $sql_query;
    $result = mysqli_query($con1 , $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data = array(
        'basePrice'=>$row["base_price"],
        'commisionDedtd'=>$row["cmsn_dedtd"]);
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>