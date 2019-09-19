<?php
    require "init.php";
    $fullname = $_POST['fullname'];
    $reg_address = $_POST['reg_address'];
    $reg_email = $_POST['reg_email'];
    $reg_mobile_no = $_POST['reg_mobile_no'];
    $reg_age = $_POST['reg_age'];
    $gender = $_POST['gender'];
    $reg_password = $_POST['reg_password'];
    $flag = false;
    while($flag == false)
    {
        $rand_no = rand(1000,10000);
        $username = str_replace(" ","",$fullname);
        $username = $username.$rand_no;
        $check_username = "SELECT * FROM user WHERE username='$username'";
        $checkResult = mysqli_query($con2, $check_username);
        $row=mysqli_fetch_array($checkResult);
        if(!$row)
        {
            $flag = true;
            $result = array();
            $status = "";
            $sql_query = " INSERT INTO user (username,Name,password,email,phone1,age,gender) VALUES ('$username','$fullname','$reg_password','$reg_email','$reg_mobile_no','$reg_age','$gender')";
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
        }
        else
        {
            $flag = false;
        }
    }
    
?>