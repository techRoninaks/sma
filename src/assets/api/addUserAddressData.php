<?php
    require "init.php";
    $userId = $_POST['userId'];
    $userName = $_POST['userName'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $country = $_POST['country'];
    $pin = $_POST['pin'];
    $email = $_POST['email'];
    $mobile_no = $_POST['mobile'];
    $sql_query = " INSERT INTO `address` (`mapping_id`,city,`state`,country,pincode,contact_email,contact_number,contact_name,addr_type) VALUES ('$userId','$city','$state','$country','$pin','$email','$mobile_no','$userName','shipping')";
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