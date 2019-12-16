<?php
    require "init.php";
    $orderid =$_POST["orderid"];
    $data = array();
    $variantArray = array();

    $sql_query1 = "SELECT `orderid`,`delivery_date`,`customerid`,`order_status`,`created_date` FROM `purchase_order` where orderid =  '$orderid' ";
    $result1 = mysqli_query($con2, $sql_query1);
    $row1=mysqli_fetch_array($result1);
    $orderId=$row1["orderid"];
    $delivery_date = $row1["delivery_date"];
    $custId = $row1["customerid"];

    $createDate = $row1["created_date"];
    $datem = date_create($createDate);
    $mdate = date_format($datem,"dmy");
    $createDate2 = date_format($datem,"M-d-y");

    $len = strlen($orderId);
    $zero = 0;
    for($i=0; $len<8 ;$i++)
    {
        $orderId = $zero . $orderId;
        $len = strlen($orderId);
    }

    $sql="SELECT CURRENT_DATE";
    $res=mysqli_query($con1,$sql);
    $row=mysqli_fetch_assoc($res);
    $tDateValue=array('tDate'=>$row["CURRENT_DATE"]);
    $date=$tDateValue["tDate"];
    $current_date=date_create("$date");
    $delivery_date_m=date_create("$delivery_date");

    $diff=date_diff($current_date,$delivery_date_m);
    $diff->format("%a");

    $sql_query2 = "SELECT `prodid`,`variants_chosen`,`shipping_tracking_number`,`quantity`,`tax`,`variantprice`,`shippingprice`,`total_price`,`gift_note`,`gift_address`,`gift_title` FROM `customer_order` where orderid =  '$orderid' ";
    $result2 = mysqli_query($con2 , $sql_query2);
    $row2=mysqli_fetch_array($result2);
    $prodId = $row2["prodid"];

    $tracking_no = $row2["shipping_tracking_number"];

    $sql_query3 = "SELECT * FROM `product` where prodid =  '$prodId' ";
    $result3 = mysqli_query($con1 , $sql_query3);
    $row3=mysqli_fetch_array($result3);

    $sql_query5 = "SELECT `contact_name`,`addr1`,`contact_number`,`pincode`,`city` FROM `address` where mapping_id ='$custId' && `addr_type`='shipping'";
    $result5 = mysqli_query($con2, $sql_query5);
    $row5=mysqli_fetch_array($result5);

    $variantList = $row2["variants_chosen"];
    $varSplit = (explode(",",$variantList));
    $arrayCount =sizeof($varSplit);
    $count1 =0;
    for ($i=0; $i<$arrayCount; $i++)
    {
        $sql_query4 = "SELECT * FROM `variant_info` where `prodid` =  '$prodId' && `variantid`= '$varSplit[$i]'";
        $result4 = mysqli_query($con1 , $sql_query4);
        while($row4=mysqli_fetch_array($result4))
        {
            $variantArray[$count1++]= array('var_name'=>$row4["name"],'var_value'=>$row4["value"],'var_price'=>$row4["price"]);
        }
    }

    $data = array('prodId'=>$prodId,'createdDate'=>$createDate2,'createDate'=>$mdate,'orderId'=>$orderId,'gift_note'=>$row2['gift_note'],'gift_address'=>$row2['gift_address'],'gift_title'=>$row2['gift_title'],
    'quantity'=>$row2['quantity'],'tax'=>$row2['tax'],'variantprice'=>$row2['variantprice'],
    'shippingprice'=>$row2['shippingprice'],'total_price'=>$row2['total_price'],'order_status'=>$row1['order_status'],
    'shipment_type'=>$row3['shipping_option'],'tracking_no'=>$tracking_no,'cust_name'=>$row5['contact_name'],
    'cust_address'=>$row5['addr1'],'cust_mobile'=>$row5['contact_number'],
    'cust_pin'=>$row5['pincode'],'cust_city'=>$row5['city'],'remaining_days'=>$diff->format("%a"),
    'delivery_date'=>$delivery_date,'variantArray'=>$variantArray,
    'prod_name'=>$row3["name"],'short_desc'=>$row3["short_desc"]);
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>