<?php
    require "init.php";
    $submitFaq=$_POST['submitFaq'];
    $shopId =$_POST["shopId"];

    $sql="SELECT `type_id` FROM `faq_shop` where `shop_id` =$shopId ORDER BY `type_id` limit 1  ";
    $res=mysqli_query($con2,$sql);
    $row=mysqli_fetch_assoc($res);
    $typeId=$row["type_id"];

    $typeId=$typeId-1;

    $sql_query="INSERT INTO `faq_shop`(`shop_id`,`type_id`, `text`) VALUES ($shopId, $typeId,'$submitFaq')";
    $result = mysqli_query($con2, $sql_query);
?>