<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $data = array();
    $sql_query = "SELECT`title`FROM `prod_message` WHERE `prodid` = $prodId";
    $result = mysqli_query($con1, $sql_query);
    $count=0;
    while ($row = mysqli_fetch_assoc($result)) {
        $data[$count++] = array('title'=>$row["title"]);
    }
    echo json_encode($data);
?>