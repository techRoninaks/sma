<?php
    require "init.php";
    $userId = $_POST["userId"];
    $response=array();
    $i =0;
    $sql_query1="SELECT `orderid`,`created_date`,`order_status`,`delivery_date` FROM `purchase_order` WHERE customerid = $userId";
    $result1 = mysqli_query($con2, $sql_query1);
    $arraycount =0;
    $sql_query7 = "SELECT count(*) as Ordercount FROM `purchase_order` where customerid = $userId";
    $result7 = mysqli_query($con2, $sql_query7);
    $row7 = mysqli_fetch_array($result7);
    $orderCount=$row7["Ordercount"];
    while($row1 = mysqli_fetch_assoc($result1)){
        $orderId = $row1["orderid"];
        $createDate = $row1["created_date"];
        $orderStatus = $row1["order_status"];
        $delivery = $row1["delivery_date"];
        $datem = date_create($createDate);
        $mdate = date_format($datem,"dmy");
        $len = strlen($orderId);
        $zero = 0;
        for($i=0; $len<8 ;$i++)
        {
            $orderId = $zero . $orderId;
            $len = strlen($orderId);
        }
        $sql_query2 = "SELECT `prodid` FROM `customer_order` where orderid = $orderId ";
        $result2 = mysqli_query($con2, $sql_query2);
        $row2 = mysqli_fetch_array($result2);
        $prodId= $row2['prodid'];

        $sql_query4 = "SELECT `name`,short_desc,long_desc,spec,shipping_option FROM `product` where prodid =  $prodId ";
        $result4 = mysqli_query($con1, $sql_query4);
        $row4 = mysqli_fetch_array($result4);

        $response[$arraycount]=array('delivery'=>$delivery,'orderCount'=>$orderCount,'orderStatus'=>$orderStatus,'createDate'=>$mdate,'orderId'=>$orderId,'prodName'=>$row4['name'],'shortDesc'=>$row4['short_desc'],'longDesc'=>$row4['long_desc'],'spec'=>$row4['spec'],'shippingOption'=>$row4['shipping_option']);
        $arraycount++;
    }
    echo json_encode($response);
?>