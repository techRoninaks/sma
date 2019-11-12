<?php
    require "init.php";
    $dateDrom = $_POST['dateDrom'];
    $dateTo = $_POST['dateTo'];
    $percentage = $_POST['percentage'];
    $sql_query = "INSERT INTO `offer`(`prodid`, `percentage`, `from_time_stamp`, `to_tme_Stamp`) VALUES ('-99','$percentage','$dateDrom','$dateTo')";
    $result = mysqli_query($con1, $sql_query);
    // echo $sql_query;

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