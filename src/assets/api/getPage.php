<?php
    header('Content-Type: text/html; charset=utf-8');
    require "init.php";

    $pageName = $_POST["pageName"];

    $sql = "select * from web_settings where page ='$pageName'";
    $result = mysqli_query($con1,$sql);
    $data = array();
    $count = 0;
    // echo $;
    while($row = mysqli_fetch_array($result)){
        $data[$row["name"]] = $row["value"];
    }
    mysqli_close($con1);
    mysqli_close($con2);
    echo json_encode($data);
?>