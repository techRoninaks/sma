<?php
require "init.php";
$searchTerm = $_POST['searchTerm'];
$sql_query = "SELECT DISTINCT `office_name`,`pincode` FROM `location` WHERE office_name like '%$searchTerm%' OR pincode LIKE '%$searchTerm%' limit 10";
$result = mysqli_query($con2, $sql_query);
$count =0;
$data = array();
// echo $sql_query;
while($row=mysqli_fetch_assoc($result))
{
    $data[] = array('office_name'=>$row["office_name"],'pincode'=>$row["pincode"]);
}
mysqli_close($con1);
mysqli_close($con2);
echo json_encode($data);
?>