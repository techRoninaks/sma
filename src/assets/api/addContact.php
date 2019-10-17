<?php
    require "init.php";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['phone'];
    $purpose = $_POST['purpose'];
    $remarks = $_POST['remarks'];
    $sendstatus ="unanswered";
    $sql_query = " INSERT INTO contact (name,phone,email,purpose,note,status) VALUES ('$name','$mobile','$email','$purpose','$remarks','$sendstatus')";
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