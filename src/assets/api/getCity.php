<?php
require "init.php";
$state = $_POST['state'];
$data = array();
$count =0;

$sql_query1 = "SELECT DISTINCT `division_name` FROM `location` WHERE `state` = '$state' ORDER by division_name";
$result1 = mysqli_query($con2, $sql_query1);

while($row1=mysqli_fetch_array($result1))
{
        $data[$count] = array('city'=>$row1['division_name']);
        $count++;
}
echo json_encode($data);
?>