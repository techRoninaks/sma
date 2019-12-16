<?php
    require "init.php";
    $sellerId = $_POST["sellerId"];
    $statusName =$_POST["statusDetail"];
    $data = array();
    $order= array();
    $sql="SELECT `orderid` FROM `purchase_order` WHERE `sellerid`=$sellerId";
    $res=mysqli_query($con2,$sql);
    // echo $sql;
    $cou=0;
    while($rows =mysqli_fetch_assoc($res)){
        $order[$cou++]=$rows["orderid"]+0;
    }
    // echo json_encode($order);
    $c=0;
    $count=0;

    // while($c<$cou){
    //     $orderId=$order[$c];
    //     $sql_query = "SELECT `txnid`, `orderid`,`payment_mode`, `status`,`prod_name` FROM `transaction_details` WHERE `orderid`=$orderId AND `status`='$statusName'";
    //     $result = mysqli_query($con2, $sql_query);
    //     // echo $sql_query;
    //     while ($row = mysqli_fetch_assoc($result)) {
    //         $data[$count++] = array('transactionId'=>$row["txnid"],'paymentMode'=>$row["payment_mode"],'orderId'=>$row["orderid"],'productName'=>$row["prod_name"],'status'=>$row["status"]);
    //     }
    //     $c++;
    // }
    // echo json_encode($data);
    $sql_query="SELECT c.prodid,t.txnid,t.status,t.orderid,t.payment_mode FROM customer_order c INNER JOIN transaction_details t on c.orderid = t.orderid WHERE (c.orderid IN (SELECT orderid FROM purchase_order WHERE sellerid =$sellerId))AND (`status`='$statusName')";
    $result = mysqli_query($con2, $sql_query);
    while ($row = mysqli_fetch_assoc($result)) {
        $prod=$row["prodid"];
        $sql="SELECT `name` FROM `product` WHERE `prodid`= $prod";
        $res = mysqli_query($con1, $sql);
        $rows = mysqli_fetch_assoc($res);
        if (mysqli_num_rows ($res)!= 0 )
        {
            $productName = $rows["name"];
        }
        else if(mysqli_num_rows ($res) == 0 )
        {
            $productName="";
        }
        $data[$count++] = array('transactionId'=>$row["txnid"],'paymentMode'=>$row["payment_mode"],'orderId'=>$row["orderid"],'status'=>$row["status"],'productName'=>$productName);
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>
