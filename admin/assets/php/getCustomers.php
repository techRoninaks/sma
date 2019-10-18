<?php
    require "init.php";
    $success = "unsuccessful";
    $sql_query = "select * from user";
    $result = mysqli_query($con2, $sql_query);
    $response = array();
    $count = 0;
    while($row = mysqli_fetch_array($result)){
        $success = "successful";
        $response[$count++] = array("id"=>$row["id"],
        "username"=>$row["username"],
        "addr_id"=>$row["addr_id"],
         "name"=>$row["Name"],
         "age"=>$row["age"],
         "email"=>$row["email"],
         "phone"=>$row["phone1"],
         "doj"=>$row["doj"]);
    }
    $result = array("success"=>$success, "result"=>$response);
    echo json_encode(array("data"=>$result));
?>
