<?php
    require "init.php";
    $userId = $_POST["userId"];
    $response=array();
    $i =0;
    $j=0;
    
    $arraycount =0;
    $sql_query7 = "SELECT count(*) as Ordercount FROM `purchase_order` where customerid = $userId";
    $result7 = mysqli_query($con2, $sql_query7);
    $row7 = mysqli_fetch_array($result7);
    $orderCount=$row7["Ordercount"];
    while($j < $orderCount){
        $sql_query1="SELECT `orderid`,`sellerid`,`created_date`,`order_status`,`delivery_date` FROM `purchase_order` WHERE customerid = $userId";
        $result1 = mysqli_query($con2, $sql_query1);
        
        while($row1 = mysqli_fetch_array($result1))
        {
            $orderId = $row1["orderid"];
            $createDate = $row1["created_date"];
            $orderStatus = $row1["order_status"];
            $delivery = $row1["delivery_date"];
            $sellerId = $row1["sellerid"];
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
            if($orderStatus == 'pending confirmation')
            {
                $sql_query10 = "SELECT `date` FROM `order_stage_date` where `stage` = 'pending confirmation' ";
                $result10 = mysqli_query($con2, $sql_query10);
                $row10 = mysqli_fetch_array($result10);
                $response[$arraycount]=array('sellerId'=>$sellerId,'prodId'=>$prodId,'stage_1_date'=>$row10['date'],'stageDate'=>$createDate,'delivery'=>$delivery,'orderCount'=>$orderCount,'orderStatus'=>$orderStatus,'createDate'=>$mdate,'orderId'=>$orderId,'prodName'=>$row4['name'],'shortDesc'=>$row4['short_desc'],'longDesc'=>$row4['long_desc'],'spec'=>$row4['spec'],'shippingOption'=>$row4['shipping_option']);
            }
            else if($orderStatus == 'pending payment')
            {
                $sql_query10 = "SELECT `date` FROM `order_stage_date` where `stage` = 'pending confirmation' ";
                $result10 = mysqli_query($con2, $sql_query10);
                $row10 = mysqli_fetch_array($result10);
                $sql_query5 = "SELECT `date` FROM `order_stage_date` where `stage` = 'pending payment' ";
                $result5 = mysqli_query($con2, $sql_query5);
                $row5 = mysqli_fetch_array($result5);
                $response[$arraycount]=array('sellerId'=>$sellerId,'prodId'=>$prodId,'stage_1_date'=>$row10['date'],'stage_2_date'=>$row5['date'],'stageDate'=>$createDate,'delivery'=>$delivery,'orderCount'=>$orderCount,'orderStatus'=>$orderStatus,'createDate'=>$mdate,'orderId'=>$orderId,'prodName'=>$row4['name'],'shortDesc'=>$row4['short_desc'],'longDesc'=>$row4['long_desc'],'spec'=>$row4['spec'],'shippingOption'=>$row4['shipping_option']);
            }
            else if($orderStatus == 'processing')
            {
                $sql_query10 = "SELECT `date` FROM `order_stage_date` where `stage` = 'pending confirmation' ";
                $result10 = mysqli_query($con2, $sql_query10);
                $row10 = mysqli_fetch_array($result10);
                $sql_query5 = "SELECT `date` FROM `order_stage_date` where `stage` = 'pending payment' ";
                $result5 = mysqli_query($con2, $sql_query5);
                $row5 = mysqli_fetch_array($result5);
                $sql_query6 = "SELECT `date` FROM `order_stage_date` where `stage` = 'processing' ";
                $result6 = mysqli_query($con2, $sql_query6);
                $row6 = mysqli_fetch_array($result6);
                $response[$arraycount]=array('sellerId'=>$sellerId,'prodId'=>$prodId,'stage_1_date'=>$row10['date'],'stage_2_date'=>$row5['date'],'stage_3_date'=>$row6['date'],'delivery'=>$delivery,'orderCount'=>$orderCount,'orderStatus'=>$orderStatus,'createDate'=>$mdate,'orderId'=>$orderId,'prodName'=>$row4['name'],'shortDesc'=>$row4['short_desc'],'longDesc'=>$row4['long_desc'],'spec'=>$row4['spec'],'shippingOption'=>$row4['shipping_option']);
            }
            else if($orderStatus == 'shipped')
            {
                $sql_query10 = "SELECT `date` FROM `order_stage_date` where `stage` = 'pending confirmation' ";
                $result10 = mysqli_query($con2, $sql_query10);
                $row10 = mysqli_fetch_array($result10);
                $sql_query5 = "SELECT `date` FROM `order_stage_date` where `stage` = 'pending payment' ";
                $result5 = mysqli_query($con2, $sql_query5);
                $row5 = mysqli_fetch_array($result5);
                $sql_query6 = "SELECT `date` FROM `order_stage_date` where `stage` = 'processing' ";
                $result6 = mysqli_query($con2, $sql_query6);
                $row6 = mysqli_fetch_array($result6);
                $sql_query7 = "SELECT `date` FROM `order_stage_date` where `stage` = 'shipped' ";
                $result7 = mysqli_query($con2, $sql_query7);
                $row7 = mysqli_fetch_array($result7);
                $sql_query8 = "SELECT `shipping_tracking_number`, `shipping_tracking_hyperlink` FROM `customer_order` where `orderid` = $orderId ";
                $result8 = mysqli_query($con2, $sql_query8);
                $row8 = mysqli_fetch_array($result8);
                $response[$arraycount]=array('sellerId'=>$sellerId,'prodId'=>$prodId,'tracking_number'=>$row8['shipping_tracking_number'],'tracking_hyperlink'=>$row8['shipping_tracking_hyperlink'],'stage_1_date'=>$row10['date'],'stage_2_date'=>$row5['date'],'stage_3_date'=>$row6['date'],'stage_4_date'=>$row7['date'],'delivery'=>$delivery,'orderCount'=>$orderCount,'orderStatus'=>$orderStatus,'createDate'=>$mdate,'orderId'=>$orderId,'prodName'=>$row4['name'],'shortDesc'=>$row4['short_desc'],'longDesc'=>$row4['long_desc'],'spec'=>$row4['spec'],'shippingOption'=>$row4['shipping_option']);
            }
            else if($orderStatus == 'delivered')
            {
                $sql_query10 = "SELECT `date` FROM `order_stage_date` where `stage` = 'pending confirmation' ";
                $result10 = mysqli_query($con2, $sql_query10);
                $row10 = mysqli_fetch_array($result10);
                $sql_query5 = "SELECT `date` FROM `order_stage_date` where `stage` = 'pending payment' ";
                $result5 = mysqli_query($con2, $sql_query5);
                $row5 = mysqli_fetch_array($result5);
                $sql_query6 = "SELECT `date` FROM `order_stage_date` where `stage` = 'processing' ";
                $result6 = mysqli_query($con2, $sql_query6);
                $row6 = mysqli_fetch_array($result6);
                $sql_query7 = "SELECT `date` FROM `order_stage_date` where `stage` = 'shipped' ";
                $result7 = mysqli_query($con2, $sql_query7);
                $row7 = mysqli_fetch_array($result7);
                $sql_query8 = "SELECT `date` FROM `order_stage_date` where `stage` = 'delivered' ";
                $result8 = mysqli_query($con2, $sql_query8);
                $row8 = mysqli_fetch_array($result8);
                $response[$arraycount]=array('sellerId'=>$sellerId,'prodId'=>$prodId,'stage_1_date'=>$row10['date'],'stage_2_date'=>$row5['date'],'stage_3_date'=>$row6['date'],'stage_4_date'=>$row7['date'],'stage_5_date'=>$row8['date'],'delivery'=>$delivery,'orderCount'=>$orderCount,'orderStatus'=>$orderStatus,'createDate'=>$mdate,'orderId'=>$orderId,'prodName'=>$row4['name'],'shortDesc'=>$row4['short_desc'],'longDesc'=>$row4['long_desc'],'spec'=>$row4['spec'],'shippingOption'=>$row4['shipping_option']);
            }
            else if($orderStatus == 'closed')
            {
                $sql_query10 = "SELECT `date` FROM `order_stage_date` where `stage` = 'pending confirmation' ";
                $result10 = mysqli_query($con2, $sql_query10);
                $row10 = mysqli_fetch_array($result10);
                $sql_query5 = "SELECT `date` FROM `order_stage_date` where `stage` = 'pending payment' ";
                $result5 = mysqli_query($con2, $sql_query5);
                $row5 = mysqli_fetch_array($result5);
                $sql_query6 = "SELECT `date` FROM `order_stage_date` where `stage` = 'processing' ";
                $result6 = mysqli_query($con2, $sql_query6);
                $row6 = mysqli_fetch_array($result6);
                $sql_query7 = "SELECT `date` FROM `order_stage_date` where `stage` = 'shipped' ";
                $result7 = mysqli_query($con2, $sql_query7);
                $row7 = mysqli_fetch_array($result7);
                $sql_query8 = "SELECT `date` FROM `order_stage_date` where `stage` = 'delivered' ";
                $result8 = mysqli_query($con2, $sql_query8);
                $row8 = mysqli_fetch_array($result8);
                $sql_query9 = "SELECT `date` FROM `order_stage_date` where `stage` = 'closed' ";
                $result9 = mysqli_query($con2, $sql_query9);
                $row9 = mysqli_fetch_array($result9);
                $response[$arraycount]=array('sellerId'=>$sellerId,'prodId'=>$prodId,'stage_1_date'=>$row10['date'],'stage_2_date'=>$row5['date'],'stage_3_date'=>$row6['date'],'stage_4_date'=>$row7['date'],'stage_5_date'=>$row8['date'],'stage_6_date'=>$row9['date'],'delivery'=>$delivery,'orderCount'=>$orderCount,'orderStatus'=>$orderStatus,'createDate'=>$mdate,'orderId'=>$orderId,'prodName'=>$row4['name'],'shortDesc'=>$row4['short_desc'],'longDesc'=>$row4['long_desc'],'spec'=>$row4['spec'],'shippingOption'=>$row4['shipping_option']);
            }
            $arraycount++;
            $j++;
        }
    }
    echo json_encode($response);
?>