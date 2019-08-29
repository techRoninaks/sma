<?php
    header('Content-Type: text/html; charset=utf-8');
    require "init.php";

    $pageName = $_POST["pageName"];

    $sql = "select * from web_settings where page ='$pageName'";
    $result = mysqli_query($con,$sql);
    $data = array();
    $count = 0;
    // echo $;
    while($row = mysqli_fetch_array($result)){
        $data[$row["name"]] = $row["value"];
    }
    echo json_encode($data);
?>