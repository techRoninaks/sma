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
    
    $sql_query ="UPDATE `seller` SET account_no='$accnt_no',account_holder='$accnt_holder_name',account_type='$accnt_type',bankname='$bank_name',ifsc='$ifsc' WHERE id='$seller_id'";
    $result = mysqli_query($con2, $sql_query);

    $sql_query1 ="INSERT INTO `address` (city,district,state,country,mapping_id) VALUES ('$ship_city','$district','$state','$country','$ifsc','$seller_id')";
    $result = mysqli_query($con2, $sql_query);

    if(! $result )
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