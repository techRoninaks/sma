<?php
	require "init.php";
	header("Content-Type: application/json; charset=UTF-8");
	
	$dataJSON = $_POST["jsonObj"];
    $data = json_decode($dataJSON);
	$data->parentid = str_replace(" ","_",$data->parentid);
    $data->catName = str_replace(" ","_",$data->catName);
	
	$sql = "SELECT category,parentid FROM `category` where category_id='$data->catId'";
    $result1 = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($result1);
    echo $sql;
    $success = "";
    $result = false;
    
    
    if($row != NULL){
        if($success){
            $sql = "UPDATE `category` SET `category`='$data->catName',`parentid`='$data->parentid' where category_id = '$data->catId'";
            $result = mysqli_query($conn,$sql);
            echo $result;
        }
         else {
            $sql = "UPDATE `category` SET `category`='$data->catName',`parentid`='$data->parentid' where category_id = '$data->catId'";
            $result = mysqli_query($conn,$sql);
            echo $result;
            
        
        }
    }  
     
     else {
         # code...
     
        $sql = "INSERT INTO `category` (`category`,`parentid`) VALUES ('$data->catName','$data->parentid')";
        $result = mysqli_query($conn,$sql);
        echo $result;
     }

           
    
    
?>