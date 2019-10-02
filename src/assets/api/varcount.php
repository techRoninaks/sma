<?php
    require "init.php";
    $prodId = $_POST["prodId"];
    $data = array();
    $sql_query = "SELECT `name`,COUNT(*) AS varCount FROM `variant_info` where prodid = $prodId GROUP by `name`";
    $result = mysqli_query($con1, $sql_query);
    $count=0;
    while($row = mysqli_fetch_assoc($result)){
        $data[$count++] = array('varName' => $row["name"],'varCount' => $row["varCount"]);
    }
    echo json_encode($data);
?>