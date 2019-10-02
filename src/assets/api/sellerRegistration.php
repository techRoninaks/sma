<?php
    require "init.php";
    $fullname = $_POST['fullname'];
    $reg_email = $_POST['reg_email'];
    $reg_mobile_no = $_POST['reg_mobile_no'];
    $reg_password = $_POST['reg_password'];
    
    $sql_query ="INSERT INTO `seller` (seller_name,email,phone1,password) VALUES ('$fullname','$reg_email','$reg_mobile_no','$reg_password')";
    $result = mysqli_query($con2, $sql_query);
    if(! $result )
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