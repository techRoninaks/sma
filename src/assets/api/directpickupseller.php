<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $data = array();
    $sql_query = "SELECT a.* FROM `address` a WHERE `id` = (SELECT `addr_id` FROM `seller` WHERE `id` = (SELECT `seller_id` FROM `shop_details` WHERE `id` = $shopId )) AND `addr_type` = 'seller'";
    // echo $sql_query;
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data=$row["addr2"].", ".$row["pincode"];
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
    
?>