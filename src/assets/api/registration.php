<?php
    require "init.php";
    $fullname = $_POST['fullname'];
    $reg_address = $_POST['reg_address'];
    $reg_email = $_POST['reg_email'];
    $reg_mobile_no = $_POST['reg_mobile_no'];
    $reg_age = $_POST['reg_age'];
    $gender = $_POST['gender'];
    $reg_password = $_POST['reg_password'];

    $result = array();

    $sql_query = " INSERT INTO `user` (username,Name,password,email,phone1,age,gender) VALUES ('$reg_email','$fullname','$reg_password','$reg_email','$reg_mobile_no','$reg_age','$gender')";
    echo $sql_query;
    $result = mysqli_query($con2, $sql_query);

    echo json_encode($result);
    
    if(! $result)
        die ('Could not connect:' . mysql_error());
    
?>