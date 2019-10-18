<?php
    require "init.php";
    $sellerId = $_POST["sellerId"];
    $data = array();

    $count=0;
    // $sql_query="SELECT c.prodid,t.txnid,t.status,t.orderid,t.payment_mode FROM customer_order c INNER JOIN transaction_details t on c.orderid = t.orderid WHERE c.orderid IN (SELECT orderid FROM purchase_order WHERE sellerid =$sellerId)";
    $sql_query="SELECT c.prodid,t.txnid,t.status,t.orderid,t.payment_mode FROM customer_order c INNER JOIN transaction_details t on c.orderid = t.orderid WHERE c.orderid IN (SELECT orderid FROM purchase_order WHERE sellerid =$sellerId)";
    // echo $sql_query;
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
    echo json_encode($data);

    // $order= array();
// //get order id
//     $sql="SELECT `orderid` FROM `purchase_order` WHERE `sellerid`=$sellerId";
//     $res=mysqli_query($con2,$sql);
//     $cou=0;
//     while($rows =mysqli_fetch_assoc($res)){
//         $order[$cou++]=$rows["orderid"]+0;
//     }
// //get prod id
//     $cou1=0;
//     $sql1="SELECT `prodid`, `orderid` FROM `customer_order` WHERE `orderid` IN (SELECT `orderid` FROM `purchase_order` WHERE `sellerid` =$sellerId)";
//     $res1=mysqli_query($con2,$sql1);
//     while($rows =mysqli_fetch_assoc($res1)){
//         $prod[$cou1++]=$rows["prodid"]+0;
//     }
// //get prod name
//     $cou1=0;
//     $sql1="SELECT `name` FROM `product` WHERE `prodid` = $prodId";
//     $res1=mysqli_query($con2,$sql1);
//     while($rows =mysqli_fetch_assoc($res1)){
//         $prod[$cou1++]=$rows["prodid"]+0;
//     }
    // $c=0;
    // $count=0;

    // while($c<$cou){
    //     $orderId=$order[$c];
    //     $sql_query = "SELECT `txnid`, `orderid`,`payment_mode`, `status`,`prod_name` FROM `transaction_details` WHERE `orderid`=$orderId";
    //     $result = mysqli_query($con2, $sql_query);

    //     while ($row = mysqli_fetch_assoc($result)) {
    //         $data[$count++] = array('transactionId'=>$row["txnid"],'paymentMode'=>$row["payment_mode"],'orderId'=>$row["orderid"],'productName'=>$row["prod_name"],'status'=>$row["status"]);
    //     }
    //     $c++;
    // }
?>
