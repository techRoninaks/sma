<?php
    require "init.php";
    $userId = $_POST['userId'];
    $prodId = $_POST['prodId'];

    $sql_query = " INSERT INTO `notification` (userid,prodid,`type`,`message`) VALUES ('$userId','$prodId','order status update','order status update')";
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