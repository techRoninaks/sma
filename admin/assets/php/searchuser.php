<?php
require "init.php";
$search_name=$_POST['search_name'];
$success = "successful";
$sql_query ="SELECT id,username,Name,email,phone1,age,doj FROM user WHERE  Name LIKE '%$search_name%'";
$result = mysqli_query($con2, $sql_query);
$response = array();
$count = 0;
while($row = mysqli_fetch_array($result))
{
    $success = "successful";
    $response[$count++] = array("id"=>$row["id"],"username"=>$row["username"],"Name"=>$row["Name"],"email"=>$row["email"],"phone1"=>$row["phone1"],"age"=>$row["age"],"doj"=>$row["doj"]);
}
$result = array("success"=>$success, "result"=>$response);
echo json_encode(array("data"=>$result));
?>