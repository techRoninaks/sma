<?php
    require "init.php";
    $shopId = $_POST["shopId"];

    $sql_query = "SELECT a.* FROM `address` a WHERE `id` = (SELECT `addr_id` FROM `seller` WHERE `id` = (SELECT `seller_id` FROM `shop_details` WHERE `id` = $shopId )) AND `addr_type` = 'seller'";
    $result = mysqli_query($con2, $sql_query);
    while($row=mysqli_fetch_assoc($result)){
        $data=$row["addr1"].", ".$row["addr2"].", ".$row["city"].", ".$row["district"].", ".$row["state"].", ".$row["country"].", ".$row["pincode"];
    }
    echo json_encode($data);
    
?>