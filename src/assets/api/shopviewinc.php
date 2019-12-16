<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $data = array();

    $sql_query = "UPDATE `shop_details` SET `returning_customers_count`=`returning_customers_count`+1,`shop_view_count`=`shop_view_count`+1 WHERE id =$shopId";
    $result = mysqli_query($con2, $sql_query);
    mysqli_close($con1);
    mysqli_close($con2);
    echo $result;

?>
