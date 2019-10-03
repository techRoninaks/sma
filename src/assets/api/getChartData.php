<?php

    require "init.php";

    $sellerId = $_POST["sellerId"];
    $scenario = $_POST["scenario"];

    $sql = "";
    $success = "unsuccessful";
    $data = array();
    $count = 0;

    if($scenario == "day"){
        $sql = "SELECT SUM(total_amnt) AS total_amnt, TIME(created_date) as value FROM `purchase_order` where sellerid = '$sellerId' and (order_status LIKE '%closed%' OR order_status LIKE '%delivered%') AND DAY(NOW()) = DAY(created_date) GROUP BY TIME(created_date)";
    } else if($scenario == "week"){
        $sql = "SELECT SUM(total_amnt) AS total_amnt, DAY(created_date) as value FROM `purchase_order` where sellerid = '$sellerId' and (order_status LIKE '%closed%' OR order_status LIKE '%delivered%') AND WEEK(NOW()) = WEEK(created_date) GROUP BY DAY(created_date)";
    } else if($scenario == "month"){
        $sql = "SELECT SUM(total_amnt) AS total_amnt, MONTH(created_date) as value FROM `purchase_order` where sellerid = '$sellerId' and (order_status LIKE '%closed%' OR order_status LIKE '%delivered%') AND YEAR(NOW()) = YEAR(created_date) GROUP BY MONTH(created_date)";
    } else if($scenario == "year"){
        $sql = "SELECT SUM(total_amnt) AS total_amnt, YEAR(created_date) as value FROM `purchase_order` where sellerid = '$sellerId' and (order_status LIKE '%closed%' OR order_status LIKE '%delivered%') GROUP BY YEAR(created_date)";
    }
    $result = mysqli_query($con2,$sql);

    while($row = mysqli_fetch_array($result)){
        $success = "successful";
        $data[$count++] = array("amount"=>$row["total_amnt"],"xAxis"=>$row["value"]);
    }

    echo json_encode($data);
?>