<?php
    require "init.php";
    $prodid = $_POST['prodid'];
    $variantArray = json_decode($_POST['variantArray']);

    $varinatType = $variantArray->name;
    $variantValues = $variantArray->value;
    $result = "";

    foreach($variantValues as $val){
        $type = $val->type;
        $price = $val->price;
        $sql_query = "INSERT INTO `variant_info`(`prodid`, `name`, `value`, `price`) VALUES (-99,'$varinatType','$type','$price')";
        $result = mysqli_query($con1, $sql_query);
    }
    if($prodid != 'all'){
        $sql_query = "DELETE FROM `variant_info` WHERE  prodid = $prodid and name like '%$varinatType%'";
        $result = mysqli_query($con1, $sql_query);
    }

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