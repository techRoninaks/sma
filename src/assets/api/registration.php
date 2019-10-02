<?php
    require "init.php";
    $fullname = $_POST['fullname'];
    $reg_address1 = $_POST['reg_address1'];
    $reg_address2 = $_POST['reg_address2'];
    $reg_city = $_POST['reg_city'];
    $reg_dist = $_POST['reg_dist'];
    $reg_state = $_POST['reg_state'];
    $reg_country = $_POST['reg_country'];
    $reg_pin = $_POST['reg_pin'];
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
            $sql_query2 = "SELECT * FROM `user` ORDER BY `user`.`id` DESC LIMIT 1 ";
            $result2 = mysqli_query($con2, $sql_query2);
            $row2 = mysqli_fetch_array($result2);
            $id =$row2['id'];
            $sql_query1 = " INSERT INTO `address` (mapping_id,addr1,addr2,city,district,state,country,pincode,contact_email,contact_number,contact_name) VALUES ('$id','$reg_address1','$reg_address2','$reg_city','$reg_dist','$reg_state','$reg_country','$reg_pin','$reg_email','$reg_mobile_no','$fullname')";
            $result1 = mysqli_query($con2, $sql_query1);
            
            if(! $result && ! $result1)
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