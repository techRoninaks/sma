<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $userId = $_POST["userId"];
    $data = array();

    $sql_query1 = "SELECT `shop_id` FROM `product` where prodid =  $prodId ";
    $result1 = mysqli_query($con1, $sql_query1);
    $row1 = mysqli_fetch_array($result1);
    $shopId = $row1["shop_id"];


    $sql_query = "SELECT id FROM `follow` where shopid = $shopId && userid = $userId ";
    $result = mysqli_query($con2, $sql_query);

    if (mysqli_num_rows ($result)!= 0 )
    {
        $data = json_encode(array('response'=>"successful"));
        echo $data;
    }
    else if(mysqli_num_rows ($result) == 0 )
    {
        $data = json_encode(array('response'=>"unsuccessful"));
        echo $data;
    }
    // echo json_encode($data);
?>