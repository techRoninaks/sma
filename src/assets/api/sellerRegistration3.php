<?php
    require "init.php";
    $id_no = $_POST['id_no'];
    $seller_dob = $_POST['seller_dob'];
    $id_type = $_POST['id_type'];
    $seller_id = $_POST['seller_id'];
    $stage_number = 3;

    $sql_query1 ="UPDATE`seller` SET `dob`= '$seller_dob', `idcardno`='$id_no' ,`idcard_type`='$id_type',`stage_number`=$stage_number WHERE id =$seller_id";
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
    mysqli_close($con1);
    mysqli_close($con2);
?>