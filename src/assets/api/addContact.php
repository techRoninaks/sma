<?php
    require "init.php";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['phone'];
    $purpose = $_POST['purpose'];
    $remarks = $_POST['remarks'];
    $sql_query = " INSERT INTO contact (name,phone,email,purpose,remarks) VALUES ('$name','$mobile','$email','$purpose','$remarks')";
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
    $to = $email;
    $subject = "Scoop My Art";
    $txt = "Thanks for the feedback $name!";
    mail($to,$subject,$txt);
?>