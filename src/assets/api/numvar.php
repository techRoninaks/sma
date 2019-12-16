<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $data = array();
    $sql_query = "SELECT count(DISTINCT(name)) FROM `variant_info` where prodid = $prodId  ";
    $result = mysqli_query($con1, $sql_query);
    $row = mysqli_fetch_assoc($result);
    $data["numberOfVarients"] = array('numVar' => $row["count(DISTINCT(name))"]);
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>