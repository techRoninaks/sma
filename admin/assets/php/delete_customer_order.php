<?php
    require 'init.php';
    header("Content-Type: application/json; charset=UTF-8");
	
	$id = $_POST["id"];
    $sql = "DELETE FROM `purchase_order` WHERE orderid=$id";
    $result = mysqli_query($con2,$sql);
    if(!$result){
        echo "0";
    }
?>