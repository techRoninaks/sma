<?php
    require "init.php";
    $success = "unsuccessful";
    $sql_query = "select id,label_text,priority from label order by position_order;";
    $result = mysqli_query($conn, $sql_query);
    $response = array();
    $count = 0;
    while($row = mysqli_fetch_array($result)){
        $success = "successful";
    	// if(strpos($row["name"],"&#32;")!==false){
        //     $row["name"] = str_replace("&#32;"," ",$row["name"]);
        // }
        $response[$count++] = array("id"=>$row["id"], "name"=>$row["label_text"],"priority"=>$row["priority"]);
    }
    $result = array("success"=>$success, "result"=>$response);
    echo json_encode(array("data"=>$result));
?>