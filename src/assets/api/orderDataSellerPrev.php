<?php
    require "init.php";
    $orderid = $_POST["orderid"];
    $response=array();
    $orderIdArray=array();
    $i =0;
    $j=0;
    $k=0;
    $sql_query1="SELECT `orderid`,`created_date`,`order_status`,`delivery_date` FROM `purchase_order` WHERE orderid = $orderid";
    $result1 = mysqli_query($con2, $sql_query1);
    $row1 = mysqli_fetch_array($result1);
    // $arraycount2 =0;
    // $sql_query7 = "SELECT count(*) as Ordercount FROM `purchase_order` where sellerid = $sellerId";
    // $result7 = mysqli_query($con2, $sql_query7);
    // $row7 = mysqli_fetch_array($result7);
    // $orderCount=$row7["Ordercount"];
    
    // $sql="SELECT `orderid` FROM `purchase_order` WHERE sellerid = $sellerId ORDER BY `orderid` ASC";
    // $res = mysqli_query($con2, $sql);
    // while($array = mysqli_fetch_array($res)){
    //     $orderIdArray[$arraycount2++] = $array['orderid'];
    // }
    // $orderIdArray[$arraycount2]= $array['orderid'];
    // $arraycount2++;
    // $k++;

    $orderIdShort = $row1["orderid"];
    // while($j < $orderCount){
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
        $sql_query2 = "SELECT `prodid` FROM `customer_order` where orderid = $orderIdShort ";
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
            $response=array('orderIdShort'=>$orderIdShort,'stage_1_date'=>$row10['date'],'delivery'=>$delivery,'orderStatus'=>$orderStatus,'createDate'=>$mdate,'orderId'=>$orderId,'prodName'=>$row4['name'],'shortDesc'=>$row4['short_desc'],'longDesc'=>$row4['long_desc'],'spec'=>$row4['spec'],'shippingOption'=>$row4['shipping_option']);
        }
        else if($orderStatus == 'pending payment')
        {
            $sql_query10 = "SELECT `date` FROM `order_stage_date` where `stage` = 'pending confirmation' ";
            $result10 = mysqli_query($con2, $sql_query10);
            $row10 = mysqli_fetch_array($result10);
            $sql_query5 = "SELECT `date` FROM `order_stage_date` where `stage` = 'pending payment' ";
            $result5 = mysqli_query($con2, $sql_query5);
            $row5 = mysqli_fetch_array($result5);
            $response=array('orderIdShort'=>$orderIdShort,'stage_1_date'=>$row10['date'],'stage_2_date'=>$row5['date'],'delivery'=>$delivery,'orderStatus'=>$orderStatus,'createDate'=>$mdate,'orderId'=>$orderId,'prodName'=>$row4['name'],'shortDesc'=>$row4['short_desc'],'longDesc'=>$row4['long_desc'],'spec'=>$row4['spec'],'shippingOption'=>$row4['shipping_option']);
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
            $response=array('orderIdShort'=>$orderIdShort,'stage_1_date'=>$row10['date'],'stage_2_date'=>$row5['date'],'stage_3_date'=>$row6['date'],'delivery'=>$delivery,'orderStatus'=>$orderStatus,'createDate'=>$mdate,'orderId'=>$orderId,'prodName'=>$row4['name'],'shortDesc'=>$row4['short_desc'],'longDesc'=>$row4['long_desc'],'spec'=>$row4['spec'],'shippingOption'=>$row4['shipping_option']);
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
            $response=array('orderIdShort'=>$orderIdShort,'stage_1_date'=>$row10['date'],'stage_2_date'=>$row5['date'],'stage_3_date'=>$row6['date'],'stage_4_date'=>$row7['date'],'delivery'=>$delivery,'orderStatus'=>$orderStatus,'createDate'=>$mdate,'orderId'=>$orderId,'prodName'=>$row4['name'],'shortDesc'=>$row4['short_desc'],'longDesc'=>$row4['long_desc'],'spec'=>$row4['spec'],'shippingOption'=>$row4['shipping_option']);
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
            $response=array('orderIdShort'=>$orderIdShort,'stage_1_date'=>$row10['date'],'stage_2_date'=>$row5['date'],'stage_3_date'=>$row6['date'],'stage_4_date'=>$row7['date'],'stage_5_date'=>$row8['date'],'delivery'=>$delivery,'orderStatus'=>$orderStatus,'createDate'=>$mdate,'orderId'=>$orderId,'prodName'=>$row4['name'],'shortDesc'=>$row4['short_desc'],'longDesc'=>$row4['long_desc'],'spec'=>$row4['spec'],'shippingOption'=>$row4['shipping_option']);
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
            $response=array('orderIdArray'=>$orderIdArray,'orderIdShort'=>$orderIdShort,'stage_1_date'=>$row10['date'],'stage_2_date'=>$row5['date'],'stage_3_date'=>$row6['date'],'stage_4_date'=>$row7['date'],'stage_5_date'=>$row8['date'],'stage_6_date'=>$row9['date'],'delivery'=>$delivery,'orderStatus'=>$orderStatus,'createDate'=>$mdate,'orderId'=>$orderId,'prodName'=>$row4['name'],'shortDesc'=>$row4['short_desc'],'longDesc'=>$row4['long_desc'],'spec'=>$row4['spec'],'shippingOption'=>$row4['shipping_option']);
        }
        
        // $arraycount++;
        // $j++;
    // }
    echo json_encode($response);
?>