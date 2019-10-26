<?php
    require 'init.php';
    header("Content-Type: application/json; charset=UTF-8");
	
	$id = $_POST["id"];
    $sql = "SELECT * FROM `label` WHERE `id`=$id";
    $result = mysqli_query($con1,$sql);
    $row = mysqli_fetch_array($result);
    if($row){
        $userData = array("labelName"=>$row["label_text"],"priority"=>$row["priority"],"labId"=>$row["id"]);
        $jsonData = json_encode($userData);
        echo $jsonData;
	} else {
	    echo "0";
	}
?>