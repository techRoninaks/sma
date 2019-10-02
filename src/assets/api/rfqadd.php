<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $userId = $_POST["userId"];
    $hasImage = $_POST["hasImage"];
    $shopLocation = $_POST["shopLocation"];    
    $note = $_POST["note"];
    $productRef = $_POST["productRef"];
    $data = array();
 
    $sql_query="INSERT INTO `rfq`(`ref_prodid`, `user_id`, `orderid`, `product_name`, `has_image`, `note`) VALUES ($prodId,$userId,0,'$productRef',$hasImage,'$note')";
    $result = mysqli_query($con2, $sql_query);
    echo $sql_query;
    echo $result;

?>
