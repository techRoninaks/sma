<?php
    require "init.php";
    $userId = $_POST["userId"];
    $cardNo = $_POST['cardNo'];

    $sql_query = "DELETE FROM `user_card_detail` WHERE `user_id` = '$userId' && `card_num` ='$cardNo'";
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
    mysqli_close($con1);
    mysqli_close($con2);
?>