<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $val = $_POST["val"];
    $data = array();

    $sql_query = "UPDATE `shop_details` SET `private_acc`=$val WHERE `id`=$shopId";
    $result = mysqli_query($con2, $sql_query);
    mysqli_close($con1);
    mysqli_close($con2);
    echo $result;

?>
