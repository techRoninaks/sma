<?php

require "init.php";

$success = "unsuccessful";
$sql_query = "select * from contact;";
$result = mysqli_query($con2, $sql_query);
$response = array();
$count = 0;
while($row = mysqli_fetch_array($result)){
    $success = "successful";
    $response[$count++] = array("id"=>$row[0], "name"=>$row[1], "phone"=>$row[2], "email"=>$row[3], "purpose"=>$row[4],"note"=>$row[5],"status"=>$row[6]);
}
$result = array("success"=>$success, "result"=>$response);
echo json_encode(array("data"=>$result));
?>