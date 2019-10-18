<?php 


require "init.php";


$position = $_POST['id'];
$sql = "SELECT label_text,priority  FROM `label` where id='$id'";

    $result1 = mysqli_query($conn,$sql);

    $row = mysqli_fetch_array($result1);
    $success = "";
    $result = false;
    $i=1;
    for($row){

    $sql = "Update label SET priority=".$i." WHERE id=".$id;
    $result= mysqli_query($conn,$sql);
    echo $result;
    $i++;

    }

    








?>
