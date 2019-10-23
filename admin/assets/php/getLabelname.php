<?php
    require "init.php";
    $success = "unsuccessful";
    $sql_query = "select distinct(label_text) from label;";
    $result = mysqli_query($con1, $sql_query);
    $response = array();
    $count = 0;
    while($row = mysqli_fetch_array($result)){
        $success = "successful";
    	// if(strpos($row["name"],"&#32;")!==false){
        //     $row["name"] = str_replace("&#32;"," ",$row["name"]);
        // }
        $response[$count++] = array( "name"=>$row["label_text"]);
    }
    $result = array("success"=>$success, "result"=>$response);
    echo json_encode(array("data"=>$result));
?>