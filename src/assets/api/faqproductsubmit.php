<?php
    require "init.php";
    $prodId =$_POST["prodId"];
    $submitFaq=$_POST['submitFaq'];
    $userId =$_POST["userId"];

    $sql="SELECT `type_id` FROM `faq` where `prodid` =$prodId ORDER BY `type_id` limit 1  ";
    $res=mysqli_query($con1,$sql);
    $row=mysqli_fetch_assoc($res);
    $typeId=$row["type_id"];

    $typeId=$typeId-1;

    $sql_query="INSERT INTO `faq`(`prodid`,`type_id`, `text`) VALUES ($prodId,$typeId,'$submitFaq')";
    $result = mysqli_query($con1, $sql_query);

    $faqArr = array("faq","prod_id",$prodId,"faq_id",$typeId);
    $faq = implode("!~!",$faqArr);

    $sql_notif="INSERT INTO `notification`(`userid`, `message`, `prodid`, `type`) VALUES ($userId,'$faq',$prodId,'new question')";
    $result = mysqli_query($con2, $sql_notif);
?>