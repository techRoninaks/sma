<?php
require "init.php";
$pincode = $_POST['pincode'];
$sql_query = "SELECT DISTINCT(division_name) FROM `location` WHERE pincode = '$pincode'";
$result = mysqli_query($con2, $sql_query);
$count =0;
while($row=mysqli_fetch_assoc($result))
{
        $data[$count++] = array('city'=>$row["division_name"]);
}
mysqli_close($con1);
mysqli_close($con2);
echo json_encode($data);
?>