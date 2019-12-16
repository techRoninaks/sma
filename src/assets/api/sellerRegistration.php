<?php
    require "init.php";
    $fullname = $_POST['fullname'];
    $reg_email = $_POST['reg_email'];
    $reg_mobile_no = $_POST['reg_mobile_no'];
    $reg_password = $_POST['reg_password'];
    $stage_number = 1;
    $response =array();
    
    $sql_query ="INSERT INTO `seller` (seller_name,username,email,phone1,password,stage_number,dob,salt,account_no,account_holder,account_type,gst,bankname,ifsc,idcard_type,idcardno,idimage,is_private,addr_id,doj) VALUES ('$fullname','$fullname','$reg_email','$reg_mobile_no','$reg_password','$stage_number','1996-1-1','null',111,'null','null','null','null','null','null','null','null',1,0,CURRENT_DATE())"; 

    $result = mysqli_query($con2, $sql_query);
    // echo $sql_query;
    $sql_query2 ="SELECT id,email FROM `seller` WHERE `email`= '$reg_email' ";
    $result2 = mysqli_query($con2, $sql_query2);
    // echo $sql_query2;
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
    mysqli_close($con1);
    mysqli_close($con2);
?>