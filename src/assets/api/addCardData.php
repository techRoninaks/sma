<?php
    require "init.php";
    $userName = $_POST['userName'];
    $cvv = $_POST['cvv'];
    $cardNo = $_POST['cardNo'];
    $validity = $_POST['validity'];
    $userId = $_POST['userId'];
    $datem = date_create($validity);
    $exp_year = date_format($datem,"Y");
    $exp_month = date_format($datem,"m");
    $current_year = date("Y");
    $current_month = date("m");
    $active_status = 0;
    if($current_year <= $exp_year)
    {
        if($current_month <= $exp_month)
        {
            $active_status = 1;
        }
    }  
    $sql_query = " INSERT INTO `user_card_detail` (`user_id`,card_num,card_holder_name,expmon,exp_year,is_active) VALUES ($userId,$cardNo,'$userName',$exp_month,$exp_year,$active_status)";
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