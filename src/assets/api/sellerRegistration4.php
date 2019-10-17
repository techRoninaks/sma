<?php
    require "init.php";
    $ship_city = $_POST['ship_city'];
    $checkedValue = $_POST['checkedValue'];
    $checkedValue2 = $_POST['checkedValue2'];
    $country = $_POST['country'];
    $state = $_POST['state'];
    $district = $_POST['district'];
    $city = $_POST['city'];
    $accnt_holder_name = $_POST['accnt_holder_name'];
    $bank_name = $_POST['bank_name'];
    $accnt_type = $_POST['accnt_type'];
    $branch = $_POST['branch'];
    $accnt_no = $_POST['accnt_no'];
    $ifsc = $_POST['ifsc'];
    $seller_id = $_POST['seller_id'];
    $addr_type = "shipping address";
    
    $sql_query ="UPDATE `seller` SET account_no='$accnt_no',account_holder='$accnt_holder_name',account_type='$accnt_type',bankname='$bank_name',ifsc='$ifsc' WHERE id='$seller_id'";
    $result = mysqli_query($con2, $sql_query);

    $sql_query1 ="INSERT INTO `address` (city,district,state,country,addr_type) VALUES ('$ship_city','$district','$state','$country','$seller_id','$addr_type')";
    $result1 = mysqli_query($con2, $sql_query1);

    $sql_query2 ="SELECT `seller_name` FROM `seller` WHERE id='$seller_id'";
    $result2 = mysqli_query($con2, $sql_query2);
    $row2 = mysqli_fetch_array($result2);

    if(! $result && ! $result1)
    {
        $status="Error";
        $data=array('status'=>$status);
        echo json_encode($data);
    }
    else
    {
        $status="Success";
        $data=array('seller_name'=>$row2["seller_name"],'status'=>$status);
        echo json_encode($data);
    }
?>