<?php
require "init.php";
$city = $_POST['city'];
$data = array();
$count =0;

$sql_query1 = "SELECT DISTINCT `pincode` FROM `location` WHERE `division_name` = '$city' ORDER BY pincode";
$result1 = mysqli_query($con2, $sql_query1);

while($row1=mysqli_fetch_array($result1))
{
        $data[$count] = array('pin'=>$row1['pincode']);
        $count++;
}
mysqli_close($con1);
mysqli_close($con2);
echo json_encode($data);
?>