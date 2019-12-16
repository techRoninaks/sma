<?php
require "init.php";
$sql_query = "SELECT * FROM `category`  WHERE `parentid`=0";
$result = mysqli_query($con1, $sql_query);
$count = 0;
while($row=mysqli_fetch_assoc($result))
{
    $data[$count++] =array('category'=>$row["category"]);
}
mysqli_close($con1);
mysqli_close($con2);
echo json_encode($data);
?>