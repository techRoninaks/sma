<?php

require "init.php";
$status = $_POST["status"];
$id = $_POST["id"];
$note = $_POST["note"];
$date = $_POST["date"];
$success = "unsuccessful";
$sql_query = "UPDATE `contact` SET status = '$status', note = '$note', date = '$date' WHERE id = $id ";
if (mysqli_query($con2, $sql_query)){
    $success = "successful";
}
echo json_encode(array("success"=>$success));
?>