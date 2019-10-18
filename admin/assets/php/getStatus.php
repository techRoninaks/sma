<?php

require "init.php";

$success = "unsuccessful";
$sql_query = "select `status` from contact_type;";
$result = mysqli_query($con2, $sql_query);
$response = array();
$count = 0;
while($row = mysqli_fetch_array($result)){
    $success = "successful";
    $response[$count++] = array("status"=>$row[0]);
}
$result = array("success"=>$success, "result"=>$response);
echo json_encode(array("data"=>$result));
?>