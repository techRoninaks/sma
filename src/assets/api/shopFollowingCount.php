<?php
require "init.php";
$data = array();
$id = $_POST["id"];

$sql_query = "SELECT * from follow WHERE userid= $id";

$result = mysqli_query($con2, $sql_query);
while(mysqli_fetch_assoc($result))
{
    $rowcount=mysqli_num_rows($result);
    $data = array('count'=>$rowcount);
}
echo json_encode($data);
?>