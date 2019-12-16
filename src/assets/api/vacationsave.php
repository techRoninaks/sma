<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $type = $_POST["type"];
    $start = $_POST["start"];
    $end = $_POST["end"];

    $data = array();
    if ($type == 'until') {
        $sql_query = "UPDATE `shop_details` SET `vacation_start_date`=NULL,`on_vacation`=1,`vacation_end_date`=NULL WHERE `id`=$shopId";
        $result = mysqli_query($con2, $sql_query);
        // echo $sql_query;
    } 
    else if ($type == 'dateSet') {
        $sql_query = "UPDATE `shop_details` SET `vacation_start_date`='$start',`on_vacation`=1,`vacation_end_date`='$end' WHERE `id`=$shopId";
        $result = mysqli_query($con2, $sql_query);
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo $result;
?>