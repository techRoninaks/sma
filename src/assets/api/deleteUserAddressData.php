<?php
    require "init.php";
    $addressId = $_POST["addressId"];

    $sql_query = "DELETE FROM `address` WHERE `id` = '$addressId' ";
    $result = mysqli_query($con2, $sql_query);
    if(! $result)
    {
        $status="Error";
        echo json_encode($status);
    }
    else
    {
        $status="Success";
        echo json_encode($status);
    }
    mysqli_close($con1);
    mysqli_close($con2);
?>