<?php
    require "init.php";
    $success = "unsuccessful";
    $sql_query = "select category_id,category,parentid from category order by category_id;";
    $result = mysqli_query($con1, $sql_query);
    $response = array();
    $count = 0;
    while($row = mysqli_fetch_array($result)){
        $success = "successful";
        $response[$count++] = array("id"=>$row["category_id"], "name"=>$row["category"],  "parentid"=>$row["parentid"]);
    }
    $result = array("success"=>$success, "result"=>$response);
    echo json_encode(array("data"=>$result));
?>