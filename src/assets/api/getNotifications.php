<?php
    require "init.php";
    $count =0;
    $response=array();
    $userId = $_POST["userId"];
    $sql_query="SELECT `message`,`date` FROM `notification` WHERE `userid` = $userId";
    $result = mysqli_query($con2, $sql_query);
    $sql_query1="SELECT `orderid`,`created_date` FROM `purchase_order` WHERE customerid = $userId";
    $result1 = mysqli_query($con2, $sql_query1);
    
    while($row2 = mysqli_fetch_assoc($result1)){
        $orderId = $row2["orderid"];
        $createDate = $row2["created_date"];
        $datem = date_create($createDate);
        $mdate = date_format($datem,"dmy");
        $len = strlen($orderId);
        $zero = 0;
        for($i=0; $len<8 ;$i++)
        {
            $orderId = $zero . $orderId;
            $len = strlen($orderId);
        }
        while( $row1 = mysqli_fetch_assoc($result))
        {
            $message = $row1['message'];
            $date = $row1['date'];
            $response[$count]= array('message'=>$message,'date'=>$date,'orderId'=>$orderId,'createDate'=>$mdate);
            $count++;
        }
    }
    echo json_encode($response);
?>