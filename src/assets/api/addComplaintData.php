<?php
    require "init.php";
    $userName = $_POST['userName'];
    $notes = $_POST['note'];
    $userId = $_POST['userId'];

    $sql_query = " INSERT INTO `delivery_discrepancy` (coid,notes) VALUES ('$userId','$notes')";
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
?>