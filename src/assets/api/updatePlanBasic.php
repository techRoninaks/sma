<?php
    require "init.php";
    $seller_id = $_POST['seller_id'];
    $sql="SELECT CURRENT_DATE";
    $res=mysqli_query($con1,$sql);
    $row=mysqli_fetch_assoc($res);
    $tDateValue=array('tDate'=>$row["CURRENT_DATE"]);
    $date=$tDateValue["tDate"];
    $date=date_create("$date");
    $items = 90;
    $x="{$items} days";
    date_add($date,date_interval_create_from_date_string($x));
    $exp_date= date_format($date,"Y-m-d");
    $sql_query ="UPDATE `shop_details` SET plan_id='2' ,`plan_join_date` = CURRENT_DATE(),`plan_exp_date`='$exp_date' WHERE seller_id='$seller_id'";
    $result = mysqli_query($con2, $sql_query);
    if ($result)
    {
        $status="Success";
        echo json_encode($status);
    }
    else
    {
        $status="Error";
        echo json_encode($status);
    }
?>