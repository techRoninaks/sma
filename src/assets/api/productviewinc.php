<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $data = array();

    $sql_query = "UPDATE `product` SET `returning_customers_count`=`returning_customers_count`+1,`product_view_count`=`product_view_count`+1 WHERE prodid=$prodId";
    $result = mysqli_query($con1, $sql_query);

    echo $result;

?>
