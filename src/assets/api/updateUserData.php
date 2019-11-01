<?php
    require "init.php";
    $userId = $_POST['userId'];
    $fullname = $_POST['fullname'];
    $reg_address1 = $_POST['reg_address1'];
    $reg_city = $_POST['reg_city'];
    $reg_dist = $_POST['reg_dist'];
    $reg_state = $_POST['reg_state'];
    $reg_country = $_POST['reg_country'];
    $reg_pin = $_POST['reg_pin'];
    $reg_email = $_POST['reg_email'];
    $reg_mobile_no = $_POST['reg_mobile_no'];

    $sql_query1 = " UPDATE `address` SET addr1='$reg_address1',city='$reg_city',district='$reg_dist',state='$reg_state',country='$reg_country',pincode='$reg_pin',contact_email='$reg_email',contact_number='$reg_mobile_no',contact_name='$fullname' WHERE mapping_id='$userId'";
    $result1 = mysqli_query($con2, $sql_query1);
    $sql_query3 = "UPDATE `user`SET Name='$fullname',email='$reg_email',phone1='$reg_mobile_no' WHERE id = '$userId'";
    $result3 = mysqli_query($con2, $sql_query3);
    if(! $result1 && ! $result3)
    {
        $status="Error";
        echo json_encode($status);
    }
    else
    {
        $status="Success";
        echo json_encode($status);
        $to = $reg_email;
        $subject = "Verify E-Mail ID-Scoop My Art";
        $txt = "This is an auto generated email for email verification.
                Please do not reply.

                Team Scoop My Art";
        mail($to,$subject,$txt);
    }
?>