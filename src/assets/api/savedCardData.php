<?php
    require "init.php";
    $count =0;
    $response=array();
    $userId = $_POST["userId"];
    $sql_query="SELECT card_num,card_holder_name,expmon,exp_year FROM user_card_detail WHERE user_id = $userId";
    $result = mysqli_query($con2, $sql_query);
    while( $row1 = mysqli_fetch_assoc($result))
    {
        $cardno = $row1['card_num'];
        $cardno_trim = substr($cardno,12);
        $response[$count]= array('cardno'=>$cardno_trim,'expmon'=>$row1['expmon'],'exp_year'=>$row1['exp_year']);
        $count++;
    }
    echo json_encode($response);
?>