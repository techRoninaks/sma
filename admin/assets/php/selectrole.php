<?php
   require "init.php";
   $adminId = $_POST['adminId'];
   $role = $_POST['role'];

    $flag = true;
    $status = "";
    $sql_query = "UPDATE `admin` SET `role`= $role WHERE id = $adminId;";
    
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