<?php
    require "init.php";
    $sellerid = $_POST['sellerid'];
    $data = array();
    $count = 0;
    $sql_query = "SELECT COUNT(*) FROM smapr.`offer` as o INNER JOIN smapr.product as p ON o.prodid = p.prodid JOIN smausr.shop_details as s ON p.shop_id = s.id JOIN smausr.seller as sl on s.seller_id = sl.id AND sl.id = $sellerid ";
    $result = mysqli_query($con1, $sql_query);
    $row=mysqli_fetch_assoc($result);
    $offerCount = $row['COUNT(*)'];


    echo json_encode($offerCount);
    
?>  