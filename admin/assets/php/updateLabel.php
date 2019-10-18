<?php
	require "init.php";
	header("Content-Type: application/json; charset=UTF-8");
	
	$dataJSON = $_POST["jsonObj"];
    $data = json_decode($dataJSON);
	$data->priority = str_replace(" ","_",$data->priority);
    $data->labelName = str_replace(" ","_",$data->labelName);
	
    $sql = "SELECT label_text,priority  FROM `label` where id='$data->labId'";

    $result1 = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($result1);
    $success = "";
    $result = false;
    
    
    if($row !== NULL){
            $sql = "UPDATE `label` SET `label_text`='$data->labelName',`priority`='$data->priority' where id = '$data->labId'";
            $result = mysqli_query($conn,$sql);
        }
    // echo "-2-".$sql;
    // } else {
    //     $sql = "INSERT INTO `label` (`label_text`,`priority`) VALUES ('$data->labelName','$data->priority]')";
    //     $result = mysqli_query($conn,$sql);
    //     // $sql2 = "SELECT category_id FROM category WHERE name='$data->catName' order by category_id DESC LIMIT 1";
        // $result2 = mysqli_query($conn,$sql2);
        // $row = mysqli_fetch_array($result2);

    // echo "-3-".$sql;
    // echo "-4-".$sql2;
    // echo "-5-".$sql3;
    
    
    // var_dump($result);
    // if($result){
    //     echo '1';
    // }
?>