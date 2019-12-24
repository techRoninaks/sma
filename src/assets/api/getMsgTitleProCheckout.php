<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *");
    $orderId = $_POST['prodid'] ;
    // $title = $_POST['title'];
    $data = array();
    // $count = 0;
    $sql_query = "SELECT coid FROM `customer_order` WHERE orderid = $orderId ";
    $result = mysqli_query($con2, $sql_query);
    $row=mysqli_fetch_assoc($result);
    // echo $sql_query;
    $coid = $row['coid'];
    $sql_query = "SELECT * FROM `order_message` where coid = $coid";
    $result = mysqli_query($con2, $sql_query);
    // echo $sql_query;
    while($row=mysqli_fetch_assoc($result)){
        if($row['message'] != ""){
            $data[]=array(
                'id'=>$row["id"],
                'coid'=>$row["coid"],
                'message'=>$row["message"]);
        }
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
        //echo "hello";
    
?>