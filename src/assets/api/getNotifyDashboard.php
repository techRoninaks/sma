<?php

    require "init.php";

    $sellerId = $_POST["sellerId"];

    $sql_rfq = "SELECT COUNT(is_rfq) as quot_count FROM `purchase_order` WHERE sellerid = '$sellerId' AND is_rfq = 1 ";
    $result_rfq = mysqli_query($con2,$sql_rfq);
    $quot_count = mysqli_fetch_array($result_rfq);

    $sql_order = "SELECT COUNT(*) as order_count FROM purchase_order WHERE sellerid = '$sellerId' AND order_status IN ('pending_confirmation','processing')";
    $result_order = mysqli_query($con2,$sql_order);
    $order_count = mysqli_fetch_array($result_order);

    $sql_disc = "SELECT COUNT(*) as disc_count FROM delivery_discrepancy d, customer_order c, purchase_order p WHERE d.coid = c.coid AND c.orderid = p.orderid and p.sellerid = '$sellerId'";
    $result_disc = mysqli_query($con2,$sql_disc);
    $disc_count = mysqli_fetch_array($result_disc);

    $sql_n_msg = "SELECT COUNT(*) as msg_count FROM message m, seller sl WHERE sl.id = '$sellerId' AND m.receiverid = sl.id AND m.user_type like '%seller%'";
    $result_n_msg = mysqli_query($con2,$sql_n_msg);
    $new_msg = mysqli_fetch_array($result_n_msg);

    $data = array("quot"=>$quot_count["quot_count"],
    "order"=>$order_count["order_count"],
    "disc"=>$disc_count["disc_count"],
    "newMsg"=>$new_msg["msg_count"]);

    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>  