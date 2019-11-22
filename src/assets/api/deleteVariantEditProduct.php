<?php
    require "init.php";
    $variant = $_POST['variant'];
    $prodid = $_POST['prodid'];
    $sendstatus ="unanswered";
    $sql_query = "DELETE FROM `variant_info` WHERE `prodid` = $prodid and `name` LIKE '%$variant%' ";
    echo $sql_query;
    // $result = mysqli_query($con1, $sql_query);
?>