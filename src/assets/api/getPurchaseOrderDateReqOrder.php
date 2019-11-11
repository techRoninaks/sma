<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *");
    $orderid = $_POST['orderid'] ;
    $data = array();
    // $count = 0;
    $sql_query = "SELECT * FROM `purchase_order` where orderid = orderid";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data=array(
        'orderid'=>$row["orderid"],
        'selleridid'=>$row["sellerid"],
        'created_date'=>$row["created_date"],
        'customerid'=>$row["customerid"],
        'delivery_date'=>$row["delivery_date"],
        'total_amnt'=>$row["total_amnt"]);
    }
    echo json_encode($data);
        //echo "hello";
    
?>