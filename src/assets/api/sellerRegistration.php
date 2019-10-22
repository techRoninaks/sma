<?php
    require "init.php";
    $fullname = $_POST['fullname'];
    $reg_email = $_POST['reg_email'];
    $reg_mobile_no = $_POST['reg_mobile_no'];
    $reg_password = $_POST['reg_password'];
    $stage_number = 1;
    $response =array();
    
    $sql_query ="INSERT INTO `seller` (seller_name,email,phone1,password,stage_number) VALUES ('$fullname','$reg_email','$reg_mobile_no','$reg_password','$stage_number')";
    $result = mysqli_query($con2, $sql_query);
    $sql_query2 ="SELECT id,email FROM `seller` WHERE email= '$reg_email' ";
    $result2 = mysqli_query($con2, $sql_query2);
    $row2=mysqli_fetch_array($result2);
    if(! $result )
    {
        $status="Error";
        echo json_encode($status);
    }
    else
    {
        $status="Success";
        $response = array('seller_id'=>$row2['id'],'status'=>$status,'email'=>$row2['email']);
        echo json_encode($response);
    }
?>