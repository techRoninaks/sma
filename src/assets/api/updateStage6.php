<?php
    require "init.php";
    $seller_id = $_POST['sellerId'];
    $stage_number = 7;

    $sql_query1 ="UPDATE`seller` SET `stage_number`='$stage_number' WHERE id ='$seller_id'";
    $result1 = mysqli_query($con2, $sql_query1);

    if(! $result1)
    {
        $status="Error";
        echo json_encode($status);
    }
    else
    {
        $status="Success";
        echo json_encode($status);
    }
?>