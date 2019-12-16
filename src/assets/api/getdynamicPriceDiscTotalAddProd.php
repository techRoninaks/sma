<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
    $prodid = $_POST["prodid"];
    $sql_query = "SELECT * FROM `customer_order` where prodid='$prodid'";
    // echo $sql_query;
    $result = mysqli_query($con2 , $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data = array(
        'discount'=>$row["discount"],
        'totalPrice'=>$row["total_price"],
        'tax'=>$row["tax"]);
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>