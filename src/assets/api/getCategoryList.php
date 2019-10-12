<?php
require "init.php";
$sql_query = "SELECT * FROM `category` WHERE `parentid` = 0 ";
$result = mysqli_query($con1, $sql_query);
$count =0;
while($row=mysqli_fetch_assoc($result))
{
        $data[$count++] = array('category_name'=>$row["category"]);
}
echo json_encode($data);
?>