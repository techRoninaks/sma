<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
    $prodid = $_POST["prodid"];
    $sql_query = "SELECT `prodid` FROM `product` where 1 ORDER BY `prodid` DESC LIMIT 1";
    // echo $sql_query;
    $result = mysqli_query($con1 , $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data = array('prodid'=>$row["prodid"],
        'name'=>$row["name"],
        'specification'=>$row["spec"],
        'productPolicy'=>$row["product_policy"],
        'returnPolicy'=>$row["return_policy"],
        'shippingPolicy'=>$row["shipping_policy"]);
    }

    echo json_encode($data);
?>