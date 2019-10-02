<?php
    require "init.php";
    $sellerId = $_POST["sellerId"];
    $data = array();
    $sql_query = "SELECT`status`FROM `transaction_details` GROUP BY `status`";
    $result = mysqli_query($con2, $sql_query);
    $count=0;
    while ($row = mysqli_fetch_assoc($result)) {
        $data[$count++] = array('status'=>$row["status"]);
    }

    echo json_encode($data);
?>
