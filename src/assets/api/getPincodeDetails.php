<?php
require "init.php";
$pin = $_POST['pin'];
$data = array();
$count =0;

$sql_query1 = "SELECT DISTINCT `state`,`division_name` FROM `location` WHERE `pincode` = '$pin'";
$result1 = mysqli_query($con2, $sql_query1);

while($row1=mysqli_fetch_array($result1))
{
        $data[$count] = array('state'=>$row1['state'],'city'=>$row1['division_name']);
        $count++;
}
echo json_encode($data);
?>