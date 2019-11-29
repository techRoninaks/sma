<?php
    require "init.php";
    $ship_city = $_POST['ship_city'];
    $checkedValue = $_POST['checkedValue'];
    $checkedValue2 = $_POST['checkedValue2'];
    // $district = $_POST['district'];
    $city = $_POST['city'];
    $accnt_holder_name = $_POST['accnt_holder_name'];
    $bank_name = $_POST['bank_name'];
    $accnt_type = $_POST['accnt_type'];
    $branch = $_POST['branch'];
    $accnt_no = $_POST['accnt_no'];
    $ifsc = $_POST['ifsc'];
    $seller_id = $_POST['seller_id'];
    $addr_type = "shipping address";
    $country ="";
    $state ="";
    $stage_number = 4;

    if($checkedValue2== 'India'){
        $country = $checkedValue2;
    }
    if($checkedValue2== 'Kerala'){
        $state = $checkedValue2;
    }
    $sql_query ="UPDATE `seller` SET account_no=$accnt_no,account_holder='$accnt_holder_name',account_type='$accnt_type',bankname='$bank_name',ifsc='$ifsc',`stage_number`=$stage_number WHERE `id`=$seller_id";
    $result = mysqli_query($con2, $sql_query);

    $sql_query1 ="INSERT INTO `address` (mapping_id,city,country,`state`,addr_type,addr1,pincode,addr2,district,contact_email,contact_number,contact_name) VALUES ('$seller_id','$city','$country','$state','$addr_type','',2,'','','',2,'')";
    $result1 = mysqli_query($con2, $sql_query1);

    $sql_query2 ="SELECT `seller_name`,`id` FROM `seller` WHERE id='$seller_id'";
    $result2 = mysqli_query($con2, $sql_query2);
    $row2 = mysqli_fetch_array($result2);

    if(!$result && !$result1)
    {
        $status="Error";
        $data=array('status'=>$status);
        echo json_encode($data);
    }
    else
    {
        $status="Success";
        $data=array('seller_id'=>$row2["id"],'seller_name'=>$row2["seller_name"],'status'=>$status);
        echo json_encode($data);
    }
?>