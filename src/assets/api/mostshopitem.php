<?php
    require "init.php";
    $shopId = $_POST["shopId"];
    $data = array();

    $sql_query = "SELECT `name` FROM `product` WHERE shop_id=$shopId ORDER BY `sold_count` desc";
    $result = mysqli_query($con1, $sql_query);
    $count=0;
    while($row=mysqli_fetch_array($result)){
        $data[$count++]=array('name'=>$row["name"]);
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>
