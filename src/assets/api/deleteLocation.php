<?php
require "init.php";
$id = $_POST['id'];

$sql_query = "DELETE FROM `shipping_location_shop` WHERE `id` = $id";
$result = mysqli_query($con2, $sql_query);

mysqli_close($con1);
mysqli_close($con2);
?>