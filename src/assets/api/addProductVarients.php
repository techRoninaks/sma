<?php
    require "init.php";
    $varientName = $_POST['varientName'];
    $varientOne = $_POST['varientOne'];
    $varientTwo = $_POST['varientTwo'];
    $varientThree = $_POST['varientThree'];
    $varientFour = $_POST['varientFour'];
    $varientFive = $_POST['varientFive'];
    $varientSix = $_POST['varientSix'];
    $priceOne = $_POST['priceOne'];
    $priceTwo = $_POST['priceTwo'];
    $priceSix = $_POST['priceSix'];
    $priceThree = $_POST['priceThree'];
    $priceFour = $_POST['priceFour'];
    $priceFive = $_POST['priceFive'];
    $sql_query = " INSERT INTO `variant_info`(`prodid`, `name`, `value`, `price`) VALUES ('-99','$varientName','$varientOne','$priceOne')";
    $result = mysqli_query($con1, $sql_query);
    if($varientTwo !==""){
        $sql_query = " INSERT INTO `variant_info`(`prodid`, `name`, `value`, `price`) VALUES ('-99','$varientName','$varientTwo','$priceTwo')";
        $result = mysqli_query($con1, $sql_query);
    }
    if($varientThree !==""){
        $sql_query = " INSERT INTO `variant_info`(`prodid`, `name`, `value`, `price`) VALUES ('-99','$varientName','$varientThree','$priceThree')";
        $result = mysqli_query($con1, $sql_query);
    }
    if($varientFour !==""){
        $sql_query = " INSERT INTO `variant_info`(`prodid`, `name`, `value`, `price`) VALUES ('-99','$varientName','$varientFour','$priceFour')";
        $result = mysqli_query($con1, $sql_query);
    }
    if($varientFive !==""){
        $sql_query = " INSERT INTO `variant_info`(`prodid`, `name`, `value`, `price`) VALUES ('-99','$varientName','$varientFive','$priceFive')";
        $result = mysqli_query($con1, $sql_query);
    }
    if($varientSix !==""){
        $sql_query = " INSERT INTO `variant_info`(`prodid`, `name`, `value`, `price`) VALUES ('-99','$varientName','$varientSix','$priceSix')";
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