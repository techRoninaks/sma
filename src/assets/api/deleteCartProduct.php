<?php
//deleteCartProduct.php
require "init.php";
$id =$_POST["id"];
$userId = $_POST["userId"];
$data = array();
$sql_query = "DELETE FROM `cart` WHERE prodid = '$id' and user_id = '$userId'";
$result = mysqli_query($con2,$sql_query);
?>