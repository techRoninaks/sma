<?php
    require "init.php";
    $success = "unsuccessful";
    $sql_query = "SELECT * FROM `roles` WHERE 1";
    $result = mysqli_query($con2, $sql_query);
    $response = array();
    $count = 0;
    while($row = mysqli_fetch_array($result)){
        $success = "successful";
        $response[$count++] = array("id"=>$row["id"],
        "role_name"=>$row["role_name"]);
    }
    $result = array("success"=>$success, "result"=>$response);
    echo json_encode(array("data"=>$result));
?>
