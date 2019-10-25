<?php
    require "init.php";
    $success = "unsuccessful";
    $sql_query = "select distinct(category_id ) from category order by category_id asc;";
    $result = mysqli_query($con1, $sql_query);
    $response = array();
    $count = 0;
    while($row = mysqli_fetch_array($result)){
        $success = "successful";
        $response[$count++] = array("parentid"=>$row["category_id"]);
    }
    $result = array("success"=>$success, "result"=>$response);
    echo json_encode(array("data"=>$result));
?>