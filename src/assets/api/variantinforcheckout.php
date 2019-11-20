<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
    $prodid = $_POST["prodid"];
    $userid = $_POST["userid"];

    $sql_query1 = "SELECT `orderid` FROM `purchase_order` WHERE `customerid` = $userid ORDER BY `orderid` DESC LIMIT 1";
    // echo $sql_query1;
    $result1 = mysqli_query($con2 , $sql_query1);
    while($row1=mysqli_fetch_assoc($result1)){
        $data1=array('orderid'=>$row1["orderid"]);
    }
    $orderid = $data1['orderid'] ;

    $sql_query2 = "SELECT * FROM `customer_order` where orderid = $orderid";
    // echo $sql_query2;

    $result2 = mysqli_query($con2, $sql_query2);
    while($row2=mysqli_fetch_assoc($result2)){
        $data2=array('variantsChosen'=>$row2["variants_chosen"]);
    }

    $variantid = $data2['variantsChosen'] ;

    $sql_query = "SELECT * FROM `variant_info` WHERE prodid = $prodid AND variantid = $variantid";
    // echo $sql_query;

    $result = mysqli_query($con1, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
            $data=array('variantid'=>$row["variantid"],'prodId'=>$row["prodid"],'name'=>$row["name"],'value'=>$row["value"],'price'=>$row["price"]);   
    }

    echo json_encode($data);
    
?>
