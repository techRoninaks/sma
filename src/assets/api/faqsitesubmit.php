<?php
    require "init.php";
    $submitFaq=$_POST['submitFaq'];

    $sql="SELECT `type_id` FROM `faq_site` ORDER BY `type_id` limit 1 ";
    $res=mysqli_query($con2,$sql);
    $row=mysqli_fetch_assoc($res);
    $typeId=$row["type_id"];

    $typeId=$typeId-1;

    $sql_query="INSERT INTO `faq_site`(`type_id`, `text`) VALUES ($typeId,'$submitFaq')";
    $result = mysqli_query($con2, $sql_query);
?>