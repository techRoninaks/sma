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
    $shippinglocationArray = $_POST['shippinglocationArray'];
    $addr_type = "shipping address";
    $country ="";
    $state ="";
    $stage_number = 4;

    $sql_query ="UPDATE `seller` SET account_no=$accnt_no,account_holder='$accnt_holder_name',account_type='$accnt_type',bankname='$bank_name',ifsc='$ifsc',`stage_number`=$stage_number WHERE `id`=$seller_id";
    $result = mysqli_query($con2, $sql_query);

    $sql_query1 ="INSERT INTO `address` (mapping_id,city,country,`state`,addr_type,addr1,pincode,addr2,district,contact_email,contact_number,contact_name) VALUES ('$seller_id','$city','$country','$state','$addr_type','',2,'','','',2,'')";
    $result1 = mysqli_query($con2, $sql_query1);

    $sql_query2 ="SELECT `seller_name`,`id` FROM `seller` WHERE id='$seller_id'";
    $result2 = mysqli_query($con2, $sql_query2);
    $row2 = mysqli_fetch_array($result2);

    $sql_query3 ="SELECT `id` FROM `address` WHERE `mapping_id` = '$seller_id' ";
    $result3 = mysqli_query($con2, $sql_query3);
    $row3 = mysqli_fetch_array($result3);
    $addressid = $row3['id'];

    $sql_query3 ="SELECT `id` FROM `shop_details` WHERE `seller_id` = '$seller_id' ";
    $result3 = mysqli_query($con2, $sql_query3);
    $row3 = mysqli_fetch_array($result3);
    $shopid = $row3['id'];

    if($checkedValue2== 'Worldwide'){
        $sql_query = "INSERT INTO shipping_location_shop (location_alias,pincode,shop_id) VALUES ('WORLDWIDE','',$shopid)";
        $result = mysqli_query($con2, $sql_query);
    }
    if($checkedValue2== 'India'){
        $sql_query = "INSERT INTO shipping_location_shop (location_alias,pincode,shop_id) VALUES ('ALL INDIA','',$shopid)";
        $result = mysqli_query($con2, $sql_query);
    }
    if($checkedValue2== 'Kerala'){
        $sql_query = "INSERT INTO shipping_location_shop (location_alias,pincode,shop_id) VALUES ('ALL KERALA','',$shopid)";
        $result = mysqli_query($con2, $sql_query);
    }
    if($checkedValue2== 'Custom'){
        $shippingArray = json_decode($_POST['shippinglocationArray']);
        foreach ($shippingArray as $value) 
        {
            //   if($value->pincode == "My State"){
            //     $sql = "SELECT * FROM `address` WHERE id = $addressid";
            //     $res = mysqli_query($con2, $sql);
            //     $row = mysqli_fetch_assoc($res);
            //     $loc = $row['state'];
            //     $loc = preg_replace('/\s/', '', $loc);
            //     $sql_query = "SET global group_concat_max_len=1500000000;";
            //     $result = mysqli_query($con1, $sql_query);
            //     $sql_query = "INSERT INTO shipping_location_shop (location_alias,pincode,shop_id) VALUES ('ALL STATE' ,(select GROUP_CONCAT(distinct pincode SEPARATOR ', ') from roninaks_temp_smausr.location where state like '$loc'),2)";
            //     $result = mysqli_query($con2, $sql_query);
            //   }
            //   if($value->pincode =="All over India"){
            //     $sql = "SELECT * FROM `address` WHERE id = $addressid";
            //     $res = mysqli_query($con2, $sql);
            //     $row = mysqli_fetch_assoc($res);
            //     $loc = $row['state'];
            //     $loc = preg_replace('/\s/', '', $loc);
            //     $sql_query = "SET global group_concat_max_len=1500000000;";
            //     $result = mysqli_query($con1, $sql_query);
            //     $sql_query = "INSERT INTO shipping_location_shop (location_alias,pincode,shop_id) VALUES ('ALL INDIA' ,(select GROUP_CONCAT(distinct pincode SEPARATOR ', ') from roninaks_temp_smausr.location where state like '$loc'),2)";
            //     $result = mysqli_query($con2, $sql_query);
            //   }
            //   if($value->pincode =="My City"){
            //     $sql = "SELECT * FROM `address` WHERE id = $addressid";
            //     $res = mysqli_query($con2, $sql);
            //     $row = mysqli_fetch_assoc($res);
            //     $loc = $row['city'];
            //     $loc = preg_replace('/\s/', '', $loc);
            //     $sql_query = "SET global group_concat_max_len=1500000000;";
            //     $result = mysqli_query($con1, $sql_query);
            //     $sql_query = "INSERT INTO shipping_location_shop (location_alias,pincode,shop_id) VALUES ('ALL CITY' ,(select GROUP_CONCAT(distinct pincode SEPARATOR ', ') from roninaks_temp_smausr.location where state like '$loc'),2)";
            //     $result = mysqli_query($con2, $sql_query);
            //   }
            //   if($value->pincode == "My District"){
            //     $sql = "SELECT * FROM `address` WHERE id = $addressid";
            //     $res = mysqli_query($con2, $sql);
            //     $row = mysqli_fetch_assoc($res);
            //     $loc = $row['district'];
            //     $loc = preg_replace('/\s/', '', $loc);
            //     $sql_query = "SET global group_concat_max_len=1500000000;";
            //     $result = mysqli_query($con1, $sql_query);
            //     $sql_query = "INSERT INTO shipping_location_shop (location_alias,pincode,shop_id) VALUES ('ALL DISTRICT' ,(select GROUP_CONCAT(distinct pincode SEPARATOR ', ') from roninaks_temp_smausr.location where state like '$loc'),2)";
            //     $result = mysqli_query($con2, $sql_query);
            //   }
                $location = explode(",",$value->pincode);
                if(count($location) != 1){
                  $pincode = $location[1];
                  $locationAlias = $location[0];
                  $sql_query = "INSERT INTO shipping_location_shop (location_alias,pincode,shop_id) VALUES ('$locationAlias' ,$pincode,$shopid)";
                  $result = mysqli_query($con2, $sql_query);
                }
            }
    }

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
    mysqli_close($con1);
    mysqli_close($con2);
?>